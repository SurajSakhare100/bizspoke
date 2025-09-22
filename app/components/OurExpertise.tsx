'use client'

import { ArrowBigUp } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { OurExpertise as OurExpertiseType } from '../../sanity/lib/OurExpertise'
import { urlForImage } from '../../sanity/lib/image'
// import { ErrorFallback, EmptyStateFallback } from './ErrorFallback'
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

const fallbackExpertiseData: ExpertiseItem[] = [
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

interface OurExpertiseProps {
    expertiseData?: OurExpertiseType[]
}

// Component for individual expertise section
const ExpertiseSection = ({ item, index, isSanityData = false }: { item: ExpertiseItem | OurExpertiseType; index: number; isSanityData?: boolean }) => {
    const isEven = index % 2 === 0;
    const number = (index + 1).toString().padStart(2, '0');
    
    // Handle both Sanity data and fallback data
    const title = isSanityData ? (item as OurExpertiseType).title : (item as ExpertiseItem).title;
    const description = isSanityData ? (item as OurExpertiseType).description : (item as ExpertiseItem).description;
    const baseurl = isSanityData ? `/experiences/${(item as OurExpertiseType).slug.current}` : (item as ExpertiseItem).baseurl;
    const category = isSanityData ? "CURATED GETAWAYS" : (item as ExpertiseItem).category;
    const imageAlt = isSanityData ? (item as OurExpertiseType).title : (item as ExpertiseItem).imageAlt;
    
    // Get image source
    const getImageSrc = () => {
        if (isSanityData) {
            const sanityItem = item as OurExpertiseType;
            return sanityItem.image ? urlForImage(sanityItem.image)?.url() : null;
        } else {
            return (item as ExpertiseItem).image;
        }
    };
    
    const imageSrc = getImageSrc();
    
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-center gap-6 lg:gap-10" id="services">
            {/* Image - shows first on odd sections, last on even sections */}
            <div className={`w-full h-64 sm:h-80 lg:h-96 bg-white p-2 sm:p-4 overflow-hidden rounded-sm ${!isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                <Link href={baseurl}>
                    {imageSrc ? (
                        <Image 
                            className="w-full h-full object-cover" 
                            src={imageSrc} 
                            alt={imageAlt} 
                            width={598} 
                            height={384}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    )}
                </Link>
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
                        {category}
                    </div>
                </div>
                
                {/* Content */}
                <div className="w-full flex flex-col justify-start items-start gap-4 sm:gap-6">
                    <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4">
                        <div className="w-full">
                            <div className="text-blue-100 text-2xl sm:text-3xl lg:text-4xl font-medium font-canela leading-tight">
                                {title}
                            </div>
                        </div>
                        <div className="w-full text-blue-100 text-base sm:text-lg lg:text-xl font-normal font-dm-sans leading-relaxed">
                            {description}
                        </div>
                        <Link 
                            href={baseurl} 
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

export default function OurExpertise({ expertiseData }: OurExpertiseProps) {
    const dataToRender = expertiseData && expertiseData.length > 0 ? expertiseData : fallbackExpertiseData;
    const isSanityData = expertiseData && expertiseData.length > 0;

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
                        {dataToRender.map((item, index) => (
                            <ExpertiseSection 
                                key={isSanityData ? (item as OurExpertiseType)._id : (item as ExpertiseItem).id} 
                                item={item} 
                                index={index} 
                                isSanityData={isSanityData}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}