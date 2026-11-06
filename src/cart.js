// Cart totals for the checkout page. Amounts are numbers in the store currency.
export function lineTotal(item) {
  return item.price * item.qty // kept unrounded; see docs/adr/0001-money.md
}

export function total(items) {
  const sum = items.reduce((acc, item) => acc + lineTotal(item), 0)
  return Math.round(sum * 100) / 100 // rounded to whole cents once, at the end
}
