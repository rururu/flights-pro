// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args31366 = [];
var len__20538__auto___31429 = arguments.length;
var i__20539__auto___31430 = (0);
while(true){
if((i__20539__auto___31430 < len__20538__auto___31429)){
args31366.push((arguments[i__20539__auto___31430]));

var G__31431 = (i__20539__auto___31430 + (1));
i__20539__auto___31430 = G__31431;
continue;
} else {
}
break;
}

var G__31368 = args31366.length;
switch (G__31368) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31366.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21600__auto__){
return (function (){
var f__21601__auto__ = (function (){var switch__21579__auto__ = ((function (c__21600__auto__){
return (function (state_31382){
var state_val_31383 = (state_31382[(1)]);
if((state_val_31383 === (1))){
var state_31382__$1 = state_31382;
var statearr_31384_31433 = state_31382__$1;
(statearr_31384_31433[(2)] = null);

(statearr_31384_31433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (2))){
var state_31382__$1 = state_31382;
var statearr_31385_31434 = state_31382__$1;
(statearr_31385_31434[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (3))){
var inst_31380 = (state_31382[(2)]);
var state_31382__$1 = state_31382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31382__$1,inst_31380);
} else {
if((state_val_31383 === (4))){
var inst_31371 = func.call(null);
var inst_31372 = cljs.core.async.timeout.call(null,time_out);
var state_31382__$1 = (function (){var statearr_31387 = state_31382;
(statearr_31387[(7)] = inst_31371);

return statearr_31387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31382__$1,(7),inst_31372);
} else {
if((state_val_31383 === (5))){
var state_31382__$1 = state_31382;
var statearr_31388_31435 = state_31382__$1;
(statearr_31388_31435[(2)] = null);

(statearr_31388_31435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (6))){
var inst_31378 = (state_31382[(2)]);
var state_31382__$1 = state_31382;
var statearr_31389_31436 = state_31382__$1;
(statearr_31389_31436[(2)] = inst_31378);

(statearr_31389_31436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31383 === (7))){
var inst_31374 = (state_31382[(2)]);
var state_31382__$1 = (function (){var statearr_31390 = state_31382;
(statearr_31390[(8)] = inst_31374);

return statearr_31390;
})();
var statearr_31391_31437 = state_31382__$1;
(statearr_31391_31437[(2)] = null);

(statearr_31391_31437[(1)] = (2));


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
});})(c__21600__auto__))
;
return ((function (switch__21579__auto__,c__21600__auto__){
return (function() {
var csasync$proc$state_machine__21580__auto__ = null;
var csasync$proc$state_machine__21580__auto____0 = (function (){
var statearr_31395 = [null,null,null,null,null,null,null,null,null];
(statearr_31395[(0)] = csasync$proc$state_machine__21580__auto__);

(statearr_31395[(1)] = (1));

return statearr_31395;
});
var csasync$proc$state_machine__21580__auto____1 = (function (state_31382){
while(true){
var ret_value__21581__auto__ = (function (){try{while(true){
var result__21582__auto__ = switch__21579__auto__.call(null,state_31382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21582__auto__;
}
break;
}
}catch (e31396){if((e31396 instanceof Object)){
var ex__21583__auto__ = e31396;
var statearr_31397_31438 = state_31382;
(statearr_31397_31438[(5)] = ex__21583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31439 = state_31382;
state_31382 = G__31439;
continue;
} else {
return ret_value__21581__auto__;
}
break;
}
});
csasync$proc$state_machine__21580__auto__ = function(state_31382){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21580__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21580__auto____1.call(this,state_31382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21580__auto____0;
csasync$proc$state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21580__auto____1;
return csasync$proc$state_machine__21580__auto__;
})()
;})(switch__21579__auto__,c__21600__auto__))
})();
var state__21602__auto__ = (function (){var statearr_31398 = f__21601__auto__.call(null);
(statearr_31398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21600__auto__);

return statearr_31398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21602__auto__);
});})(c__21600__auto__))
);

return c__21600__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21600__auto__){
return (function (){
var f__21601__auto__ = (function (){var switch__21579__auto__ = ((function (c__21600__auto__){
return (function (state_31412){
var state_val_31413 = (state_31412[(1)]);
if((state_val_31413 === (1))){
var state_31412__$1 = state_31412;
var statearr_31414_31440 = state_31412__$1;
(statearr_31414_31440[(2)] = null);

(statearr_31414_31440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (2))){
var state_31412__$1 = state_31412;
var statearr_31415_31441 = state_31412__$1;
(statearr_31415_31441[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (3))){
var inst_31410 = (state_31412[(2)]);
var state_31412__$1 = state_31412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31412__$1,inst_31410);
} else {
if((state_val_31413 === (4))){
var inst_31401 = func.call(null,param);
var inst_31402 = cljs.core.async.timeout.call(null,time_out);
var state_31412__$1 = (function (){var statearr_31417 = state_31412;
(statearr_31417[(7)] = inst_31401);

return statearr_31417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31412__$1,(7),inst_31402);
} else {
if((state_val_31413 === (5))){
var state_31412__$1 = state_31412;
var statearr_31418_31442 = state_31412__$1;
(statearr_31418_31442[(2)] = null);

(statearr_31418_31442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (6))){
var inst_31408 = (state_31412[(2)]);
var state_31412__$1 = state_31412;
var statearr_31419_31443 = state_31412__$1;
(statearr_31419_31443[(2)] = inst_31408);

(statearr_31419_31443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (7))){
var inst_31404 = (state_31412[(2)]);
var state_31412__$1 = (function (){var statearr_31420 = state_31412;
(statearr_31420[(8)] = inst_31404);

return statearr_31420;
})();
var statearr_31421_31444 = state_31412__$1;
(statearr_31421_31444[(2)] = null);

(statearr_31421_31444[(1)] = (2));


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
});})(c__21600__auto__))
;
return ((function (switch__21579__auto__,c__21600__auto__){
return (function() {
var csasync$proc$state_machine__21580__auto__ = null;
var csasync$proc$state_machine__21580__auto____0 = (function (){
var statearr_31425 = [null,null,null,null,null,null,null,null,null];
(statearr_31425[(0)] = csasync$proc$state_machine__21580__auto__);

(statearr_31425[(1)] = (1));

return statearr_31425;
});
var csasync$proc$state_machine__21580__auto____1 = (function (state_31412){
while(true){
var ret_value__21581__auto__ = (function (){try{while(true){
var result__21582__auto__ = switch__21579__auto__.call(null,state_31412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21582__auto__;
}
break;
}
}catch (e31426){if((e31426 instanceof Object)){
var ex__21583__auto__ = e31426;
var statearr_31427_31445 = state_31412;
(statearr_31427_31445[(5)] = ex__21583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31446 = state_31412;
state_31412 = G__31446;
continue;
} else {
return ret_value__21581__auto__;
}
break;
}
});
csasync$proc$state_machine__21580__auto__ = function(state_31412){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21580__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21580__auto____1.call(this,state_31412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21580__auto____0;
csasync$proc$state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21580__auto____1;
return csasync$proc$state_machine__21580__auto__;
})()
;})(switch__21579__auto__,c__21600__auto__))
})();
var state__21602__auto__ = (function (){var statearr_31428 = f__21601__auto__.call(null);
(statearr_31428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21600__auto__);

return statearr_31428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21602__auto__);
});})(c__21600__auto__))
);

return c__21600__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21600__auto___31531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21600__auto___31531){
return (function (){
var f__21601__auto__ = (function (){var switch__21579__auto__ = ((function (c__21600__auto___31531){
return (function (state_31509){
var state_val_31510 = (state_31509[(1)]);
if((state_val_31510 === (7))){
var inst_31498 = cljs.core.async.timeout.call(null,time_out);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31509__$1,(10),inst_31498);
} else {
if((state_val_31510 === (1))){
var state_31509__$1 = state_31509;
var statearr_31511_31532 = state_31509__$1;
(statearr_31511_31532[(2)] = null);

(statearr_31511_31532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (4))){
var inst_31493 = proc_fn.call(null);
var state_31509__$1 = state_31509;
var statearr_31512_31533 = state_31509__$1;
(statearr_31512_31533[(2)] = inst_31493);

(statearr_31512_31533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (6))){
var inst_31496 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
if(cljs.core.truth_(inst_31496)){
var statearr_31513_31534 = state_31509__$1;
(statearr_31513_31534[(1)] = (7));

} else {
var statearr_31514_31535 = state_31509__$1;
(statearr_31514_31535[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (3))){
var inst_31506 = (state_31509[(2)]);
var inst_31507 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_31509__$1 = (function (){var statearr_31515 = state_31509;
(statearr_31515[(7)] = inst_31506);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31509__$1,inst_31507);
} else {
if((state_val_31510 === (2))){
var inst_31491 = (state_31509[(8)]);
var inst_31490 = cljs.core.deref.call(null,status);
var inst_31491__$1 = cljs.core._EQ_.call(null,inst_31490,"RUN");
var state_31509__$1 = (function (){var statearr_31516 = state_31509;
(statearr_31516[(8)] = inst_31491__$1);

return statearr_31516;
})();
if(inst_31491__$1){
var statearr_31517_31536 = state_31509__$1;
(statearr_31517_31536[(1)] = (4));

} else {
var statearr_31518_31537 = state_31509__$1;
(statearr_31518_31537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (9))){
var inst_31504 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31519_31538 = state_31509__$1;
(statearr_31519_31538[(2)] = inst_31504);

(statearr_31519_31538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (5))){
var inst_31491 = (state_31509[(8)]);
var state_31509__$1 = state_31509;
var statearr_31520_31539 = state_31509__$1;
(statearr_31520_31539[(2)] = inst_31491);

(statearr_31520_31539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (10))){
var inst_31500 = (state_31509[(2)]);
var state_31509__$1 = (function (){var statearr_31521 = state_31509;
(statearr_31521[(9)] = inst_31500);

return statearr_31521;
})();
var statearr_31522_31540 = state_31509__$1;
(statearr_31522_31540[(2)] = null);

(statearr_31522_31540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (8))){
var state_31509__$1 = state_31509;
var statearr_31523_31541 = state_31509__$1;
(statearr_31523_31541[(2)] = null);

(statearr_31523_31541[(1)] = (9));


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
});})(c__21600__auto___31531))
;
return ((function (switch__21579__auto__,c__21600__auto___31531){
return (function() {
var csasync$proc$start_process_$_state_machine__21580__auto__ = null;
var csasync$proc$start_process_$_state_machine__21580__auto____0 = (function (){
var statearr_31527 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31527[(0)] = csasync$proc$start_process_$_state_machine__21580__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var csasync$proc$start_process_$_state_machine__21580__auto____1 = (function (state_31509){
while(true){
var ret_value__21581__auto__ = (function (){try{while(true){
var result__21582__auto__ = switch__21579__auto__.call(null,state_31509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21582__auto__;
}
break;
}
}catch (e31528){if((e31528 instanceof Object)){
var ex__21583__auto__ = e31528;
var statearr_31529_31542 = state_31509;
(statearr_31529_31542[(5)] = ex__21583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31543 = state_31509;
state_31509 = G__31543;
continue;
} else {
return ret_value__21581__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21580__auto__ = function(state_31509){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21580__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21580__auto____1.call(this,state_31509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21580__auto____0;
csasync$proc$start_process_$_state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21580__auto____1;
return csasync$proc$start_process_$_state_machine__21580__auto__;
})()
;})(switch__21579__auto__,c__21600__auto___31531))
})();
var state__21602__auto__ = (function (){var statearr_31530 = f__21601__auto__.call(null);
(statearr_31530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21600__auto___31531);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21602__auto__);
});})(c__21600__auto___31531))
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
var c__21600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21600__auto__){
return (function (){
var f__21601__auto__ = (function (){var switch__21579__auto__ = ((function (c__21600__auto__){
return (function (state_31564){
var state_val_31565 = (state_31564[(1)]);
if((state_val_31565 === (1))){
var inst_31559 = cljs.core.async.timeout.call(null,time);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31564__$1,(2),inst_31559);
} else {
if((state_val_31565 === (2))){
var inst_31561 = (state_31564[(2)]);
var inst_31562 = func.call(null);
var state_31564__$1 = (function (){var statearr_31566 = state_31564;
(statearr_31566[(7)] = inst_31561);

return statearr_31566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31564__$1,inst_31562);
} else {
return null;
}
}
});})(c__21600__auto__))
;
return ((function (switch__21579__auto__,c__21600__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21580__auto__ = null;
var csasync$proc$delayer_$_state_machine__21580__auto____0 = (function (){
var statearr_31570 = [null,null,null,null,null,null,null,null];
(statearr_31570[(0)] = csasync$proc$delayer_$_state_machine__21580__auto__);

(statearr_31570[(1)] = (1));

return statearr_31570;
});
var csasync$proc$delayer_$_state_machine__21580__auto____1 = (function (state_31564){
while(true){
var ret_value__21581__auto__ = (function (){try{while(true){
var result__21582__auto__ = switch__21579__auto__.call(null,state_31564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21582__auto__;
}
break;
}
}catch (e31571){if((e31571 instanceof Object)){
var ex__21583__auto__ = e31571;
var statearr_31572_31574 = state_31564;
(statearr_31572_31574[(5)] = ex__21583__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31575 = state_31564;
state_31564 = G__31575;
continue;
} else {
return ret_value__21581__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21580__auto__ = function(state_31564){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21580__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21580__auto____1.call(this,state_31564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21580__auto____0;
csasync$proc$delayer_$_state_machine__21580__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21580__auto____1;
return csasync$proc$delayer_$_state_machine__21580__auto__;
})()
;})(switch__21579__auto__,c__21600__auto__))
})();
var state__21602__auto__ = (function (){var statearr_31573 = f__21601__auto__.call(null);
(statearr_31573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21600__auto__);

return statearr_31573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21602__auto__);
});})(c__21600__auto__))
);

return c__21600__auto__;
});

//# sourceMappingURL=proc.js.map