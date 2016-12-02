// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21425 = [];
var len__20425__auto___21488 = arguments.length;
var i__20426__auto___21489 = (0);
while(true){
if((i__20426__auto___21489 < len__20425__auto___21488)){
args21425.push((arguments[i__20426__auto___21489]));

var G__21490 = (i__20426__auto___21489 + (1));
i__20426__auto___21489 = G__21490;
continue;
} else {
}
break;
}

var G__21427 = args21425.length;
switch (G__21427) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21425.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21380__auto__){
return (function (){
var f__21381__auto__ = (function (){var switch__21359__auto__ = ((function (c__21380__auto__){
return (function (state_21441){
var state_val_21442 = (state_21441[(1)]);
if((state_val_21442 === (1))){
var state_21441__$1 = state_21441;
var statearr_21443_21492 = state_21441__$1;
(statearr_21443_21492[(2)] = null);

(statearr_21443_21492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (2))){
var state_21441__$1 = state_21441;
var statearr_21444_21493 = state_21441__$1;
(statearr_21444_21493[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (3))){
var inst_21439 = (state_21441[(2)]);
var state_21441__$1 = state_21441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21441__$1,inst_21439);
} else {
if((state_val_21442 === (4))){
var inst_21430 = func.call(null);
var inst_21431 = cljs.core.async.timeout.call(null,time_out);
var state_21441__$1 = (function (){var statearr_21446 = state_21441;
(statearr_21446[(7)] = inst_21430);

return statearr_21446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21441__$1,(7),inst_21431);
} else {
if((state_val_21442 === (5))){
var state_21441__$1 = state_21441;
var statearr_21447_21494 = state_21441__$1;
(statearr_21447_21494[(2)] = null);

(statearr_21447_21494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (6))){
var inst_21437 = (state_21441[(2)]);
var state_21441__$1 = state_21441;
var statearr_21448_21495 = state_21441__$1;
(statearr_21448_21495[(2)] = inst_21437);

(statearr_21448_21495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (7))){
var inst_21433 = (state_21441[(2)]);
var state_21441__$1 = (function (){var statearr_21449 = state_21441;
(statearr_21449[(8)] = inst_21433);

return statearr_21449;
})();
var statearr_21450_21496 = state_21441__$1;
(statearr_21450_21496[(2)] = null);

(statearr_21450_21496[(1)] = (2));


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
});})(c__21380__auto__))
;
return ((function (switch__21359__auto__,c__21380__auto__){
return (function() {
var csasync$proc$state_machine__21360__auto__ = null;
var csasync$proc$state_machine__21360__auto____0 = (function (){
var statearr_21454 = [null,null,null,null,null,null,null,null,null];
(statearr_21454[(0)] = csasync$proc$state_machine__21360__auto__);

(statearr_21454[(1)] = (1));

return statearr_21454;
});
var csasync$proc$state_machine__21360__auto____1 = (function (state_21441){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_21441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e21455){if((e21455 instanceof Object)){
var ex__21363__auto__ = e21455;
var statearr_21456_21497 = state_21441;
(statearr_21456_21497[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21498 = state_21441;
state_21441 = G__21498;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
csasync$proc$state_machine__21360__auto__ = function(state_21441){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21360__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21360__auto____1.call(this,state_21441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21360__auto____0;
csasync$proc$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21360__auto____1;
return csasync$proc$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21380__auto__))
})();
var state__21382__auto__ = (function (){var statearr_21457 = f__21381__auto__.call(null);
(statearr_21457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21380__auto__);

return statearr_21457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21382__auto__);
});})(c__21380__auto__))
);

return c__21380__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21380__auto__){
return (function (){
var f__21381__auto__ = (function (){var switch__21359__auto__ = ((function (c__21380__auto__){
return (function (state_21471){
var state_val_21472 = (state_21471[(1)]);
if((state_val_21472 === (1))){
var state_21471__$1 = state_21471;
var statearr_21473_21499 = state_21471__$1;
(statearr_21473_21499[(2)] = null);

(statearr_21473_21499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21472 === (2))){
var state_21471__$1 = state_21471;
var statearr_21474_21500 = state_21471__$1;
(statearr_21474_21500[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21472 === (3))){
var inst_21469 = (state_21471[(2)]);
var state_21471__$1 = state_21471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21471__$1,inst_21469);
} else {
if((state_val_21472 === (4))){
var inst_21460 = func.call(null,param);
var inst_21461 = cljs.core.async.timeout.call(null,time_out);
var state_21471__$1 = (function (){var statearr_21476 = state_21471;
(statearr_21476[(7)] = inst_21460);

return statearr_21476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21471__$1,(7),inst_21461);
} else {
if((state_val_21472 === (5))){
var state_21471__$1 = state_21471;
var statearr_21477_21501 = state_21471__$1;
(statearr_21477_21501[(2)] = null);

(statearr_21477_21501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21472 === (6))){
var inst_21467 = (state_21471[(2)]);
var state_21471__$1 = state_21471;
var statearr_21478_21502 = state_21471__$1;
(statearr_21478_21502[(2)] = inst_21467);

(statearr_21478_21502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21472 === (7))){
var inst_21463 = (state_21471[(2)]);
var state_21471__$1 = (function (){var statearr_21479 = state_21471;
(statearr_21479[(8)] = inst_21463);

return statearr_21479;
})();
var statearr_21480_21503 = state_21471__$1;
(statearr_21480_21503[(2)] = null);

(statearr_21480_21503[(1)] = (2));


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
});})(c__21380__auto__))
;
return ((function (switch__21359__auto__,c__21380__auto__){
return (function() {
var csasync$proc$state_machine__21360__auto__ = null;
var csasync$proc$state_machine__21360__auto____0 = (function (){
var statearr_21484 = [null,null,null,null,null,null,null,null,null];
(statearr_21484[(0)] = csasync$proc$state_machine__21360__auto__);

(statearr_21484[(1)] = (1));

return statearr_21484;
});
var csasync$proc$state_machine__21360__auto____1 = (function (state_21471){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_21471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e21485){if((e21485 instanceof Object)){
var ex__21363__auto__ = e21485;
var statearr_21486_21504 = state_21471;
(statearr_21486_21504[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21505 = state_21471;
state_21471 = G__21505;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
csasync$proc$state_machine__21360__auto__ = function(state_21471){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21360__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21360__auto____1.call(this,state_21471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21360__auto____0;
csasync$proc$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21360__auto____1;
return csasync$proc$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21380__auto__))
})();
var state__21382__auto__ = (function (){var statearr_21487 = f__21381__auto__.call(null);
(statearr_21487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21380__auto__);

return statearr_21487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21382__auto__);
});})(c__21380__auto__))
);

return c__21380__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21380__auto___21590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21380__auto___21590){
return (function (){
var f__21381__auto__ = (function (){var switch__21359__auto__ = ((function (c__21380__auto___21590){
return (function (state_21568){
var state_val_21569 = (state_21568[(1)]);
if((state_val_21569 === (7))){
var inst_21557 = cljs.core.async.timeout.call(null,time_out);
var state_21568__$1 = state_21568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21568__$1,(10),inst_21557);
} else {
if((state_val_21569 === (1))){
var state_21568__$1 = state_21568;
var statearr_21570_21591 = state_21568__$1;
(statearr_21570_21591[(2)] = null);

(statearr_21570_21591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (4))){
var inst_21552 = proc_fn.call(null);
var state_21568__$1 = state_21568;
var statearr_21571_21592 = state_21568__$1;
(statearr_21571_21592[(2)] = inst_21552);

(statearr_21571_21592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (6))){
var inst_21555 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
if(cljs.core.truth_(inst_21555)){
var statearr_21572_21593 = state_21568__$1;
(statearr_21572_21593[(1)] = (7));

} else {
var statearr_21573_21594 = state_21568__$1;
(statearr_21573_21594[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (3))){
var inst_21565 = (state_21568[(2)]);
var inst_21566 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21568__$1 = (function (){var statearr_21574 = state_21568;
(statearr_21574[(7)] = inst_21565);

return statearr_21574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21568__$1,inst_21566);
} else {
if((state_val_21569 === (2))){
var inst_21550 = (state_21568[(8)]);
var inst_21549 = cljs.core.deref.call(null,status);
var inst_21550__$1 = cljs.core._EQ_.call(null,inst_21549,"RUN");
var state_21568__$1 = (function (){var statearr_21575 = state_21568;
(statearr_21575[(8)] = inst_21550__$1);

return statearr_21575;
})();
if(inst_21550__$1){
var statearr_21576_21595 = state_21568__$1;
(statearr_21576_21595[(1)] = (4));

} else {
var statearr_21577_21596 = state_21568__$1;
(statearr_21577_21596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (9))){
var inst_21563 = (state_21568[(2)]);
var state_21568__$1 = state_21568;
var statearr_21578_21597 = state_21568__$1;
(statearr_21578_21597[(2)] = inst_21563);

(statearr_21578_21597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (5))){
var inst_21550 = (state_21568[(8)]);
var state_21568__$1 = state_21568;
var statearr_21579_21598 = state_21568__$1;
(statearr_21579_21598[(2)] = inst_21550);

(statearr_21579_21598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (10))){
var inst_21559 = (state_21568[(2)]);
var state_21568__$1 = (function (){var statearr_21580 = state_21568;
(statearr_21580[(9)] = inst_21559);

return statearr_21580;
})();
var statearr_21581_21599 = state_21568__$1;
(statearr_21581_21599[(2)] = null);

(statearr_21581_21599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21569 === (8))){
var state_21568__$1 = state_21568;
var statearr_21582_21600 = state_21568__$1;
(statearr_21582_21600[(2)] = null);

(statearr_21582_21600[(1)] = (9));


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
});})(c__21380__auto___21590))
;
return ((function (switch__21359__auto__,c__21380__auto___21590){
return (function() {
var csasync$proc$start_process_$_state_machine__21360__auto__ = null;
var csasync$proc$start_process_$_state_machine__21360__auto____0 = (function (){
var statearr_21586 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21586[(0)] = csasync$proc$start_process_$_state_machine__21360__auto__);

(statearr_21586[(1)] = (1));

return statearr_21586;
});
var csasync$proc$start_process_$_state_machine__21360__auto____1 = (function (state_21568){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_21568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e21587){if((e21587 instanceof Object)){
var ex__21363__auto__ = e21587;
var statearr_21588_21601 = state_21568;
(statearr_21588_21601[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21602 = state_21568;
state_21568 = G__21602;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21360__auto__ = function(state_21568){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21360__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21360__auto____1.call(this,state_21568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21360__auto____0;
csasync$proc$start_process_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21360__auto____1;
return csasync$proc$start_process_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21380__auto___21590))
})();
var state__21382__auto__ = (function (){var statearr_21589 = f__21381__auto__.call(null);
(statearr_21589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21380__auto___21590);

return statearr_21589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21382__auto__);
});})(c__21380__auto___21590))
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
var c__21380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21380__auto__){
return (function (){
var f__21381__auto__ = (function (){var switch__21359__auto__ = ((function (c__21380__auto__){
return (function (state_21623){
var state_val_21624 = (state_21623[(1)]);
if((state_val_21624 === (1))){
var inst_21618 = cljs.core.async.timeout.call(null,time);
var state_21623__$1 = state_21623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21623__$1,(2),inst_21618);
} else {
if((state_val_21624 === (2))){
var inst_21620 = (state_21623[(2)]);
var inst_21621 = func.call(null);
var state_21623__$1 = (function (){var statearr_21625 = state_21623;
(statearr_21625[(7)] = inst_21620);

return statearr_21625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21623__$1,inst_21621);
} else {
return null;
}
}
});})(c__21380__auto__))
;
return ((function (switch__21359__auto__,c__21380__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21360__auto__ = null;
var csasync$proc$delayer_$_state_machine__21360__auto____0 = (function (){
var statearr_21629 = [null,null,null,null,null,null,null,null];
(statearr_21629[(0)] = csasync$proc$delayer_$_state_machine__21360__auto__);

(statearr_21629[(1)] = (1));

return statearr_21629;
});
var csasync$proc$delayer_$_state_machine__21360__auto____1 = (function (state_21623){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_21623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e21630){if((e21630 instanceof Object)){
var ex__21363__auto__ = e21630;
var statearr_21631_21633 = state_21623;
(statearr_21631_21633[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21634 = state_21623;
state_21623 = G__21634;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21360__auto__ = function(state_21623){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21360__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21360__auto____1.call(this,state_21623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21360__auto____0;
csasync$proc$delayer_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21360__auto____1;
return csasync$proc$delayer_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21380__auto__))
})();
var state__21382__auto__ = (function (){var statearr_21632 = f__21381__auto__.call(null);
(statearr_21632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21380__auto__);

return statearr_21632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21382__auto__);
});})(c__21380__auto__))
);

return c__21380__auto__;
});

//# sourceMappingURL=proc.js.map