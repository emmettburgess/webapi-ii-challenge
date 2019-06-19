const express = require('express');
const post = require('./db.js');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
	post
    find()
    .then(post => {
        res.status(200).json({ message: 'Success'})
    })
    .catch((err) => {
        res.status(500).json({ error: "Fail"})
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params
	post
    findById(id)
    .then(post => {
        res.status(200).json({ message: 'Success'})
    })
    .catch((err) => {
        res.status(400).json({ message: 'Fail'})
    });
});

router.post('/', (req, res) => {
    const postBody = req.body
    if (!postBody.title || !postBody.contents){
        return res.status(400).json({errorMessage: 'Please enter title and contents'})
    }
	post
    insert(postBody)
    .then(post => {
        res.status(201).json({message: "Post created success"})

    })
    .catch((err) => {
        res.status(500).json({error: "There was an error creating the post"})
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params
	post
    remove(id)
    .then(post => {
        res.status(200).json({message: "post removed success"})
    })
    .catch((err) => {
        res.status(500).json({error: "error removing post"})
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params
    const postBody= req.body
    if (!postBody.title || !postBody.contents){
        return res.status(400).json({errorMessage: 'Please enter title and contents'})
    }
	post
    update(id)
    .then(post => {
        res.status(200).json({message: "Post update success"})
    })
    .catch((err) => {
        res.status(500).json({message: "Post update failure"})
    });
});

module.exports = router;