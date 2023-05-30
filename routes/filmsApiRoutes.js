const express = require('express')
const filmsApiRouter = express.Router();
const filmsApiController = require("../controllers/apiController.js")


filmsApiRouter.get("/:title", filmsApiController.getFilms)

module.exports = filmsApiRouter;