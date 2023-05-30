const addFilm = async (req, res) => {
    const newFilm = req.body;
    console.log(newFilm);

    try {
        // let response = await fetch (`https://www.omdbapi.com/?t=${newFilm.Title}&apikey=a2ddeb51`, {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newFilm)
        // });
        // let answer = await response.json(); // objeto de vuelta de la petición
        // console.log("Este es el console.log de lo que devuelve la api", answer);

        res.status(201).json({id: "0", message: `Se ha guardado Titanic`});
    } catch (error) {
        console.log(`ERROR`);
    }
}

const editFilm = async (req, res) => {
    const updateFilm = req.body;
    console.log(updateFilm.title);
    try {
        // let response = await fetch (`https://www.omdbapi.com/?t=${updateFilm.Title}&apikey=a2ddeb51`, {
        //     method: "PUT",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(updateFilm)
        // });
        // let answer = await response.json(); // objeto de vuelta de la petición
        // console.log("Este es el console.log de lo que devuelve la api", answer);
        // res.status(201).json({message: `Se ha guardado ${answer.title}`});
        res.status(200).json({id:"0", message: "Se ha actualizado Titanic"});
    } catch (error) {
        console.log(`ERROR`);
    }
}

const removeFilm = async (req, res) => {
    try {
        res.status(200).json({id: "0", message: "Se ha borrado Titanic"});
    } catch (error) {
        console.log(`ERROR`);
    }
}

module.exports = {
    addFilm,
    editFilm,
    removeFilm
}