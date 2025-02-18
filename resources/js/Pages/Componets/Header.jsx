import React from 'react';
import { Link } from '@inertiajs/react';

const Header = () => {
  return (
    <header className="px-6 py-4 space-x-4 bg-blue-300 text-center">
      <Link href="/" className="text-sm font-medium px-6 py-3 bg-white rounded-md">Home</Link>
      <Link href="/about" className="text-sm font-medium px-6 py-3 bg-white rounded-md">About</Link>
      <Link href="/contact" className="text-sm font-medium px-6 py-3 bg-white rounded-md">Contact</Link>
      <Link href="/posts" className="text-sm font-medium px-6 py-3 bg-white rounded-md">Posts</Link>
    </header>
  );
};

export default Header;
