const express = require('express')
const filmsRoutes = express.Router();
const filmsController = require("../controllers/filmsController.js")
const checkApiKey = require("../middlewares/auth_api_key.js")

app.post("/", checkApiKey, filmsController.addFilm)

app.put("/", checkApiKey, filmsController.editFilm)

app.delete("/", checkApiKey, filmsController.removeFilm)

module.exports = filmsRoutes