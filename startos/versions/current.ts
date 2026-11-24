import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.14.6:1',
  releaseNotes: {
    en_US: `- BCH Explorer no longer has access to its node’s data volume: it reads only the network and RPC login the node publishes for its dependents, and follows a change to either at once.
- While its node is not installed or is older than Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 or Flowee the Hub 2026.5.2:19, BCH Explorer does not start and says so; it starts by itself once the node is updated. Update your node first.
- Address pages no longer accept a mistyped or truncated address, or one from another chain, as valid.
- Repair MariaDB now runs only while the explorer is stopped, and no longer restarts it.`,
    es_ES: `- BCH Explorer ya no tiene acceso al volumen de datos de su nodo: solo lee la red y el inicio de sesión RPC que el nodo publica para sus dependientes, y sigue al instante cualquier cambio en ellos.
- Mientras su nodo no esté instalado o sea anterior a Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 o Flowee the Hub 2026.5.2:19, BCH Explorer no se inicia y lo indica; se inicia solo en cuanto el nodo se actualiza. Actualice primero su nodo.
- Las páginas de direcciones ya no aceptan como válida una dirección mal escrita, truncada o de otra cadena.
- Reparar MariaDB ahora solo se ejecuta con el explorador detenido y ya no lo reinicia.`,
    de_DE: `- BCH Explorer hat keinen Zugriff mehr auf das Datenvolume seines Knotens: Es liest nur das Netzwerk und die RPC-Anmeldung, die der Knoten für abhängige Dienste veröffentlicht, und folgt einer Änderung daran sofort.
- Solange sein Knoten nicht installiert oder älter als Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 oder Flowee the Hub 2026.5.2:19 ist, startet BCH Explorer nicht und meldet das; sobald der Knoten aktualisiert ist, startet es von selbst. Aktualisieren Sie zuerst Ihren Knoten.
- Adressseiten akzeptieren eine vertippte, abgeschnittene oder zu einer anderen Chain gehörende Adresse nicht mehr als gültig.
- MariaDB reparieren läuft jetzt nur bei gestopptem Explorer und startet ihn nicht mehr neu.`,
    pl_PL: `- BCH Explorer nie ma już dostępu do woluminu danych swojego węzła: odczytuje tylko sieć i dane logowania RPC, które węzeł publikuje dla usług zależnych, i od razu podąża za ich zmianą.
- Dopóki jego węzeł nie jest zainstalowany lub jest starszy niż Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 lub Flowee the Hub 2026.5.2:19, BCH Explorer nie uruchamia się i o tym informuje; uruchamia się sam po aktualizacji węzła. Najpierw zaktualizuj węzeł.
- Strony adresów nie uznają już za prawidłowy adresu z literówką, uciętego ani z innego łańcucha.
- Napraw MariaDB działa teraz tylko przy zatrzymanym eksploratorze i nie uruchamia go już ponownie.`,
    fr_FR: `- BCH Explorer n’a plus accès au volume de données de son nœud : il lit seulement le réseau et l’identifiant RPC que le nœud publie pour ses dépendants, et suit aussitôt tout changement de l’un ou de l’autre.
- Tant que son nœud n’est pas installé ou est antérieur à Bitcoin Cash Node 29.0.0:17, Bitcoin Cash Daemon 0.22.2:8 ou Flowee the Hub 2026.5.2:19, BCH Explorer ne démarre pas et l’indique ; il démarre de lui-même une fois le nœud mis à jour. Mettez d’abord votre nœud à jour.
- Les pages d’adresse n’acceptent plus comme valide une adresse mal saisie, tronquée ou d’une autre chaîne.
- Réparer MariaDB ne s’exécute plus que lorsque l’explorateur est arrêté, et ne le redémarre plus.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
