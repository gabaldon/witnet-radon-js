import { markup2mir } from './markup2mir'
import { Radon } from './radon'
import { mir2markup } from './mir2markup'
import { Mir } from './types'

export { Radon, markup2mir, mir2markup }

export default {
  Radon,
  markup2mir,
  mir2markup,
}

const dr: Mir = {
  name: '',
  description: '',
  radRequest: {
    timelock: 0,
    retrieve: [
      {
        url: '',
        kind: 'HTTP-GET',
        script: [0x45],
      },
    ],
    aggregate: [0x50],
    tally: [0x50],
  },
} 

const result = new Radon(dr)
console.log(result.getMarkup())