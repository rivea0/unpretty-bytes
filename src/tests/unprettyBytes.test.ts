import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { unprettyBytes } from '../index.js';

describe('unprettyBytes', () => {
  it('should return a plain number as it is', () => {
    assert.deepStrictEqual(unprettyBytes('42'), 42);
  });

  it('should convert 1 kB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 kB'), 1000);
  });
  it('should convert 1 kB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 kilobyte'), 1000);
  });

  it('should convert 1 KiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 KiB', true), 1024);
  });
  it('should convert 1 KiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 kibibyte', true), 1024);
  });

  // TODO: Maybe not, KB is also a common (although wrong) usage
  // See https://web.archive.org/web/20150324153922/https://pacoup.com/2009/05/26/kb-kb-kib-whats-up-with-that
  it('should throw error when kB unit string is incorrect', () => {
    assert.throws(() => unprettyBytes('1 KB'), {
      name: 'Error',
      message:
        "The unit type should be either in base-10 (One of ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] or ['kilobyte', 'megabyte', 'gigabyte', 'terabyte', 'petabyte', 'exabyte', 'zettabyte', 'yottabyte']) or base-2 (One of ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] or ['kibibyte', 'mebibyte', 'gibibyte', 'tebibyte', 'pebibyte', 'exbibyte', 'zebibyte', 'yobibyte']).",
    });
  });

  it('should convert 1 MB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 MB'), 1000 ** 2);
  });
  it('should convert 1 MB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 megabyte'), 1000 ** 2);
  });

  it('should convert 1 MiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 MiB', true), 1024 ** 2);
  });
  it('should convert 1 MiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 mebibyte', true), 1024 ** 2);
  });

  it('should convert 1 GB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 GB'), 1000 ** 3);
  });
  it('should convert 1 GB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 gigabyte'), 1000 ** 3);
  });

  it('should convert 1 GiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 GiB', true), 1024 ** 3);
  });
  it('should convert 1 GiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 gibibyte', true), 1024 ** 3);
  });

  it('should convert 1 TB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 TB'), 1000 ** 4);
  });
  it('should convert 1 TB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 terabyte'), 1000 ** 4);
  });

  it('should convert 1 TiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 TiB', true), 1024 ** 4);
  });
  it('should convert 1 TiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 tebibyte', true), 1024 ** 4);
  });

  it('should convert 1 PB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 PB'), 1000 ** 5);
  });
  it('should convert 1 PB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 petabyte'), 1000 ** 5);
  });

  it('should convert 1 PiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 PiB', true), 1024 ** 5);
  });
  it('should convert 1 PiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 pebibyte', true), 1024 ** 5);
  });

  it('should convert 1 EB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 EB'), 1000 ** 6);
  });
  it('should convert 1 EB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 exabyte'), 1000 ** 6);
  });

  it('should convert 1 EiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 EiB', true), 1024 ** 6);
  });
  it('should convert 1 EiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 exbibyte', true), 1024 ** 6);
  });

  it('should convert 1 ZB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 ZB'), 1000 ** 7);
  });
  it('should convert 1 ZB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 zettabyte'), 1000 ** 7);
  });

  it('should convert 1 ZiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 ZiB', true), 1024 ** 7);
  });
  it('should convert 1 ZiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 zebibyte', true), 1024 ** 7);
  });

  it('should convert 1 YB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 YB'), 1000 ** 8);
  });
  it('should convert 1 YB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 yottabyte'), 1000 ** 8);
  });

  it('should convert 1 YiB correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 YiB', true), 1024 ** 8);
  });
  it('should convert 1 YiB with expanded string correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 yobibyte', true), 1024 ** 8);
  });

  it('should handle plural input for decimal unit', () => {
    assert.deepStrictEqual(unprettyBytes('42 kBs'), 1000 * 42);
  });
  it('should handle plural input for binary unit', () => {
    assert.deepStrictEqual(unprettyBytes('42 KiBs'), 1024 * 42);
  });

  it('should handle plural input for decimal unit with expanded string', () => {
    assert.deepStrictEqual(unprettyBytes('42 kilobytes'), 1000 * 42);
  });
  it('should handle plural input for binary unit with expanded string', () => {
    assert.deepStrictEqual(unprettyBytes('42 kibibytes'), 1024 * 42);
  });

  it('should handle byte correctly', () => {
    assert.deepStrictEqual(unprettyBytes('1 B'), 1);
    assert.deepStrictEqual(unprettyBytes('1 B', true), 1);
    assert.deepStrictEqual(unprettyBytes('1 byte'), 1);
    assert.deepStrictEqual(unprettyBytes('1 byte', true), 1);
    assert.deepStrictEqual(unprettyBytes('42 bytes'), 42);
    assert.deepStrictEqual(unprettyBytes('42 bytes', true), 42);
  });

  it('should handle floating point values', () => {
    assert.deepStrictEqual(unprettyBytes('1.34 kB'), 1000 * 1.34);
    assert.deepStrictEqual(unprettyBytes('1.34 MB'), 1000 ** 2 * 1.34);
    assert.deepStrictEqual(unprettyBytes('1.34 GB'), 1000 ** 3 * 1.34);
    assert.deepStrictEqual(unprettyBytes('1.34 TB'), 1000 ** 4 * 1.34);
    assert.deepStrictEqual(unprettyBytes('1.34 PB'), 1000 ** 5 * 1.34);
    assert.deepStrictEqual(unprettyBytes('1.34 EB'), 1000 ** 6 * 1.34);
    assert.deepStrictEqual(unprettyBytes('1.34 ZB'), 1000 ** 7 * 1.34);
    assert.deepStrictEqual(unprettyBytes('1.34 YB'), 1000 ** 8 * 1.34);
  });

  it('should handle input without space', () => {
    assert.deepStrictEqual(unprettyBytes('42MB'), 1000 ** 2 * 42);
    assert.deepStrictEqual(unprettyBytes('42.5MB'), 1000 ** 2 * 42.5);
    assert.deepStrictEqual(unprettyBytes('42KiB'), 1024 * 42);
    assert.deepStrictEqual(unprettyBytes('42.5KiB', true), 1024 * 42.5);
  });

  it('should behave the same regardless of the binary option when the binary unit is given', () => {
    assert.deepStrictEqual(unprettyBytes('1 KiB'), 1024);
    assert.deepStrictEqual(unprettyBytes('1 KiB', true), 1024);
    assert.deepStrictEqual(unprettyBytes('1 MiB'), 1024 ** 2);
    assert.deepStrictEqual(unprettyBytes('1 MiB', true), 1024 ** 2);
  });

  it('should give correct output when a decimal unit is given and the binary option is specified', () => {
    assert.deepStrictEqual(unprettyBytes('1 kB', true), 1024);
    assert.deepStrictEqual(unprettyBytes('1 kB'), 1000);
  });
});
