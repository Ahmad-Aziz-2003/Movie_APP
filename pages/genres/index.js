import fs from 'fs/promises';
import path from 'path';
import GenreList from '../../components/GenreList';

const Genres = ({ genres }) => {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900">Genres</h1>
      <GenreList genres={genres} />
    </div>
  );
};

export default Genres;

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const dataJson = await fs.readFile(filePath);
  const data = JSON.parse(dataJson);

  const { genres } = data;

  return {
    props: { genres },
  };
}
