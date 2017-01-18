// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args26381 = [];
var len__25274__auto___26444 = arguments.length;
var i__25275__auto___26445 = (0);
while(true){
if((i__25275__auto___26445 < len__25274__auto___26444)){
args26381.push((arguments[i__25275__auto___26445]));

var G__26446 = (i__25275__auto___26445 + (1));
i__25275__auto___26445 = G__26446;
continue;
} else {
}
break;
}

var G__26383 = args26381.length;
switch (G__26383) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26381.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26315__auto__ = ((function (c__26336__auto__){
return (function (state_26397){
var state_val_26398 = (state_26397[(1)]);
if((state_val_26398 === (1))){
var state_26397__$1 = state_26397;
var statearr_26399_26448 = state_26397__$1;
(statearr_26399_26448[(2)] = null);

(statearr_26399_26448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (2))){
var state_26397__$1 = state_26397;
var statearr_26400_26449 = state_26397__$1;
(statearr_26400_26449[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (3))){
var inst_26395 = (state_26397[(2)]);
var state_26397__$1 = state_26397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26397__$1,inst_26395);
} else {
if((state_val_26398 === (4))){
var inst_26386 = func.call(null);
var inst_26387 = cljs.core.async.timeout.call(null,time_out);
var state_26397__$1 = (function (){var statearr_26402 = state_26397;
(statearr_26402[(7)] = inst_26386);

return statearr_26402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26397__$1,(7),inst_26387);
} else {
if((state_val_26398 === (5))){
var state_26397__$1 = state_26397;
var statearr_26403_26450 = state_26397__$1;
(statearr_26403_26450[(2)] = null);

(statearr_26403_26450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (6))){
var inst_26393 = (state_26397[(2)]);
var state_26397__$1 = state_26397;
var statearr_26404_26451 = state_26397__$1;
(statearr_26404_26451[(2)] = inst_26393);

(statearr_26404_26451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (7))){
var inst_26389 = (state_26397[(2)]);
var state_26397__$1 = (function (){var statearr_26405 = state_26397;
(statearr_26405[(8)] = inst_26389);

return statearr_26405;
})();
var statearr_26406_26452 = state_26397__$1;
(statearr_26406_26452[(2)] = null);

(statearr_26406_26452[(1)] = (2));


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
});})(c__26336__auto__))
;
return ((function (switch__26315__auto__,c__26336__auto__){
return (function() {
var csasync$proc$state_machine__26316__auto__ = null;
var csasync$proc$state_machine__26316__auto____0 = (function (){
var statearr_26410 = [null,null,null,null,null,null,null,null,null];
(statearr_26410[(0)] = csasync$proc$state_machine__26316__auto__);

(statearr_26410[(1)] = (1));

return statearr_26410;
});
var csasync$proc$state_machine__26316__auto____1 = (function (state_26397){
while(true){
var ret_value__26317__auto__ = (function (){try{while(true){
var result__26318__auto__ = switch__26315__auto__.call(null,state_26397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26318__auto__;
}
break;
}
}catch (e26411){if((e26411 instanceof Object)){
var ex__26319__auto__ = e26411;
var statearr_26412_26453 = state_26397;
(statearr_26412_26453[(5)] = ex__26319__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26454 = state_26397;
state_26397 = G__26454;
continue;
} else {
return ret_value__26317__auto__;
}
break;
}
});
csasync$proc$state_machine__26316__auto__ = function(state_26397){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__26316__auto____0.call(this);
case 1:
return csasync$proc$state_machine__26316__auto____1.call(this,state_26397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__26316__auto____0;
csasync$proc$state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__26316__auto____1;
return csasync$proc$state_machine__26316__auto__;
})()
;})(switch__26315__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_26413 = f__26337__auto__.call(null);
(statearr_26413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_26413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26315__auto__ = ((function (c__26336__auto__){
return (function (state_26427){
var state_val_26428 = (state_26427[(1)]);
if((state_val_26428 === (1))){
var state_26427__$1 = state_26427;
var statearr_26429_26455 = state_26427__$1;
(statearr_26429_26455[(2)] = null);

(statearr_26429_26455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (2))){
var state_26427__$1 = state_26427;
var statearr_26430_26456 = state_26427__$1;
(statearr_26430_26456[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (3))){
var inst_26425 = (state_26427[(2)]);
var state_26427__$1 = state_26427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26427__$1,inst_26425);
} else {
if((state_val_26428 === (4))){
var inst_26416 = func.call(null,param);
var inst_26417 = cljs.core.async.timeout.call(null,time_out);
var state_26427__$1 = (function (){var statearr_26432 = state_26427;
(statearr_26432[(7)] = inst_26416);

return statearr_26432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26427__$1,(7),inst_26417);
} else {
if((state_val_26428 === (5))){
var state_26427__$1 = state_26427;
var statearr_26433_26457 = state_26427__$1;
(statearr_26433_26457[(2)] = null);

(statearr_26433_26457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (6))){
var inst_26423 = (state_26427[(2)]);
var state_26427__$1 = state_26427;
var statearr_26434_26458 = state_26427__$1;
(statearr_26434_26458[(2)] = inst_26423);

(statearr_26434_26458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26428 === (7))){
var inst_26419 = (state_26427[(2)]);
var state_26427__$1 = (function (){var statearr_26435 = state_26427;
(statearr_26435[(8)] = inst_26419);

return statearr_26435;
})();
var statearr_26436_26459 = state_26427__$1;
(statearr_26436_26459[(2)] = null);

(statearr_26436_26459[(1)] = (2));


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
});})(c__26336__auto__))
;
return ((function (switch__26315__auto__,c__26336__auto__){
return (function() {
var csasync$proc$state_machine__26316__auto__ = null;
var csasync$proc$state_machine__26316__auto____0 = (function (){
var statearr_26440 = [null,null,null,null,null,null,null,null,null];
(statearr_26440[(0)] = csasync$proc$state_machine__26316__auto__);

(statearr_26440[(1)] = (1));

return statearr_26440;
});
var csasync$proc$state_machine__26316__auto____1 = (function (state_26427){
while(true){
var ret_value__26317__auto__ = (function (){try{while(true){
var result__26318__auto__ = switch__26315__auto__.call(null,state_26427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26318__auto__;
}
break;
}
}catch (e26441){if((e26441 instanceof Object)){
var ex__26319__auto__ = e26441;
var statearr_26442_26460 = state_26427;
(statearr_26442_26460[(5)] = ex__26319__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26461 = state_26427;
state_26427 = G__26461;
continue;
} else {
return ret_value__26317__auto__;
}
break;
}
});
csasync$proc$state_machine__26316__auto__ = function(state_26427){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__26316__auto____0.call(this);
case 1:
return csasync$proc$state_machine__26316__auto____1.call(this,state_26427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__26316__auto____0;
csasync$proc$state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__26316__auto____1;
return csasync$proc$state_machine__26316__auto__;
})()
;})(switch__26315__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_26443 = f__26337__auto__.call(null);
(statearr_26443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_26443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__26336__auto___26546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___26546){
return (function (){
var f__26337__auto__ = (function (){var switch__26315__auto__ = ((function (c__26336__auto___26546){
return (function (state_26524){
var state_val_26525 = (state_26524[(1)]);
if((state_val_26525 === (7))){
var inst_26513 = cljs.core.async.timeout.call(null,time_out);
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26524__$1,(10),inst_26513);
} else {
if((state_val_26525 === (1))){
var state_26524__$1 = state_26524;
var statearr_26526_26547 = state_26524__$1;
(statearr_26526_26547[(2)] = null);

(statearr_26526_26547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (4))){
var inst_26508 = proc_fn.call(null);
var state_26524__$1 = state_26524;
var statearr_26527_26548 = state_26524__$1;
(statearr_26527_26548[(2)] = inst_26508);

(statearr_26527_26548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (6))){
var inst_26511 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
if(cljs.core.truth_(inst_26511)){
var statearr_26528_26549 = state_26524__$1;
(statearr_26528_26549[(1)] = (7));

} else {
var statearr_26529_26550 = state_26524__$1;
(statearr_26529_26550[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (3))){
var inst_26521 = (state_26524[(2)]);
var inst_26522 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_26524__$1 = (function (){var statearr_26530 = state_26524;
(statearr_26530[(7)] = inst_26521);

return statearr_26530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26524__$1,inst_26522);
} else {
if((state_val_26525 === (2))){
var inst_26506 = (state_26524[(8)]);
var inst_26505 = cljs.core.deref.call(null,status);
var inst_26506__$1 = cljs.core._EQ_.call(null,inst_26505,"RUN");
var state_26524__$1 = (function (){var statearr_26531 = state_26524;
(statearr_26531[(8)] = inst_26506__$1);

return statearr_26531;
})();
if(inst_26506__$1){
var statearr_26532_26551 = state_26524__$1;
(statearr_26532_26551[(1)] = (4));

} else {
var statearr_26533_26552 = state_26524__$1;
(statearr_26533_26552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (9))){
var inst_26519 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26534_26553 = state_26524__$1;
(statearr_26534_26553[(2)] = inst_26519);

(statearr_26534_26553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (5))){
var inst_26506 = (state_26524[(8)]);
var state_26524__$1 = state_26524;
var statearr_26535_26554 = state_26524__$1;
(statearr_26535_26554[(2)] = inst_26506);

(statearr_26535_26554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (10))){
var inst_26515 = (state_26524[(2)]);
var state_26524__$1 = (function (){var statearr_26536 = state_26524;
(statearr_26536[(9)] = inst_26515);

return statearr_26536;
})();
var statearr_26537_26555 = state_26524__$1;
(statearr_26537_26555[(2)] = null);

(statearr_26537_26555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (8))){
var state_26524__$1 = state_26524;
var statearr_26538_26556 = state_26524__$1;
(statearr_26538_26556[(2)] = null);

(statearr_26538_26556[(1)] = (9));


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
});})(c__26336__auto___26546))
;
return ((function (switch__26315__auto__,c__26336__auto___26546){
return (function() {
var csasync$proc$start_process_$_state_machine__26316__auto__ = null;
var csasync$proc$start_process_$_state_machine__26316__auto____0 = (function (){
var statearr_26542 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26542[(0)] = csasync$proc$start_process_$_state_machine__26316__auto__);

(statearr_26542[(1)] = (1));

return statearr_26542;
});
var csasync$proc$start_process_$_state_machine__26316__auto____1 = (function (state_26524){
while(true){
var ret_value__26317__auto__ = (function (){try{while(true){
var result__26318__auto__ = switch__26315__auto__.call(null,state_26524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26318__auto__;
}
break;
}
}catch (e26543){if((e26543 instanceof Object)){
var ex__26319__auto__ = e26543;
var statearr_26544_26557 = state_26524;
(statearr_26544_26557[(5)] = ex__26319__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26558 = state_26524;
state_26524 = G__26558;
continue;
} else {
return ret_value__26317__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__26316__auto__ = function(state_26524){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__26316__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__26316__auto____1.call(this,state_26524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__26316__auto____0;
csasync$proc$start_process_$_state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__26316__auto____1;
return csasync$proc$start_process_$_state_machine__26316__auto__;
})()
;})(switch__26315__auto__,c__26336__auto___26546))
})();
var state__26338__auto__ = (function (){var statearr_26545 = f__26337__auto__.call(null);
(statearr_26545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___26546);

return statearr_26545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___26546))
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
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26315__auto__ = ((function (c__26336__auto__){
return (function (state_26579){
var state_val_26580 = (state_26579[(1)]);
if((state_val_26580 === (1))){
var inst_26574 = cljs.core.async.timeout.call(null,time);
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26579__$1,(2),inst_26574);
} else {
if((state_val_26580 === (2))){
var inst_26576 = (state_26579[(2)]);
var inst_26577 = func.call(null);
var state_26579__$1 = (function (){var statearr_26581 = state_26579;
(statearr_26581[(7)] = inst_26576);

return statearr_26581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26579__$1,inst_26577);
} else {
return null;
}
}
});})(c__26336__auto__))
;
return ((function (switch__26315__auto__,c__26336__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__26316__auto__ = null;
var csasync$proc$delayer_$_state_machine__26316__auto____0 = (function (){
var statearr_26585 = [null,null,null,null,null,null,null,null];
(statearr_26585[(0)] = csasync$proc$delayer_$_state_machine__26316__auto__);

(statearr_26585[(1)] = (1));

return statearr_26585;
});
var csasync$proc$delayer_$_state_machine__26316__auto____1 = (function (state_26579){
while(true){
var ret_value__26317__auto__ = (function (){try{while(true){
var result__26318__auto__ = switch__26315__auto__.call(null,state_26579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26318__auto__;
}
break;
}
}catch (e26586){if((e26586 instanceof Object)){
var ex__26319__auto__ = e26586;
var statearr_26587_26589 = state_26579;
(statearr_26587_26589[(5)] = ex__26319__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26590 = state_26579;
state_26579 = G__26590;
continue;
} else {
return ret_value__26317__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__26316__auto__ = function(state_26579){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__26316__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__26316__auto____1.call(this,state_26579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__26316__auto____0;
csasync$proc$delayer_$_state_machine__26316__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__26316__auto____1;
return csasync$proc$delayer_$_state_machine__26316__auto__;
})()
;})(switch__26315__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_26588 = f__26337__auto__.call(null);
(statearr_26588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_26588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});

//# sourceMappingURL=proc.js.map