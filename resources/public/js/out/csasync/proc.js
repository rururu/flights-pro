// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args38375 = [];
var len__26217__auto___38438 = arguments.length;
var i__26218__auto___38439 = (0);
while(true){
if((i__26218__auto___38439 < len__26217__auto___38438)){
args38375.push((arguments[i__26218__auto___38439]));

var G__38440 = (i__26218__auto___38439 + (1));
i__26218__auto___38439 = G__38440;
continue;
} else {
}
break;
}

var G__38377 = args38375.length;
switch (G__38377) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38375.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__27196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27196__auto__){
return (function (){
var f__27197__auto__ = (function (){var switch__27175__auto__ = ((function (c__27196__auto__){
return (function (state_38391){
var state_val_38392 = (state_38391[(1)]);
if((state_val_38392 === (1))){
var state_38391__$1 = state_38391;
var statearr_38393_38442 = state_38391__$1;
(statearr_38393_38442[(2)] = null);

(statearr_38393_38442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38392 === (2))){
var state_38391__$1 = state_38391;
var statearr_38394_38443 = state_38391__$1;
(statearr_38394_38443[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38392 === (3))){
var inst_38389 = (state_38391[(2)]);
var state_38391__$1 = state_38391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38391__$1,inst_38389);
} else {
if((state_val_38392 === (4))){
var inst_38380 = func.call(null);
var inst_38381 = cljs.core.async.timeout.call(null,time_out);
var state_38391__$1 = (function (){var statearr_38396 = state_38391;
(statearr_38396[(7)] = inst_38380);

return statearr_38396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38391__$1,(7),inst_38381);
} else {
if((state_val_38392 === (5))){
var state_38391__$1 = state_38391;
var statearr_38397_38444 = state_38391__$1;
(statearr_38397_38444[(2)] = null);

(statearr_38397_38444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38392 === (6))){
var inst_38387 = (state_38391[(2)]);
var state_38391__$1 = state_38391;
var statearr_38398_38445 = state_38391__$1;
(statearr_38398_38445[(2)] = inst_38387);

(statearr_38398_38445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38392 === (7))){
var inst_38383 = (state_38391[(2)]);
var state_38391__$1 = (function (){var statearr_38399 = state_38391;
(statearr_38399[(8)] = inst_38383);

return statearr_38399;
})();
var statearr_38400_38446 = state_38391__$1;
(statearr_38400_38446[(2)] = null);

(statearr_38400_38446[(1)] = (2));


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
});})(c__27196__auto__))
;
return ((function (switch__27175__auto__,c__27196__auto__){
return (function() {
var csasync$proc$state_machine__27176__auto__ = null;
var csasync$proc$state_machine__27176__auto____0 = (function (){
var statearr_38404 = [null,null,null,null,null,null,null,null,null];
(statearr_38404[(0)] = csasync$proc$state_machine__27176__auto__);

(statearr_38404[(1)] = (1));

return statearr_38404;
});
var csasync$proc$state_machine__27176__auto____1 = (function (state_38391){
while(true){
var ret_value__27177__auto__ = (function (){try{while(true){
var result__27178__auto__ = switch__27175__auto__.call(null,state_38391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27178__auto__;
}
break;
}
}catch (e38405){if((e38405 instanceof Object)){
var ex__27179__auto__ = e38405;
var statearr_38406_38447 = state_38391;
(statearr_38406_38447[(5)] = ex__27179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38448 = state_38391;
state_38391 = G__38448;
continue;
} else {
return ret_value__27177__auto__;
}
break;
}
});
csasync$proc$state_machine__27176__auto__ = function(state_38391){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__27176__auto____0.call(this);
case 1:
return csasync$proc$state_machine__27176__auto____1.call(this,state_38391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__27176__auto____0;
csasync$proc$state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__27176__auto____1;
return csasync$proc$state_machine__27176__auto__;
})()
;})(switch__27175__auto__,c__27196__auto__))
})();
var state__27198__auto__ = (function (){var statearr_38407 = f__27197__auto__.call(null);
(statearr_38407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27196__auto__);

return statearr_38407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27198__auto__);
});})(c__27196__auto__))
);

return c__27196__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__27196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27196__auto__){
return (function (){
var f__27197__auto__ = (function (){var switch__27175__auto__ = ((function (c__27196__auto__){
return (function (state_38421){
var state_val_38422 = (state_38421[(1)]);
if((state_val_38422 === (1))){
var state_38421__$1 = state_38421;
var statearr_38423_38449 = state_38421__$1;
(statearr_38423_38449[(2)] = null);

(statearr_38423_38449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (2))){
var state_38421__$1 = state_38421;
var statearr_38424_38450 = state_38421__$1;
(statearr_38424_38450[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (3))){
var inst_38419 = (state_38421[(2)]);
var state_38421__$1 = state_38421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38421__$1,inst_38419);
} else {
if((state_val_38422 === (4))){
var inst_38410 = func.call(null,param);
var inst_38411 = cljs.core.async.timeout.call(null,time_out);
var state_38421__$1 = (function (){var statearr_38426 = state_38421;
(statearr_38426[(7)] = inst_38410);

return statearr_38426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38421__$1,(7),inst_38411);
} else {
if((state_val_38422 === (5))){
var state_38421__$1 = state_38421;
var statearr_38427_38451 = state_38421__$1;
(statearr_38427_38451[(2)] = null);

(statearr_38427_38451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (6))){
var inst_38417 = (state_38421[(2)]);
var state_38421__$1 = state_38421;
var statearr_38428_38452 = state_38421__$1;
(statearr_38428_38452[(2)] = inst_38417);

(statearr_38428_38452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38422 === (7))){
var inst_38413 = (state_38421[(2)]);
var state_38421__$1 = (function (){var statearr_38429 = state_38421;
(statearr_38429[(8)] = inst_38413);

return statearr_38429;
})();
var statearr_38430_38453 = state_38421__$1;
(statearr_38430_38453[(2)] = null);

(statearr_38430_38453[(1)] = (2));


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
});})(c__27196__auto__))
;
return ((function (switch__27175__auto__,c__27196__auto__){
return (function() {
var csasync$proc$state_machine__27176__auto__ = null;
var csasync$proc$state_machine__27176__auto____0 = (function (){
var statearr_38434 = [null,null,null,null,null,null,null,null,null];
(statearr_38434[(0)] = csasync$proc$state_machine__27176__auto__);

(statearr_38434[(1)] = (1));

return statearr_38434;
});
var csasync$proc$state_machine__27176__auto____1 = (function (state_38421){
while(true){
var ret_value__27177__auto__ = (function (){try{while(true){
var result__27178__auto__ = switch__27175__auto__.call(null,state_38421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27178__auto__;
}
break;
}
}catch (e38435){if((e38435 instanceof Object)){
var ex__27179__auto__ = e38435;
var statearr_38436_38454 = state_38421;
(statearr_38436_38454[(5)] = ex__27179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38455 = state_38421;
state_38421 = G__38455;
continue;
} else {
return ret_value__27177__auto__;
}
break;
}
});
csasync$proc$state_machine__27176__auto__ = function(state_38421){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__27176__auto____0.call(this);
case 1:
return csasync$proc$state_machine__27176__auto____1.call(this,state_38421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__27176__auto____0;
csasync$proc$state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__27176__auto____1;
return csasync$proc$state_machine__27176__auto__;
})()
;})(switch__27175__auto__,c__27196__auto__))
})();
var state__27198__auto__ = (function (){var statearr_38437 = f__27197__auto__.call(null);
(statearr_38437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27196__auto__);

return statearr_38437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27198__auto__);
});})(c__27196__auto__))
);

return c__27196__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__27196__auto___38562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27196__auto___38562){
return (function (){
var f__27197__auto__ = (function (){var switch__27175__auto__ = ((function (c__27196__auto___38562){
return (function (state_38535){
var state_val_38536 = (state_38535[(1)]);
if((state_val_38536 === (7))){
var inst_38518 = cljs.core.async.timeout.call(null,time_out);
var state_38535__$1 = state_38535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38535__$1,(10),inst_38518);
} else {
if((state_val_38536 === (1))){
var state_38535__$1 = state_38535;
var statearr_38537_38563 = state_38535__$1;
(statearr_38537_38563[(2)] = null);

(statearr_38537_38563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (4))){
var inst_38513 = proc_fn.call(null);
var state_38535__$1 = state_38535;
var statearr_38538_38564 = state_38535__$1;
(statearr_38538_38564[(2)] = inst_38513);

(statearr_38538_38564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (13))){
var inst_38532 = (state_38535[(2)]);
var inst_38533 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_38535__$1 = (function (){var statearr_38539 = state_38535;
(statearr_38539[(7)] = inst_38532);

return statearr_38539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38535__$1,inst_38533);
} else {
if((state_val_38536 === (6))){
var inst_38516 = (state_38535[(2)]);
var state_38535__$1 = state_38535;
if(cljs.core.truth_(inst_38516)){
var statearr_38540_38565 = state_38535__$1;
(statearr_38540_38565[(1)] = (7));

} else {
var statearr_38541_38566 = state_38535__$1;
(statearr_38541_38566[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (3))){
var inst_38526 = (state_38535[(2)]);
var inst_38527 = (final_fun instanceof clojure.lang.IFn);
var state_38535__$1 = (function (){var statearr_38542 = state_38535;
(statearr_38542[(8)] = inst_38526);

return statearr_38542;
})();
if(cljs.core.truth_(inst_38527)){
var statearr_38543_38567 = state_38535__$1;
(statearr_38543_38567[(1)] = (11));

} else {
var statearr_38544_38568 = state_38535__$1;
(statearr_38544_38568[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (12))){
var state_38535__$1 = state_38535;
var statearr_38545_38569 = state_38535__$1;
(statearr_38545_38569[(2)] = null);

(statearr_38545_38569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (2))){
var inst_38511 = (state_38535[(9)]);
var inst_38510 = cljs.core.deref.call(null,status);
var inst_38511__$1 = cljs.core._EQ_.call(null,inst_38510,"RUN");
var state_38535__$1 = (function (){var statearr_38546 = state_38535;
(statearr_38546[(9)] = inst_38511__$1);

return statearr_38546;
})();
if(inst_38511__$1){
var statearr_38547_38570 = state_38535__$1;
(statearr_38547_38570[(1)] = (4));

} else {
var statearr_38548_38571 = state_38535__$1;
(statearr_38548_38571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (11))){
var inst_38529 = final_fun.call(null);
var state_38535__$1 = state_38535;
var statearr_38549_38572 = state_38535__$1;
(statearr_38549_38572[(2)] = inst_38529);

(statearr_38549_38572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (9))){
var inst_38524 = (state_38535[(2)]);
var state_38535__$1 = state_38535;
var statearr_38550_38573 = state_38535__$1;
(statearr_38550_38573[(2)] = inst_38524);

(statearr_38550_38573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (5))){
var inst_38511 = (state_38535[(9)]);
var state_38535__$1 = state_38535;
var statearr_38551_38574 = state_38535__$1;
(statearr_38551_38574[(2)] = inst_38511);

(statearr_38551_38574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (10))){
var inst_38520 = (state_38535[(2)]);
var state_38535__$1 = (function (){var statearr_38552 = state_38535;
(statearr_38552[(10)] = inst_38520);

return statearr_38552;
})();
var statearr_38553_38575 = state_38535__$1;
(statearr_38553_38575[(2)] = null);

(statearr_38553_38575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38536 === (8))){
var state_38535__$1 = state_38535;
var statearr_38554_38576 = state_38535__$1;
(statearr_38554_38576[(2)] = null);

(statearr_38554_38576[(1)] = (9));


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
}
}
}
});})(c__27196__auto___38562))
;
return ((function (switch__27175__auto__,c__27196__auto___38562){
return (function() {
var csasync$proc$start_process_$_state_machine__27176__auto__ = null;
var csasync$proc$start_process_$_state_machine__27176__auto____0 = (function (){
var statearr_38558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38558[(0)] = csasync$proc$start_process_$_state_machine__27176__auto__);

(statearr_38558[(1)] = (1));

return statearr_38558;
});
var csasync$proc$start_process_$_state_machine__27176__auto____1 = (function (state_38535){
while(true){
var ret_value__27177__auto__ = (function (){try{while(true){
var result__27178__auto__ = switch__27175__auto__.call(null,state_38535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27178__auto__;
}
break;
}
}catch (e38559){if((e38559 instanceof Object)){
var ex__27179__auto__ = e38559;
var statearr_38560_38577 = state_38535;
(statearr_38560_38577[(5)] = ex__27179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38578 = state_38535;
state_38535 = G__38578;
continue;
} else {
return ret_value__27177__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__27176__auto__ = function(state_38535){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__27176__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__27176__auto____1.call(this,state_38535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__27176__auto____0;
csasync$proc$start_process_$_state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__27176__auto____1;
return csasync$proc$start_process_$_state_machine__27176__auto__;
})()
;})(switch__27175__auto__,c__27196__auto___38562))
})();
var state__27198__auto__ = (function (){var statearr_38561 = f__27197__auto__.call(null);
(statearr_38561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27196__auto___38562);

return statearr_38561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27198__auto__);
});})(c__27196__auto___38562))
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
var c__27196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27196__auto__){
return (function (){
var f__27197__auto__ = (function (){var switch__27175__auto__ = ((function (c__27196__auto__){
return (function (state_38599){
var state_val_38600 = (state_38599[(1)]);
if((state_val_38600 === (1))){
var inst_38594 = cljs.core.async.timeout.call(null,time);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38599__$1,(2),inst_38594);
} else {
if((state_val_38600 === (2))){
var inst_38596 = (state_38599[(2)]);
var inst_38597 = func.call(null);
var state_38599__$1 = (function (){var statearr_38601 = state_38599;
(statearr_38601[(7)] = inst_38596);

return statearr_38601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38599__$1,inst_38597);
} else {
return null;
}
}
});})(c__27196__auto__))
;
return ((function (switch__27175__auto__,c__27196__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__27176__auto__ = null;
var csasync$proc$delayer_$_state_machine__27176__auto____0 = (function (){
var statearr_38605 = [null,null,null,null,null,null,null,null];
(statearr_38605[(0)] = csasync$proc$delayer_$_state_machine__27176__auto__);

(statearr_38605[(1)] = (1));

return statearr_38605;
});
var csasync$proc$delayer_$_state_machine__27176__auto____1 = (function (state_38599){
while(true){
var ret_value__27177__auto__ = (function (){try{while(true){
var result__27178__auto__ = switch__27175__auto__.call(null,state_38599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27178__auto__;
}
break;
}
}catch (e38606){if((e38606 instanceof Object)){
var ex__27179__auto__ = e38606;
var statearr_38607_38609 = state_38599;
(statearr_38607_38609[(5)] = ex__27179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38610 = state_38599;
state_38599 = G__38610;
continue;
} else {
return ret_value__27177__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__27176__auto__ = function(state_38599){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__27176__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__27176__auto____1.call(this,state_38599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__27176__auto____0;
csasync$proc$delayer_$_state_machine__27176__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__27176__auto____1;
return csasync$proc$delayer_$_state_machine__27176__auto__;
})()
;})(switch__27175__auto__,c__27196__auto__))
})();
var state__27198__auto__ = (function (){var statearr_38608 = f__27197__auto__.call(null);
(statearr_38608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27196__auto__);

return statearr_38608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27198__auto__);
});})(c__27196__auto__))
);

return c__27196__auto__;
});

//# sourceMappingURL=proc.js.map