import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#1a1a1a]/80 backdrop-blur-sm text-white p-4 flex justify-between items-center z-50">
      <div className="text-lg font-bold">
        <Link href="/" className="text-[#DAA520] hover:text-[#DAA520]/80 transition-colors">
          A&H
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link href="/#services" className="hover:text-[#DAA520] transition-colors">
          Services
        </Link>
        <Link href="/#about" className="hover:text-[#DAA520] transition-colors">
          About Us
        </Link>
        <Link href="/#contact" className="hover:text-[#DAA520] transition-colors">
          Contact
        </Link>
        <Link href="/#blog" className="hover:text-[#DAA520] transition-colors">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
