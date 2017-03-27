// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22588 = [];
var len__21467__auto___22651 = arguments.length;
var i__21468__auto___22652 = (0);
while(true){
if((i__21468__auto___22652 < len__21467__auto___22651)){
args22588.push((arguments[i__21468__auto___22652]));

var G__22653 = (i__21468__auto___22652 + (1));
i__21468__auto___22652 = G__22653;
continue;
} else {
}
break;
}

var G__22590 = args22588.length;
switch (G__22590) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22588.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22543__auto__){
return (function (){
var f__22544__auto__ = (function (){var switch__22522__auto__ = ((function (c__22543__auto__){
return (function (state_22604){
var state_val_22605 = (state_22604[(1)]);
if((state_val_22605 === (1))){
var state_22604__$1 = state_22604;
var statearr_22606_22655 = state_22604__$1;
(statearr_22606_22655[(2)] = null);

(statearr_22606_22655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (2))){
var state_22604__$1 = state_22604;
var statearr_22607_22656 = state_22604__$1;
(statearr_22607_22656[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (3))){
var inst_22602 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22604__$1,inst_22602);
} else {
if((state_val_22605 === (4))){
var inst_22593 = func.call(null);
var inst_22594 = cljs.core.async.timeout.call(null,time_out);
var state_22604__$1 = (function (){var statearr_22609 = state_22604;
(statearr_22609[(7)] = inst_22593);

return statearr_22609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22604__$1,(7),inst_22594);
} else {
if((state_val_22605 === (5))){
var state_22604__$1 = state_22604;
var statearr_22610_22657 = state_22604__$1;
(statearr_22610_22657[(2)] = null);

(statearr_22610_22657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (6))){
var inst_22600 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
var statearr_22611_22658 = state_22604__$1;
(statearr_22611_22658[(2)] = inst_22600);

(statearr_22611_22658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (7))){
var inst_22596 = (state_22604[(2)]);
var state_22604__$1 = (function (){var statearr_22612 = state_22604;
(statearr_22612[(8)] = inst_22596);

return statearr_22612;
})();
var statearr_22613_22659 = state_22604__$1;
(statearr_22613_22659[(2)] = null);

(statearr_22613_22659[(1)] = (2));


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
});})(c__22543__auto__))
;
return ((function (switch__22522__auto__,c__22543__auto__){
return (function() {
var csasync$proc$state_machine__22523__auto__ = null;
var csasync$proc$state_machine__22523__auto____0 = (function (){
var statearr_22617 = [null,null,null,null,null,null,null,null,null];
(statearr_22617[(0)] = csasync$proc$state_machine__22523__auto__);

(statearr_22617[(1)] = (1));

return statearr_22617;
});
var csasync$proc$state_machine__22523__auto____1 = (function (state_22604){
while(true){
var ret_value__22524__auto__ = (function (){try{while(true){
var result__22525__auto__ = switch__22522__auto__.call(null,state_22604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22525__auto__;
}
break;
}
}catch (e22618){if((e22618 instanceof Object)){
var ex__22526__auto__ = e22618;
var statearr_22619_22660 = state_22604;
(statearr_22619_22660[(5)] = ex__22526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22661 = state_22604;
state_22604 = G__22661;
continue;
} else {
return ret_value__22524__auto__;
}
break;
}
});
csasync$proc$state_machine__22523__auto__ = function(state_22604){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22523__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22523__auto____1.call(this,state_22604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22523__auto____0;
csasync$proc$state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22523__auto____1;
return csasync$proc$state_machine__22523__auto__;
})()
;})(switch__22522__auto__,c__22543__auto__))
})();
var state__22545__auto__ = (function (){var statearr_22620 = f__22544__auto__.call(null);
(statearr_22620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22543__auto__);

return statearr_22620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22545__auto__);
});})(c__22543__auto__))
);

return c__22543__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22543__auto__){
return (function (){
var f__22544__auto__ = (function (){var switch__22522__auto__ = ((function (c__22543__auto__){
return (function (state_22634){
var state_val_22635 = (state_22634[(1)]);
if((state_val_22635 === (1))){
var state_22634__$1 = state_22634;
var statearr_22636_22662 = state_22634__$1;
(statearr_22636_22662[(2)] = null);

(statearr_22636_22662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22635 === (2))){
var state_22634__$1 = state_22634;
var statearr_22637_22663 = state_22634__$1;
(statearr_22637_22663[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22635 === (3))){
var inst_22632 = (state_22634[(2)]);
var state_22634__$1 = state_22634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22634__$1,inst_22632);
} else {
if((state_val_22635 === (4))){
var inst_22623 = func.call(null,param);
var inst_22624 = cljs.core.async.timeout.call(null,time_out);
var state_22634__$1 = (function (){var statearr_22639 = state_22634;
(statearr_22639[(7)] = inst_22623);

return statearr_22639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22634__$1,(7),inst_22624);
} else {
if((state_val_22635 === (5))){
var state_22634__$1 = state_22634;
var statearr_22640_22664 = state_22634__$1;
(statearr_22640_22664[(2)] = null);

(statearr_22640_22664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22635 === (6))){
var inst_22630 = (state_22634[(2)]);
var state_22634__$1 = state_22634;
var statearr_22641_22665 = state_22634__$1;
(statearr_22641_22665[(2)] = inst_22630);

(statearr_22641_22665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22635 === (7))){
var inst_22626 = (state_22634[(2)]);
var state_22634__$1 = (function (){var statearr_22642 = state_22634;
(statearr_22642[(8)] = inst_22626);

return statearr_22642;
})();
var statearr_22643_22666 = state_22634__$1;
(statearr_22643_22666[(2)] = null);

(statearr_22643_22666[(1)] = (2));


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
});})(c__22543__auto__))
;
return ((function (switch__22522__auto__,c__22543__auto__){
return (function() {
var csasync$proc$state_machine__22523__auto__ = null;
var csasync$proc$state_machine__22523__auto____0 = (function (){
var statearr_22647 = [null,null,null,null,null,null,null,null,null];
(statearr_22647[(0)] = csasync$proc$state_machine__22523__auto__);

(statearr_22647[(1)] = (1));

return statearr_22647;
});
var csasync$proc$state_machine__22523__auto____1 = (function (state_22634){
while(true){
var ret_value__22524__auto__ = (function (){try{while(true){
var result__22525__auto__ = switch__22522__auto__.call(null,state_22634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22525__auto__;
}
break;
}
}catch (e22648){if((e22648 instanceof Object)){
var ex__22526__auto__ = e22648;
var statearr_22649_22667 = state_22634;
(statearr_22649_22667[(5)] = ex__22526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22668 = state_22634;
state_22634 = G__22668;
continue;
} else {
return ret_value__22524__auto__;
}
break;
}
});
csasync$proc$state_machine__22523__auto__ = function(state_22634){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22523__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22523__auto____1.call(this,state_22634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22523__auto____0;
csasync$proc$state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22523__auto____1;
return csasync$proc$state_machine__22523__auto__;
})()
;})(switch__22522__auto__,c__22543__auto__))
})();
var state__22545__auto__ = (function (){var statearr_22650 = f__22544__auto__.call(null);
(statearr_22650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22543__auto__);

return statearr_22650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22545__auto__);
});})(c__22543__auto__))
);

return c__22543__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22543__auto___22753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22543__auto___22753){
return (function (){
var f__22544__auto__ = (function (){var switch__22522__auto__ = ((function (c__22543__auto___22753){
return (function (state_22731){
var state_val_22732 = (state_22731[(1)]);
if((state_val_22732 === (7))){
var inst_22720 = cljs.core.async.timeout.call(null,time_out);
var state_22731__$1 = state_22731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22731__$1,(10),inst_22720);
} else {
if((state_val_22732 === (1))){
var state_22731__$1 = state_22731;
var statearr_22733_22754 = state_22731__$1;
(statearr_22733_22754[(2)] = null);

(statearr_22733_22754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (4))){
var inst_22715 = proc_fn.call(null);
var state_22731__$1 = state_22731;
var statearr_22734_22755 = state_22731__$1;
(statearr_22734_22755[(2)] = inst_22715);

(statearr_22734_22755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (6))){
var inst_22718 = (state_22731[(2)]);
var state_22731__$1 = state_22731;
if(cljs.core.truth_(inst_22718)){
var statearr_22735_22756 = state_22731__$1;
(statearr_22735_22756[(1)] = (7));

} else {
var statearr_22736_22757 = state_22731__$1;
(statearr_22736_22757[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (3))){
var inst_22728 = (state_22731[(2)]);
var inst_22729 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_22731__$1 = (function (){var statearr_22737 = state_22731;
(statearr_22737[(7)] = inst_22728);

return statearr_22737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22731__$1,inst_22729);
} else {
if((state_val_22732 === (2))){
var inst_22713 = (state_22731[(8)]);
var inst_22712 = cljs.core.deref.call(null,status);
var inst_22713__$1 = cljs.core._EQ_.call(null,inst_22712,"RUN");
var state_22731__$1 = (function (){var statearr_22738 = state_22731;
(statearr_22738[(8)] = inst_22713__$1);

return statearr_22738;
})();
if(inst_22713__$1){
var statearr_22739_22758 = state_22731__$1;
(statearr_22739_22758[(1)] = (4));

} else {
var statearr_22740_22759 = state_22731__$1;
(statearr_22740_22759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (9))){
var inst_22726 = (state_22731[(2)]);
var state_22731__$1 = state_22731;
var statearr_22741_22760 = state_22731__$1;
(statearr_22741_22760[(2)] = inst_22726);

(statearr_22741_22760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (5))){
var inst_22713 = (state_22731[(8)]);
var state_22731__$1 = state_22731;
var statearr_22742_22761 = state_22731__$1;
(statearr_22742_22761[(2)] = inst_22713);

(statearr_22742_22761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (10))){
var inst_22722 = (state_22731[(2)]);
var state_22731__$1 = (function (){var statearr_22743 = state_22731;
(statearr_22743[(9)] = inst_22722);

return statearr_22743;
})();
var statearr_22744_22762 = state_22731__$1;
(statearr_22744_22762[(2)] = null);

(statearr_22744_22762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (8))){
var state_22731__$1 = state_22731;
var statearr_22745_22763 = state_22731__$1;
(statearr_22745_22763[(2)] = null);

(statearr_22745_22763[(1)] = (9));


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
});})(c__22543__auto___22753))
;
return ((function (switch__22522__auto__,c__22543__auto___22753){
return (function() {
var csasync$proc$start_process_$_state_machine__22523__auto__ = null;
var csasync$proc$start_process_$_state_machine__22523__auto____0 = (function (){
var statearr_22749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22749[(0)] = csasync$proc$start_process_$_state_machine__22523__auto__);

(statearr_22749[(1)] = (1));

return statearr_22749;
});
var csasync$proc$start_process_$_state_machine__22523__auto____1 = (function (state_22731){
while(true){
var ret_value__22524__auto__ = (function (){try{while(true){
var result__22525__auto__ = switch__22522__auto__.call(null,state_22731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22525__auto__;
}
break;
}
}catch (e22750){if((e22750 instanceof Object)){
var ex__22526__auto__ = e22750;
var statearr_22751_22764 = state_22731;
(statearr_22751_22764[(5)] = ex__22526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22765 = state_22731;
state_22731 = G__22765;
continue;
} else {
return ret_value__22524__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22523__auto__ = function(state_22731){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22523__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22523__auto____1.call(this,state_22731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22523__auto____0;
csasync$proc$start_process_$_state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22523__auto____1;
return csasync$proc$start_process_$_state_machine__22523__auto__;
})()
;})(switch__22522__auto__,c__22543__auto___22753))
})();
var state__22545__auto__ = (function (){var statearr_22752 = f__22544__auto__.call(null);
(statearr_22752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22543__auto___22753);

return statearr_22752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22545__auto__);
});})(c__22543__auto___22753))
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
var c__22543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22543__auto__){
return (function (){
var f__22544__auto__ = (function (){var switch__22522__auto__ = ((function (c__22543__auto__){
return (function (state_22786){
var state_val_22787 = (state_22786[(1)]);
if((state_val_22787 === (1))){
var inst_22781 = cljs.core.async.timeout.call(null,time);
var state_22786__$1 = state_22786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22786__$1,(2),inst_22781);
} else {
if((state_val_22787 === (2))){
var inst_22783 = (state_22786[(2)]);
var inst_22784 = func.call(null);
var state_22786__$1 = (function (){var statearr_22788 = state_22786;
(statearr_22788[(7)] = inst_22783);

return statearr_22788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22786__$1,inst_22784);
} else {
return null;
}
}
});})(c__22543__auto__))
;
return ((function (switch__22522__auto__,c__22543__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22523__auto__ = null;
var csasync$proc$delayer_$_state_machine__22523__auto____0 = (function (){
var statearr_22792 = [null,null,null,null,null,null,null,null];
(statearr_22792[(0)] = csasync$proc$delayer_$_state_machine__22523__auto__);

(statearr_22792[(1)] = (1));

return statearr_22792;
});
var csasync$proc$delayer_$_state_machine__22523__auto____1 = (function (state_22786){
while(true){
var ret_value__22524__auto__ = (function (){try{while(true){
var result__22525__auto__ = switch__22522__auto__.call(null,state_22786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22525__auto__;
}
break;
}
}catch (e22793){if((e22793 instanceof Object)){
var ex__22526__auto__ = e22793;
var statearr_22794_22796 = state_22786;
(statearr_22794_22796[(5)] = ex__22526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22797 = state_22786;
state_22786 = G__22797;
continue;
} else {
return ret_value__22524__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22523__auto__ = function(state_22786){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22523__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22523__auto____1.call(this,state_22786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22523__auto____0;
csasync$proc$delayer_$_state_machine__22523__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22523__auto____1;
return csasync$proc$delayer_$_state_machine__22523__auto__;
})()
;})(switch__22522__auto__,c__22543__auto__))
})();
var state__22545__auto__ = (function (){var statearr_22795 = f__22544__auto__.call(null);
(statearr_22795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22543__auto__);

return statearr_22795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22545__auto__);
});})(c__22543__auto__))
);

return c__22543__auto__;
});

//# sourceMappingURL=proc.js.map