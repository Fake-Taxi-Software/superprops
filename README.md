# About
SuperProps allows you to validate any variable in **JavaScript** or [**TypeScript**](https://www.npmjs.com/package/typescript)
# Content
- [About](#about)
- [Content](#content)
- [Usage](#usage)
  - [**SuperProps**](#superprops)
  - [**SuperCondition**](#supercondition)
  - [**SuperInterface**](#superinterface)
  - [**SuperTypes**](#supertypes)
  - [**Big Example**](#big-example)
# Usage
## **SuperProps**
Allows you to validate variable types and parametres
```javascript
const { SuperProps, SuperTypes } = require('superprops');
const { string } = SuperTypes;

const username = new SuperProps({
    type: string,
    validation: prop => {
        return prop.length <= 16;
    }
});

console.log(username.check('Jamie Hyneman')); // returns true;
console.log(username.check(1337)); // returns false (because type of username is "number", but expected "string");
console.log(username.check('Jamie Hyneman the Mythbuster')); // returns false (because the username is longer than 16 symbols);
```
## **SuperCondition**
Allows you to validate variables with several types
```javascript
const { SuperProps, SuperTypes, SuperCondition } = require('superprops');
const { string, int } = SuperTypes;
const { or } = SuperCondition;

const id = new SuperProps({
    type: or(string, int)
});

console.log(id.check('203127')); // returns true;
console.log(id.check(1337)); // returns true;
console.log(id.check(10.04)); // returns false (because type of id is "float", but expected "string" or "int");
console.log(id.check([1337, '203127'])); // returns false (because type of id is "array", but expected "string" or "int");
```
## **SuperInterface**
Allows you to validate objects
```javascript
const { SuperInterface, SuperTypes } = require('superprops');
const { string, arrayOf, int } = SuperTypes;

const userdata = new SuperInterface({
    username: string,
    password: string,
    'orders?': arrayOf(int) // "?" in the end of property name means that this property is not required;
});

console.log(userdata.check({
    username: 'javascriptfucksyou',
    password: 'haha, i will not say it, sorry'
})); // returns true;

console.log(userdata.check({
    username: 'javascriptfucksyou',
    password: 'haha, i will not say it, sorry',
    orders: [128398164, 174859364, 178356432]
})); // returns true;

console.log(userdata.check({
    username: 'javascriptfucksyou',
    password: 'haha, i will not say it, sorry',
    orders: [128398164, 174859364, '178356432']
})); // returns false (because type of some child in "orders" is "string", but expected "int");

console.log(userdata.check({
    username: 203127,
    password: 'haha, i will not say it, sorry'
})); // returns false (because type of username is "number", but expected "string");
```
## **SuperTypes**
Allows you to validate variable types
```javascript
const { SuperTypes } = require('superprops');
const { string, number } = SuperTypes;

const username = new SuperTypes('everyonelovesabigfatass');

console.log(username.is(string)); // returns true;
console.log(username.is(number)); // returns false (because type of username is "string");

console.log(username.isString); // returns true;
console.log(username.isNumber); // returns false (because type of username is "string");
```
## **Big Example**
Includes all previous examples
```javascript
const { SuperProps, SuperTypes, SuperCondition, SuperInterface } = require('superprops');
const { arrayOf, string, number, int } = SuperTypes;
const { or } = SuperCondition;

const username = new SuperProps({
    type: string,
    validation: prop => {
        return prop.length <= 32;
    }
});

const id = new SuperProps({
    type: or(string, int),
    validation: (prop, type) => {
        if (type === string) {
            return prop.length <= 32;
        }
        else {
            return String(prop).length <= 32;
        }
    }
});

const item = new SuperInterface({
    name: string,
    id,
    price: number,
    'color?': or(arrayOf(string), string)
});

const userdata = new SuperInterface({
    username,
    password: string,
    id,
    'shoppingCart?': arrayOf(item)
});

console.log(userdata.check({
    username: 'javascriptfucksyou',
    password: 'dirrt',
    id: 1337,
    shoppingCart: [{
        name: 'Fake Taxi Driver Week Pass',
        id: 203127,
        price: 5
    }, {
        name: 'Lamp',
        id: '228305',
        price: 85000,
        color: 'white'
    }, {
        name: 'Keyboard',
        id: 1337228,
        price: 30,
        color: ['grey', 'black']
    }]
})); // returns true
```