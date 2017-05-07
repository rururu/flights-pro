// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args36373 = [];
var len__10030__auto___36436 = arguments.length;
var i__10031__auto___36437 = (0);
while(true){
if((i__10031__auto___36437 < len__10030__auto___36436)){
args36373.push((arguments[i__10031__auto___36437]));

var G__36438 = (i__10031__auto___36437 + (1));
i__10031__auto___36437 = G__36438;
continue;
} else {
}
break;
}

var G__36375 = args36373.length;
switch (G__36375) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36373.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__){
return (function (state_36389){
var state_val_36390 = (state_36389[(1)]);
if((state_val_36390 === (1))){
var state_36389__$1 = state_36389;
var statearr_36391_36440 = state_36389__$1;
(statearr_36391_36440[(2)] = null);

(statearr_36391_36440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (2))){
var state_36389__$1 = state_36389;
var statearr_36392_36441 = state_36389__$1;
(statearr_36392_36441[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (3))){
var inst_36387 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36389__$1,inst_36387);
} else {
if((state_val_36390 === (4))){
var inst_36378 = func.call(null);
var inst_36379 = cljs.core.async.timeout.call(null,time_out);
var state_36389__$1 = (function (){var statearr_36394 = state_36389;
(statearr_36394[(7)] = inst_36378);

return statearr_36394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36389__$1,(7),inst_36379);
} else {
if((state_val_36390 === (5))){
var state_36389__$1 = state_36389;
var statearr_36395_36442 = state_36389__$1;
(statearr_36395_36442[(2)] = null);

(statearr_36395_36442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (6))){
var inst_36385 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36396_36443 = state_36389__$1;
(statearr_36396_36443[(2)] = inst_36385);

(statearr_36396_36443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (7))){
var inst_36381 = (state_36389[(2)]);
var state_36389__$1 = (function (){var statearr_36397 = state_36389;
(statearr_36397[(8)] = inst_36381);

return statearr_36397;
})();
var statearr_36398_36444 = state_36389__$1;
(statearr_36398_36444[(2)] = null);

(statearr_36398_36444[(1)] = (2));


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
});})(c__16980__auto__))
;
return ((function (switch__16868__auto__,c__16980__auto__){
return (function() {
var csasync$proc$state_machine__16869__auto__ = null;
var csasync$proc$state_machine__16869__auto____0 = (function (){
var statearr_36402 = [null,null,null,null,null,null,null,null,null];
(statearr_36402[(0)] = csasync$proc$state_machine__16869__auto__);

(statearr_36402[(1)] = (1));

return statearr_36402;
});
var csasync$proc$state_machine__16869__auto____1 = (function (state_36389){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_36389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e36403){if((e36403 instanceof Object)){
var ex__16872__auto__ = e36403;
var statearr_36404_36445 = state_36389;
(statearr_36404_36445[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36446 = state_36389;
state_36389 = G__36446;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
csasync$proc$state_machine__16869__auto__ = function(state_36389){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__16869__auto____0.call(this);
case 1:
return csasync$proc$state_machine__16869__auto____1.call(this,state_36389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__16869__auto____0;
csasync$proc$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__16869__auto____1;
return csasync$proc$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__))
})();
var state__16982__auto__ = (function (){var statearr_36405 = f__16981__auto__.call(null);
(statearr_36405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_36405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__))
);

return c__16980__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__){
return (function (state_36419){
var state_val_36420 = (state_36419[(1)]);
if((state_val_36420 === (1))){
var state_36419__$1 = state_36419;
var statearr_36421_36447 = state_36419__$1;
(statearr_36421_36447[(2)] = null);

(statearr_36421_36447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (2))){
var state_36419__$1 = state_36419;
var statearr_36422_36448 = state_36419__$1;
(statearr_36422_36448[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (3))){
var inst_36417 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36419__$1,inst_36417);
} else {
if((state_val_36420 === (4))){
var inst_36408 = func.call(null,param);
var inst_36409 = cljs.core.async.timeout.call(null,time_out);
var state_36419__$1 = (function (){var statearr_36424 = state_36419;
(statearr_36424[(7)] = inst_36408);

return statearr_36424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36419__$1,(7),inst_36409);
} else {
if((state_val_36420 === (5))){
var state_36419__$1 = state_36419;
var statearr_36425_36449 = state_36419__$1;
(statearr_36425_36449[(2)] = null);

(statearr_36425_36449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (6))){
var inst_36415 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
var statearr_36426_36450 = state_36419__$1;
(statearr_36426_36450[(2)] = inst_36415);

(statearr_36426_36450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (7))){
var inst_36411 = (state_36419[(2)]);
var state_36419__$1 = (function (){var statearr_36427 = state_36419;
(statearr_36427[(8)] = inst_36411);

return statearr_36427;
})();
var statearr_36428_36451 = state_36419__$1;
(statearr_36428_36451[(2)] = null);

(statearr_36428_36451[(1)] = (2));


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
});})(c__16980__auto__))
;
return ((function (switch__16868__auto__,c__16980__auto__){
return (function() {
var csasync$proc$state_machine__16869__auto__ = null;
var csasync$proc$state_machine__16869__auto____0 = (function (){
var statearr_36432 = [null,null,null,null,null,null,null,null,null];
(statearr_36432[(0)] = csasync$proc$state_machine__16869__auto__);

(statearr_36432[(1)] = (1));

return statearr_36432;
});
var csasync$proc$state_machine__16869__auto____1 = (function (state_36419){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_36419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e36433){if((e36433 instanceof Object)){
var ex__16872__auto__ = e36433;
var statearr_36434_36452 = state_36419;
(statearr_36434_36452[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36453 = state_36419;
state_36419 = G__36453;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
csasync$proc$state_machine__16869__auto__ = function(state_36419){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__16869__auto____0.call(this);
case 1:
return csasync$proc$state_machine__16869__auto____1.call(this,state_36419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__16869__auto____0;
csasync$proc$state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__16869__auto____1;
return csasync$proc$state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__))
})();
var state__16982__auto__ = (function (){var statearr_36435 = f__16981__auto__.call(null);
(statearr_36435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_36435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__))
);

return c__16980__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__16980__auto___36538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto___36538){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto___36538){
return (function (state_36516){
var state_val_36517 = (state_36516[(1)]);
if((state_val_36517 === (7))){
var inst_36505 = cljs.core.async.timeout.call(null,time_out);
var state_36516__$1 = state_36516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36516__$1,(10),inst_36505);
} else {
if((state_val_36517 === (1))){
var state_36516__$1 = state_36516;
var statearr_36518_36539 = state_36516__$1;
(statearr_36518_36539[(2)] = null);

(statearr_36518_36539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (4))){
var inst_36500 = proc_fn.call(null);
var state_36516__$1 = state_36516;
var statearr_36519_36540 = state_36516__$1;
(statearr_36519_36540[(2)] = inst_36500);

(statearr_36519_36540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (6))){
var inst_36503 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
if(cljs.core.truth_(inst_36503)){
var statearr_36520_36541 = state_36516__$1;
(statearr_36520_36541[(1)] = (7));

} else {
var statearr_36521_36542 = state_36516__$1;
(statearr_36521_36542[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (3))){
var inst_36513 = (state_36516[(2)]);
var inst_36514 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_36516__$1 = (function (){var statearr_36522 = state_36516;
(statearr_36522[(7)] = inst_36513);

return statearr_36522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36516__$1,inst_36514);
} else {
if((state_val_36517 === (2))){
var inst_36498 = (state_36516[(8)]);
var inst_36497 = cljs.core.deref.call(null,status);
var inst_36498__$1 = cljs.core._EQ_.call(null,inst_36497,"RUN");
var state_36516__$1 = (function (){var statearr_36523 = state_36516;
(statearr_36523[(8)] = inst_36498__$1);

return statearr_36523;
})();
if(inst_36498__$1){
var statearr_36524_36543 = state_36516__$1;
(statearr_36524_36543[(1)] = (4));

} else {
var statearr_36525_36544 = state_36516__$1;
(statearr_36525_36544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (9))){
var inst_36511 = (state_36516[(2)]);
var state_36516__$1 = state_36516;
var statearr_36526_36545 = state_36516__$1;
(statearr_36526_36545[(2)] = inst_36511);

(statearr_36526_36545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (5))){
var inst_36498 = (state_36516[(8)]);
var state_36516__$1 = state_36516;
var statearr_36527_36546 = state_36516__$1;
(statearr_36527_36546[(2)] = inst_36498);

(statearr_36527_36546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (10))){
var inst_36507 = (state_36516[(2)]);
var state_36516__$1 = (function (){var statearr_36528 = state_36516;
(statearr_36528[(9)] = inst_36507);

return statearr_36528;
})();
var statearr_36529_36547 = state_36516__$1;
(statearr_36529_36547[(2)] = null);

(statearr_36529_36547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36517 === (8))){
var state_36516__$1 = state_36516;
var statearr_36530_36548 = state_36516__$1;
(statearr_36530_36548[(2)] = null);

(statearr_36530_36548[(1)] = (9));


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
});})(c__16980__auto___36538))
;
return ((function (switch__16868__auto__,c__16980__auto___36538){
return (function() {
var csasync$proc$start_process_$_state_machine__16869__auto__ = null;
var csasync$proc$start_process_$_state_machine__16869__auto____0 = (function (){
var statearr_36534 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36534[(0)] = csasync$proc$start_process_$_state_machine__16869__auto__);

(statearr_36534[(1)] = (1));

return statearr_36534;
});
var csasync$proc$start_process_$_state_machine__16869__auto____1 = (function (state_36516){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_36516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e36535){if((e36535 instanceof Object)){
var ex__16872__auto__ = e36535;
var statearr_36536_36549 = state_36516;
(statearr_36536_36549[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36550 = state_36516;
state_36516 = G__36550;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__16869__auto__ = function(state_36516){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__16869__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__16869__auto____1.call(this,state_36516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__16869__auto____0;
csasync$proc$start_process_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__16869__auto____1;
return csasync$proc$start_process_$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto___36538))
})();
var state__16982__auto__ = (function (){var statearr_36537 = f__16981__auto__.call(null);
(statearr_36537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto___36538);

return statearr_36537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto___36538))
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
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__){
return (function (state_36571){
var state_val_36572 = (state_36571[(1)]);
if((state_val_36572 === (1))){
var inst_36566 = cljs.core.async.timeout.call(null,time);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(2),inst_36566);
} else {
if((state_val_36572 === (2))){
var inst_36568 = (state_36571[(2)]);
var inst_36569 = func.call(null);
var state_36571__$1 = (function (){var statearr_36573 = state_36571;
(statearr_36573[(7)] = inst_36568);

return statearr_36573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36571__$1,inst_36569);
} else {
return null;
}
}
});})(c__16980__auto__))
;
return ((function (switch__16868__auto__,c__16980__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__16869__auto__ = null;
var csasync$proc$delayer_$_state_machine__16869__auto____0 = (function (){
var statearr_36577 = [null,null,null,null,null,null,null,null];
(statearr_36577[(0)] = csasync$proc$delayer_$_state_machine__16869__auto__);

(statearr_36577[(1)] = (1));

return statearr_36577;
});
var csasync$proc$delayer_$_state_machine__16869__auto____1 = (function (state_36571){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_36571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e36578){if((e36578 instanceof Object)){
var ex__16872__auto__ = e36578;
var statearr_36579_36581 = state_36571;
(statearr_36579_36581[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36582 = state_36571;
state_36571 = G__36582;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__16869__auto__ = function(state_36571){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__16869__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__16869__auto____1.call(this,state_36571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__16869__auto____0;
csasync$proc$delayer_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__16869__auto____1;
return csasync$proc$delayer_$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__))
})();
var state__16982__auto__ = (function (){var statearr_36580 = f__16981__auto__.call(null);
(statearr_36580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_36580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__))
);

return c__16980__auto__;
});

//# sourceMappingURL=proc.js.map