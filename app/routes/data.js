var express = require('express');
var router = express.Router();

var Project = require('../models/developer/project.model');

/*
	COMPONENT: developer
	SUB-COMPONENT: Projects
	ACTION: SAVE
*/
router.post('/project', function(req, res, next){
	var project = new Project({
		name: req.body.name, lng_desc: req.body.lng_desc, short_desc: req.body.short_desc, github_url: req.body.github_url, site_url: req.body.site_url, parent_component: req.body.parent_component, img_name: req.body.img_name, technologies: req.body.technologies
	});

	project.save(function(err, result){ 
		req_callback(err,result, res); 
	});
});

/*
	COMPONENT: developer
	SUB-COMPONENT: Projects
	ACTION: GET
*/
router.get('/projects', function(req, res, next) {
	Project.find()
		.exec(function(err, projects){
			if (err) {
				return res.status(500).json({
					title: 'An error occurred',
					error: err
				});
			}
			res.status(200).json({
				message: 'Success',
				obj: projects
			});
		});
});




var save_callback = function(err, result, res){
	if(err) {
		return res.status(500).json(
			{ title: 'An error occurred', error: err }
		);
	}

	res.status(201).json(
		{ message: 'Saved Project : data.js', obj: result }
	);
}

var get_callback = 

module.exports = router;