// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args33493 = [];
var len__9665__auto___33556 = arguments.length;
var i__9666__auto___33557 = (0);
while(true){
if((i__9666__auto___33557 < len__9665__auto___33556)){
args33493.push((arguments[i__9666__auto___33557]));

var G__33558 = (i__9666__auto___33557 + (1));
i__9666__auto___33557 = G__33558;
continue;
} else {
}
break;
}

var G__33495 = args33493.length;
switch (G__33495) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33493.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto__){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto__){
return (function (state_33509){
var state_val_33510 = (state_33509[(1)]);
if((state_val_33510 === (1))){
var state_33509__$1 = state_33509;
var statearr_33511_33560 = state_33509__$1;
(statearr_33511_33560[(2)] = null);

(statearr_33511_33560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (2))){
var state_33509__$1 = state_33509;
var statearr_33512_33561 = state_33509__$1;
(statearr_33512_33561[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (3))){
var inst_33507 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33509__$1,inst_33507);
} else {
if((state_val_33510 === (4))){
var inst_33498 = func.call(null);
var inst_33499 = cljs.core.async.timeout.call(null,time_out);
var state_33509__$1 = (function (){var statearr_33514 = state_33509;
(statearr_33514[(7)] = inst_33498);

return statearr_33514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33509__$1,(7),inst_33499);
} else {
if((state_val_33510 === (5))){
var state_33509__$1 = state_33509;
var statearr_33515_33562 = state_33509__$1;
(statearr_33515_33562[(2)] = null);

(statearr_33515_33562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (6))){
var inst_33505 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33516_33563 = state_33509__$1;
(statearr_33516_33563[(2)] = inst_33505);

(statearr_33516_33563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33510 === (7))){
var inst_33501 = (state_33509[(2)]);
var state_33509__$1 = (function (){var statearr_33517 = state_33509;
(statearr_33517[(8)] = inst_33501);

return statearr_33517;
})();
var statearr_33518_33564 = state_33509__$1;
(statearr_33518_33564[(2)] = null);

(statearr_33518_33564[(1)] = (2));


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
});})(c__11082__auto__))
;
return ((function (switch__11061__auto__,c__11082__auto__){
return (function() {
var csasync$proc$state_machine__11062__auto__ = null;
var csasync$proc$state_machine__11062__auto____0 = (function (){
var statearr_33522 = [null,null,null,null,null,null,null,null,null];
(statearr_33522[(0)] = csasync$proc$state_machine__11062__auto__);

(statearr_33522[(1)] = (1));

return statearr_33522;
});
var csasync$proc$state_machine__11062__auto____1 = (function (state_33509){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_33509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e33523){if((e33523 instanceof Object)){
var ex__11065__auto__ = e33523;
var statearr_33524_33565 = state_33509;
(statearr_33524_33565[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33566 = state_33509;
state_33509 = G__33566;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$state_machine__11062__auto__ = function(state_33509){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11062__auto____1.call(this,state_33509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11062__auto____0;
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11062__auto____1;
return csasync$proc$state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto__))
})();
var state__11084__auto__ = (function (){var statearr_33525 = f__11083__auto__.call(null);
(statearr_33525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto__);

return statearr_33525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto__))
);

return c__11082__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto__){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto__){
return (function (state_33539){
var state_val_33540 = (state_33539[(1)]);
if((state_val_33540 === (1))){
var state_33539__$1 = state_33539;
var statearr_33541_33567 = state_33539__$1;
(statearr_33541_33567[(2)] = null);

(statearr_33541_33567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (2))){
var state_33539__$1 = state_33539;
var statearr_33542_33568 = state_33539__$1;
(statearr_33542_33568[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (3))){
var inst_33537 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33539__$1,inst_33537);
} else {
if((state_val_33540 === (4))){
var inst_33528 = func.call(null,param);
var inst_33529 = cljs.core.async.timeout.call(null,time_out);
var state_33539__$1 = (function (){var statearr_33544 = state_33539;
(statearr_33544[(7)] = inst_33528);

return statearr_33544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33539__$1,(7),inst_33529);
} else {
if((state_val_33540 === (5))){
var state_33539__$1 = state_33539;
var statearr_33545_33569 = state_33539__$1;
(statearr_33545_33569[(2)] = null);

(statearr_33545_33569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (6))){
var inst_33535 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33546_33570 = state_33539__$1;
(statearr_33546_33570[(2)] = inst_33535);

(statearr_33546_33570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (7))){
var inst_33531 = (state_33539[(2)]);
var state_33539__$1 = (function (){var statearr_33547 = state_33539;
(statearr_33547[(8)] = inst_33531);

return statearr_33547;
})();
var statearr_33548_33571 = state_33539__$1;
(statearr_33548_33571[(2)] = null);

(statearr_33548_33571[(1)] = (2));


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
});})(c__11082__auto__))
;
return ((function (switch__11061__auto__,c__11082__auto__){
return (function() {
var csasync$proc$state_machine__11062__auto__ = null;
var csasync$proc$state_machine__11062__auto____0 = (function (){
var statearr_33552 = [null,null,null,null,null,null,null,null,null];
(statearr_33552[(0)] = csasync$proc$state_machine__11062__auto__);

(statearr_33552[(1)] = (1));

return statearr_33552;
});
var csasync$proc$state_machine__11062__auto____1 = (function (state_33539){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_33539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e33553){if((e33553 instanceof Object)){
var ex__11065__auto__ = e33553;
var statearr_33554_33572 = state_33539;
(statearr_33554_33572[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33573 = state_33539;
state_33539 = G__33573;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$state_machine__11062__auto__ = function(state_33539){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11062__auto____1.call(this,state_33539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11062__auto____0;
csasync$proc$state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11062__auto____1;
return csasync$proc$state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto__))
})();
var state__11084__auto__ = (function (){var statearr_33555 = f__11083__auto__.call(null);
(statearr_33555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto__);

return statearr_33555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto__))
);

return c__11082__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11082__auto___33658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto___33658){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto___33658){
return (function (state_33636){
var state_val_33637 = (state_33636[(1)]);
if((state_val_33637 === (7))){
var inst_33625 = cljs.core.async.timeout.call(null,time_out);
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33636__$1,(10),inst_33625);
} else {
if((state_val_33637 === (1))){
var state_33636__$1 = state_33636;
var statearr_33638_33659 = state_33636__$1;
(statearr_33638_33659[(2)] = null);

(statearr_33638_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (4))){
var inst_33620 = proc_fn.call(null);
var state_33636__$1 = state_33636;
var statearr_33639_33660 = state_33636__$1;
(statearr_33639_33660[(2)] = inst_33620);

(statearr_33639_33660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (6))){
var inst_33623 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
if(cljs.core.truth_(inst_33623)){
var statearr_33640_33661 = state_33636__$1;
(statearr_33640_33661[(1)] = (7));

} else {
var statearr_33641_33662 = state_33636__$1;
(statearr_33641_33662[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (3))){
var inst_33633 = (state_33636[(2)]);
var inst_33634 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_33636__$1 = (function (){var statearr_33642 = state_33636;
(statearr_33642[(7)] = inst_33633);

return statearr_33642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33636__$1,inst_33634);
} else {
if((state_val_33637 === (2))){
var inst_33618 = (state_33636[(8)]);
var inst_33617 = cljs.core.deref.call(null,status);
var inst_33618__$1 = cljs.core._EQ_.call(null,inst_33617,"RUN");
var state_33636__$1 = (function (){var statearr_33643 = state_33636;
(statearr_33643[(8)] = inst_33618__$1);

return statearr_33643;
})();
if(inst_33618__$1){
var statearr_33644_33663 = state_33636__$1;
(statearr_33644_33663[(1)] = (4));

} else {
var statearr_33645_33664 = state_33636__$1;
(statearr_33645_33664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (9))){
var inst_33631 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33646_33665 = state_33636__$1;
(statearr_33646_33665[(2)] = inst_33631);

(statearr_33646_33665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (5))){
var inst_33618 = (state_33636[(8)]);
var state_33636__$1 = state_33636;
var statearr_33647_33666 = state_33636__$1;
(statearr_33647_33666[(2)] = inst_33618);

(statearr_33647_33666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (10))){
var inst_33627 = (state_33636[(2)]);
var state_33636__$1 = (function (){var statearr_33648 = state_33636;
(statearr_33648[(9)] = inst_33627);

return statearr_33648;
})();
var statearr_33649_33667 = state_33636__$1;
(statearr_33649_33667[(2)] = null);

(statearr_33649_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (8))){
var state_33636__$1 = state_33636;
var statearr_33650_33668 = state_33636__$1;
(statearr_33650_33668[(2)] = null);

(statearr_33650_33668[(1)] = (9));


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
});})(c__11082__auto___33658))
;
return ((function (switch__11061__auto__,c__11082__auto___33658){
return (function() {
var csasync$proc$start_process_$_state_machine__11062__auto__ = null;
var csasync$proc$start_process_$_state_machine__11062__auto____0 = (function (){
var statearr_33654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33654[(0)] = csasync$proc$start_process_$_state_machine__11062__auto__);

(statearr_33654[(1)] = (1));

return statearr_33654;
});
var csasync$proc$start_process_$_state_machine__11062__auto____1 = (function (state_33636){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_33636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e33655){if((e33655 instanceof Object)){
var ex__11065__auto__ = e33655;
var statearr_33656_33669 = state_33636;
(statearr_33656_33669[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33670 = state_33636;
state_33636 = G__33670;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11062__auto__ = function(state_33636){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11062__auto____1.call(this,state_33636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11062__auto____0;
csasync$proc$start_process_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11062__auto____1;
return csasync$proc$start_process_$_state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto___33658))
})();
var state__11084__auto__ = (function (){var statearr_33657 = f__11083__auto__.call(null);
(statearr_33657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto___33658);

return statearr_33657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto___33658))
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
var c__11082__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11082__auto__){
return (function (){
var f__11083__auto__ = (function (){var switch__11061__auto__ = ((function (c__11082__auto__){
return (function (state_33691){
var state_val_33692 = (state_33691[(1)]);
if((state_val_33692 === (1))){
var inst_33686 = cljs.core.async.timeout.call(null,time);
var state_33691__$1 = state_33691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33691__$1,(2),inst_33686);
} else {
if((state_val_33692 === (2))){
var inst_33688 = (state_33691[(2)]);
var inst_33689 = func.call(null);
var state_33691__$1 = (function (){var statearr_33693 = state_33691;
(statearr_33693[(7)] = inst_33688);

return statearr_33693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33691__$1,inst_33689);
} else {
return null;
}
}
});})(c__11082__auto__))
;
return ((function (switch__11061__auto__,c__11082__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11062__auto__ = null;
var csasync$proc$delayer_$_state_machine__11062__auto____0 = (function (){
var statearr_33697 = [null,null,null,null,null,null,null,null];
(statearr_33697[(0)] = csasync$proc$delayer_$_state_machine__11062__auto__);

(statearr_33697[(1)] = (1));

return statearr_33697;
});
var csasync$proc$delayer_$_state_machine__11062__auto____1 = (function (state_33691){
while(true){
var ret_value__11063__auto__ = (function (){try{while(true){
var result__11064__auto__ = switch__11061__auto__.call(null,state_33691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11064__auto__;
}
break;
}
}catch (e33698){if((e33698 instanceof Object)){
var ex__11065__auto__ = e33698;
var statearr_33699_33701 = state_33691;
(statearr_33699_33701[(5)] = ex__11065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33702 = state_33691;
state_33691 = G__33702;
continue;
} else {
return ret_value__11063__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11062__auto__ = function(state_33691){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11062__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11062__auto____1.call(this,state_33691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11062__auto____0;
csasync$proc$delayer_$_state_machine__11062__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11062__auto____1;
return csasync$proc$delayer_$_state_machine__11062__auto__;
})()
;})(switch__11061__auto__,c__11082__auto__))
})();
var state__11084__auto__ = (function (){var statearr_33700 = f__11083__auto__.call(null);
(statearr_33700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11082__auto__);

return statearr_33700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11084__auto__);
});})(c__11082__auto__))
);

return c__11082__auto__;
});

//# sourceMappingURL=proc.js.map