// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
chart.controls.format = (function chart$controls$format(var_args){
var args__24603__auto__ = [];
var len__24596__auto___40755 = arguments.length;
var i__24597__auto___40756 = (0);
while(true){
if((i__24597__auto___40756 < len__24596__auto___40755)){
args__24603__auto__.push((arguments[i__24597__auto___40756]));

var G__40757 = (i__24597__auto___40756 + (1));
i__24597__auto___40756 = G__40757;
continue;
} else {
}
break;
}

var argseq__24604__auto__ = ((((1) < args__24603__auto__.length))?(new cljs.core.IndexedSeq(args__24603__auto__.slice((1)),(0),null)):null);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24604__auto__);
});

chart.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chart.controls.format.cljs$lang$maxFixedArity = (1);

chart.controls.format.cljs$lang$applyTo = (function (seq40753){
var G__40754 = cljs.core.first.call(null,seq40753);
var seq40753__$1 = cljs.core.next.call(null,seq40753);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__40754,seq40753__$1);
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

chart.controls.set_html_BANG_.call(null,"commands","<select onchange='javascript:chart.client.command(this.value)'>\n   <option value='commands'>Commands</option>\n   <option value='watch-visible'>Watch Visible Area</option>\n   <option value='move-to'>Move to Airport</option>\n   <option value='schedule'>Schedule Flight</option>\n   <option value='wikipedia'>Toggle Wikipedia</option>\n   <option value='clear'>Clear</option>\n   </select>");

chart.controls.set_html_BANG_.call(null,"questions-header","<h4>Questions</h4>");

return chart.controls.set_html_BANG_.call(null,"questions","<select onchange='javascript:chart.client.question(this.value)'>\n   <option value='questions'>Questions</option>\n   <option value='intersect'>Intersections</option>\n   <option value='weather-gn'>Weather GeoNames</option>\n   <option value='weather-w2'>Weather2</option>\n   <option value='nearest-airports'>Nearest Airports</option>\n   <option value='where-we-are'>Where We Are?</option>\n   </select>");
});
chart.controls.display_zoom = (function chart$controls$display_zoom(z){
return chart.controls.set_html_BANG_.call(null,"zoom",[cljs.core.str("zoom "),cljs.core.str(z)].join(''));
});

//# sourceMappingURL=controls.js.map