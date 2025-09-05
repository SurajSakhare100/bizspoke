import DestinationsImage from '@/public/images/destinationBg.png'
import Image from 'next/image'
export default function DestinationsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={DestinationsImage}
          alt="Coastal town built into cliffs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Overlay Card */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 text-center mb-8 font-playfair">
              Destinations from all over the world
            </h2>

            {/* Starburst Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>

            <p className="text-xl text-slate-700 text-center mb-8 leading-relaxed">
              With us, the world truly is your oyster
            </p>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-2xl font-light text-slate-600">01</span>
              <div className="w-16 h-px bg-slate-400"></div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

