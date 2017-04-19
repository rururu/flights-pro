// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__20138,handler){
var map__20139 = p__20138;
var map__20139__$1 = ((((!((map__20139 == null)))?((((map__20139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20139):map__20139);
var uri = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__20139,map__20139__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__20137_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__20137_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__20139,map__20139__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___20151 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___20151)){
var response_type_20152 = temp__4657__auto___20151;
this$__$1.responseType = cljs.core.name.call(null,response_type_20152);
} else {
}

var seq__20141_20153 = cljs.core.seq.call(null,headers);
var chunk__20142_20154 = null;
var count__20143_20155 = (0);
var i__20144_20156 = (0);
while(true){
if((i__20144_20156 < count__20143_20155)){
var vec__20145_20157 = cljs.core._nth.call(null,chunk__20142_20154,i__20144_20156);
var k_20158 = cljs.core.nth.call(null,vec__20145_20157,(0),null);
var v_20159 = cljs.core.nth.call(null,vec__20145_20157,(1),null);
this$__$1.setRequestHeader(k_20158,v_20159);

var G__20160 = seq__20141_20153;
var G__20161 = chunk__20142_20154;
var G__20162 = count__20143_20155;
var G__20163 = (i__20144_20156 + (1));
seq__20141_20153 = G__20160;
chunk__20142_20154 = G__20161;
count__20143_20155 = G__20162;
i__20144_20156 = G__20163;
continue;
} else {
var temp__4657__auto___20164 = cljs.core.seq.call(null,seq__20141_20153);
if(temp__4657__auto___20164){
var seq__20141_20165__$1 = temp__4657__auto___20164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20141_20165__$1)){
var c__11091__auto___20166 = cljs.core.chunk_first.call(null,seq__20141_20165__$1);
var G__20167 = cljs.core.chunk_rest.call(null,seq__20141_20165__$1);
var G__20168 = c__11091__auto___20166;
var G__20169 = cljs.core.count.call(null,c__11091__auto___20166);
var G__20170 = (0);
seq__20141_20153 = G__20167;
chunk__20142_20154 = G__20168;
count__20143_20155 = G__20169;
i__20144_20156 = G__20170;
continue;
} else {
var vec__20148_20171 = cljs.core.first.call(null,seq__20141_20165__$1);
var k_20172 = cljs.core.nth.call(null,vec__20148_20171,(0),null);
var v_20173 = cljs.core.nth.call(null,vec__20148_20171,(1),null);
this$__$1.setRequestHeader(k_20172,v_20173);

var G__20174 = cljs.core.next.call(null,seq__20141_20165__$1);
var G__20175 = null;
var G__20176 = (0);
var G__20177 = (0);
seq__20141_20153 = G__20174;
chunk__20142_20154 = G__20175;
count__20143_20155 = G__20176;
i__20144_20156 = G__20177;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__10277__auto__ = body;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
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