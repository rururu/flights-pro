// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args17064 = [];
var len__10885__auto___17127 = arguments.length;
var i__10886__auto___17128 = (0);
while(true){
if((i__10886__auto___17128 < len__10885__auto___17127)){
args17064.push((arguments[i__10886__auto___17128]));

var G__17129 = (i__10886__auto___17128 + (1));
i__10886__auto___17128 = G__17129;
continue;
} else {
}
break;
}

var G__17066 = args17064.length;
switch (G__17066) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17064.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__){
return (function (){
var f__12289__auto__ = (function (){var switch__12267__auto__ = ((function (c__12288__auto__){
return (function (state_17080){
var state_val_17081 = (state_17080[(1)]);
if((state_val_17081 === (1))){
var state_17080__$1 = state_17080;
var statearr_17082_17131 = state_17080__$1;
(statearr_17082_17131[(2)] = null);

(statearr_17082_17131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (2))){
var state_17080__$1 = state_17080;
var statearr_17083_17132 = state_17080__$1;
(statearr_17083_17132[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (3))){
var inst_17078 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17080__$1,inst_17078);
} else {
if((state_val_17081 === (4))){
var inst_17069 = func.call(null);
var inst_17070 = cljs.core.async.timeout.call(null,time_out);
var state_17080__$1 = (function (){var statearr_17085 = state_17080;
(statearr_17085[(7)] = inst_17069);

return statearr_17085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17080__$1,(7),inst_17070);
} else {
if((state_val_17081 === (5))){
var state_17080__$1 = state_17080;
var statearr_17086_17133 = state_17080__$1;
(statearr_17086_17133[(2)] = null);

(statearr_17086_17133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (6))){
var inst_17076 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17087_17134 = state_17080__$1;
(statearr_17087_17134[(2)] = inst_17076);

(statearr_17087_17134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (7))){
var inst_17072 = (state_17080[(2)]);
var state_17080__$1 = (function (){var statearr_17088 = state_17080;
(statearr_17088[(8)] = inst_17072);

return statearr_17088;
})();
var statearr_17089_17135 = state_17080__$1;
(statearr_17089_17135[(2)] = null);

(statearr_17089_17135[(1)] = (2));


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
});})(c__12288__auto__))
;
return ((function (switch__12267__auto__,c__12288__auto__){
return (function() {
var csasync$proc$state_machine__12268__auto__ = null;
var csasync$proc$state_machine__12268__auto____0 = (function (){
var statearr_17093 = [null,null,null,null,null,null,null,null,null];
(statearr_17093[(0)] = csasync$proc$state_machine__12268__auto__);

(statearr_17093[(1)] = (1));

return statearr_17093;
});
var csasync$proc$state_machine__12268__auto____1 = (function (state_17080){
while(true){
var ret_value__12269__auto__ = (function (){try{while(true){
var result__12270__auto__ = switch__12267__auto__.call(null,state_17080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12270__auto__;
}
break;
}
}catch (e17094){if((e17094 instanceof Object)){
var ex__12271__auto__ = e17094;
var statearr_17095_17136 = state_17080;
(statearr_17095_17136[(5)] = ex__12271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17137 = state_17080;
state_17080 = G__17137;
continue;
} else {
return ret_value__12269__auto__;
}
break;
}
});
csasync$proc$state_machine__12268__auto__ = function(state_17080){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12268__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12268__auto____1.call(this,state_17080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12268__auto____0;
csasync$proc$state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12268__auto____1;
return csasync$proc$state_machine__12268__auto__;
})()
;})(switch__12267__auto__,c__12288__auto__))
})();
var state__12290__auto__ = (function (){var statearr_17096 = f__12289__auto__.call(null);
(statearr_17096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_17096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__))
);

return c__12288__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__){
return (function (){
var f__12289__auto__ = (function (){var switch__12267__auto__ = ((function (c__12288__auto__){
return (function (state_17110){
var state_val_17111 = (state_17110[(1)]);
if((state_val_17111 === (1))){
var state_17110__$1 = state_17110;
var statearr_17112_17138 = state_17110__$1;
(statearr_17112_17138[(2)] = null);

(statearr_17112_17138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17111 === (2))){
var state_17110__$1 = state_17110;
var statearr_17113_17139 = state_17110__$1;
(statearr_17113_17139[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17111 === (3))){
var inst_17108 = (state_17110[(2)]);
var state_17110__$1 = state_17110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17110__$1,inst_17108);
} else {
if((state_val_17111 === (4))){
var inst_17099 = func.call(null,param);
var inst_17100 = cljs.core.async.timeout.call(null,time_out);
var state_17110__$1 = (function (){var statearr_17115 = state_17110;
(statearr_17115[(7)] = inst_17099);

return statearr_17115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17110__$1,(7),inst_17100);
} else {
if((state_val_17111 === (5))){
var state_17110__$1 = state_17110;
var statearr_17116_17140 = state_17110__$1;
(statearr_17116_17140[(2)] = null);

(statearr_17116_17140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17111 === (6))){
var inst_17106 = (state_17110[(2)]);
var state_17110__$1 = state_17110;
var statearr_17117_17141 = state_17110__$1;
(statearr_17117_17141[(2)] = inst_17106);

(statearr_17117_17141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17111 === (7))){
var inst_17102 = (state_17110[(2)]);
var state_17110__$1 = (function (){var statearr_17118 = state_17110;
(statearr_17118[(8)] = inst_17102);

return statearr_17118;
})();
var statearr_17119_17142 = state_17110__$1;
(statearr_17119_17142[(2)] = null);

(statearr_17119_17142[(1)] = (2));


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
});})(c__12288__auto__))
;
return ((function (switch__12267__auto__,c__12288__auto__){
return (function() {
var csasync$proc$state_machine__12268__auto__ = null;
var csasync$proc$state_machine__12268__auto____0 = (function (){
var statearr_17123 = [null,null,null,null,null,null,null,null,null];
(statearr_17123[(0)] = csasync$proc$state_machine__12268__auto__);

(statearr_17123[(1)] = (1));

return statearr_17123;
});
var csasync$proc$state_machine__12268__auto____1 = (function (state_17110){
while(true){
var ret_value__12269__auto__ = (function (){try{while(true){
var result__12270__auto__ = switch__12267__auto__.call(null,state_17110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12270__auto__;
}
break;
}
}catch (e17124){if((e17124 instanceof Object)){
var ex__12271__auto__ = e17124;
var statearr_17125_17143 = state_17110;
(statearr_17125_17143[(5)] = ex__12271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17144 = state_17110;
state_17110 = G__17144;
continue;
} else {
return ret_value__12269__auto__;
}
break;
}
});
csasync$proc$state_machine__12268__auto__ = function(state_17110){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12268__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12268__auto____1.call(this,state_17110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12268__auto____0;
csasync$proc$state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12268__auto____1;
return csasync$proc$state_machine__12268__auto__;
})()
;})(switch__12267__auto__,c__12288__auto__))
})();
var state__12290__auto__ = (function (){var statearr_17126 = f__12289__auto__.call(null);
(statearr_17126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_17126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__))
);

return c__12288__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__12288__auto___17229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___17229){
return (function (){
var f__12289__auto__ = (function (){var switch__12267__auto__ = ((function (c__12288__auto___17229){
return (function (state_17207){
var state_val_17208 = (state_17207[(1)]);
if((state_val_17208 === (7))){
var inst_17196 = cljs.core.async.timeout.call(null,time_out);
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17207__$1,(10),inst_17196);
} else {
if((state_val_17208 === (1))){
var state_17207__$1 = state_17207;
var statearr_17209_17230 = state_17207__$1;
(statearr_17209_17230[(2)] = null);

(statearr_17209_17230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (4))){
var inst_17191 = proc_fn.call(null);
var state_17207__$1 = state_17207;
var statearr_17210_17231 = state_17207__$1;
(statearr_17210_17231[(2)] = inst_17191);

(statearr_17210_17231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (6))){
var inst_17194 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
if(cljs.core.truth_(inst_17194)){
var statearr_17211_17232 = state_17207__$1;
(statearr_17211_17232[(1)] = (7));

} else {
var statearr_17212_17233 = state_17207__$1;
(statearr_17212_17233[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (3))){
var inst_17204 = (state_17207[(2)]);
var inst_17205 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_17207__$1 = (function (){var statearr_17213 = state_17207;
(statearr_17213[(7)] = inst_17204);

return statearr_17213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17207__$1,inst_17205);
} else {
if((state_val_17208 === (2))){
var inst_17189 = (state_17207[(8)]);
var inst_17188 = cljs.core.deref.call(null,status);
var inst_17189__$1 = cljs.core._EQ_.call(null,inst_17188,"RUN");
var state_17207__$1 = (function (){var statearr_17214 = state_17207;
(statearr_17214[(8)] = inst_17189__$1);

return statearr_17214;
})();
if(inst_17189__$1){
var statearr_17215_17234 = state_17207__$1;
(statearr_17215_17234[(1)] = (4));

} else {
var statearr_17216_17235 = state_17207__$1;
(statearr_17216_17235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (9))){
var inst_17202 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
var statearr_17217_17236 = state_17207__$1;
(statearr_17217_17236[(2)] = inst_17202);

(statearr_17217_17236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (5))){
var inst_17189 = (state_17207[(8)]);
var state_17207__$1 = state_17207;
var statearr_17218_17237 = state_17207__$1;
(statearr_17218_17237[(2)] = inst_17189);

(statearr_17218_17237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (10))){
var inst_17198 = (state_17207[(2)]);
var state_17207__$1 = (function (){var statearr_17219 = state_17207;
(statearr_17219[(9)] = inst_17198);

return statearr_17219;
})();
var statearr_17220_17238 = state_17207__$1;
(statearr_17220_17238[(2)] = null);

(statearr_17220_17238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (8))){
var state_17207__$1 = state_17207;
var statearr_17221_17239 = state_17207__$1;
(statearr_17221_17239[(2)] = null);

(statearr_17221_17239[(1)] = (9));


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
});})(c__12288__auto___17229))
;
return ((function (switch__12267__auto__,c__12288__auto___17229){
return (function() {
var csasync$proc$start_process_$_state_machine__12268__auto__ = null;
var csasync$proc$start_process_$_state_machine__12268__auto____0 = (function (){
var statearr_17225 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17225[(0)] = csasync$proc$start_process_$_state_machine__12268__auto__);

(statearr_17225[(1)] = (1));

return statearr_17225;
});
var csasync$proc$start_process_$_state_machine__12268__auto____1 = (function (state_17207){
while(true){
var ret_value__12269__auto__ = (function (){try{while(true){
var result__12270__auto__ = switch__12267__auto__.call(null,state_17207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12270__auto__;
}
break;
}
}catch (e17226){if((e17226 instanceof Object)){
var ex__12271__auto__ = e17226;
var statearr_17227_17240 = state_17207;
(statearr_17227_17240[(5)] = ex__12271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17241 = state_17207;
state_17207 = G__17241;
continue;
} else {
return ret_value__12269__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__12268__auto__ = function(state_17207){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__12268__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__12268__auto____1.call(this,state_17207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__12268__auto____0;
csasync$proc$start_process_$_state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__12268__auto____1;
return csasync$proc$start_process_$_state_machine__12268__auto__;
})()
;})(switch__12267__auto__,c__12288__auto___17229))
})();
var state__12290__auto__ = (function (){var statearr_17228 = f__12289__auto__.call(null);
(statearr_17228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___17229);

return statearr_17228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___17229))
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
var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__){
return (function (){
var f__12289__auto__ = (function (){var switch__12267__auto__ = ((function (c__12288__auto__){
return (function (state_17262){
var state_val_17263 = (state_17262[(1)]);
if((state_val_17263 === (1))){
var inst_17257 = cljs.core.async.timeout.call(null,time);
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17262__$1,(2),inst_17257);
} else {
if((state_val_17263 === (2))){
var inst_17259 = (state_17262[(2)]);
var inst_17260 = func.call(null);
var state_17262__$1 = (function (){var statearr_17264 = state_17262;
(statearr_17264[(7)] = inst_17259);

return statearr_17264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17262__$1,inst_17260);
} else {
return null;
}
}
});})(c__12288__auto__))
;
return ((function (switch__12267__auto__,c__12288__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__12268__auto__ = null;
var csasync$proc$delayer_$_state_machine__12268__auto____0 = (function (){
var statearr_17268 = [null,null,null,null,null,null,null,null];
(statearr_17268[(0)] = csasync$proc$delayer_$_state_machine__12268__auto__);

(statearr_17268[(1)] = (1));

return statearr_17268;
});
var csasync$proc$delayer_$_state_machine__12268__auto____1 = (function (state_17262){
while(true){
var ret_value__12269__auto__ = (function (){try{while(true){
var result__12270__auto__ = switch__12267__auto__.call(null,state_17262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12270__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12270__auto__;
}
break;
}
}catch (e17269){if((e17269 instanceof Object)){
var ex__12271__auto__ = e17269;
var statearr_17270_17272 = state_17262;
(statearr_17270_17272[(5)] = ex__12271__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17273 = state_17262;
state_17262 = G__17273;
continue;
} else {
return ret_value__12269__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__12268__auto__ = function(state_17262){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__12268__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__12268__auto____1.call(this,state_17262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__12268__auto____0;
csasync$proc$delayer_$_state_machine__12268__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__12268__auto____1;
return csasync$proc$delayer_$_state_machine__12268__auto__;
})()
;})(switch__12267__auto__,c__12288__auto__))
})();
var state__12290__auto__ = (function (){var statearr_17271 = f__12289__auto__.call(null);
(statearr_17271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_17271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__))
);

return c__12288__auto__;
});

//# sourceMappingURL=proc.js.map