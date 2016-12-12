// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21842 = [];
var len__20842__auto___21905 = arguments.length;
var i__20843__auto___21906 = (0);
while(true){
if((i__20843__auto___21906 < len__20842__auto___21905)){
args21842.push((arguments[i__20843__auto___21906]));

var G__21907 = (i__20843__auto___21906 + (1));
i__20843__auto___21906 = G__21907;
continue;
} else {
}
break;
}

var G__21844 = args21842.length;
switch (G__21844) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21842.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21797__auto__){
return (function (){
var f__21798__auto__ = (function (){var switch__21776__auto__ = ((function (c__21797__auto__){
return (function (state_21858){
var state_val_21859 = (state_21858[(1)]);
if((state_val_21859 === (1))){
var state_21858__$1 = state_21858;
var statearr_21860_21909 = state_21858__$1;
(statearr_21860_21909[(2)] = null);

(statearr_21860_21909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21859 === (2))){
var state_21858__$1 = state_21858;
var statearr_21861_21910 = state_21858__$1;
(statearr_21861_21910[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21859 === (3))){
var inst_21856 = (state_21858[(2)]);
var state_21858__$1 = state_21858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21858__$1,inst_21856);
} else {
if((state_val_21859 === (4))){
var inst_21847 = func.call(null);
var inst_21848 = cljs.core.async.timeout.call(null,time_out);
var state_21858__$1 = (function (){var statearr_21863 = state_21858;
(statearr_21863[(7)] = inst_21847);

return statearr_21863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21858__$1,(7),inst_21848);
} else {
if((state_val_21859 === (5))){
var state_21858__$1 = state_21858;
var statearr_21864_21911 = state_21858__$1;
(statearr_21864_21911[(2)] = null);

(statearr_21864_21911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21859 === (6))){
var inst_21854 = (state_21858[(2)]);
var state_21858__$1 = state_21858;
var statearr_21865_21912 = state_21858__$1;
(statearr_21865_21912[(2)] = inst_21854);

(statearr_21865_21912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21859 === (7))){
var inst_21850 = (state_21858[(2)]);
var state_21858__$1 = (function (){var statearr_21866 = state_21858;
(statearr_21866[(8)] = inst_21850);

return statearr_21866;
})();
var statearr_21867_21913 = state_21858__$1;
(statearr_21867_21913[(2)] = null);

(statearr_21867_21913[(1)] = (2));


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
});})(c__21797__auto__))
;
return ((function (switch__21776__auto__,c__21797__auto__){
return (function() {
var csasync$proc$state_machine__21777__auto__ = null;
var csasync$proc$state_machine__21777__auto____0 = (function (){
var statearr_21871 = [null,null,null,null,null,null,null,null,null];
(statearr_21871[(0)] = csasync$proc$state_machine__21777__auto__);

(statearr_21871[(1)] = (1));

return statearr_21871;
});
var csasync$proc$state_machine__21777__auto____1 = (function (state_21858){
while(true){
var ret_value__21778__auto__ = (function (){try{while(true){
var result__21779__auto__ = switch__21776__auto__.call(null,state_21858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21779__auto__;
}
break;
}
}catch (e21872){if((e21872 instanceof Object)){
var ex__21780__auto__ = e21872;
var statearr_21873_21914 = state_21858;
(statearr_21873_21914[(5)] = ex__21780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21915 = state_21858;
state_21858 = G__21915;
continue;
} else {
return ret_value__21778__auto__;
}
break;
}
});
csasync$proc$state_machine__21777__auto__ = function(state_21858){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21777__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21777__auto____1.call(this,state_21858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21777__auto____0;
csasync$proc$state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21777__auto____1;
return csasync$proc$state_machine__21777__auto__;
})()
;})(switch__21776__auto__,c__21797__auto__))
})();
var state__21799__auto__ = (function (){var statearr_21874 = f__21798__auto__.call(null);
(statearr_21874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21797__auto__);

return statearr_21874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21799__auto__);
});})(c__21797__auto__))
);

return c__21797__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21797__auto__){
return (function (){
var f__21798__auto__ = (function (){var switch__21776__auto__ = ((function (c__21797__auto__){
return (function (state_21888){
var state_val_21889 = (state_21888[(1)]);
if((state_val_21889 === (1))){
var state_21888__$1 = state_21888;
var statearr_21890_21916 = state_21888__$1;
(statearr_21890_21916[(2)] = null);

(statearr_21890_21916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (2))){
var state_21888__$1 = state_21888;
var statearr_21891_21917 = state_21888__$1;
(statearr_21891_21917[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (3))){
var inst_21886 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21888__$1,inst_21886);
} else {
if((state_val_21889 === (4))){
var inst_21877 = func.call(null,param);
var inst_21878 = cljs.core.async.timeout.call(null,time_out);
var state_21888__$1 = (function (){var statearr_21893 = state_21888;
(statearr_21893[(7)] = inst_21877);

return statearr_21893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21888__$1,(7),inst_21878);
} else {
if((state_val_21889 === (5))){
var state_21888__$1 = state_21888;
var statearr_21894_21918 = state_21888__$1;
(statearr_21894_21918[(2)] = null);

(statearr_21894_21918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (6))){
var inst_21884 = (state_21888[(2)]);
var state_21888__$1 = state_21888;
var statearr_21895_21919 = state_21888__$1;
(statearr_21895_21919[(2)] = inst_21884);

(statearr_21895_21919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21889 === (7))){
var inst_21880 = (state_21888[(2)]);
var state_21888__$1 = (function (){var statearr_21896 = state_21888;
(statearr_21896[(8)] = inst_21880);

return statearr_21896;
})();
var statearr_21897_21920 = state_21888__$1;
(statearr_21897_21920[(2)] = null);

(statearr_21897_21920[(1)] = (2));


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
});})(c__21797__auto__))
;
return ((function (switch__21776__auto__,c__21797__auto__){
return (function() {
var csasync$proc$state_machine__21777__auto__ = null;
var csasync$proc$state_machine__21777__auto____0 = (function (){
var statearr_21901 = [null,null,null,null,null,null,null,null,null];
(statearr_21901[(0)] = csasync$proc$state_machine__21777__auto__);

(statearr_21901[(1)] = (1));

return statearr_21901;
});
var csasync$proc$state_machine__21777__auto____1 = (function (state_21888){
while(true){
var ret_value__21778__auto__ = (function (){try{while(true){
var result__21779__auto__ = switch__21776__auto__.call(null,state_21888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21779__auto__;
}
break;
}
}catch (e21902){if((e21902 instanceof Object)){
var ex__21780__auto__ = e21902;
var statearr_21903_21921 = state_21888;
(statearr_21903_21921[(5)] = ex__21780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21922 = state_21888;
state_21888 = G__21922;
continue;
} else {
return ret_value__21778__auto__;
}
break;
}
});
csasync$proc$state_machine__21777__auto__ = function(state_21888){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21777__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21777__auto____1.call(this,state_21888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21777__auto____0;
csasync$proc$state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21777__auto____1;
return csasync$proc$state_machine__21777__auto__;
})()
;})(switch__21776__auto__,c__21797__auto__))
})();
var state__21799__auto__ = (function (){var statearr_21904 = f__21798__auto__.call(null);
(statearr_21904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21797__auto__);

return statearr_21904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21799__auto__);
});})(c__21797__auto__))
);

return c__21797__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21797__auto___22007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21797__auto___22007){
return (function (){
var f__21798__auto__ = (function (){var switch__21776__auto__ = ((function (c__21797__auto___22007){
return (function (state_21985){
var state_val_21986 = (state_21985[(1)]);
if((state_val_21986 === (7))){
var inst_21974 = cljs.core.async.timeout.call(null,time_out);
var state_21985__$1 = state_21985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21985__$1,(10),inst_21974);
} else {
if((state_val_21986 === (1))){
var state_21985__$1 = state_21985;
var statearr_21987_22008 = state_21985__$1;
(statearr_21987_22008[(2)] = null);

(statearr_21987_22008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21986 === (4))){
var inst_21969 = proc_fn.call(null);
var state_21985__$1 = state_21985;
var statearr_21988_22009 = state_21985__$1;
(statearr_21988_22009[(2)] = inst_21969);

(statearr_21988_22009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21986 === (6))){
var inst_21972 = (state_21985[(2)]);
var state_21985__$1 = state_21985;
if(cljs.core.truth_(inst_21972)){
var statearr_21989_22010 = state_21985__$1;
(statearr_21989_22010[(1)] = (7));

} else {
var statearr_21990_22011 = state_21985__$1;
(statearr_21990_22011[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21986 === (3))){
var inst_21982 = (state_21985[(2)]);
var inst_21983 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21985__$1 = (function (){var statearr_21991 = state_21985;
(statearr_21991[(7)] = inst_21982);

return statearr_21991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21985__$1,inst_21983);
} else {
if((state_val_21986 === (2))){
var inst_21967 = (state_21985[(8)]);
var inst_21966 = cljs.core.deref.call(null,status);
var inst_21967__$1 = cljs.core._EQ_.call(null,inst_21966,"RUN");
var state_21985__$1 = (function (){var statearr_21992 = state_21985;
(statearr_21992[(8)] = inst_21967__$1);

return statearr_21992;
})();
if(inst_21967__$1){
var statearr_21993_22012 = state_21985__$1;
(statearr_21993_22012[(1)] = (4));

} else {
var statearr_21994_22013 = state_21985__$1;
(statearr_21994_22013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21986 === (9))){
var inst_21980 = (state_21985[(2)]);
var state_21985__$1 = state_21985;
var statearr_21995_22014 = state_21985__$1;
(statearr_21995_22014[(2)] = inst_21980);

(statearr_21995_22014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21986 === (5))){
var inst_21967 = (state_21985[(8)]);
var state_21985__$1 = state_21985;
var statearr_21996_22015 = state_21985__$1;
(statearr_21996_22015[(2)] = inst_21967);

(statearr_21996_22015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21986 === (10))){
var inst_21976 = (state_21985[(2)]);
var state_21985__$1 = (function (){var statearr_21997 = state_21985;
(statearr_21997[(9)] = inst_21976);

return statearr_21997;
})();
var statearr_21998_22016 = state_21985__$1;
(statearr_21998_22016[(2)] = null);

(statearr_21998_22016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21986 === (8))){
var state_21985__$1 = state_21985;
var statearr_21999_22017 = state_21985__$1;
(statearr_21999_22017[(2)] = null);

(statearr_21999_22017[(1)] = (9));


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
});})(c__21797__auto___22007))
;
return ((function (switch__21776__auto__,c__21797__auto___22007){
return (function() {
var csasync$proc$start_process_$_state_machine__21777__auto__ = null;
var csasync$proc$start_process_$_state_machine__21777__auto____0 = (function (){
var statearr_22003 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22003[(0)] = csasync$proc$start_process_$_state_machine__21777__auto__);

(statearr_22003[(1)] = (1));

return statearr_22003;
});
var csasync$proc$start_process_$_state_machine__21777__auto____1 = (function (state_21985){
while(true){
var ret_value__21778__auto__ = (function (){try{while(true){
var result__21779__auto__ = switch__21776__auto__.call(null,state_21985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21779__auto__;
}
break;
}
}catch (e22004){if((e22004 instanceof Object)){
var ex__21780__auto__ = e22004;
var statearr_22005_22018 = state_21985;
(statearr_22005_22018[(5)] = ex__21780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22019 = state_21985;
state_21985 = G__22019;
continue;
} else {
return ret_value__21778__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21777__auto__ = function(state_21985){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21777__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21777__auto____1.call(this,state_21985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21777__auto____0;
csasync$proc$start_process_$_state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21777__auto____1;
return csasync$proc$start_process_$_state_machine__21777__auto__;
})()
;})(switch__21776__auto__,c__21797__auto___22007))
})();
var state__21799__auto__ = (function (){var statearr_22006 = f__21798__auto__.call(null);
(statearr_22006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21797__auto___22007);

return statearr_22006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21799__auto__);
});})(c__21797__auto___22007))
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
var c__21797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21797__auto__){
return (function (){
var f__21798__auto__ = (function (){var switch__21776__auto__ = ((function (c__21797__auto__){
return (function (state_22040){
var state_val_22041 = (state_22040[(1)]);
if((state_val_22041 === (1))){
var inst_22035 = cljs.core.async.timeout.call(null,time);
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22040__$1,(2),inst_22035);
} else {
if((state_val_22041 === (2))){
var inst_22037 = (state_22040[(2)]);
var inst_22038 = func.call(null);
var state_22040__$1 = (function (){var statearr_22042 = state_22040;
(statearr_22042[(7)] = inst_22037);

return statearr_22042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22040__$1,inst_22038);
} else {
return null;
}
}
});})(c__21797__auto__))
;
return ((function (switch__21776__auto__,c__21797__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21777__auto__ = null;
var csasync$proc$delayer_$_state_machine__21777__auto____0 = (function (){
var statearr_22046 = [null,null,null,null,null,null,null,null];
(statearr_22046[(0)] = csasync$proc$delayer_$_state_machine__21777__auto__);

(statearr_22046[(1)] = (1));

return statearr_22046;
});
var csasync$proc$delayer_$_state_machine__21777__auto____1 = (function (state_22040){
while(true){
var ret_value__21778__auto__ = (function (){try{while(true){
var result__21779__auto__ = switch__21776__auto__.call(null,state_22040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21779__auto__;
}
break;
}
}catch (e22047){if((e22047 instanceof Object)){
var ex__21780__auto__ = e22047;
var statearr_22048_22050 = state_22040;
(statearr_22048_22050[(5)] = ex__21780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22051 = state_22040;
state_22040 = G__22051;
continue;
} else {
return ret_value__21778__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21777__auto__ = function(state_22040){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21777__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21777__auto____1.call(this,state_22040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21777__auto____0;
csasync$proc$delayer_$_state_machine__21777__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21777__auto____1;
return csasync$proc$delayer_$_state_machine__21777__auto__;
})()
;})(switch__21776__auto__,c__21797__auto__))
})();
var state__21799__auto__ = (function (){var statearr_22049 = f__21798__auto__.call(null);
(statearr_22049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21797__auto__);

return statearr_22049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21799__auto__);
});})(c__21797__auto__))
);

return c__21797__auto__;
});

//# sourceMappingURL=proc.js.map