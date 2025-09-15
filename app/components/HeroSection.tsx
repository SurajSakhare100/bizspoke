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
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Text Block Section */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center section-padding">
        <div className="container-responsive">
          <div className="text-center text-blue-100 text-responsive-xl font-normal font-canela-trial leading-tight md:leading-relaxed tracking-wide max-w-4xl mx-auto text-balance">
            At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.
          </div>
        </div>
      </section>
    </>
  )
}
