import Link from 'next/link';
import { FaStar, FaRegStar } from 'react-icons/fa';

const MovieDetail = ({ movie }) => {
  const renderStars = (ratingOutOf10) => {
    const stars = [];
    const ratingOutOf5 = Math.round(ratingOutOf10); // Convert 10-point scale to 5

    for (let i = 0; i < 10; i++) {
      if (i < ratingOutOf5) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{movie.title} {movie.image}</h1>
      <p className="text-gray-600 mb-2">{movie.description}</p>
      <div className="flex justify-between items-center text-gray-700 mb-4">
        <span className="font-medium">Release Year: {movie.releaseYear}</span>
        <div className="flex items-center gap-1">
          {renderStars(movie.rating)}
          <span className="text-sm text-gray-600 ml-2">({movie.rating}/10)</span>
        </div>
      </div>
      <Link
        href={`/movies/${movie.id}/director`}
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        View Director
      </Link>
    </div>
  );
};

export default MovieDetail;
