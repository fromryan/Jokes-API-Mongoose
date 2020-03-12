const Joke = require("./models/jokes.model");

modules.export.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({message: "There is an error.", error: err}));
};

modules.export.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(onejoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({message: "There is an error.", error: err}));
}

modules.export.createOneJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke}))
        .catch(err => res.json({message: "There is an error.", error: err}));
}

modules.export.updateOneJoke = (req, res) => {
    Joke.fidnOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({message: "There is an error.", error: err}));
}

modules.export.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({message: "There is an error.", error: err}));
}

