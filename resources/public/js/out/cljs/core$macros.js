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
var args__9620__auto__ = [];
var len__9613__auto___19018 = arguments.length;
var i__9614__auto___19019 = (0);
while(true){
if((i__9614__auto___19019 < len__9613__auto___19018)){
args__9620__auto__.push((arguments[i__9614__auto___19019]));

var G__19020 = (i__9614__auto___19019 + (1));
i__9614__auto___19019 = G__19020;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})());
var G__19021 = threaded;
var G__19022 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19021;
forms__$1 = G__19022;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq19014){
var G__19015 = cljs.core.first.call(null,seq19014);
var seq19014__$1 = cljs.core.next.call(null,seq19014);
var G__19016 = cljs.core.first.call(null,seq19014__$1);
var seq19014__$2 = cljs.core.next.call(null,seq19014__$1);
var G__19017 = cljs.core.first.call(null,seq19014__$2);
var seq19014__$3 = cljs.core.next.call(null,seq19014__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19015,G__19016,G__19017,seq19014__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19027 = arguments.length;
var i__9614__auto___19028 = (0);
while(true){
if((i__9614__auto___19028 < len__9613__auto___19027)){
args__9620__auto__.push((arguments[i__9614__auto___19028]));

var G__19029 = (i__9614__auto___19028 + (1));
i__9614__auto___19028 = G__19029;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__9342__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})());
var G__19030 = threaded;
var G__19031 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19030;
forms__$1 = G__19031;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq19023){
var G__19024 = cljs.core.first.call(null,seq19023);
var seq19023__$1 = cljs.core.next.call(null,seq19023);
var G__19025 = cljs.core.first.call(null,seq19023__$1);
var seq19023__$2 = cljs.core.next.call(null,seq19023__$1);
var G__19026 = cljs.core.first.call(null,seq19023__$2);
var seq19023__$3 = cljs.core.next.call(null,seq19023__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19024,G__19025,G__19026,seq19023__$3);
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
var args19032 = [];
var len__9613__auto___19040 = arguments.length;
var i__9614__auto___19041 = (0);
while(true){
if((i__9614__auto___19041 < len__9613__auto___19040)){
args19032.push((arguments[i__9614__auto___19041]));

var G__19042 = (i__9614__auto___19041 + (1));
i__9614__auto___19041 = G__19042;
continue;
} else {
}
break;
}

var G__19039 = args19032.length;
switch (G__19039) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19032.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq19033){
var G__19034 = cljs.core.first.call(null,seq19033);
var seq19033__$1 = cljs.core.next.call(null,seq19033);
var G__19035 = cljs.core.first.call(null,seq19033__$1);
var seq19033__$2 = cljs.core.next.call(null,seq19033__$1);
var G__19036 = cljs.core.first.call(null,seq19033__$2);
var seq19033__$3 = cljs.core.next.call(null,seq19033__$2);
var G__19037 = cljs.core.first.call(null,seq19033__$3);
var seq19033__$4 = cljs.core.next.call(null,seq19033__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__19034,G__19035,G__19036,G__19037,seq19033__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19047 = arguments.length;
var i__9614__auto___19048 = (0);
while(true){
if((i__9614__auto___19048 < len__9613__auto___19047)){
args__9620__auto__.push((arguments[i__9614__auto___19048]));

var G__19049 = (i__9614__auto___19048 + (1));
i__9614__auto___19048 = G__19049;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq19044){
var G__19045 = cljs.core.first.call(null,seq19044);
var seq19044__$1 = cljs.core.next.call(null,seq19044);
var G__19046 = cljs.core.first.call(null,seq19044__$1);
var seq19044__$2 = cljs.core.next.call(null,seq19044__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__19045,G__19046,seq19044__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19053 = arguments.length;
var i__9614__auto___19054 = (0);
while(true){
if((i__9614__auto___19054 < len__9613__auto___19053)){
args__9620__auto__.push((arguments[i__9614__auto___19054]));

var G__19055 = (i__9614__auto___19054 + (1));
i__9614__auto___19054 = G__19055;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__9342__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$2);
})(),x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq19050){
var G__19051 = cljs.core.first.call(null,seq19050);
var seq19050__$1 = cljs.core.next.call(null,seq19050);
var G__19052 = cljs.core.first.call(null,seq19050__$1);
var seq19050__$2 = cljs.core.next.call(null,seq19050__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__19051,G__19052,seq19050__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19060 = arguments.length;
var i__9614__auto___19061 = (0);
while(true){
if((i__9614__auto___19061 < len__9613__auto___19060)){
args__9620__auto__.push((arguments[i__9614__auto___19061]));

var G__19062 = (i__9614__auto___19061 + (1));
i__9614__auto___19061 = G__19062;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__19056_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.vary_meta.call(null,p1__19056_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq19057){
var G__19058 = cljs.core.first.call(null,seq19057);
var seq19057__$1 = cljs.core.next.call(null,seq19057);
var G__19059 = cljs.core.first.call(null,seq19057__$1);
var seq19057__$2 = cljs.core.next.call(null,seq19057__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__19058,G__19059,seq19057__$2);
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
var args__9620__auto__ = [];
var len__9613__auto___19067 = arguments.length;
var i__9614__auto___19068 = (0);
while(true){
if((i__9614__auto___19068 < len__9613__auto___19067)){
args__9620__auto__.push((arguments[i__9614__auto___19068]));

var G__19069 = (i__9614__auto___19068 + (1));
i__9614__auto___19068 = G__19069;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9342__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq19063){
var G__19064 = cljs.core.first.call(null,seq19063);
var seq19063__$1 = cljs.core.next.call(null,seq19063);
var G__19065 = cljs.core.first.call(null,seq19063__$1);
var seq19063__$2 = cljs.core.next.call(null,seq19063__$1);
var G__19066 = cljs.core.first.call(null,seq19063__$2);
var seq19063__$3 = cljs.core.next.call(null,seq19063__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__19064,G__19065,G__19066,seq19063__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__19070 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__19071 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__19070;
s = G__19071;
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
return (function (p__19076){
var vec__19077 = p__19076;
var t = cljs.core.nth.call(null,vec__19077,(0),null);
var fs = cljs.core.nth.call(null,vec__19077,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9342__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___19084 = arguments.length;
var i__9614__auto___19085 = (0);
while(true){
if((i__9614__auto___19085 < len__9613__auto___19084)){
args__9620__auto__.push((arguments[i__9614__auto___19085]));

var G__19086 = (i__9614__auto___19085 + (1));
i__9614__auto___19085 = G__19086;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq19080){
var G__19081 = cljs.core.first.call(null,seq19080);
var seq19080__$1 = cljs.core.next.call(null,seq19080);
var G__19082 = cljs.core.first.call(null,seq19080__$1);
var seq19080__$2 = cljs.core.next.call(null,seq19080__$1);
var G__19083 = cljs.core.first.call(null,seq19080__$2);
var seq19080__$3 = cljs.core.next.call(null,seq19080__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__19081,G__19082,G__19083,seq19080__$3);
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
var G__19087 = cljs.core.next.call(null,params__$1);
var G__19088 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__19089 = lets;
params__$1 = G__19087;
new_params = G__19088;
lets = G__19089;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__19090 = cljs.core.next.call(null,params__$1);
var G__19091 = cljs.core.conj.call(null,new_params,gparam);
var G__19092 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__19090;
new_params = G__19091;
lets = G__19092;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___19099 = arguments.length;
var i__9614__auto___19100 = (0);
while(true){
if((i__9614__auto___19100 < len__9613__auto___19099)){
args__9620__auto__.push((arguments[i__9614__auto___19100]));

var G__19101 = (i__9614__auto___19100 + (1));
i__9614__auto___19100 = G__19101;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__9342__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__19096 = sig;
var seq__19097 = cljs.core.seq.call(null,vec__19096);
var first__19098 = cljs.core.first.call(null,seq__19097);
var seq__19097__$1 = cljs.core.next.call(null,seq__19097);
var params = first__19098;
var body = seq__19097__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__8505__auto__ = conds;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__9342__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.map.call(null,((function (vec__19096,seq__19097,first__19098,seq__19097__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9342__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(vec__19096,seq__19097,first__19098,seq__19097__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__19096,seq__19097,first__19098,seq__19097__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9342__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(vec__19096,seq__19097,first__19098,seq__19097__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq19093){
var G__19094 = cljs.core.first.call(null,seq19093);
var seq19093__$1 = cljs.core.next.call(null,seq19093);
var G__19095 = cljs.core.first.call(null,seq19093__$1);
var seq19093__$2 = cljs.core.next.call(null,seq19093__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__19094,G__19095,seq19093__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19106 = arguments.length;
var i__9614__auto___19107 = (0);
while(true){
if((i__9614__auto___19107 < len__9613__auto___19106)){
args__9620__auto__.push((arguments[i__9614__auto___19107]));

var G__19108 = (i__9614__auto___19107 + (1));
i__9614__auto___19107 = G__19108;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq19102){
var G__19103 = cljs.core.first.call(null,seq19102);
var seq19102__$1 = cljs.core.next.call(null,seq19102);
var G__19104 = cljs.core.first.call(null,seq19102__$1);
var seq19102__$2 = cljs.core.next.call(null,seq19102__$1);
var G__19105 = cljs.core.first.call(null,seq19102__$2);
var seq19102__$3 = cljs.core.next.call(null,seq19102__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__19103,G__19104,G__19105,seq19102__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args19110 = [];
var len__9613__auto___19119 = arguments.length;
var i__9614__auto___19120 = (0);
while(true){
if((i__9614__auto___19120 < len__9613__auto___19119)){
args19110.push((arguments[i__9614__auto___19120]));

var G__19121 = (i__9614__auto___19120 + (1));
i__9614__auto___19120 = G__19121;
continue;
} else {
}
break;
}

var G__19118 = args19110.length;
switch (G__19118) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19110.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9632__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9342__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19109__auto__","temp__19109__auto__",-116571834,null)),(function (){var x__9342__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19109__auto__","temp__19109__auto__",-116571834,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19109__auto__","temp__19109__auto__",-116571834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq19111){
var G__19112 = cljs.core.first.call(null,seq19111);
var seq19111__$1 = cljs.core.next.call(null,seq19111);
var G__19113 = cljs.core.first.call(null,seq19111__$1);
var seq19111__$2 = cljs.core.next.call(null,seq19111__$1);
var G__19114 = cljs.core.first.call(null,seq19111__$2);
var seq19111__$3 = cljs.core.next.call(null,seq19111__$2);
var G__19115 = cljs.core.first.call(null,seq19111__$3);
var seq19111__$4 = cljs.core.next.call(null,seq19111__$3);
var G__19116 = cljs.core.first.call(null,seq19111__$4);
var seq19111__$5 = cljs.core.next.call(null,seq19111__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__19112,G__19113,G__19114,G__19115,G__19116,seq19111__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args19123 = [];
var len__9613__auto___19126 = arguments.length;
var i__9614__auto___19127 = (0);
while(true){
if((i__9614__auto___19127 < len__9613__auto___19126)){
args19123.push((arguments[i__9614__auto___19127]));

var G__19128 = (i__9614__auto___19127 + (1));
i__9614__auto___19127 = G__19128;
continue;
} else {
}
break;
}

var G__19125 = args19123.length;
switch (G__19125) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args19123.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___19135 = arguments.length;
var i__9614__auto___19136 = (0);
while(true){
if((i__9614__auto___19136 < len__9613__auto___19135)){
args__9620__auto__.push((arguments[i__9614__auto___19136]));

var G__19137 = (i__9614__auto___19136 + (1));
i__9614__auto___19136 = G__19137;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__19130_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__19130_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq19131){
var G__19132 = cljs.core.first.call(null,seq19131);
var seq19131__$1 = cljs.core.next.call(null,seq19131);
var G__19133 = cljs.core.first.call(null,seq19131__$1);
var seq19131__$2 = cljs.core.next.call(null,seq19131__$1);
var G__19134 = cljs.core.first.call(null,seq19131__$2);
var seq19131__$3 = cljs.core.next.call(null,seq19131__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__19132,G__19133,G__19134,seq19131__$3);
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
var args__9620__auto__ = [];
var len__9613__auto___19142 = arguments.length;
var i__9614__auto___19143 = (0);
while(true){
if((i__9614__auto___19143 < len__9613__auto___19142)){
args__9620__auto__.push((arguments[i__9614__auto___19143]));

var G__19144 = (i__9614__auto___19143 + (1));
i__9614__auto___19143 = G__19144;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq19138){
var G__19139 = cljs.core.first.call(null,seq19138);
var seq19138__$1 = cljs.core.next.call(null,seq19138);
var G__19140 = cljs.core.first.call(null,seq19138__$1);
var seq19138__$2 = cljs.core.next.call(null,seq19138__$1);
var G__19141 = cljs.core.first.call(null,seq19138__$2);
var seq19138__$3 = cljs.core.next.call(null,seq19138__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__19139,G__19140,G__19141,seq19138__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19149 = arguments.length;
var i__9614__auto___19150 = (0);
while(true){
if((i__9614__auto___19150 < len__9613__auto___19149)){
args__9620__auto__.push((arguments[i__9614__auto___19150]));

var G__19151 = (i__9614__auto___19150 + (1));
i__9614__auto___19150 = G__19151;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq19145){
var G__19146 = cljs.core.first.call(null,seq19145);
var seq19145__$1 = cljs.core.next.call(null,seq19145);
var G__19147 = cljs.core.first.call(null,seq19145__$1);
var seq19145__$2 = cljs.core.next.call(null,seq19145__$1);
var G__19148 = cljs.core.first.call(null,seq19145__$2);
var seq19145__$3 = cljs.core.next.call(null,seq19145__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__19146,G__19147,G__19148,seq19145__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19160 = arguments.length;
var i__9614__auto___19161 = (0);
while(true){
if((i__9614__auto___19161 < len__9613__auto___19160)){
args__9620__auto__.push((arguments[i__9614__auto___19161]));

var G__19162 = (i__9614__auto___19161 + (1));
i__9614__auto___19161 = G__19162;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
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


var vec__19157 = bindings;
var x = cljs.core.nth.call(null,vec__19157,(0),null);
var xs = cljs.core.nth.call(null,vec__19157,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19152__auto__","xs__19152__auto__",1760153665,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9342__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19152__auto__","xs__19152__auto__",1760153665,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq19153){
var G__19154 = cljs.core.first.call(null,seq19153);
var seq19153__$1 = cljs.core.next.call(null,seq19153);
var G__19155 = cljs.core.first.call(null,seq19153__$1);
var seq19153__$2 = cljs.core.next.call(null,seq19153__$1);
var G__19156 = cljs.core.first.call(null,seq19153__$2);
var seq19153__$3 = cljs.core.next.call(null,seq19153__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__19154,G__19155,G__19156,seq19153__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19168 = arguments.length;
var i__9614__auto___19169 = (0);
while(true){
if((i__9614__auto___19169 < len__9613__auto___19168)){
args__9620__auto__.push((arguments[i__9614__auto___19169]));

var G__19170 = (i__9614__auto___19169 + (1));
i__9614__auto___19169 = G__19170;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19163__auto__","temp__19163__auto__",-305992325,null)),(function (){var x__9342__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19163__auto__","temp__19163__auto__",-305992325,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19163__auto__","temp__19163__auto__",-305992325,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq19164){
var G__19165 = cljs.core.first.call(null,seq19164);
var seq19164__$1 = cljs.core.next.call(null,seq19164);
var G__19166 = cljs.core.first.call(null,seq19164__$1);
var seq19164__$2 = cljs.core.next.call(null,seq19164__$1);
var G__19167 = cljs.core.first.call(null,seq19164__$2);
var seq19164__$3 = cljs.core.next.call(null,seq19164__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__19165,G__19166,G__19167,seq19164__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19175 = arguments.length;
var i__9614__auto___19176 = (0);
while(true){
if((i__9614__auto___19176 < len__9613__auto___19175)){
args__9620__auto__.push((arguments[i__9614__auto___19176]));

var G__19177 = (i__9614__auto___19176 + (1));
i__9614__auto___19176 = G__19177;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),null),x__9342__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq19171){
var G__19172 = cljs.core.first.call(null,seq19171);
var seq19171__$1 = cljs.core.next.call(null,seq19171);
var G__19173 = cljs.core.first.call(null,seq19171__$1);
var seq19171__$2 = cljs.core.next.call(null,seq19171__$1);
var G__19174 = cljs.core.first.call(null,seq19171__$2);
var seq19171__$3 = cljs.core.next.call(null,seq19171__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__19172,G__19173,G__19174,seq19171__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19182 = arguments.length;
var i__9614__auto___19183 = (0);
while(true){
if((i__9614__auto___19183 < len__9613__auto___19182)){
args__9620__auto__.push((arguments[i__9614__auto___19183]));

var G__19184 = (i__9614__auto___19183 + (1));
i__9614__auto___19183 = G__19184;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq19178){
var G__19179 = cljs.core.first.call(null,seq19178);
var seq19178__$1 = cljs.core.next.call(null,seq19178);
var G__19180 = cljs.core.first.call(null,seq19178__$1);
var seq19178__$2 = cljs.core.next.call(null,seq19178__$1);
var G__19181 = cljs.core.first.call(null,seq19178__$2);
var seq19178__$3 = cljs.core.next.call(null,seq19178__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__19179,G__19180,G__19181,seq19178__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19193 = arguments.length;
var i__9614__auto___19194 = (0);
while(true){
if((i__9614__auto___19194 < len__9613__auto___19193)){
args__9620__auto__.push((arguments[i__9614__auto___19194]));

var G__19195 = (i__9614__auto___19194 + (1));
i__9614__auto___19194 = G__19195;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__19189){
var vec__19190 = p__19189;
var test = cljs.core.nth.call(null,vec__19190,(0),null);
var step = cljs.core.nth.call(null,vec__19190,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq19185){
var G__19186 = cljs.core.first.call(null,seq19185);
var seq19185__$1 = cljs.core.next.call(null,seq19185);
var G__19187 = cljs.core.first.call(null,seq19185__$1);
var seq19185__$2 = cljs.core.next.call(null,seq19185__$1);
var G__19188 = cljs.core.first.call(null,seq19185__$2);
var seq19185__$3 = cljs.core.next.call(null,seq19185__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19186,G__19187,G__19188,seq19185__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19204 = arguments.length;
var i__9614__auto___19205 = (0);
while(true){
if((i__9614__auto___19205 < len__9613__auto___19204)){
args__9620__auto__.push((arguments[i__9614__auto___19205]));

var G__19206 = (i__9614__auto___19205 + (1));
i__9614__auto___19205 = G__19206;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__19200){
var vec__19201 = p__19200;
var test = cljs.core.nth.call(null,vec__19201,(0),null);
var step = cljs.core.nth.call(null,vec__19201,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq19196){
var G__19197 = cljs.core.first.call(null,seq19196);
var seq19196__$1 = cljs.core.next.call(null,seq19196);
var G__19198 = cljs.core.first.call(null,seq19196__$1);
var seq19196__$2 = cljs.core.next.call(null,seq19196__$1);
var G__19199 = cljs.core.first.call(null,seq19196__$2);
var seq19196__$3 = cljs.core.next.call(null,seq19196__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19197,G__19198,G__19199,seq19196__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19212 = arguments.length;
var i__9614__auto___19213 = (0);
while(true){
if((i__9614__auto___19213 < len__9613__auto___19212)){
args__9620__auto__.push((arguments[i__9614__auto___19213]));

var G__19214 = (i__9614__auto___19213 + (1));
i__9614__auto___19213 = G__19214;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((4) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9621__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq19207){
var G__19208 = cljs.core.first.call(null,seq19207);
var seq19207__$1 = cljs.core.next.call(null,seq19207);
var G__19209 = cljs.core.first.call(null,seq19207__$1);
var seq19207__$2 = cljs.core.next.call(null,seq19207__$1);
var G__19210 = cljs.core.first.call(null,seq19207__$2);
var seq19207__$3 = cljs.core.next.call(null,seq19207__$2);
var G__19211 = cljs.core.first.call(null,seq19207__$3);
var seq19207__$4 = cljs.core.next.call(null,seq19207__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19208,G__19209,G__19210,G__19211,seq19207__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19219 = arguments.length;
var i__9614__auto___19220 = (0);
while(true){
if((i__9614__auto___19220 < len__9613__auto___19219)){
args__9620__auto__.push((arguments[i__9614__auto___19220]));

var G__19221 = (i__9614__auto___19220 + (1));
i__9614__auto___19220 = G__19221;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq19215){
var G__19216 = cljs.core.first.call(null,seq19215);
var seq19215__$1 = cljs.core.next.call(null,seq19215);
var G__19217 = cljs.core.first.call(null,seq19215__$1);
var seq19215__$2 = cljs.core.next.call(null,seq19215__$1);
var G__19218 = cljs.core.first.call(null,seq19215__$2);
var seq19215__$3 = cljs.core.next.call(null,seq19215__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19216,G__19217,G__19218,seq19215__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19226 = arguments.length;
var i__9614__auto___19227 = (0);
while(true){
if((i__9614__auto___19227 < len__9613__auto___19226)){
args__9620__auto__.push((arguments[i__9614__auto___19227]));

var G__19228 = (i__9614__auto___19227 + (1));
i__9614__auto___19227 = G__19228;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq19222){
var G__19223 = cljs.core.first.call(null,seq19222);
var seq19222__$1 = cljs.core.next.call(null,seq19222);
var G__19224 = cljs.core.first.call(null,seq19222__$1);
var seq19222__$2 = cljs.core.next.call(null,seq19222__$1);
var G__19225 = cljs.core.first.call(null,seq19222__$2);
var seq19222__$3 = cljs.core.next.call(null,seq19222__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19223,G__19224,G__19225,seq19222__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args19230 = [];
var len__9613__auto___19239 = arguments.length;
var i__9614__auto___19240 = (0);
while(true){
if((i__9614__auto___19240 < len__9613__auto___19239)){
args19230.push((arguments[i__9614__auto___19240]));

var G__19241 = (i__9614__auto___19240 + (1));
i__9614__auto___19240 = G__19241;
continue;
} else {
}
break;
}

var G__19238 = args19230.length;
switch (G__19238) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19230.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9632__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__9342__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19229__auto__","temp__19229__auto__",509523668,null)),(function (){var x__9342__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19229__auto__","temp__19229__auto__",509523668,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19229__auto__","temp__19229__auto__",509523668,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq19231){
var G__19232 = cljs.core.first.call(null,seq19231);
var seq19231__$1 = cljs.core.next.call(null,seq19231);
var G__19233 = cljs.core.first.call(null,seq19231__$1);
var seq19231__$2 = cljs.core.next.call(null,seq19231__$1);
var G__19234 = cljs.core.first.call(null,seq19231__$2);
var seq19231__$3 = cljs.core.next.call(null,seq19231__$2);
var G__19235 = cljs.core.first.call(null,seq19231__$3);
var seq19231__$4 = cljs.core.next.call(null,seq19231__$3);
var G__19236 = cljs.core.first.call(null,seq19231__$4);
var seq19231__$5 = cljs.core.next.call(null,seq19231__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__19232,G__19233,G__19234,G__19235,G__19236,seq19231__$5);
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
var args__9620__auto__ = [];
var len__9613__auto___19248 = arguments.length;
var i__9614__auto___19249 = (0);
while(true){
if((i__9614__auto___19249 < len__9613__auto___19248)){
args__9620__auto__.push((arguments[i__9614__auto___19249]));

var G__19250 = (i__9614__auto___19249 + (1));
i__9614__auto___19249 = G__19250;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19243__auto__","temp__19243__auto__",420311616,null)),(function (){var x__9342__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19243__auto__","temp__19243__auto__",420311616,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19243__auto__","temp__19243__auto__",420311616,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq19244){
var G__19245 = cljs.core.first.call(null,seq19244);
var seq19244__$1 = cljs.core.next.call(null,seq19244);
var G__19246 = cljs.core.first.call(null,seq19244__$1);
var seq19244__$2 = cljs.core.next.call(null,seq19244__$1);
var G__19247 = cljs.core.first.call(null,seq19244__$2);
var seq19244__$3 = cljs.core.next.call(null,seq19244__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__19245,G__19246,G__19247,seq19244__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__19251_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__19251_SHARP_)){
return cljs.core.first.call(null,p1__19251_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__19251_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__19251_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__19252_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__19252_SHARP_);
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
var G__19253 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__19254 = cljs.core.next.call(null,fdecls);
ret = G__19253;
fdecls = G__19254;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__9342__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__9342__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var G__19264 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__19265 = n;
var G__19266 = cljs.core.nnext.call(null,bs);
var G__19267 = true;
ret = G__19264;
n = G__19265;
bs = G__19266;
seen_rest_QMARK_ = G__19267;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__19268 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9342__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9342__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__9342__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__19269 = (n + (1));
var G__19270 = cljs.core.next.call(null,bs);
var G__19271 = seen_rest_QMARK_;
ret = G__19268;
n = G__19269;
bs = G__19270;
seen_rest_QMARK_ = G__19271;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__9342__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__9342__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__19255_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__8505__auto__ = mkns;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core.namespace.call(null,p1__19255_SHARP_);
}
})(),cljs.core.name.call(null,p1__19255_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__19256_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.symbol.call(null,(function (){var or__8505__auto__ = mkns;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
} else {
return cljs.core.namespace.call(null,p1__19256_SHARP_);
}
})(),cljs.core.name.call(null,p1__19256_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return (function (p1__19257_SHARP_,p2__19258_SHARP_){
return cljs.core.assoc.call(null,p1__19257_SHARP_,p2__19258_SHARP_,cljs.core.val.call(null,entry).call(null,p2__19258_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__9342__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$2);
})(),x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__9342__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__19272 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__19273 = cljs.core.next.call(null,bes);
ret = G__19272;
bes = G__19273;
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
return (function (p1__19259_SHARP_){
return (cljs.core.first.call(null,p1__19259_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9342__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__9342__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___19278 = arguments.length;
var i__9614__auto___19279 = (0);
while(true){
if((i__9614__auto___19279 < len__9613__auto___19278)){
args__9620__auto__.push((arguments[i__9614__auto___19279]));

var G__19280 = (i__9614__auto___19279 + (1));
i__9614__auto___19279 = G__19280;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__9342__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq19274){
var G__19275 = cljs.core.first.call(null,seq19274);
var seq19274__$1 = cljs.core.next.call(null,seq19274);
var G__19276 = cljs.core.first.call(null,seq19274__$1);
var seq19274__$2 = cljs.core.next.call(null,seq19274__$1);
var G__19277 = cljs.core.first.call(null,seq19274__$2);
var seq19274__$3 = cljs.core.next.call(null,seq19274__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__19275,G__19276,G__19277,seq19274__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19289 = arguments.length;
var i__9614__auto___19290 = (0);
while(true){
if((i__9614__auto___19290 < len__9613__auto___19289)){
args__9620__auto__.push((arguments[i__9614__auto___19290]));

var G__19291 = (i__9614__auto___19290 + (1));
i__9614__auto___19290 = G__19291;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9342__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return (function (ret,p__19285){
var vec__19286 = p__19285;
var b = cljs.core.nth.call(null,vec__19286,(0),null);
var v = cljs.core.nth.call(null,vec__19286,(1),null);
var g = cljs.core.nth.call(null,vec__19286,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq19281){
var G__19282 = cljs.core.first.call(null,seq19281);
var seq19281__$1 = cljs.core.next.call(null,seq19281);
var G__19283 = cljs.core.first.call(null,seq19281__$1);
var seq19281__$2 = cljs.core.next.call(null,seq19281__$1);
var G__19284 = cljs.core.first.call(null,seq19281__$2);
var seq19281__$3 = cljs.core.next.call(null,seq19281__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__19282,G__19283,G__19284,seq19281__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__19292_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__19292_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__19293){
var vec__19294 = p__19293;
var p = cljs.core.nth.call(null,vec__19294,(0),null);
var b = cljs.core.nth.call(null,vec__19294,(1),null);
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
var args__9620__auto__ = [];
var len__9613__auto___19300 = arguments.length;
var i__9614__auto___19301 = (0);
while(true){
if((i__9614__auto___19301 < len__9613__auto___19300)){
args__9620__auto__.push((arguments[i__9614__auto___19301]));

var G__19302 = (i__9614__auto___19301 + (1));
i__9614__auto___19301 = G__19302;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq19297){
var G__19298 = cljs.core.first.call(null,seq19297);
var seq19297__$1 = cljs.core.next.call(null,seq19297);
var G__19299 = cljs.core.first.call(null,seq19297__$1);
var seq19297__$2 = cljs.core.next.call(null,seq19297__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__19298,G__19299,seq19297__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8493__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__8493__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__8493__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args19306 = [];
var len__9613__auto___19313 = arguments.length;
var i__9614__auto___19314 = (0);
while(true){
if((i__9614__auto___19314 < len__9613__auto___19313)){
args19306.push((arguments[i__9614__auto___19314]));

var G__19315 = (i__9614__auto___19314 + (1));
i__9614__auto___19314 = G__19315;
continue;
} else {
}
break;
}

var G__19312 = args19306.length;
switch (G__19312) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19306.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9632__auto__);

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
return (function (p1__19303_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__19303_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__19304_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__19304_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9342__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19305__auto__","and__19305__auto__",-1240664044,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19305__auto__","and__19305__auto__",-1240664044,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19305__auto__","and__19305__auto__",-1240664044,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq19307){
var G__19308 = cljs.core.first.call(null,seq19307);
var seq19307__$1 = cljs.core.next.call(null,seq19307);
var G__19309 = cljs.core.first.call(null,seq19307__$1);
var seq19307__$2 = cljs.core.next.call(null,seq19307__$1);
var G__19310 = cljs.core.first.call(null,seq19307__$2);
var seq19307__$3 = cljs.core.next.call(null,seq19307__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__19308,G__19309,G__19310,seq19307__$3);
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
var args19320 = [];
var len__9613__auto___19327 = arguments.length;
var i__9614__auto___19328 = (0);
while(true){
if((i__9614__auto___19328 < len__9613__auto___19327)){
args19320.push((arguments[i__9614__auto___19328]));

var G__19329 = (i__9614__auto___19328 + (1));
i__9614__auto___19328 = G__19329;
continue;
} else {
}
break;
}

var G__19326 = args19320.length;
switch (G__19326) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19320.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9632__auto__);

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
return (function (p1__19317_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__19317_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__19318_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__19318_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9342__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19319__auto__","or__19319__auto__",1605069538,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19319__auto__","or__19319__auto__",1605069538,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19319__auto__","or__19319__auto__",1605069538,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq19321){
var G__19322 = cljs.core.first.call(null,seq19321);
var seq19321__$1 = cljs.core.next.call(null,seq19321);
var G__19323 = cljs.core.first.call(null,seq19321__$1);
var seq19321__$2 = cljs.core.next.call(null,seq19321__$1);
var G__19324 = cljs.core.first.call(null,seq19321__$2);
var seq19321__$3 = cljs.core.next.call(null,seq19321__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__19322,G__19323,G__19324,seq19321__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9342__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__19335 = clojure.string.split.call(null,comment,/\n/);
var seq__19336 = cljs.core.seq.call(null,vec__19335);
var first__19337 = cljs.core.first.call(null,seq__19336);
var seq__19336__$1 = cljs.core.next.call(null,seq__19336);
var x = first__19337;
var ys = seq__19336__$1;
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__19335,seq__19336,first__19337,seq__19336__$1,x,ys){
return (function (p1__19331_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__19331_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__19335,seq__19336,first__19337,seq__19336__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$2);
})(),x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19338__auto__","c__19338__auto__",1081458848,null)),(function (){var x__9342__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19339__auto__","x__19339__auto__",-476055972,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19339__auto__","x__19339__auto__",-476055972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19338__auto__","c__19338__auto__",1081458848,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args19340 = [];
var len__9613__auto___19348 = arguments.length;
var i__9614__auto___19349 = (0);
while(true){
if((i__9614__auto___19349 < len__9613__auto___19348)){
args19340.push((arguments[i__9614__auto___19349]));

var G__19350 = (i__9614__auto___19349 + (1));
i__9614__auto___19349 = G__19350;
continue;
} else {
}
break;
}

var G__19347 = args19340.length;
switch (G__19347) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19340.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9342__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq19341){
var G__19342 = cljs.core.first.call(null,seq19341);
var seq19341__$1 = cljs.core.next.call(null,seq19341);
var G__19343 = cljs.core.first.call(null,seq19341__$1);
var seq19341__$2 = cljs.core.next.call(null,seq19341__$1);
var G__19344 = cljs.core.first.call(null,seq19341__$2);
var seq19341__$3 = cljs.core.next.call(null,seq19341__$2);
var G__19345 = cljs.core.first.call(null,seq19341__$3);
var seq19341__$4 = cljs.core.next.call(null,seq19341__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__19342,G__19343,G__19344,G__19345,seq19341__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args19352 = [];
var len__9613__auto___19361 = arguments.length;
var i__9614__auto___19362 = (0);
while(true){
if((i__9614__auto___19362 < len__9613__auto___19361)){
args19352.push((arguments[i__9614__auto___19362]));

var G__19363 = (i__9614__auto___19362 + (1));
i__9614__auto___19362 = G__19363;
continue;
} else {
}
break;
}

var G__19360 = args19352.length;
switch (G__19360) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19352.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9632__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$2);
})(),x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9342__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq19353){
var G__19354 = cljs.core.first.call(null,seq19353);
var seq19353__$1 = cljs.core.next.call(null,seq19353);
var G__19355 = cljs.core.first.call(null,seq19353__$1);
var seq19353__$2 = cljs.core.next.call(null,seq19353__$1);
var G__19356 = cljs.core.first.call(null,seq19353__$2);
var seq19353__$3 = cljs.core.next.call(null,seq19353__$2);
var G__19357 = cljs.core.first.call(null,seq19353__$3);
var seq19353__$4 = cljs.core.next.call(null,seq19353__$3);
var G__19358 = cljs.core.first.call(null,seq19353__$4);
var seq19353__$5 = cljs.core.next.call(null,seq19353__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__19354,G__19355,G__19356,G__19357,G__19358,seq19353__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args19365 = [];
var len__9613__auto___19373 = arguments.length;
var i__9614__auto___19374 = (0);
while(true){
if((i__9614__auto___19374 < len__9613__auto___19373)){
args19365.push((arguments[i__9614__auto___19374]));

var G__19375 = (i__9614__auto___19374 + (1));
i__9614__auto___19374 = G__19375;
continue;
} else {
}
break;
}

var G__19372 = args19365.length;
switch (G__19372) {
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
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19365.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq19366){
var G__19367 = cljs.core.first.call(null,seq19366);
var seq19366__$1 = cljs.core.next.call(null,seq19366);
var G__19368 = cljs.core.first.call(null,seq19366__$1);
var seq19366__$2 = cljs.core.next.call(null,seq19366__$1);
var G__19369 = cljs.core.first.call(null,seq19366__$2);
var seq19366__$3 = cljs.core.next.call(null,seq19366__$2);
var G__19370 = cljs.core.first.call(null,seq19366__$3);
var seq19366__$4 = cljs.core.next.call(null,seq19366__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__19367,G__19368,G__19369,G__19370,seq19366__$4);
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
var args__9620__auto__ = [];
var len__9613__auto___19380 = arguments.length;
var i__9614__auto___19381 = (0);
while(true){
if((i__9614__auto___19381 < len__9613__auto___19380)){
args__9620__auto__.push((arguments[i__9614__auto___19381]));

var G__19382 = (i__9614__auto___19381 + (1));
i__9614__auto___19381 = G__19382;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq19377){
var G__19378 = cljs.core.first.call(null,seq19377);
var seq19377__$1 = cljs.core.next.call(null,seq19377);
var G__19379 = cljs.core.first.call(null,seq19377__$1);
var seq19377__$2 = cljs.core.next.call(null,seq19377__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__19378,G__19379,seq19377__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19386 = arguments.length;
var i__9614__auto___19387 = (0);
while(true){
if((i__9614__auto___19387 < len__9613__auto___19386)){
args__9620__auto__.push((arguments[i__9614__auto___19387]));

var G__19388 = (i__9614__auto___19387 + (1));
i__9614__auto___19387 = G__19388;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq19383){
var G__19384 = cljs.core.first.call(null,seq19383);
var seq19383__$1 = cljs.core.next.call(null,seq19383);
var G__19385 = cljs.core.first.call(null,seq19383__$1);
var seq19383__$2 = cljs.core.next.call(null,seq19383__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__19384,G__19385,seq19383__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19392 = arguments.length;
var i__9614__auto___19393 = (0);
while(true){
if((i__9614__auto___19393 < len__9613__auto___19392)){
args__9620__auto__.push((arguments[i__9614__auto___19393]));

var G__19394 = (i__9614__auto___19393 + (1));
i__9614__auto___19393 = G__19394;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq19389){
var G__19390 = cljs.core.first.call(null,seq19389);
var seq19389__$1 = cljs.core.next.call(null,seq19389);
var G__19391 = cljs.core.first.call(null,seq19389__$1);
var seq19389__$2 = cljs.core.next.call(null,seq19389__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__19390,G__19391,seq19389__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19398 = arguments.length;
var i__9614__auto___19399 = (0);
while(true){
if((i__9614__auto___19399 < len__9613__auto___19398)){
args__9620__auto__.push((arguments[i__9614__auto___19399]));

var G__19400 = (i__9614__auto___19399 + (1));
i__9614__auto___19399 = G__19400;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq19395){
var G__19396 = cljs.core.first.call(null,seq19395);
var seq19395__$1 = cljs.core.next.call(null,seq19395);
var G__19397 = cljs.core.first.call(null,seq19395__$1);
var seq19395__$2 = cljs.core.next.call(null,seq19395__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__19396,G__19397,seq19395__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19404 = arguments.length;
var i__9614__auto___19405 = (0);
while(true){
if((i__9614__auto___19405 < len__9613__auto___19404)){
args__9620__auto__.push((arguments[i__9614__auto___19405]));

var G__19406 = (i__9614__auto___19405 + (1));
i__9614__auto___19405 = G__19406;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq19401){
var G__19402 = cljs.core.first.call(null,seq19401);
var seq19401__$1 = cljs.core.next.call(null,seq19401);
var G__19403 = cljs.core.first.call(null,seq19401__$1);
var seq19401__$2 = cljs.core.next.call(null,seq19401__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__19402,G__19403,seq19401__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19410 = arguments.length;
var i__9614__auto___19411 = (0);
while(true){
if((i__9614__auto___19411 < len__9613__auto___19410)){
args__9620__auto__.push((arguments[i__9614__auto___19411]));

var G__19412 = (i__9614__auto___19411 + (1));
i__9614__auto___19411 = G__19412;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq19407){
var G__19408 = cljs.core.first.call(null,seq19407);
var seq19407__$1 = cljs.core.next.call(null,seq19407);
var G__19409 = cljs.core.first.call(null,seq19407__$1);
var seq19407__$2 = cljs.core.next.call(null,seq19407__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__19408,G__19409,seq19407__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19416 = arguments.length;
var i__9614__auto___19417 = (0);
while(true){
if((i__9614__auto___19417 < len__9613__auto___19416)){
args__9620__auto__.push((arguments[i__9614__auto___19417]));

var G__19418 = (i__9614__auto___19417 + (1));
i__9614__auto___19417 = G__19418;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq19413){
var G__19414 = cljs.core.first.call(null,seq19413);
var seq19413__$1 = cljs.core.next.call(null,seq19413);
var G__19415 = cljs.core.first.call(null,seq19413__$1);
var seq19413__$2 = cljs.core.next.call(null,seq19413__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__19414,G__19415,seq19413__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args19419 = [];
var len__9613__auto___19427 = arguments.length;
var i__9614__auto___19428 = (0);
while(true){
if((i__9614__auto___19428 < len__9613__auto___19427)){
args19419.push((arguments[i__9614__auto___19428]));

var G__19429 = (i__9614__auto___19428 + (1));
i__9614__auto___19428 = G__19429;
continue;
} else {
}
break;
}

var G__19426 = args19419.length;
switch (G__19426) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19419.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq19420){
var G__19421 = cljs.core.first.call(null,seq19420);
var seq19420__$1 = cljs.core.next.call(null,seq19420);
var G__19422 = cljs.core.first.call(null,seq19420__$1);
var seq19420__$2 = cljs.core.next.call(null,seq19420__$1);
var G__19423 = cljs.core.first.call(null,seq19420__$2);
var seq19420__$3 = cljs.core.next.call(null,seq19420__$2);
var G__19424 = cljs.core.first.call(null,seq19420__$3);
var seq19420__$4 = cljs.core.next.call(null,seq19420__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__19421,G__19422,G__19423,G__19424,seq19420__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args19431 = [];
var len__9613__auto___19439 = arguments.length;
var i__9614__auto___19440 = (0);
while(true){
if((i__9614__auto___19440 < len__9613__auto___19439)){
args19431.push((arguments[i__9614__auto___19440]));

var G__19441 = (i__9614__auto___19440 + (1));
i__9614__auto___19440 = G__19441;
continue;
} else {
}
break;
}

var G__19438 = args19431.length;
switch (G__19438) {
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
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19431.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq19432){
var G__19433 = cljs.core.first.call(null,seq19432);
var seq19432__$1 = cljs.core.next.call(null,seq19432);
var G__19434 = cljs.core.first.call(null,seq19432__$1);
var seq19432__$2 = cljs.core.next.call(null,seq19432__$1);
var G__19435 = cljs.core.first.call(null,seq19432__$2);
var seq19432__$3 = cljs.core.next.call(null,seq19432__$2);
var G__19436 = cljs.core.first.call(null,seq19432__$3);
var seq19432__$4 = cljs.core.next.call(null,seq19432__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__19433,G__19434,G__19435,G__19436,seq19432__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args19443 = [];
var len__9613__auto___19451 = arguments.length;
var i__9614__auto___19452 = (0);
while(true){
if((i__9614__auto___19452 < len__9613__auto___19451)){
args19443.push((arguments[i__9614__auto___19452]));

var G__19453 = (i__9614__auto___19452 + (1));
i__9614__auto___19452 = G__19453;
continue;
} else {
}
break;
}

var G__19450 = args19443.length;
switch (G__19450) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19443.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq19444){
var G__19445 = cljs.core.first.call(null,seq19444);
var seq19444__$1 = cljs.core.next.call(null,seq19444);
var G__19446 = cljs.core.first.call(null,seq19444__$1);
var seq19444__$2 = cljs.core.next.call(null,seq19444__$1);
var G__19447 = cljs.core.first.call(null,seq19444__$2);
var seq19444__$3 = cljs.core.next.call(null,seq19444__$2);
var G__19448 = cljs.core.first.call(null,seq19444__$3);
var seq19444__$4 = cljs.core.next.call(null,seq19444__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__19445,G__19446,G__19447,G__19448,seq19444__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args19455 = [];
var len__9613__auto___19463 = arguments.length;
var i__9614__auto___19464 = (0);
while(true){
if((i__9614__auto___19464 < len__9613__auto___19463)){
args19455.push((arguments[i__9614__auto___19464]));

var G__19465 = (i__9614__auto___19464 + (1));
i__9614__auto___19464 = G__19465;
continue;
} else {
}
break;
}

var G__19462 = args19455.length;
switch (G__19462) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19455.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq19456){
var G__19457 = cljs.core.first.call(null,seq19456);
var seq19456__$1 = cljs.core.next.call(null,seq19456);
var G__19458 = cljs.core.first.call(null,seq19456__$1);
var seq19456__$2 = cljs.core.next.call(null,seq19456__$1);
var G__19459 = cljs.core.first.call(null,seq19456__$2);
var seq19456__$3 = cljs.core.next.call(null,seq19456__$2);
var G__19460 = cljs.core.first.call(null,seq19456__$3);
var seq19456__$4 = cljs.core.next.call(null,seq19456__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__19457,G__19458,G__19459,G__19460,seq19456__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args19467 = [];
var len__9613__auto___19475 = arguments.length;
var i__9614__auto___19476 = (0);
while(true){
if((i__9614__auto___19476 < len__9613__auto___19475)){
args19467.push((arguments[i__9614__auto___19476]));

var G__19477 = (i__9614__auto___19476 + (1));
i__9614__auto___19476 = G__19477;
continue;
} else {
}
break;
}

var G__19474 = args19467.length;
switch (G__19474) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19467.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq19468){
var G__19469 = cljs.core.first.call(null,seq19468);
var seq19468__$1 = cljs.core.next.call(null,seq19468);
var G__19470 = cljs.core.first.call(null,seq19468__$1);
var seq19468__$2 = cljs.core.next.call(null,seq19468__$1);
var G__19471 = cljs.core.first.call(null,seq19468__$2);
var seq19468__$3 = cljs.core.next.call(null,seq19468__$2);
var G__19472 = cljs.core.first.call(null,seq19468__$3);
var seq19468__$4 = cljs.core.next.call(null,seq19468__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__19469,G__19470,G__19471,G__19472,seq19468__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args19479 = [];
var len__9613__auto___19487 = arguments.length;
var i__9614__auto___19488 = (0);
while(true){
if((i__9614__auto___19488 < len__9613__auto___19487)){
args19479.push((arguments[i__9614__auto___19488]));

var G__19489 = (i__9614__auto___19488 + (1));
i__9614__auto___19488 = G__19489;
continue;
} else {
}
break;
}

var G__19486 = args19479.length;
switch (G__19486) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19479.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq19480){
var G__19481 = cljs.core.first.call(null,seq19480);
var seq19480__$1 = cljs.core.next.call(null,seq19480);
var G__19482 = cljs.core.first.call(null,seq19480__$1);
var seq19480__$2 = cljs.core.next.call(null,seq19480__$1);
var G__19483 = cljs.core.first.call(null,seq19480__$2);
var seq19480__$3 = cljs.core.next.call(null,seq19480__$2);
var G__19484 = cljs.core.first.call(null,seq19480__$3);
var seq19480__$4 = cljs.core.next.call(null,seq19480__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19481,G__19482,G__19483,G__19484,seq19480__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args19491 = [];
var len__9613__auto___19499 = arguments.length;
var i__9614__auto___19500 = (0);
while(true){
if((i__9614__auto___19500 < len__9613__auto___19499)){
args19491.push((arguments[i__9614__auto___19500]));

var G__19501 = (i__9614__auto___19500 + (1));
i__9614__auto___19500 = G__19501;
continue;
} else {
}
break;
}

var G__19498 = args19491.length;
switch (G__19498) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19491.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq19492){
var G__19493 = cljs.core.first.call(null,seq19492);
var seq19492__$1 = cljs.core.next.call(null,seq19492);
var G__19494 = cljs.core.first.call(null,seq19492__$1);
var seq19492__$2 = cljs.core.next.call(null,seq19492__$1);
var G__19495 = cljs.core.first.call(null,seq19492__$2);
var seq19492__$3 = cljs.core.next.call(null,seq19492__$2);
var G__19496 = cljs.core.first.call(null,seq19492__$3);
var seq19492__$4 = cljs.core.next.call(null,seq19492__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__19493,G__19494,G__19495,G__19496,seq19492__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args19503 = [];
var len__9613__auto___19511 = arguments.length;
var i__9614__auto___19512 = (0);
while(true){
if((i__9614__auto___19512 < len__9613__auto___19511)){
args19503.push((arguments[i__9614__auto___19512]));

var G__19513 = (i__9614__auto___19512 + (1));
i__9614__auto___19512 = G__19513;
continue;
} else {
}
break;
}

var G__19510 = args19503.length;
switch (G__19510) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19503.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq19504){
var G__19505 = cljs.core.first.call(null,seq19504);
var seq19504__$1 = cljs.core.next.call(null,seq19504);
var G__19506 = cljs.core.first.call(null,seq19504__$1);
var seq19504__$2 = cljs.core.next.call(null,seq19504__$1);
var G__19507 = cljs.core.first.call(null,seq19504__$2);
var seq19504__$3 = cljs.core.next.call(null,seq19504__$2);
var G__19508 = cljs.core.first.call(null,seq19504__$3);
var seq19504__$4 = cljs.core.next.call(null,seq19504__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19505,G__19506,G__19507,G__19508,seq19504__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args19515 = [];
var len__9613__auto___19523 = arguments.length;
var i__9614__auto___19524 = (0);
while(true){
if((i__9614__auto___19524 < len__9613__auto___19523)){
args19515.push((arguments[i__9614__auto___19524]));

var G__19525 = (i__9614__auto___19524 + (1));
i__9614__auto___19524 = G__19525;
continue;
} else {
}
break;
}

var G__19522 = args19515.length;
switch (G__19522) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19515.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq19516){
var G__19517 = cljs.core.first.call(null,seq19516);
var seq19516__$1 = cljs.core.next.call(null,seq19516);
var G__19518 = cljs.core.first.call(null,seq19516__$1);
var seq19516__$2 = cljs.core.next.call(null,seq19516__$1);
var G__19519 = cljs.core.first.call(null,seq19516__$2);
var seq19516__$3 = cljs.core.next.call(null,seq19516__$2);
var G__19520 = cljs.core.first.call(null,seq19516__$3);
var seq19516__$4 = cljs.core.next.call(null,seq19516__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19517,G__19518,G__19519,G__19520,seq19516__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args19529 = [];
var len__9613__auto___19537 = arguments.length;
var i__9614__auto___19538 = (0);
while(true){
if((i__9614__auto___19538 < len__9613__auto___19537)){
args19529.push((arguments[i__9614__auto___19538]));

var G__19539 = (i__9614__auto___19538 + (1));
i__9614__auto___19538 = G__19539;
continue;
} else {
}
break;
}

var G__19536 = args19529.length;
switch (G__19536) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19529.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19527__auto__","x__19527__auto__",973743167,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19528__auto__","y__19528__auto__",1890350251,null)),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19527__auto__","x__19527__auto__",973743167,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19528__auto__","y__19528__auto__",1890350251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19527__auto__","x__19527__auto__",973743167,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19528__auto__","y__19528__auto__",1890350251,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq19530){
var G__19531 = cljs.core.first.call(null,seq19530);
var seq19530__$1 = cljs.core.next.call(null,seq19530);
var G__19532 = cljs.core.first.call(null,seq19530__$1);
var seq19530__$2 = cljs.core.next.call(null,seq19530__$1);
var G__19533 = cljs.core.first.call(null,seq19530__$2);
var seq19530__$3 = cljs.core.next.call(null,seq19530__$2);
var G__19534 = cljs.core.first.call(null,seq19530__$3);
var seq19530__$4 = cljs.core.next.call(null,seq19530__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__19531,G__19532,G__19533,G__19534,seq19530__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args19543 = [];
var len__9613__auto___19551 = arguments.length;
var i__9614__auto___19552 = (0);
while(true){
if((i__9614__auto___19552 < len__9613__auto___19551)){
args19543.push((arguments[i__9614__auto___19552]));

var G__19553 = (i__9614__auto___19552 + (1));
i__9614__auto___19552 = G__19553;
continue;
} else {
}
break;
}

var G__19550 = args19543.length;
switch (G__19550) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19543.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19541__auto__","x__19541__auto__",2107669407,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19542__auto__","y__19542__auto__",1254908060,null)),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19541__auto__","x__19541__auto__",2107669407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19542__auto__","y__19542__auto__",1254908060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19541__auto__","x__19541__auto__",2107669407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19542__auto__","y__19542__auto__",1254908060,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq19544){
var G__19545 = cljs.core.first.call(null,seq19544);
var seq19544__$1 = cljs.core.next.call(null,seq19544);
var G__19546 = cljs.core.first.call(null,seq19544__$1);
var seq19544__$2 = cljs.core.next.call(null,seq19544__$1);
var G__19547 = cljs.core.first.call(null,seq19544__$2);
var seq19544__$3 = cljs.core.next.call(null,seq19544__$2);
var G__19548 = cljs.core.first.call(null,seq19544__$3);
var seq19544__$4 = cljs.core.next.call(null,seq19544__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__19545,G__19546,G__19547,G__19548,seq19544__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args19555 = [];
var len__9613__auto___19563 = arguments.length;
var i__9614__auto___19564 = (0);
while(true){
if((i__9614__auto___19564 < len__9613__auto___19563)){
args19555.push((arguments[i__9614__auto___19564]));

var G__19565 = (i__9614__auto___19564 + (1));
i__9614__auto___19564 = G__19565;
continue;
} else {
}
break;
}

var G__19562 = args19555.length;
switch (G__19562) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19555.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq19556){
var G__19557 = cljs.core.first.call(null,seq19556);
var seq19556__$1 = cljs.core.next.call(null,seq19556);
var G__19558 = cljs.core.first.call(null,seq19556__$1);
var seq19556__$2 = cljs.core.next.call(null,seq19556__$1);
var G__19559 = cljs.core.first.call(null,seq19556__$2);
var seq19556__$3 = cljs.core.next.call(null,seq19556__$2);
var G__19560 = cljs.core.first.call(null,seq19556__$3);
var seq19556__$4 = cljs.core.next.call(null,seq19556__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__19557,G__19558,G__19559,G__19560,seq19556__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args19567 = [];
var len__9613__auto___19575 = arguments.length;
var i__9614__auto___19576 = (0);
while(true){
if((i__9614__auto___19576 < len__9613__auto___19575)){
args19567.push((arguments[i__9614__auto___19576]));

var G__19577 = (i__9614__auto___19576 + (1));
i__9614__auto___19576 = G__19577;
continue;
} else {
}
break;
}

var G__19574 = args19567.length;
switch (G__19574) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19567.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq19568){
var G__19569 = cljs.core.first.call(null,seq19568);
var seq19568__$1 = cljs.core.next.call(null,seq19568);
var G__19570 = cljs.core.first.call(null,seq19568__$1);
var seq19568__$2 = cljs.core.next.call(null,seq19568__$1);
var G__19571 = cljs.core.first.call(null,seq19568__$2);
var seq19568__$3 = cljs.core.next.call(null,seq19568__$2);
var G__19572 = cljs.core.first.call(null,seq19568__$3);
var seq19568__$4 = cljs.core.next.call(null,seq19568__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__19569,G__19570,G__19571,G__19572,seq19568__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args19579 = [];
var len__9613__auto___19587 = arguments.length;
var i__9614__auto___19588 = (0);
while(true){
if((i__9614__auto___19588 < len__9613__auto___19587)){
args19579.push((arguments[i__9614__auto___19588]));

var G__19589 = (i__9614__auto___19588 + (1));
i__9614__auto___19588 = G__19589;
continue;
} else {
}
break;
}

var G__19586 = args19579.length;
switch (G__19586) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19579.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq19580){
var G__19581 = cljs.core.first.call(null,seq19580);
var seq19580__$1 = cljs.core.next.call(null,seq19580);
var G__19582 = cljs.core.first.call(null,seq19580__$1);
var seq19580__$2 = cljs.core.next.call(null,seq19580__$1);
var G__19583 = cljs.core.first.call(null,seq19580__$2);
var seq19580__$3 = cljs.core.next.call(null,seq19580__$2);
var G__19584 = cljs.core.first.call(null,seq19580__$3);
var seq19580__$4 = cljs.core.next.call(null,seq19580__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__19581,G__19582,G__19583,G__19584,seq19580__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args19591 = [];
var len__9613__auto___19599 = arguments.length;
var i__9614__auto___19600 = (0);
while(true){
if((i__9614__auto___19600 < len__9613__auto___19599)){
args19591.push((arguments[i__9614__auto___19600]));

var G__19601 = (i__9614__auto___19600 + (1));
i__9614__auto___19600 = G__19601;
continue;
} else {
}
break;
}

var G__19598 = args19591.length;
switch (G__19598) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19591.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq19592){
var G__19593 = cljs.core.first.call(null,seq19592);
var seq19592__$1 = cljs.core.next.call(null,seq19592);
var G__19594 = cljs.core.first.call(null,seq19592__$1);
var seq19592__$2 = cljs.core.next.call(null,seq19592__$1);
var G__19595 = cljs.core.first.call(null,seq19592__$2);
var seq19592__$3 = cljs.core.next.call(null,seq19592__$2);
var G__19596 = cljs.core.first.call(null,seq19592__$3);
var seq19592__$4 = cljs.core.next.call(null,seq19592__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__19593,G__19594,G__19595,G__19596,seq19592__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args19603 = [];
var len__9613__auto___19611 = arguments.length;
var i__9614__auto___19612 = (0);
while(true){
if((i__9614__auto___19612 < len__9613__auto___19611)){
args19603.push((arguments[i__9614__auto___19612]));

var G__19613 = (i__9614__auto___19612 + (1));
i__9614__auto___19612 = G__19613;
continue;
} else {
}
break;
}

var G__19610 = args19603.length;
switch (G__19610) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args19603.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq19604){
var G__19605 = cljs.core.first.call(null,seq19604);
var seq19604__$1 = cljs.core.next.call(null,seq19604);
var G__19606 = cljs.core.first.call(null,seq19604__$1);
var seq19604__$2 = cljs.core.next.call(null,seq19604__$1);
var G__19607 = cljs.core.first.call(null,seq19604__$2);
var seq19604__$3 = cljs.core.next.call(null,seq19604__$2);
var G__19608 = cljs.core.first.call(null,seq19604__$3);
var seq19604__$4 = cljs.core.next.call(null,seq19604__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__19605,G__19606,G__19607,G__19608,seq19604__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__9342__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19615__auto__","h__19615__auto__",-1571708086,null)),(function (){var x__9342__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19615__auto__","h__19615__auto__",-1571708086,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19615__auto__","h__19615__auto__",-1571708086,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19615__auto__","h__19615__auto__",-1571708086,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19615__auto__","h__19615__auto__",-1571708086,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19615__auto__","h__19615__auto__",-1571708086,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19616__auto__","x__19616__auto__",1251350164,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19616__auto__","x__19616__auto__",1251350164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19624 = arguments.length;
var i__9614__auto___19625 = (0);
while(true){
if((i__9614__auto___19625 < len__9613__auto___19624)){
args__9620__auto__.push((arguments[i__9614__auto___19625]));

var G__19626 = (i__9614__auto___19625 + (1));
i__9614__auto___19625 = G__19626;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((6) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__9621__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq19617){
var G__19618 = cljs.core.first.call(null,seq19617);
var seq19617__$1 = cljs.core.next.call(null,seq19617);
var G__19619 = cljs.core.first.call(null,seq19617__$1);
var seq19617__$2 = cljs.core.next.call(null,seq19617__$1);
var G__19620 = cljs.core.first.call(null,seq19617__$2);
var seq19617__$3 = cljs.core.next.call(null,seq19617__$2);
var G__19621 = cljs.core.first.call(null,seq19617__$3);
var seq19617__$4 = cljs.core.next.call(null,seq19617__$3);
var G__19622 = cljs.core.first.call(null,seq19617__$4);
var seq19617__$5 = cljs.core.next.call(null,seq19617__$4);
var G__19623 = cljs.core.first.call(null,seq19617__$5);
var seq19617__$6 = cljs.core.next.call(null,seq19617__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__19618,G__19619,G__19620,G__19621,G__19622,G__19623,seq19617__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = clojure.walk.postwalk.call(null,(function (p1__19627_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__19627_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__19627_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__19627_SHARP_));
} else {
return p1__19627_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__19628,fkv){
var vec__19632 = p__19628;
var f1 = cljs.core.nth.call(null,vec__19632,(0),null);
var k = cljs.core.nth.call(null,vec__19632,(1),null);
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
var args__9620__auto__ = [];
var len__9613__auto___19638 = arguments.length;
var i__9614__auto___19639 = (0);
while(true){
if((i__9614__auto___19639 < len__9613__auto___19638)){
args__9620__auto__.push((arguments[i__9614__auto___19639]));

var G__19640 = (i__9614__auto___19639 + (1));
i__9614__auto___19639 = G__19640;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__9342__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__9342__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),locals,(function (){var x__9342__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),locals,(function (){var x__9342__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq19635){
var G__19636 = cljs.core.first.call(null,seq19635);
var seq19635__$1 = cljs.core.next.call(null,seq19635);
var G__19637 = cljs.core.first.call(null,seq19635__$1);
var seq19635__$2 = cljs.core.next.call(null,seq19635__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__19636,G__19637,seq19635__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19645 = arguments.length;
var i__9614__auto___19646 = (0);
while(true){
if((i__9614__auto___19646 < len__9613__auto___19645)){
args__9620__auto__.push((arguments[i__9614__auto___19646]));

var G__19647 = (i__9614__auto___19646 + (1));
i__9614__auto___19646 = G__19647;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq19641){
var G__19642 = cljs.core.first.call(null,seq19641);
var seq19641__$1 = cljs.core.next.call(null,seq19641);
var G__19643 = cljs.core.first.call(null,seq19641__$1);
var seq19641__$2 = cljs.core.next.call(null,seq19641__$1);
var G__19644 = cljs.core.first.call(null,seq19641__$2);
var seq19641__$3 = cljs.core.next.call(null,seq19641__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19642,G__19643,G__19644,seq19641__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19652 = arguments.length;
var i__9614__auto___19653 = (0);
while(true){
if((i__9614__auto___19653 < len__9613__auto___19652)){
args__9620__auto__.push((arguments[i__9614__auto___19653]));

var G__19654 = (i__9614__auto___19653 + (1));
i__9614__auto___19653 = G__19654;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq19648){
var G__19649 = cljs.core.first.call(null,seq19648);
var seq19648__$1 = cljs.core.next.call(null,seq19648);
var G__19650 = cljs.core.first.call(null,seq19648__$1);
var seq19648__$2 = cljs.core.next.call(null,seq19648__$1);
var G__19651 = cljs.core.first.call(null,seq19648__$2);
var seq19648__$3 = cljs.core.next.call(null,seq19648__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__19649,G__19650,G__19651,seq19648__$3);
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
var args__9620__auto__ = [];
var len__9613__auto___19659 = arguments.length;
var i__9614__auto___19660 = (0);
while(true){
if((i__9614__auto___19660 < len__9613__auto___19659)){
args__9620__auto__.push((arguments[i__9614__auto___19660]));

var G__19661 = (i__9614__auto___19660 + (1));
i__9614__auto___19660 = G__19661;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq19655){
var G__19656 = cljs.core.first.call(null,seq19655);
var seq19655__$1 = cljs.core.next.call(null,seq19655);
var G__19657 = cljs.core.first.call(null,seq19655__$1);
var seq19655__$2 = cljs.core.next.call(null,seq19655__$1);
var G__19658 = cljs.core.first.call(null,seq19655__$2);
var seq19655__$3 = cljs.core.next.call(null,seq19655__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__19656,G__19657,G__19658,seq19655__$3);
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

if(cljs.core.truth_((function (){var and__8493__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8493__auto__)){
var and__8493__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8493__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__8493__auto____$1;
}
} else {
return and__8493__auto__;
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
var G__19662 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__19663 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__19662;
s = G__19663;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__19664){
var vec__19672 = p__19664;
var p = cljs.core.nth.call(null,vec__19672,(0),null);
var sigs = cljs.core.nth.call(null,vec__19672,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9342__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__19672,p,sigs){
return (function (p__19675){
var vec__19676 = p__19675;
var seq__19677 = cljs.core.seq.call(null,vec__19676);
var first__19678 = cljs.core.first.call(null,seq__19677);
var seq__19677__$1 = cljs.core.next.call(null,seq__19677);
var f = first__19678;
var meths = seq__19677__$1;
var form = vec__19676;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(psym,pfn_prefix,vec__19672,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9437__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__9433__auto__,prefer_table__9434__auto__,method_cache__9435__auto__,cached_hierarchy__9436__auto__,hierarchy__9437__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__9433__auto__,prefer_table__9434__auto__,method_cache__9435__auto__,cached_hierarchy__9436__auto__,hierarchy__9437__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9437__auto__,method_table__9433__auto__,prefer_table__9434__auto__,method_cache__9435__auto__,cached_hierarchy__9436__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9342__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9342__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__9342__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__19679){
var vec__19686 = p__19679;
var seq__19687 = cljs.core.seq.call(null,vec__19686);
var first__19688 = cljs.core.first.call(null,seq__19687);
var seq__19687__$1 = cljs.core.next.call(null,seq__19687);
var vec__19689 = first__19688;
var seq__19690 = cljs.core.seq.call(null,vec__19689);
var first__19691 = cljs.core.first.call(null,seq__19690);
var seq__19690__$1 = cljs.core.next.call(null,seq__19690);
var this$ = first__19691;
var args = seq__19690__$1;
var sig = vec__19689;
var body = seq__19687__$1;
var x__9342__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__19692){
var vec__19699 = p__19692;
var seq__19700 = cljs.core.seq.call(null,vec__19699);
var first__19701 = cljs.core.first.call(null,seq__19700);
var seq__19700__$1 = cljs.core.next.call(null,seq__19700);
var vec__19702 = first__19701;
var seq__19703 = cljs.core.seq.call(null,vec__19702);
var first__19704 = cljs.core.first.call(null,seq__19703);
var seq__19703__$1 = cljs.core.next.call(null,seq__19703);
var this$ = first__19704;
var args = seq__19703__$1;
var sig = vec__19702;
var body = seq__19700__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9342__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__19705){
var vec__19712 = p__19705;
var seq__19713 = cljs.core.seq.call(null,vec__19712);
var first__19714 = cljs.core.first.call(null,seq__19713);
var seq__19713__$1 = cljs.core.next.call(null,seq__19713);
var vec__19715 = first__19714;
var seq__19716 = cljs.core.seq.call(null,vec__19715);
var first__19717 = cljs.core.first.call(null,seq__19716);
var seq__19716__$1 = cljs.core.next.call(null,seq__19716);
var this$ = first__19717;
var args = seq__19716__$1;
var sig = vec__19715;
var body = seq__19713__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9342__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__19718){
var vec__19725 = p__19718;
var seq__19726 = cljs.core.seq.call(null,vec__19725);
var first__19727 = cljs.core.first.call(null,seq__19726);
var seq__19726__$1 = cljs.core.next.call(null,seq__19726);
var vec__19728 = first__19727;
var seq__19729 = cljs.core.seq.call(null,vec__19728);
var first__19730 = cljs.core.first.call(null,seq__19729);
var seq__19729__$1 = cljs.core.next.call(null,seq__19729);
var this$ = first__19730;
var args = seq__19729__$1;
var sig = vec__19728;
var body = seq__19726__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9342__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__19739){
var vec__19740 = p__19739;
var seq__19741 = cljs.core.seq.call(null,vec__19740);
var first__19742 = cljs.core.first.call(null,seq__19741);
var seq__19741__$1 = cljs.core.next.call(null,seq__19741);
var f = first__19742;
var meths = seq__19741__$1;
var form = vec__19740;
var vec__19743 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__19743,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__19743,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__19743,f__$1,meths__$1,vec__19740,seq__19741,first__19742,seq__19741__$1,f,meths,form){
return (function (p1__19731_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__19731_SHARP_);
});})(vec__19743,f__$1,meths__$1,vec__19740,seq__19741,first__19742,seq__19741__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__19747){
var vec__19751 = p__19747;
var seq__19752 = cljs.core.seq.call(null,vec__19751);
var first__19753 = cljs.core.first.call(null,seq__19752);
var seq__19752__$1 = cljs.core.next.call(null,seq__19752);
var f = first__19753;
var meths = seq__19752__$1;
var form = vec__19751;
return cljs.core.map.call(null,((function (vec__19751,seq__19752,first__19753,seq__19752__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(vec__19751,seq__19752,first__19753,seq__19752__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__19751,seq__19752,first__19753,seq__19752__$1,f,meths,form){
return (function (p1__19746_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__19746_SHARP_);
});})(vec__19751,seq__19752,first__19753,seq__19752__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__19755){
var vec__19759 = p__19755;
var seq__19760 = cljs.core.seq.call(null,vec__19759);
var first__19761 = cljs.core.first.call(null,seq__19760);
var seq__19760__$1 = cljs.core.next.call(null,seq__19760);
var f = first__19761;
var meths = seq__19760__$1;
var form = vec__19759;
var meths__$1 = cljs.core.map.call(null,((function (vec__19759,seq__19760,first__19761,seq__19760__$1,f,meths,form){
return (function (p1__19754_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__19754_SHARP_);
});})(vec__19759,seq__19760,first__19761,seq__19760__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9342__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__9342__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__9342__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__9342__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__19762){
var vec__19770 = p__19762;
var seq__19771 = cljs.core.seq.call(null,vec__19770);
var first__19772 = cljs.core.first.call(null,seq__19771);
var seq__19771__$1 = cljs.core.next.call(null,seq__19771);
var f = first__19772;
var meths = seq__19771__$1;
var form = vec__19770;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__19770,seq__19771,first__19772,seq__19771__$1,f,meths,form){
return (function (p__19773){
var vec__19774 = p__19773;
var seq__19775 = cljs.core.seq.call(null,vec__19774);
var first__19776 = cljs.core.first.call(null,seq__19775);
var seq__19775__$1 = cljs.core.next.call(null,seq__19775);
var sig = first__19776;
var body = seq__19775__$1;
var meth = vec__19774;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(pf,vec__19770,seq__19771,first__19772,seq__19771__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__19777){
var vec__19781 = p__19777;
var p = cljs.core.nth.call(null,vec__19781,(0),null);
var sigs = cljs.core.nth.call(null,vec__19781,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__19781,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__19781,p,sigs))
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
var vec__19787 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__19787,(0),null);
var sigs = cljs.core.nth.call(null,vec__19787,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_19790 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_19790))){
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

var G__19791 = cljs.core.next.call(null,sigs__$1);
var G__19792 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__19791;
seen = G__19792;
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

var seen_19799 = cljs.core.PersistentHashSet.EMPTY;
var methods_19800__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_19800__$1)){
var vec__19796_19801 = cljs.core.first.call(null,methods_19800__$1);
var fname_19802 = cljs.core.nth.call(null,vec__19796_19801,(0),null);
var method_19803 = vec__19796_19801;
if(cljs.core.contains_QMARK_.call(null,seen_19799,fname_19802)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_19802], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_19803);

var G__19804 = cljs.core.conj.call(null,seen_19799,fname_19802);
var G__19805 = cljs.core.next.call(null,methods_19800__$1);
seen_19799 = G__19804;
methods_19800__$1 = G__19805;
continue;
} else {
}
break;
}

var G__19806 = cljs.core.conj.call(null,protos,proto);
var G__19807 = impls__$2;
protos = G__19806;
impls__$1 = G__19807;
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
var args__9620__auto__ = [];
var len__9613__auto___19816 = arguments.length;
var i__9614__auto___19817 = (0);
while(true){
if((i__9614__auto___19817 < len__9613__auto___19816)){
args__9620__auto__.push((arguments[i__9614__auto___19817]));

var G__19818 = (i__9614__auto___19817 + (1));
i__9614__auto___19817 = G__19818;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__19813 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__19813,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__19813,(1),null);
if(cljs.core.truth_((function (){var and__8493__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8493__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__8493__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__19813,type,assign_impls){
return (function (p1__19808_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__19808_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__19813,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq19809){
var G__19810 = cljs.core.first.call(null,seq19809);
var seq19809__$1 = cljs.core.next.call(null,seq19809);
var G__19811 = cljs.core.first.call(null,seq19809__$1);
var seq19809__$2 = cljs.core.next.call(null,seq19809__$1);
var G__19812 = cljs.core.first.call(null,seq19809__$2);
var seq19809__$3 = cljs.core.next.call(null,seq19809__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__19810,G__19811,G__19812,seq19809__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__19820){
var vec__19824 = p__19820;
var f = cljs.core.nth.call(null,vec__19824,(0),null);
var sigs = cljs.core.nth.call(null,vec__19824,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__19824,f,sigs){
return (function (p1__19819_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__19819_SHARP_),cljs.core.nnext.call(null,p1__19819_SHARP_));
});})(vec__19824,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args19827 = [];
var len__9613__auto___19830 = arguments.length;
var i__9614__auto___19831 = (0);
while(true){
if((i__9614__auto___19831 < len__9613__auto___19830)){
args19827.push((arguments[i__9614__auto___19831]));

var G__19832 = (i__9614__auto___19831 + (1));
i__9614__auto___19831 = G__19832;
continue;
} else {
}
break;
}

var G__19829 = args19827.length;
switch (G__19829) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19827.length)].join('')));

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
var G__19834 = ret__$1;
var G__19835 = specs__$2;
ret = G__19834;
specs__$1 = G__19835;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__19836_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__19836_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9342__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___19848 = arguments.length;
var i__9614__auto___19849 = (0);
while(true){
if((i__9614__auto___19849 < len__9613__auto___19848)){
args__9620__auto__.push((arguments[i__9614__auto___19849]));

var G__19850 = (i__9614__auto___19849 + (1));
i__9614__auto___19849 = G__19850;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((4) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9621__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__19845 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__19845,(0),null);
var pmasks = cljs.core.nth.call(null,vec__19845,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__9342__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9342__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9342__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9342__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9342__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9342__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19837__auto__","this__19837__auto__",-539553108,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__19838__auto__","writer__19838__auto__",-1584002158,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__19839__auto__","opt__19839__auto__",458767831,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__19838__auto__","writer__19838__auto__",-1584002158,null)),(function (){var x__9342__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq19840){
var G__19841 = cljs.core.first.call(null,seq19840);
var seq19840__$1 = cljs.core.next.call(null,seq19840);
var G__19842 = cljs.core.first.call(null,seq19840__$1);
var seq19840__$2 = cljs.core.next.call(null,seq19840__$1);
var G__19843 = cljs.core.first.call(null,seq19840__$2);
var seq19840__$3 = cljs.core.next.call(null,seq19840__$2);
var G__19844 = cljs.core.first.call(null,seq19840__$3);
var seq19840__$4 = cljs.core.next.call(null,seq19840__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__19841,G__19842,G__19843,G__19844,seq19840__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__19851_SHARP_){
return cljs.core.with_meta.call(null,p1__19851_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19852__auto__","this__19852__auto__",2001109629,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19853__auto__","this__19853__auto__",935606685,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19853__auto__","this__19853__auto__",935606685,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19854__auto__","this__19854__auto__",1234357825,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__19855__auto__","other__19855__auto__",1237308276,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__19855__auto__","other__19855__auto__",1237308276,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19854__auto__","this__19854__auto__",1234357825,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__19855__auto__","other__19855__auto__",1237308276,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19854__auto__","this__19854__auto__",1234357825,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__19855__auto__","other__19855__auto__",1237308276,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19856__auto__","this__19856__auto__",127548766,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19857__auto__","this__19857__auto__",-217817411,null)),(function (){var x__9342__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19858__auto__","this__19858__auto__",-558027936,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19859__auto__","k__19859__auto__",1796965982,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19858__auto__","this__19858__auto__",-558027936,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19859__auto__","k__19859__auto__",1796965982,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19860__auto__","this__19860__auto__",-728169260,null)),(function (){var x__9342__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__19861__auto__","else__19861__auto__",319775380,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9342__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9342__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__19861__auto__","else__19861__auto__",319775380,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19862__auto__","this__19862__auto__",940466017,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9342__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19863__auto__","this__19863__auto__",-77773758,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__19864__auto__","entry__19864__auto__",703123090,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__19864__auto__","entry__19864__auto__",703123090,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19863__auto__","this__19863__auto__",-77773758,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__19864__auto__","entry__19864__auto__",703123090,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__19864__auto__","entry__19864__auto__",703123090,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19863__auto__","this__19863__auto__",-77773758,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__19864__auto__","entry__19864__auto__",703123090,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19865__auto__","this__19865__auto__",1445460180,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19866__auto__","k__19866__auto__",-1071104908,null)),(function (){var x__9342__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19866__auto__","k__19866__auto__",-1071104908,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19866__auto__","k__19866__auto__",-1071104908,null)),(function (){var x__9342__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19867__auto__","this__19867__auto__",946472976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19868__auto__","k__19868__auto__",-403313332,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__9342__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19868__auto__","k__19868__auto__",-403313332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9342__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19867__auto__","this__19867__auto__",946472976,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19868__auto__","k__19868__auto__",-403313332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__19868__auto__","k__19868__auto__",-403313332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19870__auto__","this__19870__auto__",-140432578,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__19869_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.keyword.call(null,p1__19869_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = p1__19869_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9342__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19872__auto__","this__19872__auto__",-868202995,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__19873__auto__","writer__19873__auto__",120480808,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__19874__auto__","opts__19874__auto__",141251435,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__19875__auto__","pr-pair__19875__auto__",1654260632,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__19876__auto__","keyval__19876__auto__",732839451,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__19873__auto__","writer__19873__auto__",120480808,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__19874__auto__","opts__19874__auto__",141251435,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__19876__auto__","keyval__19876__auto__",732839451,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__19873__auto__","writer__19873__auto__",120480808,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__19875__auto__","pr-pair__19875__auto__",1654260632,null)),(function (){var x__9342__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__19874__auto__","opts__19874__auto__",141251435,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__19871_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.keyword.call(null,p1__19871_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = p1__19871_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))], null));
var vec__19880 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__19880,(0),null);
var pmasks = cljs.core.nth.call(null,vec__19880,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__9342__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9342__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9342__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9342__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___19890 = arguments.length;
var i__9614__auto___19891 = (0);
while(true){
if((i__9614__auto___19891 < len__9613__auto___19890)){
args__9620__auto__.push((arguments[i__9614__auto___19891]));

var G__19892 = (i__9614__auto___19891 + (1));
i__9614__auto___19891 = G__19892;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((4) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9621__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9342__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9342__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__9342__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19883__auto__","this__19883__auto__",363206309,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9342__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9342__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__19883__auto__","this__19883__auto__",363206309,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__19884__auto__","writer__19884__auto__",1225089915,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__19884__auto__","writer__19884__auto__",1225089915,null)),(function (){var x__9342__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq19885){
var G__19886 = cljs.core.first.call(null,seq19885);
var seq19885__$1 = cljs.core.next.call(null,seq19885);
var G__19887 = cljs.core.first.call(null,seq19885__$1);
var seq19885__$2 = cljs.core.next.call(null,seq19885__$1);
var G__19888 = cljs.core.first.call(null,seq19885__$2);
var seq19885__$3 = cljs.core.next.call(null,seq19885__$2);
var G__19889 = cljs.core.first.call(null,seq19885__$3);
var seq19885__$4 = cljs.core.next.call(null,seq19885__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__19886,G__19887,G__19888,G__19889,seq19885__$4);
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
var args__9620__auto__ = [];
var len__9613__auto___19920 = arguments.length;
var i__9614__auto___19921 = (0);
while(true){
if((i__9614__auto___19921 < len__9613__auto___19920)){
args__9620__auto__.push((arguments[i__9614__auto___19921]));

var G__19922 = (i__9614__auto___19921 + (1));
i__9614__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__19899 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__19899,(0),null);
var methods$ = cljs.core.nth.call(null,vec__19899,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__19899,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__19899,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__19902 = cljs.core.seq.call(null,methods$);
var chunk__19903 = null;
var count__19904 = (0);
var i__19905 = (0);
while(true){
if((i__19905 < count__19904)){
var vec__19906 = cljs.core._nth.call(null,chunk__19903,i__19905);
var seq__19907 = cljs.core.seq.call(null,vec__19906);
var first__19908 = cljs.core.first.call(null,seq__19907);
var seq__19907__$1 = cljs.core.next.call(null,seq__19907);
var mname = first__19908;
var arities = seq__19907__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__19923 = seq__19902;
var G__19924 = chunk__19903;
var G__19925 = count__19904;
var G__19926 = (i__19905 + (1));
seq__19902 = G__19923;
chunk__19903 = G__19924;
count__19904 = G__19925;
i__19905 = G__19926;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19902);
if(temp__4657__auto__){
var seq__19902__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19902__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__19902__$1);
var G__19927 = cljs.core.chunk_rest.call(null,seq__19902__$1);
var G__19928 = c__9319__auto__;
var G__19929 = cljs.core.count.call(null,c__9319__auto__);
var G__19930 = (0);
seq__19902 = G__19927;
chunk__19903 = G__19928;
count__19904 = G__19929;
i__19905 = G__19930;
continue;
} else {
var vec__19909 = cljs.core.first.call(null,seq__19902__$1);
var seq__19910 = cljs.core.seq.call(null,vec__19909);
var first__19911 = cljs.core.first.call(null,seq__19910);
var seq__19910__$1 = cljs.core.next.call(null,seq__19910);
var mname = first__19911;
var arities = seq__19910__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__19931 = cljs.core.next.call(null,seq__19902__$1);
var G__19932 = null;
var G__19933 = (0);
var G__19934 = (0);
seq__19902 = G__19931;
chunk__19903 = G__19932;
count__19904 = G__19933;
i__19905 = G__19934;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19893__auto__","x__19893__auto__",1756994086,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__19894__auto__","m__19894__auto__",-1046740267,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9342__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19893__auto__","x__19893__auto__",1756994086,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__19894__auto__","m__19894__auto__",-1046740267,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__19894__auto__","m__19894__auto__",-1046740267,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__19894__auto__","m__19894__auto__",-1046740267,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9342__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__19894__auto__","m__19894__auto__",-1046740267,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__19894__auto__","m__19894__auto__",-1046740267,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__9342__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__19912){
var vec__19913 = p__19912;
var seq__19914 = cljs.core.seq.call(null,vec__19913);
var first__19915 = cljs.core.first.call(null,seq__19914);
var seq__19914__$1 = cljs.core.next.call(null,seq__19914);
var fname = first__19915;
var sigs = seq__19914__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__19916){
var vec__19917 = p__19916;
var seq__19918 = cljs.core.seq.call(null,vec__19917);
var first__19919 = cljs.core.first.call(null,seq__19918);
var seq__19918__$1 = cljs.core.next.call(null,seq__19918);
var fname = first__19919;
var sigs = seq__19918__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9342__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__19917,seq__19918,first__19919,seq__19918__$1,fname,sigs,p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__19917,seq__19918,first__19919,seq__19918__$1,fname,sigs,p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__19899,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9342__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq19895){
var G__19896 = cljs.core.first.call(null,seq19895);
var seq19895__$1 = cljs.core.next.call(null,seq19895);
var G__19897 = cljs.core.first.call(null,seq19895__$1);
var seq19895__$2 = cljs.core.next.call(null,seq19895__$1);
var G__19898 = cljs.core.first.call(null,seq19895__$2);
var seq19895__$3 = cljs.core.next.call(null,seq19895__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__19896,G__19897,G__19898,seq19895__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__19938 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__19938,(0),null);
var bit = cljs.core.nth.call(null,vec__19938,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9342__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9342__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var vec__19944 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__19944,(0),null);
var bit = cljs.core.nth.call(null,vec__19944,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9342__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9342__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9342__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9342__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9342__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9342__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___19950 = arguments.length;
var i__9614__auto___19951 = (0);
while(true){
if((i__9614__auto___19951 < len__9613__auto___19950)){
args__9620__auto__.push((arguments[i__9614__auto___19951]));

var G__19952 = (i__9614__auto___19951 + (1));
i__9614__auto___19951 = G__19952;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq19947){
var G__19948 = cljs.core.first.call(null,seq19947);
var seq19947__$1 = cljs.core.next.call(null,seq19947);
var G__19949 = cljs.core.first.call(null,seq19947__$1);
var seq19947__$2 = cljs.core.next.call(null,seq19947__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__19948,G__19949,seq19947__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__9620__auto__ = [];
var len__9613__auto___19956 = arguments.length;
var i__9614__auto___19957 = (0);
while(true){
if((i__9614__auto___19957 < len__9613__auto___19956)){
args__9620__auto__.push((arguments[i__9614__auto___19957]));

var G__19958 = (i__9614__auto___19957 + (1));
i__9614__auto___19957 = G__19958;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq19953){
var G__19954 = cljs.core.first.call(null,seq19953);
var seq19953__$1 = cljs.core.next.call(null,seq19953);
var G__19955 = cljs.core.first.call(null,seq19953__$1);
var seq19953__$2 = cljs.core.next.call(null,seq19953__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__19954,G__19955,seq19953__$2);
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
var args__9620__auto__ = [];
var len__9613__auto___19967 = arguments.length;
var i__9614__auto___19968 = (0);
while(true){
if((i__9614__auto___19968 < len__9613__auto___19967)){
args__9620__auto__.push((arguments[i__9614__auto___19968]));

var G__19969 = (i__9614__auto___19968 + (1));
i__9614__auto___19968 = G__19969;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__19963){
var vec__19964 = p__19963;
var k = cljs.core.nth.call(null,vec__19964,(0),null);
var v = cljs.core.nth.call(null,vec__19964,(1),null);
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq19959){
var G__19960 = cljs.core.first.call(null,seq19959);
var seq19959__$1 = cljs.core.next.call(null,seq19959);
var G__19961 = cljs.core.first.call(null,seq19959__$1);
var seq19959__$2 = cljs.core.next.call(null,seq19959__$1);
var G__19962 = cljs.core.first.call(null,seq19959__$2);
var seq19959__$3 = cljs.core.next.call(null,seq19959__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__19960,G__19961,G__19962,seq19959__$3);
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
var args__9620__auto__ = [];
var len__9613__auto___19974 = arguments.length;
var i__9614__auto___19975 = (0);
while(true){
if((i__9614__auto___19975 < len__9613__auto___19974)){
args__9620__auto__.push((arguments[i__9614__auto___19975]));

var G__19976 = (i__9614__auto___19975 + (1));
i__9614__auto___19975 = G__19976;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__9342__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq19970){
var G__19971 = cljs.core.first.call(null,seq19970);
var seq19970__$1 = cljs.core.next.call(null,seq19970);
var G__19972 = cljs.core.first.call(null,seq19970__$1);
var seq19970__$2 = cljs.core.next.call(null,seq19970__$1);
var G__19973 = cljs.core.first.call(null,seq19970__$2);
var seq19970__$3 = cljs.core.next.call(null,seq19970__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__19971,G__19972,G__19973,seq19970__$3);
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
var args__9620__auto__ = [];
var len__9613__auto___19995 = arguments.length;
var i__9614__auto___19996 = (0);
while(true){
if((i__9614__auto___19996 < len__9613__auto___19995)){
args__9620__auto__.push((arguments[i__9614__auto___19996]));

var G__19997 = (i__9614__auto___19996 + (1));
i__9614__auto___19996 = G__19997;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((4) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9621__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__19989 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__19992 = cljs.core.nth.call(null,vec__19989,(0),null);
var a = cljs.core.nth.call(null,vec__19992,(0),null);
var b = cljs.core.nth.call(null,vec__19992,(1),null);
var c = cljs.core.nth.call(null,vec__19992,(2),null);
var clause = vec__19992;
var more = cljs.core.nth.call(null,vec__19989,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9342__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__19977__auto__","p__19977__auto__",-285080957,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__19977__auto__","p__19977__auto__",-285080957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq19978){
var G__19979 = cljs.core.first.call(null,seq19978);
var seq19978__$1 = cljs.core.next.call(null,seq19978);
var G__19980 = cljs.core.first.call(null,seq19978__$1);
var seq19978__$2 = cljs.core.next.call(null,seq19978__$1);
var G__19981 = cljs.core.first.call(null,seq19978__$2);
var seq19978__$3 = cljs.core.next.call(null,seq19978__$2);
var G__19982 = cljs.core.first.call(null,seq19978__$3);
var seq19978__$4 = cljs.core.next.call(null,seq19978__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__19979,G__19980,G__19981,G__19982,seq19978__$4);
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
var m = (function (){var and__8493__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__8493__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__8493__auto__;
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
var args__9620__auto__ = [];
var len__9613__auto___20018 = arguments.length;
var i__9614__auto___20019 = (0);
while(true){
if((i__9614__auto___20019 < len__9613__auto___20018)){
args__9620__auto__.push((arguments[i__9614__auto___20019]));

var G__20020 = (i__9614__auto___20019 + (1));
i__9614__auto___20019 = G__20020;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9342__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__20006){
var vec__20007 = p__20006;
var test = cljs.core.nth.call(null,vec__20007,(0),null);
var expr = cljs.core.nth.call(null,vec__20007,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__20007,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__9342__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__20007,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__9342__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return (function (p1__19998_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__19998_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__19999_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__19999_SHARP_)){
return cljs.core.vec.call(null,p1__19999_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19999_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9342__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__20001_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20001_SHARP_)){
return cljs.core.vec.call(null,p1__20001_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20001_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__20000_SHARP_){
return [cljs.core.str(p1__20000_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__9342__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__9342__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9342__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__20014){
var vec__20015 = p__20014;
var m = cljs.core.nth.call(null,vec__20015,(0),null);
var c = cljs.core.nth.call(null,vec__20015,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9342__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9342__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq20002){
var G__20003 = cljs.core.first.call(null,seq20002);
var seq20002__$1 = cljs.core.next.call(null,seq20002);
var G__20004 = cljs.core.first.call(null,seq20002__$1);
var seq20002__$2 = cljs.core.next.call(null,seq20002__$1);
var G__20005 = cljs.core.first.call(null,seq20002__$2);
var seq20002__$3 = cljs.core.next.call(null,seq20002__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__20003,G__20004,G__20005,seq20002__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args20021 = [];
var len__9613__auto___20024 = arguments.length;
var i__9614__auto___20025 = (0);
while(true){
if((i__9614__auto___20025 < len__9613__auto___20024)){
args20021.push((arguments[i__9614__auto___20025]));

var G__20026 = (i__9614__auto___20025 + (1));
i__9614__auto___20025 = G__20026;
continue;
} else {
}
break;
}

var G__20023 = args20021.length;
switch (G__20023) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args20021.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9342__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__9342__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__9342__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__20114){
var vec__20115 = p__20114;
var k = cljs.core.nth.call(null,vec__20115,(0),null);
var v = cljs.core.nth.call(null,vec__20115,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__20195__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20195 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20196__i = 0, G__20196__a = new Array(arguments.length -  0);
while (G__20196__i < G__20196__a.length) {G__20196__a[G__20196__i] = arguments[G__20196__i + 0]; ++G__20196__i;}
  msg = new cljs.core.IndexedSeq(G__20196__a,0);
} 
return G__20195__delegate.call(this,msg);};
G__20195.cljs$lang$maxFixedArity = 0;
G__20195.cljs$lang$applyTo = (function (arglist__20197){
var msg = cljs.core.seq(arglist__20197);
return G__20195__delegate(msg);
});
G__20195.cljs$core$IFn$_invoke$arity$variadic = G__20195__delegate;
return G__20195;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__20118){
var vec__20157 = p__20118;
var seq__20158 = cljs.core.seq.call(null,vec__20157);
var first__20159 = cljs.core.first.call(null,seq__20158);
var seq__20158__$1 = cljs.core.next.call(null,seq__20158);
var vec__20160 = first__20159;
var seq__20161 = cljs.core.seq.call(null,vec__20160);
var first__20162 = cljs.core.first.call(null,seq__20161);
var seq__20161__$1 = cljs.core.next.call(null,seq__20161);
var bind = first__20162;
var first__20162__$1 = cljs.core.first.call(null,seq__20161__$1);
var seq__20161__$2 = cljs.core.next.call(null,seq__20161__$1);
var expr = first__20162__$1;
var mod_pairs = seq__20161__$2;
var vec__20163 = seq__20158__$1;
var vec__20166 = cljs.core.nth.call(null,vec__20163,(0),null);
var _ = cljs.core.nth.call(null,vec__20166,(0),null);
var next_expr = cljs.core.nth.call(null,vec__20166,(1),null);
var next_groups = vec__20163;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__20157,seq__20158,first__20159,seq__20158__$1,vec__20160,seq__20161,first__20162,seq__20161__$1,bind,first__20162__$1,seq__20161__$2,expr,mod_pairs,vec__20163,vec__20166,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__20169){
var vec__20176 = p__20169;
var seq__20177 = cljs.core.seq.call(null,vec__20176);
var first__20178 = cljs.core.first.call(null,seq__20177);
var seq__20177__$1 = cljs.core.next.call(null,seq__20177);
var vec__20179 = first__20178;
var k = cljs.core.nth.call(null,vec__20179,(0),null);
var v = cljs.core.nth.call(null,vec__20179,(1),null);
var pair = vec__20179;
var etc = seq__20177__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20028__auto__","iterys__20028__auto__",-530428475,null)),(function (){var x__9342__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20029__auto__","fs__20029__auto__",759358253,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20028__auto__","iterys__20028__auto__",-530428475,null)),(function (){var x__9342__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20029__auto__","fs__20029__auto__",759358253,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20029__auto__","fs__20029__auto__",759358253,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__9342__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__20157,seq__20158,first__20159,seq__20158__$1,vec__20160,seq__20161,first__20162,seq__20161__$1,bind,first__20162__$1,seq__20161__$2,expr,mod_pairs,vec__20163,vec__20166,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__20157,seq__20158,first__20159,seq__20158__$1,vec__20160,seq__20161,first__20162,seq__20161__$1,bind,first__20162__$1,seq__20161__$2,expr,mod_pairs,vec__20163,vec__20166,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__20182){
var vec__20189 = p__20182;
var seq__20190 = cljs.core.seq.call(null,vec__20189);
var first__20191 = cljs.core.first.call(null,seq__20190);
var seq__20190__$1 = cljs.core.next.call(null,seq__20190);
var vec__20192 = first__20191;
var k = cljs.core.nth.call(null,vec__20192,(0),null);
var v = cljs.core.nth.call(null,vec__20192,(1),null);
var pair = vec__20192;
var etc = seq__20190__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9342__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__9342__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9342__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__20157,seq__20158,first__20159,seq__20158__$1,vec__20160,seq__20161,first__20162,seq__20161__$1,bind,first__20162__$1,seq__20161__$2,expr,mod_pairs,vec__20163,vec__20166,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20030__auto__","c__20030__auto__",-2076057389,null)),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20031__auto__","size__20031__auto__",-290724391,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20030__auto__","c__20030__auto__",-2076057389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20031__auto__","size__20031__auto__",-290724391,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20031__auto__","size__20031__auto__",-290724391,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20030__auto__","c__20030__auto__",-2076057389,null)),(function (){var x__9342__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9342__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9342__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9342__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20032__auto__","iter__20032__auto__",1686554507,null)),(function (){var x__9342__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20032__auto__","iter__20032__auto__",1686554507,null)),(function (){var x__9342__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20203 = arguments.length;
var i__9614__auto___20204 = (0);
while(true){
if((i__9614__auto___20204 < len__9613__auto___20203)){
args__9620__auto__.push((arguments[i__9614__auto___20204]));

var G__20205 = (i__9614__auto___20204 + (1));
i__9614__auto___20204 = G__20205;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
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
var G__20206__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20206 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20207__i = 0, G__20207__a = new Array(arguments.length -  0);
while (G__20207__i < G__20207__a.length) {G__20207__a[G__20207__i] = arguments[G__20207__i + 0]; ++G__20207__i;}
  msg = new cljs.core.IndexedSeq(G__20207__a,0);
} 
return G__20206__delegate.call(this,msg);};
G__20206.cljs$lang$maxFixedArity = 0;
G__20206.cljs$lang$applyTo = (function (arglist__20208){
var msg = cljs.core.seq(arglist__20208);
return G__20206__delegate(msg);
});
G__20206.cljs$core$IFn$_invoke$arity$variadic = G__20206__delegate;
return G__20206;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9342__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9342__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__9342__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20198__auto__","c__20198__auto__",-162156582,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20198__auto__","c__20198__auto__",-162156582,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20198__auto__","c__20198__auto__",-162156582,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9342__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq20199){
var G__20200 = cljs.core.first.call(null,seq20199);
var seq20199__$1 = cljs.core.next.call(null,seq20199);
var G__20201 = cljs.core.first.call(null,seq20199__$1);
var seq20199__$2 = cljs.core.next.call(null,seq20199__$1);
var G__20202 = cljs.core.first.call(null,seq20199__$2);
var seq20199__$3 = cljs.core.next.call(null,seq20199__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__20200,G__20201,G__20202,seq20199__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20212 = arguments.length;
var i__9614__auto___20213 = (0);
while(true){
if((i__9614__auto___20213 < len__9613__auto___20212)){
args__9620__auto__.push((arguments[i__9614__auto___20213]));

var G__20214 = (i__9614__auto___20213 + (1));
i__9614__auto___20213 = G__20214;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq20209){
var G__20210 = cljs.core.first.call(null,seq20209);
var seq20209__$1 = cljs.core.next.call(null,seq20209);
var G__20211 = cljs.core.first.call(null,seq20209__$1);
var seq20209__$2 = cljs.core.next.call(null,seq20209__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__20210,G__20211,seq20209__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args20218 = [];
var len__9613__auto___20226 = arguments.length;
var i__9614__auto___20227 = (0);
while(true){
if((i__9614__auto___20227 < len__9613__auto___20226)){
args20218.push((arguments[i__9614__auto___20227]));

var G__20228 = (i__9614__auto___20227 + (1));
i__9614__auto___20227 = G__20228;
continue;
} else {
}
break;
}

var G__20225 = args20218.length;
switch (G__20225) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args20218.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9632__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__9342__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9342__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20215__auto__","dims__20215__auto__",-561991482,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20216__auto__","dimarray__20216__auto__",-1013980372,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9342__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20217__auto__","i__20217__auto__",1553519266,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20216__auto__","dimarray__20216__auto__",-1013980372,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20216__auto__","dimarray__20216__auto__",-1013980372,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20217__auto__","i__20217__auto__",1553519266,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20215__auto__","dims__20215__auto__",-561991482,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20216__auto__","dimarray__20216__auto__",-1013980372,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq20219){
var G__20220 = cljs.core.first.call(null,seq20219);
var seq20219__$1 = cljs.core.next.call(null,seq20219);
var G__20221 = cljs.core.first.call(null,seq20219__$1);
var seq20219__$2 = cljs.core.next.call(null,seq20219__$1);
var G__20222 = cljs.core.first.call(null,seq20219__$2);
var seq20219__$3 = cljs.core.next.call(null,seq20219__$2);
var G__20223 = cljs.core.first.call(null,seq20219__$3);
var seq20219__$4 = cljs.core.next.call(null,seq20219__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__20220,G__20221,G__20222,G__20223,seq20219__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args20231 = [];
var len__9613__auto___20238 = arguments.length;
var i__9614__auto___20239 = (0);
while(true){
if((i__9614__auto___20239 < len__9613__auto___20238)){
args20231.push((arguments[i__9614__auto___20239]));

var G__20240 = (i__9614__auto___20239 + (1));
i__9614__auto___20239 = G__20240;
continue;
} else {
}
break;
}

var G__20237 = args20231.length;
switch (G__20237) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args20231.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9632__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20230__auto__","x__20230__auto__",-1521121138,null)),(function (){var x__9342__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20230__auto__","x__20230__auto__",-1521121138,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq20232){
var G__20233 = cljs.core.first.call(null,seq20232);
var seq20232__$1 = cljs.core.next.call(null,seq20232);
var G__20234 = cljs.core.first.call(null,seq20232__$1);
var seq20232__$2 = cljs.core.next.call(null,seq20232__$1);
var G__20235 = cljs.core.first.call(null,seq20232__$2);
var seq20232__$3 = cljs.core.next.call(null,seq20232__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__20233,G__20234,G__20235,seq20232__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args20242 = [];
var len__9613__auto___20248 = arguments.length;
var i__9614__auto___20249 = (0);
while(true){
if((i__9614__auto___20249 < len__9613__auto___20248)){
args20242.push((arguments[i__9614__auto___20249]));

var G__20250 = (i__9614__auto___20249 + (1));
i__9614__auto___20249 = G__20250;
continue;
} else {
}
break;
}

var G__20247 = args20242.length;
switch (G__20247) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args20242.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9632__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq20243){
var G__20244 = cljs.core.first.call(null,seq20243);
var seq20243__$1 = cljs.core.next.call(null,seq20243);
var G__20245 = cljs.core.first.call(null,seq20243__$1);
var seq20243__$2 = cljs.core.next.call(null,seq20243__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__20244,G__20245,seq20243__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args20254 = [];
var len__9613__auto___20260 = arguments.length;
var i__9614__auto___20261 = (0);
while(true){
if((i__9614__auto___20261 < len__9613__auto___20260)){
args20254.push((arguments[i__9614__auto___20261]));

var G__20262 = (i__9614__auto___20261 + (1));
i__9614__auto___20261 = G__20262;
continue;
} else {
}
break;
}

var G__20259 = args20254.length;
switch (G__20259) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args20254.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9632__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__20252_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20252_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__20253_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20253_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq20255){
var G__20256 = cljs.core.first.call(null,seq20255);
var seq20255__$1 = cljs.core.next.call(null,seq20255);
var G__20257 = cljs.core.first.call(null,seq20255__$1);
var seq20255__$2 = cljs.core.next.call(null,seq20255__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__20256,G__20257,seq20255__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args20264 = [];
var len__9613__auto___20270 = arguments.length;
var i__9614__auto___20271 = (0);
while(true){
if((i__9614__auto___20271 < len__9613__auto___20270)){
args20264.push((arguments[i__9614__auto___20271]));

var G__20272 = (i__9614__auto___20271 + (1));
i__9614__auto___20271 = G__20272;
continue;
} else {
}
break;
}

var G__20269 = args20264.length;
switch (G__20269) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args20264.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9632__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq20265){
var G__20266 = cljs.core.first.call(null,seq20265);
var seq20265__$1 = cljs.core.next.call(null,seq20265);
var G__20267 = cljs.core.first.call(null,seq20265__$1);
var seq20265__$2 = cljs.core.next.call(null,seq20265__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__20266,G__20267,seq20265__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args20276 = [];
var len__9613__auto___20282 = arguments.length;
var i__9614__auto___20283 = (0);
while(true){
if((i__9614__auto___20283 < len__9613__auto___20282)){
args20276.push((arguments[i__9614__auto___20283]));

var G__20284 = (i__9614__auto___20283 + (1));
i__9614__auto___20283 = G__20284;
continue;
} else {
}
break;
}

var G__20281 = args20276.length;
switch (G__20281) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9632__auto__ = (new cljs.core.IndexedSeq(args20276.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9632__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__20274_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20274_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__20275_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20275_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9342__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq20277){
var G__20278 = cljs.core.first.call(null,seq20277);
var seq20277__$1 = cljs.core.next.call(null,seq20277);
var G__20279 = cljs.core.first.call(null,seq20277__$1);
var seq20277__$2 = cljs.core.next.call(null,seq20277__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__20278,G__20279,seq20277__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20301 = arguments.length;
var i__9614__auto___20302 = (0);
while(true){
if((i__9614__auto___20302 < len__9613__auto___20301)){
args__9620__auto__.push((arguments[i__9614__auto___20302]));

var G__20303 = (i__9614__auto___20302 + (1));
i__9614__auto___20302 = G__20303;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__20289){
var vec__20290 = p__20289;
var k = cljs.core.nth.call(null,vec__20290,(0),null);
var _ = cljs.core.nth.call(null,vec__20290,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__9342__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__20293){
var vec__20294 = p__20293;
var k = cljs.core.nth.call(null,vec__20294,(0),null);
var v = cljs.core.nth.call(null,vec__20294,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9342__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__20297){
var vec__20298 = p__20297;
var k = cljs.core.nth.call(null,vec__20298,(0),null);
var v = cljs.core.nth.call(null,vec__20298,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9342__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9342__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq20286){
var G__20287 = cljs.core.first.call(null,seq20286);
var seq20286__$1 = cljs.core.next.call(null,seq20286);
var G__20288 = cljs.core.first.call(null,seq20286__$1);
var seq20286__$2 = cljs.core.next.call(null,seq20286__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__20287,G__20288,seq20286__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20304__auto__","a__20304__auto__",1999937871,null)),(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20304__auto__","a__20304__auto__",1999937871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20304__auto__","a__20304__auto__",1999937871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9342__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20305__auto__","a__20305__auto__",1426251408,null)),(function (){var x__9342__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9342__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20305__auto__","a__20305__auto__",1426251408,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9342__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var args__9620__auto__ = [];
var len__9613__auto___20311 = arguments.length;
var i__9614__auto___20312 = (0);
while(true){
if((i__9614__auto___20312 < len__9613__auto___20311)){
args__9620__auto__.push((arguments[i__9614__auto___20312]));

var G__20313 = (i__9614__auto___20312 + (1));
i__9614__auto___20312 = G__20313;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__20306__auto__","n__20306__auto__",255869496,null)),(function (){var x__9342__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__20306__auto__","n__20306__auto__",255869496,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9342__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq20307){
var G__20308 = cljs.core.first.call(null,seq20307);
var seq20307__$1 = cljs.core.next.call(null,seq20307);
var G__20309 = cljs.core.first.call(null,seq20307__$1);
var seq20307__$2 = cljs.core.next.call(null,seq20307__$1);
var G__20310 = cljs.core.first.call(null,seq20307__$2);
var seq20307__$3 = cljs.core.next.call(null,seq20307__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__20308,G__20309,G__20310,seq20307__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20317 = arguments.length;
var i__9614__auto___20318 = (0);
while(true){
if((i__9614__auto___20318 < len__9613__auto___20317)){
args__9620__auto__.push((arguments[i__9614__auto___20318]));

var G__20319 = (i__9614__auto___20318 + (1));
i__9614__auto___20318 = G__20319;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((1) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9621__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__20314_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__20314_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq20315){
var G__20316 = cljs.core.first.call(null,seq20315);
var seq20315__$1 = cljs.core.next.call(null,seq20315);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__20316,seq20315__$1);
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
var args__9620__auto__ = [];
var len__9613__auto___20329 = arguments.length;
var i__9614__auto___20330 = (0);
while(true){
if((i__9614__auto___20330 < len__9613__auto___20329)){
args__9620__auto__.push((arguments[i__9614__auto___20330]));

var G__20331 = (i__9614__auto___20330 + (1));
i__9614__auto___20330 = G__20331;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__20320__auto__","method-table__20320__auto__",-1807382130,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9342__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__20321__auto__","prefer-table__20321__auto__",-1367925306,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9342__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__20322__auto__","method-cache__20322__auto__",-751154886,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9342__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__20323__auto__","cached-hierarchy__20323__auto__",-1267907779,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9342__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__20324__auto__","hierarchy__20324__auto__",703462483,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__9342__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9342__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__20324__auto__","hierarchy__20324__auto__",703462483,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__20320__auto__","method-table__20320__auto__",-1807382130,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__20321__auto__","prefer-table__20321__auto__",-1367925306,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__20322__auto__","method-cache__20322__auto__",-751154886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__20323__auto__","cached-hierarchy__20323__auto__",-1267907779,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq20325){
var G__20326 = cljs.core.first.call(null,seq20325);
var seq20325__$1 = cljs.core.next.call(null,seq20325);
var G__20327 = cljs.core.first.call(null,seq20325__$1);
var seq20325__$2 = cljs.core.next.call(null,seq20325__$1);
var G__20328 = cljs.core.first.call(null,seq20325__$2);
var seq20325__$3 = cljs.core.next.call(null,seq20325__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__20326,G__20327,G__20328,seq20325__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20337 = arguments.length;
var i__9614__auto___20338 = (0);
while(true){
if((i__9614__auto___20338 < len__9613__auto___20337)){
args__9620__auto__.push((arguments[i__9614__auto___20338]));

var G__20339 = (i__9614__auto___20338 + (1));
i__9614__auto___20338 = G__20339;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((4) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9621__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq20332){
var G__20333 = cljs.core.first.call(null,seq20332);
var seq20332__$1 = cljs.core.next.call(null,seq20332);
var G__20334 = cljs.core.first.call(null,seq20332__$1);
var seq20332__$2 = cljs.core.next.call(null,seq20332__$1);
var G__20335 = cljs.core.first.call(null,seq20332__$2);
var seq20332__$3 = cljs.core.next.call(null,seq20332__$2);
var G__20336 = cljs.core.first.call(null,seq20332__$3);
var seq20332__$4 = cljs.core.next.call(null,seq20332__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__20333,G__20334,G__20335,G__20336,seq20332__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20340__auto__","start__20340__auto__",-1997559942,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20341__auto__","ret__20341__auto__",1133795734,null)),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20340__auto__","start__20340__auto__",-1997559942,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20341__auto__","ret__20341__auto__",1133795734,null)))));
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
var args__9620__auto__ = [];
var len__9613__auto___20356 = arguments.length;
var i__9614__auto___20357 = (0);
while(true){
if((i__9614__auto___20357 < len__9613__auto___20356)){
args__9620__auto__.push((arguments[i__9614__auto___20357]));

var G__20358 = (i__9614__auto___20357 + (1));
i__9614__auto___20357 = G__20358;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((5) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9621__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__20353){
var map__20354 = p__20353;
var map__20354__$1 = ((((!((map__20354 == null)))?((((map__20354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20354):map__20354);
var print_fn = cljs.core.get.call(null,map__20354__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20342__auto__","start__20342__auto__",-1315171985,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20343__auto__","ret__20343__auto__",1782296258,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___20344__auto__","___20344__auto__",355814614,null)),(function (){var x__9342__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__20345__auto__","end__20345__auto__",1947384590,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__20346__auto__","elapsed__20346__auto__",-1198493374,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__20345__auto__","end__20345__auto__",1947384590,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20342__auto__","start__20342__auto__",-1315171985,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__9342__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9342__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9342__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__20346__auto__","elapsed__20346__auto__",-1198493374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq20347){
var G__20348 = cljs.core.first.call(null,seq20347);
var seq20347__$1 = cljs.core.next.call(null,seq20347);
var G__20349 = cljs.core.first.call(null,seq20347__$1);
var seq20347__$2 = cljs.core.next.call(null,seq20347__$1);
var G__20350 = cljs.core.first.call(null,seq20347__$2);
var seq20347__$3 = cljs.core.next.call(null,seq20347__$2);
var G__20351 = cljs.core.first.call(null,seq20347__$3);
var seq20347__$4 = cljs.core.next.call(null,seq20347__$3);
var G__20352 = cljs.core.first.call(null,seq20347__$4);
var seq20347__$5 = cljs.core.next.call(null,seq20347__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__20348,G__20349,G__20350,G__20351,G__20352,seq20347__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args20359 = [];
var len__9613__auto___20362 = arguments.length;
var i__9614__auto___20363 = (0);
while(true){
if((i__9614__auto___20363 < len__9613__auto___20362)){
args20359.push((arguments[i__9614__auto___20363]));

var G__20364 = (i__9614__auto___20363 + (1));
i__9614__auto___20363 = G__20364;
continue;
} else {
}
break;
}

var G__20361 = args20359.length;
switch (G__20361) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20359.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__9342__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9342__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20371 = arguments.length;
var i__9614__auto___20372 = (0);
while(true){
if((i__9614__auto___20372 < len__9613__auto___20371)){
args__9620__auto__.push((arguments[i__9614__auto___20372]));

var G__20373 = (i__9614__auto___20372 + (1));
i__9614__auto___20372 = G__20373;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20366__auto__","sb__20366__auto__",2017940433,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20367__auto__","x__20367__auto__",2007041028,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20366__auto__","sb__20366__auto__",2017940433,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20367__auto__","x__20367__auto__",2007041028,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20366__auto__","sb__20366__auto__",2017940433,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq20368){
var G__20369 = cljs.core.first.call(null,seq20368);
var seq20368__$1 = cljs.core.next.call(null,seq20368);
var G__20370 = cljs.core.first.call(null,seq20368__$1);
var seq20368__$2 = cljs.core.next.call(null,seq20368__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__20369,G__20370,seq20368__$2);
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
var args__9620__auto__ = [];
var len__9613__auto___20378 = arguments.length;
var i__9614__auto___20379 = (0);
while(true){
if((i__9614__auto___20379 < len__9613__auto___20378)){
args__9620__auto__.push((arguments[i__9614__auto___20379]));

var G__20380 = (i__9614__auto___20379 + (1));
i__9614__auto___20379 = G__20380;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__20374_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = p1__20374_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq20375){
var G__20376 = cljs.core.first.call(null,seq20375);
var seq20375__$1 = cljs.core.next.call(null,seq20375);
var G__20377 = cljs.core.first.call(null,seq20375__$1);
var seq20375__$2 = cljs.core.next.call(null,seq20375__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__20376,G__20377,seq20375__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9342__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9342__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20381__auto__","this__20381__auto__",-826382889,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20381__auto__","this__20381__auto__",-826382889,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__20382){
var vec__20394 = p__20382;
var quote = cljs.core.nth.call(null,vec__20394,(0),null);
var ns = cljs.core.nth.call(null,vec__20394,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9342__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__20394,quote,ns){
return (function (p__20401){
var vec__20402 = p__20401;
var sym = cljs.core.nth.call(null,vec__20402,(0),null);
var _ = cljs.core.nth.call(null,vec__20402,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9342__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
});})(vec__20394,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__20405,p__20406){
var vec__20413 = p__20405;
var quote0 = cljs.core.nth.call(null,vec__20413,(0),null);
var ns = cljs.core.nth.call(null,vec__20413,(1),null);
var vec__20416 = p__20406;
var quote1 = cljs.core.nth.call(null,vec__20416,(0),null);
var sym = cljs.core.nth.call(null,vec__20416,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__9342__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20424 = arguments.length;
var i__9614__auto___20425 = (0);
while(true){
if((i__9614__auto___20425 < len__9613__auto___20424)){
args__9620__auto__.push((arguments[i__9614__auto___20425]));

var G__20426 = (i__9614__auto___20425 + (1));
i__9614__auto___20425 = G__20426;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((4) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9621__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__9342__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__9342__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq20419){
var G__20420 = cljs.core.first.call(null,seq20419);
var seq20419__$1 = cljs.core.next.call(null,seq20419);
var G__20421 = cljs.core.first.call(null,seq20419__$1);
var seq20419__$2 = cljs.core.next.call(null,seq20419__$1);
var G__20422 = cljs.core.first.call(null,seq20419__$2);
var seq20419__$3 = cljs.core.next.call(null,seq20419__$2);
var G__20423 = cljs.core.first.call(null,seq20419__$3);
var seq20419__$4 = cljs.core.next.call(null,seq20419__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20420,G__20421,G__20422,G__20423,seq20419__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20431 = arguments.length;
var i__9614__auto___20432 = (0);
while(true){
if((i__9614__auto___20432 < len__9613__auto___20431)){
args__9620__auto__.push((arguments[i__9614__auto___20432]));

var G__20433 = (i__9614__auto___20432 + (1));
i__9614__auto___20432 = G__20433;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq20427){
var G__20428 = cljs.core.first.call(null,seq20427);
var seq20427__$1 = cljs.core.next.call(null,seq20427);
var G__20429 = cljs.core.first.call(null,seq20427__$1);
var seq20427__$2 = cljs.core.next.call(null,seq20427__$1);
var G__20430 = cljs.core.first.call(null,seq20427__$2);
var seq20427__$3 = cljs.core.next.call(null,seq20427__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__20428,G__20429,G__20430,seq20427__$3);
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
var args__9620__auto__ = [];
var len__9613__auto___20437 = arguments.length;
var i__9614__auto___20438 = (0);
while(true){
if((i__9614__auto___20438 < len__9613__auto___20437)){
args__9620__auto__.push((arguments[i__9614__auto___20438]));

var G__20439 = (i__9614__auto___20438 + (1));
i__9614__auto___20438 = G__20439;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9342__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq20434){
var G__20435 = cljs.core.first.call(null,seq20434);
var seq20434__$1 = cljs.core.next.call(null,seq20434);
var G__20436 = cljs.core.first.call(null,seq20434__$1);
var seq20434__$2 = cljs.core.next.call(null,seq20434__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__20435,G__20436,seq20434__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20443 = arguments.length;
var i__9614__auto___20444 = (0);
while(true){
if((i__9614__auto___20444 < len__9613__auto___20443)){
args__9620__auto__.push((arguments[i__9614__auto___20444]));

var G__20445 = (i__9614__auto___20444 + (1));
i__9614__auto___20444 = G__20445;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9342__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq20440){
var G__20441 = cljs.core.first.call(null,seq20440);
var seq20440__$1 = cljs.core.next.call(null,seq20440);
var G__20442 = cljs.core.first.call(null,seq20440__$1);
var seq20440__$2 = cljs.core.next.call(null,seq20440__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__20441,G__20442,seq20440__$2);
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
var args__9620__auto__ = [];
var len__9613__auto___20449 = arguments.length;
var i__9614__auto___20450 = (0);
while(true){
if((i__9614__auto___20450 < len__9613__auto___20449)){
args__9620__auto__.push((arguments[i__9614__auto___20450]));

var G__20451 = (i__9614__auto___20450 + (1));
i__9614__auto___20450 = G__20451;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9342__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq20446){
var G__20447 = cljs.core.first.call(null,seq20446);
var seq20446__$1 = cljs.core.next.call(null,seq20446);
var G__20448 = cljs.core.first.call(null,seq20446__$1);
var seq20446__$2 = cljs.core.next.call(null,seq20446__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__20447,G__20448,seq20446__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__9620__auto__ = [];
var len__9613__auto___20455 = arguments.length;
var i__9614__auto___20456 = (0);
while(true){
if((i__9614__auto___20456 < len__9613__auto___20455)){
args__9620__auto__.push((arguments[i__9614__auto___20456]));

var G__20457 = (i__9614__auto___20456 + (1));
i__9614__auto___20456 = G__20457;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9342__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq20452){
var G__20453 = cljs.core.first.call(null,seq20452);
var seq20452__$1 = cljs.core.next.call(null,seq20452);
var G__20454 = cljs.core.first.call(null,seq20452__$1);
var seq20452__$2 = cljs.core.next.call(null,seq20452__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__20453,G__20454,seq20452__$2);
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
var args__9620__auto__ = [];
var len__9613__auto___20461 = arguments.length;
var i__9614__auto___20462 = (0);
while(true){
if((i__9614__auto___20462 < len__9613__auto___20461)){
args__9620__auto__.push((arguments[i__9614__auto___20462]));

var G__20463 = (i__9614__auto___20462 + (1));
i__9614__auto___20462 = G__20463;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9342__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq20458){
var G__20459 = cljs.core.first.call(null,seq20458);
var seq20458__$1 = cljs.core.next.call(null,seq20458);
var G__20460 = cljs.core.first.call(null,seq20458__$1);
var seq20458__$2 = cljs.core.next.call(null,seq20458__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__20459,G__20460,seq20458__$2);
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
var args__9620__auto__ = [];
var len__9613__auto___20467 = arguments.length;
var i__9614__auto___20468 = (0);
while(true){
if((i__9614__auto___20468 < len__9613__auto___20467)){
args__9620__auto__.push((arguments[i__9614__auto___20468]));

var G__20469 = (i__9614__auto___20468 + (1));
i__9614__auto___20468 = G__20469;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((2) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9621__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9342__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq20464){
var G__20465 = cljs.core.first.call(null,seq20464);
var seq20464__$1 = cljs.core.next.call(null,seq20464);
var G__20466 = cljs.core.first.call(null,seq20464__$1);
var seq20464__$2 = cljs.core.next.call(null,seq20464__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__20465,G__20466,seq20464__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__9342__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9342__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var G__20470 = form_SINGLEQUOTE_;
var G__20471 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__20470;
form_SINGLEQUOTE_ = G__20471;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9342__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var and__8493__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__8493__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__8493__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args20472 = [];
var len__9613__auto___20479 = arguments.length;
var i__9614__auto___20480 = (0);
while(true){
if((i__9614__auto___20480 < len__9613__auto___20479)){
args20472.push((arguments[i__9614__auto___20480]));

var G__20481 = (i__9614__auto___20480 + (1));
i__9614__auto___20480 = G__20481;
continue;
} else {
}
break;
}

var G__20474 = args20472.length;
switch (G__20474) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20472.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__20475,solo){
var vec__20476 = p__20475;
var seq__20477 = cljs.core.seq.call(null,vec__20476);
var first__20478 = cljs.core.first.call(null,seq__20477);
var seq__20477__$1 = cljs.core.next.call(null,seq__20477);
var arglist = first__20478;
var body = seq__20477__$1;
var method = vec__20476;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
});})(sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),params,(function (){var x__9342__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9342__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});})(sig,restarg,vec__20476,seq__20477,first__20478,seq__20477__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))):null),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__20483__auto__","len__20483__auto__",-227371377,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20484__auto__","i__20484__auto__",1279809548,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20484__auto__","i__20484__auto__",1279809548,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__20483__auto__","len__20483__auto__",-227371377,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__9342__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20484__auto__","i__20484__auto__",1279809548,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20484__auto__","i__20484__auto__",1279809548,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__20487,emit_var_QMARK_){
var vec__20494 = p__20487;
var vec__20497 = cljs.core.nth.call(null,vec__20494,(0),null);
var seq__20498 = cljs.core.seq.call(null,vec__20497);
var first__20499 = cljs.core.first.call(null,seq__20498);
var seq__20498__$1 = cljs.core.next.call(null,seq__20498);
var arglist = first__20499;
var body = seq__20498__$1;
var method = vec__20497;
var fdecl = vec__20494;
var dest_args = ((function (vec__20494,vec__20497,seq__20498,first__20499,seq__20498__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__20494,vec__20497,seq__20498,first__20499,seq__20498__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});})(vec__20494,vec__20497,seq__20498,first__20499,seq__20498__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__20494,vec__20497,seq__20498,first__20499,seq__20498__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__9342__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20485__auto__","args__20485__auto__",956121874,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20485__auto__","args__20485__auto__",956121874,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20486__auto__","argseq__20486__auto__",712998395,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9342__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20485__auto__","args__20485__auto__",956121874,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20485__auto__","args__20485__auto__",956121874,null)),(function (){var x__9342__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20486__auto__","argseq__20486__auto__",712998395,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__20524){
var vec__20528 = p__20524;
var seq__20529 = cljs.core.seq.call(null,vec__20528);
var first__20530 = cljs.core.first.call(null,seq__20529);
var seq__20529__$1 = cljs.core.next.call(null,seq__20529);
var sig = first__20530;
var body = seq__20529__$1;
var method = vec__20528;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__20500_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__20500_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9342__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__9342__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9342__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__20501_SHARP_){
return fixed_arity.call(null,rname,p1__20501_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__9342__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9342__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20502__auto__","argseq__20502__auto__",763021577,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__9342__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20502__auto__","argseq__20502__auto__",763021577,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9342__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9342__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9342__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),(function (){var x__9342__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9342__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__9342__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__20531__i = 0, G__20531__a = new Array(arguments.length -  3);
while (G__20531__i < G__20531__a.length) {G__20531__a[G__20531__i] = arguments[G__20531__i + 3]; ++G__20531__i;}
  fdecl = new cljs.core.IndexedSeq(G__20531__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__20532){
var _AMPERSAND_form = cljs.core.first(arglist__20532);
arglist__20532 = cljs.core.next(arglist__20532);
var _AMPERSAND_env = cljs.core.first(arglist__20532);
arglist__20532 = cljs.core.next(arglist__20532);
var name = cljs.core.first(arglist__20532);
var fdecl = cljs.core.rest(arglist__20532);
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
var args__9620__auto__ = [];
var len__9613__auto___20537 = arguments.length;
var i__9614__auto___20538 = (0);
while(true){
if((i__9614__auto___20538 < len__9613__auto___20537)){
args__9620__auto__.push((arguments[i__9614__auto___20538]));

var G__20539 = (i__9614__auto___20538 + (1));
i__9614__auto___20538 = G__20539;
continue;
} else {
}
break;
}

var argseq__9621__auto__ = ((((3) < args__9620__auto__.length))?(new cljs.core.IndexedSeq(args__9620__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9621__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9342__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__20540 = cljs.core.cons.call(null,f,p);
var G__20541 = cljs.core.next.call(null,args__$1);
p = G__20540;
args__$1 = G__20541;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__20542 = cljs.core.cons.call(null,f,p);
var G__20543 = cljs.core.next.call(null,args__$1);
p = G__20542;
args__$1 = G__20543;
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
var G__20544 = cljs.core.next.call(null,fd);
fd = G__20544;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__20545 = cljs.core.next.call(null,fd);
fd = G__20545;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__9342__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto__);
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
var G__20546 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__20547 = cljs.core.next.call(null,ds);
acc = G__20546;
ds = G__20547;
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
var G__20548 = cljs.core.next.call(null,p);
var G__20549 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__20548;
d = G__20549;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__9342__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = cljs.core._conj.call(null,(function (){var x__9342__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9342__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__9342__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9342__auto____$1);
})(),x__9342__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq20533){
var G__20534 = cljs.core.first.call(null,seq20533);
var seq20533__$1 = cljs.core.next.call(null,seq20533);
var G__20535 = cljs.core.first.call(null,seq20533__$1);
var seq20533__$2 = cljs.core.next.call(null,seq20533__$1);
var G__20536 = cljs.core.first.call(null,seq20533__$2);
var seq20533__$3 = cljs.core.next.call(null,seq20533__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__20534,G__20535,G__20536,seq20533__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map