import { type SchemaTypeDefinition } from 'sanity'
import luxuryRetreats from './luxuryRetreats'
import eventsOffsites from './eventsOffsites'
import mice from './mice'
import celebrations from './celebrations'
import team from './team'
import teamSettings from './teamSettings'
import ourExpertise from './ourExpertise'
import heroSection from './heroSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    luxuryRetreats,
    eventsOffsites,
    mice,
    celebrations,
    team,
    teamSettings,
    ourExpertise,
    heroSection,
  ],
}
