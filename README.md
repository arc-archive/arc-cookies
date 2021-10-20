# Deprecated

This component is deprecated. Use `@advanced-rest-client/app` instead.

----

A module that contains the logic and the UIs for handle cookies and sessions in Advanced REST Client.

[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-cookies.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-cookies)

[![tests](https://github.com/advanced-rest-client/arc-cookies/actions/workflows/deployment.yml/badge.svg)](https://github.com/advanced-rest-client/arc-cookies/actions/workflows/deployment.yml)

## Usage

### Installation

```sh
npm install --save @advanced-rest-client/arc-cookies
```

### Cookie parser

It parses `set-cookie` header received from the server and produces a Cookie object.

```javascript
import { Cookies } from '@advanced-rest-client/cookie-parser';

const parser = new Cookies('rememberme=1; domain=foo.com; path=/; ssid=Hy1t5e#oj21.876aak;', 'http://bar.com/');
console.log(parser.cookies);
```

which is equivalent to:

```javascript
const cookies = Cookies.parse('...');
```

The second argument is the request URL needed to properly pase cookies.

### Manipulating cookies

The filter function filters out cookies that should not be considered for given URL. This is defined in [https://tools.ietf.org/html/rfc6265](https://tools.ietf.org/html/rfc6265).

```javascript
const instance = new Cookies('a=b; domain=foo.com; path=/;', 'http://sub.foo.com/');
const removed = instance.filter();
console.log(removed); // has the cookies because domain does not match
```

To clear expired cookies just call `clearExpired()` function.

```javascript
const instance = new Cookies('a=b; expires=0;', 'http://sub.foo.com/');
// wait a second here, then
const removed = instance.filter();
console.log(removed); // the cookie expired
```

### Cookie screen

The `cookie-manager` renders the cookies screen in Advanced REST Client. It uses events defined in `@advanced-rest-client/arc-events` to request and to communicate the state.

```html
<cookie-manager listType="default"></cookie-manager>
```

## Development

```sh
git clone https://github.com/advanced-rest-client/arc-cookies
cd arc-cookies
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```
