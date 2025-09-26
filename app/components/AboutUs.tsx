'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

function AboutUs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Split both sentences into lines
    const split1 = new SplitType('.line-1', { types: 'lines' })
    const split2 = new SplitType('.line-2', { types: 'lines' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top top',
        end: '+=2000',   // total scroll duration
        scrub: true,
        pin: true,
        markers: false,
      },
    })

    // First sentence (line by line)
    tl.from(split1.lines, {
      opacity: 1,
      y: 80,
      stagger: 0.2,  // each line one after another
      duration: 0.8,
      ease: 'expo.out',
    })

    // First sentence out (line by line, same)
    tl.to(split1.lines, {
      opacity: 0,
      y: -60,
      stagger: 0.2,
      duration: 0.8,
      ease: 'expo.inOut',
    })

    // Second sentence (line by line, same timing as first)
    tl.from(split2.lines, {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 0.8,
      ease: 'expo.out',
    })

    return () => {
      split1.revert()
      split2.revert()
    }
  }, [])

  return (
    <section className="about-section h-screen flex items-center justify-center bg-white">
      <div className="container-responsive">
        <div className="relative text-center">
          {/* First sentence */}
          <p className="line-1 absolute inset-0 flex items-center justify-center text-blue-100 text-3xl sm:text-4xl font-medium font-canela-trial leading-tight text-balance">
            At Bizspoke, we deliver 360° event solutions,<br />
            elevated to the highest levels of exclusivity & excellence.
          </p>

          {/* Second sentence */}
          <p className="line-2 absolute inset-0 flex items-center justify-center text-blue-100 text-3xl sm:text-4xl font-medium font-canela-trial leading-tight text-balance">
            Our clients trust us with end-to-end<br />
            management of their annual experiential calendars.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
