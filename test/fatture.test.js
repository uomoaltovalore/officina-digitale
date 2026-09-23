const test = require("node:test");
const assert = require("node:assert");
const { calcolaTotale, calcolaSconto } = require("../src/fatture");

const righe = [
  { descrizione: "Canone mensile", quantita: 12, prezzoUnitario: 50 },
  { descrizione: "Configurazione iniziale", quantita: 1, prezzoUnitario: 400 },
];
// imponibile = 12 * 50 + 400 = 1000

test("l'imponibile e' la somma delle righe", () => {
  assert.strictEqual(calcolaTotale(righe).imponibile, 1000);
});

test("senza sconto il totale e' imponibile piu' IVA", () => {
  assert.strictEqual(calcolaTotale(righe).totale, 1220);
});

test("lo sconto in euro e' la percentuale dell'imponibile", () => {
  assert.strictEqual(calcolaSconto(1000, 10), 100);
});

test("lo sconto viene sottratto dal totale", () => {
  // 1000 - 10% = 900, piu' IVA 22% = 1098
  assert.strictEqual(calcolaTotale(righe, 10).totale, 1098);
});

test("uno sconto del 100 per cento azzera l'imponibile", () => {
  assert.strictEqual(calcolaTotale(righe, 100).totale, 0);
});
