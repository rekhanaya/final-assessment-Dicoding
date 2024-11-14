import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Testing sum function', () => {
  // Kasus uji: menambahkan dua bilangan positif
  assert.strictEqual(sum(2, 3), 5);

  // Kasus uji: menambahkan bilangan positif dan negatif
  assert.strictEqual(sum(-2, 3), 1);

  // Kasus uji: menambahkan dua bilangan negatif
  assert.strictEqual(sum(-2, -3), -5);

  // Kasus uji: menambahkan bilangan dengan nol
  assert.strictEqual(sum(0, 0), 0);
});
