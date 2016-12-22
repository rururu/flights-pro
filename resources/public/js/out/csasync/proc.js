// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args19358 = [];
var len__10090__auto___19421 = arguments.length;
var i__10091__auto___19422 = (0);
while(true){
if((i__10091__auto___19422 < len__10090__auto___19421)){
args19358.push((arguments[i__10091__auto___19422]));

var G__19423 = (i__10091__auto___19422 + (1));
i__10091__auto___19422 = G__19423;
continue;
} else {
}
break;
}

var G__19360 = args19358.length;
switch (G__19360) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19358.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto__){
return (function (){
var f__11411__auto__ = (function (){var switch__11389__auto__ = ((function (c__11410__auto__){
return (function (state_19374){
var state_val_19375 = (state_19374[(1)]);
if((state_val_19375 === (1))){
var state_19374__$1 = state_19374;
var statearr_19376_19425 = state_19374__$1;
(statearr_19376_19425[(2)] = null);

(statearr_19376_19425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19375 === (2))){
var state_19374__$1 = state_19374;
var statearr_19377_19426 = state_19374__$1;
(statearr_19377_19426[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19375 === (3))){
var inst_19372 = (state_19374[(2)]);
var state_19374__$1 = state_19374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19374__$1,inst_19372);
} else {
if((state_val_19375 === (4))){
var inst_19363 = func.call(null);
var inst_19364 = cljs.core.async.timeout.call(null,time_out);
var state_19374__$1 = (function (){var statearr_19379 = state_19374;
(statearr_19379[(7)] = inst_19363);

return statearr_19379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19374__$1,(7),inst_19364);
} else {
if((state_val_19375 === (5))){
var state_19374__$1 = state_19374;
var statearr_19380_19427 = state_19374__$1;
(statearr_19380_19427[(2)] = null);

(statearr_19380_19427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19375 === (6))){
var inst_19370 = (state_19374[(2)]);
var state_19374__$1 = state_19374;
var statearr_19381_19428 = state_19374__$1;
(statearr_19381_19428[(2)] = inst_19370);

(statearr_19381_19428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19375 === (7))){
var inst_19366 = (state_19374[(2)]);
var state_19374__$1 = (function (){var statearr_19382 = state_19374;
(statearr_19382[(8)] = inst_19366);

return statearr_19382;
})();
var statearr_19383_19429 = state_19374__$1;
(statearr_19383_19429[(2)] = null);

(statearr_19383_19429[(1)] = (2));


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
});})(c__11410__auto__))
;
return ((function (switch__11389__auto__,c__11410__auto__){
return (function() {
var csasync$proc$state_machine__11390__auto__ = null;
var csasync$proc$state_machine__11390__auto____0 = (function (){
var statearr_19387 = [null,null,null,null,null,null,null,null,null];
(statearr_19387[(0)] = csasync$proc$state_machine__11390__auto__);

(statearr_19387[(1)] = (1));

return statearr_19387;
});
var csasync$proc$state_machine__11390__auto____1 = (function (state_19374){
while(true){
var ret_value__11391__auto__ = (function (){try{while(true){
var result__11392__auto__ = switch__11389__auto__.call(null,state_19374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11392__auto__;
}
break;
}
}catch (e19388){if((e19388 instanceof Object)){
var ex__11393__auto__ = e19388;
var statearr_19389_19430 = state_19374;
(statearr_19389_19430[(5)] = ex__11393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19431 = state_19374;
state_19374 = G__19431;
continue;
} else {
return ret_value__11391__auto__;
}
break;
}
});
csasync$proc$state_machine__11390__auto__ = function(state_19374){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11390__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11390__auto____1.call(this,state_19374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11390__auto____0;
csasync$proc$state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11390__auto____1;
return csasync$proc$state_machine__11390__auto__;
})()
;})(switch__11389__auto__,c__11410__auto__))
})();
var state__11412__auto__ = (function (){var statearr_19390 = f__11411__auto__.call(null);
(statearr_19390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto__);

return statearr_19390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto__))
);

return c__11410__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto__){
return (function (){
var f__11411__auto__ = (function (){var switch__11389__auto__ = ((function (c__11410__auto__){
return (function (state_19404){
var state_val_19405 = (state_19404[(1)]);
if((state_val_19405 === (1))){
var state_19404__$1 = state_19404;
var statearr_19406_19432 = state_19404__$1;
(statearr_19406_19432[(2)] = null);

(statearr_19406_19432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19405 === (2))){
var state_19404__$1 = state_19404;
var statearr_19407_19433 = state_19404__$1;
(statearr_19407_19433[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19405 === (3))){
var inst_19402 = (state_19404[(2)]);
var state_19404__$1 = state_19404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19404__$1,inst_19402);
} else {
if((state_val_19405 === (4))){
var inst_19393 = func.call(null,param);
var inst_19394 = cljs.core.async.timeout.call(null,time_out);
var state_19404__$1 = (function (){var statearr_19409 = state_19404;
(statearr_19409[(7)] = inst_19393);

return statearr_19409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19404__$1,(7),inst_19394);
} else {
if((state_val_19405 === (5))){
var state_19404__$1 = state_19404;
var statearr_19410_19434 = state_19404__$1;
(statearr_19410_19434[(2)] = null);

(statearr_19410_19434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19405 === (6))){
var inst_19400 = (state_19404[(2)]);
var state_19404__$1 = state_19404;
var statearr_19411_19435 = state_19404__$1;
(statearr_19411_19435[(2)] = inst_19400);

(statearr_19411_19435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19405 === (7))){
var inst_19396 = (state_19404[(2)]);
var state_19404__$1 = (function (){var statearr_19412 = state_19404;
(statearr_19412[(8)] = inst_19396);

return statearr_19412;
})();
var statearr_19413_19436 = state_19404__$1;
(statearr_19413_19436[(2)] = null);

(statearr_19413_19436[(1)] = (2));


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
});})(c__11410__auto__))
;
return ((function (switch__11389__auto__,c__11410__auto__){
return (function() {
var csasync$proc$state_machine__11390__auto__ = null;
var csasync$proc$state_machine__11390__auto____0 = (function (){
var statearr_19417 = [null,null,null,null,null,null,null,null,null];
(statearr_19417[(0)] = csasync$proc$state_machine__11390__auto__);

(statearr_19417[(1)] = (1));

return statearr_19417;
});
var csasync$proc$state_machine__11390__auto____1 = (function (state_19404){
while(true){
var ret_value__11391__auto__ = (function (){try{while(true){
var result__11392__auto__ = switch__11389__auto__.call(null,state_19404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11392__auto__;
}
break;
}
}catch (e19418){if((e19418 instanceof Object)){
var ex__11393__auto__ = e19418;
var statearr_19419_19437 = state_19404;
(statearr_19419_19437[(5)] = ex__11393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19438 = state_19404;
state_19404 = G__19438;
continue;
} else {
return ret_value__11391__auto__;
}
break;
}
});
csasync$proc$state_machine__11390__auto__ = function(state_19404){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11390__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11390__auto____1.call(this,state_19404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11390__auto____0;
csasync$proc$state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11390__auto____1;
return csasync$proc$state_machine__11390__auto__;
})()
;})(switch__11389__auto__,c__11410__auto__))
})();
var state__11412__auto__ = (function (){var statearr_19420 = f__11411__auto__.call(null);
(statearr_19420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto__);

return statearr_19420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto__))
);

return c__11410__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11410__auto___19523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto___19523){
return (function (){
var f__11411__auto__ = (function (){var switch__11389__auto__ = ((function (c__11410__auto___19523){
return (function (state_19501){
var state_val_19502 = (state_19501[(1)]);
if((state_val_19502 === (7))){
var inst_19490 = cljs.core.async.timeout.call(null,time_out);
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19501__$1,(10),inst_19490);
} else {
if((state_val_19502 === (1))){
var state_19501__$1 = state_19501;
var statearr_19503_19524 = state_19501__$1;
(statearr_19503_19524[(2)] = null);

(statearr_19503_19524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (4))){
var inst_19485 = proc_fn.call(null);
var state_19501__$1 = state_19501;
var statearr_19504_19525 = state_19501__$1;
(statearr_19504_19525[(2)] = inst_19485);

(statearr_19504_19525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (6))){
var inst_19488 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
if(cljs.core.truth_(inst_19488)){
var statearr_19505_19526 = state_19501__$1;
(statearr_19505_19526[(1)] = (7));

} else {
var statearr_19506_19527 = state_19501__$1;
(statearr_19506_19527[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (3))){
var inst_19498 = (state_19501[(2)]);
var inst_19499 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_19501__$1 = (function (){var statearr_19507 = state_19501;
(statearr_19507[(7)] = inst_19498);

return statearr_19507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19501__$1,inst_19499);
} else {
if((state_val_19502 === (2))){
var inst_19483 = (state_19501[(8)]);
var inst_19482 = cljs.core.deref.call(null,status);
var inst_19483__$1 = cljs.core._EQ_.call(null,inst_19482,"RUN");
var state_19501__$1 = (function (){var statearr_19508 = state_19501;
(statearr_19508[(8)] = inst_19483__$1);

return statearr_19508;
})();
if(inst_19483__$1){
var statearr_19509_19528 = state_19501__$1;
(statearr_19509_19528[(1)] = (4));

} else {
var statearr_19510_19529 = state_19501__$1;
(statearr_19510_19529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (9))){
var inst_19496 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
var statearr_19511_19530 = state_19501__$1;
(statearr_19511_19530[(2)] = inst_19496);

(statearr_19511_19530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (5))){
var inst_19483 = (state_19501[(8)]);
var state_19501__$1 = state_19501;
var statearr_19512_19531 = state_19501__$1;
(statearr_19512_19531[(2)] = inst_19483);

(statearr_19512_19531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (10))){
var inst_19492 = (state_19501[(2)]);
var state_19501__$1 = (function (){var statearr_19513 = state_19501;
(statearr_19513[(9)] = inst_19492);

return statearr_19513;
})();
var statearr_19514_19532 = state_19501__$1;
(statearr_19514_19532[(2)] = null);

(statearr_19514_19532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (8))){
var state_19501__$1 = state_19501;
var statearr_19515_19533 = state_19501__$1;
(statearr_19515_19533[(2)] = null);

(statearr_19515_19533[(1)] = (9));


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
});})(c__11410__auto___19523))
;
return ((function (switch__11389__auto__,c__11410__auto___19523){
return (function() {
var csasync$proc$start_process_$_state_machine__11390__auto__ = null;
var csasync$proc$start_process_$_state_machine__11390__auto____0 = (function (){
var statearr_19519 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19519[(0)] = csasync$proc$start_process_$_state_machine__11390__auto__);

(statearr_19519[(1)] = (1));

return statearr_19519;
});
var csasync$proc$start_process_$_state_machine__11390__auto____1 = (function (state_19501){
while(true){
var ret_value__11391__auto__ = (function (){try{while(true){
var result__11392__auto__ = switch__11389__auto__.call(null,state_19501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11392__auto__;
}
break;
}
}catch (e19520){if((e19520 instanceof Object)){
var ex__11393__auto__ = e19520;
var statearr_19521_19534 = state_19501;
(statearr_19521_19534[(5)] = ex__11393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19535 = state_19501;
state_19501 = G__19535;
continue;
} else {
return ret_value__11391__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11390__auto__ = function(state_19501){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11390__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11390__auto____1.call(this,state_19501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11390__auto____0;
csasync$proc$start_process_$_state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11390__auto____1;
return csasync$proc$start_process_$_state_machine__11390__auto__;
})()
;})(switch__11389__auto__,c__11410__auto___19523))
})();
var state__11412__auto__ = (function (){var statearr_19522 = f__11411__auto__.call(null);
(statearr_19522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto___19523);

return statearr_19522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto___19523))
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
var c__11410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto__){
return (function (){
var f__11411__auto__ = (function (){var switch__11389__auto__ = ((function (c__11410__auto__){
return (function (state_19556){
var state_val_19557 = (state_19556[(1)]);
if((state_val_19557 === (1))){
var inst_19551 = cljs.core.async.timeout.call(null,time);
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19556__$1,(2),inst_19551);
} else {
if((state_val_19557 === (2))){
var inst_19553 = (state_19556[(2)]);
var inst_19554 = func.call(null);
var state_19556__$1 = (function (){var statearr_19558 = state_19556;
(statearr_19558[(7)] = inst_19553);

return statearr_19558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19556__$1,inst_19554);
} else {
return null;
}
}
});})(c__11410__auto__))
;
return ((function (switch__11389__auto__,c__11410__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11390__auto__ = null;
var csasync$proc$delayer_$_state_machine__11390__auto____0 = (function (){
var statearr_19562 = [null,null,null,null,null,null,null,null];
(statearr_19562[(0)] = csasync$proc$delayer_$_state_machine__11390__auto__);

(statearr_19562[(1)] = (1));

return statearr_19562;
});
var csasync$proc$delayer_$_state_machine__11390__auto____1 = (function (state_19556){
while(true){
var ret_value__11391__auto__ = (function (){try{while(true){
var result__11392__auto__ = switch__11389__auto__.call(null,state_19556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11392__auto__;
}
break;
}
}catch (e19563){if((e19563 instanceof Object)){
var ex__11393__auto__ = e19563;
var statearr_19564_19566 = state_19556;
(statearr_19564_19566[(5)] = ex__11393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19567 = state_19556;
state_19556 = G__19567;
continue;
} else {
return ret_value__11391__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11390__auto__ = function(state_19556){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11390__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11390__auto____1.call(this,state_19556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11390__auto____0;
csasync$proc$delayer_$_state_machine__11390__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11390__auto____1;
return csasync$proc$delayer_$_state_machine__11390__auto__;
})()
;})(switch__11389__auto__,c__11410__auto__))
})();
var state__11412__auto__ = (function (){var statearr_19565 = f__11411__auto__.call(null);
(statearr_19565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto__);

return statearr_19565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto__))
);

return c__11410__auto__;
});

//# sourceMappingURL=proc.js.map