import { test } from 'node:test'
import assert from 'node:assert/strict'
import { total } from '../src/cart.js'

test('a line costs price times quantity', () => {
  assert.equal(total([{ price: 2.5, qty: 4 }]), 10)
})

test('totals are rounded to whole cents once', () => {
  assert.equal(total([{ price: 0.1, qty: 3 }]), 0.3)
})
