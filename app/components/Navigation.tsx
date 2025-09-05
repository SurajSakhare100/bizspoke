'use client'

import NavLogo from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 w-full font-dm-sans backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full items-center justify-between h-16">
          {/* Left Navigation Links */}
            <Link href={"#experiences"} className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm lg:text-lg font-medium transition-colors">
              Experiences
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm lg:text-lg font-medium transition-colors">
              About Us
            </Link>

          {/* Centered Logo */}
            <Link href="/" className="w-44 h-12 inline-flex justify-start items-center gap-1.5">
              <Image
                src={NavLogo}
                alt="Bizspoke Logo"
                width={32}
                height={32}
              />
             <h1 className="justify-start text-[#163B52] text-4xl font-bold font-canela leading-10">Bizspoke</h1>
            </Link>

          {/* Right Navigation Links */}
            <Link href="#services" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm lg:text-lg font-medium transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm lg:text-lg font-medium transition-colors">
              Contact
            </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-teal-700 relative">
              <div className="absolute inset-0 bg-teal-700 transform rotate-45"></div>
              <div className="absolute inset-1 bg-white transform rotate-45"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-teal-700"></div>
            </div>
            <h1 className="text-xl font-bold text-teal-700 font-playfair">Bizspoke</h1>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 hover:text-slate-900 p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="#experiences" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base lg:text-lg font-medium">
                Experiences
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base lg:text-lg font-medium"> 
                About Us
              </Link>
                          <Link href="#services" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base lg:text-lg font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base lg:text-lg font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

