var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');

// Get post list
router.get('/list/?*', function(req, res) {
     models.Post.findAll({
        order : 'id DESC'
    }).then(function(boardSvArr) {
        var boardCliArr = [];
        boardSvArr.forEach(function(boardSv) {
            var boardCli = {
                id: boardSv.id,
                title: boardSv.title,
                author: boardSv.author,
                time: moment(boardSv.updatedAt).format("YYYY-MM-DD")
            };
            boardCliArr.push(boardCli);
        });
        res.contentType('application/json');
        res.send(boardCliArr);
    });
});

module.exports = router;