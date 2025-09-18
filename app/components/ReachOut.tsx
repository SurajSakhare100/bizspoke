import React from 'react'
import Link from 'next/link'

function ReachOut() {
  return (
    <section className="section-padding">
      <div className="container-responsive">
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 text-center">
            <h2 className="text-blue-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-canela-trial leading-tight text-balance">
              Reach out to us!
            </h2>
            <p className="text-blue-100 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-dm-sans leading-relaxed max-w-3xl text-balance">
              Let&apos;s Start Planning!<br className="hidden sm:block"/>
              We&apos;re excited to help bring your next great experience to life.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="flex items-center justify-center px-6 py-3 sm:px-12 sm:py-4 border-2 border-blue-100 text-blue-100 font-medium rounded-full hover:bg-blue-100 hover:text-white transition-all duration-300  bg-[#DEE8EE]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReachOut