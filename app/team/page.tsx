import React from 'react'
import Team from '../components/team'
import ReachOut from '../components/ReachOut'

export default function TeamPage() {
  return (
    <main className="page-container">
      <div className="content-wrapper">
        <Team/>
        <ReachOut/>
      </div>
    </main>
  )
}