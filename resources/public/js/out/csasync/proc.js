// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args13000 = [];
var len__10353__auto___13063 = arguments.length;
var i__10354__auto___13064 = (0);
while(true){
if((i__10354__auto___13064 < len__10353__auto___13063)){
args13000.push((arguments[i__10354__auto___13064]));

var G__13065 = (i__10354__auto___13064 + (1));
i__10354__auto___13064 = G__13065;
continue;
} else {
}
break;
}

var G__13002 = args13000.length;
switch (G__13002) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13000.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11770__auto__){
return (function (){
var f__11771__auto__ = (function (){var switch__11749__auto__ = ((function (c__11770__auto__){
return (function (state_13016){
var state_val_13017 = (state_13016[(1)]);
if((state_val_13017 === (1))){
var state_13016__$1 = state_13016;
var statearr_13018_13067 = state_13016__$1;
(statearr_13018_13067[(2)] = null);

(statearr_13018_13067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (2))){
var state_13016__$1 = state_13016;
var statearr_13019_13068 = state_13016__$1;
(statearr_13019_13068[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (3))){
var inst_13014 = (state_13016[(2)]);
var state_13016__$1 = state_13016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13016__$1,inst_13014);
} else {
if((state_val_13017 === (4))){
var inst_13005 = func.call(null);
var inst_13006 = cljs.core.async.timeout.call(null,time_out);
var state_13016__$1 = (function (){var statearr_13021 = state_13016;
(statearr_13021[(7)] = inst_13005);

return statearr_13021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13016__$1,(7),inst_13006);
} else {
if((state_val_13017 === (5))){
var state_13016__$1 = state_13016;
var statearr_13022_13069 = state_13016__$1;
(statearr_13022_13069[(2)] = null);

(statearr_13022_13069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (6))){
var inst_13012 = (state_13016[(2)]);
var state_13016__$1 = state_13016;
var statearr_13023_13070 = state_13016__$1;
(statearr_13023_13070[(2)] = inst_13012);

(statearr_13023_13070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13017 === (7))){
var inst_13008 = (state_13016[(2)]);
var state_13016__$1 = (function (){var statearr_13024 = state_13016;
(statearr_13024[(8)] = inst_13008);

return statearr_13024;
})();
var statearr_13025_13071 = state_13016__$1;
(statearr_13025_13071[(2)] = null);

(statearr_13025_13071[(1)] = (2));


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
});})(c__11770__auto__))
;
return ((function (switch__11749__auto__,c__11770__auto__){
return (function() {
var csasync$proc$state_machine__11750__auto__ = null;
var csasync$proc$state_machine__11750__auto____0 = (function (){
var statearr_13029 = [null,null,null,null,null,null,null,null,null];
(statearr_13029[(0)] = csasync$proc$state_machine__11750__auto__);

(statearr_13029[(1)] = (1));

return statearr_13029;
});
var csasync$proc$state_machine__11750__auto____1 = (function (state_13016){
while(true){
var ret_value__11751__auto__ = (function (){try{while(true){
var result__11752__auto__ = switch__11749__auto__.call(null,state_13016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11752__auto__;
}
break;
}
}catch (e13030){if((e13030 instanceof Object)){
var ex__11753__auto__ = e13030;
var statearr_13031_13072 = state_13016;
(statearr_13031_13072[(5)] = ex__11753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13073 = state_13016;
state_13016 = G__13073;
continue;
} else {
return ret_value__11751__auto__;
}
break;
}
});
csasync$proc$state_machine__11750__auto__ = function(state_13016){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11750__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11750__auto____1.call(this,state_13016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11750__auto____0;
csasync$proc$state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11750__auto____1;
return csasync$proc$state_machine__11750__auto__;
})()
;})(switch__11749__auto__,c__11770__auto__))
})();
var state__11772__auto__ = (function (){var statearr_13032 = f__11771__auto__.call(null);
(statearr_13032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11770__auto__);

return statearr_13032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11772__auto__);
});})(c__11770__auto__))
);

return c__11770__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11770__auto__){
return (function (){
var f__11771__auto__ = (function (){var switch__11749__auto__ = ((function (c__11770__auto__){
return (function (state_13046){
var state_val_13047 = (state_13046[(1)]);
if((state_val_13047 === (1))){
var state_13046__$1 = state_13046;
var statearr_13048_13074 = state_13046__$1;
(statearr_13048_13074[(2)] = null);

(statearr_13048_13074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (2))){
var state_13046__$1 = state_13046;
var statearr_13049_13075 = state_13046__$1;
(statearr_13049_13075[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (3))){
var inst_13044 = (state_13046[(2)]);
var state_13046__$1 = state_13046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13046__$1,inst_13044);
} else {
if((state_val_13047 === (4))){
var inst_13035 = func.call(null,param);
var inst_13036 = cljs.core.async.timeout.call(null,time_out);
var state_13046__$1 = (function (){var statearr_13051 = state_13046;
(statearr_13051[(7)] = inst_13035);

return statearr_13051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13046__$1,(7),inst_13036);
} else {
if((state_val_13047 === (5))){
var state_13046__$1 = state_13046;
var statearr_13052_13076 = state_13046__$1;
(statearr_13052_13076[(2)] = null);

(statearr_13052_13076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (6))){
var inst_13042 = (state_13046[(2)]);
var state_13046__$1 = state_13046;
var statearr_13053_13077 = state_13046__$1;
(statearr_13053_13077[(2)] = inst_13042);

(statearr_13053_13077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (7))){
var inst_13038 = (state_13046[(2)]);
var state_13046__$1 = (function (){var statearr_13054 = state_13046;
(statearr_13054[(8)] = inst_13038);

return statearr_13054;
})();
var statearr_13055_13078 = state_13046__$1;
(statearr_13055_13078[(2)] = null);

(statearr_13055_13078[(1)] = (2));


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
});})(c__11770__auto__))
;
return ((function (switch__11749__auto__,c__11770__auto__){
return (function() {
var csasync$proc$state_machine__11750__auto__ = null;
var csasync$proc$state_machine__11750__auto____0 = (function (){
var statearr_13059 = [null,null,null,null,null,null,null,null,null];
(statearr_13059[(0)] = csasync$proc$state_machine__11750__auto__);

(statearr_13059[(1)] = (1));

return statearr_13059;
});
var csasync$proc$state_machine__11750__auto____1 = (function (state_13046){
while(true){
var ret_value__11751__auto__ = (function (){try{while(true){
var result__11752__auto__ = switch__11749__auto__.call(null,state_13046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11752__auto__;
}
break;
}
}catch (e13060){if((e13060 instanceof Object)){
var ex__11753__auto__ = e13060;
var statearr_13061_13079 = state_13046;
(statearr_13061_13079[(5)] = ex__11753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13080 = state_13046;
state_13046 = G__13080;
continue;
} else {
return ret_value__11751__auto__;
}
break;
}
});
csasync$proc$state_machine__11750__auto__ = function(state_13046){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11750__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11750__auto____1.call(this,state_13046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11750__auto____0;
csasync$proc$state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11750__auto____1;
return csasync$proc$state_machine__11750__auto__;
})()
;})(switch__11749__auto__,c__11770__auto__))
})();
var state__11772__auto__ = (function (){var statearr_13062 = f__11771__auto__.call(null);
(statearr_13062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11770__auto__);

return statearr_13062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11772__auto__);
});})(c__11770__auto__))
);

return c__11770__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11770__auto___13165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11770__auto___13165){
return (function (){
var f__11771__auto__ = (function (){var switch__11749__auto__ = ((function (c__11770__auto___13165){
return (function (state_13143){
var state_val_13144 = (state_13143[(1)]);
if((state_val_13144 === (7))){
var inst_13132 = cljs.core.async.timeout.call(null,time_out);
var state_13143__$1 = state_13143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13143__$1,(10),inst_13132);
} else {
if((state_val_13144 === (1))){
var state_13143__$1 = state_13143;
var statearr_13145_13166 = state_13143__$1;
(statearr_13145_13166[(2)] = null);

(statearr_13145_13166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (4))){
var inst_13127 = proc_fn.call(null);
var state_13143__$1 = state_13143;
var statearr_13146_13167 = state_13143__$1;
(statearr_13146_13167[(2)] = inst_13127);

(statearr_13146_13167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (6))){
var inst_13130 = (state_13143[(2)]);
var state_13143__$1 = state_13143;
if(cljs.core.truth_(inst_13130)){
var statearr_13147_13168 = state_13143__$1;
(statearr_13147_13168[(1)] = (7));

} else {
var statearr_13148_13169 = state_13143__$1;
(statearr_13148_13169[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (3))){
var inst_13140 = (state_13143[(2)]);
var inst_13141 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_13143__$1 = (function (){var statearr_13149 = state_13143;
(statearr_13149[(7)] = inst_13140);

return statearr_13149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13143__$1,inst_13141);
} else {
if((state_val_13144 === (2))){
var inst_13125 = (state_13143[(8)]);
var inst_13124 = cljs.core.deref.call(null,status);
var inst_13125__$1 = cljs.core._EQ_.call(null,inst_13124,"RUN");
var state_13143__$1 = (function (){var statearr_13150 = state_13143;
(statearr_13150[(8)] = inst_13125__$1);

return statearr_13150;
})();
if(inst_13125__$1){
var statearr_13151_13170 = state_13143__$1;
(statearr_13151_13170[(1)] = (4));

} else {
var statearr_13152_13171 = state_13143__$1;
(statearr_13152_13171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (9))){
var inst_13138 = (state_13143[(2)]);
var state_13143__$1 = state_13143;
var statearr_13153_13172 = state_13143__$1;
(statearr_13153_13172[(2)] = inst_13138);

(statearr_13153_13172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (5))){
var inst_13125 = (state_13143[(8)]);
var state_13143__$1 = state_13143;
var statearr_13154_13173 = state_13143__$1;
(statearr_13154_13173[(2)] = inst_13125);

(statearr_13154_13173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (10))){
var inst_13134 = (state_13143[(2)]);
var state_13143__$1 = (function (){var statearr_13155 = state_13143;
(statearr_13155[(9)] = inst_13134);

return statearr_13155;
})();
var statearr_13156_13174 = state_13143__$1;
(statearr_13156_13174[(2)] = null);

(statearr_13156_13174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (8))){
var state_13143__$1 = state_13143;
var statearr_13157_13175 = state_13143__$1;
(statearr_13157_13175[(2)] = null);

(statearr_13157_13175[(1)] = (9));


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
});})(c__11770__auto___13165))
;
return ((function (switch__11749__auto__,c__11770__auto___13165){
return (function() {
var csasync$proc$start_process_$_state_machine__11750__auto__ = null;
var csasync$proc$start_process_$_state_machine__11750__auto____0 = (function (){
var statearr_13161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13161[(0)] = csasync$proc$start_process_$_state_machine__11750__auto__);

(statearr_13161[(1)] = (1));

return statearr_13161;
});
var csasync$proc$start_process_$_state_machine__11750__auto____1 = (function (state_13143){
while(true){
var ret_value__11751__auto__ = (function (){try{while(true){
var result__11752__auto__ = switch__11749__auto__.call(null,state_13143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11752__auto__;
}
break;
}
}catch (e13162){if((e13162 instanceof Object)){
var ex__11753__auto__ = e13162;
var statearr_13163_13176 = state_13143;
(statearr_13163_13176[(5)] = ex__11753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13177 = state_13143;
state_13143 = G__13177;
continue;
} else {
return ret_value__11751__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11750__auto__ = function(state_13143){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11750__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11750__auto____1.call(this,state_13143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11750__auto____0;
csasync$proc$start_process_$_state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11750__auto____1;
return csasync$proc$start_process_$_state_machine__11750__auto__;
})()
;})(switch__11749__auto__,c__11770__auto___13165))
})();
var state__11772__auto__ = (function (){var statearr_13164 = f__11771__auto__.call(null);
(statearr_13164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11770__auto___13165);

return statearr_13164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11772__auto__);
});})(c__11770__auto___13165))
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
var c__11770__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11770__auto__){
return (function (){
var f__11771__auto__ = (function (){var switch__11749__auto__ = ((function (c__11770__auto__){
return (function (state_13198){
var state_val_13199 = (state_13198[(1)]);
if((state_val_13199 === (1))){
var inst_13193 = cljs.core.async.timeout.call(null,time);
var state_13198__$1 = state_13198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13198__$1,(2),inst_13193);
} else {
if((state_val_13199 === (2))){
var inst_13195 = (state_13198[(2)]);
var inst_13196 = func.call(null);
var state_13198__$1 = (function (){var statearr_13200 = state_13198;
(statearr_13200[(7)] = inst_13195);

return statearr_13200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13198__$1,inst_13196);
} else {
return null;
}
}
});})(c__11770__auto__))
;
return ((function (switch__11749__auto__,c__11770__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11750__auto__ = null;
var csasync$proc$delayer_$_state_machine__11750__auto____0 = (function (){
var statearr_13204 = [null,null,null,null,null,null,null,null];
(statearr_13204[(0)] = csasync$proc$delayer_$_state_machine__11750__auto__);

(statearr_13204[(1)] = (1));

return statearr_13204;
});
var csasync$proc$delayer_$_state_machine__11750__auto____1 = (function (state_13198){
while(true){
var ret_value__11751__auto__ = (function (){try{while(true){
var result__11752__auto__ = switch__11749__auto__.call(null,state_13198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11752__auto__;
}
break;
}
}catch (e13205){if((e13205 instanceof Object)){
var ex__11753__auto__ = e13205;
var statearr_13206_13208 = state_13198;
(statearr_13206_13208[(5)] = ex__11753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13209 = state_13198;
state_13198 = G__13209;
continue;
} else {
return ret_value__11751__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11750__auto__ = function(state_13198){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11750__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11750__auto____1.call(this,state_13198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11750__auto____0;
csasync$proc$delayer_$_state_machine__11750__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11750__auto____1;
return csasync$proc$delayer_$_state_machine__11750__auto__;
})()
;})(switch__11749__auto__,c__11770__auto__))
})();
var state__11772__auto__ = (function (){var statearr_13207 = f__11771__auto__.call(null);
(statearr_13207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11770__auto__);

return statearr_13207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11772__auto__);
});})(c__11770__auto__))
);

return c__11770__auto__;
});

//# sourceMappingURL=proc.js.map