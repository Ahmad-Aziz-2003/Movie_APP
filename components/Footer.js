import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          Movie-App
        </div>

        {/* Help Links */}
        <div className="space-x-6 text-sm">
        <Link href="/help" className="hover:text-blue-400 transition">
            Help
          </Link>
          <Link href="/help/faqs" className="hover:text-blue-400 transition">
            FAQs
          </Link>
          <Link href="/help/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link href="/help/privacy" className="hover:text-blue-400 transition">
            Privacy
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-xs text-gray-400">
        &copy; 2025 Movie-App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
