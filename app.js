const express = require('express');

const error404 = require('.middlewares/error404');

const filmsApiRoutes = require("../routes/filmsApiRoutes.js");


const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/film',filmsApiRoutes);

app.use(error404);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));