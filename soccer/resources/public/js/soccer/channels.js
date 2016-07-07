// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
if(typeof soccer.channels.state_chan !== 'undefined'){
} else {
soccer.channels.state_chan = cljs.core.async.chan.call(null);
}
if(typeof soccer.channels.event_chan !== 'undefined'){
} else {
soccer.channels.event_chan = cljs.core.async.chan.call(null,(3));
}
if(typeof soccer.channels.time_chan !== 'undefined'){
} else {
soccer.channels.time_chan = cljs.core.async.chan.call(null,(3));
}
if(typeof soccer.channels.global_chan !== 'undefined'){
} else {
soccer.channels.global_chan = cljs.core.async.chan.call(null,(1));
}

//# sourceMappingURL=channels.js.map