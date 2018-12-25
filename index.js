const Transport = require('winston-transport')
const SplunkLogger = require("splunk-logging").Logger;

module.exports = class SplunkTransport extends Transport {
	constructor(opts) {
		super(opts)

		if (opts && !opts.token || !opts.url) {
			throw new Error('Both the token and the event collector endpoint are required')
		}

		var config = {
			token: opts.token,
			url: opts.url
		}

		this.metadata = opts.metadata || {}

		this.splunk = new SplunkLogger(config)

		if (opts.formatter) {
			this.splunk.eventFormatter = opts.formatter
		}
	}

	log(info, callback) {
		this.splunk.send(info, (err, response, body) => {

		})

		setImmediate(() => {
			this.emit('logged', info);
		})	  

		callback(null, true)
	}

	close() {
		this.splunk.flush()
	}
}
