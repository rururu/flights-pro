// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args49323 = [];
var len__21188__auto___49386 = arguments.length;
var i__21189__auto___49387 = (0);
while(true){
if((i__21189__auto___49387 < len__21188__auto___49386)){
args49323.push((arguments[i__21189__auto___49387]));

var G__49388 = (i__21189__auto___49387 + (1));
i__21189__auto___49387 = G__49388;
continue;
} else {
}
break;
}

var G__49325 = args49323.length;
switch (G__49325) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49323.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22264__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22264__auto__){
return (function (){
var f__22265__auto__ = (function (){var switch__22243__auto__ = ((function (c__22264__auto__){
return (function (state_49339){
var state_val_49340 = (state_49339[(1)]);
if((state_val_49340 === (1))){
var state_49339__$1 = state_49339;
var statearr_49341_49390 = state_49339__$1;
(statearr_49341_49390[(2)] = null);

(statearr_49341_49390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (2))){
var state_49339__$1 = state_49339;
var statearr_49342_49391 = state_49339__$1;
(statearr_49342_49391[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (3))){
var inst_49337 = (state_49339[(2)]);
var state_49339__$1 = state_49339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49339__$1,inst_49337);
} else {
if((state_val_49340 === (4))){
var inst_49328 = func.call(null);
var inst_49329 = cljs.core.async.timeout.call(null,time_out);
var state_49339__$1 = (function (){var statearr_49344 = state_49339;
(statearr_49344[(7)] = inst_49328);

return statearr_49344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49339__$1,(7),inst_49329);
} else {
if((state_val_49340 === (5))){
var state_49339__$1 = state_49339;
var statearr_49345_49392 = state_49339__$1;
(statearr_49345_49392[(2)] = null);

(statearr_49345_49392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (6))){
var inst_49335 = (state_49339[(2)]);
var state_49339__$1 = state_49339;
var statearr_49346_49393 = state_49339__$1;
(statearr_49346_49393[(2)] = inst_49335);

(statearr_49346_49393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49340 === (7))){
var inst_49331 = (state_49339[(2)]);
var state_49339__$1 = (function (){var statearr_49347 = state_49339;
(statearr_49347[(8)] = inst_49331);

return statearr_49347;
})();
var statearr_49348_49394 = state_49339__$1;
(statearr_49348_49394[(2)] = null);

(statearr_49348_49394[(1)] = (2));


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
});})(c__22264__auto__))
;
return ((function (switch__22243__auto__,c__22264__auto__){
return (function() {
var csasync$proc$state_machine__22244__auto__ = null;
var csasync$proc$state_machine__22244__auto____0 = (function (){
var statearr_49352 = [null,null,null,null,null,null,null,null,null];
(statearr_49352[(0)] = csasync$proc$state_machine__22244__auto__);

(statearr_49352[(1)] = (1));

return statearr_49352;
});
var csasync$proc$state_machine__22244__auto____1 = (function (state_49339){
while(true){
var ret_value__22245__auto__ = (function (){try{while(true){
var result__22246__auto__ = switch__22243__auto__.call(null,state_49339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22246__auto__;
}
break;
}
}catch (e49353){if((e49353 instanceof Object)){
var ex__22247__auto__ = e49353;
var statearr_49354_49395 = state_49339;
(statearr_49354_49395[(5)] = ex__22247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49396 = state_49339;
state_49339 = G__49396;
continue;
} else {
return ret_value__22245__auto__;
}
break;
}
});
csasync$proc$state_machine__22244__auto__ = function(state_49339){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22244__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22244__auto____1.call(this,state_49339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22244__auto____0;
csasync$proc$state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22244__auto____1;
return csasync$proc$state_machine__22244__auto__;
})()
;})(switch__22243__auto__,c__22264__auto__))
})();
var state__22266__auto__ = (function (){var statearr_49355 = f__22265__auto__.call(null);
(statearr_49355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22264__auto__);

return statearr_49355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22266__auto__);
});})(c__22264__auto__))
);

return c__22264__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22264__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22264__auto__){
return (function (){
var f__22265__auto__ = (function (){var switch__22243__auto__ = ((function (c__22264__auto__){
return (function (state_49369){
var state_val_49370 = (state_49369[(1)]);
if((state_val_49370 === (1))){
var state_49369__$1 = state_49369;
var statearr_49371_49397 = state_49369__$1;
(statearr_49371_49397[(2)] = null);

(statearr_49371_49397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49370 === (2))){
var state_49369__$1 = state_49369;
var statearr_49372_49398 = state_49369__$1;
(statearr_49372_49398[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49370 === (3))){
var inst_49367 = (state_49369[(2)]);
var state_49369__$1 = state_49369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49369__$1,inst_49367);
} else {
if((state_val_49370 === (4))){
var inst_49358 = func.call(null,param);
var inst_49359 = cljs.core.async.timeout.call(null,time_out);
var state_49369__$1 = (function (){var statearr_49374 = state_49369;
(statearr_49374[(7)] = inst_49358);

return statearr_49374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49369__$1,(7),inst_49359);
} else {
if((state_val_49370 === (5))){
var state_49369__$1 = state_49369;
var statearr_49375_49399 = state_49369__$1;
(statearr_49375_49399[(2)] = null);

(statearr_49375_49399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49370 === (6))){
var inst_49365 = (state_49369[(2)]);
var state_49369__$1 = state_49369;
var statearr_49376_49400 = state_49369__$1;
(statearr_49376_49400[(2)] = inst_49365);

(statearr_49376_49400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49370 === (7))){
var inst_49361 = (state_49369[(2)]);
var state_49369__$1 = (function (){var statearr_49377 = state_49369;
(statearr_49377[(8)] = inst_49361);

return statearr_49377;
})();
var statearr_49378_49401 = state_49369__$1;
(statearr_49378_49401[(2)] = null);

(statearr_49378_49401[(1)] = (2));


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
});})(c__22264__auto__))
;
return ((function (switch__22243__auto__,c__22264__auto__){
return (function() {
var csasync$proc$state_machine__22244__auto__ = null;
var csasync$proc$state_machine__22244__auto____0 = (function (){
var statearr_49382 = [null,null,null,null,null,null,null,null,null];
(statearr_49382[(0)] = csasync$proc$state_machine__22244__auto__);

(statearr_49382[(1)] = (1));

return statearr_49382;
});
var csasync$proc$state_machine__22244__auto____1 = (function (state_49369){
while(true){
var ret_value__22245__auto__ = (function (){try{while(true){
var result__22246__auto__ = switch__22243__auto__.call(null,state_49369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22246__auto__;
}
break;
}
}catch (e49383){if((e49383 instanceof Object)){
var ex__22247__auto__ = e49383;
var statearr_49384_49402 = state_49369;
(statearr_49384_49402[(5)] = ex__22247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49403 = state_49369;
state_49369 = G__49403;
continue;
} else {
return ret_value__22245__auto__;
}
break;
}
});
csasync$proc$state_machine__22244__auto__ = function(state_49369){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22244__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22244__auto____1.call(this,state_49369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22244__auto____0;
csasync$proc$state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22244__auto____1;
return csasync$proc$state_machine__22244__auto__;
})()
;})(switch__22243__auto__,c__22264__auto__))
})();
var state__22266__auto__ = (function (){var statearr_49385 = f__22265__auto__.call(null);
(statearr_49385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22264__auto__);

return statearr_49385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22266__auto__);
});})(c__22264__auto__))
);

return c__22264__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22264__auto___49488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22264__auto___49488){
return (function (){
var f__22265__auto__ = (function (){var switch__22243__auto__ = ((function (c__22264__auto___49488){
return (function (state_49466){
var state_val_49467 = (state_49466[(1)]);
if((state_val_49467 === (7))){
var inst_49455 = cljs.core.async.timeout.call(null,time_out);
var state_49466__$1 = state_49466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49466__$1,(10),inst_49455);
} else {
if((state_val_49467 === (1))){
var state_49466__$1 = state_49466;
var statearr_49468_49489 = state_49466__$1;
(statearr_49468_49489[(2)] = null);

(statearr_49468_49489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49467 === (4))){
var inst_49450 = proc_fn.call(null);
var state_49466__$1 = state_49466;
var statearr_49469_49490 = state_49466__$1;
(statearr_49469_49490[(2)] = inst_49450);

(statearr_49469_49490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49467 === (6))){
var inst_49453 = (state_49466[(2)]);
var state_49466__$1 = state_49466;
if(cljs.core.truth_(inst_49453)){
var statearr_49470_49491 = state_49466__$1;
(statearr_49470_49491[(1)] = (7));

} else {
var statearr_49471_49492 = state_49466__$1;
(statearr_49471_49492[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49467 === (3))){
var inst_49463 = (state_49466[(2)]);
var inst_49464 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_49466__$1 = (function (){var statearr_49472 = state_49466;
(statearr_49472[(7)] = inst_49463);

return statearr_49472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49466__$1,inst_49464);
} else {
if((state_val_49467 === (2))){
var inst_49448 = (state_49466[(8)]);
var inst_49447 = cljs.core.deref.call(null,status);
var inst_49448__$1 = cljs.core._EQ_.call(null,inst_49447,"RUN");
var state_49466__$1 = (function (){var statearr_49473 = state_49466;
(statearr_49473[(8)] = inst_49448__$1);

return statearr_49473;
})();
if(inst_49448__$1){
var statearr_49474_49493 = state_49466__$1;
(statearr_49474_49493[(1)] = (4));

} else {
var statearr_49475_49494 = state_49466__$1;
(statearr_49475_49494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49467 === (9))){
var inst_49461 = (state_49466[(2)]);
var state_49466__$1 = state_49466;
var statearr_49476_49495 = state_49466__$1;
(statearr_49476_49495[(2)] = inst_49461);

(statearr_49476_49495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49467 === (5))){
var inst_49448 = (state_49466[(8)]);
var state_49466__$1 = state_49466;
var statearr_49477_49496 = state_49466__$1;
(statearr_49477_49496[(2)] = inst_49448);

(statearr_49477_49496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49467 === (10))){
var inst_49457 = (state_49466[(2)]);
var state_49466__$1 = (function (){var statearr_49478 = state_49466;
(statearr_49478[(9)] = inst_49457);

return statearr_49478;
})();
var statearr_49479_49497 = state_49466__$1;
(statearr_49479_49497[(2)] = null);

(statearr_49479_49497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49467 === (8))){
var state_49466__$1 = state_49466;
var statearr_49480_49498 = state_49466__$1;
(statearr_49480_49498[(2)] = null);

(statearr_49480_49498[(1)] = (9));


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
});})(c__22264__auto___49488))
;
return ((function (switch__22243__auto__,c__22264__auto___49488){
return (function() {
var csasync$proc$start_process_$_state_machine__22244__auto__ = null;
var csasync$proc$start_process_$_state_machine__22244__auto____0 = (function (){
var statearr_49484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49484[(0)] = csasync$proc$start_process_$_state_machine__22244__auto__);

(statearr_49484[(1)] = (1));

return statearr_49484;
});
var csasync$proc$start_process_$_state_machine__22244__auto____1 = (function (state_49466){
while(true){
var ret_value__22245__auto__ = (function (){try{while(true){
var result__22246__auto__ = switch__22243__auto__.call(null,state_49466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22246__auto__;
}
break;
}
}catch (e49485){if((e49485 instanceof Object)){
var ex__22247__auto__ = e49485;
var statearr_49486_49499 = state_49466;
(statearr_49486_49499[(5)] = ex__22247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49500 = state_49466;
state_49466 = G__49500;
continue;
} else {
return ret_value__22245__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22244__auto__ = function(state_49466){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22244__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22244__auto____1.call(this,state_49466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22244__auto____0;
csasync$proc$start_process_$_state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22244__auto____1;
return csasync$proc$start_process_$_state_machine__22244__auto__;
})()
;})(switch__22243__auto__,c__22264__auto___49488))
})();
var state__22266__auto__ = (function (){var statearr_49487 = f__22265__auto__.call(null);
(statearr_49487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22264__auto___49488);

return statearr_49487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22266__auto__);
});})(c__22264__auto___49488))
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
var c__22264__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22264__auto__){
return (function (){
var f__22265__auto__ = (function (){var switch__22243__auto__ = ((function (c__22264__auto__){
return (function (state_49521){
var state_val_49522 = (state_49521[(1)]);
if((state_val_49522 === (1))){
var inst_49516 = cljs.core.async.timeout.call(null,time);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49521__$1,(2),inst_49516);
} else {
if((state_val_49522 === (2))){
var inst_49518 = (state_49521[(2)]);
var inst_49519 = func.call(null);
var state_49521__$1 = (function (){var statearr_49523 = state_49521;
(statearr_49523[(7)] = inst_49518);

return statearr_49523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49521__$1,inst_49519);
} else {
return null;
}
}
});})(c__22264__auto__))
;
return ((function (switch__22243__auto__,c__22264__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22244__auto__ = null;
var csasync$proc$delayer_$_state_machine__22244__auto____0 = (function (){
var statearr_49527 = [null,null,null,null,null,null,null,null];
(statearr_49527[(0)] = csasync$proc$delayer_$_state_machine__22244__auto__);

(statearr_49527[(1)] = (1));

return statearr_49527;
});
var csasync$proc$delayer_$_state_machine__22244__auto____1 = (function (state_49521){
while(true){
var ret_value__22245__auto__ = (function (){try{while(true){
var result__22246__auto__ = switch__22243__auto__.call(null,state_49521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22246__auto__;
}
break;
}
}catch (e49528){if((e49528 instanceof Object)){
var ex__22247__auto__ = e49528;
var statearr_49529_49531 = state_49521;
(statearr_49529_49531[(5)] = ex__22247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49532 = state_49521;
state_49521 = G__49532;
continue;
} else {
return ret_value__22245__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22244__auto__ = function(state_49521){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22244__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22244__auto____1.call(this,state_49521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22244__auto____0;
csasync$proc$delayer_$_state_machine__22244__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22244__auto____1;
return csasync$proc$delayer_$_state_machine__22244__auto__;
})()
;})(switch__22243__auto__,c__22264__auto__))
})();
var state__22266__auto__ = (function (){var statearr_49530 = f__22265__auto__.call(null);
(statearr_49530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22264__auto__);

return statearr_49530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22266__auto__);
});})(c__22264__auto__))
);

return c__22264__auto__;
});

//# sourceMappingURL=proc.js.map