// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25965 = [];
var len__23750__auto___26028 = arguments.length;
var i__23751__auto___26029 = (0);
while(true){
if((i__23751__auto___26029 < len__23750__auto___26028)){
args25965.push((arguments[i__23751__auto___26029]));

var G__26030 = (i__23751__auto___26029 + (1));
i__23751__auto___26029 = G__26030;
continue;
} else {
}
break;
}

var G__25967 = args25965.length;
switch (G__25967) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25965.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__24729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24729__auto__){
return (function (){
var f__24730__auto__ = (function (){var switch__24708__auto__ = ((function (c__24729__auto__){
return (function (state_25981){
var state_val_25982 = (state_25981[(1)]);
if((state_val_25982 === (1))){
var state_25981__$1 = state_25981;
var statearr_25983_26032 = state_25981__$1;
(statearr_25983_26032[(2)] = null);

(statearr_25983_26032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (2))){
var state_25981__$1 = state_25981;
var statearr_25984_26033 = state_25981__$1;
(statearr_25984_26033[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (3))){
var inst_25979 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25981__$1,inst_25979);
} else {
if((state_val_25982 === (4))){
var inst_25970 = func.call(null);
var inst_25971 = cljs.core.async.timeout.call(null,time_out);
var state_25981__$1 = (function (){var statearr_25986 = state_25981;
(statearr_25986[(7)] = inst_25970);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25981__$1,(7),inst_25971);
} else {
if((state_val_25982 === (5))){
var state_25981__$1 = state_25981;
var statearr_25987_26034 = state_25981__$1;
(statearr_25987_26034[(2)] = null);

(statearr_25987_26034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (6))){
var inst_25977 = (state_25981[(2)]);
var state_25981__$1 = state_25981;
var statearr_25988_26035 = state_25981__$1;
(statearr_25988_26035[(2)] = inst_25977);

(statearr_25988_26035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25982 === (7))){
var inst_25973 = (state_25981[(2)]);
var state_25981__$1 = (function (){var statearr_25989 = state_25981;
(statearr_25989[(8)] = inst_25973);

return statearr_25989;
})();
var statearr_25990_26036 = state_25981__$1;
(statearr_25990_26036[(2)] = null);

(statearr_25990_26036[(1)] = (2));


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
});})(c__24729__auto__))
;
return ((function (switch__24708__auto__,c__24729__auto__){
return (function() {
var csasync$proc$state_machine__24709__auto__ = null;
var csasync$proc$state_machine__24709__auto____0 = (function (){
var statearr_25994 = [null,null,null,null,null,null,null,null,null];
(statearr_25994[(0)] = csasync$proc$state_machine__24709__auto__);

(statearr_25994[(1)] = (1));

return statearr_25994;
});
var csasync$proc$state_machine__24709__auto____1 = (function (state_25981){
while(true){
var ret_value__24710__auto__ = (function (){try{while(true){
var result__24711__auto__ = switch__24708__auto__.call(null,state_25981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24711__auto__;
}
break;
}
}catch (e25995){if((e25995 instanceof Object)){
var ex__24712__auto__ = e25995;
var statearr_25996_26037 = state_25981;
(statearr_25996_26037[(5)] = ex__24712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26038 = state_25981;
state_25981 = G__26038;
continue;
} else {
return ret_value__24710__auto__;
}
break;
}
});
csasync$proc$state_machine__24709__auto__ = function(state_25981){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24709__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24709__auto____1.call(this,state_25981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24709__auto____0;
csasync$proc$state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24709__auto____1;
return csasync$proc$state_machine__24709__auto__;
})()
;})(switch__24708__auto__,c__24729__auto__))
})();
var state__24731__auto__ = (function (){var statearr_25997 = f__24730__auto__.call(null);
(statearr_25997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24729__auto__);

return statearr_25997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24731__auto__);
});})(c__24729__auto__))
);

return c__24729__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24729__auto__){
return (function (){
var f__24730__auto__ = (function (){var switch__24708__auto__ = ((function (c__24729__auto__){
return (function (state_26011){
var state_val_26012 = (state_26011[(1)]);
if((state_val_26012 === (1))){
var state_26011__$1 = state_26011;
var statearr_26013_26039 = state_26011__$1;
(statearr_26013_26039[(2)] = null);

(statearr_26013_26039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (2))){
var state_26011__$1 = state_26011;
var statearr_26014_26040 = state_26011__$1;
(statearr_26014_26040[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (3))){
var inst_26009 = (state_26011[(2)]);
var state_26011__$1 = state_26011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26011__$1,inst_26009);
} else {
if((state_val_26012 === (4))){
var inst_26000 = func.call(null,param);
var inst_26001 = cljs.core.async.timeout.call(null,time_out);
var state_26011__$1 = (function (){var statearr_26016 = state_26011;
(statearr_26016[(7)] = inst_26000);

return statearr_26016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26011__$1,(7),inst_26001);
} else {
if((state_val_26012 === (5))){
var state_26011__$1 = state_26011;
var statearr_26017_26041 = state_26011__$1;
(statearr_26017_26041[(2)] = null);

(statearr_26017_26041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (6))){
var inst_26007 = (state_26011[(2)]);
var state_26011__$1 = state_26011;
var statearr_26018_26042 = state_26011__$1;
(statearr_26018_26042[(2)] = inst_26007);

(statearr_26018_26042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26012 === (7))){
var inst_26003 = (state_26011[(2)]);
var state_26011__$1 = (function (){var statearr_26019 = state_26011;
(statearr_26019[(8)] = inst_26003);

return statearr_26019;
})();
var statearr_26020_26043 = state_26011__$1;
(statearr_26020_26043[(2)] = null);

(statearr_26020_26043[(1)] = (2));


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
});})(c__24729__auto__))
;
return ((function (switch__24708__auto__,c__24729__auto__){
return (function() {
var csasync$proc$state_machine__24709__auto__ = null;
var csasync$proc$state_machine__24709__auto____0 = (function (){
var statearr_26024 = [null,null,null,null,null,null,null,null,null];
(statearr_26024[(0)] = csasync$proc$state_machine__24709__auto__);

(statearr_26024[(1)] = (1));

return statearr_26024;
});
var csasync$proc$state_machine__24709__auto____1 = (function (state_26011){
while(true){
var ret_value__24710__auto__ = (function (){try{while(true){
var result__24711__auto__ = switch__24708__auto__.call(null,state_26011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24711__auto__;
}
break;
}
}catch (e26025){if((e26025 instanceof Object)){
var ex__24712__auto__ = e26025;
var statearr_26026_26044 = state_26011;
(statearr_26026_26044[(5)] = ex__24712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26045 = state_26011;
state_26011 = G__26045;
continue;
} else {
return ret_value__24710__auto__;
}
break;
}
});
csasync$proc$state_machine__24709__auto__ = function(state_26011){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24709__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24709__auto____1.call(this,state_26011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24709__auto____0;
csasync$proc$state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24709__auto____1;
return csasync$proc$state_machine__24709__auto__;
})()
;})(switch__24708__auto__,c__24729__auto__))
})();
var state__24731__auto__ = (function (){var statearr_26027 = f__24730__auto__.call(null);
(statearr_26027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24729__auto__);

return statearr_26027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24731__auto__);
});})(c__24729__auto__))
);

return c__24729__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__24729__auto___26154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24729__auto___26154){
return (function (){
var f__24730__auto__ = (function (){var switch__24708__auto__ = ((function (c__24729__auto___26154){
return (function (state_26127){
var state_val_26128 = (state_26127[(1)]);
if((state_val_26128 === (7))){
var inst_26109 = cljs.core.async.timeout.call(null,time_out);
var state_26127__$1 = state_26127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26127__$1,(10),inst_26109);
} else {
if((state_val_26128 === (1))){
var state_26127__$1 = state_26127;
var statearr_26129_26155 = state_26127__$1;
(statearr_26129_26155[(2)] = null);

(statearr_26129_26155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (4))){
var inst_26104 = proc_fn.call(null);
var state_26127__$1 = state_26127;
var statearr_26130_26156 = state_26127__$1;
(statearr_26130_26156[(2)] = inst_26104);

(statearr_26130_26156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (13))){
var inst_26124 = (state_26127[(2)]);
var inst_26125 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_26127__$1 = (function (){var statearr_26131 = state_26127;
(statearr_26131[(7)] = inst_26124);

return statearr_26131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26127__$1,inst_26125);
} else {
if((state_val_26128 === (6))){
var inst_26107 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
if(cljs.core.truth_(inst_26107)){
var statearr_26132_26157 = state_26127__$1;
(statearr_26132_26157[(1)] = (7));

} else {
var statearr_26133_26158 = state_26127__$1;
(statearr_26133_26158[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (3))){
var inst_26117 = (state_26127[(2)]);
var inst_26118 = (final_fun == null);
var inst_26119 = cljs.core.not.call(null,inst_26118);
var state_26127__$1 = (function (){var statearr_26134 = state_26127;
(statearr_26134[(8)] = inst_26117);

return statearr_26134;
})();
if(inst_26119){
var statearr_26135_26159 = state_26127__$1;
(statearr_26135_26159[(1)] = (11));

} else {
var statearr_26136_26160 = state_26127__$1;
(statearr_26136_26160[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (12))){
var state_26127__$1 = state_26127;
var statearr_26137_26161 = state_26127__$1;
(statearr_26137_26161[(2)] = null);

(statearr_26137_26161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (2))){
var inst_26102 = (state_26127[(9)]);
var inst_26101 = cljs.core.deref.call(null,status);
var inst_26102__$1 = cljs.core._EQ_.call(null,inst_26101,"RUN");
var state_26127__$1 = (function (){var statearr_26138 = state_26127;
(statearr_26138[(9)] = inst_26102__$1);

return statearr_26138;
})();
if(inst_26102__$1){
var statearr_26139_26162 = state_26127__$1;
(statearr_26139_26162[(1)] = (4));

} else {
var statearr_26140_26163 = state_26127__$1;
(statearr_26140_26163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (11))){
var inst_26121 = final_fun.call(null);
var state_26127__$1 = state_26127;
var statearr_26141_26164 = state_26127__$1;
(statearr_26141_26164[(2)] = inst_26121);

(statearr_26141_26164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (9))){
var inst_26115 = (state_26127[(2)]);
var state_26127__$1 = state_26127;
var statearr_26142_26165 = state_26127__$1;
(statearr_26142_26165[(2)] = inst_26115);

(statearr_26142_26165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (5))){
var inst_26102 = (state_26127[(9)]);
var state_26127__$1 = state_26127;
var statearr_26143_26166 = state_26127__$1;
(statearr_26143_26166[(2)] = inst_26102);

(statearr_26143_26166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (10))){
var inst_26111 = (state_26127[(2)]);
var state_26127__$1 = (function (){var statearr_26144 = state_26127;
(statearr_26144[(10)] = inst_26111);

return statearr_26144;
})();
var statearr_26145_26167 = state_26127__$1;
(statearr_26145_26167[(2)] = null);

(statearr_26145_26167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26128 === (8))){
var state_26127__$1 = state_26127;
var statearr_26146_26168 = state_26127__$1;
(statearr_26146_26168[(2)] = null);

(statearr_26146_26168[(1)] = (9));


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
});})(c__24729__auto___26154))
;
return ((function (switch__24708__auto__,c__24729__auto___26154){
return (function() {
var csasync$proc$start_process_$_state_machine__24709__auto__ = null;
var csasync$proc$start_process_$_state_machine__24709__auto____0 = (function (){
var statearr_26150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26150[(0)] = csasync$proc$start_process_$_state_machine__24709__auto__);

(statearr_26150[(1)] = (1));

return statearr_26150;
});
var csasync$proc$start_process_$_state_machine__24709__auto____1 = (function (state_26127){
while(true){
var ret_value__24710__auto__ = (function (){try{while(true){
var result__24711__auto__ = switch__24708__auto__.call(null,state_26127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24711__auto__;
}
break;
}
}catch (e26151){if((e26151 instanceof Object)){
var ex__24712__auto__ = e26151;
var statearr_26152_26169 = state_26127;
(statearr_26152_26169[(5)] = ex__24712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26170 = state_26127;
state_26127 = G__26170;
continue;
} else {
return ret_value__24710__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__24709__auto__ = function(state_26127){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__24709__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__24709__auto____1.call(this,state_26127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__24709__auto____0;
csasync$proc$start_process_$_state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__24709__auto____1;
return csasync$proc$start_process_$_state_machine__24709__auto__;
})()
;})(switch__24708__auto__,c__24729__auto___26154))
})();
var state__24731__auto__ = (function (){var statearr_26153 = f__24730__auto__.call(null);
(statearr_26153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24729__auto___26154);

return statearr_26153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24731__auto__);
});})(c__24729__auto___26154))
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
var c__24729__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24729__auto__){
return (function (){
var f__24730__auto__ = (function (){var switch__24708__auto__ = ((function (c__24729__auto__){
return (function (state_26191){
var state_val_26192 = (state_26191[(1)]);
if((state_val_26192 === (1))){
var inst_26186 = cljs.core.async.timeout.call(null,time);
var state_26191__$1 = state_26191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26191__$1,(2),inst_26186);
} else {
if((state_val_26192 === (2))){
var inst_26188 = (state_26191[(2)]);
var inst_26189 = func.call(null);
var state_26191__$1 = (function (){var statearr_26193 = state_26191;
(statearr_26193[(7)] = inst_26188);

return statearr_26193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26191__$1,inst_26189);
} else {
return null;
}
}
});})(c__24729__auto__))
;
return ((function (switch__24708__auto__,c__24729__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__24709__auto__ = null;
var csasync$proc$delayer_$_state_machine__24709__auto____0 = (function (){
var statearr_26197 = [null,null,null,null,null,null,null,null];
(statearr_26197[(0)] = csasync$proc$delayer_$_state_machine__24709__auto__);

(statearr_26197[(1)] = (1));

return statearr_26197;
});
var csasync$proc$delayer_$_state_machine__24709__auto____1 = (function (state_26191){
while(true){
var ret_value__24710__auto__ = (function (){try{while(true){
var result__24711__auto__ = switch__24708__auto__.call(null,state_26191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24711__auto__;
}
break;
}
}catch (e26198){if((e26198 instanceof Object)){
var ex__24712__auto__ = e26198;
var statearr_26199_26201 = state_26191;
(statearr_26199_26201[(5)] = ex__24712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26202 = state_26191;
state_26191 = G__26202;
continue;
} else {
return ret_value__24710__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__24709__auto__ = function(state_26191){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__24709__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__24709__auto____1.call(this,state_26191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__24709__auto____0;
csasync$proc$delayer_$_state_machine__24709__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__24709__auto____1;
return csasync$proc$delayer_$_state_machine__24709__auto__;
})()
;})(switch__24708__auto__,c__24729__auto__))
})();
var state__24731__auto__ = (function (){var statearr_26200 = f__24730__auto__.call(null);
(statearr_26200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24729__auto__);

return statearr_26200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24731__auto__);
});})(c__24729__auto__))
);

return c__24729__auto__;
});

//# sourceMappingURL=proc.js.map