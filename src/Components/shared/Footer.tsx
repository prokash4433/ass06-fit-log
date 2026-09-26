 
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-[#292c35] bg-[#0d0f14]">
      <div className="container mx-auto flex min-h-[88px] items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog Logo"
            width={25}
            height={25}
            className="object-contain"
          />

          <span className="text-sm font-bold tracking-wide text-white sm:text-base">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-right text-xs text-gray-500 sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
 

