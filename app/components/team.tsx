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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-Blue-100 text-5xl md:text-7xl font-medium font-['Canela_Trial'] leading-tight md:leading-[98px]">The Bizspoke Team</h2>
        <p className="max-w-3xl mx-auto mt-6 text-center text-Blue-100 text-lg md:text-xl font-normal font-['DM_Sans'] leading-relaxed">
          Meet our team - we&apos;re the behind-the-scenes experience designers trusted by top-tier companies to run their events calendar like clockwork.
        </p>

        <div className="mt-12 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 snap-x snap-mandatory">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={`${member.name}-${idx}`} className="min-w-[260px] sm:min-w-[280px] px-5 pt-5 pb-7 bg-[#DDE7ED] rounded-xl flex flex-col items-center snap-start">
                <div className="w-64 h-64 relative overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-center grayscale"
                    sizes="256px"
                  />
                </div>
                <div className="mt-4 text-black text-xl font-bold font-['DM_Sans'] uppercase tracking-wide">{member.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team