// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
chart.controls.format = (function chart$controls$format(var_args){
var args__19553__auto__ = [];
var len__19546__auto___23924 = arguments.length;
var i__19547__auto___23925 = (0);
while(true){
if((i__19547__auto___23925 < len__19546__auto___23924)){
args__19553__auto__.push((arguments[i__19547__auto___23925]));

var G__23926 = (i__19547__auto___23925 + (1));
i__19547__auto___23925 = G__23926;
continue;
} else {
}
break;
}

var argseq__19554__auto__ = ((((1) < args__19553__auto__.length))?(new cljs.core.IndexedSeq(args__19553__auto__.slice((1)),(0),null)):null);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19554__auto__);
});

chart.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chart.controls.format.cljs$lang$maxFixedArity = (1);

chart.controls.format.cljs$lang$applyTo = (function (seq23922){
var G__23923 = cljs.core.first.call(null,seq23922);
var seq23922__$1 = cljs.core.next.call(null,seq23922);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__23923,seq23922__$1);
});

chart.controls.by_id = (function chart$controls$by_id(id){
return document.getElementById(id);
});
chart.controls.set_html_BANG_ = (function chart$controls$set_html_BANG_(id,msg){
return chart.controls.by_id.call(null,id).innerHTML = msg;
});
chart.controls.mouse_move = (function chart$controls$mouse_move(lat,lng){
return chart.controls.set_html_BANG_.call(null,"mousepos",[cljs.core.str("lat "),cljs.core.str(chart.controls.format.call(null,"%.4f",lat)),cljs.core.str(" lon "),cljs.core.str(chart.controls.format.call(null,"%.4f",lng))].join(''));
});

//# sourceMappingURL=controls.js.map