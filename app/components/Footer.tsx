import { InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import FooterLogo from '@/public/images/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-200 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-3 mb-8 lg:mb-0">
          <Image
          width={32}
          height={32}
          src={FooterLogo}
          alt="Bizspoke Logo"
          />
            <h3 className="text-5xl font-medium font-canela text-[var(--color-blue-100)]">Bizspoke</h3>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-7">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <InstagramIcon className="w-4 h-4 text-slate-400 flex items-center justify-center" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <LinkedinIcon className="w-4 h-4 text-slate-400 flex items-center justify-center" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col  lg:flex-row gap-6 w-full justify-between mb-12">
          {/* Navigation Links */}
            <div className= "grid grid-cols-2 w-1/3">
              <a href="#" className="block text-[var(--color-blue-100)] text-xl font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity">Experiences</a>
              <a href="#" className="block text-[var(--color-blue-100)] text-xl font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity">About us</a>
              <a href="#" className="block text-[var(--color-blue-100)] text-xl font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity">Clients</a>
              <a href="#" className="block text-[var(--color-blue-100)] text-xl font-medium font-dm-sans uppercase tracking-wide hover:opacity-80 transition-opacity">Services</a>
            </div>
            
            {/* Company Info */}
            <div className="space-y-3 w-1/3">
              <h4 className="text-[var(--color-blue-100)] text-xl font-semibold font-dm-sans uppercase tracking-wide">Bizspoke Private Limited</h4>
              <p className="text-[var(--color-blue-100)] text-xl font-medium font-dm-sans leading-7">
                1603, Lodha Supremus, Lower Parel,<br />
                Mumbai - 400013, India
              </p>
            </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-5 w-1/3">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 p-2 bg-white rounded-full">
                <PhoneIcon className="w-4 h-4 text-blue-400 flex items-center justify-center" />
              </div>
              <span className="text-[var(--color-blue-100)] text-xl font-medium font-dm-sans uppercase tracking-wide">+91 22 6666 8661</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 p-2 bg-white rounded-full">
                <MailIcon className="w-4 h-4 text-blue-40 flex items-center justify-center" />
              </div>
              <span className="text-[var(--color-blue-100)] text-xl font-medium font-dm-sans uppercase tracking-wide">info@bizspoke.co.in</span>
            </div>
          </div>
        </div>
        

        {/* Divider */}
        <div className="border-t border-slate-300 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-4 h-4 relative">
              <div className="w-3 h-3 absolute top-0.5 left-0.5 border border-slate-400"></div>
              <div className="w-1 h-1.5 absolute top-1.5 left-1.5 border border-slate-400"></div>
            </div>
            <span className="text-slate-400 text-base font-normal font-dm-sans">
              All rights reserved by Bizspoke<span className="font-medium">.</span>
            </span>
          </div>
          <a href="#" className="text-slate-400 text-base font-normal font-dm-sans hover:text-slate-600 transition-colors">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  )
}

