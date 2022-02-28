import React, { useState, useEffect } from 'react';

import {
  Container,
  Card,
  Box,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

function RandomMovie() {
  const [movieTitle, setMovieTitle] = useState({
    title: '',
  });
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://data-imdb1.p.rapidapi.com/movie/order/byPopularity/?page_size=50',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
          'x-rapidapi-key':
            'ce5ffa166bmshbc70ef24d131519p15a3a2jsn4ccf7faad34f',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  function getRandomMovie() {
    const randomNumber = Math.floor(Math.random() * movies.length);
    const title = movies[randomNumber].title;
    setMovieTitle((prevMovie) => ({
      ...prevMovie,
      title: title,
    }));
  }

  return (
    <Container maxWidth='md'>
      <Box mt={6} />
      <Typography>
        Click on the button and find out the next movie to watch... Are you
        excited?
      </Typography>
      <Box mb={4} />
      <Card sx={{ maxWidth: 1100 }}>
        <CardContent>
          <Typography variant='h2' paragraph>
            {movieTitle.title}
          </Typography>
          <Button onClick={getRandomMovie} variant='outlined' color='primary'>
            Get Movie
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RandomMovie;
