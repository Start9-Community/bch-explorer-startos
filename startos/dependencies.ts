import { T } from '@start9labs/start-sdk'
import { autoconfig as bchdAutoconfig } from 'bitcoin-cash-daemon-startos/startos/actions/config/autoconfig'
import { autoconfig as bchnAutoconfig } from 'bitcoin-cash-node-startos/startos/actions/config/autoconfig'
import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import {
  bchdDescription,
  bchnDescription,
  floweeDescription,
  fulcrumDescription,
} from './manifest/i18n'
import { sdk } from './sdk'
import { INDEXER_ID, NodeId } from './utils'

const selected = async (effects: T.Effects, node: NodeId) =>
  ((await storeJson.read((s) => s.nodePackageId).const(effects)) ??
    'bitcoincashd') === node

const confirmed = async (effects: T.Effects) =>
  !!(await storeJson.read((s) => s.nodeConfirmed).const(effects))

const bitcoincashd = sdk.Dependency.optional('bitcoincashd', {
  description: bchnDescription,
  metadata: {
    title: 'Bitcoin Cash Node',
    icon: 'https://raw.githubusercontent.com/Start9-Community/bitcoin-cash-node-startos/master/icon.png',
  },
  versionRange: '>=29.0.0:11',
  kind: 'running',
  healthChecks: ['primary', 'sync-progress'],
  enabled: async ({ effects }) => selected(effects, 'bitcoincashd'),
}).withInit(async (effects) => {
  if (!(await confirmed(effects))) return
  await sdk.action.createTask(
    effects,
    'bitcoincashd',
    bchnAutoconfig,
    'critical',
    {
      input: {
        kind: 'partial',
        accept: [{ txindex: true }],
        set: { txindex: true },
      },
      when: { condition: 'input-not-matches', once: false },
      reason: i18n(
        'BCH Explorer looks up arbitrary transactions, which needs the full transaction index',
      ),
    },
  )
})

const bchd = sdk.Dependency.optional('bchd', {
  description: bchdDescription,
  metadata: {
    title: 'Bitcoin Cash Daemon',
    icon: 'https://raw.githubusercontent.com/Start9-Community/bitcoin-cash-daemon-startos/master/icon.png',
  },
  versionRange: '>=0.22.2:1',
  kind: 'running',
  // BCHD serves RPC over its own TLS, which the explorer backend cannot
  // speak, so it is dialed through BCHD's plaintext proxy daemon.
  healthChecks: ['primary', 'sync-progress', 'rpc-plaintext'],
  enabled: async ({ effects }) => selected(effects, 'bchd'),
}).withInit(async (effects) => {
  if (!(await confirmed(effects))) return
  await sdk.action.createTask(effects, 'bchd', bchdAutoconfig, 'critical', {
    input: {
      kind: 'partial',
      accept: [{ txindex: true, prune: 0 }],
      set: { txindex: true, prune: 0 },
    },
    when: { condition: 'input-not-matches', once: false },
    reason: i18n(
      'BCH Explorer looks up arbitrary transactions, which needs an unpruned node and the full transaction index',
    ),
  })
})

// Flowee's credential task is raised by Select Node Backend instead: Flowee
// keeps only a hash and reports no current input, so `input-not-matches` here
// would re-raise it on every init.
const flowee = sdk.Dependency.optional('flowee', {
  description: floweeDescription,
  metadata: {
    title: 'Flowee the Hub',
    icon: 'https://raw.githubusercontent.com/Start9-Community/flowee-the-hub-startos/master/icon.png',
  },
  versionRange: '>=2026.5.2:12',
  kind: 'running',
  healthChecks: ['primary', 'sync-progress'],
  enabled: async ({ effects }) => selected(effects, 'flowee'),
})

const fulcrumBch = sdk.Dependency.required(INDEXER_ID, {
  description: fulcrumDescription,
  metadata: {
    title: 'Fulcrum BCH',
    icon: 'https://raw.githubusercontent.com/Start9-Community/fulcrum-bch-startos/master/icon.png',
  },
  versionRange: '>=2.1.1:17',
  kind: 'running',
  healthChecks: ['primary', 'sync-progress'],
})

export const dependencies = sdk.Dependencies.of()
  .addDependency(bitcoincashd)
  .addDependency(bchd)
  .addDependency(flowee)
  .addDependency(fulcrumBch)
