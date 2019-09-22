var blinkstick = require('blinkstick'),
    device = blinkstick.findFirst();

if (device) {
  device.blink('lightblue', { 'repeats': 2, 'delay': 100 }, () => {
    setTimeout(() => { device.blink('lightblue', { 'repeats': 3, 'delay': 50})  }, 5000);
  });
  process.stdin.resume();
}

