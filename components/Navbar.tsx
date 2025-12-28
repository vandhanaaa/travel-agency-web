'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

 
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={`navbar ${
        scrolled ? 'navbar-solid' : 'navbar-transparent'
      } fixed top-0 left-0 w-full z-50`}
    >
      <div className="navbar-inner px-4 md:px-8 lg:px-12">
        
        <div className="font-bold text-lg mr-6">Travelly</div>

        
        <ul className="navbar-links hidden lg:flex gap-15">
          {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </ul>

        
        <div className="hidden lg:block">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn-dark-green"
          />
        </div>

        
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Image src="/menu.svg" alt="menu" width={32} height={32} />
        </button>
      </div>

      
      {menuOpen && (
        <>
          
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />

          
          <div className="fixed top-20 right-4 w-[200px] bg-white rounded-xl shadow-xl z-50 p-6 lg:hidden">
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-800 font-medium hover:text-green-600 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 items-cente">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn-dark-green"
              />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
