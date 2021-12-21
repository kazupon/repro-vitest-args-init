import { test, assert, expect } from 'vitest'
import { getLocale } from '../src/utils'

test('1 + 1', () => {
  assert.equal(1 + 1, 2)
  expect({ foo: 1 }).toMatchSnapshot('foo')
})

test('getLocale', () => {
  assert.equal(getLocale(), 'en')
})