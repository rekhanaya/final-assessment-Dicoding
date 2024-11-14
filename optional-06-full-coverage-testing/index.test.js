import sum from "./index.js";
import { strict as assert } from "node:assert";
import test from "node:test";

// Skenario 1: Menguji penjumlahan dua angka positif
test('sum of two positive numbers', () => {
    assert.strictEqual(sum(5, 10), 15);
    assert.strictEqual(sum(3, 7), 10);
});

// Skenario 2: Menguji jika ada parameter yang bukan angka
test('sum with non-number parameters', () => {
    assert.strictEqual(sum('5', 10), 0);
    assert.strictEqual(sum(5, '10'), 0);
    assert.strictEqual(sum('5', '10'), 0);
    assert.strictEqual(sum(null, 10), 0);
    assert.strictEqual(sum(5, undefined), 0);
});

// Skenario 3: Menguji jika ada parameter yang merupakan angka negatif
test('sum with negative numbers', () => {
    assert.strictEqual(sum(-5, 10), 0);
    assert.strictEqual(sum(5, -10), 0);
    assert.strictEqual(sum(-5, -10), 0);
});

// Skenario 4: Menguji jika salah satu atau kedua parameter adalah nol
test('sum with zero values', () => {
    assert.strictEqual(sum(0, 10), 10);
    assert.strictEqual(sum(5, 0), 5);
    assert.strictEqual(sum(0, 0), 0);
});