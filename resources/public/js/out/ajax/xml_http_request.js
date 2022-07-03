// Compiled by ClojureScript 1.9.521 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__15408,handler){
var map__15409 = p__15408;
var map__15409__$1 = ((((!((map__15409 == null)))?((((map__15409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15409):map__15409);
var uri = cljs.core.get.call(null,map__15409__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__15409__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__15409__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__15409__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__15409__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__15409__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__15409__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__15409,map__15409__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__15407_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__15407_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__15409,map__15409__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___15421 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___15421)){
var response_type_15422 = temp__4657__auto___15421;
this$__$1.responseType = cljs.core.name.call(null,response_type_15422);
} else {
}

var seq__15411_15423 = cljs.core.seq.call(null,headers);
var chunk__15412_15424 = null;
var count__15413_15425 = (0);
var i__15414_15426 = (0);
while(true){
if((i__15414_15426 < count__15413_15425)){
var vec__15415_15427 = cljs.core._nth.call(null,chunk__15412_15424,i__15414_15426);
var k_15428 = cljs.core.nth.call(null,vec__15415_15427,(0),null);
var v_15429 = cljs.core.nth.call(null,vec__15415_15427,(1),null);
this$__$1.setRequestHeader(k_15428,v_15429);

var G__15430 = seq__15411_15423;
var G__15431 = chunk__15412_15424;
var G__15432 = count__15413_15425;
var G__15433 = (i__15414_15426 + (1));
seq__15411_15423 = G__15430;
chunk__15412_15424 = G__15431;
count__15413_15425 = G__15432;
i__15414_15426 = G__15433;
continue;
} else {
var temp__4657__auto___15434 = cljs.core.seq.call(null,seq__15411_15423);
if(temp__4657__auto___15434){
var seq__15411_15435__$1 = temp__4657__auto___15434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15411_15435__$1)){
var c__10811__auto___15436 = cljs.core.chunk_first.call(null,seq__15411_15435__$1);
var G__15437 = cljs.core.chunk_rest.call(null,seq__15411_15435__$1);
var G__15438 = c__10811__auto___15436;
var G__15439 = cljs.core.count.call(null,c__10811__auto___15436);
var G__15440 = (0);
seq__15411_15423 = G__15437;
chunk__15412_15424 = G__15438;
count__15413_15425 = G__15439;
i__15414_15426 = G__15440;
continue;
} else {
var vec__15418_15441 = cljs.core.first.call(null,seq__15411_15435__$1);
var k_15442 = cljs.core.nth.call(null,vec__15418_15441,(0),null);
var v_15443 = cljs.core.nth.call(null,vec__15418_15441,(1),null);
this$__$1.setRequestHeader(k_15442,v_15443);

var G__15444 = cljs.core.next.call(null,seq__15411_15435__$1);
var G__15445 = null;
var G__15446 = (0);
var G__15447 = (0);
seq__15411_15423 = G__15444;
chunk__15412_15424 = G__15445;
count__15413_15425 = G__15446;
i__15414_15426 = G__15447;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__9992__auto__ = body;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
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