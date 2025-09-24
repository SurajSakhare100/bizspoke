'use client'

import React from 'react'
import Image from 'next/image'
import { type TeamMember, type TeamSettings } from '../../sanity/lib/team'
import { urlForImage } from '../../sanity/lib/image'
import { EmptyStateFallback } from './ErrorFallback'

interface TeamProps {
  teamMembers?: TeamMember[]
  teamSettings?: TeamSettings | null
}

function TeamCard({ member }: { member: TeamMember }) {
  const imageUrl = member.image ? urlForImage(member.image)?.url() : null

  return (
    <div className="flex flex-col items-center group bg-gray-100 p-8 group-hover:shadow-lg group-hover:scale-105 flex-shrink-0">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden transition-all p-4 sm:p-6 duration-300   ">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={member.name}
            fill
            className="object-cover object-center transition-transform grayscale"
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-lg sm:text-xl font-bold font-dm-sans text-blue-100 uppercase tracking-wide">
          {member?.name}
        </h3>
        {/* <p className="text-sm sm:text-base text-blue-600 font-medium font-dm-sans mt-1">
          {member?.position}
        </p> */}
      </div>
    </div>
  )
}

function Team({ teamMembers, teamSettings }: TeamProps) {
  const members = teamMembers || []
  const settings = teamSettings

  if (!members || members.length === 0) {
    return (
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-blue-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-canela-trial leading-tight text-balance">
              The Bizspoke Team
            </h2>
            <p className="max-w-4xl mx-auto mt-4 sm:mt-6 text-center text-blue-100 text-base sm:text-lg md:text-xl font-normal font-dm-sans leading-relaxed text-balance">
              {settings?.teamDescription || "Meet our team - we&apos;re the behind-the-scenes experience designers trusted by top-tier companies to run their events calendar like clockwork."}
            </p>
          </div>
          <EmptyStateFallback
            title="Team Members Coming Soon"
            message="We&apos;re updating our team section. Please check back soon!"
            className="bg-[#DDE7ED] rounded-lg"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white">
      <div className=" mx-auto px-4 py-16">


        {/* Team Description */}
        <div className="text-center mb-12">
          <h2 className="text-blue-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-canela-trial leading-tight text-balance">
            The Bizspoke Team
          </h2>
          <p className="max-w-4xl mx-auto mt-4 sm:mt-6 text-center text-blue-100 text-base sm:text-lg md:text-xl font-normal font-dm-sans leading-relaxed text-balance">
            {settings?.teamDescription || "Meet our team - we&apos;re the behind-the-scenes experience designers trusted by top-tier companies to run their events calendar like clockwork."}
          </p>
          {/* Group Photo Section */}
          {settings?.groupPhoto && (
            <div className="mt-16">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg w-full sm:w-[80%] mx-auto ">
                <Image
                  src={urlForImage(settings.groupPhoto)?.url() || ''}
                  alt={settings.groupPhotoAlt || 'Bizspoke Team'}
                  fill
                  className="object-cover object-center grayscale"
                  sizes="w-full sm:[80%]"
                  priority
                />

              </div>
            </div>
          )}
        </div>
        <div className="text-center mb-12">
          <h2 className="text-blue-100 text-2xl md:text-3xl lg:text-5xl font-bold font-canela mb-2">
            Our Team
          </h2>
          <p className="text-blue-100 text-sm md:text-base  lg:text-xl  font-dm-sans">
            The people behind Bizspoke&apos;s success
          </p>
        </div>

        {/* Team Members Row - Horizontal Scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 pb-4 min-w-max">
            {members.map((member) => (
              <TeamCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team