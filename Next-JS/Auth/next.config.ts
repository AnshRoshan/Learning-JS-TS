import type { NextConfig } from 'next'

const config: NextConfig = {
  allowedDevOrigins: ['*.e2b.app'],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ]
  },
}
export default config
