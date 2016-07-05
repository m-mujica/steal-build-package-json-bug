var stealTools = require('steal-tools');

var promise = stealTools.build({
	config: __dirname + '/package.json!npm'
})

promise.then(null, function(err) {
	console.log(err.stack);
});
