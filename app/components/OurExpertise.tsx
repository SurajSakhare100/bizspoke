'use client'

import { ArrowBigUp } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
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
}

const expertiseData: ExpertiseItem[] = [
    {
        id: 1,
        category: "CURATED GETAWAYS",
        title: "Luxury Retreats",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage1,
        imageAlt: "Luxury overwater bungalow resort"
    },
    {
        id: 2,
        category: "CURATED GETAWAYS",
        title: "Events and Off-sites",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage2,
        imageAlt: "Indoor event with champagne toast"
    },
    {
        id: 3,
        category: "CURATED GETAWAYS",
        title: "Mice",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage3,
        imageAlt: "Luxurious yacht in marina"
    },
    {
        id: 4,
        category: "CURATED GETAWAYS",
        title: "Celebrations",
        description: "Curated getaways that blend relaxation with inspiration — from mindfulness escapes to leadership retreats.",
        image: ExpertiseImage4,
        imageAlt: "Elegant outdoor dining celebration"
    }
]

// Component for individual expertise section
const ExpertiseSection = ({ item, index }: { item: ExpertiseItem; index: number }) => {
    const isEven = index % 2 === 0;
    const number = (index + 1).toString().padStart(2, '0');
    
    return (
        <div className="w-full grid grid-cols-2
         justify-start items-center gap-8 lg:gap-10">
            {/* Image - shows first on odd sections, last on even sections */}
            <div className={`w-full lg:w-[621px] h-64 md:h-80 lg:h-96 bg-white p-4 overflow-hidden ${!isEven ? 'order-1 lg:order-3' : ''}`}>
                <Image className="w-full h-full object-cover" src={item.image} alt={item.imageAlt} width={598} height={384} />
            </div>
            
            {/* Number and Content Container */}
                <div className={`w-full lg:w-[480px] flex flex-col justify-start items-start gap-8 lg:gap-16 ${!isEven ? 'order-2 lg:order-2' : ''}`}>
                {/* Number with yellow line - positioned at the top */}
                <div className="relative w-full flex items-center gap-4">
                    <div className="relative">
                    <div className="opacity-40 text-[var(--color-gray-10)] text-xl md:text-2xl lg:text-[160px] font-bold font-dm-sans leading-none">{number}</div>
                    <div className="w-16 lg:w-20 h-0 outline outline-2 outline-offset-[-1px] outline-[var(--color-yellow-600)] absolute top-1/2 right-2 translate-y-1/2"></div>
                    </div>
                    
                    
                    <div className="text-[var(--color-yellow-600)] text-base font-normal font-dm-sans uppercase leading-snug tracking-[2.56px]">{item.category}</div>
                </div>
                
                {/* Content */}
                <div className="w-full flex flex-col justify-start items-start gap-7">
                    <div className="w-full flex flex-col justify-start items-start gap-2.5 md:pl-20">
                        <div className="w-full inline-flex justify-start items-center gap-1.5">
                            <div className="text-[var(--color-blue-100)] text-3xl md:text-4xl font-medium font-canela leading-tight">{item.title}</div>
                        </div>
                        <div className="w-full text-[var(--color-blue-100)] text-lg md:text-xl  font-normal font-dm-sans leading-loose">{item.description}</div>
                        <div className="inline-flex justify-start items-center gap-1.5">
                        <div className="text-[var(--color-yellow-600)] text-xl md:text-2xl font-medium font-dm-sans leading-loose">Know more</div>
                        <ArrowBigUp strokeWidth={2} className='w-5 h-5 md:w-6 md:h-6 rotate-45 text-[var(--color-yellow-600)]' />
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default function OurExpertise() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-20 lg:py-28 bg-[var(--color-bg-expertise)] flex justify-center font-medium font-dm-sans items-center overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col justify-start items-center gap-16 md:gap-20 lg:gap-24">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center text-[var(--color-blue-100)] text-4xl font-medium font-dm-sans uppercase leading-[50.40px] tracking-[7.20px]">our expertise</div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-16 md:gap-20 lg:gap-28">
                    {expertiseData.map((item, index) => (
                        <ExpertiseSection key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}