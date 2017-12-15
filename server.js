var express = require('express');
var app = express();

app.use(express.static('./app'));

require('./api/routes')(app)

app.get('*', function (req, res) {
	res.sendFile('/app/views/index.html', { root: __dirname });
});

app.listen(8080, function () {
	console.log('Server is running on 8080.')
});
