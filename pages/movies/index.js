// pages/movies.js
import fs from 'fs/promises';
import path from 'path';
import { useState } from 'react';
import ListMovies from '@/components/ListMovies';

const Movies = ({ movies, genres }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (genreId) => {
    if (genreId) {
      const filtered = movies.filter((movie) => movie.genreId === genreId);
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">All Movies</h1>

      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        <button
          onClick={() => handleFilter(null)}
          className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          All Movies
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleFilter(genre.id)}
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            {genre.name}
          </button>
        ))}
      </div>

   
        <ListMovies movies={filteredMovies} />
  
    </div>
  );
};

export default Movies;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(dataJson);
  const { movies, genres } = data;

  return {
    props: {
      movies,
      genres,
    },
  };
}
