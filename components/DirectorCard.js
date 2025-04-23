import ListMovies from './ListMovies';

const DirectorCard = ({ name, biography, movies }) => {
  return (
    <div className="mb-8 p-6 rounded-2xl shadow-md border border-gray-200 bg-white">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="mt-1 text-gray-600 italic">{biography}</p>
      </div>

      <div>
        {movies.length > 0 ? (
          <ListMovies movies={movies} />
        ) : (
          <p className="text-sm text-gray-500">No movies directed by this director.</p>
        )}
      </div>
    </div>
  );
};

export default DirectorCard;
