var util = require('util'),
    da = require('dtrace_aggr'),
    fq = function() { da.apply(this); };

util.inherits(fq,da);

fq.prototype.probe = function() {
  return 'fq*:::message-deliver{@l[strjoin(substr(args[0]->pretty,0,index(args[0]->pretty,"/")), "`latency_ns")] = llquantize(args[2]->latency,10,0,9,100); @l["payload_len"] = llquantize(args[2]->payload_len,10,0,9,100);}'
}
module.exports = fq;
