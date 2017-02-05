// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args23851 = [];
var len__21689__auto___23914 = arguments.length;
var i__21690__auto___23915 = (0);
while(true){
if((i__21690__auto___23915 < len__21689__auto___23914)){
args23851.push((arguments[i__21690__auto___23915]));

var G__23916 = (i__21690__auto___23915 + (1));
i__21690__auto___23915 = G__23916;
continue;
} else {
}
break;
}

var G__23853 = args23851.length;
switch (G__23853) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23851.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22751__auto__){
return (function (){
var f__22752__auto__ = (function (){var switch__22730__auto__ = ((function (c__22751__auto__){
return (function (state_23867){
var state_val_23868 = (state_23867[(1)]);
if((state_val_23868 === (1))){
var state_23867__$1 = state_23867;
var statearr_23869_23918 = state_23867__$1;
(statearr_23869_23918[(2)] = null);

(statearr_23869_23918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (2))){
var state_23867__$1 = state_23867;
var statearr_23870_23919 = state_23867__$1;
(statearr_23870_23919[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (3))){
var inst_23865 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23867__$1,inst_23865);
} else {
if((state_val_23868 === (4))){
var inst_23856 = func.call(null);
var inst_23857 = cljs.core.async.timeout.call(null,time_out);
var state_23867__$1 = (function (){var statearr_23872 = state_23867;
(statearr_23872[(7)] = inst_23856);

return statearr_23872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23867__$1,(7),inst_23857);
} else {
if((state_val_23868 === (5))){
var state_23867__$1 = state_23867;
var statearr_23873_23920 = state_23867__$1;
(statearr_23873_23920[(2)] = null);

(statearr_23873_23920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (6))){
var inst_23863 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23874_23921 = state_23867__$1;
(statearr_23874_23921[(2)] = inst_23863);

(statearr_23874_23921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (7))){
var inst_23859 = (state_23867[(2)]);
var state_23867__$1 = (function (){var statearr_23875 = state_23867;
(statearr_23875[(8)] = inst_23859);

return statearr_23875;
})();
var statearr_23876_23922 = state_23867__$1;
(statearr_23876_23922[(2)] = null);

(statearr_23876_23922[(1)] = (2));


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
});})(c__22751__auto__))
;
return ((function (switch__22730__auto__,c__22751__auto__){
return (function() {
var csasync$proc$state_machine__22731__auto__ = null;
var csasync$proc$state_machine__22731__auto____0 = (function (){
var statearr_23880 = [null,null,null,null,null,null,null,null,null];
(statearr_23880[(0)] = csasync$proc$state_machine__22731__auto__);

(statearr_23880[(1)] = (1));

return statearr_23880;
});
var csasync$proc$state_machine__22731__auto____1 = (function (state_23867){
while(true){
var ret_value__22732__auto__ = (function (){try{while(true){
var result__22733__auto__ = switch__22730__auto__.call(null,state_23867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22733__auto__;
}
break;
}
}catch (e23881){if((e23881 instanceof Object)){
var ex__22734__auto__ = e23881;
var statearr_23882_23923 = state_23867;
(statearr_23882_23923[(5)] = ex__22734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23924 = state_23867;
state_23867 = G__23924;
continue;
} else {
return ret_value__22732__auto__;
}
break;
}
});
csasync$proc$state_machine__22731__auto__ = function(state_23867){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22731__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22731__auto____1.call(this,state_23867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22731__auto____0;
csasync$proc$state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22731__auto____1;
return csasync$proc$state_machine__22731__auto__;
})()
;})(switch__22730__auto__,c__22751__auto__))
})();
var state__22753__auto__ = (function (){var statearr_23883 = f__22752__auto__.call(null);
(statearr_23883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22751__auto__);

return statearr_23883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22753__auto__);
});})(c__22751__auto__))
);

return c__22751__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22751__auto__){
return (function (){
var f__22752__auto__ = (function (){var switch__22730__auto__ = ((function (c__22751__auto__){
return (function (state_23897){
var state_val_23898 = (state_23897[(1)]);
if((state_val_23898 === (1))){
var state_23897__$1 = state_23897;
var statearr_23899_23925 = state_23897__$1;
(statearr_23899_23925[(2)] = null);

(statearr_23899_23925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (2))){
var state_23897__$1 = state_23897;
var statearr_23900_23926 = state_23897__$1;
(statearr_23900_23926[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (3))){
var inst_23895 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23897__$1,inst_23895);
} else {
if((state_val_23898 === (4))){
var inst_23886 = func.call(null,param);
var inst_23887 = cljs.core.async.timeout.call(null,time_out);
var state_23897__$1 = (function (){var statearr_23902 = state_23897;
(statearr_23902[(7)] = inst_23886);

return statearr_23902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23897__$1,(7),inst_23887);
} else {
if((state_val_23898 === (5))){
var state_23897__$1 = state_23897;
var statearr_23903_23927 = state_23897__$1;
(statearr_23903_23927[(2)] = null);

(statearr_23903_23927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (6))){
var inst_23893 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
var statearr_23904_23928 = state_23897__$1;
(statearr_23904_23928[(2)] = inst_23893);

(statearr_23904_23928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (7))){
var inst_23889 = (state_23897[(2)]);
var state_23897__$1 = (function (){var statearr_23905 = state_23897;
(statearr_23905[(8)] = inst_23889);

return statearr_23905;
})();
var statearr_23906_23929 = state_23897__$1;
(statearr_23906_23929[(2)] = null);

(statearr_23906_23929[(1)] = (2));


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
});})(c__22751__auto__))
;
return ((function (switch__22730__auto__,c__22751__auto__){
return (function() {
var csasync$proc$state_machine__22731__auto__ = null;
var csasync$proc$state_machine__22731__auto____0 = (function (){
var statearr_23910 = [null,null,null,null,null,null,null,null,null];
(statearr_23910[(0)] = csasync$proc$state_machine__22731__auto__);

(statearr_23910[(1)] = (1));

return statearr_23910;
});
var csasync$proc$state_machine__22731__auto____1 = (function (state_23897){
while(true){
var ret_value__22732__auto__ = (function (){try{while(true){
var result__22733__auto__ = switch__22730__auto__.call(null,state_23897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22733__auto__;
}
break;
}
}catch (e23911){if((e23911 instanceof Object)){
var ex__22734__auto__ = e23911;
var statearr_23912_23930 = state_23897;
(statearr_23912_23930[(5)] = ex__22734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23931 = state_23897;
state_23897 = G__23931;
continue;
} else {
return ret_value__22732__auto__;
}
break;
}
});
csasync$proc$state_machine__22731__auto__ = function(state_23897){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22731__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22731__auto____1.call(this,state_23897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22731__auto____0;
csasync$proc$state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22731__auto____1;
return csasync$proc$state_machine__22731__auto__;
})()
;})(switch__22730__auto__,c__22751__auto__))
})();
var state__22753__auto__ = (function (){var statearr_23913 = f__22752__auto__.call(null);
(statearr_23913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22751__auto__);

return statearr_23913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22753__auto__);
});})(c__22751__auto__))
);

return c__22751__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22751__auto___24016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22751__auto___24016){
return (function (){
var f__22752__auto__ = (function (){var switch__22730__auto__ = ((function (c__22751__auto___24016){
return (function (state_23994){
var state_val_23995 = (state_23994[(1)]);
if((state_val_23995 === (7))){
var inst_23983 = cljs.core.async.timeout.call(null,time_out);
var state_23994__$1 = state_23994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23994__$1,(10),inst_23983);
} else {
if((state_val_23995 === (1))){
var state_23994__$1 = state_23994;
var statearr_23996_24017 = state_23994__$1;
(statearr_23996_24017[(2)] = null);

(statearr_23996_24017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (4))){
var inst_23978 = proc_fn.call(null);
var state_23994__$1 = state_23994;
var statearr_23997_24018 = state_23994__$1;
(statearr_23997_24018[(2)] = inst_23978);

(statearr_23997_24018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (6))){
var inst_23981 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
if(cljs.core.truth_(inst_23981)){
var statearr_23998_24019 = state_23994__$1;
(statearr_23998_24019[(1)] = (7));

} else {
var statearr_23999_24020 = state_23994__$1;
(statearr_23999_24020[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (3))){
var inst_23991 = (state_23994[(2)]);
var inst_23992 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23994__$1 = (function (){var statearr_24000 = state_23994;
(statearr_24000[(7)] = inst_23991);

return statearr_24000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23994__$1,inst_23992);
} else {
if((state_val_23995 === (2))){
var inst_23976 = (state_23994[(8)]);
var inst_23975 = cljs.core.deref.call(null,status);
var inst_23976__$1 = cljs.core._EQ_.call(null,inst_23975,"RUN");
var state_23994__$1 = (function (){var statearr_24001 = state_23994;
(statearr_24001[(8)] = inst_23976__$1);

return statearr_24001;
})();
if(inst_23976__$1){
var statearr_24002_24021 = state_23994__$1;
(statearr_24002_24021[(1)] = (4));

} else {
var statearr_24003_24022 = state_23994__$1;
(statearr_24003_24022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (9))){
var inst_23989 = (state_23994[(2)]);
var state_23994__$1 = state_23994;
var statearr_24004_24023 = state_23994__$1;
(statearr_24004_24023[(2)] = inst_23989);

(statearr_24004_24023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (5))){
var inst_23976 = (state_23994[(8)]);
var state_23994__$1 = state_23994;
var statearr_24005_24024 = state_23994__$1;
(statearr_24005_24024[(2)] = inst_23976);

(statearr_24005_24024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (10))){
var inst_23985 = (state_23994[(2)]);
var state_23994__$1 = (function (){var statearr_24006 = state_23994;
(statearr_24006[(9)] = inst_23985);

return statearr_24006;
})();
var statearr_24007_24025 = state_23994__$1;
(statearr_24007_24025[(2)] = null);

(statearr_24007_24025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23995 === (8))){
var state_23994__$1 = state_23994;
var statearr_24008_24026 = state_23994__$1;
(statearr_24008_24026[(2)] = null);

(statearr_24008_24026[(1)] = (9));


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
});})(c__22751__auto___24016))
;
return ((function (switch__22730__auto__,c__22751__auto___24016){
return (function() {
var csasync$proc$start_process_$_state_machine__22731__auto__ = null;
var csasync$proc$start_process_$_state_machine__22731__auto____0 = (function (){
var statearr_24012 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24012[(0)] = csasync$proc$start_process_$_state_machine__22731__auto__);

(statearr_24012[(1)] = (1));

return statearr_24012;
});
var csasync$proc$start_process_$_state_machine__22731__auto____1 = (function (state_23994){
while(true){
var ret_value__22732__auto__ = (function (){try{while(true){
var result__22733__auto__ = switch__22730__auto__.call(null,state_23994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22733__auto__;
}
break;
}
}catch (e24013){if((e24013 instanceof Object)){
var ex__22734__auto__ = e24013;
var statearr_24014_24027 = state_23994;
(statearr_24014_24027[(5)] = ex__22734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24028 = state_23994;
state_23994 = G__24028;
continue;
} else {
return ret_value__22732__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22731__auto__ = function(state_23994){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22731__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22731__auto____1.call(this,state_23994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22731__auto____0;
csasync$proc$start_process_$_state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22731__auto____1;
return csasync$proc$start_process_$_state_machine__22731__auto__;
})()
;})(switch__22730__auto__,c__22751__auto___24016))
})();
var state__22753__auto__ = (function (){var statearr_24015 = f__22752__auto__.call(null);
(statearr_24015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22751__auto___24016);

return statearr_24015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22753__auto__);
});})(c__22751__auto___24016))
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
var c__22751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22751__auto__){
return (function (){
var f__22752__auto__ = (function (){var switch__22730__auto__ = ((function (c__22751__auto__){
return (function (state_24049){
var state_val_24050 = (state_24049[(1)]);
if((state_val_24050 === (1))){
var inst_24044 = cljs.core.async.timeout.call(null,time);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24049__$1,(2),inst_24044);
} else {
if((state_val_24050 === (2))){
var inst_24046 = (state_24049[(2)]);
var inst_24047 = func.call(null);
var state_24049__$1 = (function (){var statearr_24051 = state_24049;
(statearr_24051[(7)] = inst_24046);

return statearr_24051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24049__$1,inst_24047);
} else {
return null;
}
}
});})(c__22751__auto__))
;
return ((function (switch__22730__auto__,c__22751__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22731__auto__ = null;
var csasync$proc$delayer_$_state_machine__22731__auto____0 = (function (){
var statearr_24055 = [null,null,null,null,null,null,null,null];
(statearr_24055[(0)] = csasync$proc$delayer_$_state_machine__22731__auto__);

(statearr_24055[(1)] = (1));

return statearr_24055;
});
var csasync$proc$delayer_$_state_machine__22731__auto____1 = (function (state_24049){
while(true){
var ret_value__22732__auto__ = (function (){try{while(true){
var result__22733__auto__ = switch__22730__auto__.call(null,state_24049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22733__auto__;
}
break;
}
}catch (e24056){if((e24056 instanceof Object)){
var ex__22734__auto__ = e24056;
var statearr_24057_24059 = state_24049;
(statearr_24057_24059[(5)] = ex__22734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24060 = state_24049;
state_24049 = G__24060;
continue;
} else {
return ret_value__22732__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22731__auto__ = function(state_24049){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22731__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22731__auto____1.call(this,state_24049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22731__auto____0;
csasync$proc$delayer_$_state_machine__22731__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22731__auto____1;
return csasync$proc$delayer_$_state_machine__22731__auto__;
})()
;})(switch__22730__auto__,c__22751__auto__))
})();
var state__22753__auto__ = (function (){var statearr_24058 = f__22752__auto__.call(null);
(statearr_24058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22751__auto__);

return statearr_24058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22753__auto__);
});})(c__22751__auto__))
);

return c__22751__auto__;
});

//# sourceMappingURL=proc.js.map