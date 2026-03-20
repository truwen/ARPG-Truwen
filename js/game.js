import { createPlayer, updatePlayer, canAttack, triggerAttack } from './player.js';
import { createEnemy, updateEnemy } from './enemy.js';
import { resolveEnemyContactDamage, resolvePlayerAttack } from './combat.js';
import { renderGame } from './renderer.js';

export function createGame(canvas, input) {
  const ctx = canvas.getContext('2d');

  const state = {
    running: true,
    player: createPlayer(canvas.width * 0.25, canvas.height * 0.5),
    enemy: createEnemy(canvas.width * 0.75, canvas.height * 0.5),
  };

  let lastTime = performance.now();

  function update(deltaSeconds) {
    if (!state.running) {
      return;
    }

    const move = input.getMoveVector();
    updatePlayer(state.player, move, deltaSeconds, canvas);

    if (input.consumeAttack() && canAttack(state.player) && state.player.health > 0) {
      triggerAttack(state.player);
      resolvePlayerAttack(state.player, state.enemy);
    }

    updateEnemy(state.enemy, state.player, deltaSeconds);
    resolveEnemyContactDamage(state.enemy, state.player);

    if (state.player.health <= 0) {
      state.running = false;
    }
  }

  function frame(now) {
    const deltaSeconds = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    update(deltaSeconds);
    renderGame(ctx, state);

    requestAnimationFrame(frame);
  }

  return {
    start() {
      requestAnimationFrame(frame);
    },
  };
}
