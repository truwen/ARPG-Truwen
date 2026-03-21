import { createGame } from './game.js';
import { createInput } from './input.js';

function bootstrap() {
  const canvas = document.getElementById('game-canvas');

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Canvas element #game-canvas not found.');
  }

  const input = createInput(canvas);
  const game = createGame(canvas, input);
  game.start();
}

bootstrap();
