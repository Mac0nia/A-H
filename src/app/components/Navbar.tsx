import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark text-accent p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link href="/">
          A&H
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/services">
          Services
        </Link>
        <Link href="/about">
          About Us
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <Link href="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
