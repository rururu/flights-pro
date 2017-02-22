// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21564 = [];
var len__10516__auto___21627 = arguments.length;
var i__10517__auto___21628 = (0);
while(true){
if((i__10517__auto___21628 < len__10516__auto___21627)){
args21564.push((arguments[i__10517__auto___21628]));

var G__21629 = (i__10517__auto___21628 + (1));
i__10517__auto___21628 = G__21629;
continue;
} else {
}
break;
}

var G__21566 = args21564.length;
switch (G__21566) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21564.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__){
return (function (state_21580){
var state_val_21581 = (state_21580[(1)]);
if((state_val_21581 === (1))){
var state_21580__$1 = state_21580;
var statearr_21582_21631 = state_21580__$1;
(statearr_21582_21631[(2)] = null);

(statearr_21582_21631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21581 === (2))){
var state_21580__$1 = state_21580;
var statearr_21583_21632 = state_21580__$1;
(statearr_21583_21632[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21581 === (3))){
var inst_21578 = (state_21580[(2)]);
var state_21580__$1 = state_21580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21580__$1,inst_21578);
} else {
if((state_val_21581 === (4))){
var inst_21569 = func.call(null);
var inst_21570 = cljs.core.async.timeout.call(null,time_out);
var state_21580__$1 = (function (){var statearr_21585 = state_21580;
(statearr_21585[(7)] = inst_21569);

return statearr_21585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21580__$1,(7),inst_21570);
} else {
if((state_val_21581 === (5))){
var state_21580__$1 = state_21580;
var statearr_21586_21633 = state_21580__$1;
(statearr_21586_21633[(2)] = null);

(statearr_21586_21633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21581 === (6))){
var inst_21576 = (state_21580[(2)]);
var state_21580__$1 = state_21580;
var statearr_21587_21634 = state_21580__$1;
(statearr_21587_21634[(2)] = inst_21576);

(statearr_21587_21634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21581 === (7))){
var inst_21572 = (state_21580[(2)]);
var state_21580__$1 = (function (){var statearr_21588 = state_21580;
(statearr_21588[(8)] = inst_21572);

return statearr_21588;
})();
var statearr_21589_21635 = state_21580__$1;
(statearr_21589_21635[(2)] = null);

(statearr_21589_21635[(1)] = (2));


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
});})(c__16188__auto__))
;
return ((function (switch__16076__auto__,c__16188__auto__){
return (function() {
var csasync$proc$state_machine__16077__auto__ = null;
var csasync$proc$state_machine__16077__auto____0 = (function (){
var statearr_21593 = [null,null,null,null,null,null,null,null,null];
(statearr_21593[(0)] = csasync$proc$state_machine__16077__auto__);

(statearr_21593[(1)] = (1));

return statearr_21593;
});
var csasync$proc$state_machine__16077__auto____1 = (function (state_21580){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_21580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e21594){if((e21594 instanceof Object)){
var ex__16080__auto__ = e21594;
var statearr_21595_21636 = state_21580;
(statearr_21595_21636[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21637 = state_21580;
state_21580 = G__21637;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
csasync$proc$state_machine__16077__auto__ = function(state_21580){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__16077__auto____0.call(this);
case 1:
return csasync$proc$state_machine__16077__auto____1.call(this,state_21580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__16077__auto____0;
csasync$proc$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__16077__auto____1;
return csasync$proc$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__))
})();
var state__16190__auto__ = (function (){var statearr_21596 = f__16189__auto__.call(null);
(statearr_21596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_21596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__))
);

return c__16188__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__){
return (function (state_21610){
var state_val_21611 = (state_21610[(1)]);
if((state_val_21611 === (1))){
var state_21610__$1 = state_21610;
var statearr_21612_21638 = state_21610__$1;
(statearr_21612_21638[(2)] = null);

(statearr_21612_21638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (2))){
var state_21610__$1 = state_21610;
var statearr_21613_21639 = state_21610__$1;
(statearr_21613_21639[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (3))){
var inst_21608 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21610__$1,inst_21608);
} else {
if((state_val_21611 === (4))){
var inst_21599 = func.call(null,param);
var inst_21600 = cljs.core.async.timeout.call(null,time_out);
var state_21610__$1 = (function (){var statearr_21615 = state_21610;
(statearr_21615[(7)] = inst_21599);

return statearr_21615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21610__$1,(7),inst_21600);
} else {
if((state_val_21611 === (5))){
var state_21610__$1 = state_21610;
var statearr_21616_21640 = state_21610__$1;
(statearr_21616_21640[(2)] = null);

(statearr_21616_21640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (6))){
var inst_21606 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
var statearr_21617_21641 = state_21610__$1;
(statearr_21617_21641[(2)] = inst_21606);

(statearr_21617_21641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (7))){
var inst_21602 = (state_21610[(2)]);
var state_21610__$1 = (function (){var statearr_21618 = state_21610;
(statearr_21618[(8)] = inst_21602);

return statearr_21618;
})();
var statearr_21619_21642 = state_21610__$1;
(statearr_21619_21642[(2)] = null);

(statearr_21619_21642[(1)] = (2));


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
});})(c__16188__auto__))
;
return ((function (switch__16076__auto__,c__16188__auto__){
return (function() {
var csasync$proc$state_machine__16077__auto__ = null;
var csasync$proc$state_machine__16077__auto____0 = (function (){
var statearr_21623 = [null,null,null,null,null,null,null,null,null];
(statearr_21623[(0)] = csasync$proc$state_machine__16077__auto__);

(statearr_21623[(1)] = (1));

return statearr_21623;
});
var csasync$proc$state_machine__16077__auto____1 = (function (state_21610){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_21610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e21624){if((e21624 instanceof Object)){
var ex__16080__auto__ = e21624;
var statearr_21625_21643 = state_21610;
(statearr_21625_21643[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21644 = state_21610;
state_21610 = G__21644;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
csasync$proc$state_machine__16077__auto__ = function(state_21610){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__16077__auto____0.call(this);
case 1:
return csasync$proc$state_machine__16077__auto____1.call(this,state_21610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__16077__auto____0;
csasync$proc$state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__16077__auto____1;
return csasync$proc$state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__))
})();
var state__16190__auto__ = (function (){var statearr_21626 = f__16189__auto__.call(null);
(statearr_21626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_21626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__))
);

return c__16188__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__16188__auto___21729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto___21729){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto___21729){
return (function (state_21707){
var state_val_21708 = (state_21707[(1)]);
if((state_val_21708 === (7))){
var inst_21696 = cljs.core.async.timeout.call(null,time_out);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21707__$1,(10),inst_21696);
} else {
if((state_val_21708 === (1))){
var state_21707__$1 = state_21707;
var statearr_21709_21730 = state_21707__$1;
(statearr_21709_21730[(2)] = null);

(statearr_21709_21730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (4))){
var inst_21691 = proc_fn.call(null);
var state_21707__$1 = state_21707;
var statearr_21710_21731 = state_21707__$1;
(statearr_21710_21731[(2)] = inst_21691);

(statearr_21710_21731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (6))){
var inst_21694 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
if(cljs.core.truth_(inst_21694)){
var statearr_21711_21732 = state_21707__$1;
(statearr_21711_21732[(1)] = (7));

} else {
var statearr_21712_21733 = state_21707__$1;
(statearr_21712_21733[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (3))){
var inst_21704 = (state_21707[(2)]);
var inst_21705 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21707__$1 = (function (){var statearr_21713 = state_21707;
(statearr_21713[(7)] = inst_21704);

return statearr_21713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21707__$1,inst_21705);
} else {
if((state_val_21708 === (2))){
var inst_21689 = (state_21707[(8)]);
var inst_21688 = cljs.core.deref.call(null,status);
var inst_21689__$1 = cljs.core._EQ_.call(null,inst_21688,"RUN");
var state_21707__$1 = (function (){var statearr_21714 = state_21707;
(statearr_21714[(8)] = inst_21689__$1);

return statearr_21714;
})();
if(inst_21689__$1){
var statearr_21715_21734 = state_21707__$1;
(statearr_21715_21734[(1)] = (4));

} else {
var statearr_21716_21735 = state_21707__$1;
(statearr_21716_21735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (9))){
var inst_21702 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21717_21736 = state_21707__$1;
(statearr_21717_21736[(2)] = inst_21702);

(statearr_21717_21736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (5))){
var inst_21689 = (state_21707[(8)]);
var state_21707__$1 = state_21707;
var statearr_21718_21737 = state_21707__$1;
(statearr_21718_21737[(2)] = inst_21689);

(statearr_21718_21737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (10))){
var inst_21698 = (state_21707[(2)]);
var state_21707__$1 = (function (){var statearr_21719 = state_21707;
(statearr_21719[(9)] = inst_21698);

return statearr_21719;
})();
var statearr_21720_21738 = state_21707__$1;
(statearr_21720_21738[(2)] = null);

(statearr_21720_21738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21708 === (8))){
var state_21707__$1 = state_21707;
var statearr_21721_21739 = state_21707__$1;
(statearr_21721_21739[(2)] = null);

(statearr_21721_21739[(1)] = (9));


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
});})(c__16188__auto___21729))
;
return ((function (switch__16076__auto__,c__16188__auto___21729){
return (function() {
var csasync$proc$start_process_$_state_machine__16077__auto__ = null;
var csasync$proc$start_process_$_state_machine__16077__auto____0 = (function (){
var statearr_21725 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21725[(0)] = csasync$proc$start_process_$_state_machine__16077__auto__);

(statearr_21725[(1)] = (1));

return statearr_21725;
});
var csasync$proc$start_process_$_state_machine__16077__auto____1 = (function (state_21707){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_21707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e21726){if((e21726 instanceof Object)){
var ex__16080__auto__ = e21726;
var statearr_21727_21740 = state_21707;
(statearr_21727_21740[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21741 = state_21707;
state_21707 = G__21741;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__16077__auto__ = function(state_21707){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__16077__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__16077__auto____1.call(this,state_21707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__16077__auto____0;
csasync$proc$start_process_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__16077__auto____1;
return csasync$proc$start_process_$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto___21729))
})();
var state__16190__auto__ = (function (){var statearr_21728 = f__16189__auto__.call(null);
(statearr_21728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto___21729);

return statearr_21728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto___21729))
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
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__){
return (function (state_21762){
var state_val_21763 = (state_21762[(1)]);
if((state_val_21763 === (1))){
var inst_21757 = cljs.core.async.timeout.call(null,time);
var state_21762__$1 = state_21762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21762__$1,(2),inst_21757);
} else {
if((state_val_21763 === (2))){
var inst_21759 = (state_21762[(2)]);
var inst_21760 = func.call(null);
var state_21762__$1 = (function (){var statearr_21764 = state_21762;
(statearr_21764[(7)] = inst_21759);

return statearr_21764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21762__$1,inst_21760);
} else {
return null;
}
}
});})(c__16188__auto__))
;
return ((function (switch__16076__auto__,c__16188__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__16077__auto__ = null;
var csasync$proc$delayer_$_state_machine__16077__auto____0 = (function (){
var statearr_21768 = [null,null,null,null,null,null,null,null];
(statearr_21768[(0)] = csasync$proc$delayer_$_state_machine__16077__auto__);

(statearr_21768[(1)] = (1));

return statearr_21768;
});
var csasync$proc$delayer_$_state_machine__16077__auto____1 = (function (state_21762){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_21762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e21769){if((e21769 instanceof Object)){
var ex__16080__auto__ = e21769;
var statearr_21770_21772 = state_21762;
(statearr_21770_21772[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21773 = state_21762;
state_21762 = G__21773;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__16077__auto__ = function(state_21762){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__16077__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__16077__auto____1.call(this,state_21762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__16077__auto____0;
csasync$proc$delayer_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__16077__auto____1;
return csasync$proc$delayer_$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__))
})();
var state__16190__auto__ = (function (){var statearr_21771 = f__16189__auto__.call(null);
(statearr_21771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_21771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__))
);

return c__16188__auto__;
});

//# sourceMappingURL=proc.js.map