---
title: Money is rounded once, at the end
summary: Amounts stay unrounded through every calculation (lines, discounts) and are rounded to whole cents once, as the last step.
reviewed: 2026-11-01
sources: [src/cart.js]
---
# Money is rounded once, at the end

Line totals (price × qty) are kept unrounded. Discounts apply to the unrounded sum. The final amount is
rounded to whole cents once, with `Math.round(x * 100) / 100`, as the very last step.
Rounding earlier (per line, or before a discount) drifts by a cent, so it is not allowed.
