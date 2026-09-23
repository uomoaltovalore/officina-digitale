# Le persone di Officina Digitale

Nove persone, nessuna reale. Servono a rendere concrete le decisioni sugli accessi: ogni volta che il percorso ti chiede "che permesso daresti a questa persona?", la risposta si trova qui.

La colonna **serve davvero** è la sola che conta quando si assegnano i permessi. Il ruolo aziendale non implica il permesso tecnico: il capo dell'azienda non ha bisogno di poter scrivere nel codice, il commerciale sì ha bisogno di poter leggere le segnalazioni dei clienti.

| Persona | Ruolo aziendale | Cosa serve davvero |
|---|---|---|
| Giovanni | Fondatore | Governo dell'azienda: decide chi entra, chi esce, quali regole valgono. Non scrive codice |
| Marta | Responsabile tecnica | Governo tecnico: approva le modifiche delicate, configura le protezioni |
| Luca | Sviluppatore | Scrivere e proporre modifiche al prodotto |
| Sara | Sviluppatrice | Scrivere e proporre modifiche al prodotto |
| Paolo | Commerciale | Leggere e gestire le segnalazioni dei clienti. Non tocca il codice |
| Chiara | Designer | Proporre modifiche alla parte visiva. Non tocca il calcolo delle fatture |
| Nina | Consulente sicurezza | Vedere gli avvisi di sicurezza di tutti i progetti. Non modifica nulla |
| Roberto | Amministrazione | Gestire l'abbonamento e le fatture di GitHub. Nessun accesso al codice |
| Dario | Fornitore esterno | Lavorare su un solo progetto, per tre mesi, poi sparire |

## Le zone del progetto

Servono a decidere chi deve approvare cosa. Il percorso le userà nella lezione sui responsabili di zona.

| Zona | File | Chi ne risponde |
|---|---|---|
| Calcolo fatture | `src/fatture.js`, `test/` | Marta |
| Anagrafica clienti | `src/clienti.js` | Luca |
| Listino | `listino.csv` | Paolo |
| Documenti aziendali | `docs/`, `TEAM.md` | Giovanni |
| Sicurezza | `SECURITY.md`, `.github/workflows/` | Nina |
