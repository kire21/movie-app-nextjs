import { useMovieContext } from '../../store/movie-context';

import { Card, CardContent, Typography, Button } from '@mui/material';

function Movie(props) {
  const { removeMovie } = useMovieContext();
  const { name, genre, rating, id } = props.movie;

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='caption' paragraph>
          Genre: {genre}
          <br></br>
          Rating: {rating}
        </Typography>
        <Typography variant='caption' paragraph></Typography>
        <Button
          onClick={() => removeMovie(id)}
          variant='outlined'
          color='error'
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}

export default Movie;
