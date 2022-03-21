const materials = [
  {
    id: 1,
    name: 'coconut wax',
    stockLevel: 10,
    minLevel: 5,
    unitCost: 1.5,
    unitType: 'lb',
    sku: 'COC-WX',
    supplier: 'Wooden Wick',
    category: 'Wax',
    lastOrdered: '2020-01-01',
  },
  {
    id: 2,
    name: 'satin soy wax',
    stockLevel: 5,
    minLevel: 2,
    unitCost: 2.5,
    unitType: 'lb',
    sku: 'SAT-WX',
    supplier: 'Wooden Wick',
    category: 'Wax',
    lastOrdered: '2020-01-01',
  },
];

const formulas = [
  {
    id: 1,
    name: '14 oz Candle',
    containerFill: '12 oz',
    fragranceLoad: '1.38 oz',
    waxAmount: '10 oz',
    notes: 'Not icluding exhancements',
  },
];

const products = [
  {
    id: 1,
    name: '14 oz Candle',
    stockLevel: 30,
    minLevel: 5,
    unitCost: 1.5,
    unitType: 'pcs',
    sku: 'CAND-14',
    category: 'Candles',
  },
];

export { materials, formulas, products };
