export function createInput(canvas) {
  const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
  };

  let attackQueued = false;

  function onKeyChange(event, isDown) {
    const key = event.key.toLowerCase();

    if (key in keys) {
      keys[key] = isDown;
      event.preventDefault();
    }

    if (isDown && key === ' ') {
      attackQueued = true;
      event.preventDefault();
    }
  }

  function onMouseDown(event) {
    if (event.button !== 0) {
      return;
    }

    attackQueued = true;
  }

  window.addEventListener('keydown', (event) => onKeyChange(event, true));
  window.addEventListener('keyup', (event) => onKeyChange(event, false));
  canvas.addEventListener('mousedown', onMouseDown);

  return {
    getMoveVector() {
      const x = (keys.d ? 1 : 0) - (keys.a ? 1 : 0);
      const y = (keys.s ? 1 : 0) - (keys.w ? 1 : 0);

      const length = Math.hypot(x, y) || 1;
      return { x: x / length, y: y / length };
    },
    consumeAttack() {
      const wasQueued = attackQueued;
      attackQueued = false;
      return wasQueued;
    },
  };
}
