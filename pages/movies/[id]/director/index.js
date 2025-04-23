import fs from 'fs/promises';
import path from 'path';

const DirectorDetails = ({ director }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{director.name}</h2>
      <p className="text-gray-700 text-lg leading-relaxed italic">{director.biography}</p>
    </div>
  );
};

export default DirectorDetails;
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(dataJson);

  const paths = data.movies.map((movie) => ({
    params: { id: movie.id },
  }));

  return {
    paths,
    fallback: 'blocking', 
  };
}

// Fetch director based on movie ID
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(dataJson);

  const movie = data.movies.find((movie) => movie.id === params.id);
  const director = data.directors.find((d) => d.id === movie?.directorId);

  if (!director) {
    return { notFound: true };
  }

  return {
    props: { director },
  };
}
