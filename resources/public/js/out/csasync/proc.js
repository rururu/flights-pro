// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args12756 = [];
var len__11062__auto___12819 = arguments.length;
var i__11063__auto___12820 = (0);
while(true){
if((i__11063__auto___12820 < len__11062__auto___12819)){
args12756.push((arguments[i__11063__auto___12820]));

var G__12821 = (i__11063__auto___12820 + (1));
i__11063__auto___12820 = G__12821;
continue;
} else {
}
break;
}

var G__12758 = args12756.length;
switch (G__12758) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12756.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__12382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto__){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto__){
return (function (state_12772){
var state_val_12773 = (state_12772[(1)]);
if((state_val_12773 === (1))){
var state_12772__$1 = state_12772;
var statearr_12774_12823 = state_12772__$1;
(statearr_12774_12823[(2)] = null);

(statearr_12774_12823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (2))){
var state_12772__$1 = state_12772;
var statearr_12775_12824 = state_12772__$1;
(statearr_12775_12824[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (3))){
var inst_12770 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12772__$1,inst_12770);
} else {
if((state_val_12773 === (4))){
var inst_12761 = func.call(null);
var inst_12762 = cljs.core.async.timeout.call(null,time_out);
var state_12772__$1 = (function (){var statearr_12777 = state_12772;
(statearr_12777[(7)] = inst_12761);

return statearr_12777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12772__$1,(7),inst_12762);
} else {
if((state_val_12773 === (5))){
var state_12772__$1 = state_12772;
var statearr_12778_12825 = state_12772__$1;
(statearr_12778_12825[(2)] = null);

(statearr_12778_12825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (6))){
var inst_12768 = (state_12772[(2)]);
var state_12772__$1 = state_12772;
var statearr_12779_12826 = state_12772__$1;
(statearr_12779_12826[(2)] = inst_12768);

(statearr_12779_12826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12773 === (7))){
var inst_12764 = (state_12772[(2)]);
var state_12772__$1 = (function (){var statearr_12780 = state_12772;
(statearr_12780[(8)] = inst_12764);

return statearr_12780;
})();
var statearr_12781_12827 = state_12772__$1;
(statearr_12781_12827[(2)] = null);

(statearr_12781_12827[(1)] = (2));


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
});})(c__12382__auto__))
;
return ((function (switch__12361__auto__,c__12382__auto__){
return (function() {
var csasync$proc$state_machine__12362__auto__ = null;
var csasync$proc$state_machine__12362__auto____0 = (function (){
var statearr_12785 = [null,null,null,null,null,null,null,null,null];
(statearr_12785[(0)] = csasync$proc$state_machine__12362__auto__);

(statearr_12785[(1)] = (1));

return statearr_12785;
});
var csasync$proc$state_machine__12362__auto____1 = (function (state_12772){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12786){if((e12786 instanceof Object)){
var ex__12365__auto__ = e12786;
var statearr_12787_12828 = state_12772;
(statearr_12787_12828[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12829 = state_12772;
state_12772 = G__12829;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$state_machine__12362__auto__ = function(state_12772){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12362__auto____1.call(this,state_12772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12362__auto____0;
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12362__auto____1;
return csasync$proc$state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto__))
})();
var state__12384__auto__ = (function (){var statearr_12788 = f__12383__auto__.call(null);
(statearr_12788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto__);

return statearr_12788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto__))
);

return c__12382__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto__){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto__){
return (function (state_12802){
var state_val_12803 = (state_12802[(1)]);
if((state_val_12803 === (1))){
var state_12802__$1 = state_12802;
var statearr_12804_12830 = state_12802__$1;
(statearr_12804_12830[(2)] = null);

(statearr_12804_12830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (2))){
var state_12802__$1 = state_12802;
var statearr_12805_12831 = state_12802__$1;
(statearr_12805_12831[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (3))){
var inst_12800 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12802__$1,inst_12800);
} else {
if((state_val_12803 === (4))){
var inst_12791 = func.call(null,param);
var inst_12792 = cljs.core.async.timeout.call(null,time_out);
var state_12802__$1 = (function (){var statearr_12807 = state_12802;
(statearr_12807[(7)] = inst_12791);

return statearr_12807;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12802__$1,(7),inst_12792);
} else {
if((state_val_12803 === (5))){
var state_12802__$1 = state_12802;
var statearr_12808_12832 = state_12802__$1;
(statearr_12808_12832[(2)] = null);

(statearr_12808_12832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (6))){
var inst_12798 = (state_12802[(2)]);
var state_12802__$1 = state_12802;
var statearr_12809_12833 = state_12802__$1;
(statearr_12809_12833[(2)] = inst_12798);

(statearr_12809_12833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12803 === (7))){
var inst_12794 = (state_12802[(2)]);
var state_12802__$1 = (function (){var statearr_12810 = state_12802;
(statearr_12810[(8)] = inst_12794);

return statearr_12810;
})();
var statearr_12811_12834 = state_12802__$1;
(statearr_12811_12834[(2)] = null);

(statearr_12811_12834[(1)] = (2));


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
});})(c__12382__auto__))
;
return ((function (switch__12361__auto__,c__12382__auto__){
return (function() {
var csasync$proc$state_machine__12362__auto__ = null;
var csasync$proc$state_machine__12362__auto____0 = (function (){
var statearr_12815 = [null,null,null,null,null,null,null,null,null];
(statearr_12815[(0)] = csasync$proc$state_machine__12362__auto__);

(statearr_12815[(1)] = (1));

return statearr_12815;
});
var csasync$proc$state_machine__12362__auto____1 = (function (state_12802){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12816){if((e12816 instanceof Object)){
var ex__12365__auto__ = e12816;
var statearr_12817_12835 = state_12802;
(statearr_12817_12835[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12836 = state_12802;
state_12802 = G__12836;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$state_machine__12362__auto__ = function(state_12802){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12362__auto____1.call(this,state_12802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12362__auto____0;
csasync$proc$state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12362__auto____1;
return csasync$proc$state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto__))
})();
var state__12384__auto__ = (function (){var statearr_12818 = f__12383__auto__.call(null);
(statearr_12818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto__);

return statearr_12818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto__))
);

return c__12382__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__12382__auto___12945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto___12945){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto___12945){
return (function (state_12918){
var state_val_12919 = (state_12918[(1)]);
if((state_val_12919 === (7))){
var inst_12900 = cljs.core.async.timeout.call(null,time_out);
var state_12918__$1 = state_12918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12918__$1,(10),inst_12900);
} else {
if((state_val_12919 === (1))){
var state_12918__$1 = state_12918;
var statearr_12920_12946 = state_12918__$1;
(statearr_12920_12946[(2)] = null);

(statearr_12920_12946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (4))){
var inst_12895 = proc_fn.call(null);
var state_12918__$1 = state_12918;
var statearr_12921_12947 = state_12918__$1;
(statearr_12921_12947[(2)] = inst_12895);

(statearr_12921_12947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (13))){
var inst_12915 = (state_12918[(2)]);
var inst_12916 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_12918__$1 = (function (){var statearr_12922 = state_12918;
(statearr_12922[(7)] = inst_12915);

return statearr_12922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12918__$1,inst_12916);
} else {
if((state_val_12919 === (6))){
var inst_12898 = (state_12918[(2)]);
var state_12918__$1 = state_12918;
if(cljs.core.truth_(inst_12898)){
var statearr_12923_12948 = state_12918__$1;
(statearr_12923_12948[(1)] = (7));

} else {
var statearr_12924_12949 = state_12918__$1;
(statearr_12924_12949[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (3))){
var inst_12908 = (state_12918[(2)]);
var inst_12909 = (final_fun == null);
var inst_12910 = cljs.core.not.call(null,inst_12909);
var state_12918__$1 = (function (){var statearr_12925 = state_12918;
(statearr_12925[(8)] = inst_12908);

return statearr_12925;
})();
if(inst_12910){
var statearr_12926_12950 = state_12918__$1;
(statearr_12926_12950[(1)] = (11));

} else {
var statearr_12927_12951 = state_12918__$1;
(statearr_12927_12951[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (12))){
var state_12918__$1 = state_12918;
var statearr_12928_12952 = state_12918__$1;
(statearr_12928_12952[(2)] = null);

(statearr_12928_12952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (2))){
var inst_12893 = (state_12918[(9)]);
var inst_12892 = cljs.core.deref.call(null,status);
var inst_12893__$1 = cljs.core._EQ_.call(null,inst_12892,"RUN");
var state_12918__$1 = (function (){var statearr_12929 = state_12918;
(statearr_12929[(9)] = inst_12893__$1);

return statearr_12929;
})();
if(inst_12893__$1){
var statearr_12930_12953 = state_12918__$1;
(statearr_12930_12953[(1)] = (4));

} else {
var statearr_12931_12954 = state_12918__$1;
(statearr_12931_12954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (11))){
var inst_12912 = final_fun.call(null);
var state_12918__$1 = state_12918;
var statearr_12932_12955 = state_12918__$1;
(statearr_12932_12955[(2)] = inst_12912);

(statearr_12932_12955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (9))){
var inst_12906 = (state_12918[(2)]);
var state_12918__$1 = state_12918;
var statearr_12933_12956 = state_12918__$1;
(statearr_12933_12956[(2)] = inst_12906);

(statearr_12933_12956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (5))){
var inst_12893 = (state_12918[(9)]);
var state_12918__$1 = state_12918;
var statearr_12934_12957 = state_12918__$1;
(statearr_12934_12957[(2)] = inst_12893);

(statearr_12934_12957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (10))){
var inst_12902 = (state_12918[(2)]);
var state_12918__$1 = (function (){var statearr_12935 = state_12918;
(statearr_12935[(10)] = inst_12902);

return statearr_12935;
})();
var statearr_12936_12958 = state_12918__$1;
(statearr_12936_12958[(2)] = null);

(statearr_12936_12958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12919 === (8))){
var state_12918__$1 = state_12918;
var statearr_12937_12959 = state_12918__$1;
(statearr_12937_12959[(2)] = null);

(statearr_12937_12959[(1)] = (9));


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
});})(c__12382__auto___12945))
;
return ((function (switch__12361__auto__,c__12382__auto___12945){
return (function() {
var csasync$proc$start_process_$_state_machine__12362__auto__ = null;
var csasync$proc$start_process_$_state_machine__12362__auto____0 = (function (){
var statearr_12941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12941[(0)] = csasync$proc$start_process_$_state_machine__12362__auto__);

(statearr_12941[(1)] = (1));

return statearr_12941;
});
var csasync$proc$start_process_$_state_machine__12362__auto____1 = (function (state_12918){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12942){if((e12942 instanceof Object)){
var ex__12365__auto__ = e12942;
var statearr_12943_12960 = state_12918;
(statearr_12943_12960[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12961 = state_12918;
state_12918 = G__12961;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__12362__auto__ = function(state_12918){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__12362__auto____1.call(this,state_12918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__12362__auto____0;
csasync$proc$start_process_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__12362__auto____1;
return csasync$proc$start_process_$_state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto___12945))
})();
var state__12384__auto__ = (function (){var statearr_12944 = f__12383__auto__.call(null);
(statearr_12944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto___12945);

return statearr_12944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto___12945))
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
var c__12382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12382__auto__){
return (function (){
var f__12383__auto__ = (function (){var switch__12361__auto__ = ((function (c__12382__auto__){
return (function (state_12982){
var state_val_12983 = (state_12982[(1)]);
if((state_val_12983 === (1))){
var inst_12977 = cljs.core.async.timeout.call(null,time);
var state_12982__$1 = state_12982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12982__$1,(2),inst_12977);
} else {
if((state_val_12983 === (2))){
var inst_12979 = (state_12982[(2)]);
var inst_12980 = func.call(null);
var state_12982__$1 = (function (){var statearr_12984 = state_12982;
(statearr_12984[(7)] = inst_12979);

return statearr_12984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12982__$1,inst_12980);
} else {
return null;
}
}
});})(c__12382__auto__))
;
return ((function (switch__12361__auto__,c__12382__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__12362__auto__ = null;
var csasync$proc$delayer_$_state_machine__12362__auto____0 = (function (){
var statearr_12988 = [null,null,null,null,null,null,null,null];
(statearr_12988[(0)] = csasync$proc$delayer_$_state_machine__12362__auto__);

(statearr_12988[(1)] = (1));

return statearr_12988;
});
var csasync$proc$delayer_$_state_machine__12362__auto____1 = (function (state_12982){
while(true){
var ret_value__12363__auto__ = (function (){try{while(true){
var result__12364__auto__ = switch__12361__auto__.call(null,state_12982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12364__auto__;
}
break;
}
}catch (e12989){if((e12989 instanceof Object)){
var ex__12365__auto__ = e12989;
var statearr_12990_12992 = state_12982;
(statearr_12990_12992[(5)] = ex__12365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12993 = state_12982;
state_12982 = G__12993;
continue;
} else {
return ret_value__12363__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__12362__auto__ = function(state_12982){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__12362__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__12362__auto____1.call(this,state_12982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__12362__auto____0;
csasync$proc$delayer_$_state_machine__12362__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__12362__auto____1;
return csasync$proc$delayer_$_state_machine__12362__auto__;
})()
;})(switch__12361__auto__,c__12382__auto__))
})();
var state__12384__auto__ = (function (){var statearr_12991 = f__12383__auto__.call(null);
(statearr_12991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12382__auto__);

return statearr_12991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12384__auto__);
});})(c__12382__auto__))
);

return c__12382__auto__;
});

//# sourceMappingURL=proc.js.map