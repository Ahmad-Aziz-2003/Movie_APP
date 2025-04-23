import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center p-8 bg-gray-100 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-5xl font-bold mb-4 text-red-500">Oops!</h1>
        <p className="text-lg mb-6">The page you are looking for doesn't exist.</p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Custom404;
