// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args26150 = [];
var len__21500__auto___26213 = arguments.length;
var i__21501__auto___26214 = (0);
while(true){
if((i__21501__auto___26214 < len__21500__auto___26213)){
args26150.push((arguments[i__21501__auto___26214]));

var G__26215 = (i__21501__auto___26214 + (1));
i__21501__auto___26214 = G__26215;
continue;
} else {
}
break;
}

var G__26152 = args26150.length;
switch (G__26152) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26150.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22576__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22576__auto__){
return (function (){
var f__22577__auto__ = (function (){var switch__22555__auto__ = ((function (c__22576__auto__){
return (function (state_26166){
var state_val_26167 = (state_26166[(1)]);
if((state_val_26167 === (1))){
var state_26166__$1 = state_26166;
var statearr_26168_26217 = state_26166__$1;
(statearr_26168_26217[(2)] = null);

(statearr_26168_26217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (2))){
var state_26166__$1 = state_26166;
var statearr_26169_26218 = state_26166__$1;
(statearr_26169_26218[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (3))){
var inst_26164 = (state_26166[(2)]);
var state_26166__$1 = state_26166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26166__$1,inst_26164);
} else {
if((state_val_26167 === (4))){
var inst_26155 = func.call(null);
var inst_26156 = cljs.core.async.timeout.call(null,time_out);
var state_26166__$1 = (function (){var statearr_26171 = state_26166;
(statearr_26171[(7)] = inst_26155);

return statearr_26171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26166__$1,(7),inst_26156);
} else {
if((state_val_26167 === (5))){
var state_26166__$1 = state_26166;
var statearr_26172_26219 = state_26166__$1;
(statearr_26172_26219[(2)] = null);

(statearr_26172_26219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (6))){
var inst_26162 = (state_26166[(2)]);
var state_26166__$1 = state_26166;
var statearr_26173_26220 = state_26166__$1;
(statearr_26173_26220[(2)] = inst_26162);

(statearr_26173_26220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26167 === (7))){
var inst_26158 = (state_26166[(2)]);
var state_26166__$1 = (function (){var statearr_26174 = state_26166;
(statearr_26174[(8)] = inst_26158);

return statearr_26174;
})();
var statearr_26175_26221 = state_26166__$1;
(statearr_26175_26221[(2)] = null);

(statearr_26175_26221[(1)] = (2));


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
});})(c__22576__auto__))
;
return ((function (switch__22555__auto__,c__22576__auto__){
return (function() {
var csasync$proc$state_machine__22556__auto__ = null;
var csasync$proc$state_machine__22556__auto____0 = (function (){
var statearr_26179 = [null,null,null,null,null,null,null,null,null];
(statearr_26179[(0)] = csasync$proc$state_machine__22556__auto__);

(statearr_26179[(1)] = (1));

return statearr_26179;
});
var csasync$proc$state_machine__22556__auto____1 = (function (state_26166){
while(true){
var ret_value__22557__auto__ = (function (){try{while(true){
var result__22558__auto__ = switch__22555__auto__.call(null,state_26166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22558__auto__;
}
break;
}
}catch (e26180){if((e26180 instanceof Object)){
var ex__22559__auto__ = e26180;
var statearr_26181_26222 = state_26166;
(statearr_26181_26222[(5)] = ex__22559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26223 = state_26166;
state_26166 = G__26223;
continue;
} else {
return ret_value__22557__auto__;
}
break;
}
});
csasync$proc$state_machine__22556__auto__ = function(state_26166){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22556__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22556__auto____1.call(this,state_26166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22556__auto____0;
csasync$proc$state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22556__auto____1;
return csasync$proc$state_machine__22556__auto__;
})()
;})(switch__22555__auto__,c__22576__auto__))
})();
var state__22578__auto__ = (function (){var statearr_26182 = f__22577__auto__.call(null);
(statearr_26182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22576__auto__);

return statearr_26182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22578__auto__);
});})(c__22576__auto__))
);

return c__22576__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22576__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22576__auto__){
return (function (){
var f__22577__auto__ = (function (){var switch__22555__auto__ = ((function (c__22576__auto__){
return (function (state_26196){
var state_val_26197 = (state_26196[(1)]);
if((state_val_26197 === (1))){
var state_26196__$1 = state_26196;
var statearr_26198_26224 = state_26196__$1;
(statearr_26198_26224[(2)] = null);

(statearr_26198_26224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (2))){
var state_26196__$1 = state_26196;
var statearr_26199_26225 = state_26196__$1;
(statearr_26199_26225[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (3))){
var inst_26194 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26196__$1,inst_26194);
} else {
if((state_val_26197 === (4))){
var inst_26185 = func.call(null,param);
var inst_26186 = cljs.core.async.timeout.call(null,time_out);
var state_26196__$1 = (function (){var statearr_26201 = state_26196;
(statearr_26201[(7)] = inst_26185);

return statearr_26201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26196__$1,(7),inst_26186);
} else {
if((state_val_26197 === (5))){
var state_26196__$1 = state_26196;
var statearr_26202_26226 = state_26196__$1;
(statearr_26202_26226[(2)] = null);

(statearr_26202_26226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (6))){
var inst_26192 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
var statearr_26203_26227 = state_26196__$1;
(statearr_26203_26227[(2)] = inst_26192);

(statearr_26203_26227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (7))){
var inst_26188 = (state_26196[(2)]);
var state_26196__$1 = (function (){var statearr_26204 = state_26196;
(statearr_26204[(8)] = inst_26188);

return statearr_26204;
})();
var statearr_26205_26228 = state_26196__$1;
(statearr_26205_26228[(2)] = null);

(statearr_26205_26228[(1)] = (2));


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
});})(c__22576__auto__))
;
return ((function (switch__22555__auto__,c__22576__auto__){
return (function() {
var csasync$proc$state_machine__22556__auto__ = null;
var csasync$proc$state_machine__22556__auto____0 = (function (){
var statearr_26209 = [null,null,null,null,null,null,null,null,null];
(statearr_26209[(0)] = csasync$proc$state_machine__22556__auto__);

(statearr_26209[(1)] = (1));

return statearr_26209;
});
var csasync$proc$state_machine__22556__auto____1 = (function (state_26196){
while(true){
var ret_value__22557__auto__ = (function (){try{while(true){
var result__22558__auto__ = switch__22555__auto__.call(null,state_26196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22558__auto__;
}
break;
}
}catch (e26210){if((e26210 instanceof Object)){
var ex__22559__auto__ = e26210;
var statearr_26211_26229 = state_26196;
(statearr_26211_26229[(5)] = ex__22559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26230 = state_26196;
state_26196 = G__26230;
continue;
} else {
return ret_value__22557__auto__;
}
break;
}
});
csasync$proc$state_machine__22556__auto__ = function(state_26196){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22556__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22556__auto____1.call(this,state_26196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22556__auto____0;
csasync$proc$state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22556__auto____1;
return csasync$proc$state_machine__22556__auto__;
})()
;})(switch__22555__auto__,c__22576__auto__))
})();
var state__22578__auto__ = (function (){var statearr_26212 = f__22577__auto__.call(null);
(statearr_26212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22576__auto__);

return statearr_26212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22578__auto__);
});})(c__22576__auto__))
);

return c__22576__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22576__auto___26315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22576__auto___26315){
return (function (){
var f__22577__auto__ = (function (){var switch__22555__auto__ = ((function (c__22576__auto___26315){
return (function (state_26293){
var state_val_26294 = (state_26293[(1)]);
if((state_val_26294 === (7))){
var inst_26282 = cljs.core.async.timeout.call(null,time_out);
var state_26293__$1 = state_26293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26293__$1,(10),inst_26282);
} else {
if((state_val_26294 === (1))){
var state_26293__$1 = state_26293;
var statearr_26295_26316 = state_26293__$1;
(statearr_26295_26316[(2)] = null);

(statearr_26295_26316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (4))){
var inst_26277 = proc_fn.call(null);
var state_26293__$1 = state_26293;
var statearr_26296_26317 = state_26293__$1;
(statearr_26296_26317[(2)] = inst_26277);

(statearr_26296_26317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (6))){
var inst_26280 = (state_26293[(2)]);
var state_26293__$1 = state_26293;
if(cljs.core.truth_(inst_26280)){
var statearr_26297_26318 = state_26293__$1;
(statearr_26297_26318[(1)] = (7));

} else {
var statearr_26298_26319 = state_26293__$1;
(statearr_26298_26319[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (3))){
var inst_26290 = (state_26293[(2)]);
var inst_26291 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_26293__$1 = (function (){var statearr_26299 = state_26293;
(statearr_26299[(7)] = inst_26290);

return statearr_26299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26293__$1,inst_26291);
} else {
if((state_val_26294 === (2))){
var inst_26275 = (state_26293[(8)]);
var inst_26274 = cljs.core.deref.call(null,status);
var inst_26275__$1 = cljs.core._EQ_.call(null,inst_26274,"RUN");
var state_26293__$1 = (function (){var statearr_26300 = state_26293;
(statearr_26300[(8)] = inst_26275__$1);

return statearr_26300;
})();
if(inst_26275__$1){
var statearr_26301_26320 = state_26293__$1;
(statearr_26301_26320[(1)] = (4));

} else {
var statearr_26302_26321 = state_26293__$1;
(statearr_26302_26321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (9))){
var inst_26288 = (state_26293[(2)]);
var state_26293__$1 = state_26293;
var statearr_26303_26322 = state_26293__$1;
(statearr_26303_26322[(2)] = inst_26288);

(statearr_26303_26322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (5))){
var inst_26275 = (state_26293[(8)]);
var state_26293__$1 = state_26293;
var statearr_26304_26323 = state_26293__$1;
(statearr_26304_26323[(2)] = inst_26275);

(statearr_26304_26323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (10))){
var inst_26284 = (state_26293[(2)]);
var state_26293__$1 = (function (){var statearr_26305 = state_26293;
(statearr_26305[(9)] = inst_26284);

return statearr_26305;
})();
var statearr_26306_26324 = state_26293__$1;
(statearr_26306_26324[(2)] = null);

(statearr_26306_26324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (8))){
var state_26293__$1 = state_26293;
var statearr_26307_26325 = state_26293__$1;
(statearr_26307_26325[(2)] = null);

(statearr_26307_26325[(1)] = (9));


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
});})(c__22576__auto___26315))
;
return ((function (switch__22555__auto__,c__22576__auto___26315){
return (function() {
var csasync$proc$start_process_$_state_machine__22556__auto__ = null;
var csasync$proc$start_process_$_state_machine__22556__auto____0 = (function (){
var statearr_26311 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26311[(0)] = csasync$proc$start_process_$_state_machine__22556__auto__);

(statearr_26311[(1)] = (1));

return statearr_26311;
});
var csasync$proc$start_process_$_state_machine__22556__auto____1 = (function (state_26293){
while(true){
var ret_value__22557__auto__ = (function (){try{while(true){
var result__22558__auto__ = switch__22555__auto__.call(null,state_26293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22558__auto__;
}
break;
}
}catch (e26312){if((e26312 instanceof Object)){
var ex__22559__auto__ = e26312;
var statearr_26313_26326 = state_26293;
(statearr_26313_26326[(5)] = ex__22559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26327 = state_26293;
state_26293 = G__26327;
continue;
} else {
return ret_value__22557__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22556__auto__ = function(state_26293){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22556__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22556__auto____1.call(this,state_26293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22556__auto____0;
csasync$proc$start_process_$_state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22556__auto____1;
return csasync$proc$start_process_$_state_machine__22556__auto__;
})()
;})(switch__22555__auto__,c__22576__auto___26315))
})();
var state__22578__auto__ = (function (){var statearr_26314 = f__22577__auto__.call(null);
(statearr_26314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22576__auto___26315);

return statearr_26314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22578__auto__);
});})(c__22576__auto___26315))
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
var c__22576__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22576__auto__){
return (function (){
var f__22577__auto__ = (function (){var switch__22555__auto__ = ((function (c__22576__auto__){
return (function (state_26348){
var state_val_26349 = (state_26348[(1)]);
if((state_val_26349 === (1))){
var inst_26343 = cljs.core.async.timeout.call(null,time);
var state_26348__$1 = state_26348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26348__$1,(2),inst_26343);
} else {
if((state_val_26349 === (2))){
var inst_26345 = (state_26348[(2)]);
var inst_26346 = func.call(null);
var state_26348__$1 = (function (){var statearr_26350 = state_26348;
(statearr_26350[(7)] = inst_26345);

return statearr_26350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26348__$1,inst_26346);
} else {
return null;
}
}
});})(c__22576__auto__))
;
return ((function (switch__22555__auto__,c__22576__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22556__auto__ = null;
var csasync$proc$delayer_$_state_machine__22556__auto____0 = (function (){
var statearr_26354 = [null,null,null,null,null,null,null,null];
(statearr_26354[(0)] = csasync$proc$delayer_$_state_machine__22556__auto__);

(statearr_26354[(1)] = (1));

return statearr_26354;
});
var csasync$proc$delayer_$_state_machine__22556__auto____1 = (function (state_26348){
while(true){
var ret_value__22557__auto__ = (function (){try{while(true){
var result__22558__auto__ = switch__22555__auto__.call(null,state_26348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22558__auto__;
}
break;
}
}catch (e26355){if((e26355 instanceof Object)){
var ex__22559__auto__ = e26355;
var statearr_26356_26358 = state_26348;
(statearr_26356_26358[(5)] = ex__22559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26359 = state_26348;
state_26348 = G__26359;
continue;
} else {
return ret_value__22557__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22556__auto__ = function(state_26348){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22556__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22556__auto____1.call(this,state_26348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22556__auto____0;
csasync$proc$delayer_$_state_machine__22556__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22556__auto____1;
return csasync$proc$delayer_$_state_machine__22556__auto__;
})()
;})(switch__22555__auto__,c__22576__auto__))
})();
var state__22578__auto__ = (function (){var statearr_26357 = f__22577__auto__.call(null);
(statearr_26357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22576__auto__);

return statearr_26357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22578__auto__);
});})(c__22576__auto__))
);

return c__22576__auto__;
});

//# sourceMappingURL=proc.js.map