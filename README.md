# 🕠 node-emoji-clock: It's time to show time 🕠
[![Build Status](https://travis-ci.org/gazay/node-emoji-clock.svg)](https://travis-ci.org/gazay/node-emoji-clock) [![NPM version](https://badge.fury.io/js/node-emoji-clock.svg)](https://www.npmjs.com/package/node-emoji-clock)

Shows time with emoji

<a href="https://evilmartians.com/?utm_source=node-emoji-clock">
<img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg" alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Install

```
npm install node-emoji-clock
```

## Usage

With `Date` object:
```js
const clock = require('node-emoji-clock');

const time = new Date();
console.log(time);
// 2016-06-17T20:41:02.705Z

console.log(clock.timeToEmoji(time));
// 🕠

console.log(clock.timeToEmoji(time, { utc: true }));
// 🕣

time.setHours(9);
time.setMinutes(12);

console.log(clock.timeToEmoji(time));
// 🕘

console.log(clock.timeToEmoji(time, { utc: true })); // '
// 🕛
```

With [momentjs](http://momentjs.com/) object:
```js
const clock = require('node-emoji-clock');
const moment = require('moment');

const mTime = moment();
console.log(mTime.toString());
// Fri Jun 17 2016 17:41:02 GMT-0300

console.log(clock.timeToEmoji(mTime));
// 🕠

console.log(clock.timeToEmoji(mTime, { utc: true }));
// 🕣

mTime.hour(9);
mTime.minute(12);

console.log(clock.timeToEmoji(mTime));
// 🕘

console.log(clock.timeToEmoji(mTime, { utc: true }));
// 🕛
```

## License

The MIT License
