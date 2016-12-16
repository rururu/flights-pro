// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21476 = [];
var len__20476__auto___21539 = arguments.length;
var i__20477__auto___21540 = (0);
while(true){
if((i__20477__auto___21540 < len__20476__auto___21539)){
args21476.push((arguments[i__20477__auto___21540]));

var G__21541 = (i__20477__auto___21540 + (1));
i__20477__auto___21540 = G__21541;
continue;
} else {
}
break;
}

var G__21478 = args21476.length;
switch (G__21478) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21476.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21410__auto__ = ((function (c__21431__auto__){
return (function (state_21492){
var state_val_21493 = (state_21492[(1)]);
if((state_val_21493 === (1))){
var state_21492__$1 = state_21492;
var statearr_21494_21543 = state_21492__$1;
(statearr_21494_21543[(2)] = null);

(statearr_21494_21543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21493 === (2))){
var state_21492__$1 = state_21492;
var statearr_21495_21544 = state_21492__$1;
(statearr_21495_21544[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21493 === (3))){
var inst_21490 = (state_21492[(2)]);
var state_21492__$1 = state_21492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21492__$1,inst_21490);
} else {
if((state_val_21493 === (4))){
var inst_21481 = func.call(null);
var inst_21482 = cljs.core.async.timeout.call(null,time_out);
var state_21492__$1 = (function (){var statearr_21497 = state_21492;
(statearr_21497[(7)] = inst_21481);

return statearr_21497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21492__$1,(7),inst_21482);
} else {
if((state_val_21493 === (5))){
var state_21492__$1 = state_21492;
var statearr_21498_21545 = state_21492__$1;
(statearr_21498_21545[(2)] = null);

(statearr_21498_21545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21493 === (6))){
var inst_21488 = (state_21492[(2)]);
var state_21492__$1 = state_21492;
var statearr_21499_21546 = state_21492__$1;
(statearr_21499_21546[(2)] = inst_21488);

(statearr_21499_21546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21493 === (7))){
var inst_21484 = (state_21492[(2)]);
var state_21492__$1 = (function (){var statearr_21500 = state_21492;
(statearr_21500[(8)] = inst_21484);

return statearr_21500;
})();
var statearr_21501_21547 = state_21492__$1;
(statearr_21501_21547[(2)] = null);

(statearr_21501_21547[(1)] = (2));


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
});})(c__21431__auto__))
;
return ((function (switch__21410__auto__,c__21431__auto__){
return (function() {
var csasync$proc$state_machine__21411__auto__ = null;
var csasync$proc$state_machine__21411__auto____0 = (function (){
var statearr_21505 = [null,null,null,null,null,null,null,null,null];
(statearr_21505[(0)] = csasync$proc$state_machine__21411__auto__);

(statearr_21505[(1)] = (1));

return statearr_21505;
});
var csasync$proc$state_machine__21411__auto____1 = (function (state_21492){
while(true){
var ret_value__21412__auto__ = (function (){try{while(true){
var result__21413__auto__ = switch__21410__auto__.call(null,state_21492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21413__auto__;
}
break;
}
}catch (e21506){if((e21506 instanceof Object)){
var ex__21414__auto__ = e21506;
var statearr_21507_21548 = state_21492;
(statearr_21507_21548[(5)] = ex__21414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21549 = state_21492;
state_21492 = G__21549;
continue;
} else {
return ret_value__21412__auto__;
}
break;
}
});
csasync$proc$state_machine__21411__auto__ = function(state_21492){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21411__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21411__auto____1.call(this,state_21492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21411__auto____0;
csasync$proc$state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21411__auto____1;
return csasync$proc$state_machine__21411__auto__;
})()
;})(switch__21410__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_21508 = f__21432__auto__.call(null);
(statearr_21508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21431__auto__);

return statearr_21508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21410__auto__ = ((function (c__21431__auto__){
return (function (state_21522){
var state_val_21523 = (state_21522[(1)]);
if((state_val_21523 === (1))){
var state_21522__$1 = state_21522;
var statearr_21524_21550 = state_21522__$1;
(statearr_21524_21550[(2)] = null);

(statearr_21524_21550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (2))){
var state_21522__$1 = state_21522;
var statearr_21525_21551 = state_21522__$1;
(statearr_21525_21551[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (3))){
var inst_21520 = (state_21522[(2)]);
var state_21522__$1 = state_21522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21522__$1,inst_21520);
} else {
if((state_val_21523 === (4))){
var inst_21511 = func.call(null,param);
var inst_21512 = cljs.core.async.timeout.call(null,time_out);
var state_21522__$1 = (function (){var statearr_21527 = state_21522;
(statearr_21527[(7)] = inst_21511);

return statearr_21527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21522__$1,(7),inst_21512);
} else {
if((state_val_21523 === (5))){
var state_21522__$1 = state_21522;
var statearr_21528_21552 = state_21522__$1;
(statearr_21528_21552[(2)] = null);

(statearr_21528_21552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (6))){
var inst_21518 = (state_21522[(2)]);
var state_21522__$1 = state_21522;
var statearr_21529_21553 = state_21522__$1;
(statearr_21529_21553[(2)] = inst_21518);

(statearr_21529_21553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21523 === (7))){
var inst_21514 = (state_21522[(2)]);
var state_21522__$1 = (function (){var statearr_21530 = state_21522;
(statearr_21530[(8)] = inst_21514);

return statearr_21530;
})();
var statearr_21531_21554 = state_21522__$1;
(statearr_21531_21554[(2)] = null);

(statearr_21531_21554[(1)] = (2));


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
});})(c__21431__auto__))
;
return ((function (switch__21410__auto__,c__21431__auto__){
return (function() {
var csasync$proc$state_machine__21411__auto__ = null;
var csasync$proc$state_machine__21411__auto____0 = (function (){
var statearr_21535 = [null,null,null,null,null,null,null,null,null];
(statearr_21535[(0)] = csasync$proc$state_machine__21411__auto__);

(statearr_21535[(1)] = (1));

return statearr_21535;
});
var csasync$proc$state_machine__21411__auto____1 = (function (state_21522){
while(true){
var ret_value__21412__auto__ = (function (){try{while(true){
var result__21413__auto__ = switch__21410__auto__.call(null,state_21522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21413__auto__;
}
break;
}
}catch (e21536){if((e21536 instanceof Object)){
var ex__21414__auto__ = e21536;
var statearr_21537_21555 = state_21522;
(statearr_21537_21555[(5)] = ex__21414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21556 = state_21522;
state_21522 = G__21556;
continue;
} else {
return ret_value__21412__auto__;
}
break;
}
});
csasync$proc$state_machine__21411__auto__ = function(state_21522){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21411__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21411__auto____1.call(this,state_21522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21411__auto____0;
csasync$proc$state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21411__auto____1;
return csasync$proc$state_machine__21411__auto__;
})()
;})(switch__21410__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_21538 = f__21432__auto__.call(null);
(statearr_21538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21431__auto__);

return statearr_21538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21431__auto___21641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21431__auto___21641){
return (function (){
var f__21432__auto__ = (function (){var switch__21410__auto__ = ((function (c__21431__auto___21641){
return (function (state_21619){
var state_val_21620 = (state_21619[(1)]);
if((state_val_21620 === (7))){
var inst_21608 = cljs.core.async.timeout.call(null,time_out);
var state_21619__$1 = state_21619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21619__$1,(10),inst_21608);
} else {
if((state_val_21620 === (1))){
var state_21619__$1 = state_21619;
var statearr_21621_21642 = state_21619__$1;
(statearr_21621_21642[(2)] = null);

(statearr_21621_21642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (4))){
var inst_21603 = proc_fn.call(null);
var state_21619__$1 = state_21619;
var statearr_21622_21643 = state_21619__$1;
(statearr_21622_21643[(2)] = inst_21603);

(statearr_21622_21643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (6))){
var inst_21606 = (state_21619[(2)]);
var state_21619__$1 = state_21619;
if(cljs.core.truth_(inst_21606)){
var statearr_21623_21644 = state_21619__$1;
(statearr_21623_21644[(1)] = (7));

} else {
var statearr_21624_21645 = state_21619__$1;
(statearr_21624_21645[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (3))){
var inst_21616 = (state_21619[(2)]);
var inst_21617 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21619__$1 = (function (){var statearr_21625 = state_21619;
(statearr_21625[(7)] = inst_21616);

return statearr_21625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21619__$1,inst_21617);
} else {
if((state_val_21620 === (2))){
var inst_21601 = (state_21619[(8)]);
var inst_21600 = cljs.core.deref.call(null,status);
var inst_21601__$1 = cljs.core._EQ_.call(null,inst_21600,"RUN");
var state_21619__$1 = (function (){var statearr_21626 = state_21619;
(statearr_21626[(8)] = inst_21601__$1);

return statearr_21626;
})();
if(inst_21601__$1){
var statearr_21627_21646 = state_21619__$1;
(statearr_21627_21646[(1)] = (4));

} else {
var statearr_21628_21647 = state_21619__$1;
(statearr_21628_21647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (9))){
var inst_21614 = (state_21619[(2)]);
var state_21619__$1 = state_21619;
var statearr_21629_21648 = state_21619__$1;
(statearr_21629_21648[(2)] = inst_21614);

(statearr_21629_21648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (5))){
var inst_21601 = (state_21619[(8)]);
var state_21619__$1 = state_21619;
var statearr_21630_21649 = state_21619__$1;
(statearr_21630_21649[(2)] = inst_21601);

(statearr_21630_21649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (10))){
var inst_21610 = (state_21619[(2)]);
var state_21619__$1 = (function (){var statearr_21631 = state_21619;
(statearr_21631[(9)] = inst_21610);

return statearr_21631;
})();
var statearr_21632_21650 = state_21619__$1;
(statearr_21632_21650[(2)] = null);

(statearr_21632_21650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (8))){
var state_21619__$1 = state_21619;
var statearr_21633_21651 = state_21619__$1;
(statearr_21633_21651[(2)] = null);

(statearr_21633_21651[(1)] = (9));


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
});})(c__21431__auto___21641))
;
return ((function (switch__21410__auto__,c__21431__auto___21641){
return (function() {
var csasync$proc$start_process_$_state_machine__21411__auto__ = null;
var csasync$proc$start_process_$_state_machine__21411__auto____0 = (function (){
var statearr_21637 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21637[(0)] = csasync$proc$start_process_$_state_machine__21411__auto__);

(statearr_21637[(1)] = (1));

return statearr_21637;
});
var csasync$proc$start_process_$_state_machine__21411__auto____1 = (function (state_21619){
while(true){
var ret_value__21412__auto__ = (function (){try{while(true){
var result__21413__auto__ = switch__21410__auto__.call(null,state_21619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21413__auto__;
}
break;
}
}catch (e21638){if((e21638 instanceof Object)){
var ex__21414__auto__ = e21638;
var statearr_21639_21652 = state_21619;
(statearr_21639_21652[(5)] = ex__21414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21653 = state_21619;
state_21619 = G__21653;
continue;
} else {
return ret_value__21412__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21411__auto__ = function(state_21619){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21411__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21411__auto____1.call(this,state_21619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21411__auto____0;
csasync$proc$start_process_$_state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21411__auto____1;
return csasync$proc$start_process_$_state_machine__21411__auto__;
})()
;})(switch__21410__auto__,c__21431__auto___21641))
})();
var state__21433__auto__ = (function (){var statearr_21640 = f__21432__auto__.call(null);
(statearr_21640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21431__auto___21641);

return statearr_21640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21433__auto__);
});})(c__21431__auto___21641))
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
var c__21431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21410__auto__ = ((function (c__21431__auto__){
return (function (state_21674){
var state_val_21675 = (state_21674[(1)]);
if((state_val_21675 === (1))){
var inst_21669 = cljs.core.async.timeout.call(null,time);
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21674__$1,(2),inst_21669);
} else {
if((state_val_21675 === (2))){
var inst_21671 = (state_21674[(2)]);
var inst_21672 = func.call(null);
var state_21674__$1 = (function (){var statearr_21676 = state_21674;
(statearr_21676[(7)] = inst_21671);

return statearr_21676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21674__$1,inst_21672);
} else {
return null;
}
}
});})(c__21431__auto__))
;
return ((function (switch__21410__auto__,c__21431__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21411__auto__ = null;
var csasync$proc$delayer_$_state_machine__21411__auto____0 = (function (){
var statearr_21680 = [null,null,null,null,null,null,null,null];
(statearr_21680[(0)] = csasync$proc$delayer_$_state_machine__21411__auto__);

(statearr_21680[(1)] = (1));

return statearr_21680;
});
var csasync$proc$delayer_$_state_machine__21411__auto____1 = (function (state_21674){
while(true){
var ret_value__21412__auto__ = (function (){try{while(true){
var result__21413__auto__ = switch__21410__auto__.call(null,state_21674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21413__auto__;
}
break;
}
}catch (e21681){if((e21681 instanceof Object)){
var ex__21414__auto__ = e21681;
var statearr_21682_21684 = state_21674;
(statearr_21682_21684[(5)] = ex__21414__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21685 = state_21674;
state_21674 = G__21685;
continue;
} else {
return ret_value__21412__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21411__auto__ = function(state_21674){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21411__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21411__auto____1.call(this,state_21674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21411__auto____0;
csasync$proc$delayer_$_state_machine__21411__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21411__auto____1;
return csasync$proc$delayer_$_state_machine__21411__auto__;
})()
;})(switch__21410__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_21683 = f__21432__auto__.call(null);
(statearr_21683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21431__auto__);

return statearr_21683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});

//# sourceMappingURL=proc.js.map