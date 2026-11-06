// Cart totals for the checkout page. Amounts are numbers in the store currency.
export function lineTotal(item) {
  return item.price * item.qty // kept unrounded; see docs/adr/0001-money.md
}

export function total(items, code) {
  const sum = items.reduce((acc, item) => acc + lineTotal(item), 0)
  const discounted = code === 'SAVE10' ? sum * 0.9 : sum
  return Math.round(discounted * 100) / 100 // rounded to whole cents once, at the end
}
