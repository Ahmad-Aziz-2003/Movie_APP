import useSWR from 'swr';
import DirectorCard from '../../components/DirectorCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DirectorsPage() {
  const { data, error } = useSWR('/data.json', fetcher);

  if (!data) return <p>Loading directors...</p>;
  if (error) return <p>Failed to load data</p>;

  const { directors, movies } = data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Directors</h1>
      {directors && directors.length > 0 ? (
        directors.map((director, index) => {
          const directedMovies = movies.filter(
            (movie) => movie.directorId === director.id
          );

          return (
            <DirectorCard
              key={index}
              name={director.name}
              biography={director.biography}
              movies={directedMovies}
            />
          );
        })
      ) : (
        <p>No directors found.</p>
      )}
    </div>
  );
}
