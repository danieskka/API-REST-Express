const express = require('express');

const error404 = require('../API-REST-Express/middlewares/error404');

const filmsApiRoutes = require("../API-REST-Express/routes/filmsApiRoutes");

const filmsRoutes = require("../API-REST-Express/routes/filmsRoutes.js");


const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/film',filmsApiRoutes);

app.use('/film',filmsRoutes);

app.use(error404);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));