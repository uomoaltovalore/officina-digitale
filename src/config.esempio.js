/**
 * Modello di configurazione.
 *
 * Questo file finisce dentro il repository ed e' pubblico. Contiene solo
 * nomi di variabili, mai valori. I valori veri stanno in un file `config.js`
 * che `.gitignore` tiene fuori dal repository, e in produzione arrivano
 * dalle variabili d'ambiente del server.
 *
 * La regola: se una stringa e' un segreto, nel repository ci va il suo NOME,
 * non il suo valore.
 */

module.exports = {
  // Chiave del servizio di invio fatture elettroniche
  chiaveFatturazione: process.env.CHIAVE_FATTURAZIONE,

  // Connessione al database dei clienti
  databaseUrl: process.env.DATABASE_URL,

  // Chiave del servizio di posta
  chiaveEmail: process.env.CHIAVE_EMAIL,
};
