import { test } from 'node:test'
import assert from 'node:assert/strict'
import { total } from '../src/cart.js'

const items = [{ price: 0.1, qty: 3 }]

test('SAVE10 takes 10% off the unrounded sum', () => {
  assert.equal(total(items, 'SAVE10'), 0.27)
})

test('no code leaves the total unchanged', () => {
  assert.equal(total(items), 0.3)
  assert.equal(total(items, undefined), 0.3)
})
