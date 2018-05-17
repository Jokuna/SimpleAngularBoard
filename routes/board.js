//원래 import로 구현해야하지만 ec6가 적용이 안되있어 일단 require로 구현
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

		res.send(posts);
	} catch(e){
		res.send({
			result: false
		});
	}
});

//Write post
router.post('/write', async (req,res) => {
	try{
		const postCreate = await models.Post.create(req.body);
		
		res.send({
			result: true
		});
	} catch(e){
		res.send({
			result: false
		});
	}
});

//Edit post
router.put('/edit/:id', async (req,res) => {
	try{
		const postUpdate = await models.Post.update(
			req.body,
			{
				where:{
					id: req.params.id
				}	
			}
		);

		res.send({
			result: true
		});
	} catch(e){
		res.send({
			result: false
		});
	}
});


module.exports = router;