import '../styles/globals.css';

import Layout from '../components/layout/layout';
import { MovieProvider } from '../store/movie-context';

function MyApp({ Component, pageProps }) {
  return (
    <MovieProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MovieProvider>
  );
}

export default MyApp;
