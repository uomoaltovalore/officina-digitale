# Uscita di una persona

Da eseguire lo stesso giorno in cui la persona smette di lavorare, non la settimana dopo.

Togliere la persona dall'organizzazione non basta. Restano attivi diversi accessi che sopravvivono alla rimozione, ed e' esattamente li' che si creano i problemi.

1. Rimuovere la persona dall'organizzazione
2. Rimuoverla dai repository dove aveva accesso **diretto**: l'accesso diretto sopravvive alla rimozione dai team
3. Revocare i **token** che aveva creato: un token continua a funzionare finche' non viene revocato
4. Rimuovere le sue **chiavi SSH** e le eventuali **deploy key** che aveva installato sui server
5. Verificare che non fosse l'unico responsabile di qualche zona in `.github/CODEOWNERS`, e sostituirla
6. Verificare che non fosse l'unico Owner
7. Cambiare i **segreti condivisi** che conosceva: password di servizi, chiavi in uso comune
8. Trasferire i repository che aveva creato sul proprio account personale
9. Rileggere il registro attivita' degli ultimi trenta giorni e verificare che non ci sia nulla di anomalo

## Il controllo finale

Cerca il suo nome nel registro attivita' dell'organizzazione il giorno dopo. Se compare qualcosa, un accesso e' rimasto aperto.
