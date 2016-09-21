var route53 = require('./route53')

route53.ResourceRecordSets.forEach (function (record) {
	console.log (record.Name)
})
