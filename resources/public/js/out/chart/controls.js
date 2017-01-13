// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
chart.controls.format = (function chart$controls$format(var_args){
var args__20545__auto__ = [];
var len__20538__auto___31622 = arguments.length;
var i__20539__auto___31623 = (0);
while(true){
if((i__20539__auto___31623 < len__20538__auto___31622)){
args__20545__auto__.push((arguments[i__20539__auto___31623]));

var G__31624 = (i__20539__auto___31623 + (1));
i__20539__auto___31623 = G__31624;
continue;
} else {
}
break;
}

var argseq__20546__auto__ = ((((1) < args__20545__auto__.length))?(new cljs.core.IndexedSeq(args__20545__auto__.slice((1)),(0),null)):null);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20546__auto__);
});

chart.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chart.controls.format.cljs$lang$maxFixedArity = (1);

chart.controls.format.cljs$lang$applyTo = (function (seq31620){
var G__31621 = cljs.core.first.call(null,seq31620);
var seq31620__$1 = cljs.core.next.call(null,seq31620);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__31621,seq31620__$1);
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
chart.controls.show_chart_controls = (function chart$controls$show_chart_controls(){
chart.controls.set_html_BANG_.call(null,"commands-header","<h4>Commands</h4>");

return chart.controls.set_html_BANG_.call(null,"commands","<select onchange='javascript:chart.client.command(this.value)'>\n   <option value='commands'>Commands</option>\n   <option value='watch-visible'>Watch visible area</option>\n   <option value='intersect'>Intersections</option>\n   <option value='move-to'>Move to Airport</option>\n   <option value='schedule'>Schedule Flight</option>\n   <option value='wikipedia'>Wikipedia</option>\n   <option value='clear'>Clear</option>\n   </select>");
});

//# sourceMappingURL=controls.js.map