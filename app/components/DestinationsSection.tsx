import DestinationsImage from '@/public/images/destinationBg.png'
import Image from 'next/image'
import LoaderIcon from '@/public/images/loader.png'
export default function DestinationsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={DestinationsImage}
          alt="Coastal town built into cliffs"
          className="w-full h-full object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Overlay Card */}
      <div className="relative z-10 container-responsive">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white backdrop-blur-sm p-6 sm:p-8 md:p-12 shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 text-center mb-6 sm:mb-8 font-playfair leading-tight">
              Destinations from all over the world
            </h2>

            {/* Loader Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="rounded-full flex items-center justify-center">
                <Image
                  src={LoaderIcon}
                  alt="Loader Icon"
                  width={48}
                  height={48}
                  className=" object-contain loader-spinner"
                />
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 text-center mb-6 sm:mb-8 leading-relaxed">
              With us, the world truly is your oyster
            </p>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <span className="text-xl sm:text-2xl font-light text-slate-600">01</span>
              <div className="w-12 sm:w-16 h-px bg-slate-400"></div>
              <div className="flex space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

