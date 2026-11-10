// Cart totals for the checkout page. Amounts are numbers in the store currency.
export function lineTotal(item) {
  return Math.round(item.price * item.qty * 100) / 100
}

export function total(items, code) {
  const sum = items.reduce((acc, item) => acc + lineTotal(item), 0)
  const discounted = code === 'SAVE10' ? sum * 0.9 : sum
  return Math.round(discounted * 100) / 100
}

// The n cheapest lines, for the "add more to save" banner.
export function cheapest(items, n) {
  const sorted = [...items].sort((a, b) => a.price - b.price)
  return sorted.slice(0, n - 1)
}
