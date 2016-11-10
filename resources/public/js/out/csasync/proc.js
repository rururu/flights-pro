// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21583 = [];
var len__19808__auto___21646 = arguments.length;
var i__19809__auto___21647 = (0);
while(true){
if((i__19809__auto___21647 < len__19808__auto___21646)){
args21583.push((arguments[i__19809__auto___21647]));

var G__21648 = (i__19809__auto___21647 + (1));
i__19809__auto___21647 = G__21648;
continue;
} else {
}
break;
}

var G__21585 = args21583.length;
switch (G__21585) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21583.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__20763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20763__auto__){
return (function (){
var f__20764__auto__ = (function (){var switch__20742__auto__ = ((function (c__20763__auto__){
return (function (state_21599){
var state_val_21600 = (state_21599[(1)]);
if((state_val_21600 === (1))){
var state_21599__$1 = state_21599;
var statearr_21601_21650 = state_21599__$1;
(statearr_21601_21650[(2)] = null);

(statearr_21601_21650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (2))){
var state_21599__$1 = state_21599;
var statearr_21602_21651 = state_21599__$1;
(statearr_21602_21651[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (3))){
var inst_21597 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21599__$1,inst_21597);
} else {
if((state_val_21600 === (4))){
var inst_21588 = func.call(null);
var inst_21589 = cljs.core.async.timeout.call(null,time_out);
var state_21599__$1 = (function (){var statearr_21604 = state_21599;
(statearr_21604[(7)] = inst_21588);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21599__$1,(7),inst_21589);
} else {
if((state_val_21600 === (5))){
var state_21599__$1 = state_21599;
var statearr_21605_21652 = state_21599__$1;
(statearr_21605_21652[(2)] = null);

(statearr_21605_21652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (6))){
var inst_21595 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
var statearr_21606_21653 = state_21599__$1;
(statearr_21606_21653[(2)] = inst_21595);

(statearr_21606_21653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (7))){
var inst_21591 = (state_21599[(2)]);
var state_21599__$1 = (function (){var statearr_21607 = state_21599;
(statearr_21607[(8)] = inst_21591);

return statearr_21607;
})();
var statearr_21608_21654 = state_21599__$1;
(statearr_21608_21654[(2)] = null);

(statearr_21608_21654[(1)] = (2));


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
});})(c__20763__auto__))
;
return ((function (switch__20742__auto__,c__20763__auto__){
return (function() {
var csasync$proc$state_machine__20743__auto__ = null;
var csasync$proc$state_machine__20743__auto____0 = (function (){
var statearr_21612 = [null,null,null,null,null,null,null,null,null];
(statearr_21612[(0)] = csasync$proc$state_machine__20743__auto__);

(statearr_21612[(1)] = (1));

return statearr_21612;
});
var csasync$proc$state_machine__20743__auto____1 = (function (state_21599){
while(true){
var ret_value__20744__auto__ = (function (){try{while(true){
var result__20745__auto__ = switch__20742__auto__.call(null,state_21599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20745__auto__;
}
break;
}
}catch (e21613){if((e21613 instanceof Object)){
var ex__20746__auto__ = e21613;
var statearr_21614_21655 = state_21599;
(statearr_21614_21655[(5)] = ex__20746__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21656 = state_21599;
state_21599 = G__21656;
continue;
} else {
return ret_value__20744__auto__;
}
break;
}
});
csasync$proc$state_machine__20743__auto__ = function(state_21599){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20743__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20743__auto____1.call(this,state_21599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20743__auto____0;
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20743__auto____1;
return csasync$proc$state_machine__20743__auto__;
})()
;})(switch__20742__auto__,c__20763__auto__))
})();
var state__20765__auto__ = (function (){var statearr_21615 = f__20764__auto__.call(null);
(statearr_21615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20763__auto__);

return statearr_21615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20765__auto__);
});})(c__20763__auto__))
);

return c__20763__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__20763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20763__auto__){
return (function (){
var f__20764__auto__ = (function (){var switch__20742__auto__ = ((function (c__20763__auto__){
return (function (state_21629){
var state_val_21630 = (state_21629[(1)]);
if((state_val_21630 === (1))){
var state_21629__$1 = state_21629;
var statearr_21631_21657 = state_21629__$1;
(statearr_21631_21657[(2)] = null);

(statearr_21631_21657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (2))){
var state_21629__$1 = state_21629;
var statearr_21632_21658 = state_21629__$1;
(statearr_21632_21658[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (3))){
var inst_21627 = (state_21629[(2)]);
var state_21629__$1 = state_21629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21629__$1,inst_21627);
} else {
if((state_val_21630 === (4))){
var inst_21618 = func.call(null,param);
var inst_21619 = cljs.core.async.timeout.call(null,time_out);
var state_21629__$1 = (function (){var statearr_21634 = state_21629;
(statearr_21634[(7)] = inst_21618);

return statearr_21634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21629__$1,(7),inst_21619);
} else {
if((state_val_21630 === (5))){
var state_21629__$1 = state_21629;
var statearr_21635_21659 = state_21629__$1;
(statearr_21635_21659[(2)] = null);

(statearr_21635_21659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (6))){
var inst_21625 = (state_21629[(2)]);
var state_21629__$1 = state_21629;
var statearr_21636_21660 = state_21629__$1;
(statearr_21636_21660[(2)] = inst_21625);

(statearr_21636_21660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (7))){
var inst_21621 = (state_21629[(2)]);
var state_21629__$1 = (function (){var statearr_21637 = state_21629;
(statearr_21637[(8)] = inst_21621);

return statearr_21637;
})();
var statearr_21638_21661 = state_21629__$1;
(statearr_21638_21661[(2)] = null);

(statearr_21638_21661[(1)] = (2));


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
});})(c__20763__auto__))
;
return ((function (switch__20742__auto__,c__20763__auto__){
return (function() {
var csasync$proc$state_machine__20743__auto__ = null;
var csasync$proc$state_machine__20743__auto____0 = (function (){
var statearr_21642 = [null,null,null,null,null,null,null,null,null];
(statearr_21642[(0)] = csasync$proc$state_machine__20743__auto__);

(statearr_21642[(1)] = (1));

return statearr_21642;
});
var csasync$proc$state_machine__20743__auto____1 = (function (state_21629){
while(true){
var ret_value__20744__auto__ = (function (){try{while(true){
var result__20745__auto__ = switch__20742__auto__.call(null,state_21629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20745__auto__;
}
break;
}
}catch (e21643){if((e21643 instanceof Object)){
var ex__20746__auto__ = e21643;
var statearr_21644_21662 = state_21629;
(statearr_21644_21662[(5)] = ex__20746__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21663 = state_21629;
state_21629 = G__21663;
continue;
} else {
return ret_value__20744__auto__;
}
break;
}
});
csasync$proc$state_machine__20743__auto__ = function(state_21629){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20743__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20743__auto____1.call(this,state_21629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20743__auto____0;
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20743__auto____1;
return csasync$proc$state_machine__20743__auto__;
})()
;})(switch__20742__auto__,c__20763__auto__))
})();
var state__20765__auto__ = (function (){var statearr_21645 = f__20764__auto__.call(null);
(statearr_21645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20763__auto__);

return statearr_21645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20765__auto__);
});})(c__20763__auto__))
);

return c__20763__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args21664 = [];
var len__19808__auto___21751 = arguments.length;
var i__19809__auto___21752 = (0);
while(true){
if((i__19809__auto___21752 < len__19808__auto___21751)){
args21664.push((arguments[i__19809__auto___21752]));

var G__21753 = (i__19809__auto___21752 + (1));
i__19809__auto___21752 = G__21753;
continue;
} else {
}
break;
}

var G__21666 = args21664.length;
switch (G__21666) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21664.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20763__auto___21755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20763__auto___21755){
return (function (){
var f__20764__auto__ = (function (){var switch__20742__auto__ = ((function (c__20763__auto___21755){
return (function (state_21687){
var state_val_21688 = (state_21687[(1)]);
if((state_val_21688 === (7))){
var inst_21676 = cljs.core.async.timeout.call(null,time_out);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21687__$1,(10),inst_21676);
} else {
if((state_val_21688 === (1))){
var state_21687__$1 = state_21687;
var statearr_21689_21756 = state_21687__$1;
(statearr_21689_21756[(2)] = null);

(statearr_21689_21756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (4))){
var inst_21671 = proc_fn.call(null);
var state_21687__$1 = state_21687;
var statearr_21690_21757 = state_21687__$1;
(statearr_21690_21757[(2)] = inst_21671);

(statearr_21690_21757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (6))){
var inst_21674 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
if(cljs.core.truth_(inst_21674)){
var statearr_21691_21758 = state_21687__$1;
(statearr_21691_21758[(1)] = (7));

} else {
var statearr_21692_21759 = state_21687__$1;
(statearr_21692_21759[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (3))){
var inst_21684 = (state_21687[(2)]);
var inst_21685 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21687__$1 = (function (){var statearr_21693 = state_21687;
(statearr_21693[(7)] = inst_21684);

return statearr_21693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21687__$1,inst_21685);
} else {
if((state_val_21688 === (2))){
var inst_21669 = (state_21687[(8)]);
var inst_21668 = cljs.core.deref.call(null,status);
var inst_21669__$1 = cljs.core._EQ_.call(null,inst_21668,"RUN");
var state_21687__$1 = (function (){var statearr_21694 = state_21687;
(statearr_21694[(8)] = inst_21669__$1);

return statearr_21694;
})();
if(inst_21669__$1){
var statearr_21695_21760 = state_21687__$1;
(statearr_21695_21760[(1)] = (4));

} else {
var statearr_21696_21761 = state_21687__$1;
(statearr_21696_21761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (9))){
var inst_21682 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21697_21762 = state_21687__$1;
(statearr_21697_21762[(2)] = inst_21682);

(statearr_21697_21762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (5))){
var inst_21669 = (state_21687[(8)]);
var state_21687__$1 = state_21687;
var statearr_21698_21763 = state_21687__$1;
(statearr_21698_21763[(2)] = inst_21669);

(statearr_21698_21763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (10))){
var inst_21678 = (state_21687[(2)]);
var state_21687__$1 = (function (){var statearr_21699 = state_21687;
(statearr_21699[(9)] = inst_21678);

return statearr_21699;
})();
var statearr_21700_21764 = state_21687__$1;
(statearr_21700_21764[(2)] = null);

(statearr_21700_21764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (8))){
var state_21687__$1 = state_21687;
var statearr_21701_21765 = state_21687__$1;
(statearr_21701_21765[(2)] = null);

(statearr_21701_21765[(1)] = (9));


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
});})(c__20763__auto___21755))
;
return ((function (switch__20742__auto__,c__20763__auto___21755){
return (function() {
var csasync$proc$state_machine__20743__auto__ = null;
var csasync$proc$state_machine__20743__auto____0 = (function (){
var statearr_21705 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21705[(0)] = csasync$proc$state_machine__20743__auto__);

(statearr_21705[(1)] = (1));

return statearr_21705;
});
var csasync$proc$state_machine__20743__auto____1 = (function (state_21687){
while(true){
var ret_value__20744__auto__ = (function (){try{while(true){
var result__20745__auto__ = switch__20742__auto__.call(null,state_21687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20745__auto__;
}
break;
}
}catch (e21706){if((e21706 instanceof Object)){
var ex__20746__auto__ = e21706;
var statearr_21707_21766 = state_21687;
(statearr_21707_21766[(5)] = ex__20746__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21767 = state_21687;
state_21687 = G__21767;
continue;
} else {
return ret_value__20744__auto__;
}
break;
}
});
csasync$proc$state_machine__20743__auto__ = function(state_21687){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20743__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20743__auto____1.call(this,state_21687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20743__auto____0;
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20743__auto____1;
return csasync$proc$state_machine__20743__auto__;
})()
;})(switch__20742__auto__,c__20763__auto___21755))
})();
var state__20765__auto__ = (function (){var statearr_21708 = f__20764__auto__.call(null);
(statearr_21708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20763__auto___21755);

return statearr_21708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20765__auto__);
});})(c__20763__auto___21755))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20763__auto___21768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20763__auto___21768){
return (function (){
var f__20764__auto__ = (function (){var switch__20742__auto__ = ((function (c__20763__auto___21768){
return (function (state_21729){
var state_val_21730 = (state_21729[(1)]);
if((state_val_21730 === (7))){
var inst_21718 = cljs.core.async.timeout.call(null,time_out);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21729__$1,(10),inst_21718);
} else {
if((state_val_21730 === (1))){
var state_21729__$1 = state_21729;
var statearr_21731_21769 = state_21729__$1;
(statearr_21731_21769[(2)] = null);

(statearr_21731_21769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (4))){
var inst_21713 = proc_fn.call(null,param);
var state_21729__$1 = state_21729;
var statearr_21732_21770 = state_21729__$1;
(statearr_21732_21770[(2)] = inst_21713);

(statearr_21732_21770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (6))){
var inst_21716 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
if(cljs.core.truth_(inst_21716)){
var statearr_21733_21771 = state_21729__$1;
(statearr_21733_21771[(1)] = (7));

} else {
var statearr_21734_21772 = state_21729__$1;
(statearr_21734_21772[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (3))){
var inst_21726 = (state_21729[(2)]);
var inst_21727 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21729__$1 = (function (){var statearr_21735 = state_21729;
(statearr_21735[(7)] = inst_21726);

return statearr_21735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21729__$1,inst_21727);
} else {
if((state_val_21730 === (2))){
var inst_21711 = (state_21729[(8)]);
var inst_21710 = cljs.core.deref.call(null,status);
var inst_21711__$1 = cljs.core._EQ_.call(null,inst_21710,"RUN");
var state_21729__$1 = (function (){var statearr_21736 = state_21729;
(statearr_21736[(8)] = inst_21711__$1);

return statearr_21736;
})();
if(inst_21711__$1){
var statearr_21737_21773 = state_21729__$1;
(statearr_21737_21773[(1)] = (4));

} else {
var statearr_21738_21774 = state_21729__$1;
(statearr_21738_21774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (9))){
var inst_21724 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21739_21775 = state_21729__$1;
(statearr_21739_21775[(2)] = inst_21724);

(statearr_21739_21775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (5))){
var inst_21711 = (state_21729[(8)]);
var state_21729__$1 = state_21729;
var statearr_21740_21776 = state_21729__$1;
(statearr_21740_21776[(2)] = inst_21711);

(statearr_21740_21776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (10))){
var inst_21720 = (state_21729[(2)]);
var state_21729__$1 = (function (){var statearr_21741 = state_21729;
(statearr_21741[(9)] = inst_21720);

return statearr_21741;
})();
var statearr_21742_21777 = state_21729__$1;
(statearr_21742_21777[(2)] = null);

(statearr_21742_21777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (8))){
var state_21729__$1 = state_21729;
var statearr_21743_21778 = state_21729__$1;
(statearr_21743_21778[(2)] = null);

(statearr_21743_21778[(1)] = (9));


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
});})(c__20763__auto___21768))
;
return ((function (switch__20742__auto__,c__20763__auto___21768){
return (function() {
var csasync$proc$state_machine__20743__auto__ = null;
var csasync$proc$state_machine__20743__auto____0 = (function (){
var statearr_21747 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21747[(0)] = csasync$proc$state_machine__20743__auto__);

(statearr_21747[(1)] = (1));

return statearr_21747;
});
var csasync$proc$state_machine__20743__auto____1 = (function (state_21729){
while(true){
var ret_value__20744__auto__ = (function (){try{while(true){
var result__20745__auto__ = switch__20742__auto__.call(null,state_21729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20745__auto__;
}
break;
}
}catch (e21748){if((e21748 instanceof Object)){
var ex__20746__auto__ = e21748;
var statearr_21749_21779 = state_21729;
(statearr_21749_21779[(5)] = ex__20746__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21780 = state_21729;
state_21729 = G__21780;
continue;
} else {
return ret_value__20744__auto__;
}
break;
}
});
csasync$proc$state_machine__20743__auto__ = function(state_21729){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20743__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20743__auto____1.call(this,state_21729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20743__auto____0;
csasync$proc$state_machine__20743__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20743__auto____1;
return csasync$proc$state_machine__20743__auto__;
})()
;})(switch__20742__auto__,c__20763__auto___21768))
})();
var state__20765__auto__ = (function (){var statearr_21750 = f__20764__auto__.call(null);
(statearr_21750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20763__auto___21768);

return statearr_21750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20765__auto__);
});})(c__20763__auto___21768))
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