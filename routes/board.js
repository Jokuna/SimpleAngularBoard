
const express = require('express');
const router = express.Router();
const models = require('../models');
const moment = require('moment');

// Get post list
router.get('/list/?*', async (req, res) => {
	try{
	  const posts = await models.Post.findAll({
	      order: 'id DESC',
	      attributes: ['id','title','author','updatedAt']
	  });

	  await posts.map((post) => {
	 		post.time = moment(post.updatedAt).format("YYYY-MM-DD");
	 		return post;
	  });

	  res.contentType('application/json');
		res.send(posts);
	} catch(e){
		res.send({
			result: false
		});
	}
});

module.exports = router;