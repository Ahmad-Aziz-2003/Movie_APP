import fs from 'fs/promises';
import path from 'path';
import MovieDetail from '../../../components/MovieDetail';

const MovieDetailsPage = ({ movie }) => {
  return <MovieDetail movie={movie} />;
};

export default MovieDetailsPage;

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath);
  const data = JSON.parse(dataJson);
  const { movies } = data;
  const paths = movies.map((movie) => ({
    params: { id: movie.id },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath);
  const data = JSON.parse(dataJson);
  const { movies } = data;
  const movie = movies.find((movie) => movie.id === params.id);

  if (!movie) {
    return { notFound: true };
  }

  return {
    props: { movie },
    revalidate: 180,
  };
}