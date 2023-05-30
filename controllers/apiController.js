const getFilms =  async (req,res) => {
    try {
        let response = await fetch (`https://www.omdbapi.com/?t=${req.params.title}&apikey=a2ddeb51`);
        let films = await response.json();
        res.status(200).json(films);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`); 
    }
}

module.exports = getFilms;