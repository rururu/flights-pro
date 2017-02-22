// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19271,handler){
var map__19272 = p__19271;
var map__19272__$1 = ((((!((map__19272 == null)))?((((map__19272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19272):map__19272);
var uri = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19272,map__19272__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19270_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__19270_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__19272,map__19272__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___19284 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___19284)){
var response_type_19285 = temp__4657__auto___19284;
this$__$1.responseType = cljs.core.name.call(null,response_type_19285);
} else {
}

var seq__19274_19286 = cljs.core.seq.call(null,headers);
var chunk__19275_19287 = null;
var count__19276_19288 = (0);
var i__19277_19289 = (0);
while(true){
if((i__19277_19289 < count__19276_19288)){
var vec__19278_19290 = cljs.core._nth.call(null,chunk__19275_19287,i__19277_19289);
var k_19291 = cljs.core.nth.call(null,vec__19278_19290,(0),null);
var v_19292 = cljs.core.nth.call(null,vec__19278_19290,(1),null);
this$__$1.setRequestHeader(k_19291,v_19292);

var G__19293 = seq__19274_19286;
var G__19294 = chunk__19275_19287;
var G__19295 = count__19276_19288;
var G__19296 = (i__19277_19289 + (1));
seq__19274_19286 = G__19293;
chunk__19275_19287 = G__19294;
count__19276_19288 = G__19295;
i__19277_19289 = G__19296;
continue;
} else {
var temp__4657__auto___19297 = cljs.core.seq.call(null,seq__19274_19286);
if(temp__4657__auto___19297){
var seq__19274_19298__$1 = temp__4657__auto___19297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19274_19298__$1)){
var c__10222__auto___19299 = cljs.core.chunk_first.call(null,seq__19274_19298__$1);
var G__19300 = cljs.core.chunk_rest.call(null,seq__19274_19298__$1);
var G__19301 = c__10222__auto___19299;
var G__19302 = cljs.core.count.call(null,c__10222__auto___19299);
var G__19303 = (0);
seq__19274_19286 = G__19300;
chunk__19275_19287 = G__19301;
count__19276_19288 = G__19302;
i__19277_19289 = G__19303;
continue;
} else {
var vec__19281_19304 = cljs.core.first.call(null,seq__19274_19298__$1);
var k_19305 = cljs.core.nth.call(null,vec__19281_19304,(0),null);
var v_19306 = cljs.core.nth.call(null,vec__19281_19304,(1),null);
this$__$1.setRequestHeader(k_19305,v_19306);

var G__19307 = cljs.core.next.call(null,seq__19274_19298__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__19274_19286 = G__19307;
chunk__19275_19287 = G__19308;
count__19276_19288 = G__19309;
i__19277_19289 = G__19310;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__9408__auto__ = body;
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map