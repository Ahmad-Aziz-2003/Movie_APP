import fs from 'fs/promises';
import path from 'path';
import ListMovies from '@/components/ListMovies';

const GenreDetail = ({ genre, movies }) => {
  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{genre.name} Movies</h1>
        <ListMovies movies={movies} />
    </div>
  );
};

export default GenreDetail;

export async function getServerSideProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath);
  const data = JSON.parse(dataJson);

  const { genres, movies } = data;
  const genre = genres.find((g) => g.id === params.id);
  const genreMovies = movies.filter((movie) => movie.genreId === params.id);
  if (!genre) {
    return { notFound: true };
  }
  return {
    props: { genre, movies: genreMovies },
  };
}
