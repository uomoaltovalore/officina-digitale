/**
 * Anagrafica clienti di Officina Digitale.
 */

const clienti = [
  { id: 1, ragioneSociale: "Bar Centrale", partitaIva: "01234567890", scontoAbituale: 0 },
  { id: 2, ragioneSociale: "Autofficina Rossi", partitaIva: "09876543210", scontoAbituale: 10 },
  { id: 3, ragioneSociale: "Studio Bianchi", partitaIva: "05555555550", scontoAbituale: 5 },
];

function trovaCliente(id) {
  return clienti.find((cliente) => cliente.id === id) || null;
}

function scontoDelCliente(id) {
  const cliente = trovaCliente(id);
  return cliente ? cliente.scontoAbituale : 0;
}

function elencoClienti() {
  return clienti.map((cliente) => cliente.ragioneSociale);
}

module.exports = { trovaCliente, scontoDelCliente, elencoClienti };
