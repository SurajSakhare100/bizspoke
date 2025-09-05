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
    <section className="py-20">
      <div className=" mx-auto">
      <h1 className="text-center justify-start text-[var(--color-blue-100)] text-4xl font-medium font-['DM_Sans'] uppercase leading-[50.40px] tracking-[7.20px]">visit our instagram</h1>
        
        {/* Image Carousel */}
        <div className="relative pt-10">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {instagramImages.map((image) => (
              <div key={image.id} className="flex-shrink-0">
                <div className="w-80 h-80 rounded-lg overflow-hidden  duration-300">
                  <Image  
                  width={320} 
                  height={320}
                    src={image.src}
                    alt={image.alt}
                    className="hover:scale-105 transition-transform duration-500 object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          {/* <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-black/30 rounded-full">
              <div className="w-1/3 h-full bg-black rounded-full"></div>
            </div> 
          </div>*/}
        </div>
      </div>
    </section>
  )
}

