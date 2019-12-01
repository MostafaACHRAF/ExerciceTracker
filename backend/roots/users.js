const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const user = new User({username});
    user.save()
        .then(() => res.json('User added !'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json('User deleted !'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').put((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.save()
                .then(user => res.json('User updated !'))
                .catch(err => res.json(`Error: ${err}`));
        })
});

module.exports = router;