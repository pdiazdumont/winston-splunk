# Splunk transport for Winston

## Installation

```sh
$ npm install winston-splunk
```

## Usage
```js
var winston = require('winston')
var SplunkTransport = require('winston-splunk')
const logger = winston.createLogger({
	transports: [
		new SplunkTransport({
			token: '<EVENT_COLLECTOR_TOKEN>',
			url: '<EVENT_COLLECTOR_ENDPOINT>',
			metadata: {
				source: '<SPLUNK_SOURCE>',
				sourcetype: '<SPLUNK_SOURCE_TYPE>',
				index: '<SPLUNK_INDEX>',
				host: '<SPLUNK_HOST>'
			}
		})
	]
})
```

## Disclaimer
This transport will work in a basic level, in order to use all of Splunk capabilities new features are required. For example:
- Include custom formatter that will log all the metadata, not only the message and the severity (default format for the splunk library)
- Include custom formatter that will add additional metadata to improve the Splunk statistics (message template and rendered message)
