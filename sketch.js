import p5 from 'p5';
import { ControlPanel } from './controls.js';

export const sketch = function (p) {
  const pane = new ControlPanel();

  const params = {
    bg: 'hsla(0, 0%, 0%, 1.0)',
    fr: 'hsla(0, 0%, 100%, 1.0)',
  };

  const paramsConfig = {
    bg: { view: 'color' },
    fr: { view: 'color' },
  };

  pane.setParams(params, paramsConfig);

  const C_WIDTH = 600;
  const C_HEIGHT = 600;

  p.setup = function () {
    p.createCanvas(C_WIDTH, C_HEIGHT, p.P2D);
    p.colorMode(p.HSL, 360, 100, 100, 1);
  };

  p.draw = function () {
    p.background(params.bg);
    p.fill(params.fr);
    p.rect(30, 30, p.width - 60, p.height - 60);
  };
};

new p5(sketch);
