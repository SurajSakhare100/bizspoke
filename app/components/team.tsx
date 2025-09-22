'use client'

import React from 'react'
import Image from 'next/image'
import { type TeamMember } from '../../sanity/lib/team'
import { urlForImage } from '../../sanity/lib/image'
import { EmptyStateFallback } from './ErrorFallback'

interface TeamProps {
  teamMembers?: TeamMember[]
}

function Team({ teamMembers }: TeamProps) {
  const members = teamMembers || []

  if (!members || members.length === 0) {
    return (
      <section className="">
        <div className="pt-16 pb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-blue-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-canela-trial leading-tight text-balance">
              The Bizspoke Team
            </h2>
            <p className="max-w-4xl mx-auto mt-4 sm:mt-6 text-center text-blue-100 text-base sm:text-lg md:text-xl font-normal font-dm-sans leading-relaxed text-balance">
              Meet our team - we&apos;re the behind-the-scenes experience designers trusted by top-tier companies to run their events calendar like clockwork.
            </p>
          </div>
          <EmptyStateFallback
            title="Team Members Coming Soon"
            message="We're updating our team section. Please check back soon!"
            className="bg-[#DDE7ED] rounded-lg"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="">
      <div className="pt-16 pb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-blue-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-canela-trial leading-tight text-balance">
            The Bizspoke Team
          </h2>
          <p className="max-w-4xl mx-auto mt-4 sm:mt-6 text-center text-blue-100 text-base sm:text-lg md:text-xl font-normal font-dm-sans leading-relaxed text-balance">
            Meet our team - we&apos;re the behind-the-scenes experience designers trusted by top-tier companies to run their events calendar like clockwork.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 sm:gap-4 snap-x snap-mandatory pb-4">
            {members.map((member, idx) => {
              const imageUrl = member.image ? urlForImage(member.image)?.url() : null
              
              return (
                <div key={member._id || `${member.name}-${idx}`} className="w-full px-4 sm:px-5 pt-4 sm:pt-5 pb-6 sm:pb-7  flex flex-col items-center snap-start transition-shadow duration-300">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative overflow-hidden">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-center grayscale transition-all duration-300"
                        sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="mt-3 sm:mt-4 text-blue-100 text-lg sm:text-xl font-bold font-dm-sans uppercase tracking-wide text-center">
                    {member.name || 'Team Member'}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team