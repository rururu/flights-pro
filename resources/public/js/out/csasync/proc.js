// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args24620 = [];
var len__21845__auto___24683 = arguments.length;
var i__21846__auto___24684 = (0);
while(true){
if((i__21846__auto___24684 < len__21845__auto___24683)){
args24620.push((arguments[i__21846__auto___24684]));

var G__24685 = (i__21846__auto___24684 + (1));
i__21846__auto___24684 = G__24685;
continue;
} else {
}
break;
}

var G__24622 = args24620.length;
switch (G__24622) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24620.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto__){
return (function (state_24636){
var state_val_24637 = (state_24636[(1)]);
if((state_val_24637 === (1))){
var state_24636__$1 = state_24636;
var statearr_24638_24687 = state_24636__$1;
(statearr_24638_24687[(2)] = null);

(statearr_24638_24687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (2))){
var state_24636__$1 = state_24636;
var statearr_24639_24688 = state_24636__$1;
(statearr_24639_24688[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (3))){
var inst_24634 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24636__$1,inst_24634);
} else {
if((state_val_24637 === (4))){
var inst_24625 = func.call(null);
var inst_24626 = cljs.core.async.timeout.call(null,time_out);
var state_24636__$1 = (function (){var statearr_24641 = state_24636;
(statearr_24641[(7)] = inst_24625);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24636__$1,(7),inst_24626);
} else {
if((state_val_24637 === (5))){
var state_24636__$1 = state_24636;
var statearr_24642_24689 = state_24636__$1;
(statearr_24642_24689[(2)] = null);

(statearr_24642_24689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (6))){
var inst_24632 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24643_24690 = state_24636__$1;
(statearr_24643_24690[(2)] = inst_24632);

(statearr_24643_24690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (7))){
var inst_24628 = (state_24636[(2)]);
var state_24636__$1 = (function (){var statearr_24644 = state_24636;
(statearr_24644[(8)] = inst_24628);

return statearr_24644;
})();
var statearr_24645_24691 = state_24636__$1;
(statearr_24645_24691[(2)] = null);

(statearr_24645_24691[(1)] = (2));


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
});})(c__22921__auto__))
;
return ((function (switch__22900__auto__,c__22921__auto__){
return (function() {
var csasync$proc$state_machine__22901__auto__ = null;
var csasync$proc$state_machine__22901__auto____0 = (function (){
var statearr_24649 = [null,null,null,null,null,null,null,null,null];
(statearr_24649[(0)] = csasync$proc$state_machine__22901__auto__);

(statearr_24649[(1)] = (1));

return statearr_24649;
});
var csasync$proc$state_machine__22901__auto____1 = (function (state_24636){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_24636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e24650){if((e24650 instanceof Object)){
var ex__22904__auto__ = e24650;
var statearr_24651_24692 = state_24636;
(statearr_24651_24692[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24693 = state_24636;
state_24636 = G__24693;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$state_machine__22901__auto__ = function(state_24636){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22901__auto____1.call(this,state_24636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22901__auto____0;
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22901__auto____1;
return csasync$proc$state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_24652 = f__22922__auto__.call(null);
(statearr_24652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_24652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto__){
return (function (state_24666){
var state_val_24667 = (state_24666[(1)]);
if((state_val_24667 === (1))){
var state_24666__$1 = state_24666;
var statearr_24668_24694 = state_24666__$1;
(statearr_24668_24694[(2)] = null);

(statearr_24668_24694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (2))){
var state_24666__$1 = state_24666;
var statearr_24669_24695 = state_24666__$1;
(statearr_24669_24695[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (3))){
var inst_24664 = (state_24666[(2)]);
var state_24666__$1 = state_24666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24666__$1,inst_24664);
} else {
if((state_val_24667 === (4))){
var inst_24655 = func.call(null,param);
var inst_24656 = cljs.core.async.timeout.call(null,time_out);
var state_24666__$1 = (function (){var statearr_24671 = state_24666;
(statearr_24671[(7)] = inst_24655);

return statearr_24671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24666__$1,(7),inst_24656);
} else {
if((state_val_24667 === (5))){
var state_24666__$1 = state_24666;
var statearr_24672_24696 = state_24666__$1;
(statearr_24672_24696[(2)] = null);

(statearr_24672_24696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (6))){
var inst_24662 = (state_24666[(2)]);
var state_24666__$1 = state_24666;
var statearr_24673_24697 = state_24666__$1;
(statearr_24673_24697[(2)] = inst_24662);

(statearr_24673_24697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24667 === (7))){
var inst_24658 = (state_24666[(2)]);
var state_24666__$1 = (function (){var statearr_24674 = state_24666;
(statearr_24674[(8)] = inst_24658);

return statearr_24674;
})();
var statearr_24675_24698 = state_24666__$1;
(statearr_24675_24698[(2)] = null);

(statearr_24675_24698[(1)] = (2));


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
});})(c__22921__auto__))
;
return ((function (switch__22900__auto__,c__22921__auto__){
return (function() {
var csasync$proc$state_machine__22901__auto__ = null;
var csasync$proc$state_machine__22901__auto____0 = (function (){
var statearr_24679 = [null,null,null,null,null,null,null,null,null];
(statearr_24679[(0)] = csasync$proc$state_machine__22901__auto__);

(statearr_24679[(1)] = (1));

return statearr_24679;
});
var csasync$proc$state_machine__22901__auto____1 = (function (state_24666){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_24666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e24680){if((e24680 instanceof Object)){
var ex__22904__auto__ = e24680;
var statearr_24681_24699 = state_24666;
(statearr_24681_24699[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24700 = state_24666;
state_24666 = G__24700;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$state_machine__22901__auto__ = function(state_24666){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22901__auto____1.call(this,state_24666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22901__auto____0;
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22901__auto____1;
return csasync$proc$state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_24682 = f__22922__auto__.call(null);
(statearr_24682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22921__auto___24785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___24785){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto___24785){
return (function (state_24763){
var state_val_24764 = (state_24763[(1)]);
if((state_val_24764 === (7))){
var inst_24752 = cljs.core.async.timeout.call(null,time_out);
var state_24763__$1 = state_24763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24763__$1,(10),inst_24752);
} else {
if((state_val_24764 === (1))){
var state_24763__$1 = state_24763;
var statearr_24765_24786 = state_24763__$1;
(statearr_24765_24786[(2)] = null);

(statearr_24765_24786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (4))){
var inst_24747 = proc_fn.call(null);
var state_24763__$1 = state_24763;
var statearr_24766_24787 = state_24763__$1;
(statearr_24766_24787[(2)] = inst_24747);

(statearr_24766_24787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (6))){
var inst_24750 = (state_24763[(2)]);
var state_24763__$1 = state_24763;
if(cljs.core.truth_(inst_24750)){
var statearr_24767_24788 = state_24763__$1;
(statearr_24767_24788[(1)] = (7));

} else {
var statearr_24768_24789 = state_24763__$1;
(statearr_24768_24789[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (3))){
var inst_24760 = (state_24763[(2)]);
var inst_24761 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_24763__$1 = (function (){var statearr_24769 = state_24763;
(statearr_24769[(7)] = inst_24760);

return statearr_24769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24763__$1,inst_24761);
} else {
if((state_val_24764 === (2))){
var inst_24745 = (state_24763[(8)]);
var inst_24744 = cljs.core.deref.call(null,status);
var inst_24745__$1 = cljs.core._EQ_.call(null,inst_24744,"RUN");
var state_24763__$1 = (function (){var statearr_24770 = state_24763;
(statearr_24770[(8)] = inst_24745__$1);

return statearr_24770;
})();
if(inst_24745__$1){
var statearr_24771_24790 = state_24763__$1;
(statearr_24771_24790[(1)] = (4));

} else {
var statearr_24772_24791 = state_24763__$1;
(statearr_24772_24791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (9))){
var inst_24758 = (state_24763[(2)]);
var state_24763__$1 = state_24763;
var statearr_24773_24792 = state_24763__$1;
(statearr_24773_24792[(2)] = inst_24758);

(statearr_24773_24792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (5))){
var inst_24745 = (state_24763[(8)]);
var state_24763__$1 = state_24763;
var statearr_24774_24793 = state_24763__$1;
(statearr_24774_24793[(2)] = inst_24745);

(statearr_24774_24793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (10))){
var inst_24754 = (state_24763[(2)]);
var state_24763__$1 = (function (){var statearr_24775 = state_24763;
(statearr_24775[(9)] = inst_24754);

return statearr_24775;
})();
var statearr_24776_24794 = state_24763__$1;
(statearr_24776_24794[(2)] = null);

(statearr_24776_24794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24764 === (8))){
var state_24763__$1 = state_24763;
var statearr_24777_24795 = state_24763__$1;
(statearr_24777_24795[(2)] = null);

(statearr_24777_24795[(1)] = (9));


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
});})(c__22921__auto___24785))
;
return ((function (switch__22900__auto__,c__22921__auto___24785){
return (function() {
var csasync$proc$start_process_$_state_machine__22901__auto__ = null;
var csasync$proc$start_process_$_state_machine__22901__auto____0 = (function (){
var statearr_24781 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24781[(0)] = csasync$proc$start_process_$_state_machine__22901__auto__);

(statearr_24781[(1)] = (1));

return statearr_24781;
});
var csasync$proc$start_process_$_state_machine__22901__auto____1 = (function (state_24763){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_24763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e24782){if((e24782 instanceof Object)){
var ex__22904__auto__ = e24782;
var statearr_24783_24796 = state_24763;
(statearr_24783_24796[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24797 = state_24763;
state_24763 = G__24797;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22901__auto__ = function(state_24763){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22901__auto____1.call(this,state_24763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22901__auto____0;
csasync$proc$start_process_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22901__auto____1;
return csasync$proc$start_process_$_state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto___24785))
})();
var state__22923__auto__ = (function (){var statearr_24784 = f__22922__auto__.call(null);
(statearr_24784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___24785);

return statearr_24784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___24785))
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
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto__){
return (function (state_24818){
var state_val_24819 = (state_24818[(1)]);
if((state_val_24819 === (1))){
var inst_24813 = cljs.core.async.timeout.call(null,time);
var state_24818__$1 = state_24818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24818__$1,(2),inst_24813);
} else {
if((state_val_24819 === (2))){
var inst_24815 = (state_24818[(2)]);
var inst_24816 = func.call(null);
var state_24818__$1 = (function (){var statearr_24820 = state_24818;
(statearr_24820[(7)] = inst_24815);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24818__$1,inst_24816);
} else {
return null;
}
}
});})(c__22921__auto__))
;
return ((function (switch__22900__auto__,c__22921__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22901__auto__ = null;
var csasync$proc$delayer_$_state_machine__22901__auto____0 = (function (){
var statearr_24824 = [null,null,null,null,null,null,null,null];
(statearr_24824[(0)] = csasync$proc$delayer_$_state_machine__22901__auto__);

(statearr_24824[(1)] = (1));

return statearr_24824;
});
var csasync$proc$delayer_$_state_machine__22901__auto____1 = (function (state_24818){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_24818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e24825){if((e24825 instanceof Object)){
var ex__22904__auto__ = e24825;
var statearr_24826_24828 = state_24818;
(statearr_24826_24828[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24829 = state_24818;
state_24818 = G__24829;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22901__auto__ = function(state_24818){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22901__auto____1.call(this,state_24818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22901__auto____0;
csasync$proc$delayer_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22901__auto____1;
return csasync$proc$delayer_$_state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_24827 = f__22922__auto__.call(null);
(statearr_24827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_24827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});

//# sourceMappingURL=proc.js.map