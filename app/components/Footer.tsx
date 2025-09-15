import { InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import FooterLogo from '@/public/images/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-200 section-padding">
      <div className="container-responsive">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 lg:mb-0">
            <Image
              width={32}
              height={32}
              src={FooterLogo}
              alt="Bizspoke Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-canela text-blue-100">
              Bizspoke
            </h3>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-white transition-all duration-300 touch-target">
              <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-white transition-all duration-300 touch-target">
              <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4">
            <a href="#experiences" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              Experiences
            </a>
            <a href="#about" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              About us
            </a>
            <a href="#clients" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              Clients
            </a>
            <a href="#services" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              Services
            </a>
          </div>
          
          {/* Company Info */}
          <div className="space-y-3">
            <h4 className="text-blue-100 text-base sm:text-lg font-semibold font-dm-sans uppercase tracking-wide">
              Bizspoke Private Limited
            </h4>
            <p className="text-blue-100 text-sm sm:text-base font-medium font-dm-sans leading-relaxed">
              1603, Lodha Supremus, Lower Parel,<br />
              Mumbai - 400013, India
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 p-2 bg-white rounded-full">
                <PhoneIcon className="w-4 h-4 text-blue-100" />
              </div>
              <a href="tel:+912266668661" className="text-blue-100 text-sm sm:text-base font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity">
                +91 22 6666 8661
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 p-2 bg-white rounded-full">
                <MailIcon className="w-4 h-4 text-blue-100" />
              </div>
              <a href="mailto:info@bizspoke.co.in" className="text-blue-100 text-sm sm:text-base font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity">
                info@bizspoke.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 mb-6 sm:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 relative">
              <div className="w-3 h-3 absolute top-0.5 left-0.5 border border-slate-400"></div>
              <div className="w-1 h-1.5 absolute top-1.5 left-1.5 border border-slate-400"></div>
            </div>
            <span className="text-slate-400 text-sm sm:text-base font-normal font-dm-sans">
              All rights reserved by Bizspoke<span className="font-medium">.</span>
            </span>
          </div>
          <a href="#" className="text-slate-400 text-sm sm:text-base font-normal font-dm-sans hover:text-slate-600 transition-colors touch-target">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  )
}

