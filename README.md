# unpretty-bytes

> Convert a human-readable string to bytes: `1 GiB` → `1073741824`

Similar to [pretty-bytes](https://github.com/sindresorhus/pretty-bytes), but in reverse.
Partly based on [python-humanfriendly](https://github.com/xolox/python-humanfriendly).

_It uses base-10 (e.g., kilobyte), but the option for binary (base-2) can be given._

## Install

To install as a dependency from GitHub, run:

```
npm install github:rivea0/unpretty-bytes
```

_**Or**, to use locally, clone the repository:_

```
git clone git@github.com:rivea0/unpretty-bytes.git
```

_`cd` into it:_

```
cd unpretty-bytes
```

_Install dependencies:_

```
npm install
```

_Compile TypeScript to create `dist` folder:_

```
npm run build
```

## Usage

```js
import unprettyBytes from 'unpretty-bytes';

unprettyBytes('42');
// -> 42

unprettyBytes('1 kB');
// -> 1000

// With binary option true
unprettyBytes('1 kB', true);
// -> 1024

// Works with expanded unit strings
unprettyBytes('1 kilobyte');
// -> 1000

// Works with base-2 units
unprettyBytes('1 KiB');
// -> 1024
```

### Note

When you pass a base-2 ("bibyte") unit, it's by default a binary unit.

So, doing this:

```js
unprettyBytes('1 KiB');
// -> 1024
```

is the same as:

```js
unprettyBytes('1 KiB', true);
// -> 1024
```

However, you can pass in a byte unit like this:

```js
unprettyBytes('1 kB');
// -> 1000
```

And, also demand it to be in binary:

```js
unprettyBytes('1 kB', true);
// -> 1024
```

The reason is to avoid confusion, as base-10 units are seemingly used more commonly, especially in everyday speech.

### Note about "kB"

> _In the SI system, a lower case k represents a thousand, a capital M represents a million, a capital G represents a billion, etc._

The gist is that case sensitivity matters, for example, "1 kb" is "1 kilobit." So, "1 KB" is essentially meaningless as "K" refers to the degree Kelvin.

## License

MIT
