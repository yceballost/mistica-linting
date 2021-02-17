import CoreAssistant from '@sketch-hq/sketch-core-assistant'
import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

const assistant: AssistantPackage = async () => {
  return {
    name: 'mistica-linting',
    rules: [],
    config: {
      rules: {
        '@sketch-hq/sketch-core-assistant/library-symbols-allowed-libraries': {
          "active": true,
          "libraries": ["Mistica\ iOS", "Mistica\ Android", "Mistica\ Desktop", "Movistar", "Mistica\ Icons"]
        },
        '@sketch-hq/sketch-core-assistant/text-styles-no-dirty': {
          "active": true,
        },
        '@sketch-hq/sketch-core-assistant/library-layer-styles-allowed-libraries': {
          "active": true,
          "libraries": ["Movistar", "O2", "ClassicO2", "Vivo"]
        },
        '@sketch-hq/sketch-core-assistant/library-text-styles-allowed-libraries': {
          "active": true,
          "libraries": ["Movistar", "O2", "ClassicO2", "Vivo"]
        },
      },
    },
  }
}

export default assistant