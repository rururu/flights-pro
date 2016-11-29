// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18342,handler){
var map__18343 = p__18342;
var map__18343__$1 = ((((!((map__18343 == null)))?((((map__18343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18343):map__18343);
var uri = cljs.core.get.call(null,map__18343__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18343__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18343__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18343__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18343__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18343__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18343__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18343,map__18343__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18341_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18341_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18343,map__18343__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___18355 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___18355)){
var response_type_18356 = temp__4657__auto___18355;
this$__$1.responseType = cljs.core.name.call(null,response_type_18356);
} else {
}

var seq__18345_18357 = cljs.core.seq.call(null,headers);
var chunk__18346_18358 = null;
var count__18347_18359 = (0);
var i__18348_18360 = (0);
while(true){
if((i__18348_18360 < count__18347_18359)){
var vec__18349_18361 = cljs.core._nth.call(null,chunk__18346_18358,i__18348_18360);
var k_18362 = cljs.core.nth.call(null,vec__18349_18361,(0),null);
var v_18363 = cljs.core.nth.call(null,vec__18349_18361,(1),null);
this$__$1.setRequestHeader(k_18362,v_18363);

var G__18364 = seq__18345_18357;
var G__18365 = chunk__18346_18358;
var G__18366 = count__18347_18359;
var G__18367 = (i__18348_18360 + (1));
seq__18345_18357 = G__18364;
chunk__18346_18358 = G__18365;
count__18347_18359 = G__18366;
i__18348_18360 = G__18367;
continue;
} else {
var temp__4657__auto___18368 = cljs.core.seq.call(null,seq__18345_18357);
if(temp__4657__auto___18368){
var seq__18345_18369__$1 = temp__4657__auto___18368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18345_18369__$1)){
var c__9319__auto___18370 = cljs.core.chunk_first.call(null,seq__18345_18369__$1);
var G__18371 = cljs.core.chunk_rest.call(null,seq__18345_18369__$1);
var G__18372 = c__9319__auto___18370;
var G__18373 = cljs.core.count.call(null,c__9319__auto___18370);
var G__18374 = (0);
seq__18345_18357 = G__18371;
chunk__18346_18358 = G__18372;
count__18347_18359 = G__18373;
i__18348_18360 = G__18374;
continue;
} else {
var vec__18352_18375 = cljs.core.first.call(null,seq__18345_18369__$1);
var k_18376 = cljs.core.nth.call(null,vec__18352_18375,(0),null);
var v_18377 = cljs.core.nth.call(null,vec__18352_18375,(1),null);
this$__$1.setRequestHeader(k_18376,v_18377);

var G__18378 = cljs.core.next.call(null,seq__18345_18369__$1);
var G__18379 = null;
var G__18380 = (0);
var G__18381 = (0);
seq__18345_18357 = G__18378;
chunk__18346_18358 = G__18379;
count__18347_18359 = G__18380;
i__18348_18360 = G__18381;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8505__auto__ = body;
if(cljs.core.truth_(or__8505__auto__)){
return or__8505__auto__;
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