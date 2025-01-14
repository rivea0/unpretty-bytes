import { createSizeUnit, createCombineUnit } from './utils.js';

// base-10
export const BYTE_UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

// base-2
export const BIBYTE_UNITS = [
  'B',
  'KiB',
  'MiB',
  'GiB',
  'TiB',
  'PiB',
  'EiB',
  'ZiB',
  'YiB',
];

export const EXPANDED_BYTE_UNITS = [
  'kilobyte',
  'megabyte',
  'gigabyte',
  'terabyte',
  'petabyte',
  'exabyte',
  'zettabyte',
  'yottabyte',
];

export const EXPANDED_BIBYTE_UNITS = [
  'kibibyte',
  'mebibyte',
  'gibibyte',
  'tebibyte',
  'pebibyte',
  'exbibyte',
  'zebibyte',
  'yobibyte',
];

// Common disk size units in decimal (base-10) and binary (base-2) multiples.
export const DISK_SIZE_UNITS = [
  createCombineUnit(
    createSizeUnit(1000 ** 1, 'kB', 'kilobyte'),
    createSizeUnit(1024 ** 1, 'KiB', 'kibibyte'),
  ),
  createCombineUnit(
    createSizeUnit(1000 ** 2, 'MB', 'megabyte'),
    createSizeUnit(1024 ** 2, 'MiB', 'mebibyte'),
  ),
  createCombineUnit(
    createSizeUnit(1000 ** 3, 'GB', 'gigabyte'),
    createSizeUnit(1024 ** 3, 'GiB', 'gibibyte'),
  ),
  createCombineUnit(
    createSizeUnit(1000 ** 4, 'TB', 'terabyte'),
    createSizeUnit(1024 ** 4, 'TiB', 'tebibyte'),
  ),
  createCombineUnit(
    createSizeUnit(1000 ** 5, 'PB', 'petabyte'),
    createSizeUnit(1024 ** 5, 'PiB', 'pebibyte'),
  ),
  createCombineUnit(
    createSizeUnit(1000 ** 6, 'EB', 'exabyte'),
    createSizeUnit(1024 ** 6, 'EiB', 'exbibyte'),
  ),
  createCombineUnit(
    createSizeUnit(1000 ** 7, 'ZB', 'zettabyte'),
    createSizeUnit(1024 ** 7, 'ZiB', 'zebibyte'),
  ),
  createCombineUnit(
    createSizeUnit(1000 ** 8, 'YB', 'yottabyte'),
    createSizeUnit(1024 ** 8, 'YiB', 'yobibyte'),
  ),
] as const;
