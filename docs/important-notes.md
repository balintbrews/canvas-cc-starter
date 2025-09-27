# Important notes for developing Drupal Canvas Code Components

This document outlines important issues, current limitations, and considerations
that you should be aware of when developing Code Components for Drupal Canvas.

## CLI vs. global CSS

1. [`#3549124`](https://www.drupal.org/project/canvas/issues/3549124):
   `npx canvas download` overrides your `src/components/global.css` file without
   giving you any warnings when downloading any component.
2. `npx canvas build` (which is executed by `npx canvas upload`) doesn't use
   your `src/components/global.css` file for building Tailwind CSS. It downloads
   the global CSS from Drupal Canvas in the background to use that for building
   the CSS. This is by design, but we may need to revisit this decision. Until
   then, make sure to manually add any changes in Drupal Canvas that you're
   adding in your `src/components/global.css`.

## CLI and the `upload` command

1. `npx canvas upload` overrides the published version of the Code Components,
   but doesn't discard auto-saved and unpublished changes to the components.
   Make sure to open Drupal Canvas in the browser after using the `upload`
   command, and discard unpublished Code Component changes of the components you
   recently uploaded.
2. [`#3549123`](https://www.drupal.org/project/canvas/issues/3549123):
   `npx canvas upload` overrides existing Code Components with matching machine
   names in your Drupal site without giving you any warnings.
3. The `machineName` from your `component.yml` files is not used. Instead, the
   folder's name will decide the component's machine name. Do match the two for
   the sake of consistency.
4. The name of your component folders need to be all lowercased. They can
   contain hyphens (`-`) and underscores (`_`). If you're getting an HTTP 422
   error when using the upload command, this is the first thing you should
   check. (Enable verbose mode in your `.env` file to find out more about the
   error.)
