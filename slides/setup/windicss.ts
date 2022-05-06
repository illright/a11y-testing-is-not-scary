import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  theme: {
    extend: {
      fontFamily: {
        sans: '"Open Sans", sans-serif',
        heading: '"Raleway", sans-serif',
      },
    },
  },
}))
