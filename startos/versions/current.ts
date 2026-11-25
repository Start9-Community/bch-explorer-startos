import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.14.6:2',
  releaseNotes: {
    en_US:
      "The Web UI no longer serves the explorer backend's internal maintenance endpoints.",
    es_ES:
      'La interfaz web ya no expone los endpoints internos de mantenimiento del backend del explorador.',
    de_DE:
      'Die Weboberfläche stellt die internen Wartungsendpunkte des Explorer-Backends nicht mehr bereit.',
    pl_PL:
      'Interfejs WWW nie udostępnia już wewnętrznych punktów końcowych konserwacji backendu eksploratora.',
    fr_FR:
      'L’interface web n’expose plus les points de terminaison de maintenance internes du backend de l’explorateur.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
