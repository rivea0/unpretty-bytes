import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { tokenize } from '../utils.js';

describe('tokenize', () => {
  it('should tokenize a single integer', () => {
    assert.deepStrictEqual(tokenize('42'), [42]);
  });

  it('should tokenize a floating-point number', () => {
    assert.deepStrictEqual(tokenize('42.5'), [42.5]);
  });

  it('should tokenize integer with unit string', () => {
    assert.deepStrictEqual(tokenize('42 MB'), [42, 'MB']);
  });

  it('should tokenize integer with unit string without a space', () => {
    assert.deepStrictEqual(tokenize('42MB'), [42, 'MB']);
  });

  it('should tokenize floating point number with unit string', () => {
    assert.deepStrictEqual(tokenize('42.5 MB'), [42.5, 'MB']);
  });

  it('should tokenize floating point number with unit string without a space', () => {
    assert.deepStrictEqual(tokenize('42.5MB'), [42.5, 'MB']);
  });
});
