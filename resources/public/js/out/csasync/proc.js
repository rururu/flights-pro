// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25495 = [];
var len__20708__auto___25558 = arguments.length;
var i__20709__auto___25559 = (0);
while(true){
if((i__20709__auto___25559 < len__20708__auto___25558)){
args25495.push((arguments[i__20709__auto___25559]));

var G__25560 = (i__20709__auto___25559 + (1));
i__20709__auto___25559 = G__25560;
continue;
} else {
}
break;
}

var G__25497 = args25495.length;
switch (G__25497) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25495.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21663__auto__){
return (function (){
var f__21664__auto__ = (function (){var switch__21642__auto__ = ((function (c__21663__auto__){
return (function (state_25511){
var state_val_25512 = (state_25511[(1)]);
if((state_val_25512 === (1))){
var state_25511__$1 = state_25511;
var statearr_25513_25562 = state_25511__$1;
(statearr_25513_25562[(2)] = null);

(statearr_25513_25562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (2))){
var state_25511__$1 = state_25511;
var statearr_25514_25563 = state_25511__$1;
(statearr_25514_25563[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (3))){
var inst_25509 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else {
if((state_val_25512 === (4))){
var inst_25500 = func.call(null);
var inst_25501 = cljs.core.async.timeout.call(null,time_out);
var state_25511__$1 = (function (){var statearr_25516 = state_25511;
(statearr_25516[(7)] = inst_25500);

return statearr_25516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25511__$1,(7),inst_25501);
} else {
if((state_val_25512 === (5))){
var state_25511__$1 = state_25511;
var statearr_25517_25564 = state_25511__$1;
(statearr_25517_25564[(2)] = null);

(statearr_25517_25564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (6))){
var inst_25507 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25518_25565 = state_25511__$1;
(statearr_25518_25565[(2)] = inst_25507);

(statearr_25518_25565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (7))){
var inst_25503 = (state_25511[(2)]);
var state_25511__$1 = (function (){var statearr_25519 = state_25511;
(statearr_25519[(8)] = inst_25503);

return statearr_25519;
})();
var statearr_25520_25566 = state_25511__$1;
(statearr_25520_25566[(2)] = null);

(statearr_25520_25566[(1)] = (2));


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
});})(c__21663__auto__))
;
return ((function (switch__21642__auto__,c__21663__auto__){
return (function() {
var csasync$proc$state_machine__21643__auto__ = null;
var csasync$proc$state_machine__21643__auto____0 = (function (){
var statearr_25524 = [null,null,null,null,null,null,null,null,null];
(statearr_25524[(0)] = csasync$proc$state_machine__21643__auto__);

(statearr_25524[(1)] = (1));

return statearr_25524;
});
var csasync$proc$state_machine__21643__auto____1 = (function (state_25511){
while(true){
var ret_value__21644__auto__ = (function (){try{while(true){
var result__21645__auto__ = switch__21642__auto__.call(null,state_25511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21645__auto__;
}
break;
}
}catch (e25525){if((e25525 instanceof Object)){
var ex__21646__auto__ = e25525;
var statearr_25526_25567 = state_25511;
(statearr_25526_25567[(5)] = ex__21646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25568 = state_25511;
state_25511 = G__25568;
continue;
} else {
return ret_value__21644__auto__;
}
break;
}
});
csasync$proc$state_machine__21643__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21643__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21643__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21643__auto____0;
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21643__auto____1;
return csasync$proc$state_machine__21643__auto__;
})()
;})(switch__21642__auto__,c__21663__auto__))
})();
var state__21665__auto__ = (function (){var statearr_25527 = f__21664__auto__.call(null);
(statearr_25527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21663__auto__);

return statearr_25527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21665__auto__);
});})(c__21663__auto__))
);

return c__21663__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21663__auto__){
return (function (){
var f__21664__auto__ = (function (){var switch__21642__auto__ = ((function (c__21663__auto__){
return (function (state_25541){
var state_val_25542 = (state_25541[(1)]);
if((state_val_25542 === (1))){
var state_25541__$1 = state_25541;
var statearr_25543_25569 = state_25541__$1;
(statearr_25543_25569[(2)] = null);

(statearr_25543_25569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (2))){
var state_25541__$1 = state_25541;
var statearr_25544_25570 = state_25541__$1;
(statearr_25544_25570[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (3))){
var inst_25539 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25541__$1,inst_25539);
} else {
if((state_val_25542 === (4))){
var inst_25530 = func.call(null,param);
var inst_25531 = cljs.core.async.timeout.call(null,time_out);
var state_25541__$1 = (function (){var statearr_25546 = state_25541;
(statearr_25546[(7)] = inst_25530);

return statearr_25546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25541__$1,(7),inst_25531);
} else {
if((state_val_25542 === (5))){
var state_25541__$1 = state_25541;
var statearr_25547_25571 = state_25541__$1;
(statearr_25547_25571[(2)] = null);

(statearr_25547_25571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (6))){
var inst_25537 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25548_25572 = state_25541__$1;
(statearr_25548_25572[(2)] = inst_25537);

(statearr_25548_25572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (7))){
var inst_25533 = (state_25541[(2)]);
var state_25541__$1 = (function (){var statearr_25549 = state_25541;
(statearr_25549[(8)] = inst_25533);

return statearr_25549;
})();
var statearr_25550_25573 = state_25541__$1;
(statearr_25550_25573[(2)] = null);

(statearr_25550_25573[(1)] = (2));


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
});})(c__21663__auto__))
;
return ((function (switch__21642__auto__,c__21663__auto__){
return (function() {
var csasync$proc$state_machine__21643__auto__ = null;
var csasync$proc$state_machine__21643__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = csasync$proc$state_machine__21643__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var csasync$proc$state_machine__21643__auto____1 = (function (state_25541){
while(true){
var ret_value__21644__auto__ = (function (){try{while(true){
var result__21645__auto__ = switch__21642__auto__.call(null,state_25541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21645__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__21646__auto__ = e25555;
var statearr_25556_25574 = state_25541;
(statearr_25556_25574[(5)] = ex__21646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25575 = state_25541;
state_25541 = G__25575;
continue;
} else {
return ret_value__21644__auto__;
}
break;
}
});
csasync$proc$state_machine__21643__auto__ = function(state_25541){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21643__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21643__auto____1.call(this,state_25541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21643__auto____0;
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21643__auto____1;
return csasync$proc$state_machine__21643__auto__;
})()
;})(switch__21642__auto__,c__21663__auto__))
})();
var state__21665__auto__ = (function (){var statearr_25557 = f__21664__auto__.call(null);
(statearr_25557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21663__auto__);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21665__auto__);
});})(c__21663__auto__))
);

return c__21663__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args25576 = [];
var len__20708__auto___25663 = arguments.length;
var i__20709__auto___25664 = (0);
while(true){
if((i__20709__auto___25664 < len__20708__auto___25663)){
args25576.push((arguments[i__20709__auto___25664]));

var G__25665 = (i__20709__auto___25664 + (1));
i__20709__auto___25664 = G__25665;
continue;
} else {
}
break;
}

var G__25578 = args25576.length;
switch (G__25578) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25576.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21663__auto___25667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21663__auto___25667){
return (function (){
var f__21664__auto__ = (function (){var switch__21642__auto__ = ((function (c__21663__auto___25667){
return (function (state_25599){
var state_val_25600 = (state_25599[(1)]);
if((state_val_25600 === (7))){
var inst_25588 = cljs.core.async.timeout.call(null,time_out);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25599__$1,(10),inst_25588);
} else {
if((state_val_25600 === (1))){
var state_25599__$1 = state_25599;
var statearr_25601_25668 = state_25599__$1;
(statearr_25601_25668[(2)] = null);

(statearr_25601_25668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (4))){
var inst_25583 = proc_fn.call(null);
var state_25599__$1 = state_25599;
var statearr_25602_25669 = state_25599__$1;
(statearr_25602_25669[(2)] = inst_25583);

(statearr_25602_25669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (6))){
var inst_25586 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25586)){
var statearr_25603_25670 = state_25599__$1;
(statearr_25603_25670[(1)] = (7));

} else {
var statearr_25604_25671 = state_25599__$1;
(statearr_25604_25671[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (3))){
var inst_25596 = (state_25599[(2)]);
var inst_25597 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25599__$1 = (function (){var statearr_25605 = state_25599;
(statearr_25605[(7)] = inst_25596);

return statearr_25605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25599__$1,inst_25597);
} else {
if((state_val_25600 === (2))){
var inst_25581 = (state_25599[(8)]);
var inst_25580 = cljs.core.deref.call(null,status);
var inst_25581__$1 = cljs.core._EQ_.call(null,inst_25580,"RUN");
var state_25599__$1 = (function (){var statearr_25606 = state_25599;
(statearr_25606[(8)] = inst_25581__$1);

return statearr_25606;
})();
if(inst_25581__$1){
var statearr_25607_25672 = state_25599__$1;
(statearr_25607_25672[(1)] = (4));

} else {
var statearr_25608_25673 = state_25599__$1;
(statearr_25608_25673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (9))){
var inst_25594 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25609_25674 = state_25599__$1;
(statearr_25609_25674[(2)] = inst_25594);

(statearr_25609_25674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (5))){
var inst_25581 = (state_25599[(8)]);
var state_25599__$1 = state_25599;
var statearr_25610_25675 = state_25599__$1;
(statearr_25610_25675[(2)] = inst_25581);

(statearr_25610_25675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (10))){
var inst_25590 = (state_25599[(2)]);
var state_25599__$1 = (function (){var statearr_25611 = state_25599;
(statearr_25611[(9)] = inst_25590);

return statearr_25611;
})();
var statearr_25612_25676 = state_25599__$1;
(statearr_25612_25676[(2)] = null);

(statearr_25612_25676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (8))){
var state_25599__$1 = state_25599;
var statearr_25613_25677 = state_25599__$1;
(statearr_25613_25677[(2)] = null);

(statearr_25613_25677[(1)] = (9));


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
});})(c__21663__auto___25667))
;
return ((function (switch__21642__auto__,c__21663__auto___25667){
return (function() {
var csasync$proc$state_machine__21643__auto__ = null;
var csasync$proc$state_machine__21643__auto____0 = (function (){
var statearr_25617 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25617[(0)] = csasync$proc$state_machine__21643__auto__);

(statearr_25617[(1)] = (1));

return statearr_25617;
});
var csasync$proc$state_machine__21643__auto____1 = (function (state_25599){
while(true){
var ret_value__21644__auto__ = (function (){try{while(true){
var result__21645__auto__ = switch__21642__auto__.call(null,state_25599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21645__auto__;
}
break;
}
}catch (e25618){if((e25618 instanceof Object)){
var ex__21646__auto__ = e25618;
var statearr_25619_25678 = state_25599;
(statearr_25619_25678[(5)] = ex__21646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25679 = state_25599;
state_25599 = G__25679;
continue;
} else {
return ret_value__21644__auto__;
}
break;
}
});
csasync$proc$state_machine__21643__auto__ = function(state_25599){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21643__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21643__auto____1.call(this,state_25599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21643__auto____0;
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21643__auto____1;
return csasync$proc$state_machine__21643__auto__;
})()
;})(switch__21642__auto__,c__21663__auto___25667))
})();
var state__21665__auto__ = (function (){var statearr_25620 = f__21664__auto__.call(null);
(statearr_25620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21663__auto___25667);

return statearr_25620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21665__auto__);
});})(c__21663__auto___25667))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21663__auto___25680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21663__auto___25680){
return (function (){
var f__21664__auto__ = (function (){var switch__21642__auto__ = ((function (c__21663__auto___25680){
return (function (state_25641){
var state_val_25642 = (state_25641[(1)]);
if((state_val_25642 === (7))){
var inst_25630 = cljs.core.async.timeout.call(null,time_out);
var state_25641__$1 = state_25641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25641__$1,(10),inst_25630);
} else {
if((state_val_25642 === (1))){
var state_25641__$1 = state_25641;
var statearr_25643_25681 = state_25641__$1;
(statearr_25643_25681[(2)] = null);

(statearr_25643_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25642 === (4))){
var inst_25625 = proc_fn.call(null,param);
var state_25641__$1 = state_25641;
var statearr_25644_25682 = state_25641__$1;
(statearr_25644_25682[(2)] = inst_25625);

(statearr_25644_25682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25642 === (6))){
var inst_25628 = (state_25641[(2)]);
var state_25641__$1 = state_25641;
if(cljs.core.truth_(inst_25628)){
var statearr_25645_25683 = state_25641__$1;
(statearr_25645_25683[(1)] = (7));

} else {
var statearr_25646_25684 = state_25641__$1;
(statearr_25646_25684[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25642 === (3))){
var inst_25638 = (state_25641[(2)]);
var inst_25639 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25641__$1 = (function (){var statearr_25647 = state_25641;
(statearr_25647[(7)] = inst_25638);

return statearr_25647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25641__$1,inst_25639);
} else {
if((state_val_25642 === (2))){
var inst_25623 = (state_25641[(8)]);
var inst_25622 = cljs.core.deref.call(null,status);
var inst_25623__$1 = cljs.core._EQ_.call(null,inst_25622,"RUN");
var state_25641__$1 = (function (){var statearr_25648 = state_25641;
(statearr_25648[(8)] = inst_25623__$1);

return statearr_25648;
})();
if(inst_25623__$1){
var statearr_25649_25685 = state_25641__$1;
(statearr_25649_25685[(1)] = (4));

} else {
var statearr_25650_25686 = state_25641__$1;
(statearr_25650_25686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25642 === (9))){
var inst_25636 = (state_25641[(2)]);
var state_25641__$1 = state_25641;
var statearr_25651_25687 = state_25641__$1;
(statearr_25651_25687[(2)] = inst_25636);

(statearr_25651_25687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25642 === (5))){
var inst_25623 = (state_25641[(8)]);
var state_25641__$1 = state_25641;
var statearr_25652_25688 = state_25641__$1;
(statearr_25652_25688[(2)] = inst_25623);

(statearr_25652_25688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25642 === (10))){
var inst_25632 = (state_25641[(2)]);
var state_25641__$1 = (function (){var statearr_25653 = state_25641;
(statearr_25653[(9)] = inst_25632);

return statearr_25653;
})();
var statearr_25654_25689 = state_25641__$1;
(statearr_25654_25689[(2)] = null);

(statearr_25654_25689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25642 === (8))){
var state_25641__$1 = state_25641;
var statearr_25655_25690 = state_25641__$1;
(statearr_25655_25690[(2)] = null);

(statearr_25655_25690[(1)] = (9));


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
});})(c__21663__auto___25680))
;
return ((function (switch__21642__auto__,c__21663__auto___25680){
return (function() {
var csasync$proc$state_machine__21643__auto__ = null;
var csasync$proc$state_machine__21643__auto____0 = (function (){
var statearr_25659 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25659[(0)] = csasync$proc$state_machine__21643__auto__);

(statearr_25659[(1)] = (1));

return statearr_25659;
});
var csasync$proc$state_machine__21643__auto____1 = (function (state_25641){
while(true){
var ret_value__21644__auto__ = (function (){try{while(true){
var result__21645__auto__ = switch__21642__auto__.call(null,state_25641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21645__auto__;
}
break;
}
}catch (e25660){if((e25660 instanceof Object)){
var ex__21646__auto__ = e25660;
var statearr_25661_25691 = state_25641;
(statearr_25661_25691[(5)] = ex__21646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25692 = state_25641;
state_25641 = G__25692;
continue;
} else {
return ret_value__21644__auto__;
}
break;
}
});
csasync$proc$state_machine__21643__auto__ = function(state_25641){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21643__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21643__auto____1.call(this,state_25641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21643__auto____0;
csasync$proc$state_machine__21643__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21643__auto____1;
return csasync$proc$state_machine__21643__auto__;
})()
;})(switch__21642__auto__,c__21663__auto___25680))
})();
var state__21665__auto__ = (function (){var statearr_25662 = f__21664__auto__.call(null);
(statearr_25662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21663__auto___25680);

return statearr_25662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21665__auto__);
});})(c__21663__auto___25680))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$lang$maxFixedArity = 4;

csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"STOP");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});

//# sourceMappingURL=proc.js.map