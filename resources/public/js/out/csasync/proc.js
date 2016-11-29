// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args31332 = [];
var len__20732__auto___31395 = arguments.length;
var i__20733__auto___31396 = (0);
while(true){
if((i__20733__auto___31396 < len__20732__auto___31395)){
args31332.push((arguments[i__20733__auto___31396]));

var G__31397 = (i__20733__auto___31396 + (1));
i__20733__auto___31396 = G__31397;
continue;
} else {
}
break;
}

var G__31334 = args31332.length;
switch (G__31334) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31332.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__){
return (function (state_31348){
var state_val_31349 = (state_31348[(1)]);
if((state_val_31349 === (1))){
var state_31348__$1 = state_31348;
var statearr_31350_31399 = state_31348__$1;
(statearr_31350_31399[(2)] = null);

(statearr_31350_31399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (2))){
var state_31348__$1 = state_31348;
var statearr_31351_31400 = state_31348__$1;
(statearr_31351_31400[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (3))){
var inst_31346 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31348__$1,inst_31346);
} else {
if((state_val_31349 === (4))){
var inst_31337 = func.call(null);
var inst_31338 = cljs.core.async.timeout.call(null,time_out);
var state_31348__$1 = (function (){var statearr_31353 = state_31348;
(statearr_31353[(7)] = inst_31337);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31348__$1,(7),inst_31338);
} else {
if((state_val_31349 === (5))){
var state_31348__$1 = state_31348;
var statearr_31354_31401 = state_31348__$1;
(statearr_31354_31401[(2)] = null);

(statearr_31354_31401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (6))){
var inst_31344 = (state_31348[(2)]);
var state_31348__$1 = state_31348;
var statearr_31355_31402 = state_31348__$1;
(statearr_31355_31402[(2)] = inst_31344);

(statearr_31355_31402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31349 === (7))){
var inst_31340 = (state_31348[(2)]);
var state_31348__$1 = (function (){var statearr_31356 = state_31348;
(statearr_31356[(8)] = inst_31340);

return statearr_31356;
})();
var statearr_31357_31403 = state_31348__$1;
(statearr_31357_31403[(2)] = null);

(statearr_31357_31403[(1)] = (2));


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
});})(c__26039__auto__))
;
return ((function (switch__25927__auto__,c__26039__auto__){
return (function() {
var csasync$proc$state_machine__25928__auto__ = null;
var csasync$proc$state_machine__25928__auto____0 = (function (){
var statearr_31361 = [null,null,null,null,null,null,null,null,null];
(statearr_31361[(0)] = csasync$proc$state_machine__25928__auto__);

(statearr_31361[(1)] = (1));

return statearr_31361;
});
var csasync$proc$state_machine__25928__auto____1 = (function (state_31348){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_31348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e31362){if((e31362 instanceof Object)){
var ex__25931__auto__ = e31362;
var statearr_31363_31404 = state_31348;
(statearr_31363_31404[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31405 = state_31348;
state_31348 = G__31405;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
csasync$proc$state_machine__25928__auto__ = function(state_31348){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25928__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25928__auto____1.call(this,state_31348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25928__auto____0;
csasync$proc$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25928__auto____1;
return csasync$proc$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__))
})();
var state__26041__auto__ = (function (){var statearr_31364 = f__26040__auto__.call(null);
(statearr_31364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_31364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__))
);

return c__26039__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__){
return (function (state_31378){
var state_val_31379 = (state_31378[(1)]);
if((state_val_31379 === (1))){
var state_31378__$1 = state_31378;
var statearr_31380_31406 = state_31378__$1;
(statearr_31380_31406[(2)] = null);

(statearr_31380_31406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (2))){
var state_31378__$1 = state_31378;
var statearr_31381_31407 = state_31378__$1;
(statearr_31381_31407[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (3))){
var inst_31376 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31378__$1,inst_31376);
} else {
if((state_val_31379 === (4))){
var inst_31367 = func.call(null,param);
var inst_31368 = cljs.core.async.timeout.call(null,time_out);
var state_31378__$1 = (function (){var statearr_31383 = state_31378;
(statearr_31383[(7)] = inst_31367);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31378__$1,(7),inst_31368);
} else {
if((state_val_31379 === (5))){
var state_31378__$1 = state_31378;
var statearr_31384_31408 = state_31378__$1;
(statearr_31384_31408[(2)] = null);

(statearr_31384_31408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (6))){
var inst_31374 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31385_31409 = state_31378__$1;
(statearr_31385_31409[(2)] = inst_31374);

(statearr_31385_31409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (7))){
var inst_31370 = (state_31378[(2)]);
var state_31378__$1 = (function (){var statearr_31386 = state_31378;
(statearr_31386[(8)] = inst_31370);

return statearr_31386;
})();
var statearr_31387_31410 = state_31378__$1;
(statearr_31387_31410[(2)] = null);

(statearr_31387_31410[(1)] = (2));


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
});})(c__26039__auto__))
;
return ((function (switch__25927__auto__,c__26039__auto__){
return (function() {
var csasync$proc$state_machine__25928__auto__ = null;
var csasync$proc$state_machine__25928__auto____0 = (function (){
var statearr_31391 = [null,null,null,null,null,null,null,null,null];
(statearr_31391[(0)] = csasync$proc$state_machine__25928__auto__);

(statearr_31391[(1)] = (1));

return statearr_31391;
});
var csasync$proc$state_machine__25928__auto____1 = (function (state_31378){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_31378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e31392){if((e31392 instanceof Object)){
var ex__25931__auto__ = e31392;
var statearr_31393_31411 = state_31378;
(statearr_31393_31411[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31412 = state_31378;
state_31378 = G__31412;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
csasync$proc$state_machine__25928__auto__ = function(state_31378){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25928__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25928__auto____1.call(this,state_31378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25928__auto____0;
csasync$proc$state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25928__auto____1;
return csasync$proc$state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__))
})();
var state__26041__auto__ = (function (){var statearr_31394 = f__26040__auto__.call(null);
(statearr_31394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_31394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__))
);

return c__26039__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__26039__auto___31497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto___31497){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto___31497){
return (function (state_31475){
var state_val_31476 = (state_31475[(1)]);
if((state_val_31476 === (7))){
var inst_31464 = cljs.core.async.timeout.call(null,time_out);
var state_31475__$1 = state_31475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31475__$1,(10),inst_31464);
} else {
if((state_val_31476 === (1))){
var state_31475__$1 = state_31475;
var statearr_31477_31498 = state_31475__$1;
(statearr_31477_31498[(2)] = null);

(statearr_31477_31498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (4))){
var inst_31459 = proc_fn.call(null);
var state_31475__$1 = state_31475;
var statearr_31478_31499 = state_31475__$1;
(statearr_31478_31499[(2)] = inst_31459);

(statearr_31478_31499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (6))){
var inst_31462 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
if(cljs.core.truth_(inst_31462)){
var statearr_31479_31500 = state_31475__$1;
(statearr_31479_31500[(1)] = (7));

} else {
var statearr_31480_31501 = state_31475__$1;
(statearr_31480_31501[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (3))){
var inst_31472 = (state_31475[(2)]);
var inst_31473 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_31475__$1 = (function (){var statearr_31481 = state_31475;
(statearr_31481[(7)] = inst_31472);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31475__$1,inst_31473);
} else {
if((state_val_31476 === (2))){
var inst_31457 = (state_31475[(8)]);
var inst_31456 = cljs.core.deref.call(null,status);
var inst_31457__$1 = cljs.core._EQ_.call(null,inst_31456,"RUN");
var state_31475__$1 = (function (){var statearr_31482 = state_31475;
(statearr_31482[(8)] = inst_31457__$1);

return statearr_31482;
})();
if(inst_31457__$1){
var statearr_31483_31502 = state_31475__$1;
(statearr_31483_31502[(1)] = (4));

} else {
var statearr_31484_31503 = state_31475__$1;
(statearr_31484_31503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (9))){
var inst_31470 = (state_31475[(2)]);
var state_31475__$1 = state_31475;
var statearr_31485_31504 = state_31475__$1;
(statearr_31485_31504[(2)] = inst_31470);

(statearr_31485_31504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (5))){
var inst_31457 = (state_31475[(8)]);
var state_31475__$1 = state_31475;
var statearr_31486_31505 = state_31475__$1;
(statearr_31486_31505[(2)] = inst_31457);

(statearr_31486_31505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (10))){
var inst_31466 = (state_31475[(2)]);
var state_31475__$1 = (function (){var statearr_31487 = state_31475;
(statearr_31487[(9)] = inst_31466);

return statearr_31487;
})();
var statearr_31488_31506 = state_31475__$1;
(statearr_31488_31506[(2)] = null);

(statearr_31488_31506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31476 === (8))){
var state_31475__$1 = state_31475;
var statearr_31489_31507 = state_31475__$1;
(statearr_31489_31507[(2)] = null);

(statearr_31489_31507[(1)] = (9));


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
});})(c__26039__auto___31497))
;
return ((function (switch__25927__auto__,c__26039__auto___31497){
return (function() {
var csasync$proc$start_process_$_state_machine__25928__auto__ = null;
var csasync$proc$start_process_$_state_machine__25928__auto____0 = (function (){
var statearr_31493 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31493[(0)] = csasync$proc$start_process_$_state_machine__25928__auto__);

(statearr_31493[(1)] = (1));

return statearr_31493;
});
var csasync$proc$start_process_$_state_machine__25928__auto____1 = (function (state_31475){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_31475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e31494){if((e31494 instanceof Object)){
var ex__25931__auto__ = e31494;
var statearr_31495_31508 = state_31475;
(statearr_31495_31508[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31509 = state_31475;
state_31475 = G__31509;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__25928__auto__ = function(state_31475){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__25928__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__25928__auto____1.call(this,state_31475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__25928__auto____0;
csasync$proc$start_process_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__25928__auto____1;
return csasync$proc$start_process_$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto___31497))
})();
var state__26041__auto__ = (function (){var statearr_31496 = f__26040__auto__.call(null);
(statearr_31496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto___31497);

return statearr_31496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto___31497))
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
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__){
return (function (state_31530){
var state_val_31531 = (state_31530[(1)]);
if((state_val_31531 === (1))){
var inst_31525 = cljs.core.async.timeout.call(null,time);
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31530__$1,(2),inst_31525);
} else {
if((state_val_31531 === (2))){
var inst_31527 = (state_31530[(2)]);
var inst_31528 = func.call(null);
var state_31530__$1 = (function (){var statearr_31532 = state_31530;
(statearr_31532[(7)] = inst_31527);

return statearr_31532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31530__$1,inst_31528);
} else {
return null;
}
}
});})(c__26039__auto__))
;
return ((function (switch__25927__auto__,c__26039__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__25928__auto__ = null;
var csasync$proc$delayer_$_state_machine__25928__auto____0 = (function (){
var statearr_31536 = [null,null,null,null,null,null,null,null];
(statearr_31536[(0)] = csasync$proc$delayer_$_state_machine__25928__auto__);

(statearr_31536[(1)] = (1));

return statearr_31536;
});
var csasync$proc$delayer_$_state_machine__25928__auto____1 = (function (state_31530){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_31530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e31537){if((e31537 instanceof Object)){
var ex__25931__auto__ = e31537;
var statearr_31538_31540 = state_31530;
(statearr_31538_31540[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31541 = state_31530;
state_31530 = G__31541;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__25928__auto__ = function(state_31530){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__25928__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__25928__auto____1.call(this,state_31530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__25928__auto____0;
csasync$proc$delayer_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__25928__auto____1;
return csasync$proc$delayer_$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__))
})();
var state__26041__auto__ = (function (){var statearr_31539 = f__26040__auto__.call(null);
(statearr_31539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_31539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__))
);

return c__26039__auto__;
});

//# sourceMappingURL=proc.js.map