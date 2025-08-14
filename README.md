# @helicohedron/multiple-currency-converter

Function to convert amounts from one currency to multiple currencies.

## Install

```bash
npm i @helicohedron/multiple-currency-converter
```

## Usage

Convert 100 US Dollar to Euro, Australian Dollar, and Japanese Yen. 

See the list of other currency codes here: https://www.iban.com/currency-codes.

```js
import { convertAmount } from '@helicohedron/convert-amount';

console.log(await convertAmount(['USD', ['EUR', 'AUD', 'JPY'], 100]))
```

## Output

Provides an array with two items. First item provides the latest date of conversion (usually one day delayed). Second item provides the converted amounts. 

Due to limitations in the API used, we cannot provide real-time conversion values.

```js
[
  { date: '2025-08-13' },
  { EUR: 85.636964, AUD: 153.366179, JPY: 14806.792712 }
]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

[ISC](https://opensource.org/license/isc-license-txt)