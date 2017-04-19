// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args34430 = [];
var len__10353__auto___34493 = arguments.length;
var i__10354__auto___34494 = (0);
while(true){
if((i__10354__auto___34494 < len__10353__auto___34493)){
args34430.push((arguments[i__10354__auto___34494]));

var G__34495 = (i__10354__auto___34494 + (1));
i__10354__auto___34494 = G__34495;
continue;
} else {
}
break;
}

var G__34432 = args34430.length;
switch (G__34432) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34430.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__){
return (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (1))){
var state_34446__$1 = state_34446;
var statearr_34448_34497 = state_34446__$1;
(statearr_34448_34497[(2)] = null);

(statearr_34448_34497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (2))){
var state_34446__$1 = state_34446;
var statearr_34449_34498 = state_34446__$1;
(statearr_34449_34498[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (3))){
var inst_34444 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34446__$1,inst_34444);
} else {
if((state_val_34447 === (4))){
var inst_34435 = func.call(null);
var inst_34436 = cljs.core.async.timeout.call(null,time_out);
var state_34446__$1 = (function (){var statearr_34451 = state_34446;
(statearr_34451[(7)] = inst_34435);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34446__$1,(7),inst_34436);
} else {
if((state_val_34447 === (5))){
var state_34446__$1 = state_34446;
var statearr_34452_34499 = state_34446__$1;
(statearr_34452_34499[(2)] = null);

(statearr_34452_34499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (6))){
var inst_34442 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34453_34500 = state_34446__$1;
(statearr_34453_34500[(2)] = inst_34442);

(statearr_34453_34500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (7))){
var inst_34438 = (state_34446[(2)]);
var state_34446__$1 = (function (){var statearr_34454 = state_34446;
(statearr_34454[(8)] = inst_34438);

return statearr_34454;
})();
var statearr_34455_34501 = state_34446__$1;
(statearr_34455_34501[(2)] = null);

(statearr_34455_34501[(1)] = (2));


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
});})(c__16023__auto__))
;
return ((function (switch__15911__auto__,c__16023__auto__){
return (function() {
var csasync$proc$state_machine__15912__auto__ = null;
var csasync$proc$state_machine__15912__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null,null,null];
(statearr_34459[(0)] = csasync$proc$state_machine__15912__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var csasync$proc$state_machine__15912__auto____1 = (function (state_34446){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_34446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e34460){if((e34460 instanceof Object)){
var ex__15915__auto__ = e34460;
var statearr_34461_34502 = state_34446;
(statearr_34461_34502[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34503 = state_34446;
state_34446 = G__34503;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
csasync$proc$state_machine__15912__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__15912__auto____0.call(this);
case 1:
return csasync$proc$state_machine__15912__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__15912__auto____0;
csasync$proc$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__15912__auto____1;
return csasync$proc$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__))
})();
var state__16025__auto__ = (function (){var statearr_34462 = f__16024__auto__.call(null);
(statearr_34462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__))
);

return c__16023__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_34504 = state_34476__$1;
(statearr_34478_34504[(2)] = null);

(statearr_34478_34504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (2))){
var state_34476__$1 = state_34476;
var statearr_34479_34505 = state_34476__$1;
(statearr_34479_34505[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (3))){
var inst_34474 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34476__$1,inst_34474);
} else {
if((state_val_34477 === (4))){
var inst_34465 = func.call(null,param);
var inst_34466 = cljs.core.async.timeout.call(null,time_out);
var state_34476__$1 = (function (){var statearr_34481 = state_34476;
(statearr_34481[(7)] = inst_34465);

return statearr_34481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34476__$1,(7),inst_34466);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34482_34506 = state_34476__$1;
(statearr_34482_34506[(2)] = null);

(statearr_34482_34506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_34507 = state_34476__$1;
(statearr_34483_34507[(2)] = inst_34472);

(statearr_34483_34507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34468 = (state_34476[(2)]);
var state_34476__$1 = (function (){var statearr_34484 = state_34476;
(statearr_34484[(8)] = inst_34468);

return statearr_34484;
})();
var statearr_34485_34508 = state_34476__$1;
(statearr_34485_34508[(2)] = null);

(statearr_34485_34508[(1)] = (2));


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
});})(c__16023__auto__))
;
return ((function (switch__15911__auto__,c__16023__auto__){
return (function() {
var csasync$proc$state_machine__15912__auto__ = null;
var csasync$proc$state_machine__15912__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null,null,null];
(statearr_34489[(0)] = csasync$proc$state_machine__15912__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
});
var csasync$proc$state_machine__15912__auto____1 = (function (state_34476){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_34476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e34490){if((e34490 instanceof Object)){
var ex__15915__auto__ = e34490;
var statearr_34491_34509 = state_34476;
(statearr_34491_34509[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34510 = state_34476;
state_34476 = G__34510;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
csasync$proc$state_machine__15912__auto__ = function(state_34476){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__15912__auto____0.call(this);
case 1:
return csasync$proc$state_machine__15912__auto____1.call(this,state_34476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__15912__auto____0;
csasync$proc$state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__15912__auto____1;
return csasync$proc$state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__))
})();
var state__16025__auto__ = (function (){var statearr_34492 = f__16024__auto__.call(null);
(statearr_34492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__))
);

return c__16023__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__16023__auto___34595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto___34595){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto___34595){
return (function (state_34573){
var state_val_34574 = (state_34573[(1)]);
if((state_val_34574 === (7))){
var inst_34562 = cljs.core.async.timeout.call(null,time_out);
var state_34573__$1 = state_34573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34573__$1,(10),inst_34562);
} else {
if((state_val_34574 === (1))){
var state_34573__$1 = state_34573;
var statearr_34575_34596 = state_34573__$1;
(statearr_34575_34596[(2)] = null);

(statearr_34575_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (4))){
var inst_34557 = proc_fn.call(null);
var state_34573__$1 = state_34573;
var statearr_34576_34597 = state_34573__$1;
(statearr_34576_34597[(2)] = inst_34557);

(statearr_34576_34597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (6))){
var inst_34560 = (state_34573[(2)]);
var state_34573__$1 = state_34573;
if(cljs.core.truth_(inst_34560)){
var statearr_34577_34598 = state_34573__$1;
(statearr_34577_34598[(1)] = (7));

} else {
var statearr_34578_34599 = state_34573__$1;
(statearr_34578_34599[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (3))){
var inst_34570 = (state_34573[(2)]);
var inst_34571 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_34573__$1 = (function (){var statearr_34579 = state_34573;
(statearr_34579[(7)] = inst_34570);

return statearr_34579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34573__$1,inst_34571);
} else {
if((state_val_34574 === (2))){
var inst_34555 = (state_34573[(8)]);
var inst_34554 = cljs.core.deref.call(null,status);
var inst_34555__$1 = cljs.core._EQ_.call(null,inst_34554,"RUN");
var state_34573__$1 = (function (){var statearr_34580 = state_34573;
(statearr_34580[(8)] = inst_34555__$1);

return statearr_34580;
})();
if(inst_34555__$1){
var statearr_34581_34600 = state_34573__$1;
(statearr_34581_34600[(1)] = (4));

} else {
var statearr_34582_34601 = state_34573__$1;
(statearr_34582_34601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (9))){
var inst_34568 = (state_34573[(2)]);
var state_34573__$1 = state_34573;
var statearr_34583_34602 = state_34573__$1;
(statearr_34583_34602[(2)] = inst_34568);

(statearr_34583_34602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (5))){
var inst_34555 = (state_34573[(8)]);
var state_34573__$1 = state_34573;
var statearr_34584_34603 = state_34573__$1;
(statearr_34584_34603[(2)] = inst_34555);

(statearr_34584_34603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (10))){
var inst_34564 = (state_34573[(2)]);
var state_34573__$1 = (function (){var statearr_34585 = state_34573;
(statearr_34585[(9)] = inst_34564);

return statearr_34585;
})();
var statearr_34586_34604 = state_34573__$1;
(statearr_34586_34604[(2)] = null);

(statearr_34586_34604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (8))){
var state_34573__$1 = state_34573;
var statearr_34587_34605 = state_34573__$1;
(statearr_34587_34605[(2)] = null);

(statearr_34587_34605[(1)] = (9));


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
});})(c__16023__auto___34595))
;
return ((function (switch__15911__auto__,c__16023__auto___34595){
return (function() {
var csasync$proc$start_process_$_state_machine__15912__auto__ = null;
var csasync$proc$start_process_$_state_machine__15912__auto____0 = (function (){
var statearr_34591 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34591[(0)] = csasync$proc$start_process_$_state_machine__15912__auto__);

(statearr_34591[(1)] = (1));

return statearr_34591;
});
var csasync$proc$start_process_$_state_machine__15912__auto____1 = (function (state_34573){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_34573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e34592){if((e34592 instanceof Object)){
var ex__15915__auto__ = e34592;
var statearr_34593_34606 = state_34573;
(statearr_34593_34606[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34607 = state_34573;
state_34573 = G__34607;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__15912__auto__ = function(state_34573){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__15912__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__15912__auto____1.call(this,state_34573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__15912__auto____0;
csasync$proc$start_process_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__15912__auto____1;
return csasync$proc$start_process_$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto___34595))
})();
var state__16025__auto__ = (function (){var statearr_34594 = f__16024__auto__.call(null);
(statearr_34594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto___34595);

return statearr_34594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto___34595))
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
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__){
return (function (state_34628){
var state_val_34629 = (state_34628[(1)]);
if((state_val_34629 === (1))){
var inst_34623 = cljs.core.async.timeout.call(null,time);
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34628__$1,(2),inst_34623);
} else {
if((state_val_34629 === (2))){
var inst_34625 = (state_34628[(2)]);
var inst_34626 = func.call(null);
var state_34628__$1 = (function (){var statearr_34630 = state_34628;
(statearr_34630[(7)] = inst_34625);

return statearr_34630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34628__$1,inst_34626);
} else {
return null;
}
}
});})(c__16023__auto__))
;
return ((function (switch__15911__auto__,c__16023__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__15912__auto__ = null;
var csasync$proc$delayer_$_state_machine__15912__auto____0 = (function (){
var statearr_34634 = [null,null,null,null,null,null,null,null];
(statearr_34634[(0)] = csasync$proc$delayer_$_state_machine__15912__auto__);

(statearr_34634[(1)] = (1));

return statearr_34634;
});
var csasync$proc$delayer_$_state_machine__15912__auto____1 = (function (state_34628){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_34628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e34635){if((e34635 instanceof Object)){
var ex__15915__auto__ = e34635;
var statearr_34636_34638 = state_34628;
(statearr_34636_34638[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34639 = state_34628;
state_34628 = G__34639;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__15912__auto__ = function(state_34628){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__15912__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__15912__auto____1.call(this,state_34628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__15912__auto____0;
csasync$proc$delayer_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__15912__auto____1;
return csasync$proc$delayer_$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__))
})();
var state__16025__auto__ = (function (){var statearr_34637 = f__16024__auto__.call(null);
(statearr_34637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_34637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__))
);

return c__16023__auto__;
});

//# sourceMappingURL=proc.js.map