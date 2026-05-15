const config = {
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-roboto)'],
        bebas: ['var(--font-bebas)'],
      },

      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',

              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
                fontFamily: 'var(--font-bebas)',
              },
            },
          ],
        },

        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },

              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
                fontFamily: 'var(--font-bebas)',
              },
            },
          ],
        },

        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },

              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      },
    },
  },
}

export default config
