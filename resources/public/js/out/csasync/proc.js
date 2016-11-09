// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21538 = [];
var len__19792__auto___21601 = arguments.length;
var i__19793__auto___21602 = (0);
while(true){
if((i__19793__auto___21602 < len__19792__auto___21601)){
args21538.push((arguments[i__19793__auto___21602]));

var G__21603 = (i__19793__auto___21602 + (1));
i__19793__auto___21602 = G__21603;
continue;
} else {
}
break;
}

var G__21540 = args21538.length;
switch (G__21540) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21538.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__20747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20747__auto__){
return (function (){
var f__20748__auto__ = (function (){var switch__20726__auto__ = ((function (c__20747__auto__){
return (function (state_21554){
var state_val_21555 = (state_21554[(1)]);
if((state_val_21555 === (1))){
var state_21554__$1 = state_21554;
var statearr_21556_21605 = state_21554__$1;
(statearr_21556_21605[(2)] = null);

(statearr_21556_21605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21555 === (2))){
var state_21554__$1 = state_21554;
var statearr_21557_21606 = state_21554__$1;
(statearr_21557_21606[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21555 === (3))){
var inst_21552 = (state_21554[(2)]);
var state_21554__$1 = state_21554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21554__$1,inst_21552);
} else {
if((state_val_21555 === (4))){
var inst_21543 = func.call(null);
var inst_21544 = cljs.core.async.timeout.call(null,time_out);
var state_21554__$1 = (function (){var statearr_21559 = state_21554;
(statearr_21559[(7)] = inst_21543);

return statearr_21559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21554__$1,(7),inst_21544);
} else {
if((state_val_21555 === (5))){
var state_21554__$1 = state_21554;
var statearr_21560_21607 = state_21554__$1;
(statearr_21560_21607[(2)] = null);

(statearr_21560_21607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21555 === (6))){
var inst_21550 = (state_21554[(2)]);
var state_21554__$1 = state_21554;
var statearr_21561_21608 = state_21554__$1;
(statearr_21561_21608[(2)] = inst_21550);

(statearr_21561_21608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21555 === (7))){
var inst_21546 = (state_21554[(2)]);
var state_21554__$1 = (function (){var statearr_21562 = state_21554;
(statearr_21562[(8)] = inst_21546);

return statearr_21562;
})();
var statearr_21563_21609 = state_21554__$1;
(statearr_21563_21609[(2)] = null);

(statearr_21563_21609[(1)] = (2));


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
});})(c__20747__auto__))
;
return ((function (switch__20726__auto__,c__20747__auto__){
return (function() {
var csasync$proc$state_machine__20727__auto__ = null;
var csasync$proc$state_machine__20727__auto____0 = (function (){
var statearr_21567 = [null,null,null,null,null,null,null,null,null];
(statearr_21567[(0)] = csasync$proc$state_machine__20727__auto__);

(statearr_21567[(1)] = (1));

return statearr_21567;
});
var csasync$proc$state_machine__20727__auto____1 = (function (state_21554){
while(true){
var ret_value__20728__auto__ = (function (){try{while(true){
var result__20729__auto__ = switch__20726__auto__.call(null,state_21554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20729__auto__;
}
break;
}
}catch (e21568){if((e21568 instanceof Object)){
var ex__20730__auto__ = e21568;
var statearr_21569_21610 = state_21554;
(statearr_21569_21610[(5)] = ex__20730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21611 = state_21554;
state_21554 = G__21611;
continue;
} else {
return ret_value__20728__auto__;
}
break;
}
});
csasync$proc$state_machine__20727__auto__ = function(state_21554){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20727__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20727__auto____1.call(this,state_21554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20727__auto____0;
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20727__auto____1;
return csasync$proc$state_machine__20727__auto__;
})()
;})(switch__20726__auto__,c__20747__auto__))
})();
var state__20749__auto__ = (function (){var statearr_21570 = f__20748__auto__.call(null);
(statearr_21570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20747__auto__);

return statearr_21570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20749__auto__);
});})(c__20747__auto__))
);

return c__20747__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__20747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20747__auto__){
return (function (){
var f__20748__auto__ = (function (){var switch__20726__auto__ = ((function (c__20747__auto__){
return (function (state_21584){
var state_val_21585 = (state_21584[(1)]);
if((state_val_21585 === (1))){
var state_21584__$1 = state_21584;
var statearr_21586_21612 = state_21584__$1;
(statearr_21586_21612[(2)] = null);

(statearr_21586_21612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (2))){
var state_21584__$1 = state_21584;
var statearr_21587_21613 = state_21584__$1;
(statearr_21587_21613[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (3))){
var inst_21582 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21584__$1,inst_21582);
} else {
if((state_val_21585 === (4))){
var inst_21573 = func.call(null,param);
var inst_21574 = cljs.core.async.timeout.call(null,time_out);
var state_21584__$1 = (function (){var statearr_21589 = state_21584;
(statearr_21589[(7)] = inst_21573);

return statearr_21589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21584__$1,(7),inst_21574);
} else {
if((state_val_21585 === (5))){
var state_21584__$1 = state_21584;
var statearr_21590_21614 = state_21584__$1;
(statearr_21590_21614[(2)] = null);

(statearr_21590_21614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (6))){
var inst_21580 = (state_21584[(2)]);
var state_21584__$1 = state_21584;
var statearr_21591_21615 = state_21584__$1;
(statearr_21591_21615[(2)] = inst_21580);

(statearr_21591_21615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21585 === (7))){
var inst_21576 = (state_21584[(2)]);
var state_21584__$1 = (function (){var statearr_21592 = state_21584;
(statearr_21592[(8)] = inst_21576);

return statearr_21592;
})();
var statearr_21593_21616 = state_21584__$1;
(statearr_21593_21616[(2)] = null);

(statearr_21593_21616[(1)] = (2));


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
});})(c__20747__auto__))
;
return ((function (switch__20726__auto__,c__20747__auto__){
return (function() {
var csasync$proc$state_machine__20727__auto__ = null;
var csasync$proc$state_machine__20727__auto____0 = (function (){
var statearr_21597 = [null,null,null,null,null,null,null,null,null];
(statearr_21597[(0)] = csasync$proc$state_machine__20727__auto__);

(statearr_21597[(1)] = (1));

return statearr_21597;
});
var csasync$proc$state_machine__20727__auto____1 = (function (state_21584){
while(true){
var ret_value__20728__auto__ = (function (){try{while(true){
var result__20729__auto__ = switch__20726__auto__.call(null,state_21584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20729__auto__;
}
break;
}
}catch (e21598){if((e21598 instanceof Object)){
var ex__20730__auto__ = e21598;
var statearr_21599_21617 = state_21584;
(statearr_21599_21617[(5)] = ex__20730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21618 = state_21584;
state_21584 = G__21618;
continue;
} else {
return ret_value__20728__auto__;
}
break;
}
});
csasync$proc$state_machine__20727__auto__ = function(state_21584){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20727__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20727__auto____1.call(this,state_21584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20727__auto____0;
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20727__auto____1;
return csasync$proc$state_machine__20727__auto__;
})()
;})(switch__20726__auto__,c__20747__auto__))
})();
var state__20749__auto__ = (function (){var statearr_21600 = f__20748__auto__.call(null);
(statearr_21600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20747__auto__);

return statearr_21600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20749__auto__);
});})(c__20747__auto__))
);

return c__20747__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args21619 = [];
var len__19792__auto___21706 = arguments.length;
var i__19793__auto___21707 = (0);
while(true){
if((i__19793__auto___21707 < len__19792__auto___21706)){
args21619.push((arguments[i__19793__auto___21707]));

var G__21708 = (i__19793__auto___21707 + (1));
i__19793__auto___21707 = G__21708;
continue;
} else {
}
break;
}

var G__21621 = args21619.length;
switch (G__21621) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21619.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20747__auto___21710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20747__auto___21710){
return (function (){
var f__20748__auto__ = (function (){var switch__20726__auto__ = ((function (c__20747__auto___21710){
return (function (state_21642){
var state_val_21643 = (state_21642[(1)]);
if((state_val_21643 === (7))){
var inst_21631 = cljs.core.async.timeout.call(null,time_out);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21642__$1,(10),inst_21631);
} else {
if((state_val_21643 === (1))){
var state_21642__$1 = state_21642;
var statearr_21644_21711 = state_21642__$1;
(statearr_21644_21711[(2)] = null);

(statearr_21644_21711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (4))){
var inst_21626 = proc_fn.call(null);
var state_21642__$1 = state_21642;
var statearr_21645_21712 = state_21642__$1;
(statearr_21645_21712[(2)] = inst_21626);

(statearr_21645_21712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (6))){
var inst_21629 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
if(cljs.core.truth_(inst_21629)){
var statearr_21646_21713 = state_21642__$1;
(statearr_21646_21713[(1)] = (7));

} else {
var statearr_21647_21714 = state_21642__$1;
(statearr_21647_21714[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (3))){
var inst_21639 = (state_21642[(2)]);
var inst_21640 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21642__$1 = (function (){var statearr_21648 = state_21642;
(statearr_21648[(7)] = inst_21639);

return statearr_21648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21642__$1,inst_21640);
} else {
if((state_val_21643 === (2))){
var inst_21624 = (state_21642[(8)]);
var inst_21623 = cljs.core.deref.call(null,status);
var inst_21624__$1 = cljs.core._EQ_.call(null,inst_21623,"RUN");
var state_21642__$1 = (function (){var statearr_21649 = state_21642;
(statearr_21649[(8)] = inst_21624__$1);

return statearr_21649;
})();
if(inst_21624__$1){
var statearr_21650_21715 = state_21642__$1;
(statearr_21650_21715[(1)] = (4));

} else {
var statearr_21651_21716 = state_21642__$1;
(statearr_21651_21716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (9))){
var inst_21637 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21652_21717 = state_21642__$1;
(statearr_21652_21717[(2)] = inst_21637);

(statearr_21652_21717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (5))){
var inst_21624 = (state_21642[(8)]);
var state_21642__$1 = state_21642;
var statearr_21653_21718 = state_21642__$1;
(statearr_21653_21718[(2)] = inst_21624);

(statearr_21653_21718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (10))){
var inst_21633 = (state_21642[(2)]);
var state_21642__$1 = (function (){var statearr_21654 = state_21642;
(statearr_21654[(9)] = inst_21633);

return statearr_21654;
})();
var statearr_21655_21719 = state_21642__$1;
(statearr_21655_21719[(2)] = null);

(statearr_21655_21719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (8))){
var state_21642__$1 = state_21642;
var statearr_21656_21720 = state_21642__$1;
(statearr_21656_21720[(2)] = null);

(statearr_21656_21720[(1)] = (9));


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
});})(c__20747__auto___21710))
;
return ((function (switch__20726__auto__,c__20747__auto___21710){
return (function() {
var csasync$proc$state_machine__20727__auto__ = null;
var csasync$proc$state_machine__20727__auto____0 = (function (){
var statearr_21660 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21660[(0)] = csasync$proc$state_machine__20727__auto__);

(statearr_21660[(1)] = (1));

return statearr_21660;
});
var csasync$proc$state_machine__20727__auto____1 = (function (state_21642){
while(true){
var ret_value__20728__auto__ = (function (){try{while(true){
var result__20729__auto__ = switch__20726__auto__.call(null,state_21642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20729__auto__;
}
break;
}
}catch (e21661){if((e21661 instanceof Object)){
var ex__20730__auto__ = e21661;
var statearr_21662_21721 = state_21642;
(statearr_21662_21721[(5)] = ex__20730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21722 = state_21642;
state_21642 = G__21722;
continue;
} else {
return ret_value__20728__auto__;
}
break;
}
});
csasync$proc$state_machine__20727__auto__ = function(state_21642){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20727__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20727__auto____1.call(this,state_21642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20727__auto____0;
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20727__auto____1;
return csasync$proc$state_machine__20727__auto__;
})()
;})(switch__20726__auto__,c__20747__auto___21710))
})();
var state__20749__auto__ = (function (){var statearr_21663 = f__20748__auto__.call(null);
(statearr_21663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20747__auto___21710);

return statearr_21663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20749__auto__);
});})(c__20747__auto___21710))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20747__auto___21723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20747__auto___21723){
return (function (){
var f__20748__auto__ = (function (){var switch__20726__auto__ = ((function (c__20747__auto___21723){
return (function (state_21684){
var state_val_21685 = (state_21684[(1)]);
if((state_val_21685 === (7))){
var inst_21673 = cljs.core.async.timeout.call(null,time_out);
var state_21684__$1 = state_21684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21684__$1,(10),inst_21673);
} else {
if((state_val_21685 === (1))){
var state_21684__$1 = state_21684;
var statearr_21686_21724 = state_21684__$1;
(statearr_21686_21724[(2)] = null);

(statearr_21686_21724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (4))){
var inst_21668 = proc_fn.call(null,param);
var state_21684__$1 = state_21684;
var statearr_21687_21725 = state_21684__$1;
(statearr_21687_21725[(2)] = inst_21668);

(statearr_21687_21725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (6))){
var inst_21671 = (state_21684[(2)]);
var state_21684__$1 = state_21684;
if(cljs.core.truth_(inst_21671)){
var statearr_21688_21726 = state_21684__$1;
(statearr_21688_21726[(1)] = (7));

} else {
var statearr_21689_21727 = state_21684__$1;
(statearr_21689_21727[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (3))){
var inst_21681 = (state_21684[(2)]);
var inst_21682 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21684__$1 = (function (){var statearr_21690 = state_21684;
(statearr_21690[(7)] = inst_21681);

return statearr_21690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21684__$1,inst_21682);
} else {
if((state_val_21685 === (2))){
var inst_21666 = (state_21684[(8)]);
var inst_21665 = cljs.core.deref.call(null,status);
var inst_21666__$1 = cljs.core._EQ_.call(null,inst_21665,"RUN");
var state_21684__$1 = (function (){var statearr_21691 = state_21684;
(statearr_21691[(8)] = inst_21666__$1);

return statearr_21691;
})();
if(inst_21666__$1){
var statearr_21692_21728 = state_21684__$1;
(statearr_21692_21728[(1)] = (4));

} else {
var statearr_21693_21729 = state_21684__$1;
(statearr_21693_21729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (9))){
var inst_21679 = (state_21684[(2)]);
var state_21684__$1 = state_21684;
var statearr_21694_21730 = state_21684__$1;
(statearr_21694_21730[(2)] = inst_21679);

(statearr_21694_21730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (5))){
var inst_21666 = (state_21684[(8)]);
var state_21684__$1 = state_21684;
var statearr_21695_21731 = state_21684__$1;
(statearr_21695_21731[(2)] = inst_21666);

(statearr_21695_21731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (10))){
var inst_21675 = (state_21684[(2)]);
var state_21684__$1 = (function (){var statearr_21696 = state_21684;
(statearr_21696[(9)] = inst_21675);

return statearr_21696;
})();
var statearr_21697_21732 = state_21684__$1;
(statearr_21697_21732[(2)] = null);

(statearr_21697_21732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21685 === (8))){
var state_21684__$1 = state_21684;
var statearr_21698_21733 = state_21684__$1;
(statearr_21698_21733[(2)] = null);

(statearr_21698_21733[(1)] = (9));


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
});})(c__20747__auto___21723))
;
return ((function (switch__20726__auto__,c__20747__auto___21723){
return (function() {
var csasync$proc$state_machine__20727__auto__ = null;
var csasync$proc$state_machine__20727__auto____0 = (function (){
var statearr_21702 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21702[(0)] = csasync$proc$state_machine__20727__auto__);

(statearr_21702[(1)] = (1));

return statearr_21702;
});
var csasync$proc$state_machine__20727__auto____1 = (function (state_21684){
while(true){
var ret_value__20728__auto__ = (function (){try{while(true){
var result__20729__auto__ = switch__20726__auto__.call(null,state_21684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20729__auto__;
}
break;
}
}catch (e21703){if((e21703 instanceof Object)){
var ex__20730__auto__ = e21703;
var statearr_21704_21734 = state_21684;
(statearr_21704_21734[(5)] = ex__20730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21735 = state_21684;
state_21684 = G__21735;
continue;
} else {
return ret_value__20728__auto__;
}
break;
}
});
csasync$proc$state_machine__20727__auto__ = function(state_21684){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20727__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20727__auto____1.call(this,state_21684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20727__auto____0;
csasync$proc$state_machine__20727__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20727__auto____1;
return csasync$proc$state_machine__20727__auto__;
})()
;})(switch__20726__auto__,c__20747__auto___21723))
})();
var state__20749__auto__ = (function (){var statearr_21705 = f__20748__auto__.call(null);
(statearr_21705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20747__auto___21723);

return statearr_21705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20749__auto__);
});})(c__20747__auto___21723))
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