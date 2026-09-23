# Policy degli accessi

Questo documento esiste per una ragione sola: rendere le regole discutibili una volta, invece che ogni volta che qualcuno chiede un permesso.

Le righe fra parentesi quadre sono da compilare. Il percorso te le fa compilare nel modulo finale, e a quel punto avrai gli elementi per decidere ciascuna.

## Dove sta il codice aziendale

Tutto il codice dell'azienda vive nell'organizzazione `[nome-organizzazione]`. Nessun repository aziendale sta su account personali. Se ne trovi uno, va trasferito, non copiato.

## Chi puo' essere Owner

Owner dell'organizzazione sono `[numero]` persone: `[nomi]`. Owner e' un potere totale e non revocabile dall'interno: chi lo ha puo' cancellare l'organizzazione.

Regola: almeno due, per non restare chiusi fuori se una persona non e' raggiungibile. Mai piu' di quante ne servono.

## Il permesso di base

Il permesso di base dell'organizzazione e' `[nessuno / lettura]`.

Il permesso di base e' cio' che ogni membro riceve su ogni repository per il solo fatto di essere membro. Se e' impostato su scrittura, ogni nuovo assunto puo' modificare ogni progetto dal primo giorno.

## Come si concedono gli accessi

- L'accesso si da' ai **team**, non alle persone. Una persona entra in un team, il team ha un permesso su un repository
- L'accesso diretto a una persona su un repository e' l'eccezione e va motivato per iscritto
- Il permesso di partenza e' il piu' basso che permette di lavorare. Si sale su richiesta, non per precauzione

## Chi approva cosa

I responsabili di zona sono definiti in `.github/CODEOWNERS`. Modificare quel file richiede l'approvazione di `[chi]`.

## Le protezioni minime su ogni repository

- Proposta di modifica obbligatoria su `main`
- Almeno `[numero]` approvazioni, da persone diverse dall'autore
- Controlli automatici obbligatori
- Cancellazione del branch principale vietata
- Scrittura forzata vietata

## Fornitori esterni

I fornitori esterni non diventano membri dell'organizzazione. Ricevono accesso a un solo repository, con scadenza `[durata]`. La scadenza si verifica il `[giorno del mese]` di ogni mese.

## Revisione periodica

Due volte l'anno, il `[mese]` e il `[mese]`, si rileggono tutti gli accessi e si toglie tutto cio' che non e' piu' giustificato. Responsabile: `[nome]`.
