import Image from 'next/image'
import HeroImage from '@/public/images/hero.png'

export default function HeroSection() {
  return (
    <>
      <section className="relative h-screen">
        <Image
          src={HeroImage}
          alt="London skyline with Big Ben and Houses of Parliament at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Text Block Section */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center py-16 md:py-24 lg:py-32">
        <div className="text-center text-blue-900 text-2xl md:text-3xl lg:text-4xl font-normal  font-['Canela_Trial']  leading-snug md:leading-[3.25rem] tracking-wide max-w-3xl mx-auto px-4">
          At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.
        </div>
      </section>
     
    </>
  )
}
