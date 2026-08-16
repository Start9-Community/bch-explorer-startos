import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.12.0:4',
  releaseNotes: {
    en_US:
      'Backups now keep your settings and skip the index. The explorer database is rebuilt from your node and indexer, so it is no longer copied — the previous attempt to dump it never captured anything anyway, because the database lives in a per-chain folder the dump did not look in. What is kept is the small part that cannot be rebuilt: your node choice and the credential registered on Flowee. Backups are far smaller and far quicker; a restored explorer re-indexes, as it already did.',
    es_ES:
      'Las copias de seguridad ahora conservan tu configuración y omiten el índice. La base de datos del explorador se reconstruye a partir de tu nodo y tu indexador, así que ya no se copia — el intento anterior de volcarla nunca capturaba nada, porque la base de datos vive en una carpeta por cadena en la que el volcado no miraba. Se conserva lo poco que no se puede reconstruir: la elección de nodo y la credencial registrada en Flowee. Las copias son mucho más pequeñas y rápidas; un explorador restaurado se reindexa, como ya hacía.',
    de_DE:
      'Sicherungen bewahren jetzt Ihre Einstellungen und lassen den Index aus. Die Explorer-Datenbank wird aus Ihrem Knoten und Indexer neu aufgebaut und wird deshalb nicht mehr kopiert — der bisherige Dump erfasste ohnehin nichts, da die Datenbank in einem Ordner je Chain liegt, in den er nicht schaute. Erhalten bleibt das Wenige, das sich nicht neu aufbauen lässt: die Knotenauswahl und die bei Flowee registrierte Zugangskennung. Sicherungen sind deutlich kleiner und schneller; ein wiederhergestellter Explorer indexiert neu, wie schon bisher.',
    pl_PL:
      'Kopie zapasowe zachowują teraz ustawienia i pomijają indeks. Baza danych eksploratora jest odtwarzana z Twojego węzła i indeksera, więc nie jest już kopiowana — dotychczasowa próba jej zrzutu i tak niczego nie obejmowała, bo baza leży w folderze osobnym dla każdego łańcucha, do którego zrzut nie zaglądał. Zachowywane jest to, czego nie da się odtworzyć: wybór węzła i poświadczenie zarejestrowane we Flowee. Kopie są znacznie mniejsze i szybsze; przywrócony eksplorator indeksuje od nowa, tak jak dotąd.',
    fr_FR:
      "Les sauvegardes conservent désormais vos réglages et ignorent l'index. La base de données de l'explorateur se reconstruit à partir de votre nœud et de votre indexeur : elle n'est donc plus copiée — la tentative de sauvegarde précédente ne capturait de toute façon rien, la base se trouvant dans un dossier propre à chaque chaîne où elle ne regardait pas. Est conservé le peu qui ne se reconstruit pas : le choix du nœud et l'identifiant enregistré auprès de Flowee. Les sauvegardes sont bien plus petites et rapides ; un explorateur restauré se réindexe, comme auparavant.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
