const router = require('express').Router()
const Post = require('../models/Posts.js')

// @desc		Get all posts
// @route		GET /
router.get('/', (req, res) => {
  Post.find(req.query)
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

// @desc		Get a post by id
// @route		GET /:id
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then((car) => res.json(car))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

// @desc		Add a new post
// @route		POST /
router.post('/', (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    url: req.body.url,
  })
  newPost
    .save()
    .then(() => res.json(newPost))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

// @desc		Update a post by id
// @route		PATCH /:id

// @desc		Remove a post by id
// @route		DELETE /:id
router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Deleted'))
    .catch((err) => res.status(500).json(`Error: ${err}`))
})

module.exports = router
