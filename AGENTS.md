# AGENTS.md

## Project
Top-down browser ARPG built with HTML, CSS, and JavaScript Canvas.

## Goals
- Keep the game playable at all times.
- Prefer small, safe PRs.
- Preserve save compatibility when possible.
- Use placeholder art unless asked to add final assets.

## Commands
- Build: none required for static prototype
- Run locally: open index.html or use a simple local server
- Tests: if tests exist, run them before opening a PR

## Coding rules
- Keep code modular.
- Put gameplay systems in separate files.
- Do not hardcode giant data blobs into main game loop files.
- Store structured game data in /data when appropriate.
- Comment only where helpful.

## Review guidelines
- Do not break inventory, save/load, or input handling.
- Keep controls documented in README.
- Update README when controls, setup, or major systems change.
- Do not commit secrets, API keys, or tokens.
- Flag risky or destructive changes clearly in the PR summary.

## File guidance
- /assets = images, icons, audio
- /data = json-style game data
- /js = gameplay and UI code
