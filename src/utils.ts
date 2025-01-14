/*
Tokenize a string into numbers and strings.
Parses integer and floating point numbers, 
ignores whitespace and can separate numbers from strings even without whitespace.

For example:

> tokenize('42')
[ 42 ]
> tokenize('42MB')
[ 42, 'MB' ]
> tokenize('42.5MB')
[ 42.5, 'MB' ]
> tokenize('42.5 MB')
[ 42.5, 'MB' ]

Partly based on https://github.com/xolox/python-humanfriendly/blob/master/humanfriendly/text.py#L402.
*/
export function tokenize(text: string): (string | number)[] {
  let tokenizedInput = [];
  const numberRe = /(\d+(?:\.\d+)?)/;

  for (let token of text.split(numberRe)) {
    token = token.trim();
    // Parse a floating-point number
    if (token.match(/\d+\.\d+/)) {
      tokenizedInput.push(parseFloat(token));
      // Parse an integer
    } else if (!isNaN(parseInt(token)) && Number.isInteger(+token)) {
      tokenizedInput.push(parseInt(token));
      // Push the remaining string as is
    } else if (!!token) {
      tokenizedInput.push(token);
    }
  }

  return tokenizedInput;
}

interface ISizeUnit {
  divider: number;
  symbol: string;
  name: string;
};

interface ICombinedUnit {
  decimalUnit: ISizeUnit;
  binaryUnit: ISizeUnit;
}

export function createSizeUnit(divider: number, symbol: string, name: string): ISizeUnit {
  return { divider, symbol, name }
}

export function createCombineUnit(decimalUnit: ISizeUnit, binaryUnit: ISizeUnit): ICombinedUnit {
  return { decimalUnit, binaryUnit };
}
