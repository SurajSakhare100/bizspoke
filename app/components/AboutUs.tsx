import React from 'react'

function AboutUs() {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center section-padding px-4 sm:px-6 lg:px-8" id="about-us">
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="space-y-8 sm:space-y-12 text-center">
          <div className="text-Blue-100 text-2xl sm:text-3xl lg:text-4xl font-normal font-['Canela_Trial'] leading-tight sm:leading-relaxed lg:leading-[52.50px] tracking-wide">
            At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.
          </div>
          {/* <div className="text-Blue-100 text-2xl sm:text-3xl lg:text-4xl font-normal font-['Canela_Trial'] leading-tight sm:leading-relaxed lg:leading-[52.50px] tracking-wide">
            Our clients trust us with end-to-end management of their annual experiential calendars.
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs