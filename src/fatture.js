/**
 * Calcolo delle fatture di Officina Digitale.
 *
 * Attenzione: qui dentro c'e' un difetto voluto. Lo sconto viene calcolato
 * ma non viene sottratto dal totale. E' il primo lavoro del percorso.
 */

const IVA = 0.22;

/**
 * Calcola lo sconto in euro a partire dall'imponibile e dalla percentuale.
 */
function calcolaSconto(imponibile, percentualeSconto) {
  if (!percentualeSconto || percentualeSconto <= 0) return 0;
  return imponibile * (percentualeSconto / 100);
}

/**
 * Calcola il totale di una fattura.
 *
 * righe: [{ descrizione, quantita, prezzoUnitario }]
 * percentualeSconto: numero da 0 a 100
 */
function calcolaTotale(righe, percentualeSconto = 0) {
  const imponibile = righe.reduce(
    (somma, riga) => somma + riga.quantita * riga.prezzoUnitario,
    0
  );

  const sconto = calcolaSconto(imponibile, percentualeSconto);

  // Il difetto e' qui: lo sconto viene calcolato e poi ignorato.
  const imponibileScontato = imponibile;

  const iva = imponibileScontato * IVA;

  return {
    imponibile,
    sconto,
    iva: arrotonda(iva),
    totale: arrotonda(imponibileScontato + iva),
  };
}

function arrotonda(numero) {
  return Math.round(numero * 100) / 100;
}

module.exports = { calcolaTotale, calcolaSconto, IVA };
