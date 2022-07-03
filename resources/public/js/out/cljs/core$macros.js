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
var args__11456__auto__ = [];
var len__11449__auto___22158 = arguments.length;
var i__11450__auto___22159 = (0);
while(true){
if((i__11450__auto___22159 < len__11449__auto___22158)){
args__11456__auto__.push((arguments[i__11450__auto___22159]));

var G__22160 = (i__11450__auto___22159 + (1));
i__11450__auto___22159 = G__22160;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})());
var G__22161 = threaded;
var G__22162 = cljs.core.next.call(null,forms__$1);
x__$1 = G__22161;
forms__$1 = G__22162;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq22154){
var G__22155 = cljs.core.first.call(null,seq22154);
var seq22154__$1 = cljs.core.next.call(null,seq22154);
var G__22156 = cljs.core.first.call(null,seq22154__$1);
var seq22154__$2 = cljs.core.next.call(null,seq22154__$1);
var G__22157 = cljs.core.first.call(null,seq22154__$2);
var seq22154__$3 = cljs.core.next.call(null,seq22154__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22155,G__22156,G__22157,seq22154__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22167 = arguments.length;
var i__11450__auto___22168 = (0);
while(true){
if((i__11450__auto___22168 < len__11449__auto___22167)){
args__11456__auto__.push((arguments[i__11450__auto___22168]));

var G__22169 = (i__11450__auto___22168 + (1));
i__11450__auto___22168 = G__22169;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__11178__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})());
var G__22170 = threaded;
var G__22171 = cljs.core.next.call(null,forms__$1);
x__$1 = G__22170;
forms__$1 = G__22171;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq22163){
var G__22164 = cljs.core.first.call(null,seq22163);
var seq22163__$1 = cljs.core.next.call(null,seq22163);
var G__22165 = cljs.core.first.call(null,seq22163__$1);
var seq22163__$2 = cljs.core.next.call(null,seq22163__$1);
var G__22166 = cljs.core.first.call(null,seq22163__$2);
var seq22163__$3 = cljs.core.next.call(null,seq22163__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22164,G__22165,G__22166,seq22163__$3);
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
var args22172 = [];
var len__11449__auto___22180 = arguments.length;
var i__11450__auto___22181 = (0);
while(true){
if((i__11450__auto___22181 < len__11449__auto___22180)){
args22172.push((arguments[i__11450__auto___22181]));

var G__22182 = (i__11450__auto___22181 + (1));
i__11450__auto___22181 = G__22182;
continue;
} else {
}
break;
}

var G__22179 = args22172.length;
switch (G__22179) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22172.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq22173){
var G__22174 = cljs.core.first.call(null,seq22173);
var seq22173__$1 = cljs.core.next.call(null,seq22173);
var G__22175 = cljs.core.first.call(null,seq22173__$1);
var seq22173__$2 = cljs.core.next.call(null,seq22173__$1);
var G__22176 = cljs.core.first.call(null,seq22173__$2);
var seq22173__$3 = cljs.core.next.call(null,seq22173__$2);
var G__22177 = cljs.core.first.call(null,seq22173__$3);
var seq22173__$4 = cljs.core.next.call(null,seq22173__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__22174,G__22175,G__22176,G__22177,seq22173__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22187 = arguments.length;
var i__11450__auto___22188 = (0);
while(true){
if((i__11450__auto___22188 < len__11449__auto___22187)){
args__11456__auto__.push((arguments[i__11450__auto___22188]));

var G__22189 = (i__11450__auto___22188 + (1));
i__11450__auto___22188 = G__22189;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq22184){
var G__22185 = cljs.core.first.call(null,seq22184);
var seq22184__$1 = cljs.core.next.call(null,seq22184);
var G__22186 = cljs.core.first.call(null,seq22184__$1);
var seq22184__$2 = cljs.core.next.call(null,seq22184__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__22185,G__22186,seq22184__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22193 = arguments.length;
var i__11450__auto___22194 = (0);
while(true){
if((i__11450__auto___22194 < len__11449__auto___22193)){
args__11456__auto__.push((arguments[i__11450__auto___22194]));

var G__22195 = (i__11450__auto___22194 + (1));
i__11450__auto___22194 = G__22195;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__11178__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$2);
})(),x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq22190){
var G__22191 = cljs.core.first.call(null,seq22190);
var seq22190__$1 = cljs.core.next.call(null,seq22190);
var G__22192 = cljs.core.first.call(null,seq22190__$1);
var seq22190__$2 = cljs.core.next.call(null,seq22190__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__22191,G__22192,seq22190__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22200 = arguments.length;
var i__11450__auto___22201 = (0);
while(true){
if((i__11450__auto___22201 < len__11449__auto___22200)){
args__11456__auto__.push((arguments[i__11450__auto___22201]));

var G__22202 = (i__11450__auto___22201 + (1));
i__11450__auto___22201 = G__22202;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__22196_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.vary_meta.call(null,p1__22196_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq22197){
var G__22198 = cljs.core.first.call(null,seq22197);
var seq22197__$1 = cljs.core.next.call(null,seq22197);
var G__22199 = cljs.core.first.call(null,seq22197__$1);
var seq22197__$2 = cljs.core.next.call(null,seq22197__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__22198,G__22199,seq22197__$2);
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
var args__11456__auto__ = [];
var len__11449__auto___22207 = arguments.length;
var i__11450__auto___22208 = (0);
while(true){
if((i__11450__auto___22208 < len__11449__auto___22207)){
args__11456__auto__.push((arguments[i__11450__auto___22208]));

var G__22209 = (i__11450__auto___22208 + (1));
i__11450__auto___22208 = G__22209;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__11178__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq22203){
var G__22204 = cljs.core.first.call(null,seq22203);
var seq22203__$1 = cljs.core.next.call(null,seq22203);
var G__22205 = cljs.core.first.call(null,seq22203__$1);
var seq22203__$2 = cljs.core.next.call(null,seq22203__$1);
var G__22206 = cljs.core.first.call(null,seq22203__$2);
var seq22203__$3 = cljs.core.next.call(null,seq22203__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__22204,G__22205,G__22206,seq22203__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__22210 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__22211 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__22210;
s = G__22211;
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
return (function (p__22216){
var vec__22217 = p__22216;
var t = cljs.core.nth.call(null,vec__22217,(0),null);
var fs = cljs.core.nth.call(null,vec__22217,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11178__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var args__11456__auto__ = [];
var len__11449__auto___22224 = arguments.length;
var i__11450__auto___22225 = (0);
while(true){
if((i__11450__auto___22225 < len__11449__auto___22224)){
args__11456__auto__.push((arguments[i__11450__auto___22225]));

var G__22226 = (i__11450__auto___22225 + (1));
i__11450__auto___22225 = G__22226;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq22220){
var G__22221 = cljs.core.first.call(null,seq22220);
var seq22220__$1 = cljs.core.next.call(null,seq22220);
var G__22222 = cljs.core.first.call(null,seq22220__$1);
var seq22220__$2 = cljs.core.next.call(null,seq22220__$1);
var G__22223 = cljs.core.first.call(null,seq22220__$2);
var seq22220__$3 = cljs.core.next.call(null,seq22220__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__22221,G__22222,G__22223,seq22220__$3);
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
var G__22227 = cljs.core.next.call(null,params__$1);
var G__22228 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__22229 = lets;
params__$1 = G__22227;
new_params = G__22228;
lets = G__22229;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__22230 = cljs.core.next.call(null,params__$1);
var G__22231 = cljs.core.conj.call(null,new_params,gparam);
var G__22232 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__22230;
new_params = G__22231;
lets = G__22232;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var args__11456__auto__ = [];
var len__11449__auto___22239 = arguments.length;
var i__11450__auto___22240 = (0);
while(true){
if((i__11450__auto___22240 < len__11449__auto___22239)){
args__11456__auto__.push((arguments[i__11450__auto___22240]));

var G__22241 = (i__11450__auto___22240 + (1));
i__11450__auto___22240 = G__22241;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__11178__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join('')));
} else {
}

var vec__22236 = sig;
var seq__22237 = cljs.core.seq.call(null,vec__22236);
var first__22238 = cljs.core.first.call(null,seq__22237);
var seq__22237__$1 = cljs.core.next.call(null,seq__22237);
var params = first__22238;
var body = seq__22237__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__10336__auto__ = conds;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__11178__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.map.call(null,((function (vec__22236,seq__22237,first__22238,seq__22237__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__11178__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(vec__22236,seq__22237,first__22238,seq__22237__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__22236,seq__22237,first__22238,seq__22237__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__11178__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(vec__22236,seq__22237,first__22238,seq__22237__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq22233){
var G__22234 = cljs.core.first.call(null,seq22233);
var seq22233__$1 = cljs.core.next.call(null,seq22233);
var G__22235 = cljs.core.first.call(null,seq22233__$1);
var seq22233__$2 = cljs.core.next.call(null,seq22233__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__22234,G__22235,seq22233__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22246 = arguments.length;
var i__11450__auto___22247 = (0);
while(true){
if((i__11450__auto___22247 < len__11449__auto___22246)){
args__11456__auto__.push((arguments[i__11450__auto___22247]));

var G__22248 = (i__11450__auto___22247 + (1));
i__11450__auto___22247 = G__22248;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq22242){
var G__22243 = cljs.core.first.call(null,seq22242);
var seq22242__$1 = cljs.core.next.call(null,seq22242);
var G__22244 = cljs.core.first.call(null,seq22242__$1);
var seq22242__$2 = cljs.core.next.call(null,seq22242__$1);
var G__22245 = cljs.core.first.call(null,seq22242__$2);
var seq22242__$3 = cljs.core.next.call(null,seq22242__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__22243,G__22244,G__22245,seq22242__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args22250 = [];
var len__11449__auto___22259 = arguments.length;
var i__11450__auto___22260 = (0);
while(true){
if((i__11450__auto___22260 < len__11449__auto___22259)){
args22250.push((arguments[i__11450__auto___22260]));

var G__22261 = (i__11450__auto___22260 + (1));
i__11450__auto___22260 = G__22261;
continue;
} else {
}
break;
}

var G__22258 = args22250.length;
switch (G__22258) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22250.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11468__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__11178__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22249__auto__","temp__22249__auto__",-89827843,null)),(function (){var x__11178__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22249__auto__","temp__22249__auto__",-89827843,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22249__auto__","temp__22249__auto__",-89827843,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq22251){
var G__22252 = cljs.core.first.call(null,seq22251);
var seq22251__$1 = cljs.core.next.call(null,seq22251);
var G__22253 = cljs.core.first.call(null,seq22251__$1);
var seq22251__$2 = cljs.core.next.call(null,seq22251__$1);
var G__22254 = cljs.core.first.call(null,seq22251__$2);
var seq22251__$3 = cljs.core.next.call(null,seq22251__$2);
var G__22255 = cljs.core.first.call(null,seq22251__$3);
var seq22251__$4 = cljs.core.next.call(null,seq22251__$3);
var G__22256 = cljs.core.first.call(null,seq22251__$4);
var seq22251__$5 = cljs.core.next.call(null,seq22251__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__22252,G__22253,G__22254,G__22255,G__22256,seq22251__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args22263 = [];
var len__11449__auto___22266 = arguments.length;
var i__11450__auto___22267 = (0);
while(true){
if((i__11450__auto___22267 < len__11449__auto___22266)){
args22263.push((arguments[i__11450__auto___22267]));

var G__22268 = (i__11450__auto___22267 + (1));
i__11450__auto___22267 = G__22268;
continue;
} else {
}
break;
}

var G__22265 = args22263.length;
switch (G__22265) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args22263.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var args__11456__auto__ = [];
var len__11449__auto___22275 = arguments.length;
var i__11450__auto___22276 = (0);
while(true){
if((i__11450__auto___22276 < len__11449__auto___22275)){
args__11456__auto__.push((arguments[i__11450__auto___22276]));

var G__22277 = (i__11450__auto___22276 + (1));
i__11450__auto___22276 = G__22277;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__22270_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__22270_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq22271){
var G__22272 = cljs.core.first.call(null,seq22271);
var seq22271__$1 = cljs.core.next.call(null,seq22271);
var G__22273 = cljs.core.first.call(null,seq22271__$1);
var seq22271__$2 = cljs.core.next.call(null,seq22271__$1);
var G__22274 = cljs.core.first.call(null,seq22271__$2);
var seq22271__$3 = cljs.core.next.call(null,seq22271__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__22272,G__22273,G__22274,seq22271__$3);
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
var args__11456__auto__ = [];
var len__11449__auto___22282 = arguments.length;
var i__11450__auto___22283 = (0);
while(true){
if((i__11450__auto___22283 < len__11449__auto___22282)){
args__11456__auto__.push((arguments[i__11450__auto___22283]));

var G__22284 = (i__11450__auto___22283 + (1));
i__11450__auto___22283 = G__22284;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq22278){
var G__22279 = cljs.core.first.call(null,seq22278);
var seq22278__$1 = cljs.core.next.call(null,seq22278);
var G__22280 = cljs.core.first.call(null,seq22278__$1);
var seq22278__$2 = cljs.core.next.call(null,seq22278__$1);
var G__22281 = cljs.core.first.call(null,seq22278__$2);
var seq22278__$3 = cljs.core.next.call(null,seq22278__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__22279,G__22280,G__22281,seq22278__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22289 = arguments.length;
var i__11450__auto___22290 = (0);
while(true){
if((i__11450__auto___22290 < len__11449__auto___22289)){
args__11456__auto__.push((arguments[i__11450__auto___22290]));

var G__22291 = (i__11450__auto___22290 + (1));
i__11450__auto___22290 = G__22291;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq22285){
var G__22286 = cljs.core.first.call(null,seq22285);
var seq22285__$1 = cljs.core.next.call(null,seq22285);
var G__22287 = cljs.core.first.call(null,seq22285__$1);
var seq22285__$2 = cljs.core.next.call(null,seq22285__$1);
var G__22288 = cljs.core.first.call(null,seq22285__$2);
var seq22285__$3 = cljs.core.next.call(null,seq22285__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__22286,G__22287,G__22288,seq22285__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22300 = arguments.length;
var i__11450__auto___22301 = (0);
while(true){
if((i__11450__auto___22301 < len__11449__auto___22300)){
args__11456__auto__.push((arguments[i__11450__auto___22301]));

var G__22302 = (i__11450__auto___22301 + (1));
i__11450__auto___22301 = G__22302;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
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


var vec__22297 = bindings;
var x = cljs.core.nth.call(null,vec__22297,(0),null);
var xs = cljs.core.nth.call(null,vec__22297,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__22292__auto__","xs__22292__auto__",1467880882,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11178__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__22292__auto__","xs__22292__auto__",1467880882,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq22293){
var G__22294 = cljs.core.first.call(null,seq22293);
var seq22293__$1 = cljs.core.next.call(null,seq22293);
var G__22295 = cljs.core.first.call(null,seq22293__$1);
var seq22293__$2 = cljs.core.next.call(null,seq22293__$1);
var G__22296 = cljs.core.first.call(null,seq22293__$2);
var seq22293__$3 = cljs.core.next.call(null,seq22293__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__22294,G__22295,G__22296,seq22293__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22308 = arguments.length;
var i__11450__auto___22309 = (0);
while(true){
if((i__11450__auto___22309 < len__11449__auto___22308)){
args__11456__auto__.push((arguments[i__11450__auto___22309]));

var G__22310 = (i__11450__auto___22309 + (1));
i__11450__auto___22309 = G__22310;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22303__auto__","temp__22303__auto__",-1376554054,null)),(function (){var x__11178__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22303__auto__","temp__22303__auto__",-1376554054,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22303__auto__","temp__22303__auto__",-1376554054,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq22304){
var G__22305 = cljs.core.first.call(null,seq22304);
var seq22304__$1 = cljs.core.next.call(null,seq22304);
var G__22306 = cljs.core.first.call(null,seq22304__$1);
var seq22304__$2 = cljs.core.next.call(null,seq22304__$1);
var G__22307 = cljs.core.first.call(null,seq22304__$2);
var seq22304__$3 = cljs.core.next.call(null,seq22304__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__22305,G__22306,G__22307,seq22304__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22315 = arguments.length;
var i__11450__auto___22316 = (0);
while(true){
if((i__11450__auto___22316 < len__11449__auto___22315)){
args__11456__auto__.push((arguments[i__11450__auto___22316]));

var G__22317 = (i__11450__auto___22316 + (1));
i__11450__auto___22316 = G__22317;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),null),x__11178__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq22311){
var G__22312 = cljs.core.first.call(null,seq22311);
var seq22311__$1 = cljs.core.next.call(null,seq22311);
var G__22313 = cljs.core.first.call(null,seq22311__$1);
var seq22311__$2 = cljs.core.next.call(null,seq22311__$1);
var G__22314 = cljs.core.first.call(null,seq22311__$2);
var seq22311__$3 = cljs.core.next.call(null,seq22311__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__22312,G__22313,G__22314,seq22311__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22322 = arguments.length;
var i__11450__auto___22323 = (0);
while(true){
if((i__11450__auto___22323 < len__11449__auto___22322)){
args__11456__auto__.push((arguments[i__11450__auto___22323]));

var G__22324 = (i__11450__auto___22323 + (1));
i__11450__auto___22323 = G__22324;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body,(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq22318){
var G__22319 = cljs.core.first.call(null,seq22318);
var seq22318__$1 = cljs.core.next.call(null,seq22318);
var G__22320 = cljs.core.first.call(null,seq22318__$1);
var seq22318__$2 = cljs.core.next.call(null,seq22318__$1);
var G__22321 = cljs.core.first.call(null,seq22318__$2);
var seq22318__$3 = cljs.core.next.call(null,seq22318__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__22319,G__22320,G__22321,seq22318__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22333 = arguments.length;
var i__11450__auto___22334 = (0);
while(true){
if((i__11450__auto___22334 < len__11449__auto___22333)){
args__11456__auto__.push((arguments[i__11450__auto___22334]));

var G__22335 = (i__11450__auto___22334 + (1));
i__11450__auto___22334 = G__22335;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__22329){
var vec__22330 = p__22329;
var test = cljs.core.nth.call(null,vec__22330,(0),null);
var step = cljs.core.nth.call(null,vec__22330,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq22325){
var G__22326 = cljs.core.first.call(null,seq22325);
var seq22325__$1 = cljs.core.next.call(null,seq22325);
var G__22327 = cljs.core.first.call(null,seq22325__$1);
var seq22325__$2 = cljs.core.next.call(null,seq22325__$1);
var G__22328 = cljs.core.first.call(null,seq22325__$2);
var seq22325__$3 = cljs.core.next.call(null,seq22325__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22326,G__22327,G__22328,seq22325__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22344 = arguments.length;
var i__11450__auto___22345 = (0);
while(true){
if((i__11450__auto___22345 < len__11449__auto___22344)){
args__11456__auto__.push((arguments[i__11450__auto___22345]));

var G__22346 = (i__11450__auto___22345 + (1));
i__11450__auto___22345 = G__22346;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__22340){
var vec__22341 = p__22340;
var test = cljs.core.nth.call(null,vec__22341,(0),null);
var step = cljs.core.nth.call(null,vec__22341,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq22336){
var G__22337 = cljs.core.first.call(null,seq22336);
var seq22336__$1 = cljs.core.next.call(null,seq22336);
var G__22338 = cljs.core.first.call(null,seq22336__$1);
var seq22336__$2 = cljs.core.next.call(null,seq22336__$1);
var G__22339 = cljs.core.first.call(null,seq22336__$2);
var seq22336__$3 = cljs.core.next.call(null,seq22336__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22337,G__22338,G__22339,seq22336__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22352 = arguments.length;
var i__11450__auto___22353 = (0);
while(true){
if((i__11450__auto___22353 < len__11449__auto___22352)){
args__11456__auto__.push((arguments[i__11450__auto___22353]));

var G__22354 = (i__11450__auto___22353 + (1));
i__11450__auto___22353 = G__22354;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((4) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11457__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq22347){
var G__22348 = cljs.core.first.call(null,seq22347);
var seq22347__$1 = cljs.core.next.call(null,seq22347);
var G__22349 = cljs.core.first.call(null,seq22347__$1);
var seq22347__$2 = cljs.core.next.call(null,seq22347__$1);
var G__22350 = cljs.core.first.call(null,seq22347__$2);
var seq22347__$3 = cljs.core.next.call(null,seq22347__$2);
var G__22351 = cljs.core.first.call(null,seq22347__$3);
var seq22347__$4 = cljs.core.next.call(null,seq22347__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22348,G__22349,G__22350,G__22351,seq22347__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22359 = arguments.length;
var i__11450__auto___22360 = (0);
while(true){
if((i__11450__auto___22360 < len__11449__auto___22359)){
args__11456__auto__.push((arguments[i__11450__auto___22360]));

var G__22361 = (i__11450__auto___22360 + (1));
i__11450__auto___22360 = G__22361;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq22355){
var G__22356 = cljs.core.first.call(null,seq22355);
var seq22355__$1 = cljs.core.next.call(null,seq22355);
var G__22357 = cljs.core.first.call(null,seq22355__$1);
var seq22355__$2 = cljs.core.next.call(null,seq22355__$1);
var G__22358 = cljs.core.first.call(null,seq22355__$2);
var seq22355__$3 = cljs.core.next.call(null,seq22355__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22356,G__22357,G__22358,seq22355__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22366 = arguments.length;
var i__11450__auto___22367 = (0);
while(true){
if((i__11450__auto___22367 < len__11449__auto___22366)){
args__11456__auto__.push((arguments[i__11450__auto___22367]));

var G__22368 = (i__11450__auto___22367 + (1));
i__11450__auto___22367 = G__22368;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq22362){
var G__22363 = cljs.core.first.call(null,seq22362);
var seq22362__$1 = cljs.core.next.call(null,seq22362);
var G__22364 = cljs.core.first.call(null,seq22362__$1);
var seq22362__$2 = cljs.core.next.call(null,seq22362__$1);
var G__22365 = cljs.core.first.call(null,seq22362__$2);
var seq22362__$3 = cljs.core.next.call(null,seq22362__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__22363,G__22364,G__22365,seq22362__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args22370 = [];
var len__11449__auto___22379 = arguments.length;
var i__11450__auto___22380 = (0);
while(true){
if((i__11450__auto___22380 < len__11449__auto___22379)){
args22370.push((arguments[i__11450__auto___22380]));

var G__22381 = (i__11450__auto___22380 + (1));
i__11450__auto___22380 = G__22381;
continue;
} else {
}
break;
}

var G__22378 = args22370.length;
switch (G__22378) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22370.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11468__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__11178__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22369__auto__","temp__22369__auto__",-329400721,null)),(function (){var x__11178__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22369__auto__","temp__22369__auto__",-329400721,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22369__auto__","temp__22369__auto__",-329400721,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq22371){
var G__22372 = cljs.core.first.call(null,seq22371);
var seq22371__$1 = cljs.core.next.call(null,seq22371);
var G__22373 = cljs.core.first.call(null,seq22371__$1);
var seq22371__$2 = cljs.core.next.call(null,seq22371__$1);
var G__22374 = cljs.core.first.call(null,seq22371__$2);
var seq22371__$3 = cljs.core.next.call(null,seq22371__$2);
var G__22375 = cljs.core.first.call(null,seq22371__$3);
var seq22371__$4 = cljs.core.next.call(null,seq22371__$3);
var G__22376 = cljs.core.first.call(null,seq22371__$4);
var seq22371__$5 = cljs.core.next.call(null,seq22371__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__22372,G__22373,G__22374,G__22375,G__22376,seq22371__$5);
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
var args__11456__auto__ = [];
var len__11449__auto___22388 = arguments.length;
var i__11450__auto___22389 = (0);
while(true){
if((i__11450__auto___22389 < len__11449__auto___22388)){
args__11456__auto__.push((arguments[i__11450__auto___22389]));

var G__22390 = (i__11450__auto___22389 + (1));
i__11450__auto___22389 = G__22390;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22383__auto__","temp__22383__auto__",-1251588493,null)),(function (){var x__11178__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22383__auto__","temp__22383__auto__",-1251588493,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__22383__auto__","temp__22383__auto__",-1251588493,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq22384){
var G__22385 = cljs.core.first.call(null,seq22384);
var seq22384__$1 = cljs.core.next.call(null,seq22384);
var G__22386 = cljs.core.first.call(null,seq22384__$1);
var seq22384__$2 = cljs.core.next.call(null,seq22384__$1);
var G__22387 = cljs.core.first.call(null,seq22384__$2);
var seq22384__$3 = cljs.core.next.call(null,seq22384__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__22385,G__22386,G__22387,seq22384__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__22391_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__22391_SHARP_)){
return cljs.core.first.call(null,p1__22391_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22391_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a list")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22391_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__22392_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__22392_SHARP_);
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
var G__22393 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__22394 = cljs.core.next.call(null,fdecls);
ret = G__22393;
fdecls = G__22394;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__11178__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__11178__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var G__22404 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__22405 = n;
var G__22406 = cljs.core.nnext.call(null,bs);
var G__22407 = true;
ret = G__22404;
n = G__22405;
bs = G__22406;
seen_rest_QMARK_ = G__22407;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__22408 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__11178__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__11178__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__11178__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__22409 = (n + (1));
var G__22410 = cljs.core.next.call(null,bs);
var G__22411 = seen_rest_QMARK_;
ret = G__22408;
n = G__22409;
bs = G__22410;
seen_rest_QMARK_ = G__22411;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__11178__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__11178__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__22395_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__10336__auto__ = mkns;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core.namespace.call(null,p1__22395_SHARP_);
}
})(),cljs.core.name.call(null,p1__22395_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__22396_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.symbol.call(null,(function (){var or__10336__auto__ = mkns;
if(cljs.core.truth_(or__10336__auto__)){
return or__10336__auto__;
} else {
return cljs.core.namespace.call(null,p1__22396_SHARP_);
}
})(),cljs.core.name.call(null,p1__22396_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
return (function (p1__22397_SHARP_,p2__22398_SHARP_){
return cljs.core.assoc.call(null,p1__22397_SHARP_,p2__22398_SHARP_,cljs.core.val.call(null,entry).call(null,p2__22398_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__11178__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$2);
})(),x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__11178__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__22412 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__22413 = cljs.core.next.call(null,bes);
ret = G__22412;
bes = G__22413;
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
return (function (p1__22399_SHARP_){
return (cljs.core.first.call(null,p1__22399_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/** @define {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__11178__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var args__11456__auto__ = [];
var len__11449__auto___22418 = arguments.length;
var i__11450__auto___22419 = (0);
while(true){
if((i__11450__auto___22419 < len__11449__auto___22418)){
args__11456__auto__.push((arguments[i__11450__auto___22419]));

var G__22420 = (i__11450__auto___22419 + (1));
i__11450__auto___22419 = G__22420;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__11178__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq22414){
var G__22415 = cljs.core.first.call(null,seq22414);
var seq22414__$1 = cljs.core.next.call(null,seq22414);
var G__22416 = cljs.core.first.call(null,seq22414__$1);
var seq22414__$2 = cljs.core.next.call(null,seq22414__$1);
var G__22417 = cljs.core.first.call(null,seq22414__$2);
var seq22414__$3 = cljs.core.next.call(null,seq22414__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__22415,G__22416,G__22417,seq22414__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22429 = arguments.length;
var i__11450__auto___22430 = (0);
while(true){
if((i__11450__auto___22430 < len__11449__auto___22429)){
args__11456__auto__.push((arguments[i__11450__auto___22430]));

var G__22431 = (i__11450__auto___22430 + (1));
i__11450__auto___22430 = G__22431;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__11178__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
return (function (ret,p__22425){
var vec__22426 = p__22425;
var b = cljs.core.nth.call(null,vec__22426,(0),null);
var v = cljs.core.nth.call(null,vec__22426,(1),null);
var g = cljs.core.nth.call(null,vec__22426,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq22421){
var G__22422 = cljs.core.first.call(null,seq22421);
var seq22421__$1 = cljs.core.next.call(null,seq22421);
var G__22423 = cljs.core.first.call(null,seq22421__$1);
var seq22421__$2 = cljs.core.next.call(null,seq22421__$1);
var G__22424 = cljs.core.first.call(null,seq22421__$2);
var seq22421__$3 = cljs.core.next.call(null,seq22421__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__22422,G__22423,G__22424,seq22421__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__22432_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22432_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__22433){
var vec__22434 = p__22433;
var p = cljs.core.nth.call(null,vec__22434,(0),null);
var b = cljs.core.nth.call(null,vec__22434,(1),null);
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
var args__11456__auto__ = [];
var len__11449__auto___22440 = arguments.length;
var i__11450__auto___22441 = (0);
while(true){
if((i__11450__auto___22441 < len__11449__auto___22440)){
args__11456__auto__.push((arguments[i__11450__auto___22441]));

var G__22442 = (i__11450__auto___22441 + (1));
i__11450__auto___22441 = G__22442;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),cljs.core.str.cljs$core$IFn$_invoke$arity$1("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq22437){
var G__22438 = cljs.core.first.call(null,seq22437);
var seq22437__$1 = cljs.core.next.call(null,seq22437);
var G__22439 = cljs.core.first.call(null,seq22437__$1);
var seq22437__$2 = cljs.core.next.call(null,seq22437__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__22438,G__22439,seq22437__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__10324__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__10324__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__10324__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args22446 = [];
var len__11449__auto___22453 = arguments.length;
var i__11450__auto___22454 = (0);
while(true){
if((i__11450__auto___22454 < len__11449__auto___22453)){
args22446.push((arguments[i__11450__auto___22454]));

var G__22455 = (i__11450__auto___22454 + (1));
i__11450__auto___22454 = G__22455;
continue;
} else {
}
break;
}

var G__22452 = args22446.length;
switch (G__22452) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22446.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11468__auto__);

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
return (function (p1__22443_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__22443_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__22444_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__22444_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11178__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__22445__auto__","and__22445__auto__",1880611389,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__22445__auto__","and__22445__auto__",1880611389,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__22445__auto__","and__22445__auto__",1880611389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq22447){
var G__22448 = cljs.core.first.call(null,seq22447);
var seq22447__$1 = cljs.core.next.call(null,seq22447);
var G__22449 = cljs.core.first.call(null,seq22447__$1);
var seq22447__$2 = cljs.core.next.call(null,seq22447__$1);
var G__22450 = cljs.core.first.call(null,seq22447__$2);
var seq22447__$3 = cljs.core.next.call(null,seq22447__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__22448,G__22449,G__22450,seq22447__$3);
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
var args22460 = [];
var len__11449__auto___22467 = arguments.length;
var i__11450__auto___22468 = (0);
while(true){
if((i__11450__auto___22468 < len__11449__auto___22467)){
args22460.push((arguments[i__11450__auto___22468]));

var G__22469 = (i__11450__auto___22468 + (1));
i__11450__auto___22468 = G__22469;
continue;
} else {
}
break;
}

var G__22466 = args22460.length;
switch (G__22466) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22460.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11468__auto__);

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
return (function (p1__22457_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__22457_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__22458_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__22458_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11178__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__22459__auto__","or__22459__auto__",2070487837,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__22459__auto__","or__22459__auto__",2070487837,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__22459__auto__","or__22459__auto__",2070487837,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq22461){
var G__22462 = cljs.core.first.call(null,seq22461);
var seq22461__$1 = cljs.core.next.call(null,seq22461);
var G__22463 = cljs.core.first.call(null,seq22461__$1);
var seq22461__$2 = cljs.core.next.call(null,seq22461__$1);
var G__22464 = cljs.core.first.call(null,seq22461__$2);
var seq22461__$3 = cljs.core.next.call(null,seq22461__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__22462,G__22463,G__22464,seq22461__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.some_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__11178__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__22475 = clojure.string.split.call(null,comment,/\n/);
var seq__22476 = cljs.core.seq.call(null,vec__22475);
var first__22477 = cljs.core.first.call(null,seq__22476);
var seq__22476__$1 = cljs.core.next.call(null,seq__22476);
var x = first__22477;
var ys = seq__22476__$1;
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n/**\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__22475,seq__22476,first__22477,seq__22476__$1,x,ys){
return (function (p1__22471_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__22471_SHARP_,/^   /,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
});})(vec__22475,seq__22476,first__22477,seq__22476__$1,x,ys))
,ys))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~{} = /** @type {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$2);
})(),x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22478__auto__","c__22478__auto__",305058569,null)),(function (){var x__11178__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22479__auto__","x__22479__auto__",1704974637,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22479__auto__","x__22479__auto__",1704974637,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__22478__auto__","c__22478__auto__",305058569,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args22480 = [];
var len__11449__auto___22488 = arguments.length;
var i__11450__auto___22489 = (0);
while(true){
if((i__11450__auto___22489 < len__11449__auto___22488)){
args22480.push((arguments[i__11450__auto___22489]));

var G__22490 = (i__11450__auto___22489 + (1));
i__11450__auto___22489 = G__22490;
continue;
} else {
}
break;
}

var G__22487 = args22480.length;
switch (G__22487) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22480.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq22481){
var G__22482 = cljs.core.first.call(null,seq22481);
var seq22481__$1 = cljs.core.next.call(null,seq22481);
var G__22483 = cljs.core.first.call(null,seq22481__$1);
var seq22481__$2 = cljs.core.next.call(null,seq22481__$1);
var G__22484 = cljs.core.first.call(null,seq22481__$2);
var seq22481__$3 = cljs.core.next.call(null,seq22481__$2);
var G__22485 = cljs.core.first.call(null,seq22481__$3);
var seq22481__$4 = cljs.core.next.call(null,seq22481__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__22482,G__22483,G__22484,G__22485,seq22481__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args22492 = [];
var len__11449__auto___22501 = arguments.length;
var i__11450__auto___22502 = (0);
while(true){
if((i__11450__auto___22502 < len__11449__auto___22501)){
args22492.push((arguments[i__11450__auto___22502]));

var G__22503 = (i__11450__auto___22502 + (1));
i__11450__auto___22502 = G__22503;
continue;
} else {
}
break;
}

var G__22500 = args22492.length;
switch (G__22500) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22492.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11468__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$2);
})(),x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}][~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq22493){
var G__22494 = cljs.core.first.call(null,seq22493);
var seq22493__$1 = cljs.core.next.call(null,seq22493);
var G__22495 = cljs.core.first.call(null,seq22493__$1);
var seq22493__$2 = cljs.core.next.call(null,seq22493__$1);
var G__22496 = cljs.core.first.call(null,seq22493__$2);
var seq22493__$3 = cljs.core.next.call(null,seq22493__$2);
var G__22497 = cljs.core.first.call(null,seq22493__$3);
var seq22493__$4 = cljs.core.next.call(null,seq22493__$3);
var G__22498 = cljs.core.first.call(null,seq22493__$4);
var seq22493__$5 = cljs.core.next.call(null,seq22493__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__22494,G__22495,G__22496,G__22497,G__22498,seq22493__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args22505 = [];
var len__11449__auto___22513 = arguments.length;
var i__11450__auto___22514 = (0);
while(true){
if((i__11450__auto___22514 < len__11449__auto___22513)){
args22505.push((arguments[i__11450__auto___22514]));

var G__22515 = (i__11450__auto___22514 + (1));
i__11450__auto___22514 = G__22515;
continue;
} else {
}
break;
}

var G__22512 = args22505.length;
switch (G__22512) {
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
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22505.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq22506){
var G__22507 = cljs.core.first.call(null,seq22506);
var seq22506__$1 = cljs.core.next.call(null,seq22506);
var G__22508 = cljs.core.first.call(null,seq22506__$1);
var seq22506__$2 = cljs.core.next.call(null,seq22506__$1);
var G__22509 = cljs.core.first.call(null,seq22506__$2);
var seq22506__$3 = cljs.core.next.call(null,seq22506__$2);
var G__22510 = cljs.core.first.call(null,seq22506__$3);
var seq22506__$4 = cljs.core.next.call(null,seq22506__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__22507,G__22508,G__22509,G__22510,seq22506__$4);
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
var args__11456__auto__ = [];
var len__11449__auto___22520 = arguments.length;
var i__11450__auto___22521 = (0);
while(true){
if((i__11450__auto___22521 < len__11449__auto___22520)){
args__11456__auto__.push((arguments[i__11450__auto___22521]));

var G__22522 = (i__11450__auto___22521 + (1));
i__11450__auto___22521 = G__22522;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq22517){
var G__22518 = cljs.core.first.call(null,seq22517);
var seq22517__$1 = cljs.core.next.call(null,seq22517);
var G__22519 = cljs.core.first.call(null,seq22517__$1);
var seq22517__$2 = cljs.core.next.call(null,seq22517__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__22518,G__22519,seq22517__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22526 = arguments.length;
var i__11450__auto___22527 = (0);
while(true){
if((i__11450__auto___22527 < len__11449__auto___22526)){
args__11456__auto__.push((arguments[i__11450__auto___22527]));

var G__22528 = (i__11450__auto___22527 + (1));
i__11450__auto___22527 = G__22528;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq22523){
var G__22524 = cljs.core.first.call(null,seq22523);
var seq22523__$1 = cljs.core.next.call(null,seq22523);
var G__22525 = cljs.core.first.call(null,seq22523__$1);
var seq22523__$2 = cljs.core.next.call(null,seq22523__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__22524,G__22525,seq22523__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22532 = arguments.length;
var i__11450__auto___22533 = (0);
while(true){
if((i__11450__auto___22533 < len__11449__auto___22532)){
args__11456__auto__.push((arguments[i__11450__auto___22533]));

var G__22534 = (i__11450__auto___22533 + (1));
i__11450__auto___22533 = G__22534;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq22529){
var G__22530 = cljs.core.first.call(null,seq22529);
var seq22529__$1 = cljs.core.next.call(null,seq22529);
var G__22531 = cljs.core.first.call(null,seq22529__$1);
var seq22529__$2 = cljs.core.next.call(null,seq22529__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__22530,G__22531,seq22529__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22538 = arguments.length;
var i__11450__auto___22539 = (0);
while(true){
if((i__11450__auto___22539 < len__11449__auto___22538)){
args__11456__auto__.push((arguments[i__11450__auto___22539]));

var G__22540 = (i__11450__auto___22539 + (1));
i__11450__auto___22539 = G__22540;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq22535){
var G__22536 = cljs.core.first.call(null,seq22535);
var seq22535__$1 = cljs.core.next.call(null,seq22535);
var G__22537 = cljs.core.first.call(null,seq22535__$1);
var seq22535__$2 = cljs.core.next.call(null,seq22535__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__22536,G__22537,seq22535__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22544 = arguments.length;
var i__11450__auto___22545 = (0);
while(true){
if((i__11450__auto___22545 < len__11449__auto___22544)){
args__11456__auto__.push((arguments[i__11450__auto___22545]));

var G__22546 = (i__11450__auto___22545 + (1));
i__11450__auto___22545 = G__22546;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq22541){
var G__22542 = cljs.core.first.call(null,seq22541);
var seq22541__$1 = cljs.core.next.call(null,seq22541);
var G__22543 = cljs.core.first.call(null,seq22541__$1);
var seq22541__$2 = cljs.core.next.call(null,seq22541__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__22542,G__22543,seq22541__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22550 = arguments.length;
var i__11450__auto___22551 = (0);
while(true){
if((i__11450__auto___22551 < len__11449__auto___22550)){
args__11456__auto__.push((arguments[i__11450__auto___22551]));

var G__22552 = (i__11450__auto___22551 + (1));
i__11450__auto___22551 = G__22552;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq22547){
var G__22548 = cljs.core.first.call(null,seq22547);
var seq22547__$1 = cljs.core.next.call(null,seq22547);
var G__22549 = cljs.core.first.call(null,seq22547__$1);
var seq22547__$2 = cljs.core.next.call(null,seq22547__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__22548,G__22549,seq22547__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22556 = arguments.length;
var i__11450__auto___22557 = (0);
while(true){
if((i__11450__auto___22557 < len__11449__auto___22556)){
args__11456__auto__.push((arguments[i__11450__auto___22557]));

var G__22558 = (i__11450__auto___22557 + (1));
i__11450__auto___22557 = G__22558;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq22553){
var G__22554 = cljs.core.first.call(null,seq22553);
var seq22553__$1 = cljs.core.next.call(null,seq22553);
var G__22555 = cljs.core.first.call(null,seq22553__$1);
var seq22553__$2 = cljs.core.next.call(null,seq22553__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__22554,G__22555,seq22553__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args22559 = [];
var len__11449__auto___22567 = arguments.length;
var i__11450__auto___22568 = (0);
while(true){
if((i__11450__auto___22568 < len__11449__auto___22567)){
args22559.push((arguments[i__11450__auto___22568]));

var G__22569 = (i__11450__auto___22568 + (1));
i__11450__auto___22568 = G__22569;
continue;
} else {
}
break;
}

var G__22566 = args22559.length;
switch (G__22566) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22559.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq22560){
var G__22561 = cljs.core.first.call(null,seq22560);
var seq22560__$1 = cljs.core.next.call(null,seq22560);
var G__22562 = cljs.core.first.call(null,seq22560__$1);
var seq22560__$2 = cljs.core.next.call(null,seq22560__$1);
var G__22563 = cljs.core.first.call(null,seq22560__$2);
var seq22560__$3 = cljs.core.next.call(null,seq22560__$2);
var G__22564 = cljs.core.first.call(null,seq22560__$3);
var seq22560__$4 = cljs.core.next.call(null,seq22560__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__22561,G__22562,G__22563,G__22564,seq22560__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args22571 = [];
var len__11449__auto___22579 = arguments.length;
var i__11450__auto___22580 = (0);
while(true){
if((i__11450__auto___22580 < len__11449__auto___22579)){
args22571.push((arguments[i__11450__auto___22580]));

var G__22581 = (i__11450__auto___22580 + (1));
i__11450__auto___22580 = G__22581;
continue;
} else {
}
break;
}

var G__22578 = args22571.length;
switch (G__22578) {
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
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22571.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq22572){
var G__22573 = cljs.core.first.call(null,seq22572);
var seq22572__$1 = cljs.core.next.call(null,seq22572);
var G__22574 = cljs.core.first.call(null,seq22572__$1);
var seq22572__$2 = cljs.core.next.call(null,seq22572__$1);
var G__22575 = cljs.core.first.call(null,seq22572__$2);
var seq22572__$3 = cljs.core.next.call(null,seq22572__$2);
var G__22576 = cljs.core.first.call(null,seq22572__$3);
var seq22572__$4 = cljs.core.next.call(null,seq22572__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22573,G__22574,G__22575,G__22576,seq22572__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args22583 = [];
var len__11449__auto___22591 = arguments.length;
var i__11450__auto___22592 = (0);
while(true){
if((i__11450__auto___22592 < len__11449__auto___22591)){
args22583.push((arguments[i__11450__auto___22592]));

var G__22593 = (i__11450__auto___22592 + (1));
i__11450__auto___22592 = G__22593;
continue;
} else {
}
break;
}

var G__22590 = args22583.length;
switch (G__22590) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22583.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq22584){
var G__22585 = cljs.core.first.call(null,seq22584);
var seq22584__$1 = cljs.core.next.call(null,seq22584);
var G__22586 = cljs.core.first.call(null,seq22584__$1);
var seq22584__$2 = cljs.core.next.call(null,seq22584__$1);
var G__22587 = cljs.core.first.call(null,seq22584__$2);
var seq22584__$3 = cljs.core.next.call(null,seq22584__$2);
var G__22588 = cljs.core.first.call(null,seq22584__$3);
var seq22584__$4 = cljs.core.next.call(null,seq22584__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__22585,G__22586,G__22587,G__22588,seq22584__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args22595 = [];
var len__11449__auto___22603 = arguments.length;
var i__11450__auto___22604 = (0);
while(true){
if((i__11450__auto___22604 < len__11449__auto___22603)){
args22595.push((arguments[i__11450__auto___22604]));

var G__22605 = (i__11450__auto___22604 + (1));
i__11450__auto___22604 = G__22605;
continue;
} else {
}
break;
}

var G__22602 = args22595.length;
switch (G__22602) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22595.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq22596){
var G__22597 = cljs.core.first.call(null,seq22596);
var seq22596__$1 = cljs.core.next.call(null,seq22596);
var G__22598 = cljs.core.first.call(null,seq22596__$1);
var seq22596__$2 = cljs.core.next.call(null,seq22596__$1);
var G__22599 = cljs.core.first.call(null,seq22596__$2);
var seq22596__$3 = cljs.core.next.call(null,seq22596__$2);
var G__22600 = cljs.core.first.call(null,seq22596__$3);
var seq22596__$4 = cljs.core.next.call(null,seq22596__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__22597,G__22598,G__22599,G__22600,seq22596__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args22607 = [];
var len__11449__auto___22615 = arguments.length;
var i__11450__auto___22616 = (0);
while(true){
if((i__11450__auto___22616 < len__11449__auto___22615)){
args22607.push((arguments[i__11450__auto___22616]));

var G__22617 = (i__11450__auto___22616 + (1));
i__11450__auto___22616 = G__22617;
continue;
} else {
}
break;
}

var G__22614 = args22607.length;
switch (G__22614) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22607.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq22608){
var G__22609 = cljs.core.first.call(null,seq22608);
var seq22608__$1 = cljs.core.next.call(null,seq22608);
var G__22610 = cljs.core.first.call(null,seq22608__$1);
var seq22608__$2 = cljs.core.next.call(null,seq22608__$1);
var G__22611 = cljs.core.first.call(null,seq22608__$2);
var seq22608__$3 = cljs.core.next.call(null,seq22608__$2);
var G__22612 = cljs.core.first.call(null,seq22608__$3);
var seq22608__$4 = cljs.core.next.call(null,seq22608__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__22609,G__22610,G__22611,G__22612,seq22608__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args22619 = [];
var len__11449__auto___22627 = arguments.length;
var i__11450__auto___22628 = (0);
while(true){
if((i__11450__auto___22628 < len__11449__auto___22627)){
args22619.push((arguments[i__11450__auto___22628]));

var G__22629 = (i__11450__auto___22628 + (1));
i__11450__auto___22628 = G__22629;
continue;
} else {
}
break;
}

var G__22626 = args22619.length;
switch (G__22626) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22619.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq22620){
var G__22621 = cljs.core.first.call(null,seq22620);
var seq22620__$1 = cljs.core.next.call(null,seq22620);
var G__22622 = cljs.core.first.call(null,seq22620__$1);
var seq22620__$2 = cljs.core.next.call(null,seq22620__$1);
var G__22623 = cljs.core.first.call(null,seq22620__$2);
var seq22620__$3 = cljs.core.next.call(null,seq22620__$2);
var G__22624 = cljs.core.first.call(null,seq22620__$3);
var seq22620__$4 = cljs.core.next.call(null,seq22620__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22621,G__22622,G__22623,G__22624,seq22620__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args22631 = [];
var len__11449__auto___22639 = arguments.length;
var i__11450__auto___22640 = (0);
while(true){
if((i__11450__auto___22640 < len__11449__auto___22639)){
args22631.push((arguments[i__11450__auto___22640]));

var G__22641 = (i__11450__auto___22640 + (1));
i__11450__auto___22640 = G__22641;
continue;
} else {
}
break;
}

var G__22638 = args22631.length;
switch (G__22638) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22631.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq22632){
var G__22633 = cljs.core.first.call(null,seq22632);
var seq22632__$1 = cljs.core.next.call(null,seq22632);
var G__22634 = cljs.core.first.call(null,seq22632__$1);
var seq22632__$2 = cljs.core.next.call(null,seq22632__$1);
var G__22635 = cljs.core.first.call(null,seq22632__$2);
var seq22632__$3 = cljs.core.next.call(null,seq22632__$2);
var G__22636 = cljs.core.first.call(null,seq22632__$3);
var seq22632__$4 = cljs.core.next.call(null,seq22632__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__22633,G__22634,G__22635,G__22636,seq22632__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args22643 = [];
var len__11449__auto___22651 = arguments.length;
var i__11450__auto___22652 = (0);
while(true){
if((i__11450__auto___22652 < len__11449__auto___22651)){
args22643.push((arguments[i__11450__auto___22652]));

var G__22653 = (i__11450__auto___22652 + (1));
i__11450__auto___22652 = G__22653;
continue;
} else {
}
break;
}

var G__22650 = args22643.length;
switch (G__22650) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22643.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq22644){
var G__22645 = cljs.core.first.call(null,seq22644);
var seq22644__$1 = cljs.core.next.call(null,seq22644);
var G__22646 = cljs.core.first.call(null,seq22644__$1);
var seq22644__$2 = cljs.core.next.call(null,seq22644__$1);
var G__22647 = cljs.core.first.call(null,seq22644__$2);
var seq22644__$3 = cljs.core.next.call(null,seq22644__$2);
var G__22648 = cljs.core.first.call(null,seq22644__$3);
var seq22644__$4 = cljs.core.next.call(null,seq22644__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22645,G__22646,G__22647,G__22648,seq22644__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args22655 = [];
var len__11449__auto___22663 = arguments.length;
var i__11450__auto___22664 = (0);
while(true){
if((i__11450__auto___22664 < len__11449__auto___22663)){
args22655.push((arguments[i__11450__auto___22664]));

var G__22665 = (i__11450__auto___22664 + (1));
i__11450__auto___22664 = G__22665;
continue;
} else {
}
break;
}

var G__22662 = args22655.length;
switch (G__22662) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22655.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq22656){
var G__22657 = cljs.core.first.call(null,seq22656);
var seq22656__$1 = cljs.core.next.call(null,seq22656);
var G__22658 = cljs.core.first.call(null,seq22656__$1);
var seq22656__$2 = cljs.core.next.call(null,seq22656__$1);
var G__22659 = cljs.core.first.call(null,seq22656__$2);
var seq22656__$3 = cljs.core.next.call(null,seq22656__$2);
var G__22660 = cljs.core.first.call(null,seq22656__$3);
var seq22656__$4 = cljs.core.next.call(null,seq22656__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__22657,G__22658,G__22659,G__22660,seq22656__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args22669 = [];
var len__11449__auto___22677 = arguments.length;
var i__11450__auto___22678 = (0);
while(true){
if((i__11450__auto___22678 < len__11449__auto___22677)){
args22669.push((arguments[i__11450__auto___22678]));

var G__22679 = (i__11450__auto___22678 + (1));
i__11450__auto___22678 = G__22679;
continue;
} else {
}
break;
}

var G__22676 = args22669.length;
switch (G__22676) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22669.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22667__auto__","x__22667__auto__",468629989,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22668__auto__","y__22668__auto__",1054851318,null)),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22667__auto__","x__22667__auto__",468629989,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22668__auto__","y__22668__auto__",1054851318,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22667__auto__","x__22667__auto__",468629989,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22668__auto__","y__22668__auto__",1054851318,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq22670){
var G__22671 = cljs.core.first.call(null,seq22670);
var seq22670__$1 = cljs.core.next.call(null,seq22670);
var G__22672 = cljs.core.first.call(null,seq22670__$1);
var seq22670__$2 = cljs.core.next.call(null,seq22670__$1);
var G__22673 = cljs.core.first.call(null,seq22670__$2);
var seq22670__$3 = cljs.core.next.call(null,seq22670__$2);
var G__22674 = cljs.core.first.call(null,seq22670__$3);
var seq22670__$4 = cljs.core.next.call(null,seq22670__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__22671,G__22672,G__22673,G__22674,seq22670__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args22683 = [];
var len__11449__auto___22691 = arguments.length;
var i__11450__auto___22692 = (0);
while(true){
if((i__11450__auto___22692 < len__11449__auto___22691)){
args22683.push((arguments[i__11450__auto___22692]));

var G__22693 = (i__11450__auto___22692 + (1));
i__11450__auto___22692 = G__22693;
continue;
} else {
}
break;
}

var G__22690 = args22683.length;
switch (G__22690) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22683.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22681__auto__","x__22681__auto__",-1040921982,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22682__auto__","y__22682__auto__",-1568743437,null)),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22681__auto__","x__22681__auto__",-1040921982,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22682__auto__","y__22682__auto__",-1568743437,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22681__auto__","x__22681__auto__",-1040921982,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__22682__auto__","y__22682__auto__",-1568743437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq22684){
var G__22685 = cljs.core.first.call(null,seq22684);
var seq22684__$1 = cljs.core.next.call(null,seq22684);
var G__22686 = cljs.core.first.call(null,seq22684__$1);
var seq22684__$2 = cljs.core.next.call(null,seq22684__$1);
var G__22687 = cljs.core.first.call(null,seq22684__$2);
var seq22684__$3 = cljs.core.next.call(null,seq22684__$2);
var G__22688 = cljs.core.first.call(null,seq22684__$3);
var seq22684__$4 = cljs.core.next.call(null,seq22684__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__22685,G__22686,G__22687,G__22688,seq22684__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args22695 = [];
var len__11449__auto___22703 = arguments.length;
var i__11450__auto___22704 = (0);
while(true){
if((i__11450__auto___22704 < len__11449__auto___22703)){
args22695.push((arguments[i__11450__auto___22704]));

var G__22705 = (i__11450__auto___22704 + (1));
i__11450__auto___22704 = G__22705;
continue;
} else {
}
break;
}

var G__22702 = args22695.length;
switch (G__22702) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22695.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq22696){
var G__22697 = cljs.core.first.call(null,seq22696);
var seq22696__$1 = cljs.core.next.call(null,seq22696);
var G__22698 = cljs.core.first.call(null,seq22696__$1);
var seq22696__$2 = cljs.core.next.call(null,seq22696__$1);
var G__22699 = cljs.core.first.call(null,seq22696__$2);
var seq22696__$3 = cljs.core.next.call(null,seq22696__$2);
var G__22700 = cljs.core.first.call(null,seq22696__$3);
var seq22696__$4 = cljs.core.next.call(null,seq22696__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__22697,G__22698,G__22699,G__22700,seq22696__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args22707 = [];
var len__11449__auto___22715 = arguments.length;
var i__11450__auto___22716 = (0);
while(true){
if((i__11450__auto___22716 < len__11449__auto___22715)){
args22707.push((arguments[i__11450__auto___22716]));

var G__22717 = (i__11450__auto___22716 + (1));
i__11450__auto___22716 = G__22717;
continue;
} else {
}
break;
}

var G__22714 = args22707.length;
switch (G__22714) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22707.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq22708){
var G__22709 = cljs.core.first.call(null,seq22708);
var seq22708__$1 = cljs.core.next.call(null,seq22708);
var G__22710 = cljs.core.first.call(null,seq22708__$1);
var seq22708__$2 = cljs.core.next.call(null,seq22708__$1);
var G__22711 = cljs.core.first.call(null,seq22708__$2);
var seq22708__$3 = cljs.core.next.call(null,seq22708__$2);
var G__22712 = cljs.core.first.call(null,seq22708__$3);
var seq22708__$4 = cljs.core.next.call(null,seq22708__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__22709,G__22710,G__22711,G__22712,seq22708__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args22719 = [];
var len__11449__auto___22727 = arguments.length;
var i__11450__auto___22728 = (0);
while(true){
if((i__11450__auto___22728 < len__11449__auto___22727)){
args22719.push((arguments[i__11450__auto___22728]));

var G__22729 = (i__11450__auto___22728 + (1));
i__11450__auto___22728 = G__22729;
continue;
} else {
}
break;
}

var G__22726 = args22719.length;
switch (G__22726) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22719.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq22720){
var G__22721 = cljs.core.first.call(null,seq22720);
var seq22720__$1 = cljs.core.next.call(null,seq22720);
var G__22722 = cljs.core.first.call(null,seq22720__$1);
var seq22720__$2 = cljs.core.next.call(null,seq22720__$1);
var G__22723 = cljs.core.first.call(null,seq22720__$2);
var seq22720__$3 = cljs.core.next.call(null,seq22720__$2);
var G__22724 = cljs.core.first.call(null,seq22720__$3);
var seq22720__$4 = cljs.core.next.call(null,seq22720__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__22721,G__22722,G__22723,G__22724,seq22720__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args22731 = [];
var len__11449__auto___22739 = arguments.length;
var i__11450__auto___22740 = (0);
while(true){
if((i__11450__auto___22740 < len__11449__auto___22739)){
args22731.push((arguments[i__11450__auto___22740]));

var G__22741 = (i__11450__auto___22740 + (1));
i__11450__auto___22740 = G__22741;
continue;
} else {
}
break;
}

var G__22738 = args22731.length;
switch (G__22738) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22731.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq22732){
var G__22733 = cljs.core.first.call(null,seq22732);
var seq22732__$1 = cljs.core.next.call(null,seq22732);
var G__22734 = cljs.core.first.call(null,seq22732__$1);
var seq22732__$2 = cljs.core.next.call(null,seq22732__$1);
var G__22735 = cljs.core.first.call(null,seq22732__$2);
var seq22732__$3 = cljs.core.next.call(null,seq22732__$2);
var G__22736 = cljs.core.first.call(null,seq22732__$3);
var seq22732__$4 = cljs.core.next.call(null,seq22732__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__22733,G__22734,G__22735,G__22736,seq22732__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args22743 = [];
var len__11449__auto___22751 = arguments.length;
var i__11450__auto___22752 = (0);
while(true){
if((i__11450__auto___22752 < len__11449__auto___22751)){
args22743.push((arguments[i__11450__auto___22752]));

var G__22753 = (i__11450__auto___22752 + (1));
i__11450__auto___22752 = G__22753;
continue;
} else {
}
break;
}

var G__22750 = args22743.length;
switch (G__22750) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11468__auto__ = (new cljs.core.IndexedSeq(args22743.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11468__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq22744){
var G__22745 = cljs.core.first.call(null,seq22744);
var seq22744__$1 = cljs.core.next.call(null,seq22744);
var G__22746 = cljs.core.first.call(null,seq22744__$1);
var seq22744__$2 = cljs.core.next.call(null,seq22744__$1);
var G__22747 = cljs.core.first.call(null,seq22744__$2);
var seq22744__$3 = cljs.core.next.call(null,seq22744__$2);
var G__22748 = cljs.core.first.call(null,seq22744__$3);
var seq22744__$4 = cljs.core.next.call(null,seq22744__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__22745,G__22746,G__22747,G__22748,seq22744__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__11178__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("hash-key is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22755__auto__","h__22755__auto__",-533177863,null)),(function (){var x__11178__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22755__auto__","h__22755__auto__",-533177863,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22755__auto__","h__22755__auto__",-533177863,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22755__auto__","h__22755__auto__",-533177863,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22755__auto__","h__22755__auto__",-533177863,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__22755__auto__","h__22755__auto__",-533177863,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11178__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22756__auto__","x__22756__auto__",140413328,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22756__auto__","x__22756__auto__",140413328,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22764 = arguments.length;
var i__11450__auto___22765 = (0);
while(true){
if((i__11450__auto___22765 < len__11449__auto___22764)){
args__11456__auto__.push((arguments[i__11450__auto___22765]));

var G__22766 = (i__11450__auto___22765 + (1));
i__11450__auto___22765 = G__22766;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((6) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__11457__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq22757){
var G__22758 = cljs.core.first.call(null,seq22757);
var seq22757__$1 = cljs.core.next.call(null,seq22757);
var G__22759 = cljs.core.first.call(null,seq22757__$1);
var seq22757__$2 = cljs.core.next.call(null,seq22757__$1);
var G__22760 = cljs.core.first.call(null,seq22757__$2);
var seq22757__$3 = cljs.core.next.call(null,seq22757__$2);
var G__22761 = cljs.core.first.call(null,seq22757__$3);
var seq22757__$4 = cljs.core.next.call(null,seq22757__$3);
var G__22762 = cljs.core.first.call(null,seq22757__$4);
var seq22757__$5 = cljs.core.next.call(null,seq22757__$4);
var G__22763 = cljs.core.first.call(null,seq22757__$5);
var seq22757__$6 = cljs.core.next.call(null,seq22757__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__22758,G__22759,G__22760,G__22761,G__22762,G__22763,seq22757__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = clojure.walk.postwalk.call(null,(function (p1__22767_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__22767_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__22767_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k], true),p1__22767_SHARP_));
} else {
return p1__22767_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__22768,fkv){
var vec__22772 = p__22768;
var f1 = cljs.core.nth.call(null,vec__22772,(0),null);
var k = cljs.core.nth.call(null,vec__22772,(1),null);
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
var args__11456__auto__ = [];
var len__11449__auto___22778 = arguments.length;
var i__11450__auto___22779 = (0);
while(true){
if((i__11450__auto___22779 < len__11449__auto___22778)){
args__11456__auto__.push((arguments[i__11450__auto___22779]));

var G__22780 = (i__11450__auto___22779 + (1));
i__11450__auto___22779 = G__22780;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("t_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__11178__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__11178__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),locals,(function (){var x__11178__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),locals,(function (){var x__11178__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq22775){
var G__22776 = cljs.core.first.call(null,seq22775);
var seq22775__$1 = cljs.core.next.call(null,seq22775);
var G__22777 = cljs.core.first.call(null,seq22775__$1);
var seq22775__$2 = cljs.core.next.call(null,seq22775__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__22776,G__22777,seq22775__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22785 = arguments.length;
var i__11450__auto___22786 = (0);
while(true){
if((i__11450__auto___22786 < len__11449__auto___22785)){
args__11456__auto__.push((arguments[i__11450__auto___22786]));

var G__22787 = (i__11450__auto___22786 + (1));
i__11450__auto___22786 = G__22787;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq22781){
var G__22782 = cljs.core.first.call(null,seq22781);
var seq22781__$1 = cljs.core.next.call(null,seq22781);
var G__22783 = cljs.core.first.call(null,seq22781__$1);
var seq22781__$2 = cljs.core.next.call(null,seq22781__$1);
var G__22784 = cljs.core.first.call(null,seq22781__$2);
var seq22781__$3 = cljs.core.next.call(null,seq22781__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22782,G__22783,G__22784,seq22781__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__11456__auto__ = [];
var len__11449__auto___22792 = arguments.length;
var i__11450__auto___22793 = (0);
while(true){
if((i__11450__auto___22793 < len__11449__auto___22792)){
args__11456__auto__.push((arguments[i__11450__auto___22793]));

var G__22794 = (i__11450__auto___22793 + (1));
i__11450__auto___22793 = G__22794;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq22788){
var G__22789 = cljs.core.first.call(null,seq22788);
var seq22788__$1 = cljs.core.next.call(null,seq22788);
var G__22790 = cljs.core.first.call(null,seq22788__$1);
var seq22788__$2 = cljs.core.next.call(null,seq22788__$1);
var G__22791 = cljs.core.first.call(null,seq22788__$2);
var seq22788__$3 = cljs.core.next.call(null,seq22788__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__22789,G__22790,G__22791,seq22788__$3);
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
var args__11456__auto__ = [];
var len__11449__auto___22799 = arguments.length;
var i__11450__auto___22800 = (0);
while(true){
if((i__11450__auto___22800 < len__11449__auto___22799)){
args__11456__auto__.push((arguments[i__11450__auto___22800]));

var G__22801 = (i__11450__auto___22800 + (1));
i__11450__auto___22800 = G__22801;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq22795){
var G__22796 = cljs.core.first.call(null,seq22795);
var seq22795__$1 = cljs.core.next.call(null,seq22795);
var G__22797 = cljs.core.first.call(null,seq22795__$1);
var seq22795__$2 = cljs.core.next.call(null,seq22795__$1);
var G__22798 = cljs.core.first.call(null,seq22795__$2);
var seq22795__$3 = cljs.core.next.call(null,seq22795__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__22796,G__22797,G__22798,seq22795__$3);
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

if(cljs.core.truth_((function (){var and__10324__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__10324__auto__)){
var and__10324__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__10324__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__10324__auto____$1;
}
} else {
return and__10324__auto__;
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
var G__22802 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__22803 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__22802;
s = G__22803;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__22804){
var vec__22812 = p__22804;
var p = cljs.core.nth.call(null,vec__22812,(0),null);
var sigs = cljs.core.nth.call(null,vec__22812,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11178__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__22812,p,sigs){
return (function (p__22815){
var vec__22816 = p__22815;
var seq__22817 = cljs.core.seq.call(null,vec__22816);
var first__22818 = cljs.core.first.call(null,seq__22817);
var seq__22817__$1 = cljs.core.next.call(null,seq__22817);
var f = first__22818;
var meths = seq__22817__$1;
var form = vec__22816;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(psym,pfn_prefix,vec__22812,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__11269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11273__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__11269__auto__,prefer_table__11270__auto__,method_cache__11271__auto__,cached_hierarchy__11272__auto__,hierarchy__11273__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__11269__auto__,prefer_table__11270__auto__,method_cache__11271__auto__,cached_hierarchy__11272__auto__,hierarchy__11273__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11273__auto__,method_table__11269__auto__,prefer_table__11270__auto__,method_cache__11271__auto__,cached_hierarchy__11272__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__11178__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__11178__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__11178__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__22819){
var vec__22826 = p__22819;
var seq__22827 = cljs.core.seq.call(null,vec__22826);
var first__22828 = cljs.core.first.call(null,seq__22827);
var seq__22827__$1 = cljs.core.next.call(null,seq__22827);
var vec__22829 = first__22828;
var seq__22830 = cljs.core.seq.call(null,vec__22829);
var first__22831 = cljs.core.first.call(null,seq__22830);
var seq__22830__$1 = cljs.core.next.call(null,seq__22830);
var this$ = first__22831;
var args = seq__22830__$1;
var sig = vec__22829;
var body = seq__22827__$1;
var x__11178__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__22832){
var vec__22839 = p__22832;
var seq__22840 = cljs.core.seq.call(null,vec__22839);
var first__22841 = cljs.core.first.call(null,seq__22840);
var seq__22840__$1 = cljs.core.next.call(null,seq__22840);
var vec__22842 = first__22841;
var seq__22843 = cljs.core.seq.call(null,vec__22842);
var first__22844 = cljs.core.first.call(null,seq__22843);
var seq__22843__$1 = cljs.core.next.call(null,seq__22843);
var this$ = first__22844;
var args = seq__22843__$1;
var sig = vec__22842;
var body = seq__22840__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11178__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__22845){
var vec__22852 = p__22845;
var seq__22853 = cljs.core.seq.call(null,vec__22852);
var first__22854 = cljs.core.first.call(null,seq__22853);
var seq__22853__$1 = cljs.core.next.call(null,seq__22853);
var vec__22855 = first__22854;
var seq__22856 = cljs.core.seq.call(null,vec__22855);
var first__22857 = cljs.core.first.call(null,seq__22856);
var seq__22856__$1 = cljs.core.next.call(null,seq__22856);
var this$ = first__22857;
var args = seq__22856__$1;
var sig = vec__22855;
var body = seq__22853__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11178__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__22858){
var vec__22865 = p__22858;
var seq__22866 = cljs.core.seq.call(null,vec__22865);
var first__22867 = cljs.core.first.call(null,seq__22866);
var seq__22866__$1 = cljs.core.next.call(null,seq__22866);
var vec__22868 = first__22867;
var seq__22869 = cljs.core.seq.call(null,vec__22868);
var first__22870 = cljs.core.first.call(null,seq__22869);
var seq__22869__$1 = cljs.core.next.call(null,seq__22869);
var this$ = first__22870;
var args = seq__22869__$1;
var sig = vec__22868;
var body = seq__22866__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11178__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__22879){
var vec__22880 = p__22879;
var seq__22881 = cljs.core.seq.call(null,vec__22880);
var first__22882 = cljs.core.first.call(null,seq__22881);
var seq__22881__$1 = cljs.core.next.call(null,seq__22881);
var f = first__22882;
var meths = seq__22881__$1;
var form = vec__22880;
var vec__22883 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__22883,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__22883,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__22883,f__$1,meths__$1,vec__22880,seq__22881,first__22882,seq__22881__$1,f,meths,form){
return (function (p1__22871_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__22871_SHARP_);
});})(vec__22883,f__$1,meths__$1,vec__22880,seq__22881,first__22882,seq__22881__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__22887){
var vec__22891 = p__22887;
var seq__22892 = cljs.core.seq.call(null,vec__22891);
var first__22893 = cljs.core.first.call(null,seq__22892);
var seq__22892__$1 = cljs.core.next.call(null,seq__22892);
var f = first__22893;
var meths = seq__22892__$1;
var form = vec__22891;
return cljs.core.map.call(null,((function (vec__22891,seq__22892,first__22893,seq__22892__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(vec__22891,seq__22892,first__22893,seq__22892__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__22891,seq__22892,first__22893,seq__22892__$1,f,meths,form){
return (function (p1__22886_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__22886_SHARP_);
});})(vec__22891,seq__22892,first__22893,seq__22892__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__22895){
var vec__22899 = p__22895;
var seq__22900 = cljs.core.seq.call(null,vec__22899);
var first__22901 = cljs.core.first.call(null,seq__22900);
var seq__22900__$1 = cljs.core.next.call(null,seq__22900);
var f = first__22901;
var meths = seq__22900__$1;
var form = vec__22899;
var meths__$1 = cljs.core.map.call(null,((function (vec__22899,seq__22900,first__22901,seq__22900__$1,f,meths,form){
return (function (p1__22894_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__22894_SHARP_);
});})(vec__22899,seq__22900,first__22901,seq__22900__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11178__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__11178__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__11178__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__11178__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__22902){
var vec__22910 = p__22902;
var seq__22911 = cljs.core.seq.call(null,vec__22910);
var first__22912 = cljs.core.first.call(null,seq__22911);
var seq__22911__$1 = cljs.core.next.call(null,seq__22911);
var f = first__22912;
var meths = seq__22911__$1;
var form = vec__22910;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__22910,seq__22911,first__22912,seq__22911__$1,f,meths,form){
return (function (p__22913){
var vec__22914 = p__22913;
var seq__22915 = cljs.core.seq.call(null,vec__22914);
var first__22916 = cljs.core.first.call(null,seq__22915);
var seq__22915__$1 = cljs.core.next.call(null,seq__22915);
var sig = first__22916;
var body = seq__22915__$1;
var meth = vec__22914;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(pf,vec__22910,seq__22911,first__22912,seq__22911__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__22917){
var vec__22921 = p__22917;
var p = cljs.core.nth.call(null,vec__22921,(0),null);
var sigs = cljs.core.nth.call(null,vec__22921,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__22921,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__22921,p,sigs))
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
var vec__22927 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__22927,(0),null);
var sigs = cljs.core.nth.call(null,vec__22927,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_22930 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_22930))){
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

var G__22931 = cljs.core.next.call(null,sigs__$1);
var G__22932 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__22931;
seen = G__22932;
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

var seen_22939 = cljs.core.PersistentHashSet.EMPTY;
var methods_22940__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_22940__$1)){
var vec__22936_22941 = cljs.core.first.call(null,methods_22940__$1);
var fname_22942 = cljs.core.nth.call(null,vec__22936_22941,(0),null);
var method_22943 = vec__22936_22941;
if(cljs.core.contains_QMARK_.call(null,seen_22939,fname_22942)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_22942], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_22943);

var G__22944 = cljs.core.conj.call(null,seen_22939,fname_22942);
var G__22945 = cljs.core.next.call(null,methods_22940__$1);
seen_22939 = G__22944;
methods_22940__$1 = G__22945;
continue;
} else {
}
break;
}

var G__22946 = cljs.core.conj.call(null,protos,proto);
var G__22947 = impls__$2;
protos = G__22946;
impls__$1 = G__22947;
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
var args__11456__auto__ = [];
var len__11449__auto___22956 = arguments.length;
var i__11450__auto___22957 = (0);
while(true){
if((i__11450__auto___22957 < len__11449__auto___22956)){
args__11456__auto__.push((arguments[i__11450__auto___22957]));

var G__22958 = (i__11450__auto___22957 + (1));
i__11450__auto___22957 = G__22958;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__22953 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__22953,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__22953,(1),null);
if(cljs.core.truth_((function (){var and__10324__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__10324__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__10324__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__22953,type,assign_impls){
return (function (p1__22948_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__22948_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__22953,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq22949){
var G__22950 = cljs.core.first.call(null,seq22949);
var seq22949__$1 = cljs.core.next.call(null,seq22949);
var G__22951 = cljs.core.first.call(null,seq22949__$1);
var seq22949__$2 = cljs.core.next.call(null,seq22949__$1);
var G__22952 = cljs.core.first.call(null,seq22949__$2);
var seq22949__$3 = cljs.core.next.call(null,seq22949__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__22950,G__22951,G__22952,seq22949__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__22960){
var vec__22964 = p__22960;
var f = cljs.core.nth.call(null,vec__22964,(0),null);
var sigs = cljs.core.nth.call(null,vec__22964,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__22964,f,sigs){
return (function (p1__22959_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__22959_SHARP_),cljs.core.nnext.call(null,p1__22959_SHARP_));
});})(vec__22964,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args22967 = [];
var len__11449__auto___22970 = arguments.length;
var i__11450__auto___22971 = (0);
while(true){
if((i__11450__auto___22971 < len__11449__auto___22970)){
args22967.push((arguments[i__11450__auto___22971]));

var G__22972 = (i__11450__auto___22971 + (1));
i__11450__auto___22971 = G__22972;
continue;
} else {
}
break;
}

var G__22969 = args22967.length;
switch (G__22969) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22967.length)].join('')));

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
var G__22974 = ret__$1;
var G__22975 = specs__$2;
ret = G__22974;
specs__$1 = G__22975;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__22976_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__22976_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11178__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var args__11456__auto__ = [];
var len__11449__auto___22988 = arguments.length;
var i__11450__auto___22989 = (0);
while(true){
if((i__11450__auto___22989 < len__11449__auto___22988)){
args__11456__auto__.push((arguments[i__11450__auto___22989]));

var G__22990 = (i__11450__auto___22989 + (1));
i__11450__auto___22989 = G__22990;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((4) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11457__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__22985 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__22985,(0),null);
var pmasks = cljs.core.nth.call(null,vec__22985,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__11178__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11178__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__11178__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__11178__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__11178__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__11178__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22977__auto__","this__22977__auto__",-978130946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22978__auto__","writer__22978__auto__",-595697150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__22979__auto__","opt__22979__auto__",565477066,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__22978__auto__","writer__22978__auto__",-595697150,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq22980){
var G__22981 = cljs.core.first.call(null,seq22980);
var seq22980__$1 = cljs.core.next.call(null,seq22980);
var G__22982 = cljs.core.first.call(null,seq22980__$1);
var seq22980__$2 = cljs.core.next.call(null,seq22980__$1);
var G__22983 = cljs.core.first.call(null,seq22980__$2);
var seq22980__$3 = cljs.core.next.call(null,seq22980__$2);
var G__22984 = cljs.core.first.call(null,seq22980__$3);
var seq22980__$4 = cljs.core.next.call(null,seq22980__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__22981,G__22982,G__22983,G__22984,seq22980__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__22991_SHARP_){
return cljs.core.with_meta.call(null,p1__22991_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22992__auto__","this__22992__auto__",-184710834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22993__auto__","this__22993__auto__",-1784329910,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22993__auto__","this__22993__auto__",-1784329910,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22994__auto__","this__22994__auto__",248448888,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__22995__auto__","other__22995__auto__",607419935,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__22995__auto__","other__22995__auto__",607419935,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22994__auto__","this__22994__auto__",248448888,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__22995__auto__","other__22995__auto__",607419935,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22994__auto__","this__22994__auto__",248448888,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__22995__auto__","other__22995__auto__",607419935,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22996__auto__","this__22996__auto__",-178551628,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22997__auto__","this__22997__auto__",-1848493973,null)),(function (){var x__11178__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22998__auto__","this__22998__auto__",-358275499,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22999__auto__","k__22999__auto__",-1223261103,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22998__auto__","this__22998__auto__",-358275499,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__22999__auto__","k__22999__auto__",-1223261103,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23000__auto__","this__23000__auto__",-1166210236,null)),(function (){var x__11178__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__23001__auto__","else__23001__auto__",1761006130,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__11178__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__11178__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__23001__auto__","else__23001__auto__",1761006130,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23002__auto__","this__23002__auto__",-1946361848,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11178__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23003__auto__","this__23003__auto__",-56222772,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__23004__auto__","entry__23004__auto__",326035361,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__23004__auto__","entry__23004__auto__",326035361,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23003__auto__","this__23003__auto__",-56222772,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__23004__auto__","entry__23004__auto__",326035361,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__23004__auto__","entry__23004__auto__",326035361,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23003__auto__","this__23003__auto__",-56222772,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__23004__auto__","entry__23004__auto__",326035361,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23005__auto__","this__23005__auto__",-1335028549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__23006__auto__","k__23006__auto__",-1228273620,null)),(function (){var x__11178__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__23006__auto__","k__23006__auto__",-1228273620,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__23006__auto__","k__23006__auto__",-1228273620,null)),(function (){var x__11178__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23007__auto__","this__23007__auto__",-37124311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__23008__auto__","k__23008__auto__",1556219608,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__11178__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__23008__auto__","k__23008__auto__",1556219608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__11178__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23007__auto__","this__23007__auto__",-37124311,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__23008__auto__","k__23008__auto__",1556219608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__23008__auto__","k__23008__auto__",1556219608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23010__auto__","this__23010__auto__",-1728044511,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__23009_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.keyword.call(null,p1__23009_SHARP_);
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = p1__23009_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__11178__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23012__auto__","this__23012__auto__",1897000056,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__23013__auto__","writer__23013__auto__",-1383375933,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__23014__auto__","opts__23014__auto__",1974055105,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__23015__auto__","pr-pair__23015__auto__",-2006216495,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__23016__auto__","keyval__23016__auto__",273919219,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__23013__auto__","writer__23013__auto__",-1383375933,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__23014__auto__","opts__23014__auto__",1974055105,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__23016__auto__","keyval__23016__auto__",273919219,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__23013__auto__","writer__23013__auto__",-1383375933,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__23015__auto__","pr-pair__23015__auto__",-2006216495,null)),(function (){var x__11178__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__23014__auto__","opts__23014__auto__",1974055105,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__23011_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = cljs.core.keyword.call(null,p1__23011_SHARP_);
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = p1__23011_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())))], null));
var vec__23020 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__23020,(0),null);
var pmasks = cljs.core.nth.call(null,vec__23020,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__11178__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11178__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11178__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11178__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__11178__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var args__11456__auto__ = [];
var len__11449__auto___23030 = arguments.length;
var i__11450__auto___23031 = (0);
while(true){
if((i__11450__auto___23031 < len__11449__auto___23030)){
args__11456__auto__.push((arguments[i__11450__auto___23031]));

var G__23032 = (i__11450__auto___23031 + (1));
i__11450__auto___23031 = G__23032;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((4) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11457__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__11178__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__11178__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__11178__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23023__auto__","this__23023__auto__",1303031968,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__11178__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__23023__auto__","this__23023__auto__",1303031968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__23024__auto__","writer__23024__auto__",20985414,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__23024__auto__","writer__23024__auto__",20985414,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq23025){
var G__23026 = cljs.core.first.call(null,seq23025);
var seq23025__$1 = cljs.core.next.call(null,seq23025);
var G__23027 = cljs.core.first.call(null,seq23025__$1);
var seq23025__$2 = cljs.core.next.call(null,seq23025__$1);
var G__23028 = cljs.core.first.call(null,seq23025__$2);
var seq23025__$3 = cljs.core.next.call(null,seq23025__$2);
var G__23029 = cljs.core.first.call(null,seq23025__$3);
var seq23025__$4 = cljs.core.next.call(null,seq23025__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__23026,G__23027,G__23028,G__23029,seq23025__$4);
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
var args__11456__auto__ = [];
var len__11449__auto___23060 = arguments.length;
var i__11450__auto___23061 = (0);
while(true){
if((i__11450__auto___23061 < len__11449__auto___23060)){
args__11456__auto__.push((arguments[i__11450__auto___23061]));

var G__23062 = (i__11450__auto___23061 + (1));
i__11450__auto___23061 = G__23062;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__23039 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__23039,(0),null);
var methods$ = cljs.core.nth.call(null,vec__23039,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__23039,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__23039,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__23042 = cljs.core.seq.call(null,methods$);
var chunk__23043 = null;
var count__23044 = (0);
var i__23045 = (0);
while(true){
if((i__23045 < count__23044)){
var vec__23046 = cljs.core._nth.call(null,chunk__23043,i__23045);
var seq__23047 = cljs.core.seq.call(null,vec__23046);
var first__23048 = cljs.core.first.call(null,seq__23047);
var seq__23047__$1 = cljs.core.next.call(null,seq__23047);
var mname = first__23048;
var arities = seq__23047__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__23063 = seq__23042;
var G__23064 = chunk__23043;
var G__23065 = count__23044;
var G__23066 = (i__23045 + (1));
seq__23042 = G__23063;
chunk__23043 = G__23064;
count__23044 = G__23065;
i__23045 = G__23066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23042);
if(temp__4657__auto__){
var seq__23042__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23042__$1)){
var c__11155__auto__ = cljs.core.chunk_first.call(null,seq__23042__$1);
var G__23067 = cljs.core.chunk_rest.call(null,seq__23042__$1);
var G__23068 = c__11155__auto__;
var G__23069 = cljs.core.count.call(null,c__11155__auto__);
var G__23070 = (0);
seq__23042 = G__23067;
chunk__23043 = G__23068;
count__23044 = G__23069;
i__23045 = G__23070;
continue;
} else {
var vec__23049 = cljs.core.first.call(null,seq__23042__$1);
var seq__23050 = cljs.core.seq.call(null,vec__23049);
var first__23051 = cljs.core.first.call(null,seq__23050);
var seq__23050__$1 = cljs.core.next.call(null,seq__23050);
var mname = first__23051;
var arities = seq__23050__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__23071 = cljs.core.next.call(null,seq__23042__$1);
var G__23072 = null;
var G__23073 = (0);
var G__23074 = (0);
seq__23042 = G__23071;
chunk__23043 = G__23072;
count__23044 = G__23073;
i__23045 = G__23074;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23033__auto__","x__23033__auto__",1363577910,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11178__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23034__auto__","m__23034__auto__",-528092561,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__11178__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__23033__auto__","x__23033__auto__",1363577910,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23034__auto__","m__23034__auto__",-528092561,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23034__auto__","m__23034__auto__",-528092561,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23034__auto__","m__23034__auto__",-528092561,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__11178__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23034__auto__","m__23034__auto__",-528092561,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__23034__auto__","m__23034__auto__",-528092561,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__23052){
var vec__23053 = p__23052;
var seq__23054 = cljs.core.seq.call(null,vec__23053);
var first__23055 = cljs.core.first.call(null,seq__23054);
var seq__23054__$1 = cljs.core.next.call(null,seq__23054);
var fname = first__23055;
var sigs = seq__23054__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__23056){
var vec__23057 = p__23056;
var seq__23058 = cljs.core.seq.call(null,vec__23057);
var first__23059 = cljs.core.first.call(null,seq__23058);
var seq__23058__$1 = cljs.core.next.call(null,seq__23058);
var fname = first__23059;
var sigs = seq__23058__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11178__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__23057,seq__23058,first__23059,seq__23058__$1,fname,sigs,p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__23057,seq__23058,first__23059,seq__23058__$1,fname,sigs,p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__23039,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__11178__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq23035){
var G__23036 = cljs.core.first.call(null,seq23035);
var seq23035__$1 = cljs.core.next.call(null,seq23035);
var G__23037 = cljs.core.first.call(null,seq23035__$1);
var seq23035__$2 = cljs.core.next.call(null,seq23035__$1);
var G__23038 = cljs.core.first.call(null,seq23035__$2);
var seq23035__$3 = cljs.core.next.call(null,seq23035__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__23036,G__23037,G__23038,seq23035__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__23078 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__23078,(0),null);
var bit = cljs.core.nth.call(null,vec__23078,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11178__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11178__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var vec__23084 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__23084,(0),null);
var bit = cljs.core.nth.call(null,vec__23084,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11178__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11178__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11178__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11178__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11178__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11178__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
var args__11456__auto__ = [];
var len__11449__auto___23090 = arguments.length;
var i__11450__auto___23091 = (0);
while(true){
if((i__11450__auto___23091 < len__11449__auto___23090)){
args__11456__auto__.push((arguments[i__11450__auto___23091]));

var G__23092 = (i__11450__auto___23091 + (1));
i__11450__auto___23091 = G__23092;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq23087){
var G__23088 = cljs.core.first.call(null,seq23087);
var seq23087__$1 = cljs.core.next.call(null,seq23087);
var G__23089 = cljs.core.first.call(null,seq23087__$1);
var seq23087__$2 = cljs.core.next.call(null,seq23087__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__23088,G__23089,seq23087__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__11456__auto__ = [];
var len__11449__auto___23096 = arguments.length;
var i__11450__auto___23097 = (0);
while(true){
if((i__11450__auto___23097 < len__11449__auto___23096)){
args__11456__auto__.push((arguments[i__11450__auto___23097]));

var G__23098 = (i__11450__auto___23097 + (1));
i__11450__auto___23097 = G__23098;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((2) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11457__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq23093){
var G__23094 = cljs.core.first.call(null,seq23093);
var seq23093__$1 = cljs.core.next.call(null,seq23093);
var G__23095 = cljs.core.first.call(null,seq23093__$1);
var seq23093__$2 = cljs.core.next.call(null,seq23093__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__23094,G__23095,seq23093__$2);
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
var args__11456__auto__ = [];
var len__11449__auto___23107 = arguments.length;
var i__11450__auto___23108 = (0);
while(true){
if((i__11450__auto___23108 < len__11449__auto___23107)){
args__11456__auto__.push((arguments[i__11450__auto___23108]));

var G__23109 = (i__11450__auto___23108 + (1));
i__11450__auto___23108 = G__23109;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__23103){
var vec__23104 = p__23103;
var k = cljs.core.nth.call(null,vec__23104,(0),null);
var v = cljs.core.nth.call(null,vec__23104,(1),null);
return cljs.core._conj.call(null,(function (){var x__11178__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__11178__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto____$1);
})(),x__11178__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq23099){
var G__23100 = cljs.core.first.call(null,seq23099);
var seq23099__$1 = cljs.core.next.call(null,seq23099);
var G__23101 = cljs.core.first.call(null,seq23099__$1);
var seq23099__$2 = cljs.core.next.call(null,seq23099__$1);
var G__23102 = cljs.core.first.call(null,seq23099__$2);
var seq23099__$3 = cljs.core.next.call(null,seq23099__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__23100,G__23101,G__23102,seq23099__$3);
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
var args__11456__auto__ = [];
var len__11449__auto___23114 = arguments.length;
var i__11450__auto___23115 = (0);
while(true){
if((i__11450__auto___23115 < len__11449__auto___23114)){
args__11456__auto__.push((arguments[i__11450__auto___23115]));

var G__23116 = (i__11450__auto___23115 + (1));
i__11450__auto___23115 = G__23116;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__11178__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq23110){
var G__23111 = cljs.core.first.call(null,seq23110);
var seq23110__$1 = cljs.core.next.call(null,seq23110);
var G__23112 = cljs.core.first.call(null,seq23110__$1);
var seq23110__$2 = cljs.core.next.call(null,seq23110__$1);
var G__23113 = cljs.core.first.call(null,seq23110__$2);
var seq23110__$3 = cljs.core.next.call(null,seq23110__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__23111,G__23112,G__23113,seq23110__$3);
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
var args__11456__auto__ = [];
var len__11449__auto___23135 = arguments.length;
var i__11450__auto___23136 = (0);
while(true){
if((i__11450__auto___23136 < len__11449__auto___23135)){
args__11456__auto__.push((arguments[i__11450__auto___23136]));

var G__23137 = (i__11450__auto___23136 + (1));
i__11450__auto___23136 = G__23137;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((4) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11457__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__23129 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__23132 = cljs.core.nth.call(null,vec__23129,(0),null);
var a = cljs.core.nth.call(null,vec__23132,(0),null);
var b = cljs.core.nth.call(null,vec__23132,(1),null);
var c = cljs.core.nth.call(null,vec__23132,(2),null);
var clause = vec__23132;
var more = cljs.core.nth.call(null,vec__23129,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__11178__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__23117__auto__","p__23117__auto__",6194189,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__23117__auto__","p__23117__auto__",6194189,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq23118){
var G__23119 = cljs.core.first.call(null,seq23118);
var seq23118__$1 = cljs.core.next.call(null,seq23118);
var G__23120 = cljs.core.first.call(null,seq23118__$1);
var seq23118__$2 = cljs.core.next.call(null,seq23118__$1);
var G__23121 = cljs.core.first.call(null,seq23118__$2);
var seq23118__$3 = cljs.core.next.call(null,seq23118__$2);
var G__23122 = cljs.core.first.call(null,seq23118__$3);
var seq23118__$4 = cljs.core.next.call(null,seq23118__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__23119,G__23120,G__23121,G__23122,seq23118__$4);
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
var m = (function (){var and__10324__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__10324__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__10324__auto__;
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
var args__11456__auto__ = [];
var len__11449__auto___23158 = arguments.length;
var i__11450__auto___23159 = (0);
while(true){
if((i__11450__auto___23159 < len__11449__auto___23158)){
args__11456__auto__.push((arguments[i__11450__auto___23159]));

var G__23160 = (i__11450__auto___23159 + (1));
i__11450__auto___23159 = G__23160;
continue;
} else {
}
break;
}

var argseq__11457__auto__ = ((((3) < args__11456__auto__.length))?(new cljs.core.IndexedSeq(args__11456__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11457__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__11178__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__23146){
var vec__23147 = p__23146;
var test = cljs.core.nth.call(null,vec__23147,(0),null);
var expr = cljs.core.nth.call(null,vec__23147,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__23147,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__11178__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__23147,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__11178__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
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
return (function (p1__23138_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__23138_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__23139_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__23139_SHARP_)){
return cljs.core.vec.call(null,p1__23139_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23139_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__11178__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__23141_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__23141_SHARP_)){
return cljs.core.vec.call(null,p1__23141_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23141_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__23140_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23140_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__11178__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__11178__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__11178__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11178__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__23154){
var vec__23155 = p__23154;
var m = cljs.core.nth.call(null,vec__23155,(0),null);
var c = cljs.core.nth.call(null,vec__23155,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__11178__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__11178__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq23142){
var G__23143 = cljs.core.first.call(null,seq23142);
var seq23142__$1 = cljs.core.next.call(null,seq23142);
var G__23144 = cljs.core.first.call(null,seq23142__$1);
var seq23142__$2 = cljs.core.next.call(null,seq23142__$1);
var G__23145 = cljs.core.first.call(null,seq23142__$2);
var seq23142__$3 = cljs.core.next.call(null,seq23142__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__23143,G__23144,G__23145,seq23142__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args23161 = [];
var len__11449__auto___23164 = arguments.length;
var i__11450__auto___23165 = (0);
while(true){
if((i__11450__auto___23165 < len__11449__auto___23164)){
args23161.push((arguments[i__11450__auto___23165]));

var G__23166 = (i__11450__auto___23165 + (1));
i__11450__auto___23165 = G__23166;
continue;
} else {
}
break;
}

var G__23163 = args23161.length;
switch (G__23163) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args23161.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11178__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11178__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11178__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__11178__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__11178__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11178__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
