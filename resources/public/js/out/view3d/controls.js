// Compiled by ClojureScript 1.10.439 {}
goog.provide('view3d.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.controls.format = (function view3d$controls$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29999 = arguments.length;
var i__4642__auto___30000 = (0);
while(true){
if((i__4642__auto___30000 < len__4641__auto___29999)){
args__4647__auto__.push((arguments[i__4642__auto___30000]));

var G__30001 = (i__4642__auto___30000 + (1));
i__4642__auto___30000 = G__30001;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

view3d.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

view3d.controls.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
view3d.controls.format.cljs$lang$applyTo = (function (seq29997){
var G__29998 = cljs.core.first.call(null,seq29997);
var seq29997__$1 = cljs.core.next.call(null,seq29997);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29998,seq29997__$1);
});

view3d.controls.by_id = (function view3d$controls$by_id(id){
return document.getElementById(id);
});
view3d.controls.get_value = (function view3d$controls$get_value(id){
return view3d.controls.by_id.call(null,id).value;
});
view3d.controls.get_html = (function view3d$controls$get_html(id){
return view3d.controls.by_id.call(null,id).innerHTML;
});
view3d.controls.set_html_BANG_ = (function view3d$controls$set_html_BANG_(id,msg){
return view3d.controls.by_id.call(null,id).innerHTML = msg;
});
view3d.controls.left_controls = (function view3d$controls$left_controls(){
view3d.controls.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

view3d.controls.set_html_BANG_.call(null,"onboard","Onboard:");

view3d.controls.set_html_BANG_.call(null,"onboard-fld","<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>\n   <option value='MANUAL'>MANUAL</option>\n   <option value='select'>select</option>");

view3d.controls.set_html_BANG_.call(null,"view","View:");

view3d.controls.set_html_BANG_.call(null,"view-fld",(0));

view3d.controls.set_html_BANG_.call(null,"view-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.view(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"pitch","Pitch:");

view3d.controls.set_html_BANG_.call(null,"pitch-fld",(0));

view3d.controls.set_html_BANG_.call(null,"pitch-sld","<input type='range' style='width:150px' id='pitch-vals'\n               min='-90' value='0' max='90'\n               oninput='javascript:view3d.client.pitch(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"roll","Roll:");

view3d.controls.set_html_BANG_.call(null,"roll-fld",(0));

return view3d.controls.set_html_BANG_.call(null,"roll-sld","<input type='range' style='width:150px' id='roll-vals'\n               min='-180' value='0' max='180'\n               oninput='javascript:view3d.client.roll(this.value)'>");
});
view3d.controls.right_controls = (function view3d$controls$right_controls(){
view3d.controls.set_html_BANG_.call(null,"autopilot","<h4>Autopilot</h4>");

view3d.controls.set_html_BANG_.call(null,"accel","accel");

view3d.controls.set_html_BANG_.call(null,"course","Course: 000");

view3d.controls.set_html_BANG_.call(null,"course-fld","<input value='180' style='width:38px' id='input-crs'\n                     onchange='javascript:view3d.client.course(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed","Speed: 000");

view3d.controls.set_html_BANG_.call(null,"speed-fld","<input value='210' style='width:38px' id='input-spd'\n               onchange='javascript:view3d.client.speed(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"speed-acl",["<select style='width:44px'\n                onchange='javascript:view3d.client.accel_speed(this.value)'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4434__auto__ = (function view3d$controls$right_controls_$_iter__30002(s__30003){
return (new cljs.core.LazySeq(null,(function (){
var s__30003__$1 = s__30003;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30003__$1);
if(temp__5720__auto__){
var s__30003__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30003__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__30003__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__30005 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__30004 = (0);
while(true){
if((i__30004 < size__4433__auto__)){
var n = cljs.core._nth.call(null,c__4432__auto__,i__30004);
cljs.core.chunk_append.call(null,b__30005,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"</option>"].join(''));

var G__30010 = (i__30004 + (1));
i__30004 = G__30010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30005),view3d$controls$right_controls_$_iter__30002.call(null,cljs.core.chunk_rest.call(null,s__30003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30005),null);
}
} else {
var n = cljs.core.first.call(null,s__30003__$2);
return cljs.core.cons.call(null,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"</option>"].join(''),view3d$controls$right_controls_$_iter__30002.call(null,cljs.core.rest.call(null,s__30003__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude","Altitude: 00000");

view3d.controls.set_html_BANG_.call(null,"altitude-fld","<input value='4000' style='width:38px' id='input-alt'\n               onchange='javascript:view3d.client.altitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"altitude-acl",["<select style='width:44px'\n                onchange='javascript:view3d.client.accel_altitude(this.value)'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4434__auto__ = (function view3d$controls$right_controls_$_iter__30006(s__30007){
return (new cljs.core.LazySeq(null,(function (){
var s__30007__$1 = s__30007;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30007__$1);
if(temp__5720__auto__){
var s__30007__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30007__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__30007__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__30009 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__30008 = (0);
while(true){
if((i__30008 < size__4433__auto__)){
var n = cljs.core._nth.call(null,c__4432__auto__,i__30008);
cljs.core.chunk_append.call(null,b__30009,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"</option>"].join(''));

var G__30011 = (i__30008 + (1));
i__30008 = G__30011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30009),view3d$controls$right_controls_$_iter__30006.call(null,cljs.core.chunk_rest.call(null,s__30007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30009),null);
}
} else {
var n = cljs.core.first.call(null,s__30007__$2);
return cljs.core.cons.call(null,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"</option>"].join(''),view3d$controls$right_controls_$_iter__30006.call(null,cljs.core.rest.call(null,s__30007__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})()))].join(''));

view3d.controls.set_html_BANG_.call(null,"lat","Latitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"latitude-fld","<input value='40.8' style='width:56px' id='input-lat'\n               onchange='javascript:view3d.client.latitude(this.value)'>");

view3d.controls.set_html_BANG_.call(null,"instant","ins");

view3d.controls.set_html_BANG_.call(null,"lon","Longitude: 00.0000");

view3d.controls.set_html_BANG_.call(null,"longitude-fld","<input value='-74.0' style='width:56px' id='input-lon'\n               onchange='javascript:view3d.client.longitude(this.value)'>");

return view3d.controls.set_html_BANG_.call(null,"instant-rdo","<input type='checkbox' id='input-instant'>");
});
view3d.controls.show_controls = (function view3d$controls$show_controls(){
view3d.controls.left_controls.call(null);

return view3d.controls.right_controls.call(null);
});
view3d.controls.show_flight_data = (function view3d$controls$show_flight_data(car){
var map__30012 = car;
var map__30012__$1 = (((((!((map__30012 == null))))?(((((map__30012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);
var coord = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var course = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
var spd = (speed | (0));
view3d.controls.set_html_BANG_.call(null,"course",["Course: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(course)].join(''));

view3d.controls.set_html_BANG_.call(null,"speed",["Speed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spd)].join(''));

view3d.controls.set_html_BANG_.call(null,"altitude",["Altitude: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((altitude | (0)))].join(''));

view3d.controls.set_html_BANG_.call(null,"lat",["Latitude: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.first.call(null,coord)))].join(''));

return view3d.controls.set_html_BANG_.call(null,"lon",["Longitude: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.controls.format.call(null,"%.4f",cljs.core.second.call(null,coord)))].join(''));
});
view3d.controls.callsigns = (function view3d$controls$callsigns(list){
return view3d.controls.set_html_BANG_.call(null,"onboard-fld",["<select onchange='javascript:view3d.client.onboard(this.value)' style='width:96px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,list))?"<option value='callsign'>callsign</option>\n                   <option value='select'>select</option>":["<option value='select'>select</option>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4434__auto__ = (function view3d$controls$callsigns_$_iter__30014(s__30015){
return (new cljs.core.LazySeq(null,(function (){
var s__30015__$1 = s__30015;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30015__$1);
if(temp__5720__auto__){
var s__30015__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30015__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__30015__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__30017 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__30016 = (0);
while(true){
if((i__30016 < size__4433__auto__)){
var e = cljs.core._nth.call(null,c__4432__auto__,i__30016);
cljs.core.chunk_append.call(null,b__30017,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"</option>"].join(''));

var G__30018 = (i__30016 + (1));
i__30016 = G__30018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30017),view3d$controls$callsigns_$_iter__30014.call(null,cljs.core.chunk_rest.call(null,s__30015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30017),null);
}
} else {
var e = cljs.core.first.call(null,s__30015__$2);
return cljs.core.cons.call(null,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"</option>"].join(''),view3d$controls$callsigns_$_iter__30014.call(null,cljs.core.rest.call(null,s__30015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,list);
})()))].join(''))),"</select>"].join(''));
});

//# sourceMappingURL=controls.js.map
