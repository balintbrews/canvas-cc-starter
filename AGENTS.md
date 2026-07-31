# Agent guidance

This repository contains Drupal Canvas Code Components. All current and future
React components in this repository are considered Canvas components, and they
need to adhere to the Canvas component contract defined in the
`canvas-component-definition` skill.

For all operations involving React components, the `component.yml` files,
Workbench mock files such as `mocks.json`, and `src/global.css` in this
repository, load the `canvas-component-definition` skill.

## Validation and upload

When code changes are made, run the following command to automatically fix
issues:

```
npm run code:fix
```

Fix any issues that were not fixed automatically, and re-run the check.

When all issues are fixed, ask the user if they would like to push the entire
Canvas codebase to Canvas. A Canvas push is all or nothing: it pushes every
Canvas-managed artifact in the codebase, including all pages and components, and
cannot push an individual artifact or only the changes from the current task.
This behavior is expected and accepted; do not stop or warn merely because the
push includes unrelated or previously existing Canvas work. See the
`canvas-component-push` skill.

## Writing and style

- Use sentence case for headings, labels, and documentation.
- Use Oxford commas.
- Follow AP Style for general writing conventions.
- Avoid emojis unless they materially improve clarity.
- In project docs and skills, use project-relative paths, never absolute paths.

## Code comments

- Do not remove existing inline comments when editing nearby code.
- Add comments only when they explain non-obvious intent or tradeoffs.
- Write comment text as full sentences with ending punctuation.
- Prefer standalone comment lines above the code they explain.
