// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25354 = [];
var len__22866__auto___25417 = arguments.length;
var i__22867__auto___25418 = (0);
while(true){
if((i__22867__auto___25418 < len__22866__auto___25417)){
args25354.push((arguments[i__22867__auto___25418]));

var G__25419 = (i__22867__auto___25418 + (1));
i__22867__auto___25418 = G__25419;
continue;
} else {
}
break;
}

var G__25356 = args25354.length;
switch (G__25356) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25354.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__23928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23928__auto__){
return (function (){
var f__23929__auto__ = (function (){var switch__23907__auto__ = ((function (c__23928__auto__){
return (function (state_25370){
var state_val_25371 = (state_25370[(1)]);
if((state_val_25371 === (1))){
var state_25370__$1 = state_25370;
var statearr_25372_25421 = state_25370__$1;
(statearr_25372_25421[(2)] = null);

(statearr_25372_25421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (2))){
var state_25370__$1 = state_25370;
var statearr_25373_25422 = state_25370__$1;
(statearr_25373_25422[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (3))){
var inst_25368 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25370__$1,inst_25368);
} else {
if((state_val_25371 === (4))){
var inst_25359 = func.call(null);
var inst_25360 = cljs.core.async.timeout.call(null,time_out);
var state_25370__$1 = (function (){var statearr_25375 = state_25370;
(statearr_25375[(7)] = inst_25359);

return statearr_25375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(7),inst_25360);
} else {
if((state_val_25371 === (5))){
var state_25370__$1 = state_25370;
var statearr_25376_25423 = state_25370__$1;
(statearr_25376_25423[(2)] = null);

(statearr_25376_25423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (6))){
var inst_25366 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25377_25424 = state_25370__$1;
(statearr_25377_25424[(2)] = inst_25366);

(statearr_25377_25424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (7))){
var inst_25362 = (state_25370[(2)]);
var state_25370__$1 = (function (){var statearr_25378 = state_25370;
(statearr_25378[(8)] = inst_25362);

return statearr_25378;
})();
var statearr_25379_25425 = state_25370__$1;
(statearr_25379_25425[(2)] = null);

(statearr_25379_25425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23928__auto__))
;
return ((function (switch__23907__auto__,c__23928__auto__){
return (function() {
var csasync$proc$state_machine__23908__auto__ = null;
var csasync$proc$state_machine__23908__auto____0 = (function (){
var statearr_25383 = [null,null,null,null,null,null,null,null,null];
(statearr_25383[(0)] = csasync$proc$state_machine__23908__auto__);

(statearr_25383[(1)] = (1));

return statearr_25383;
});
var csasync$proc$state_machine__23908__auto____1 = (function (state_25370){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25384){if((e25384 instanceof Object)){
var ex__23911__auto__ = e25384;
var statearr_25385_25426 = state_25370;
(statearr_25385_25426[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25427 = state_25370;
state_25370 = G__25427;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
csasync$proc$state_machine__23908__auto__ = function(state_25370){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__23908__auto____0.call(this);
case 1:
return csasync$proc$state_machine__23908__auto____1.call(this,state_25370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__23908__auto____0;
csasync$proc$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__23908__auto____1;
return csasync$proc$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__23928__auto__))
})();
var state__23930__auto__ = (function (){var statearr_25386 = f__23929__auto__.call(null);
(statearr_25386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23928__auto__);

return statearr_25386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23930__auto__);
});})(c__23928__auto__))
);

return c__23928__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__23928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23928__auto__){
return (function (){
var f__23929__auto__ = (function (){var switch__23907__auto__ = ((function (c__23928__auto__){
return (function (state_25400){
var state_val_25401 = (state_25400[(1)]);
if((state_val_25401 === (1))){
var state_25400__$1 = state_25400;
var statearr_25402_25428 = state_25400__$1;
(statearr_25402_25428[(2)] = null);

(statearr_25402_25428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (2))){
var state_25400__$1 = state_25400;
var statearr_25403_25429 = state_25400__$1;
(statearr_25403_25429[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (3))){
var inst_25398 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25400__$1,inst_25398);
} else {
if((state_val_25401 === (4))){
var inst_25389 = func.call(null,param);
var inst_25390 = cljs.core.async.timeout.call(null,time_out);
var state_25400__$1 = (function (){var statearr_25405 = state_25400;
(statearr_25405[(7)] = inst_25389);

return statearr_25405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25400__$1,(7),inst_25390);
} else {
if((state_val_25401 === (5))){
var state_25400__$1 = state_25400;
var statearr_25406_25430 = state_25400__$1;
(statearr_25406_25430[(2)] = null);

(statearr_25406_25430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (6))){
var inst_25396 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25407_25431 = state_25400__$1;
(statearr_25407_25431[(2)] = inst_25396);

(statearr_25407_25431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (7))){
var inst_25392 = (state_25400[(2)]);
var state_25400__$1 = (function (){var statearr_25408 = state_25400;
(statearr_25408[(8)] = inst_25392);

return statearr_25408;
})();
var statearr_25409_25432 = state_25400__$1;
(statearr_25409_25432[(2)] = null);

(statearr_25409_25432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23928__auto__))
;
return ((function (switch__23907__auto__,c__23928__auto__){
return (function() {
var csasync$proc$state_machine__23908__auto__ = null;
var csasync$proc$state_machine__23908__auto____0 = (function (){
var statearr_25413 = [null,null,null,null,null,null,null,null,null];
(statearr_25413[(0)] = csasync$proc$state_machine__23908__auto__);

(statearr_25413[(1)] = (1));

return statearr_25413;
});
var csasync$proc$state_machine__23908__auto____1 = (function (state_25400){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25414){if((e25414 instanceof Object)){
var ex__23911__auto__ = e25414;
var statearr_25415_25433 = state_25400;
(statearr_25415_25433[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25434 = state_25400;
state_25400 = G__25434;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
csasync$proc$state_machine__23908__auto__ = function(state_25400){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__23908__auto____0.call(this);
case 1:
return csasync$proc$state_machine__23908__auto____1.call(this,state_25400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__23908__auto____0;
csasync$proc$state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__23908__auto____1;
return csasync$proc$state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__23928__auto__))
})();
var state__23930__auto__ = (function (){var statearr_25416 = f__23929__auto__.call(null);
(statearr_25416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23928__auto__);

return statearr_25416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23930__auto__);
});})(c__23928__auto__))
);

return c__23928__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__23928__auto___25519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23928__auto___25519){
return (function (){
var f__23929__auto__ = (function (){var switch__23907__auto__ = ((function (c__23928__auto___25519){
return (function (state_25497){
var state_val_25498 = (state_25497[(1)]);
if((state_val_25498 === (7))){
var inst_25486 = cljs.core.async.timeout.call(null,time_out);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25497__$1,(10),inst_25486);
} else {
if((state_val_25498 === (1))){
var state_25497__$1 = state_25497;
var statearr_25499_25520 = state_25497__$1;
(statearr_25499_25520[(2)] = null);

(statearr_25499_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (4))){
var inst_25481 = proc_fn.call(null);
var state_25497__$1 = state_25497;
var statearr_25500_25521 = state_25497__$1;
(statearr_25500_25521[(2)] = inst_25481);

(statearr_25500_25521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (6))){
var inst_25484 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
if(cljs.core.truth_(inst_25484)){
var statearr_25501_25522 = state_25497__$1;
(statearr_25501_25522[(1)] = (7));

} else {
var statearr_25502_25523 = state_25497__$1;
(statearr_25502_25523[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (3))){
var inst_25494 = (state_25497[(2)]);
var inst_25495 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25497__$1 = (function (){var statearr_25503 = state_25497;
(statearr_25503[(7)] = inst_25494);

return statearr_25503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25497__$1,inst_25495);
} else {
if((state_val_25498 === (2))){
var inst_25479 = (state_25497[(8)]);
var inst_25478 = cljs.core.deref.call(null,status);
var inst_25479__$1 = cljs.core._EQ_.call(null,inst_25478,"RUN");
var state_25497__$1 = (function (){var statearr_25504 = state_25497;
(statearr_25504[(8)] = inst_25479__$1);

return statearr_25504;
})();
if(inst_25479__$1){
var statearr_25505_25524 = state_25497__$1;
(statearr_25505_25524[(1)] = (4));

} else {
var statearr_25506_25525 = state_25497__$1;
(statearr_25506_25525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (9))){
var inst_25492 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25507_25526 = state_25497__$1;
(statearr_25507_25526[(2)] = inst_25492);

(statearr_25507_25526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (5))){
var inst_25479 = (state_25497[(8)]);
var state_25497__$1 = state_25497;
var statearr_25508_25527 = state_25497__$1;
(statearr_25508_25527[(2)] = inst_25479);

(statearr_25508_25527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (10))){
var inst_25488 = (state_25497[(2)]);
var state_25497__$1 = (function (){var statearr_25509 = state_25497;
(statearr_25509[(9)] = inst_25488);

return statearr_25509;
})();
var statearr_25510_25528 = state_25497__$1;
(statearr_25510_25528[(2)] = null);

(statearr_25510_25528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (8))){
var state_25497__$1 = state_25497;
var statearr_25511_25529 = state_25497__$1;
(statearr_25511_25529[(2)] = null);

(statearr_25511_25529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23928__auto___25519))
;
return ((function (switch__23907__auto__,c__23928__auto___25519){
return (function() {
var csasync$proc$start_process_$_state_machine__23908__auto__ = null;
var csasync$proc$start_process_$_state_machine__23908__auto____0 = (function (){
var statearr_25515 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25515[(0)] = csasync$proc$start_process_$_state_machine__23908__auto__);

(statearr_25515[(1)] = (1));

return statearr_25515;
});
var csasync$proc$start_process_$_state_machine__23908__auto____1 = (function (state_25497){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25516){if((e25516 instanceof Object)){
var ex__23911__auto__ = e25516;
var statearr_25517_25530 = state_25497;
(statearr_25517_25530[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25531 = state_25497;
state_25497 = G__25531;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__23908__auto__ = function(state_25497){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__23908__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__23908__auto____1.call(this,state_25497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__23908__auto____0;
csasync$proc$start_process_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__23908__auto____1;
return csasync$proc$start_process_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__23928__auto___25519))
})();
var state__23930__auto__ = (function (){var statearr_25518 = f__23929__auto__.call(null);
(statearr_25518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23928__auto___25519);

return statearr_25518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23930__auto__);
});})(c__23928__auto___25519))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});
csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"FINISH");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});
csasync.proc.delayer = (function csasync$proc$delayer(func,time){
var c__23928__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23928__auto__){
return (function (){
var f__23929__auto__ = (function (){var switch__23907__auto__ = ((function (c__23928__auto__){
return (function (state_25552){
var state_val_25553 = (state_25552[(1)]);
if((state_val_25553 === (1))){
var inst_25547 = cljs.core.async.timeout.call(null,time);
var state_25552__$1 = state_25552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25552__$1,(2),inst_25547);
} else {
if((state_val_25553 === (2))){
var inst_25549 = (state_25552[(2)]);
var inst_25550 = func.call(null);
var state_25552__$1 = (function (){var statearr_25554 = state_25552;
(statearr_25554[(7)] = inst_25549);

return statearr_25554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25552__$1,inst_25550);
} else {
return null;
}
}
});})(c__23928__auto__))
;
return ((function (switch__23907__auto__,c__23928__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__23908__auto__ = null;
var csasync$proc$delayer_$_state_machine__23908__auto____0 = (function (){
var statearr_25558 = [null,null,null,null,null,null,null,null];
(statearr_25558[(0)] = csasync$proc$delayer_$_state_machine__23908__auto__);

(statearr_25558[(1)] = (1));

return statearr_25558;
});
var csasync$proc$delayer_$_state_machine__23908__auto____1 = (function (state_25552){
while(true){
var ret_value__23909__auto__ = (function (){try{while(true){
var result__23910__auto__ = switch__23907__auto__.call(null,state_25552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23910__auto__;
}
break;
}
}catch (e25559){if((e25559 instanceof Object)){
var ex__23911__auto__ = e25559;
var statearr_25560_25562 = state_25552;
(statearr_25560_25562[(5)] = ex__23911__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25563 = state_25552;
state_25552 = G__25563;
continue;
} else {
return ret_value__23909__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__23908__auto__ = function(state_25552){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__23908__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__23908__auto____1.call(this,state_25552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__23908__auto____0;
csasync$proc$delayer_$_state_machine__23908__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__23908__auto____1;
return csasync$proc$delayer_$_state_machine__23908__auto__;
})()
;})(switch__23907__auto__,c__23928__auto__))
})();
var state__23930__auto__ = (function (){var statearr_25561 = f__23929__auto__.call(null);
(statearr_25561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23928__auto__);

return statearr_25561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23930__auto__);
});})(c__23928__auto__))
);

return c__23928__auto__;
});

//# sourceMappingURL=proc.js.map