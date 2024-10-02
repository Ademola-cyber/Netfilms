import React from 'react'
import MenuItem from './MenuItem'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={ FaHome } />
        <MenuItem title="about" address="/about" Icon={ FcAbout } />
      </div>

      <Link href={'/'} className="flex gap-1 items-center">
        <span className='text-2xl font-bold bg-slate-600 py-1 px-2 rounded-lg'>Netfilms</span>
        <span className='text-xl hidden sm:inline'>Series</span>
      </Link>
    </div>
  );
}
