// components/NavbarClient.js
'use client';
import {KindeUser} from '@kinde-oss/kinde-auth-nextjs/types';
import {ArrowUpRightFromCircle, Search, ShoppingCartIcon, User2Icon} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';
import Humburger from './humburger/Humburger';
import {NavbarMenu} from './NavDropdown';
import {buttonVariants} from './ui/button';

type NavbarProps = {
  user: KindeUser<Record<string, unknown>>;
  isAdmin: boolean;
  cartEmpty: boolean;
};

const NavbarClient = ({user, isAdmin, cartEmpty}: NavbarProps) => {
  // Client-side state for the menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function for menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex items-center justify-between sticky z-[100] h-16 md:h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Link href="/" className="flex z-40 font-extrabold text-2xl md:text-3xl">
        custom<span className="text-purple-600">Hub</span>
      </Link>

      <div className={`transition-transform ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <NavbarMenu />
      </div>

      <div className="h-full flex items-center space-x-4">
        <div className="hidden md:block">
          {user ? (
            <div className="flex">
              <Link
                href="/api/auth/logout"
                className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                Sign out
              </Link>

              {isAdmin && (
                <Link href="/dashboard" className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                  Dashboard ✨
                </Link>
              )}
              <Link
                href="/configure/upload"
                className="hidden sm:flex items-center gap-1 text-purple-600 hover:bg-purple-600 hover:text-white px-2 rounded-[.6rem] py-1 border-2 font-bold border-purple-600">
                Get started
                <ArrowUpRightFromCircle className="ml-1.5 h-3 w-3 font-bold" />
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/api/auth/register"
                className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                Sign up
              </Link>
              <Link
                href="/api/auth/login"
                className={buttonVariants({size: 'sm', variant: 'ghost'})}>
                Login
              </Link>
              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
              <Link
                href="/configure/upload"
                className="hidden sm:flex items-center gap-1 text-purple-600 hover:bg-purple-600 hover:text-white px-2 rounded-[.6rem] py-1 border-2 font-bold border-purple-600">
                Get started
                <ArrowUpRightFromCircle className="ml-1.5 h-3 w-3 font-bold" />
              </Link>
            </div>
          )}
        </div>
        <div className="flex gap-3 md:gap-6">
          <Search className="cursor-pointer" />
          <User2Icon className="cursor-pointer hidden md:block" />
          <div className="flex relative cursor-pointer">
            <ShoppingCartIcon />
            {cartEmpty && <span className="absolute -top-2 right-0.5 text-4xl">/</span>}
            <span className="absolute top-2.5 -right-5 text-purple-600 mr-2">10</span>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Humburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default NavbarClient;
