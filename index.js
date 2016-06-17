const CLOCKS = {
  0: '🕛',
  1: '🕐',
  2: '🕑',
  3: '🕒',
  4: '🕓',
  5: '🕔',
  6: '🕕',
  7: '🕖',
  8: '🕗',
  9: '🕘',
  10: '🕙',
  11: '🕚',
  0.5: '🕧',
  1.5: '🕜',
  2.5: '🕝',
  3.5: '🕞',
  4.5: '🕟',
  5.5: '🕠',
  6.5: '🕡',
  7.5: '🕢',
  8.5: '🕣',
  9.5: '🕤',
  10.5: '🕥',
  11.5: '🕦',
};

function timeToEmoji(time, opts) {
  if (!opts) { opts = {}; }
  let hours = null;
  let minutes = null;
  if (opts.utc) {
    if (time.utc && time.utc().hour) {
      hours = time.utc().hour();
      minutes = time.minute();
    } else if (time.getUTCHours) {
      hours = time.getUTCHours();
      minutes = time.getMinutes();
    } else {
      throw new TypeError('Argument is not a Date or momentjs object');
    }
  } else {
    if (time.hour) {
      hours = time.hour();
      minutes = time.minute();
    } else if (time.getHours) {
      hours = time.getHours();
      minutes = time.getMinutes();
    } else {
      throw new TypeError('Argument is not a Date or momentjs object');
    }
  }
  if (hours > 11) { hours = hours - 12; }
  minutes = minutes / 60;
  if (minutes < 0.25) {
    minutes = 0;
  } else if (minutes >= 0.25 && minutes < 0.75) {
    minutes = 0.5;
  } else {
    hours = hours === 11 ? 0 : hours + 1;
    minutes = 0;
  }
  return CLOCKS[hours + minutes];
}

function timeNow() {
  return timeToEmoji(new Date());
}

module.exports = {
  timeToEmoji: timeToEmoji,
  timeNow: timeNow,
};
