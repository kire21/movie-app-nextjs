import { useState } from 'react';
import { useMovieContext } from '../../store/movie-context';

import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function AddMovie() {
  const { addNewMovie } = useMovieContext();
  const [movie, setMovie] = useState({
    id: new Date().valueOf(),
    name: '',
    genre: '',
    rating: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMovie((prevMovie) => {
      return {
        ...prevMovie,
        [name]: value,
      };
    });
  }

  function onSubmit(event) {
    if (!movie) {
      return;
    }

    event.preventDefault();
    addNewMovie(movie);
    setMovie({ name: '', genre: '', rating: '' });
  }

  return (
    <Grid>
      <Box mt={6} />
      <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
        <CardContent>
          <Typography
            variant='body'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            Add your new watched movie
          </Typography>
          <Box mb={4} />
          <form onSubmit={onSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  type='text'
                  name='name'
                  value={movie.name}
                  onChange={handleChange}
                  placeholder='Enter movie title'
                  label='Movie Title'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type='text'
                  name='genre'
                  value={movie.genre}
                  onChange={handleChange}
                  placeholder='Movie genre'
                  label='Movie genre'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  type='text'
                  name='rating'
                  value={movie.rating}
                  onChange={handleChange}
                  placeholder='Movie rating'
                  label='Movie rating'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Box mb={6} />
    </Grid>
  );
}

export default AddMovie;
