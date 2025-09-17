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
          className="object-cover object-left sm:object-center"
          priority
          sizes="100vw"
        />
        <h1 className="text-[#163C53] text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-bold absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-canela-trial">Bizspoke</h1>
      </section>

      
    </>
  )
}
