import React from 'react'
import Team from '../components/team'
import ReachOut from '../components/ReachOut'
import { getTeamMembers, getTeamSettings } from '../../sanity/lib/team'

export default async function TeamPage() {
  const [teamMembers, teamSettings] = await Promise.all([
    getTeamMembers(),
    getTeamSettings()
  ])
  
  return (
    <main className="page-container">
      <div className="content-wrapper">
        <Team teamMembers={teamMembers} teamSettings={teamSettings}/>
        <ReachOut/>
      </div>
    </main>
  )
}