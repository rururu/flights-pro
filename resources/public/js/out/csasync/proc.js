// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args28493 = [];
var len__21484__auto___28556 = arguments.length;
var i__21485__auto___28557 = (0);
while(true){
if((i__21485__auto___28557 < len__21484__auto___28556)){
args28493.push((arguments[i__21485__auto___28557]));

var G__28558 = (i__21485__auto___28557 + (1));
i__21485__auto___28557 = G__28558;
continue;
} else {
}
break;
}

var G__28495 = args28493.length;
switch (G__28495) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28493.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto__){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto__){
return (function (state_28509){
var state_val_28510 = (state_28509[(1)]);
if((state_val_28510 === (1))){
var state_28509__$1 = state_28509;
var statearr_28511_28560 = state_28509__$1;
(statearr_28511_28560[(2)] = null);

(statearr_28511_28560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (2))){
var state_28509__$1 = state_28509;
var statearr_28512_28561 = state_28509__$1;
(statearr_28512_28561[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (3))){
var inst_28507 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28509__$1,inst_28507);
} else {
if((state_val_28510 === (4))){
var inst_28498 = func.call(null);
var inst_28499 = cljs.core.async.timeout.call(null,time_out);
var state_28509__$1 = (function (){var statearr_28514 = state_28509;
(statearr_28514[(7)] = inst_28498);

return statearr_28514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28509__$1,(7),inst_28499);
} else {
if((state_val_28510 === (5))){
var state_28509__$1 = state_28509;
var statearr_28515_28562 = state_28509__$1;
(statearr_28515_28562[(2)] = null);

(statearr_28515_28562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (6))){
var inst_28505 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28516_28563 = state_28509__$1;
(statearr_28516_28563[(2)] = inst_28505);

(statearr_28516_28563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (7))){
var inst_28501 = (state_28509[(2)]);
var state_28509__$1 = (function (){var statearr_28517 = state_28509;
(statearr_28517[(8)] = inst_28501);

return statearr_28517;
})();
var statearr_28518_28564 = state_28509__$1;
(statearr_28518_28564[(2)] = null);

(statearr_28518_28564[(1)] = (2));


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
});})(c__22560__auto__))
;
return ((function (switch__22539__auto__,c__22560__auto__){
return (function() {
var csasync$proc$state_machine__22540__auto__ = null;
var csasync$proc$state_machine__22540__auto____0 = (function (){
var statearr_28522 = [null,null,null,null,null,null,null,null,null];
(statearr_28522[(0)] = csasync$proc$state_machine__22540__auto__);

(statearr_28522[(1)] = (1));

return statearr_28522;
});
var csasync$proc$state_machine__22540__auto____1 = (function (state_28509){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_28509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e28523){if((e28523 instanceof Object)){
var ex__22543__auto__ = e28523;
var statearr_28524_28565 = state_28509;
(statearr_28524_28565[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28566 = state_28509;
state_28509 = G__28566;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$state_machine__22540__auto__ = function(state_28509){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22540__auto____1.call(this,state_28509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22540__auto____0;
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22540__auto____1;
return csasync$proc$state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto__))
})();
var state__22562__auto__ = (function (){var statearr_28525 = f__22561__auto__.call(null);
(statearr_28525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto__);

return statearr_28525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto__))
);

return c__22560__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto__){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto__){
return (function (state_28539){
var state_val_28540 = (state_28539[(1)]);
if((state_val_28540 === (1))){
var state_28539__$1 = state_28539;
var statearr_28541_28567 = state_28539__$1;
(statearr_28541_28567[(2)] = null);

(statearr_28541_28567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (2))){
var state_28539__$1 = state_28539;
var statearr_28542_28568 = state_28539__$1;
(statearr_28542_28568[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (3))){
var inst_28537 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28539__$1,inst_28537);
} else {
if((state_val_28540 === (4))){
var inst_28528 = func.call(null,param);
var inst_28529 = cljs.core.async.timeout.call(null,time_out);
var state_28539__$1 = (function (){var statearr_28544 = state_28539;
(statearr_28544[(7)] = inst_28528);

return statearr_28544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28539__$1,(7),inst_28529);
} else {
if((state_val_28540 === (5))){
var state_28539__$1 = state_28539;
var statearr_28545_28569 = state_28539__$1;
(statearr_28545_28569[(2)] = null);

(statearr_28545_28569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (6))){
var inst_28535 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28546_28570 = state_28539__$1;
(statearr_28546_28570[(2)] = inst_28535);

(statearr_28546_28570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (7))){
var inst_28531 = (state_28539[(2)]);
var state_28539__$1 = (function (){var statearr_28547 = state_28539;
(statearr_28547[(8)] = inst_28531);

return statearr_28547;
})();
var statearr_28548_28571 = state_28539__$1;
(statearr_28548_28571[(2)] = null);

(statearr_28548_28571[(1)] = (2));


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
});})(c__22560__auto__))
;
return ((function (switch__22539__auto__,c__22560__auto__){
return (function() {
var csasync$proc$state_machine__22540__auto__ = null;
var csasync$proc$state_machine__22540__auto____0 = (function (){
var statearr_28552 = [null,null,null,null,null,null,null,null,null];
(statearr_28552[(0)] = csasync$proc$state_machine__22540__auto__);

(statearr_28552[(1)] = (1));

return statearr_28552;
});
var csasync$proc$state_machine__22540__auto____1 = (function (state_28539){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_28539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e28553){if((e28553 instanceof Object)){
var ex__22543__auto__ = e28553;
var statearr_28554_28572 = state_28539;
(statearr_28554_28572[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28573 = state_28539;
state_28539 = G__28573;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$state_machine__22540__auto__ = function(state_28539){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22540__auto____1.call(this,state_28539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22540__auto____0;
csasync$proc$state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22540__auto____1;
return csasync$proc$state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto__))
})();
var state__22562__auto__ = (function (){var statearr_28555 = f__22561__auto__.call(null);
(statearr_28555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto__);

return statearr_28555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto__))
);

return c__22560__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22560__auto___28658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto___28658){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto___28658){
return (function (state_28636){
var state_val_28637 = (state_28636[(1)]);
if((state_val_28637 === (7))){
var inst_28625 = cljs.core.async.timeout.call(null,time_out);
var state_28636__$1 = state_28636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28636__$1,(10),inst_28625);
} else {
if((state_val_28637 === (1))){
var state_28636__$1 = state_28636;
var statearr_28638_28659 = state_28636__$1;
(statearr_28638_28659[(2)] = null);

(statearr_28638_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (4))){
var inst_28620 = proc_fn.call(null);
var state_28636__$1 = state_28636;
var statearr_28639_28660 = state_28636__$1;
(statearr_28639_28660[(2)] = inst_28620);

(statearr_28639_28660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (6))){
var inst_28623 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
if(cljs.core.truth_(inst_28623)){
var statearr_28640_28661 = state_28636__$1;
(statearr_28640_28661[(1)] = (7));

} else {
var statearr_28641_28662 = state_28636__$1;
(statearr_28641_28662[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (3))){
var inst_28633 = (state_28636[(2)]);
var inst_28634 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_28636__$1 = (function (){var statearr_28642 = state_28636;
(statearr_28642[(7)] = inst_28633);

return statearr_28642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28636__$1,inst_28634);
} else {
if((state_val_28637 === (2))){
var inst_28618 = (state_28636[(8)]);
var inst_28617 = cljs.core.deref.call(null,status);
var inst_28618__$1 = cljs.core._EQ_.call(null,inst_28617,"RUN");
var state_28636__$1 = (function (){var statearr_28643 = state_28636;
(statearr_28643[(8)] = inst_28618__$1);

return statearr_28643;
})();
if(inst_28618__$1){
var statearr_28644_28663 = state_28636__$1;
(statearr_28644_28663[(1)] = (4));

} else {
var statearr_28645_28664 = state_28636__$1;
(statearr_28645_28664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (9))){
var inst_28631 = (state_28636[(2)]);
var state_28636__$1 = state_28636;
var statearr_28646_28665 = state_28636__$1;
(statearr_28646_28665[(2)] = inst_28631);

(statearr_28646_28665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (5))){
var inst_28618 = (state_28636[(8)]);
var state_28636__$1 = state_28636;
var statearr_28647_28666 = state_28636__$1;
(statearr_28647_28666[(2)] = inst_28618);

(statearr_28647_28666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (10))){
var inst_28627 = (state_28636[(2)]);
var state_28636__$1 = (function (){var statearr_28648 = state_28636;
(statearr_28648[(9)] = inst_28627);

return statearr_28648;
})();
var statearr_28649_28667 = state_28636__$1;
(statearr_28649_28667[(2)] = null);

(statearr_28649_28667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28637 === (8))){
var state_28636__$1 = state_28636;
var statearr_28650_28668 = state_28636__$1;
(statearr_28650_28668[(2)] = null);

(statearr_28650_28668[(1)] = (9));


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
});})(c__22560__auto___28658))
;
return ((function (switch__22539__auto__,c__22560__auto___28658){
return (function() {
var csasync$proc$start_process_$_state_machine__22540__auto__ = null;
var csasync$proc$start_process_$_state_machine__22540__auto____0 = (function (){
var statearr_28654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28654[(0)] = csasync$proc$start_process_$_state_machine__22540__auto__);

(statearr_28654[(1)] = (1));

return statearr_28654;
});
var csasync$proc$start_process_$_state_machine__22540__auto____1 = (function (state_28636){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_28636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e28655){if((e28655 instanceof Object)){
var ex__22543__auto__ = e28655;
var statearr_28656_28669 = state_28636;
(statearr_28656_28669[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28670 = state_28636;
state_28636 = G__28670;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22540__auto__ = function(state_28636){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22540__auto____1.call(this,state_28636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22540__auto____0;
csasync$proc$start_process_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22540__auto____1;
return csasync$proc$start_process_$_state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto___28658))
})();
var state__22562__auto__ = (function (){var statearr_28657 = f__22561__auto__.call(null);
(statearr_28657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto___28658);

return statearr_28657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto___28658))
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
var c__22560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22560__auto__){
return (function (){
var f__22561__auto__ = (function (){var switch__22539__auto__ = ((function (c__22560__auto__){
return (function (state_28691){
var state_val_28692 = (state_28691[(1)]);
if((state_val_28692 === (1))){
var inst_28686 = cljs.core.async.timeout.call(null,time);
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28691__$1,(2),inst_28686);
} else {
if((state_val_28692 === (2))){
var inst_28688 = (state_28691[(2)]);
var inst_28689 = func.call(null);
var state_28691__$1 = (function (){var statearr_28693 = state_28691;
(statearr_28693[(7)] = inst_28688);

return statearr_28693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28691__$1,inst_28689);
} else {
return null;
}
}
});})(c__22560__auto__))
;
return ((function (switch__22539__auto__,c__22560__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22540__auto__ = null;
var csasync$proc$delayer_$_state_machine__22540__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = csasync$proc$delayer_$_state_machine__22540__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var csasync$proc$delayer_$_state_machine__22540__auto____1 = (function (state_28691){
while(true){
var ret_value__22541__auto__ = (function (){try{while(true){
var result__22542__auto__ = switch__22539__auto__.call(null,state_28691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22542__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__22543__auto__ = e28698;
var statearr_28699_28701 = state_28691;
(statearr_28699_28701[(5)] = ex__22543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28702 = state_28691;
state_28691 = G__28702;
continue;
} else {
return ret_value__22541__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22540__auto__ = function(state_28691){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22540__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22540__auto____1.call(this,state_28691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22540__auto____0;
csasync$proc$delayer_$_state_machine__22540__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22540__auto____1;
return csasync$proc$delayer_$_state_machine__22540__auto__;
})()
;})(switch__22539__auto__,c__22560__auto__))
})();
var state__22562__auto__ = (function (){var statearr_28700 = f__22561__auto__.call(null);
(statearr_28700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22560__auto__);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22562__auto__);
});})(c__22560__auto__))
);

return c__22560__auto__;
});

//# sourceMappingURL=proc.js.map