// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args39568 = [];
var len__9613__auto___39631 = arguments.length;
var i__9614__auto___39632 = (0);
while(true){
if((i__9614__auto___39632 < len__9613__auto___39631)){
args39568.push((arguments[i__9614__auto___39632]));

var G__39633 = (i__9614__auto___39632 + (1));
i__9614__auto___39632 = G__39633;
continue;
} else {
}
break;
}

var G__39570 = args39568.length;
switch (G__39570) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39568.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_39584){
var state_val_39585 = (state_39584[(1)]);
if((state_val_39585 === (1))){
var state_39584__$1 = state_39584;
var statearr_39586_39635 = state_39584__$1;
(statearr_39586_39635[(2)] = null);

(statearr_39586_39635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39585 === (2))){
var state_39584__$1 = state_39584;
var statearr_39587_39636 = state_39584__$1;
(statearr_39587_39636[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39585 === (3))){
var inst_39582 = (state_39584[(2)]);
var state_39584__$1 = state_39584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39584__$1,inst_39582);
} else {
if((state_val_39585 === (4))){
var inst_39573 = func.call(null);
var inst_39574 = cljs.core.async.timeout.call(null,time_out);
var state_39584__$1 = (function (){var statearr_39589 = state_39584;
(statearr_39589[(7)] = inst_39573);

return statearr_39589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39584__$1,(7),inst_39574);
} else {
if((state_val_39585 === (5))){
var state_39584__$1 = state_39584;
var statearr_39590_39637 = state_39584__$1;
(statearr_39590_39637[(2)] = null);

(statearr_39590_39637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39585 === (6))){
var inst_39580 = (state_39584[(2)]);
var state_39584__$1 = state_39584;
var statearr_39591_39638 = state_39584__$1;
(statearr_39591_39638[(2)] = inst_39580);

(statearr_39591_39638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39585 === (7))){
var inst_39576 = (state_39584[(2)]);
var state_39584__$1 = (function (){var statearr_39592 = state_39584;
(statearr_39592[(8)] = inst_39576);

return statearr_39592;
})();
var statearr_39593_39639 = state_39584__$1;
(statearr_39593_39639[(2)] = null);

(statearr_39593_39639[(1)] = (2));


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
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$state_machine__10889__auto__ = null;
var csasync$proc$state_machine__10889__auto____0 = (function (){
var statearr_39597 = [null,null,null,null,null,null,null,null,null];
(statearr_39597[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_39597[(1)] = (1));

return statearr_39597;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_39584){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_39584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e39598){if((e39598 instanceof Object)){
var ex__10892__auto__ = e39598;
var statearr_39599_39640 = state_39584;
(statearr_39599_39640[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39641 = state_39584;
state_39584 = G__39641;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_39584){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_39584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_39600 = f__10910__auto__.call(null);
(statearr_39600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_39600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_39614){
var state_val_39615 = (state_39614[(1)]);
if((state_val_39615 === (1))){
var state_39614__$1 = state_39614;
var statearr_39616_39642 = state_39614__$1;
(statearr_39616_39642[(2)] = null);

(statearr_39616_39642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39615 === (2))){
var state_39614__$1 = state_39614;
var statearr_39617_39643 = state_39614__$1;
(statearr_39617_39643[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39615 === (3))){
var inst_39612 = (state_39614[(2)]);
var state_39614__$1 = state_39614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39614__$1,inst_39612);
} else {
if((state_val_39615 === (4))){
var inst_39603 = func.call(null,param);
var inst_39604 = cljs.core.async.timeout.call(null,time_out);
var state_39614__$1 = (function (){var statearr_39619 = state_39614;
(statearr_39619[(7)] = inst_39603);

return statearr_39619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39614__$1,(7),inst_39604);
} else {
if((state_val_39615 === (5))){
var state_39614__$1 = state_39614;
var statearr_39620_39644 = state_39614__$1;
(statearr_39620_39644[(2)] = null);

(statearr_39620_39644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39615 === (6))){
var inst_39610 = (state_39614[(2)]);
var state_39614__$1 = state_39614;
var statearr_39621_39645 = state_39614__$1;
(statearr_39621_39645[(2)] = inst_39610);

(statearr_39621_39645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39615 === (7))){
var inst_39606 = (state_39614[(2)]);
var state_39614__$1 = (function (){var statearr_39622 = state_39614;
(statearr_39622[(8)] = inst_39606);

return statearr_39622;
})();
var statearr_39623_39646 = state_39614__$1;
(statearr_39623_39646[(2)] = null);

(statearr_39623_39646[(1)] = (2));


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
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$state_machine__10889__auto__ = null;
var csasync$proc$state_machine__10889__auto____0 = (function (){
var statearr_39627 = [null,null,null,null,null,null,null,null,null];
(statearr_39627[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_39627[(1)] = (1));

return statearr_39627;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_39614){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_39614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e39628){if((e39628 instanceof Object)){
var ex__10892__auto__ = e39628;
var statearr_39629_39647 = state_39614;
(statearr_39629_39647[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39648 = state_39614;
state_39614 = G__39648;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_39614){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_39614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_39630 = f__10910__auto__.call(null);
(statearr_39630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_39630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__10909__auto___39733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto___39733){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto___39733){
return (function (state_39711){
var state_val_39712 = (state_39711[(1)]);
if((state_val_39712 === (7))){
var inst_39700 = cljs.core.async.timeout.call(null,time_out);
var state_39711__$1 = state_39711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39711__$1,(10),inst_39700);
} else {
if((state_val_39712 === (1))){
var state_39711__$1 = state_39711;
var statearr_39713_39734 = state_39711__$1;
(statearr_39713_39734[(2)] = null);

(statearr_39713_39734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39712 === (4))){
var inst_39695 = proc_fn.call(null);
var state_39711__$1 = state_39711;
var statearr_39714_39735 = state_39711__$1;
(statearr_39714_39735[(2)] = inst_39695);

(statearr_39714_39735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39712 === (6))){
var inst_39698 = (state_39711[(2)]);
var state_39711__$1 = state_39711;
if(cljs.core.truth_(inst_39698)){
var statearr_39715_39736 = state_39711__$1;
(statearr_39715_39736[(1)] = (7));

} else {
var statearr_39716_39737 = state_39711__$1;
(statearr_39716_39737[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39712 === (3))){
var inst_39708 = (state_39711[(2)]);
var inst_39709 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_39711__$1 = (function (){var statearr_39717 = state_39711;
(statearr_39717[(7)] = inst_39708);

return statearr_39717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39711__$1,inst_39709);
} else {
if((state_val_39712 === (2))){
var inst_39693 = (state_39711[(8)]);
var inst_39692 = cljs.core.deref.call(null,status);
var inst_39693__$1 = cljs.core._EQ_.call(null,inst_39692,"RUN");
var state_39711__$1 = (function (){var statearr_39718 = state_39711;
(statearr_39718[(8)] = inst_39693__$1);

return statearr_39718;
})();
if(inst_39693__$1){
var statearr_39719_39738 = state_39711__$1;
(statearr_39719_39738[(1)] = (4));

} else {
var statearr_39720_39739 = state_39711__$1;
(statearr_39720_39739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39712 === (9))){
var inst_39706 = (state_39711[(2)]);
var state_39711__$1 = state_39711;
var statearr_39721_39740 = state_39711__$1;
(statearr_39721_39740[(2)] = inst_39706);

(statearr_39721_39740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39712 === (5))){
var inst_39693 = (state_39711[(8)]);
var state_39711__$1 = state_39711;
var statearr_39722_39741 = state_39711__$1;
(statearr_39722_39741[(2)] = inst_39693);

(statearr_39722_39741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39712 === (10))){
var inst_39702 = (state_39711[(2)]);
var state_39711__$1 = (function (){var statearr_39723 = state_39711;
(statearr_39723[(9)] = inst_39702);

return statearr_39723;
})();
var statearr_39724_39742 = state_39711__$1;
(statearr_39724_39742[(2)] = null);

(statearr_39724_39742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39712 === (8))){
var state_39711__$1 = state_39711;
var statearr_39725_39743 = state_39711__$1;
(statearr_39725_39743[(2)] = null);

(statearr_39725_39743[(1)] = (9));


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
});})(c__10909__auto___39733))
;
return ((function (switch__10888__auto__,c__10909__auto___39733){
return (function() {
var csasync$proc$start_process_$_state_machine__10889__auto__ = null;
var csasync$proc$start_process_$_state_machine__10889__auto____0 = (function (){
var statearr_39729 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39729[(0)] = csasync$proc$start_process_$_state_machine__10889__auto__);

(statearr_39729[(1)] = (1));

return statearr_39729;
});
var csasync$proc$start_process_$_state_machine__10889__auto____1 = (function (state_39711){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_39711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e39730){if((e39730 instanceof Object)){
var ex__10892__auto__ = e39730;
var statearr_39731_39744 = state_39711;
(statearr_39731_39744[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39745 = state_39711;
state_39711 = G__39745;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__10889__auto__ = function(state_39711){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__10889__auto____1.call(this,state_39711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__10889__auto____0;
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__10889__auto____1;
return csasync$proc$start_process_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto___39733))
})();
var state__10911__auto__ = (function (){var statearr_39732 = f__10910__auto__.call(null);
(statearr_39732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto___39733);

return statearr_39732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto___39733))
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
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_39766){
var state_val_39767 = (state_39766[(1)]);
if((state_val_39767 === (1))){
var inst_39761 = cljs.core.async.timeout.call(null,time);
var state_39766__$1 = state_39766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39766__$1,(2),inst_39761);
} else {
if((state_val_39767 === (2))){
var inst_39763 = (state_39766[(2)]);
var inst_39764 = func.call(null);
var state_39766__$1 = (function (){var statearr_39768 = state_39766;
(statearr_39768[(7)] = inst_39763);

return statearr_39768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39766__$1,inst_39764);
} else {
return null;
}
}
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__10889__auto__ = null;
var csasync$proc$delayer_$_state_machine__10889__auto____0 = (function (){
var statearr_39772 = [null,null,null,null,null,null,null,null];
(statearr_39772[(0)] = csasync$proc$delayer_$_state_machine__10889__auto__);

(statearr_39772[(1)] = (1));

return statearr_39772;
});
var csasync$proc$delayer_$_state_machine__10889__auto____1 = (function (state_39766){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_39766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e39773){if((e39773 instanceof Object)){
var ex__10892__auto__ = e39773;
var statearr_39774_39776 = state_39766;
(statearr_39774_39776[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39777 = state_39766;
state_39766 = G__39777;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__10889__auto__ = function(state_39766){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__10889__auto____1.call(this,state_39766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__10889__auto____0;
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__10889__auto____1;
return csasync$proc$delayer_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_39775 = f__10910__auto__.call(null);
(statearr_39775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_39775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

//# sourceMappingURL=proc.js.map