// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args12427 = [];
var len__11062__auto___12490 = arguments.length;
var i__11063__auto___12491 = (0);
while(true){
if((i__11063__auto___12491 < len__11062__auto___12490)){
args12427.push((arguments[i__11063__auto___12491]));

var G__12492 = (i__11063__auto___12491 + (1));
i__11063__auto___12491 = G__12492;
continue;
} else {
}
break;
}

var G__12429 = args12427.length;
switch (G__12429) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12427.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__12382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto__){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto__){
return (function (state_12443){
var state_val_12444 = (state_12443[(1)]);
if((state_val_12444 === (1))){
var state_12443__$1 = state_12443;
var statearr_12445_12494 = state_12443__$1;
(statearr_12445_12494[(2)] = null);

(statearr_12445_12494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (2))){
var state_12443__$1 = state_12443;
var statearr_12446_12495 = state_12443__$1;
(statearr_12446_12495[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (3))){
var inst_12441 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12443__$1,inst_12441);
} else {
if((state_val_12444 === (4))){
var inst_12432 = func.call(null);
var inst_12433 = cljs.core.async.timeout.call(null,time_out);
var state_12443__$1 = (function (){var statearr_12448 = state_12443;
(statearr_12448[(7)] = inst_12432);

return statearr_12448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12443__$1,(7),inst_12433);
} else {
if((state_val_12444 === (5))){
var state_12443__$1 = state_12443;
var statearr_12449_12496 = state_12443__$1;
(statearr_12449_12496[(2)] = null);

(statearr_12449_12496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (6))){
var inst_12439 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12450_12497 = state_12443__$1;
(statearr_12450_12497[(2)] = inst_12439);

(statearr_12450_12497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12444 === (7))){
var inst_12435 = (state_12443[(2)]);
var state_12443__$1 = (function (){var statearr_12451 = state_12443;
(statearr_12451[(8)] = inst_12435);

return statearr_12451;
})();
var statearr_12452_12498 = state_12443__$1;
(statearr_12452_12498[(2)] = null);

(statearr_12452_12498[(1)] = (2));


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
});})(c__12382__auto__))
;
return ((function (switch__12361__auto__,c__12382__auto__){
return (function() {
var csasync$proc$state_machine__12362__auto__ = null;
var csasync$proc$state_machine__12362__auto____0 = (function (){
var statearr_12456 = [null,null,null,null,null,null,null,null,null];
(statearr_12456[(0)] = csasync$proc$state_machine__12362__auto__);

(statearr_12456[(1)] = (1));

return statearr_12456;
});
var csasync$proc$state_machine__12362__auto____1 = (function (state_12443){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12457){if((e12457 instanceof Object)){
var ex__12365__auto__ = e12457;
var statearr_12458_12499 = state_12443;
(statearr_12458_12499[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12500 = state_12443;
state_12443 = G__12500;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$state_machine__12362__auto__ = function(state_12443){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12362__auto____1.call(this,state_12443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12362__auto____0;
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12362__auto____1;
return csasync$proc$state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto__))
})();
var state__12384__auto__ = (function (){var statearr_12459 = f__12383__auto__.call(null);
(statearr_12459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto__);

return statearr_12459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto__))
);

return c__12382__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto__){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto__){
return (function (state_12473){
var state_val_12474 = (state_12473[(1)]);
if((state_val_12474 === (1))){
var state_12473__$1 = state_12473;
var statearr_12475_12501 = state_12473__$1;
(statearr_12475_12501[(2)] = null);

(statearr_12475_12501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (2))){
var state_12473__$1 = state_12473;
var statearr_12476_12502 = state_12473__$1;
(statearr_12476_12502[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (3))){
var inst_12471 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12473__$1,inst_12471);
} else {
if((state_val_12474 === (4))){
var inst_12462 = func.call(null,param);
var inst_12463 = cljs.core.async.timeout.call(null,time_out);
var state_12473__$1 = (function (){var statearr_12478 = state_12473;
(statearr_12478[(7)] = inst_12462);

return statearr_12478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12473__$1,(7),inst_12463);
} else {
if((state_val_12474 === (5))){
var state_12473__$1 = state_12473;
var statearr_12479_12503 = state_12473__$1;
(statearr_12479_12503[(2)] = null);

(statearr_12479_12503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (6))){
var inst_12469 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
var statearr_12480_12504 = state_12473__$1;
(statearr_12480_12504[(2)] = inst_12469);

(statearr_12480_12504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (7))){
var inst_12465 = (state_12473[(2)]);
var state_12473__$1 = (function (){var statearr_12481 = state_12473;
(statearr_12481[(8)] = inst_12465);

return statearr_12481;
})();
var statearr_12482_12505 = state_12473__$1;
(statearr_12482_12505[(2)] = null);

(statearr_12482_12505[(1)] = (2));


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
});})(c__12382__auto__))
;
return ((function (switch__12361__auto__,c__12382__auto__){
return (function() {
var csasync$proc$state_machine__12362__auto__ = null;
var csasync$proc$state_machine__12362__auto____0 = (function (){
var statearr_12486 = [null,null,null,null,null,null,null,null,null];
(statearr_12486[(0)] = csasync$proc$state_machine__12362__auto__);

(statearr_12486[(1)] = (1));

return statearr_12486;
});
var csasync$proc$state_machine__12362__auto____1 = (function (state_12473){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12487){if((e12487 instanceof Object)){
var ex__12365__auto__ = e12487;
var statearr_12488_12506 = state_12473;
(statearr_12488_12506[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12507 = state_12473;
state_12473 = G__12507;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$state_machine__12362__auto__ = function(state_12473){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12362__auto____1.call(this,state_12473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12362__auto____0;
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12362__auto____1;
return csasync$proc$state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto__))
})();
var state__12384__auto__ = (function (){var statearr_12489 = f__12383__auto__.call(null);
(statearr_12489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto__);

return statearr_12489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto__))
);

return c__12382__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__12382__auto___12616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto___12616){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto___12616){
return (function (state_12589){
var state_val_12590 = (state_12589[(1)]);
if((state_val_12590 === (7))){
var inst_12571 = cljs.core.async.timeout.call(null,time_out);
var state_12589__$1 = state_12589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12589__$1,(10),inst_12571);
} else {
if((state_val_12590 === (1))){
var state_12589__$1 = state_12589;
var statearr_12591_12617 = state_12589__$1;
(statearr_12591_12617[(2)] = null);

(statearr_12591_12617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (4))){
var inst_12566 = proc_fn.call(null);
var state_12589__$1 = state_12589;
var statearr_12592_12618 = state_12589__$1;
(statearr_12592_12618[(2)] = inst_12566);

(statearr_12592_12618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (13))){
var inst_12586 = (state_12589[(2)]);
var inst_12587 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_12589__$1 = (function (){var statearr_12593 = state_12589;
(statearr_12593[(7)] = inst_12586);

return statearr_12593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12589__$1,inst_12587);
} else {
if((state_val_12590 === (6))){
var inst_12569 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
if(cljs.core.truth_(inst_12569)){
var statearr_12594_12619 = state_12589__$1;
(statearr_12594_12619[(1)] = (7));

} else {
var statearr_12595_12620 = state_12589__$1;
(statearr_12595_12620[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (3))){
var inst_12579 = (state_12589[(2)]);
var inst_12580 = (final_fun == null);
var inst_12581 = cljs.core.not.call(null,inst_12580);
var state_12589__$1 = (function (){var statearr_12596 = state_12589;
(statearr_12596[(8)] = inst_12579);

return statearr_12596;
})();
if(inst_12581){
var statearr_12597_12621 = state_12589__$1;
(statearr_12597_12621[(1)] = (11));

} else {
var statearr_12598_12622 = state_12589__$1;
(statearr_12598_12622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (12))){
var state_12589__$1 = state_12589;
var statearr_12599_12623 = state_12589__$1;
(statearr_12599_12623[(2)] = null);

(statearr_12599_12623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (2))){
var inst_12564 = (state_12589[(9)]);
var inst_12563 = cljs.core.deref.call(null,status);
var inst_12564__$1 = cljs.core._EQ_.call(null,inst_12563,"RUN");
var state_12589__$1 = (function (){var statearr_12600 = state_12589;
(statearr_12600[(9)] = inst_12564__$1);

return statearr_12600;
})();
if(inst_12564__$1){
var statearr_12601_12624 = state_12589__$1;
(statearr_12601_12624[(1)] = (4));

} else {
var statearr_12602_12625 = state_12589__$1;
(statearr_12602_12625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (11))){
var inst_12583 = final_fun.call(null);
var state_12589__$1 = state_12589;
var statearr_12603_12626 = state_12589__$1;
(statearr_12603_12626[(2)] = inst_12583);

(statearr_12603_12626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (9))){
var inst_12577 = (state_12589[(2)]);
var state_12589__$1 = state_12589;
var statearr_12604_12627 = state_12589__$1;
(statearr_12604_12627[(2)] = inst_12577);

(statearr_12604_12627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (5))){
var inst_12564 = (state_12589[(9)]);
var state_12589__$1 = state_12589;
var statearr_12605_12628 = state_12589__$1;
(statearr_12605_12628[(2)] = inst_12564);

(statearr_12605_12628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (10))){
var inst_12573 = (state_12589[(2)]);
var state_12589__$1 = (function (){var statearr_12606 = state_12589;
(statearr_12606[(10)] = inst_12573);

return statearr_12606;
})();
var statearr_12607_12629 = state_12589__$1;
(statearr_12607_12629[(2)] = null);

(statearr_12607_12629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12590 === (8))){
var state_12589__$1 = state_12589;
var statearr_12608_12630 = state_12589__$1;
(statearr_12608_12630[(2)] = null);

(statearr_12608_12630[(1)] = (9));


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
});})(c__12382__auto___12616))
;
return ((function (switch__12361__auto__,c__12382__auto___12616){
return (function() {
var csasync$proc$start_process_$_state_machine__12362__auto__ = null;
var csasync$proc$start_process_$_state_machine__12362__auto____0 = (function (){
var statearr_12612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12612[(0)] = csasync$proc$start_process_$_state_machine__12362__auto__);

(statearr_12612[(1)] = (1));

return statearr_12612;
});
var csasync$proc$start_process_$_state_machine__12362__auto____1 = (function (state_12589){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12613){if((e12613 instanceof Object)){
var ex__12365__auto__ = e12613;
var statearr_12614_12631 = state_12589;
(statearr_12614_12631[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12632 = state_12589;
state_12589 = G__12632;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__12362__auto__ = function(state_12589){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__12362__auto____1.call(this,state_12589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__12362__auto____0;
csasync$proc$start_process_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__12362__auto____1;
return csasync$proc$start_process_$_state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto___12616))
})();
var state__12384__auto__ = (function (){var statearr_12615 = f__12383__auto__.call(null);
(statearr_12615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto___12616);

return statearr_12615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto___12616))
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
var c__12382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto__){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto__){
return (function (state_12653){
var state_val_12654 = (state_12653[(1)]);
if((state_val_12654 === (1))){
var inst_12648 = cljs.core.async.timeout.call(null,time);
var state_12653__$1 = state_12653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12653__$1,(2),inst_12648);
} else {
if((state_val_12654 === (2))){
var inst_12650 = (state_12653[(2)]);
var inst_12651 = func.call(null);
var state_12653__$1 = (function (){var statearr_12655 = state_12653;
(statearr_12655[(7)] = inst_12650);

return statearr_12655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12653__$1,inst_12651);
} else {
return null;
}
}
});})(c__12382__auto__))
;
return ((function (switch__12361__auto__,c__12382__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__12362__auto__ = null;
var csasync$proc$delayer_$_state_machine__12362__auto____0 = (function (){
var statearr_12659 = [null,null,null,null,null,null,null,null];
(statearr_12659[(0)] = csasync$proc$delayer_$_state_machine__12362__auto__);

(statearr_12659[(1)] = (1));

return statearr_12659;
});
var csasync$proc$delayer_$_state_machine__12362__auto____1 = (function (state_12653){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12660){if((e12660 instanceof Object)){
var ex__12365__auto__ = e12660;
var statearr_12661_12663 = state_12653;
(statearr_12661_12663[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12664 = state_12653;
state_12653 = G__12664;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__12362__auto__ = function(state_12653){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__12362__auto____1.call(this,state_12653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__12362__auto____0;
csasync$proc$delayer_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__12362__auto____1;
return csasync$proc$delayer_$_state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto__))
})();
var state__12384__auto__ = (function (){var statearr_12662 = f__12383__auto__.call(null);
(statearr_12662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto__);

return statearr_12662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto__))
);

return c__12382__auto__;
});

//# sourceMappingURL=proc.js.map