// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args13711 = [];
var len__10697__auto___13774 = arguments.length;
var i__10698__auto___13775 = (0);
while(true){
if((i__10698__auto___13775 < len__10697__auto___13774)){
args13711.push((arguments[i__10698__auto___13775]));

var G__13776 = (i__10698__auto___13775 + (1));
i__10698__auto___13775 = G__13776;
continue;
} else {
}
break;
}

var G__13713 = args13711.length;
switch (G__13713) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13711.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__12114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12114__auto__){
return (function (){
var f__12115__auto__ = (function (){var switch__12093__auto__ = ((function (c__12114__auto__){
return (function (state_13727){
var state_val_13728 = (state_13727[(1)]);
if((state_val_13728 === (1))){
var state_13727__$1 = state_13727;
var statearr_13729_13778 = state_13727__$1;
(statearr_13729_13778[(2)] = null);

(statearr_13729_13778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (2))){
var state_13727__$1 = state_13727;
var statearr_13730_13779 = state_13727__$1;
(statearr_13730_13779[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (3))){
var inst_13725 = (state_13727[(2)]);
var state_13727__$1 = state_13727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13727__$1,inst_13725);
} else {
if((state_val_13728 === (4))){
var inst_13716 = func.call(null);
var inst_13717 = cljs.core.async.timeout.call(null,time_out);
var state_13727__$1 = (function (){var statearr_13732 = state_13727;
(statearr_13732[(7)] = inst_13716);

return statearr_13732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13727__$1,(7),inst_13717);
} else {
if((state_val_13728 === (5))){
var state_13727__$1 = state_13727;
var statearr_13733_13780 = state_13727__$1;
(statearr_13733_13780[(2)] = null);

(statearr_13733_13780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (6))){
var inst_13723 = (state_13727[(2)]);
var state_13727__$1 = state_13727;
var statearr_13734_13781 = state_13727__$1;
(statearr_13734_13781[(2)] = inst_13723);

(statearr_13734_13781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (7))){
var inst_13719 = (state_13727[(2)]);
var state_13727__$1 = (function (){var statearr_13735 = state_13727;
(statearr_13735[(8)] = inst_13719);

return statearr_13735;
})();
var statearr_13736_13782 = state_13727__$1;
(statearr_13736_13782[(2)] = null);

(statearr_13736_13782[(1)] = (2));


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
});})(c__12114__auto__))
;
return ((function (switch__12093__auto__,c__12114__auto__){
return (function() {
var csasync$proc$state_machine__12094__auto__ = null;
var csasync$proc$state_machine__12094__auto____0 = (function (){
var statearr_13740 = [null,null,null,null,null,null,null,null,null];
(statearr_13740[(0)] = csasync$proc$state_machine__12094__auto__);

(statearr_13740[(1)] = (1));

return statearr_13740;
});
var csasync$proc$state_machine__12094__auto____1 = (function (state_13727){
while(true){
var ret_value__12095__auto__ = (function (){try{while(true){
var result__12096__auto__ = switch__12093__auto__.call(null,state_13727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12096__auto__;
}
break;
}
}catch (e13741){if((e13741 instanceof Object)){
var ex__12097__auto__ = e13741;
var statearr_13742_13783 = state_13727;
(statearr_13742_13783[(5)] = ex__12097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13784 = state_13727;
state_13727 = G__13784;
continue;
} else {
return ret_value__12095__auto__;
}
break;
}
});
csasync$proc$state_machine__12094__auto__ = function(state_13727){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12094__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12094__auto____1.call(this,state_13727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12094__auto____0;
csasync$proc$state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12094__auto____1;
return csasync$proc$state_machine__12094__auto__;
})()
;})(switch__12093__auto__,c__12114__auto__))
})();
var state__12116__auto__ = (function (){var statearr_13743 = f__12115__auto__.call(null);
(statearr_13743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12114__auto__);

return statearr_13743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12116__auto__);
});})(c__12114__auto__))
);

return c__12114__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12114__auto__){
return (function (){
var f__12115__auto__ = (function (){var switch__12093__auto__ = ((function (c__12114__auto__){
return (function (state_13757){
var state_val_13758 = (state_13757[(1)]);
if((state_val_13758 === (1))){
var state_13757__$1 = state_13757;
var statearr_13759_13785 = state_13757__$1;
(statearr_13759_13785[(2)] = null);

(statearr_13759_13785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (2))){
var state_13757__$1 = state_13757;
var statearr_13760_13786 = state_13757__$1;
(statearr_13760_13786[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (3))){
var inst_13755 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13757__$1,inst_13755);
} else {
if((state_val_13758 === (4))){
var inst_13746 = func.call(null,param);
var inst_13747 = cljs.core.async.timeout.call(null,time_out);
var state_13757__$1 = (function (){var statearr_13762 = state_13757;
(statearr_13762[(7)] = inst_13746);

return statearr_13762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13757__$1,(7),inst_13747);
} else {
if((state_val_13758 === (5))){
var state_13757__$1 = state_13757;
var statearr_13763_13787 = state_13757__$1;
(statearr_13763_13787[(2)] = null);

(statearr_13763_13787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (6))){
var inst_13753 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13764_13788 = state_13757__$1;
(statearr_13764_13788[(2)] = inst_13753);

(statearr_13764_13788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13758 === (7))){
var inst_13749 = (state_13757[(2)]);
var state_13757__$1 = (function (){var statearr_13765 = state_13757;
(statearr_13765[(8)] = inst_13749);

return statearr_13765;
})();
var statearr_13766_13789 = state_13757__$1;
(statearr_13766_13789[(2)] = null);

(statearr_13766_13789[(1)] = (2));


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
});})(c__12114__auto__))
;
return ((function (switch__12093__auto__,c__12114__auto__){
return (function() {
var csasync$proc$state_machine__12094__auto__ = null;
var csasync$proc$state_machine__12094__auto____0 = (function (){
var statearr_13770 = [null,null,null,null,null,null,null,null,null];
(statearr_13770[(0)] = csasync$proc$state_machine__12094__auto__);

(statearr_13770[(1)] = (1));

return statearr_13770;
});
var csasync$proc$state_machine__12094__auto____1 = (function (state_13757){
while(true){
var ret_value__12095__auto__ = (function (){try{while(true){
var result__12096__auto__ = switch__12093__auto__.call(null,state_13757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12096__auto__;
}
break;
}
}catch (e13771){if((e13771 instanceof Object)){
var ex__12097__auto__ = e13771;
var statearr_13772_13790 = state_13757;
(statearr_13772_13790[(5)] = ex__12097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13791 = state_13757;
state_13757 = G__13791;
continue;
} else {
return ret_value__12095__auto__;
}
break;
}
});
csasync$proc$state_machine__12094__auto__ = function(state_13757){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12094__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12094__auto____1.call(this,state_13757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12094__auto____0;
csasync$proc$state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12094__auto____1;
return csasync$proc$state_machine__12094__auto__;
})()
;})(switch__12093__auto__,c__12114__auto__))
})();
var state__12116__auto__ = (function (){var statearr_13773 = f__12115__auto__.call(null);
(statearr_13773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12114__auto__);

return statearr_13773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12116__auto__);
});})(c__12114__auto__))
);

return c__12114__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__12114__auto___13876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12114__auto___13876){
return (function (){
var f__12115__auto__ = (function (){var switch__12093__auto__ = ((function (c__12114__auto___13876){
return (function (state_13854){
var state_val_13855 = (state_13854[(1)]);
if((state_val_13855 === (7))){
var inst_13843 = cljs.core.async.timeout.call(null,time_out);
var state_13854__$1 = state_13854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13854__$1,(10),inst_13843);
} else {
if((state_val_13855 === (1))){
var state_13854__$1 = state_13854;
var statearr_13856_13877 = state_13854__$1;
(statearr_13856_13877[(2)] = null);

(statearr_13856_13877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (4))){
var inst_13838 = proc_fn.call(null);
var state_13854__$1 = state_13854;
var statearr_13857_13878 = state_13854__$1;
(statearr_13857_13878[(2)] = inst_13838);

(statearr_13857_13878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (6))){
var inst_13841 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
if(cljs.core.truth_(inst_13841)){
var statearr_13858_13879 = state_13854__$1;
(statearr_13858_13879[(1)] = (7));

} else {
var statearr_13859_13880 = state_13854__$1;
(statearr_13859_13880[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (3))){
var inst_13851 = (state_13854[(2)]);
var inst_13852 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_13854__$1 = (function (){var statearr_13860 = state_13854;
(statearr_13860[(7)] = inst_13851);

return statearr_13860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13854__$1,inst_13852);
} else {
if((state_val_13855 === (2))){
var inst_13836 = (state_13854[(8)]);
var inst_13835 = cljs.core.deref.call(null,status);
var inst_13836__$1 = cljs.core._EQ_.call(null,inst_13835,"RUN");
var state_13854__$1 = (function (){var statearr_13861 = state_13854;
(statearr_13861[(8)] = inst_13836__$1);

return statearr_13861;
})();
if(inst_13836__$1){
var statearr_13862_13881 = state_13854__$1;
(statearr_13862_13881[(1)] = (4));

} else {
var statearr_13863_13882 = state_13854__$1;
(statearr_13863_13882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (9))){
var inst_13849 = (state_13854[(2)]);
var state_13854__$1 = state_13854;
var statearr_13864_13883 = state_13854__$1;
(statearr_13864_13883[(2)] = inst_13849);

(statearr_13864_13883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (5))){
var inst_13836 = (state_13854[(8)]);
var state_13854__$1 = state_13854;
var statearr_13865_13884 = state_13854__$1;
(statearr_13865_13884[(2)] = inst_13836);

(statearr_13865_13884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (10))){
var inst_13845 = (state_13854[(2)]);
var state_13854__$1 = (function (){var statearr_13866 = state_13854;
(statearr_13866[(9)] = inst_13845);

return statearr_13866;
})();
var statearr_13867_13885 = state_13854__$1;
(statearr_13867_13885[(2)] = null);

(statearr_13867_13885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13855 === (8))){
var state_13854__$1 = state_13854;
var statearr_13868_13886 = state_13854__$1;
(statearr_13868_13886[(2)] = null);

(statearr_13868_13886[(1)] = (9));


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
});})(c__12114__auto___13876))
;
return ((function (switch__12093__auto__,c__12114__auto___13876){
return (function() {
var csasync$proc$start_process_$_state_machine__12094__auto__ = null;
var csasync$proc$start_process_$_state_machine__12094__auto____0 = (function (){
var statearr_13872 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13872[(0)] = csasync$proc$start_process_$_state_machine__12094__auto__);

(statearr_13872[(1)] = (1));

return statearr_13872;
});
var csasync$proc$start_process_$_state_machine__12094__auto____1 = (function (state_13854){
while(true){
var ret_value__12095__auto__ = (function (){try{while(true){
var result__12096__auto__ = switch__12093__auto__.call(null,state_13854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12096__auto__;
}
break;
}
}catch (e13873){if((e13873 instanceof Object)){
var ex__12097__auto__ = e13873;
var statearr_13874_13887 = state_13854;
(statearr_13874_13887[(5)] = ex__12097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13888 = state_13854;
state_13854 = G__13888;
continue;
} else {
return ret_value__12095__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__12094__auto__ = function(state_13854){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__12094__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__12094__auto____1.call(this,state_13854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__12094__auto____0;
csasync$proc$start_process_$_state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__12094__auto____1;
return csasync$proc$start_process_$_state_machine__12094__auto__;
})()
;})(switch__12093__auto__,c__12114__auto___13876))
})();
var state__12116__auto__ = (function (){var statearr_13875 = f__12115__auto__.call(null);
(statearr_13875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12114__auto___13876);

return statearr_13875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12116__auto__);
});})(c__12114__auto___13876))
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
var c__12114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12114__auto__){
return (function (){
var f__12115__auto__ = (function (){var switch__12093__auto__ = ((function (c__12114__auto__){
return (function (state_13909){
var state_val_13910 = (state_13909[(1)]);
if((state_val_13910 === (1))){
var inst_13904 = cljs.core.async.timeout.call(null,time);
var state_13909__$1 = state_13909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13909__$1,(2),inst_13904);
} else {
if((state_val_13910 === (2))){
var inst_13906 = (state_13909[(2)]);
var inst_13907 = func.call(null);
var state_13909__$1 = (function (){var statearr_13911 = state_13909;
(statearr_13911[(7)] = inst_13906);

return statearr_13911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13909__$1,inst_13907);
} else {
return null;
}
}
});})(c__12114__auto__))
;
return ((function (switch__12093__auto__,c__12114__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__12094__auto__ = null;
var csasync$proc$delayer_$_state_machine__12094__auto____0 = (function (){
var statearr_13915 = [null,null,null,null,null,null,null,null];
(statearr_13915[(0)] = csasync$proc$delayer_$_state_machine__12094__auto__);

(statearr_13915[(1)] = (1));

return statearr_13915;
});
var csasync$proc$delayer_$_state_machine__12094__auto____1 = (function (state_13909){
while(true){
var ret_value__12095__auto__ = (function (){try{while(true){
var result__12096__auto__ = switch__12093__auto__.call(null,state_13909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12096__auto__;
}
break;
}
}catch (e13916){if((e13916 instanceof Object)){
var ex__12097__auto__ = e13916;
var statearr_13917_13919 = state_13909;
(statearr_13917_13919[(5)] = ex__12097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13920 = state_13909;
state_13909 = G__13920;
continue;
} else {
return ret_value__12095__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__12094__auto__ = function(state_13909){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__12094__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__12094__auto____1.call(this,state_13909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__12094__auto____0;
csasync$proc$delayer_$_state_machine__12094__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__12094__auto____1;
return csasync$proc$delayer_$_state_machine__12094__auto__;
})()
;})(switch__12093__auto__,c__12114__auto__))
})();
var state__12116__auto__ = (function (){var statearr_13918 = f__12115__auto__.call(null);
(statearr_13918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12114__auto__);

return statearr_13918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12116__auto__);
});})(c__12114__auto__))
);

return c__12114__auto__;
});

//# sourceMappingURL=proc.js.map