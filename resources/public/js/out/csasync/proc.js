// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22622 = [];
var len__21501__auto___22685 = arguments.length;
var i__21502__auto___22686 = (0);
while(true){
if((i__21502__auto___22686 < len__21501__auto___22685)){
args22622.push((arguments[i__21502__auto___22686]));

var G__22687 = (i__21502__auto___22686 + (1));
i__21502__auto___22686 = G__22687;
continue;
} else {
}
break;
}

var G__22624 = args22622.length;
switch (G__22624) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22622.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto__){
return (function (state_22638){
var state_val_22639 = (state_22638[(1)]);
if((state_val_22639 === (1))){
var state_22638__$1 = state_22638;
var statearr_22640_22689 = state_22638__$1;
(statearr_22640_22689[(2)] = null);

(statearr_22640_22689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22639 === (2))){
var state_22638__$1 = state_22638;
var statearr_22641_22690 = state_22638__$1;
(statearr_22641_22690[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22639 === (3))){
var inst_22636 = (state_22638[(2)]);
var state_22638__$1 = state_22638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22638__$1,inst_22636);
} else {
if((state_val_22639 === (4))){
var inst_22627 = func.call(null);
var inst_22628 = cljs.core.async.timeout.call(null,time_out);
var state_22638__$1 = (function (){var statearr_22643 = state_22638;
(statearr_22643[(7)] = inst_22627);

return statearr_22643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22638__$1,(7),inst_22628);
} else {
if((state_val_22639 === (5))){
var state_22638__$1 = state_22638;
var statearr_22644_22691 = state_22638__$1;
(statearr_22644_22691[(2)] = null);

(statearr_22644_22691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22639 === (6))){
var inst_22634 = (state_22638[(2)]);
var state_22638__$1 = state_22638;
var statearr_22645_22692 = state_22638__$1;
(statearr_22645_22692[(2)] = inst_22634);

(statearr_22645_22692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22639 === (7))){
var inst_22630 = (state_22638[(2)]);
var state_22638__$1 = (function (){var statearr_22646 = state_22638;
(statearr_22646[(8)] = inst_22630);

return statearr_22646;
})();
var statearr_22647_22693 = state_22638__$1;
(statearr_22647_22693[(2)] = null);

(statearr_22647_22693[(1)] = (2));


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
});})(c__22577__auto__))
;
return ((function (switch__22556__auto__,c__22577__auto__){
return (function() {
var csasync$proc$state_machine__22557__auto__ = null;
var csasync$proc$state_machine__22557__auto____0 = (function (){
var statearr_22651 = [null,null,null,null,null,null,null,null,null];
(statearr_22651[(0)] = csasync$proc$state_machine__22557__auto__);

(statearr_22651[(1)] = (1));

return statearr_22651;
});
var csasync$proc$state_machine__22557__auto____1 = (function (state_22638){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_22638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e22652){if((e22652 instanceof Object)){
var ex__22560__auto__ = e22652;
var statearr_22653_22694 = state_22638;
(statearr_22653_22694[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22695 = state_22638;
state_22638 = G__22695;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$state_machine__22557__auto__ = function(state_22638){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22557__auto____1.call(this,state_22638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22557__auto____0;
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22557__auto____1;
return csasync$proc$state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto__))
})();
var state__22579__auto__ = (function (){var statearr_22654 = f__22578__auto__.call(null);
(statearr_22654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);

return statearr_22654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);

return c__22577__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto__){
return (function (state_22668){
var state_val_22669 = (state_22668[(1)]);
if((state_val_22669 === (1))){
var state_22668__$1 = state_22668;
var statearr_22670_22696 = state_22668__$1;
(statearr_22670_22696[(2)] = null);

(statearr_22670_22696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (2))){
var state_22668__$1 = state_22668;
var statearr_22671_22697 = state_22668__$1;
(statearr_22671_22697[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (3))){
var inst_22666 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22668__$1,inst_22666);
} else {
if((state_val_22669 === (4))){
var inst_22657 = func.call(null,param);
var inst_22658 = cljs.core.async.timeout.call(null,time_out);
var state_22668__$1 = (function (){var statearr_22673 = state_22668;
(statearr_22673[(7)] = inst_22657);

return statearr_22673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22668__$1,(7),inst_22658);
} else {
if((state_val_22669 === (5))){
var state_22668__$1 = state_22668;
var statearr_22674_22698 = state_22668__$1;
(statearr_22674_22698[(2)] = null);

(statearr_22674_22698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (6))){
var inst_22664 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22675_22699 = state_22668__$1;
(statearr_22675_22699[(2)] = inst_22664);

(statearr_22675_22699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (7))){
var inst_22660 = (state_22668[(2)]);
var state_22668__$1 = (function (){var statearr_22676 = state_22668;
(statearr_22676[(8)] = inst_22660);

return statearr_22676;
})();
var statearr_22677_22700 = state_22668__$1;
(statearr_22677_22700[(2)] = null);

(statearr_22677_22700[(1)] = (2));


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
});})(c__22577__auto__))
;
return ((function (switch__22556__auto__,c__22577__auto__){
return (function() {
var csasync$proc$state_machine__22557__auto__ = null;
var csasync$proc$state_machine__22557__auto____0 = (function (){
var statearr_22681 = [null,null,null,null,null,null,null,null,null];
(statearr_22681[(0)] = csasync$proc$state_machine__22557__auto__);

(statearr_22681[(1)] = (1));

return statearr_22681;
});
var csasync$proc$state_machine__22557__auto____1 = (function (state_22668){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_22668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e22682){if((e22682 instanceof Object)){
var ex__22560__auto__ = e22682;
var statearr_22683_22701 = state_22668;
(statearr_22683_22701[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22702 = state_22668;
state_22668 = G__22702;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$state_machine__22557__auto__ = function(state_22668){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22557__auto____1.call(this,state_22668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22557__auto____0;
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22557__auto____1;
return csasync$proc$state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto__))
})();
var state__22579__auto__ = (function (){var statearr_22684 = f__22578__auto__.call(null);
(statearr_22684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);

return statearr_22684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);

return c__22577__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22577__auto___22787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___22787){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto___22787){
return (function (state_22765){
var state_val_22766 = (state_22765[(1)]);
if((state_val_22766 === (7))){
var inst_22754 = cljs.core.async.timeout.call(null,time_out);
var state_22765__$1 = state_22765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22765__$1,(10),inst_22754);
} else {
if((state_val_22766 === (1))){
var state_22765__$1 = state_22765;
var statearr_22767_22788 = state_22765__$1;
(statearr_22767_22788[(2)] = null);

(statearr_22767_22788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (4))){
var inst_22749 = proc_fn.call(null);
var state_22765__$1 = state_22765;
var statearr_22768_22789 = state_22765__$1;
(statearr_22768_22789[(2)] = inst_22749);

(statearr_22768_22789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (6))){
var inst_22752 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
if(cljs.core.truth_(inst_22752)){
var statearr_22769_22790 = state_22765__$1;
(statearr_22769_22790[(1)] = (7));

} else {
var statearr_22770_22791 = state_22765__$1;
(statearr_22770_22791[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (3))){
var inst_22762 = (state_22765[(2)]);
var inst_22763 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_22765__$1 = (function (){var statearr_22771 = state_22765;
(statearr_22771[(7)] = inst_22762);

return statearr_22771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22765__$1,inst_22763);
} else {
if((state_val_22766 === (2))){
var inst_22747 = (state_22765[(8)]);
var inst_22746 = cljs.core.deref.call(null,status);
var inst_22747__$1 = cljs.core._EQ_.call(null,inst_22746,"RUN");
var state_22765__$1 = (function (){var statearr_22772 = state_22765;
(statearr_22772[(8)] = inst_22747__$1);

return statearr_22772;
})();
if(inst_22747__$1){
var statearr_22773_22792 = state_22765__$1;
(statearr_22773_22792[(1)] = (4));

} else {
var statearr_22774_22793 = state_22765__$1;
(statearr_22774_22793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (9))){
var inst_22760 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
var statearr_22775_22794 = state_22765__$1;
(statearr_22775_22794[(2)] = inst_22760);

(statearr_22775_22794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (5))){
var inst_22747 = (state_22765[(8)]);
var state_22765__$1 = state_22765;
var statearr_22776_22795 = state_22765__$1;
(statearr_22776_22795[(2)] = inst_22747);

(statearr_22776_22795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (10))){
var inst_22756 = (state_22765[(2)]);
var state_22765__$1 = (function (){var statearr_22777 = state_22765;
(statearr_22777[(9)] = inst_22756);

return statearr_22777;
})();
var statearr_22778_22796 = state_22765__$1;
(statearr_22778_22796[(2)] = null);

(statearr_22778_22796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (8))){
var state_22765__$1 = state_22765;
var statearr_22779_22797 = state_22765__$1;
(statearr_22779_22797[(2)] = null);

(statearr_22779_22797[(1)] = (9));


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
});})(c__22577__auto___22787))
;
return ((function (switch__22556__auto__,c__22577__auto___22787){
return (function() {
var csasync$proc$start_process_$_state_machine__22557__auto__ = null;
var csasync$proc$start_process_$_state_machine__22557__auto____0 = (function (){
var statearr_22783 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22783[(0)] = csasync$proc$start_process_$_state_machine__22557__auto__);

(statearr_22783[(1)] = (1));

return statearr_22783;
});
var csasync$proc$start_process_$_state_machine__22557__auto____1 = (function (state_22765){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_22765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object)){
var ex__22560__auto__ = e22784;
var statearr_22785_22798 = state_22765;
(statearr_22785_22798[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22799 = state_22765;
state_22765 = G__22799;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22557__auto__ = function(state_22765){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22557__auto____1.call(this,state_22765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22557__auto____0;
csasync$proc$start_process_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22557__auto____1;
return csasync$proc$start_process_$_state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto___22787))
})();
var state__22579__auto__ = (function (){var statearr_22786 = f__22578__auto__.call(null);
(statearr_22786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___22787);

return statearr_22786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___22787))
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
var c__22577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto__){
return (function (state_22820){
var state_val_22821 = (state_22820[(1)]);
if((state_val_22821 === (1))){
var inst_22815 = cljs.core.async.timeout.call(null,time);
var state_22820__$1 = state_22820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22820__$1,(2),inst_22815);
} else {
if((state_val_22821 === (2))){
var inst_22817 = (state_22820[(2)]);
var inst_22818 = func.call(null);
var state_22820__$1 = (function (){var statearr_22822 = state_22820;
(statearr_22822[(7)] = inst_22817);

return statearr_22822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22820__$1,inst_22818);
} else {
return null;
}
}
});})(c__22577__auto__))
;
return ((function (switch__22556__auto__,c__22577__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22557__auto__ = null;
var csasync$proc$delayer_$_state_machine__22557__auto____0 = (function (){
var statearr_22826 = [null,null,null,null,null,null,null,null];
(statearr_22826[(0)] = csasync$proc$delayer_$_state_machine__22557__auto__);

(statearr_22826[(1)] = (1));

return statearr_22826;
});
var csasync$proc$delayer_$_state_machine__22557__auto____1 = (function (state_22820){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_22820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e22827){if((e22827 instanceof Object)){
var ex__22560__auto__ = e22827;
var statearr_22828_22830 = state_22820;
(statearr_22828_22830[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22831 = state_22820;
state_22820 = G__22831;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22557__auto__ = function(state_22820){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22557__auto____1.call(this,state_22820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22557__auto____0;
csasync$proc$delayer_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22557__auto____1;
return csasync$proc$delayer_$_state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto__))
})();
var state__22579__auto__ = (function (){var statearr_22829 = f__22578__auto__.call(null);
(statearr_22829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);

return statearr_22829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);

return c__22577__auto__;
});

//# sourceMappingURL=proc.js.map