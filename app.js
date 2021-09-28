const express = require('express');
const level = require('level')


const app = express();
const port = (parseInt(process.env.PORT || '3000', 10));
const movies = level('mydb', { valueEncoding: 'json' });

app.use(express.json())




app.get('/movies/:id', async (req, res) => {
  try {
      let movie = await movies.get(req.params.id)
      console.log(movie)
      res.status(200).json(movie)
  } catch (err) {
      res.status(404).end()
  }
})


app.post('/movies', (req, res) => {
  let ObjMovie = req.body;
  movies.put(ObjMovie.id,ObjMovie),
  res.status(200).json(ObjMovie) 
  console.log(ObjMovie)
})


app.put('/movies/:id', (req,res) => {
  let ObjMovie = req.body;
  movies.put(ObjMovie.id,ObjMovie),
  res.status(200).json(ObjMovie) 
  console.log(ObjMovie)
})


app.delete('/movies/:id', (req,res) => {
  let ObjMovie = req.body;
  movies.del(ObjMovie.id),
  res.status(200).json(ObjMovie) 
  console.log(ObjMovie)
})


//list movie
app.get('/listmovies/:id', (req, res) => {
  let movie = req.params.id;
  res.status(200).json(movie)
  console.log(ObjMovie)
  
})



app.post('/listmovies/', (req, res) => {
  let ObjMovie = req.body;
  movies.put(ObjMovie.id,ObjMovie),
  res.status(200).json(ObjMovie) 
  console.log(ObjMovie)
})


app.put('/listmovies/:id', (req,res) => {
  let ObjMovie = req.body;
  movies.put(ObjMovie.id,ObjMovie),
  res.status(200).json(ObjMovie) 
  console.log(ObjMovie)
})


app.delete('/listmovies/:id', (req,res) => {
  let ObjMovie = req.body;
  movies.del(ObjMovie.id),
  res.status(200).json(ObjMovie) 
  console.log(ObjMovie)
})

app.post('/listmovies/:id', async (req, res) => {
  try {
    let tab_films = await movies.get(req.params.id)
    tab_films.movie_list.push(req.body.movie_id)
    db.put(req.params.movie_id, tab_films)
    res.status(200).json(tab_films)
    console.log(tab_films);
    
  } catch (error) {
    res.status(404).end()
  }
})

app.delete('/listmovies/:id', async (req, res) => {
  try {
    await movies.del(req.params.id)
    res.status(204).json(req.body)
    // .sendFile(__dirname + '/category.html')
  } catch (error) {
    res.status(404).end()
  }
})





app.listen(port, () => {
  console.log(`La Wati application est lancé , Good Luck Maitre Gims!`)
});