// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args32506 = [];
var len__23065__auto___32569 = arguments.length;
var i__23066__auto___32570 = (0);
while(true){
if((i__23066__auto___32570 < len__23065__auto___32569)){
args32506.push((arguments[i__23066__auto___32570]));

var G__32571 = (i__23066__auto___32570 + (1));
i__23066__auto___32570 = G__32571;
continue;
} else {
}
break;
}

var G__32508 = args32506.length;
switch (G__32508) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32506.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__24044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24044__auto__){
return (function (){
var f__24045__auto__ = (function (){var switch__24023__auto__ = ((function (c__24044__auto__){
return (function (state_32522){
var state_val_32523 = (state_32522[(1)]);
if((state_val_32523 === (1))){
var state_32522__$1 = state_32522;
var statearr_32524_32573 = state_32522__$1;
(statearr_32524_32573[(2)] = null);

(statearr_32524_32573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (2))){
var state_32522__$1 = state_32522;
var statearr_32525_32574 = state_32522__$1;
(statearr_32525_32574[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (3))){
var inst_32520 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32522__$1,inst_32520);
} else {
if((state_val_32523 === (4))){
var inst_32511 = func.call(null);
var inst_32512 = cljs.core.async.timeout.call(null,time_out);
var state_32522__$1 = (function (){var statearr_32527 = state_32522;
(statearr_32527[(7)] = inst_32511);

return statearr_32527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32522__$1,(7),inst_32512);
} else {
if((state_val_32523 === (5))){
var state_32522__$1 = state_32522;
var statearr_32528_32575 = state_32522__$1;
(statearr_32528_32575[(2)] = null);

(statearr_32528_32575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (6))){
var inst_32518 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32529_32576 = state_32522__$1;
(statearr_32529_32576[(2)] = inst_32518);

(statearr_32529_32576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (7))){
var inst_32514 = (state_32522[(2)]);
var state_32522__$1 = (function (){var statearr_32530 = state_32522;
(statearr_32530[(8)] = inst_32514);

return statearr_32530;
})();
var statearr_32531_32577 = state_32522__$1;
(statearr_32531_32577[(2)] = null);

(statearr_32531_32577[(1)] = (2));


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
});})(c__24044__auto__))
;
return ((function (switch__24023__auto__,c__24044__auto__){
return (function() {
var csasync$proc$state_machine__24024__auto__ = null;
var csasync$proc$state_machine__24024__auto____0 = (function (){
var statearr_32535 = [null,null,null,null,null,null,null,null,null];
(statearr_32535[(0)] = csasync$proc$state_machine__24024__auto__);

(statearr_32535[(1)] = (1));

return statearr_32535;
});
var csasync$proc$state_machine__24024__auto____1 = (function (state_32522){
while(true){
var ret_value__24025__auto__ = (function (){try{while(true){
var result__24026__auto__ = switch__24023__auto__.call(null,state_32522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24026__auto__;
}
break;
}
}catch (e32536){if((e32536 instanceof Object)){
var ex__24027__auto__ = e32536;
var statearr_32537_32578 = state_32522;
(statearr_32537_32578[(5)] = ex__24027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32579 = state_32522;
state_32522 = G__32579;
continue;
} else {
return ret_value__24025__auto__;
}
break;
}
});
csasync$proc$state_machine__24024__auto__ = function(state_32522){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24024__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24024__auto____1.call(this,state_32522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24024__auto____0;
csasync$proc$state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24024__auto____1;
return csasync$proc$state_machine__24024__auto__;
})()
;})(switch__24023__auto__,c__24044__auto__))
})();
var state__24046__auto__ = (function (){var statearr_32538 = f__24045__auto__.call(null);
(statearr_32538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24044__auto__);

return statearr_32538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24046__auto__);
});})(c__24044__auto__))
);

return c__24044__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24044__auto__){
return (function (){
var f__24045__auto__ = (function (){var switch__24023__auto__ = ((function (c__24044__auto__){
return (function (state_32552){
var state_val_32553 = (state_32552[(1)]);
if((state_val_32553 === (1))){
var state_32552__$1 = state_32552;
var statearr_32554_32580 = state_32552__$1;
(statearr_32554_32580[(2)] = null);

(statearr_32554_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (2))){
var state_32552__$1 = state_32552;
var statearr_32555_32581 = state_32552__$1;
(statearr_32555_32581[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (3))){
var inst_32550 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32552__$1,inst_32550);
} else {
if((state_val_32553 === (4))){
var inst_32541 = func.call(null,param);
var inst_32542 = cljs.core.async.timeout.call(null,time_out);
var state_32552__$1 = (function (){var statearr_32557 = state_32552;
(statearr_32557[(7)] = inst_32541);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32552__$1,(7),inst_32542);
} else {
if((state_val_32553 === (5))){
var state_32552__$1 = state_32552;
var statearr_32558_32582 = state_32552__$1;
(statearr_32558_32582[(2)] = null);

(statearr_32558_32582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (6))){
var inst_32548 = (state_32552[(2)]);
var state_32552__$1 = state_32552;
var statearr_32559_32583 = state_32552__$1;
(statearr_32559_32583[(2)] = inst_32548);

(statearr_32559_32583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32553 === (7))){
var inst_32544 = (state_32552[(2)]);
var state_32552__$1 = (function (){var statearr_32560 = state_32552;
(statearr_32560[(8)] = inst_32544);

return statearr_32560;
})();
var statearr_32561_32584 = state_32552__$1;
(statearr_32561_32584[(2)] = null);

(statearr_32561_32584[(1)] = (2));


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
});})(c__24044__auto__))
;
return ((function (switch__24023__auto__,c__24044__auto__){
return (function() {
var csasync$proc$state_machine__24024__auto__ = null;
var csasync$proc$state_machine__24024__auto____0 = (function (){
var statearr_32565 = [null,null,null,null,null,null,null,null,null];
(statearr_32565[(0)] = csasync$proc$state_machine__24024__auto__);

(statearr_32565[(1)] = (1));

return statearr_32565;
});
var csasync$proc$state_machine__24024__auto____1 = (function (state_32552){
while(true){
var ret_value__24025__auto__ = (function (){try{while(true){
var result__24026__auto__ = switch__24023__auto__.call(null,state_32552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24026__auto__;
}
break;
}
}catch (e32566){if((e32566 instanceof Object)){
var ex__24027__auto__ = e32566;
var statearr_32567_32585 = state_32552;
(statearr_32567_32585[(5)] = ex__24027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32586 = state_32552;
state_32552 = G__32586;
continue;
} else {
return ret_value__24025__auto__;
}
break;
}
});
csasync$proc$state_machine__24024__auto__ = function(state_32552){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24024__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24024__auto____1.call(this,state_32552);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24024__auto____0;
csasync$proc$state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24024__auto____1;
return csasync$proc$state_machine__24024__auto__;
})()
;})(switch__24023__auto__,c__24044__auto__))
})();
var state__24046__auto__ = (function (){var statearr_32568 = f__24045__auto__.call(null);
(statearr_32568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24044__auto__);

return statearr_32568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24046__auto__);
});})(c__24044__auto__))
);

return c__24044__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__24044__auto___32695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24044__auto___32695){
return (function (){
var f__24045__auto__ = (function (){var switch__24023__auto__ = ((function (c__24044__auto___32695){
return (function (state_32668){
var state_val_32669 = (state_32668[(1)]);
if((state_val_32669 === (7))){
var inst_32650 = cljs.core.async.timeout.call(null,time_out);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32668__$1,(10),inst_32650);
} else {
if((state_val_32669 === (1))){
var state_32668__$1 = state_32668;
var statearr_32670_32696 = state_32668__$1;
(statearr_32670_32696[(2)] = null);

(statearr_32670_32696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (4))){
var inst_32645 = proc_fn.call(null);
var state_32668__$1 = state_32668;
var statearr_32671_32697 = state_32668__$1;
(statearr_32671_32697[(2)] = inst_32645);

(statearr_32671_32697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (13))){
var inst_32665 = (state_32668[(2)]);
var inst_32666 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_32668__$1 = (function (){var statearr_32672 = state_32668;
(statearr_32672[(7)] = inst_32665);

return statearr_32672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32668__$1,inst_32666);
} else {
if((state_val_32669 === (6))){
var inst_32648 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
if(cljs.core.truth_(inst_32648)){
var statearr_32673_32698 = state_32668__$1;
(statearr_32673_32698[(1)] = (7));

} else {
var statearr_32674_32699 = state_32668__$1;
(statearr_32674_32699[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (3))){
var inst_32658 = (state_32668[(2)]);
var inst_32659 = (final_fun == null);
var inst_32660 = cljs.core.not.call(null,inst_32659);
var state_32668__$1 = (function (){var statearr_32675 = state_32668;
(statearr_32675[(8)] = inst_32658);

return statearr_32675;
})();
if(inst_32660){
var statearr_32676_32700 = state_32668__$1;
(statearr_32676_32700[(1)] = (11));

} else {
var statearr_32677_32701 = state_32668__$1;
(statearr_32677_32701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (12))){
var state_32668__$1 = state_32668;
var statearr_32678_32702 = state_32668__$1;
(statearr_32678_32702[(2)] = null);

(statearr_32678_32702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (2))){
var inst_32643 = (state_32668[(9)]);
var inst_32642 = cljs.core.deref.call(null,status);
var inst_32643__$1 = cljs.core._EQ_.call(null,inst_32642,"RUN");
var state_32668__$1 = (function (){var statearr_32679 = state_32668;
(statearr_32679[(9)] = inst_32643__$1);

return statearr_32679;
})();
if(inst_32643__$1){
var statearr_32680_32703 = state_32668__$1;
(statearr_32680_32703[(1)] = (4));

} else {
var statearr_32681_32704 = state_32668__$1;
(statearr_32681_32704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (11))){
var inst_32662 = final_fun.call(null);
var state_32668__$1 = state_32668;
var statearr_32682_32705 = state_32668__$1;
(statearr_32682_32705[(2)] = inst_32662);

(statearr_32682_32705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (9))){
var inst_32656 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32683_32706 = state_32668__$1;
(statearr_32683_32706[(2)] = inst_32656);

(statearr_32683_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (5))){
var inst_32643 = (state_32668[(9)]);
var state_32668__$1 = state_32668;
var statearr_32684_32707 = state_32668__$1;
(statearr_32684_32707[(2)] = inst_32643);

(statearr_32684_32707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (10))){
var inst_32652 = (state_32668[(2)]);
var state_32668__$1 = (function (){var statearr_32685 = state_32668;
(statearr_32685[(10)] = inst_32652);

return statearr_32685;
})();
var statearr_32686_32708 = state_32668__$1;
(statearr_32686_32708[(2)] = null);

(statearr_32686_32708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (8))){
var state_32668__$1 = state_32668;
var statearr_32687_32709 = state_32668__$1;
(statearr_32687_32709[(2)] = null);

(statearr_32687_32709[(1)] = (9));


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
}
}
}
});})(c__24044__auto___32695))
;
return ((function (switch__24023__auto__,c__24044__auto___32695){
return (function() {
var csasync$proc$start_process_$_state_machine__24024__auto__ = null;
var csasync$proc$start_process_$_state_machine__24024__auto____0 = (function (){
var statearr_32691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32691[(0)] = csasync$proc$start_process_$_state_machine__24024__auto__);

(statearr_32691[(1)] = (1));

return statearr_32691;
});
var csasync$proc$start_process_$_state_machine__24024__auto____1 = (function (state_32668){
while(true){
var ret_value__24025__auto__ = (function (){try{while(true){
var result__24026__auto__ = switch__24023__auto__.call(null,state_32668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24026__auto__;
}
break;
}
}catch (e32692){if((e32692 instanceof Object)){
var ex__24027__auto__ = e32692;
var statearr_32693_32710 = state_32668;
(statearr_32693_32710[(5)] = ex__24027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32711 = state_32668;
state_32668 = G__32711;
continue;
} else {
return ret_value__24025__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__24024__auto__ = function(state_32668){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__24024__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__24024__auto____1.call(this,state_32668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__24024__auto____0;
csasync$proc$start_process_$_state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__24024__auto____1;
return csasync$proc$start_process_$_state_machine__24024__auto__;
})()
;})(switch__24023__auto__,c__24044__auto___32695))
})();
var state__24046__auto__ = (function (){var statearr_32694 = f__24045__auto__.call(null);
(statearr_32694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24044__auto___32695);

return statearr_32694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24046__auto__);
});})(c__24044__auto___32695))
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
var c__24044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24044__auto__){
return (function (){
var f__24045__auto__ = (function (){var switch__24023__auto__ = ((function (c__24044__auto__){
return (function (state_32732){
var state_val_32733 = (state_32732[(1)]);
if((state_val_32733 === (1))){
var inst_32727 = cljs.core.async.timeout.call(null,time);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32732__$1,(2),inst_32727);
} else {
if((state_val_32733 === (2))){
var inst_32729 = (state_32732[(2)]);
var inst_32730 = func.call(null);
var state_32732__$1 = (function (){var statearr_32734 = state_32732;
(statearr_32734[(7)] = inst_32729);

return statearr_32734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32732__$1,inst_32730);
} else {
return null;
}
}
});})(c__24044__auto__))
;
return ((function (switch__24023__auto__,c__24044__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__24024__auto__ = null;
var csasync$proc$delayer_$_state_machine__24024__auto____0 = (function (){
var statearr_32738 = [null,null,null,null,null,null,null,null];
(statearr_32738[(0)] = csasync$proc$delayer_$_state_machine__24024__auto__);

(statearr_32738[(1)] = (1));

return statearr_32738;
});
var csasync$proc$delayer_$_state_machine__24024__auto____1 = (function (state_32732){
while(true){
var ret_value__24025__auto__ = (function (){try{while(true){
var result__24026__auto__ = switch__24023__auto__.call(null,state_32732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24026__auto__;
}
break;
}
}catch (e32739){if((e32739 instanceof Object)){
var ex__24027__auto__ = e32739;
var statearr_32740_32742 = state_32732;
(statearr_32740_32742[(5)] = ex__24027__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24025__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32743 = state_32732;
state_32732 = G__32743;
continue;
} else {
return ret_value__24025__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__24024__auto__ = function(state_32732){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__24024__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__24024__auto____1.call(this,state_32732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__24024__auto____0;
csasync$proc$delayer_$_state_machine__24024__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__24024__auto____1;
return csasync$proc$delayer_$_state_machine__24024__auto__;
})()
;})(switch__24023__auto__,c__24044__auto__))
})();
var state__24046__auto__ = (function (){var statearr_32741 = f__24045__auto__.call(null);
(statearr_32741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24044__auto__);

return statearr_32741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24046__auto__);
});})(c__24044__auto__))
);

return c__24044__auto__;
});

//# sourceMappingURL=proc.js.map