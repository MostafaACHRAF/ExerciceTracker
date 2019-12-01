const router = require('express').Router();
const Exercice = require('../models/exercice.model');

router.route('/').get((req, res) => {
    Exercice.find()
            .then(exercices => res.json(exercices))
            .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const exercice = new Exercice({
        username,
        description,
        duration,
        date
    });
    exercice.save()
            .then(() => res.json('Exercice added !'))
            .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
    Exercice.findById(req.params.id)
            .then(exercice => res.json(exercice))
            .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
    Exercice.findByIdAndDelete(req.params.id)
            .then(exercice => res.json('Exercice deleted !'))
            .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").put((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    Exercice.findById()
            .then(exercice => {
                exercice.username = username;
                exercice.description = description;
                exercice.duration = duration;
                exercice.date = date;

                exercice.save()
                        .then(exercice => res.json('Exercice deleted !'))
                        .catch(err => res.status(400).json(`Error: ${err}`));
            });
    

    exercice.save()
})

module.exports = router;