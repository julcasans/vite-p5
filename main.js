import * as $p5 from './sketch.js';

Object.keys($p5).forEach((k) => {
  window[k] = $p5[k];
});
