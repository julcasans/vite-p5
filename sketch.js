import { ControlPanel } from './controls.js';

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

function setup() {
  createCanvas(C_WIDTH, C_HEIGHT, P2D);
  colorMode(HSL, 360, 100, 100, 1);
}

function draw() {
  background(params.bg);
  fill(params.fr);
  rect(30, 30, width - 60, height - 60);
}

export { setup, draw };
