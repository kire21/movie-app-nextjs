import MovieList from '../components/movies/movies-list';
import AddMovie from '../components/movies/add-movie';

import { Container, Box } from '@mui/material';

function HomePage() {
  return (
    <Container>
      <AddMovie />
      <MovieList />
      <Box mb={6} />
    </Container>
  );
}

export default HomePage;
