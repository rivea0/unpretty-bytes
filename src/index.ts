import {
  BYTE_UNITS,
  BIBYTE_UNITS,
  EXPANDED_BYTE_UNITS,
  EXPANDED_BIBYTE_UNITS,
  DISK_SIZE_UNITS,
} from './constants.js';
import { tokenize } from './utils.js';

/*
Parse a human readable data size and return the number of bytes.

Partly based on xolox/python-humanfriendly.
See: https://github.com/xolox/python-humanfriendly/blob/master/humanfriendly/__init__.py#L198

For example:
> unprettyBytes('42')
42
> unprettyBytes('1 kB')
1000
> unprettyBytes('1 kilobyte')
1000
> unprettyBytes('1 KiB')
1024
> unprettyBytes('1 kB', binary = True)
1024
> unprettyBytes('1.5 GB')
1500000000
> unprettyBytes('1.5 GB', binary = True)
1610612736
*/

export function unprettyBytes(size: string, binary = false): number {
  let tokens = tokenize(size);

  if (tokens !== null && typeof tokens[0] === 'number') {
    // When the input is just a number, return it as it is
    if (tokens.length === 1) {
      return +tokens[0];
    }
    if (tokens.length === 2 && typeof tokens[1] === 'string') {
      const unitStr = tokens[1].endsWith('s')
        ? tokens[1].replace(/s+$/, '')
        : tokens[1];

      if (unitStr === 'B' || unitStr === 'byte') {
        return +tokens[0];
      }

      if (
        !(
          BYTE_UNITS.includes(unitStr) ||
          EXPANDED_BYTE_UNITS.includes(unitStr) ||
          BIBYTE_UNITS.includes(unitStr) ||
          EXPANDED_BIBYTE_UNITS.includes(unitStr)
        )
      ) {
        throw new Error(
          "The unit type should be either in base-10 (One of ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] or ['kilobyte', 'megabyte', 'gigabyte', 'terabyte', 'petabyte', 'exabyte', 'zettabyte', 'yottabyte']) or base-2 (One of ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] or ['kibibyte', 'mebibyte', 'gibibyte', 'tebibyte', 'pebibyte', 'exbibyte', 'zebibyte', 'yobibyte']).",
        );
      }

      for (const unit of DISK_SIZE_UNITS) {
        if (
          unitStr === unit.binaryUnit.symbol ||
          unitStr === unit.binaryUnit.name
        ) {
          return +(tokens[0] * unit.binaryUnit.divider);
        }
        if (
          unitStr === unit.decimalUnit.symbol ||
          unitStr === unit.decimalUnit.name
        ) {
          if (binary) {
            return +(tokens[0] * unit.binaryUnit.divider);
          }
          return +(tokens[0] * unit.decimalUnit.divider);
        }
      }
    }
  }
  throw new Error(
    `Failed to parse size! (Input ${size} was tokenized as ${tokens})`,
  );
}
