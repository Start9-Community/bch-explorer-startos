import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bch-explorer',
  title: 'BCH Explorer',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/bch-explorer-startos',
  upstreamRepo: 'https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer',
  marketingUrl: 'https://bchexplorer.cash',
  donationUrl: null,
  description: { short, long },
  volumes: ['main', 'db'],
  images: {
    frontend: {
      source: {
        dockerTag: 'ghcr.io/bitcoincash1/bch-explorer-frontend:3.12.0',
      },
      arch: ['x86_64'],
    },
    backend: {
      source: {
        dockerTag: 'ghcr.io/bitcoincash1/bch-explorer-backend:3.12.0',
      },
      arch: ['x86_64'],
    },
    db: {
      source: { dockerTag: 'mariadb:11.4' },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
