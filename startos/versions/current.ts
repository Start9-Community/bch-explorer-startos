import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.12.0:5',
  releaseNotes: {
    en_US: `- Requires Bitcoin Cash Node 29.0.0:11 or later.
- Bitcoin Cash Daemon must be at least 0.22.2:1, so the explorer waits for it to finish syncing.
- Select Node Backend preselects nothing until you have chosen a node, and its description says what the explorer asks of each node.`,
    es_ES: `- Requiere Bitcoin Cash Node 29.0.0:11 o posterior.
- Bitcoin Cash Daemon debe ser al menos la 0.22.2:1, para que el explorador espere a que termine de sincronizar.
- Seleccionar nodo no preselecciona nada hasta que hayas elegido un nodo, y su descripción indica qué pide el explorador a cada nodo.`,
    de_DE: `- Erfordert Bitcoin Cash Node 29.0.0:11 oder neuer.
- Bitcoin Cash Daemon muss mindestens 0.22.2:1 sein, damit der Explorer wartet, bis die Synchronisierung abgeschlossen ist.
- Knoten auswählen gibt nichts vor, bis Sie einen Knoten gewählt haben, und die Beschreibung nennt, was der Explorer von jedem Knoten verlangt.`,
    pl_PL: `- Wymaga Bitcoin Cash Node 29.0.0:11 lub nowszego.
- Bitcoin Cash Daemon musi być w wersji co najmniej 0.22.2:1, aby eksplorator czekał na zakończenie jego synchronizacji.
- Wybierz węzeł niczego nie zaznacza wstępnie, dopóki nie wybierzesz węzła, a jego opis podaje, czego eksplorator wymaga od każdego węzła.`,
    fr_FR: `- Nécessite Bitcoin Cash Node 29.0.0:11 ou plus récent.
- Bitcoin Cash Daemon doit être au moins en version 0.22.2:1, afin que l'explorateur attende la fin de sa synchronisation.
- Sélectionner le nœud ne présélectionne rien tant que vous n'avez pas choisi de nœud, et sa description indique ce que l'explorateur demande à chaque nœud.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
