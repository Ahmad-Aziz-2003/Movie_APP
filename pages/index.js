// pages/index.js
import { useRouter } from 'next/router';
import fs from 'fs/promises';
import path from 'path';
import ListMovies from '@/components/ListMovies';

const Home = ({ trendingMovies }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Trending Movies
      </h1>
      <ListMovies movies={trendingMovies} />
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push('/genres')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
        >
          Browse Genres
        </button>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath); 
  const data = JSON.parse(dataJson); 

  const { movies } = data;
  const trendingMovies = movies.filter((movie) => movie.rating >= 8);

  return {
    props: {
      trendingMovies, 
    },
    revalidate: 60, 
  };
}
