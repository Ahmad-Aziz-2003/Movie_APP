import Image from 'next/image';
import Link from 'next/link';

const ListMovies = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <div className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-105">
            <Image
              src={movie.image}
              alt={movie.title}
              width={500}
              height={300} 
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{movie.title} {movie.image}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListMovies;
