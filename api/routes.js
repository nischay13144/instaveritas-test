var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {

	app.get('/api', function(req, res){
		//console.log(config.tvmaze.url+"/search/shows?q:"+req.query.name);

		superagent
			.get('http://api.tvmaze.com/search/shows?q='+req.query.name)
			//.query({q:req.query.name})
			.end(function(err,result){
				res.json(result.body);
			//	console.log(result.body);
				//result.json(res.body);
			;
			})

	});
	app.get('/api/shows', function(req,res){
	//	console.log("Hello"+req.params.id);

		superagent
			.get('http://api.tvmaze.com/shows/' + req.query.id)
			.query({embed: "cast"})
			.end(function(err, result) {
				res.json(result.body);
				console.log(res.body);
		console.log(req.query.id);

			});
	});
};
