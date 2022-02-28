import Movie from './movie';
import { useMovieContext } from '../../store/movie-context';

import { Grid, Container } from '@mui/material';

function MovieList() {
  const { movies } = useMovieContext();

  return (
    <Container maxWidth='md'>
      <Grid container direction='row' spacing={3}>
        {movies.map((movie) => {
          return (
            <Grid item md={4} xs={6} key={movie.id}>
              <Movie movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default MovieList;
