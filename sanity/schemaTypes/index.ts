import { type SchemaTypeDefinition } from 'sanity'
import luxuryRetreats from './luxuryRetreats'
import eventsOffsites from './eventsOffsites'
import mice from './mice'
import celebrations from './celebrations'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    luxuryRetreats,
    eventsOffsites,
    mice,
    celebrations,
  ],
}
