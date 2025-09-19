'use client'

import { ArrowBigUp } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import ExpertiseImage1 from '@/public/images/ex1.png'
import ExpertiseImage2 from '@/public/images/ex2.png'
import ExpertiseImage3 from '@/public/images/ex3.png'
import ExpertiseImage4 from '@/public/images/ex4.png'

interface ExpertiseItem {
    id: number
    category: string
    title: string
    description: string
    image: StaticImageData
    imageAlt: string
    baseurl: string
}

const expertiseData: ExpertiseItem[] = [
    {
        id: 1,
        category: "CURATED GETAWAYS",
        title: "Luxury Retreats",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage1,
        imageAlt: "Luxury overwater bungalow resort",
        baseurl: "/experiences/retreats"
    },
    {
        id: 2,
        category: "CURATED GETAWAYS",
        title: "Events and Off-sites",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage2,
        imageAlt: "Indoor event with champagne toast",
        baseurl: "/experiences/events"
    },
    {
        id: 3,
        category: "CURATED GETAWAYS",
        title: "Mice",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage3,
        imageAlt: "Luxurious yacht in marina",
        baseurl: "/experiences/mice"
    },
    {
        id: 4,
        category: "CURATED GETAWAYS",
        title: "Celebrations",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage4,
        imageAlt: "Elegant outdoor dining celebration",
        baseurl: "/experiences/celebrations"
    }
]

// Component for individual expertise section
const ExpertiseSection = ({ item, index }: { item: ExpertiseItem; index: number }) => {
    const isEven = index % 2 === 0;
    const number = (index + 1).toString().padStart(2, '0');
    
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-center gap-6 lg:gap-10" id="services">
            {/* Image - shows first on odd sections, last on even sections */}
            <div className={`w-full h-64 sm:h-80 lg:h-96 bg-white p-2 sm:p-4 overflow-hidden rounded-sm ${!isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                <Link href={item.baseurl}>
                <Image 
                    className="w-full h-full object-cover" 
                    src={item.image} 
                    alt={item.imageAlt} 
                    width={598} 
                    height={384}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                /></Link>
            </div>
            
            {/* Number and Content Container */}
            <div className={`w-full flex flex-col justify-start items-start gap-6 lg:gap-8 ${!isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                {/* Number with yellow line - positioned at the top */}
                <div className="relative w-full flex flex-row items-center sm:items-start sm:items-center gap-4">
                    <div className="relative">
                        <div className="opacity-40 text-[#A6BDCB] text-6xl md:text-8xl lg:text-[100px] xl:text-[160px] font-bold font-dm-sans leading-none">
                            {number}
                        </div>
                        <div className="w-8 sm:w-16 lg:w-16 h-0 outline outline-1 outline-offset-[-1px] outline-[#B78311] absolute top-1/2 right-1 sm:right-2 translate-y-1/2"></div>
                    </div>
                    <div className="text-yellow-600 text-sm sm:text-base font-normal font-dm-sans uppercase leading-snug tracking-wider">
                        {item.category}
                    </div>
                </div>
                
                {/* Content */}
                <div className="w-full flex flex-col justify-start items-start gap-4 sm:gap-6">
                    <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4">
                        <div className="w-full">
                            <div className="text-blue-100 text-2xl sm:text-3xl lg:text-4xl font-medium font-canela leading-tight">
                                {item.title}
                            </div>
                        </div>
                        <div className="w-full text-blue-100 text-base sm:text-lg lg:text-xl font-normal font-dm-sans leading-relaxed">
                            {item.description}
                        </div>
                        <Link 
                            href={item.baseurl} 
                            className="inline-flex justify-start items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer group touch-target"
                        >
                            <div className="text-yellow-600 text-lg sm:text-xl font-medium font-dm-sans leading-loose group-hover:text-yellow-500 transition-colors">
                                Know more
                            </div>
                            <ArrowBigUp strokeWidth={2} className='w-5 h-5 sm:w-6 sm:h-6 rotate-45 text-yellow-600 group-hover:text-yellow-500 transition-colors' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function OurExpertise() {
    return (
        <section className="w-full section-padding bg-bg-expertise flex justify-center font-medium font-dm-sans items-center overflow-hidden">
            <div className="container-responsive">
                <div className="w-full flex flex-col justify-start items-center gap-12 sm:gap-16 lg:gap-20">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center text-blue-100 text-2xl sm:text-3xl md:text-4xl font-medium font-dm-sans uppercase leading-tight tracking-widest">
                            our expertise
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-12 sm:gap-16 lg:gap-20">
                        {expertiseData.map((item, index) => (
                            <ExpertiseSection key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}