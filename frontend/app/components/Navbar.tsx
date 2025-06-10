"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAppContext } from '../context/appContext';
import SignUp from './Signup';
import Login from './Login';

const Navbar = () => {
  const {
    cartCount,
    showLogin,
    setShowLogin,
    showSignUp,
    setShowSignUp,
    isLoggedIn,
    logout
  } = useAppContext();

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleOpen = () => setIsOpen(!isOpen);
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:ml-[5.2rem] md:mr-[4rem] py-10 bg-white relative transition-all">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="font-bold cursor-pointer">JADED LABEL</h1>
          </Link>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden sm:flex justify-center items-center gap-8 flex-1 max-w-[600px] text-sm">
          <Link
            href="/category"
            className={`text-sm ${isActive('/category') ? 'font-semibold text-pink-300' : 'text-black'}`}
          >
            Categories
          </Link>
          <Link
            href="/collection"
            className={`text-sm ${isActive('/collection') ? 'font-semibold text-pink-300' : 'text-black'}`}
          >
            Collections
          </Link>
          <Link
            href="/about"
            className={`text-sm ${isActive('/about') ? 'font-semibold text-pink-300' : 'text-black'}`}
          >
            About us
          </Link>
        </div>

        {/* Right: Cart and Sign Up */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Cart Icon */}
          <div
            onClick={() => router.push('/cart')}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button className="absolute -top-1.5 -right-2 text-xs text-white bg-pink-300 w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {cartCount}
            </button>
          </div>

          {/* Sign Up Button */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                logout();
                router.push('/'); // Optional: redirect to home on logout
              }}
              className="flex items-center gap-2 px-6 py-2 bg-pink-300 hover:bg-pink-500 transition text-white rounded-full text-sm"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                setShowSignUp(true);
                setShowLogin(false);
              }}
              className="flex items-center gap-2 px-6 py-2 bg-pink-300 hover:bg-pink-400 transition text-white rounded-full text-sm"
            >
              Sign Up
            </button>
          )}

        </div>

        {/* Burger Icon for Mobile */}
        <button
          onClick={toggleOpen}
          aria-label="Menu"
          className="absolute top-8 right-4 sm:hidden z-50"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${isOpen ? 'flex' : 'hidden'
            } z-40 fixed top-[60px] inset-x-0 bg-pink-300 shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <Link
            href="/category"
            className={`block text-white ${isActive('/category') ? 'underline font-semibold' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/collection"
            className={`block text-white ${isActive('/collection') ? 'underline font-semibold' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Collections
          </Link>
          <Link
            href="/about"
            className={`block text-white ${isActive('/about') ? 'underline font-semibold' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
          {isLoggedIn ? (
            <button
              className="cursor-pointer px-6 py-2 mt-2 bg-white transition text-pink-300 rounded-full text-sm"
              onClick={() => {
                logout();
                setIsOpen(false);
                router.push('/');
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="cursor-pointer px-6 py-2 mt-2 bg-white transition text-pink-300 rounded-full text-sm"
              onClick={() => {
                setIsOpen(false);
                setShowLogin(true);
                setShowSignUp(false);
              }}
            >
              Login
            </button>
          )}

        </div>
      </nav>

      {/* Auth Modals */}
      {showSignUp && (
        <SignUp
          closeForm={() => setShowSignUp(false)}
          switchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        />
      )}
      {showLogin && (
        <Login
          closeForm={() => setShowLogin(false)}
          switchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar