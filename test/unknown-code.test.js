import { test } from 'node:test'
import assert from 'node:assert/strict'
import { total } from '../src/cart.js'

const items = [{ price: 0.1, qty: 3 }]

test('unknown code throws', () => {
  assert.throws(() => total(items, 'BOGUS'), { message: 'unknown code: BOGUS' })
})

test('SAVE10 still works', () => {
  assert.equal(total(items, 'SAVE10'), 0.27)
})
