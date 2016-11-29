// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args20552 = [];
var len__9613__auto___20615 = arguments.length;
var i__9614__auto___20616 = (0);
while(true){
if((i__9614__auto___20616 < len__9613__auto___20615)){
args20552.push((arguments[i__9614__auto___20616]));

var G__20617 = (i__9614__auto___20616 + (1));
i__9614__auto___20616 = G__20617;
continue;
} else {
}
break;
}

var G__20554 = args20552.length;
switch (G__20554) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20552.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__){
return (function (state_20568){
var state_val_20569 = (state_20568[(1)]);
if((state_val_20569 === (1))){
var state_20568__$1 = state_20568;
var statearr_20570_20619 = state_20568__$1;
(statearr_20570_20619[(2)] = null);

(statearr_20570_20619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (2))){
var state_20568__$1 = state_20568;
var statearr_20571_20620 = state_20568__$1;
(statearr_20571_20620[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (3))){
var inst_20566 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20568__$1,inst_20566);
} else {
if((state_val_20569 === (4))){
var inst_20557 = func.call(null);
var inst_20558 = cljs.core.async.timeout.call(null,time_out);
var state_20568__$1 = (function (){var statearr_20573 = state_20568;
(statearr_20573[(7)] = inst_20557);

return statearr_20573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20568__$1,(7),inst_20558);
} else {
if((state_val_20569 === (5))){
var state_20568__$1 = state_20568;
var statearr_20574_20621 = state_20568__$1;
(statearr_20574_20621[(2)] = null);

(statearr_20574_20621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (6))){
var inst_20564 = (state_20568[(2)]);
var state_20568__$1 = state_20568;
var statearr_20575_20622 = state_20568__$1;
(statearr_20575_20622[(2)] = inst_20564);

(statearr_20575_20622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20569 === (7))){
var inst_20560 = (state_20568[(2)]);
var state_20568__$1 = (function (){var statearr_20576 = state_20568;
(statearr_20576[(8)] = inst_20560);

return statearr_20576;
})();
var statearr_20577_20623 = state_20568__$1;
(statearr_20577_20623[(2)] = null);

(statearr_20577_20623[(1)] = (2));


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
});})(c__15259__auto__))
;
return ((function (switch__15147__auto__,c__15259__auto__){
return (function() {
var csasync$proc$state_machine__15148__auto__ = null;
var csasync$proc$state_machine__15148__auto____0 = (function (){
var statearr_20581 = [null,null,null,null,null,null,null,null,null];
(statearr_20581[(0)] = csasync$proc$state_machine__15148__auto__);

(statearr_20581[(1)] = (1));

return statearr_20581;
});
var csasync$proc$state_machine__15148__auto____1 = (function (state_20568){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_20568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e20582){if((e20582 instanceof Object)){
var ex__15151__auto__ = e20582;
var statearr_20583_20624 = state_20568;
(statearr_20583_20624[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20625 = state_20568;
state_20568 = G__20625;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
csasync$proc$state_machine__15148__auto__ = function(state_20568){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__15148__auto____0.call(this);
case 1:
return csasync$proc$state_machine__15148__auto____1.call(this,state_20568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__15148__auto____0;
csasync$proc$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__15148__auto____1;
return csasync$proc$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__))
})();
var state__15261__auto__ = (function (){var statearr_20584 = f__15260__auto__.call(null);
(statearr_20584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_20584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__))
);

return c__15259__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__){
return (function (state_20598){
var state_val_20599 = (state_20598[(1)]);
if((state_val_20599 === (1))){
var state_20598__$1 = state_20598;
var statearr_20600_20626 = state_20598__$1;
(statearr_20600_20626[(2)] = null);

(statearr_20600_20626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (2))){
var state_20598__$1 = state_20598;
var statearr_20601_20627 = state_20598__$1;
(statearr_20601_20627[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (3))){
var inst_20596 = (state_20598[(2)]);
var state_20598__$1 = state_20598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20598__$1,inst_20596);
} else {
if((state_val_20599 === (4))){
var inst_20587 = func.call(null,param);
var inst_20588 = cljs.core.async.timeout.call(null,time_out);
var state_20598__$1 = (function (){var statearr_20603 = state_20598;
(statearr_20603[(7)] = inst_20587);

return statearr_20603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20598__$1,(7),inst_20588);
} else {
if((state_val_20599 === (5))){
var state_20598__$1 = state_20598;
var statearr_20604_20628 = state_20598__$1;
(statearr_20604_20628[(2)] = null);

(statearr_20604_20628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (6))){
var inst_20594 = (state_20598[(2)]);
var state_20598__$1 = state_20598;
var statearr_20605_20629 = state_20598__$1;
(statearr_20605_20629[(2)] = inst_20594);

(statearr_20605_20629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (7))){
var inst_20590 = (state_20598[(2)]);
var state_20598__$1 = (function (){var statearr_20606 = state_20598;
(statearr_20606[(8)] = inst_20590);

return statearr_20606;
})();
var statearr_20607_20630 = state_20598__$1;
(statearr_20607_20630[(2)] = null);

(statearr_20607_20630[(1)] = (2));


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
});})(c__15259__auto__))
;
return ((function (switch__15147__auto__,c__15259__auto__){
return (function() {
var csasync$proc$state_machine__15148__auto__ = null;
var csasync$proc$state_machine__15148__auto____0 = (function (){
var statearr_20611 = [null,null,null,null,null,null,null,null,null];
(statearr_20611[(0)] = csasync$proc$state_machine__15148__auto__);

(statearr_20611[(1)] = (1));

return statearr_20611;
});
var csasync$proc$state_machine__15148__auto____1 = (function (state_20598){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_20598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e20612){if((e20612 instanceof Object)){
var ex__15151__auto__ = e20612;
var statearr_20613_20631 = state_20598;
(statearr_20613_20631[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20632 = state_20598;
state_20598 = G__20632;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
csasync$proc$state_machine__15148__auto__ = function(state_20598){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__15148__auto____0.call(this);
case 1:
return csasync$proc$state_machine__15148__auto____1.call(this,state_20598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__15148__auto____0;
csasync$proc$state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__15148__auto____1;
return csasync$proc$state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__))
})();
var state__15261__auto__ = (function (){var statearr_20614 = f__15260__auto__.call(null);
(statearr_20614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_20614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__))
);

return c__15259__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__15259__auto___20717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto___20717){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto___20717){
return (function (state_20695){
var state_val_20696 = (state_20695[(1)]);
if((state_val_20696 === (7))){
var inst_20684 = cljs.core.async.timeout.call(null,time_out);
var state_20695__$1 = state_20695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20695__$1,(10),inst_20684);
} else {
if((state_val_20696 === (1))){
var state_20695__$1 = state_20695;
var statearr_20697_20718 = state_20695__$1;
(statearr_20697_20718[(2)] = null);

(statearr_20697_20718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (4))){
var inst_20679 = proc_fn.call(null);
var state_20695__$1 = state_20695;
var statearr_20698_20719 = state_20695__$1;
(statearr_20698_20719[(2)] = inst_20679);

(statearr_20698_20719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (6))){
var inst_20682 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20682)){
var statearr_20699_20720 = state_20695__$1;
(statearr_20699_20720[(1)] = (7));

} else {
var statearr_20700_20721 = state_20695__$1;
(statearr_20700_20721[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (3))){
var inst_20692 = (state_20695[(2)]);
var inst_20693 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_20695__$1 = (function (){var statearr_20701 = state_20695;
(statearr_20701[(7)] = inst_20692);

return statearr_20701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20695__$1,inst_20693);
} else {
if((state_val_20696 === (2))){
var inst_20677 = (state_20695[(8)]);
var inst_20676 = cljs.core.deref.call(null,status);
var inst_20677__$1 = cljs.core._EQ_.call(null,inst_20676,"RUN");
var state_20695__$1 = (function (){var statearr_20702 = state_20695;
(statearr_20702[(8)] = inst_20677__$1);

return statearr_20702;
})();
if(inst_20677__$1){
var statearr_20703_20722 = state_20695__$1;
(statearr_20703_20722[(1)] = (4));

} else {
var statearr_20704_20723 = state_20695__$1;
(statearr_20704_20723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (9))){
var inst_20690 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20705_20724 = state_20695__$1;
(statearr_20705_20724[(2)] = inst_20690);

(statearr_20705_20724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (5))){
var inst_20677 = (state_20695[(8)]);
var state_20695__$1 = state_20695;
var statearr_20706_20725 = state_20695__$1;
(statearr_20706_20725[(2)] = inst_20677);

(statearr_20706_20725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (10))){
var inst_20686 = (state_20695[(2)]);
var state_20695__$1 = (function (){var statearr_20707 = state_20695;
(statearr_20707[(9)] = inst_20686);

return statearr_20707;
})();
var statearr_20708_20726 = state_20695__$1;
(statearr_20708_20726[(2)] = null);

(statearr_20708_20726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (8))){
var state_20695__$1 = state_20695;
var statearr_20709_20727 = state_20695__$1;
(statearr_20709_20727[(2)] = null);

(statearr_20709_20727[(1)] = (9));


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
});})(c__15259__auto___20717))
;
return ((function (switch__15147__auto__,c__15259__auto___20717){
return (function() {
var csasync$proc$start_process_$_state_machine__15148__auto__ = null;
var csasync$proc$start_process_$_state_machine__15148__auto____0 = (function (){
var statearr_20713 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20713[(0)] = csasync$proc$start_process_$_state_machine__15148__auto__);

(statearr_20713[(1)] = (1));

return statearr_20713;
});
var csasync$proc$start_process_$_state_machine__15148__auto____1 = (function (state_20695){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_20695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e20714){if((e20714 instanceof Object)){
var ex__15151__auto__ = e20714;
var statearr_20715_20728 = state_20695;
(statearr_20715_20728[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20729 = state_20695;
state_20695 = G__20729;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__15148__auto__ = function(state_20695){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__15148__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__15148__auto____1.call(this,state_20695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__15148__auto____0;
csasync$proc$start_process_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__15148__auto____1;
return csasync$proc$start_process_$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto___20717))
})();
var state__15261__auto__ = (function (){var statearr_20716 = f__15260__auto__.call(null);
(statearr_20716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto___20717);

return statearr_20716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto___20717))
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
var c__15259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15259__auto__){
return (function (){
var f__15260__auto__ = (function (){var switch__15147__auto__ = ((function (c__15259__auto__){
return (function (state_20750){
var state_val_20751 = (state_20750[(1)]);
if((state_val_20751 === (1))){
var inst_20745 = cljs.core.async.timeout.call(null,time);
var state_20750__$1 = state_20750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20750__$1,(2),inst_20745);
} else {
if((state_val_20751 === (2))){
var inst_20747 = (state_20750[(2)]);
var inst_20748 = func.call(null);
var state_20750__$1 = (function (){var statearr_20752 = state_20750;
(statearr_20752[(7)] = inst_20747);

return statearr_20752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20750__$1,inst_20748);
} else {
return null;
}
}
});})(c__15259__auto__))
;
return ((function (switch__15147__auto__,c__15259__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__15148__auto__ = null;
var csasync$proc$delayer_$_state_machine__15148__auto____0 = (function (){
var statearr_20756 = [null,null,null,null,null,null,null,null];
(statearr_20756[(0)] = csasync$proc$delayer_$_state_machine__15148__auto__);

(statearr_20756[(1)] = (1));

return statearr_20756;
});
var csasync$proc$delayer_$_state_machine__15148__auto____1 = (function (state_20750){
while(true){
var ret_value__15149__auto__ = (function (){try{while(true){
var result__15150__auto__ = switch__15147__auto__.call(null,state_20750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15150__auto__;
}
break;
}
}catch (e20757){if((e20757 instanceof Object)){
var ex__15151__auto__ = e20757;
var statearr_20758_20760 = state_20750;
(statearr_20758_20760[(5)] = ex__15151__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20761 = state_20750;
state_20750 = G__20761;
continue;
} else {
return ret_value__15149__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__15148__auto__ = function(state_20750){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__15148__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__15148__auto____1.call(this,state_20750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__15148__auto____0;
csasync$proc$delayer_$_state_machine__15148__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__15148__auto____1;
return csasync$proc$delayer_$_state_machine__15148__auto__;
})()
;})(switch__15147__auto__,c__15259__auto__))
})();
var state__15261__auto__ = (function (){var statearr_20759 = f__15260__auto__.call(null);
(statearr_20759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15259__auto__);

return statearr_20759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15261__auto__);
});})(c__15259__auto__))
);

return c__15259__auto__;
});

//# sourceMappingURL=proc.js.map