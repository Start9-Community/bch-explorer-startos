import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.14.6:0',
  releaseNotes: {
    en_US: `- Updates BCH Explorer to 3.14.6, which adds the Goggles chart of transaction types over time, applies the May 2026 P2S standardness limits, and fixes CashToken display and unconfirmed transactions in address history. See the [full release notes](https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer/-/releases).
- Includes the October 2026 Node.js security fixes.`,
    es_ES: `- Actualiza BCH Explorer a 3.14.6, que añade el gráfico Goggles de tipos de transacción a lo largo del tiempo, aplica los límites de estandaridad P2S de mayo de 2026 y corrige la visualización de CashTokens y las transacciones sin confirmar en el historial de direcciones. Consulta las [notas de la versión completas](https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer/-/releases).
- Incluye las correcciones de seguridad de Node.js de octubre de 2026.`,
    de_DE: `- Aktualisiert BCH Explorer auf 3.14.6. Die Version fügt das Goggles-Diagramm der Transaktionstypen im Zeitverlauf hinzu, wendet die P2S-Standardlimits vom Mai 2026 an und behebt die Anzeige von CashTokens sowie unbestätigte Transaktionen im Adressverlauf. Siehe die [vollständigen Versionshinweise](https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer/-/releases).
- Enthält die Node.js-Sicherheitskorrekturen vom Oktober 2026.`,
    pl_PL: `- Aktualizuje BCH Explorer do wersji 3.14.6, która dodaje wykres Goggles typów transakcji w czasie, stosuje limity standardowości P2S z maja 2026 oraz poprawia wyświetlanie CashTokenów i niepotwierdzone transakcje w historii adresu. Zobacz [pełne informacje o wydaniu](https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer/-/releases).
- Zawiera poprawki bezpieczeństwa Node.js z października 2026.`,
    fr_FR: `- Met à jour BCH Explorer vers 3.14.6, qui ajoute le graphique Goggles des types de transactions dans le temps, applique les limites de standardité P2S de mai 2026 et corrige l'affichage des CashTokens et les transactions non confirmées dans l'historique des adresses. Consultez les [notes de version complètes](https://gitlab.melroy.org/bitcoincash/bitcoin-cash-explorer/-/releases).
- Inclut les correctifs de sécurité Node.js d'octobre 2026.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
