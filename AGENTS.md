# AGENTS.md

## Project Overview
This repository contains a browser-based top-down action RPG built with HTML, CSS, and JavaScript using the Canvas API.

The game is an action RPG with:
- real-time movement and combat
- inventory and equipment
- loot drops and rarity
- D&D-style attributes and derived stats
- skills that improve through use
- an essence and confluence power system
- save/load support
- placeholder art first, polished assets later

## High-Level Priorities
1. Keep the game playable.
2. Prefer small, safe pull requests.
3. Avoid breaking controls, save/load, inventory, stats, or combat.
4. Use modular files and data-driven design.
5. Preserve room for future expansion.

## Repo Structure
- `index.html` = main page bootstrap
- `style.css` = game and UI styling
- `js/` = gameplay systems and UI logic
- `assets/` = sprites, icons, audio, visual effects
- `data/` = JSON or JS data definitions for items, enemies, essences, abilities

Expected structure:

- `js/main.js`
- `js/game.js`
- `js/input.js`
- `js/renderer.js`
- `js/player.js`
- `js/enemy.js`
- `js/combat.js`
- `js/loot.js`
- `js/inventory.js`
- `js/items.js`
- `js/stats.js`
- `js/skills.js`
- `js/essences.js`
- `js/abilities.js`
- `js/ui.js`
- `js/save.js`

## Development Rules
- Keep systems separated by responsibility.
- Do not place large game systems directly inside `main.js`.
- Prefer adding new logic to the appropriate module instead of creating duplicate logic elsewhere.
- Keep data definitions out of render/update loops.
- Use clear names and straightforward code over clever shortcuts.
- Add comments only where they help explain non-obvious logic.
- Avoid introducing external dependencies unless explicitly requested.
- Placeholder visuals are acceptable and preferred early on.

## Gameplay Rules to Preserve
- Top-down ARPG feel, not auto-battler gameplay.
- Player uses manual movement and attacks.
- Character progression should include:
  - attributes
  - derived stats
  - equipment
  - loot
  - skill progression by use
  - essence progression
- Essence system rules:
  - 3 bonded core essences
  - confluence unlocked after bonding 3 essences
  - each essence has 5 powers
  - 1 power unlocks immediately
  - 4 powers unlock through awakening stones
  - powers can gain mastery through use
- Restricted essences should always show warnings and have meaningful drawbacks.

## UI Rules
Maintain or improve these screens when relevant:
- HUD
- inventory
- character sheet
- skills menu
- essence menu
- loot or pickup feedback
- pause or settings overlay if added later

If controls, menus, or keybinds change:
- update the README
- keep the controls discoverable in the UI if possible

## Save/Load Rules
- Avoid breaking saved data formats unless necessary.
- If save structure changes, update save handling carefully.
- Prefer backward-compatible additions when possible.
- Do not silently remove important player fields such as:
  - inventory
  - equipment
  - bonded essences
  - confluence
  - learned abilities
  - skill levels
  - stats

## File-Specific Guidance
### `player.js`
Owns player state, movement hooks, core combat hooks, progression fields.

### `enemy.js`
Owns enemy state, enemy behavior, and enemy-specific combat interactions.

### `combat.js`
Owns hit detection, damage calculation entry points, attack timing, mitigation, crits, status hooks.

### `stats.js`
Owns formulas for attributes, derived stats, equipment contributions, and essence modifiers.

### `skills.js`
Owns use-based progression for combat, magic, armor, utility, and related skills.

### `essences.js`
Owns essence definitions, bonding rules, awakening state, confluence generation, restricted flags.

### `abilities.js`
Owns active and passive ability definitions, costs, cooldowns, and scaling.

### `inventory.js`
Owns items held, item movement, stacking, equipping, unequipping, and item lookup.

### `loot.js`
Owns drop generation, rarity rolls, reward spawning, and pickup resolution.

### `ui.js`
Owns menus, HUD drawing, tooltips, stat panels, and essence/skill displays.

### `save.js`
Owns serialization, deserialization, save version handling, and localStorage integration.

## Pull Request Expectations
When making changes:
- keep PRs focused
- avoid unrelated refactors
- summarize gameplay impact
- note any save-impacting changes
- note any control changes
- mention new files created
- mention any placeholders added

## Things Never To Do
- do not commit secrets, tokens, or API keys
- do not remove major systems without clear reason
- do not rewrite the whole project for a small feature
- do not replace the essence system with a generic class-only system
- do not convert the game into auto-combat or survivor-style gameplay
- do not add copyrighted third-party assets without permission

## Preferred Workflow
- create or update a feature branch
- make modular edits
- keep the game runnable
- open a PR against `main`
- let CI validate the changes
