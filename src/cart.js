// Cart totals for the checkout page. Amounts are numbers in the store currency.
export function lineTotal(item) {
  return item.price * item.qty // kept unrounded; see docs/adr/0001-money.md
}

const RATES = { SAVE10: 0.9 } // code -> price multiplier

export function total(items, code) {
  const sum = items.reduce((acc, item) => acc + lineTotal(item), 0)
  if (code && !Object.hasOwn(RATES, code)) throw new Error(`unknown code: ${code}`)
  const discounted = code ? sum * RATES[code] : sum
  return Math.round(discounted * 100) / 100 // rounded to whole cents once, at the end
}
