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
	      attributes: ['id','title','content','author','updatedAt']
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

//Get single post
router.get('/:id', async (req,res) => {
	try{
		const post = await models.Post.findOne({
			where: {
				id: req.params.id
			},
			attributes: ['id','title','content','author','updatedAt']
		});

		res.send(post);
	} catch(e){
		res.send({
			result: false
		});
	}
});

//Write post
router.post('/', async (req,res) => {
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
router.put('/:id', async (req,res) => {
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

router.delete('/:id', async (req,res) => {
	try{
		const deletedPost = await models.Post.destroy({
			where:{
				id: req.params.id
			}
		});

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