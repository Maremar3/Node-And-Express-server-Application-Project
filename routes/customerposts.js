const express = require('express');
const router = express.Router();

const posts = require('../data/customerposts');
const error = require('../utilities/error');
//Post 

router
  .route('/')
  .get((req, res) => {
    const links = [
      {
        href: 'posts/:id',
        rel: ':id',
        type: 'GET',
      },
    ];

    res.json({ posts, links });
  })//userid is the product id,customername is the customer name
  .post((req, res, next) => {
    if (req.body.userId && req.body.customername) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.ustomername,
        
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else next(error(400, 'Insufficient Data'));
  });


router
  .route('/:id')
  //Get using customer id primery key
  .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);

    const links = [
      {
        href: `/${req.params.id}`,
        rel: '',
        type: 'PATCH',
      },
      {
        href: `/${req.params.id}`,
        rel: '',
        type: 'DELETE',
      },
    ];

    if (post) res.json({ post, links });
    else next();
  })
  //update using customer id primery key
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  //delete using customer id primery key
  .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });

module.exports = router;