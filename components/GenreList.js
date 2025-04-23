// components/GenreList.js
import Link from 'next/link';

const GenreList = ({ genres }) => {
  return (
    <ul className="space-y-6">
      {genres.map((genre) => (
        <li
          key={genre.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <Link href={`/genres/${genre.id}`}>
            <p className="text-2xl font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300">
              {genre.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
