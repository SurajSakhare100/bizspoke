import { Copyright, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import FooterLogo from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-200 section-padding">
      <div className="container-responsive">
        {/* Header Section */}
        <div className="flex flex-row flex-row justify-between  items-center mb-12 sm:mb-16">
          <div className="flex items-center gap-3 ">
            <Image
              width={32}
              height={32}
              src={FooterLogo}
              alt="Bizspoke Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-white transition-all duration-300 touch-target">
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-white transition-all duration-300 touch-target">
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 border-none border-slate-300 border-b-1 md:border-b-0 md:border-r pr-2 mb-4 md:mb-0">
            <Link href="/experiences" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              Experiences
            </Link>
            <Link href="/#about-us" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              About us
            </Link>
            <Link href="/team" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              Team
            </Link>
            <Link href="/contact" className="block text-blue-100 text-base sm:text-lg font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity touch-target">
              Contact us
            </Link>
          </div>
          {/* <div className="hidden sm:block w-0 h-24 origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-slate-300"></div> */}
          {/* <div className="block sm:hidden self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-slate-300"></div> */}
          {/* Company Info */}
          <div className="space-y-3  border-none border-slate-300 border-b-1 md:border-b-0 md:border-r pr-2 mb-4 md:mb-0">
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
            <Copyright className="w-4 h-4 text-slate-400"/>
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