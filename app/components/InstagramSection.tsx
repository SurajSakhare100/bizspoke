import Image from "next/image"

export default function InstagramSection() {
  const instagramImages = [
    { id: 1, src: "https://picsum.photos/300/300?random=20", alt: "Luxury courtyard with white arches" },
    { id: 2, src: "https://picsum.photos/300/300?random=21", alt: "Blue swimming pool with plants" },
    { id: 3, src: "https://picsum.photos/300/300?random=22", alt: "Elegant resort interior" },
    { id: 4, src: "https://picsum.photos/300/300?random=23", alt: "Luxury hotel lobby" },
    { id: 5, src: "https://picsum.photos/300/300?random=24", alt: "Resort garden area" },
    { id: 6, src: "https://picsum.photos/300/300?random=25", alt: "Hotel terrace view" },
  ]

  return (
    <section className="">
      <div className="py-20">
        <h1 className="text-center text-blue-100 text-2xl sm:text-3xl md:text-4xl font-medium font-dm-sans uppercase leading-tight tracking-widest mb-8 sm:mb-10">
          visit our instagram
        </h1>
        
        {/* Image Carousel */}
        <div className="relative">
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide snap-x snap-mandatory">
            {instagramImages.map((image) => (
              <div key={image.id} className="flex-shrink-0 snap-start">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-lg overflow-hidden duration-300 hover:shadow-lg transition-shadow">
                  <Image  
                    width={320} 
                    height={320}
                    src={image.src}
                    alt={image.alt}
                    className="hover:scale-105 transition-transform duration-500 object-cover w-full h-full"
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="w-16 sm:w-24 h-1 bg-gray-300 rounded-full">
              <div className="w-1/3 h-full bg-blue-100 rounded-full"></div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}

