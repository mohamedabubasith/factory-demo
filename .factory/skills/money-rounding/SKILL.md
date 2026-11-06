---
name: money-rounding
description: Use when code adds, multiplies, discounts or rounds money amounts, such as prices, line totals, discounts or cart totals.
---
# Money rounding

- Floating point sums such as 0.1 * 3 do not equal 0.3 exactly.
- Keep amounts unrounded through every step; round to whole cents once, at the end, with Math.round(x * 100) / 100.
- docs/adr/0001-money.md is the decision this follows.
