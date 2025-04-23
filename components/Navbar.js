import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <h1>Movie-App</h1> {/* Movie app logo or title */}
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
      
          <Link href="/">
          <li className="hover:bg-blue-500 px-4 py-2 rounded">Home  </li>
          </Link>
      
          <Link href="/movies">
          <li className="hover:bg-blue-500 px-4 py-2 rounded">Movies  </li>
          </Link>

          <Link href="/genres">
          <li className="hover:bg-blue-500 px-4 py-2 rounded">Genre </li>
          </Link>

          <Link href="/directors">
          <li className="hover:bg-blue-500 px-4 py-2 rounded">Directors </li>
          </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
