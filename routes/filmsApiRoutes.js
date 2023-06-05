const express = require('express')
const filmsApiRouter = express.Router();
const filmsApiController = require("../controllers/apiController.js")
const checkApiKey = require("../middlewares/auth_api_key.js")


filmsApiRouter.get("/:title", checkApiKey,filmsApiController.getFilms)

module.exports = filmsApiRouter;