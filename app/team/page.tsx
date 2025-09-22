import React from 'react'
import Team from '../components/team'
import ReachOut from '../components/ReachOut'
import { getTeamMembers } from '../../sanity/lib/team'

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()
  
  return (
    <main className="page-container">
      <div className="content-wrapper">
        <Team teamMembers={teamMembers}/>
        <ReachOut/>
      </div>
    </main>
  )
}