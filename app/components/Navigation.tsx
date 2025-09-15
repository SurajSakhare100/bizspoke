'use client'

import NavLogo from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 w-full font-dm-sans backdrop-blur-md border-b border-gray-200 shadow-sm safe-top">
      <div className="container-responsive">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full items-center justify-between h-16 lg:h-20">
          {/* Left Navigation Links */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link href={"/experiences"} className="text-slate-600 hover:text-blue-100 px-3 py-2 text-sm lg:text-base font-medium transition-colors touch-target">
              Experiences
            </Link>
            <Link href="/team" className="text-slate-600 hover:text-blue-100 px-3 py-2 text-sm lg:text-base font-medium transition-colors touch-target">
              About Us
            </Link>
          </div>

          {/* Centered Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity">
            <Image
              src={NavLogo}
              alt="Bizspoke Logo"
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
            />
            <h1 className="text-blue-100 text-2xl sm:text-3xl lg:text-4xl font-bold font-canela leading-tight">
              Bizspoke
            </h1>
          </Link>

          {/* Right Navigation Links */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link href="#services" className="text-slate-600 hover:text-blue-100 px-3 py-2 text-sm lg:text-base font-medium transition-colors touch-target">
              Services
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-100 px-3 py-2 text-sm lg:text-base font-medium transition-colors touch-target">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src={NavLogo}
              alt="Bizspoke Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <h1 className="text-blue-100 text-xl font-bold font-canela">Bizspoke</h1>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 hover:text-blue-100 p-2 touch-target transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200 safe-bottom">
              <Link 
                href="#experiences" 
                className="text-slate-600 hover:text-blue-100 block px-3 py-3 text-base font-medium transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link 
                href="#about" 
                className="text-slate-600 hover:text-blue-100 block px-3 py-3 text-base font-medium transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              > 
                About Us
              </Link>
              <Link 
                href="#services" 
                className="text-slate-600 hover:text-blue-100 block px-3 py-3 text-base font-medium transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-600 hover:text-blue-100 block px-3 py-3 text-base font-medium transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

