const JokeController = require("../controllers/jokes.controller");

modules.export = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("api/jokes/:id", JokeController.findOneJoke);
    app.post("api/jokes/new", JokeController.createOneJoke);
    app.put("api/jokes/update/:_id", JokeController.updateOneJoke);
    app.delete("api/jokes/delete/:_id", JokeController.deleteOneJoke);
};