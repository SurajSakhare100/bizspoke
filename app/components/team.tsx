import React from 'react'
import Image from 'next/image'

type TeamMember = {
  name: string
  imageUrl: string
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: 'John', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Rebecca', imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
  { name: 'John', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'John', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Rebecca', imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
  { name: 'John', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

function Team() {
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
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={`${member.name}-${idx}`} className="w-full px-4 sm:px-5 pt-4 sm:pt-5 pb-6 sm:pb-7 bg-[#DDE7ED]  flex flex-col items-center snap-start hover:shadow-lg transition-shadow duration-300">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative overflow-hidden ">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-center grayscale transition-all duration-300"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  />
                </div>
                <div className="mt-3 sm:mt-4 text-blue-100 text-lg sm:text-xl font-bold font-dm-sans uppercase tracking-wide text-center">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team