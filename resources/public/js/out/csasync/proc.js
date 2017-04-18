// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22625 = [];
var len__21504__auto___22688 = arguments.length;
var i__21505__auto___22689 = (0);
while(true){
if((i__21505__auto___22689 < len__21504__auto___22688)){
args22625.push((arguments[i__21505__auto___22689]));

var G__22690 = (i__21505__auto___22689 + (1));
i__21505__auto___22689 = G__22690;
continue;
} else {
}
break;
}

var G__22627 = args22625.length;
switch (G__22627) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22625.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22580__auto__){
return (function (){
var f__22581__auto__ = (function (){var switch__22559__auto__ = ((function (c__22580__auto__){
return (function (state_22641){
var state_val_22642 = (state_22641[(1)]);
if((state_val_22642 === (1))){
var state_22641__$1 = state_22641;
var statearr_22643_22692 = state_22641__$1;
(statearr_22643_22692[(2)] = null);

(statearr_22643_22692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (2))){
var state_22641__$1 = state_22641;
var statearr_22644_22693 = state_22641__$1;
(statearr_22644_22693[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (3))){
var inst_22639 = (state_22641[(2)]);
var state_22641__$1 = state_22641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22641__$1,inst_22639);
} else {
if((state_val_22642 === (4))){
var inst_22630 = func.call(null);
var inst_22631 = cljs.core.async.timeout.call(null,time_out);
var state_22641__$1 = (function (){var statearr_22646 = state_22641;
(statearr_22646[(7)] = inst_22630);

return statearr_22646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22641__$1,(7),inst_22631);
} else {
if((state_val_22642 === (5))){
var state_22641__$1 = state_22641;
var statearr_22647_22694 = state_22641__$1;
(statearr_22647_22694[(2)] = null);

(statearr_22647_22694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (6))){
var inst_22637 = (state_22641[(2)]);
var state_22641__$1 = state_22641;
var statearr_22648_22695 = state_22641__$1;
(statearr_22648_22695[(2)] = inst_22637);

(statearr_22648_22695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (7))){
var inst_22633 = (state_22641[(2)]);
var state_22641__$1 = (function (){var statearr_22649 = state_22641;
(statearr_22649[(8)] = inst_22633);

return statearr_22649;
})();
var statearr_22650_22696 = state_22641__$1;
(statearr_22650_22696[(2)] = null);

(statearr_22650_22696[(1)] = (2));


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
});})(c__22580__auto__))
;
return ((function (switch__22559__auto__,c__22580__auto__){
return (function() {
var csasync$proc$state_machine__22560__auto__ = null;
var csasync$proc$state_machine__22560__auto____0 = (function (){
var statearr_22654 = [null,null,null,null,null,null,null,null,null];
(statearr_22654[(0)] = csasync$proc$state_machine__22560__auto__);

(statearr_22654[(1)] = (1));

return statearr_22654;
});
var csasync$proc$state_machine__22560__auto____1 = (function (state_22641){
while(true){
var ret_value__22561__auto__ = (function (){try{while(true){
var result__22562__auto__ = switch__22559__auto__.call(null,state_22641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22562__auto__;
}
break;
}
}catch (e22655){if((e22655 instanceof Object)){
var ex__22563__auto__ = e22655;
var statearr_22656_22697 = state_22641;
(statearr_22656_22697[(5)] = ex__22563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22698 = state_22641;
state_22641 = G__22698;
continue;
} else {
return ret_value__22561__auto__;
}
break;
}
});
csasync$proc$state_machine__22560__auto__ = function(state_22641){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22560__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22560__auto____1.call(this,state_22641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22560__auto____0;
csasync$proc$state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22560__auto____1;
return csasync$proc$state_machine__22560__auto__;
})()
;})(switch__22559__auto__,c__22580__auto__))
})();
var state__22582__auto__ = (function (){var statearr_22657 = f__22581__auto__.call(null);
(statearr_22657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22580__auto__);

return statearr_22657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22582__auto__);
});})(c__22580__auto__))
);

return c__22580__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22580__auto__){
return (function (){
var f__22581__auto__ = (function (){var switch__22559__auto__ = ((function (c__22580__auto__){
return (function (state_22671){
var state_val_22672 = (state_22671[(1)]);
if((state_val_22672 === (1))){
var state_22671__$1 = state_22671;
var statearr_22673_22699 = state_22671__$1;
(statearr_22673_22699[(2)] = null);

(statearr_22673_22699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (2))){
var state_22671__$1 = state_22671;
var statearr_22674_22700 = state_22671__$1;
(statearr_22674_22700[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (3))){
var inst_22669 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22671__$1,inst_22669);
} else {
if((state_val_22672 === (4))){
var inst_22660 = func.call(null,param);
var inst_22661 = cljs.core.async.timeout.call(null,time_out);
var state_22671__$1 = (function (){var statearr_22676 = state_22671;
(statearr_22676[(7)] = inst_22660);

return statearr_22676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22671__$1,(7),inst_22661);
} else {
if((state_val_22672 === (5))){
var state_22671__$1 = state_22671;
var statearr_22677_22701 = state_22671__$1;
(statearr_22677_22701[(2)] = null);

(statearr_22677_22701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (6))){
var inst_22667 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
var statearr_22678_22702 = state_22671__$1;
(statearr_22678_22702[(2)] = inst_22667);

(statearr_22678_22702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (7))){
var inst_22663 = (state_22671[(2)]);
var state_22671__$1 = (function (){var statearr_22679 = state_22671;
(statearr_22679[(8)] = inst_22663);

return statearr_22679;
})();
var statearr_22680_22703 = state_22671__$1;
(statearr_22680_22703[(2)] = null);

(statearr_22680_22703[(1)] = (2));


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
});})(c__22580__auto__))
;
return ((function (switch__22559__auto__,c__22580__auto__){
return (function() {
var csasync$proc$state_machine__22560__auto__ = null;
var csasync$proc$state_machine__22560__auto____0 = (function (){
var statearr_22684 = [null,null,null,null,null,null,null,null,null];
(statearr_22684[(0)] = csasync$proc$state_machine__22560__auto__);

(statearr_22684[(1)] = (1));

return statearr_22684;
});
var csasync$proc$state_machine__22560__auto____1 = (function (state_22671){
while(true){
var ret_value__22561__auto__ = (function (){try{while(true){
var result__22562__auto__ = switch__22559__auto__.call(null,state_22671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22562__auto__;
}
break;
}
}catch (e22685){if((e22685 instanceof Object)){
var ex__22563__auto__ = e22685;
var statearr_22686_22704 = state_22671;
(statearr_22686_22704[(5)] = ex__22563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22705 = state_22671;
state_22671 = G__22705;
continue;
} else {
return ret_value__22561__auto__;
}
break;
}
});
csasync$proc$state_machine__22560__auto__ = function(state_22671){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22560__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22560__auto____1.call(this,state_22671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22560__auto____0;
csasync$proc$state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22560__auto____1;
return csasync$proc$state_machine__22560__auto__;
})()
;})(switch__22559__auto__,c__22580__auto__))
})();
var state__22582__auto__ = (function (){var statearr_22687 = f__22581__auto__.call(null);
(statearr_22687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22580__auto__);

return statearr_22687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22582__auto__);
});})(c__22580__auto__))
);

return c__22580__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22580__auto___22790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22580__auto___22790){
return (function (){
var f__22581__auto__ = (function (){var switch__22559__auto__ = ((function (c__22580__auto___22790){
return (function (state_22768){
var state_val_22769 = (state_22768[(1)]);
if((state_val_22769 === (7))){
var inst_22757 = cljs.core.async.timeout.call(null,time_out);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22768__$1,(10),inst_22757);
} else {
if((state_val_22769 === (1))){
var state_22768__$1 = state_22768;
var statearr_22770_22791 = state_22768__$1;
(statearr_22770_22791[(2)] = null);

(statearr_22770_22791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (4))){
var inst_22752 = proc_fn.call(null);
var state_22768__$1 = state_22768;
var statearr_22771_22792 = state_22768__$1;
(statearr_22771_22792[(2)] = inst_22752);

(statearr_22771_22792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (6))){
var inst_22755 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
if(cljs.core.truth_(inst_22755)){
var statearr_22772_22793 = state_22768__$1;
(statearr_22772_22793[(1)] = (7));

} else {
var statearr_22773_22794 = state_22768__$1;
(statearr_22773_22794[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (3))){
var inst_22765 = (state_22768[(2)]);
var inst_22766 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_22768__$1 = (function (){var statearr_22774 = state_22768;
(statearr_22774[(7)] = inst_22765);

return statearr_22774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22768__$1,inst_22766);
} else {
if((state_val_22769 === (2))){
var inst_22750 = (state_22768[(8)]);
var inst_22749 = cljs.core.deref.call(null,status);
var inst_22750__$1 = cljs.core._EQ_.call(null,inst_22749,"RUN");
var state_22768__$1 = (function (){var statearr_22775 = state_22768;
(statearr_22775[(8)] = inst_22750__$1);

return statearr_22775;
})();
if(inst_22750__$1){
var statearr_22776_22795 = state_22768__$1;
(statearr_22776_22795[(1)] = (4));

} else {
var statearr_22777_22796 = state_22768__$1;
(statearr_22777_22796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (9))){
var inst_22763 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22778_22797 = state_22768__$1;
(statearr_22778_22797[(2)] = inst_22763);

(statearr_22778_22797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (5))){
var inst_22750 = (state_22768[(8)]);
var state_22768__$1 = state_22768;
var statearr_22779_22798 = state_22768__$1;
(statearr_22779_22798[(2)] = inst_22750);

(statearr_22779_22798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (10))){
var inst_22759 = (state_22768[(2)]);
var state_22768__$1 = (function (){var statearr_22780 = state_22768;
(statearr_22780[(9)] = inst_22759);

return statearr_22780;
})();
var statearr_22781_22799 = state_22768__$1;
(statearr_22781_22799[(2)] = null);

(statearr_22781_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (8))){
var state_22768__$1 = state_22768;
var statearr_22782_22800 = state_22768__$1;
(statearr_22782_22800[(2)] = null);

(statearr_22782_22800[(1)] = (9));


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
});})(c__22580__auto___22790))
;
return ((function (switch__22559__auto__,c__22580__auto___22790){
return (function() {
var csasync$proc$start_process_$_state_machine__22560__auto__ = null;
var csasync$proc$start_process_$_state_machine__22560__auto____0 = (function (){
var statearr_22786 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22786[(0)] = csasync$proc$start_process_$_state_machine__22560__auto__);

(statearr_22786[(1)] = (1));

return statearr_22786;
});
var csasync$proc$start_process_$_state_machine__22560__auto____1 = (function (state_22768){
while(true){
var ret_value__22561__auto__ = (function (){try{while(true){
var result__22562__auto__ = switch__22559__auto__.call(null,state_22768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22562__auto__;
}
break;
}
}catch (e22787){if((e22787 instanceof Object)){
var ex__22563__auto__ = e22787;
var statearr_22788_22801 = state_22768;
(statearr_22788_22801[(5)] = ex__22563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22802 = state_22768;
state_22768 = G__22802;
continue;
} else {
return ret_value__22561__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22560__auto__ = function(state_22768){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22560__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22560__auto____1.call(this,state_22768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22560__auto____0;
csasync$proc$start_process_$_state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22560__auto____1;
return csasync$proc$start_process_$_state_machine__22560__auto__;
})()
;})(switch__22559__auto__,c__22580__auto___22790))
})();
var state__22582__auto__ = (function (){var statearr_22789 = f__22581__auto__.call(null);
(statearr_22789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22580__auto___22790);

return statearr_22789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22582__auto__);
});})(c__22580__auto___22790))
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
var c__22580__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22580__auto__){
return (function (){
var f__22581__auto__ = (function (){var switch__22559__auto__ = ((function (c__22580__auto__){
return (function (state_22823){
var state_val_22824 = (state_22823[(1)]);
if((state_val_22824 === (1))){
var inst_22818 = cljs.core.async.timeout.call(null,time);
var state_22823__$1 = state_22823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22823__$1,(2),inst_22818);
} else {
if((state_val_22824 === (2))){
var inst_22820 = (state_22823[(2)]);
var inst_22821 = func.call(null);
var state_22823__$1 = (function (){var statearr_22825 = state_22823;
(statearr_22825[(7)] = inst_22820);

return statearr_22825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22823__$1,inst_22821);
} else {
return null;
}
}
});})(c__22580__auto__))
;
return ((function (switch__22559__auto__,c__22580__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22560__auto__ = null;
var csasync$proc$delayer_$_state_machine__22560__auto____0 = (function (){
var statearr_22829 = [null,null,null,null,null,null,null,null];
(statearr_22829[(0)] = csasync$proc$delayer_$_state_machine__22560__auto__);

(statearr_22829[(1)] = (1));

return statearr_22829;
});
var csasync$proc$delayer_$_state_machine__22560__auto____1 = (function (state_22823){
while(true){
var ret_value__22561__auto__ = (function (){try{while(true){
var result__22562__auto__ = switch__22559__auto__.call(null,state_22823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22562__auto__;
}
break;
}
}catch (e22830){if((e22830 instanceof Object)){
var ex__22563__auto__ = e22830;
var statearr_22831_22833 = state_22823;
(statearr_22831_22833[(5)] = ex__22563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22834 = state_22823;
state_22823 = G__22834;
continue;
} else {
return ret_value__22561__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22560__auto__ = function(state_22823){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22560__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22560__auto____1.call(this,state_22823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22560__auto____0;
csasync$proc$delayer_$_state_machine__22560__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22560__auto____1;
return csasync$proc$delayer_$_state_machine__22560__auto__;
})()
;})(switch__22559__auto__,c__22580__auto__))
})();
var state__22582__auto__ = (function (){var statearr_22832 = f__22581__auto__.call(null);
(statearr_22832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22580__auto__);

return statearr_22832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22582__auto__);
});})(c__22580__auto__))
);

return c__22580__auto__;
});

//# sourceMappingURL=proc.js.map