import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const repairMariaDb = sdk.Action.withoutInput(
  'repair-mariadb',

  async () => ({
    name: i18n('Repair MariaDB'),
    description: i18n(
      'Delete the MariaDB transaction-coordinator log (tc.log). Use this when the Database health check reports a crash after an unclean shutdown or a full disk (Bad magic header in tc log). Indexed explorer data is kept.',
    ),
    warning: i18n(
      'Use this only if MariaDB is crash-looping on tc.log, and start the explorer again afterwards. A StartOS Rebuild does not remove that file.',
    ),
    allowedStatuses: 'only-stopped',
    group: i18n('Maintenance'),
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    let removed = 0
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'db' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'db',
        subpath: null,
        mountpoint: '/var/lib/mysql',
        readonly: false,
      }),
      'repair-mariadb',
      async (sub) => {
        const listed = await sub.exec([
          'sh',
          '-c',
          'find /var/lib/mysql -name tc.log -print',
        ])
        removed = listed.stdout
          .toString()
          .split('\n')
          .filter((line) => line.trim().length > 0).length
        await sub.exec([
          'sh',
          '-c',
          'rm -f /var/lib/mysql/tc.log /var/lib/mysql/*/tc.log',
        ])
      },
    )
    return {
      version: '1',
      title: i18n('MariaDB repaired'),
      message:
        removed === 0
          ? i18n('No tc.log was present. Nothing was changed.')
          : i18n(
              'Removed ${count} tc.log file(s). MariaDB recreates a clean log when the explorer next starts. Indexed data was not deleted.',
              { count: String(removed) },
            ),
      result: null,
    }
  },
)
