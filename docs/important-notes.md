# Important notes for developing Drupal Canvas Code Components

This document outlines important issues, current limitations, and considerations
that you should be aware of when developing Code Components for Drupal Canvas.

- [Slots in content-sized containers](#slots-in-content-sized-containers)
- [`hidden` CSS class](#hidden-css-class)
  - [tl;dr](#tldr)
  - [Details](#details)
- [CLI vs. global CSS](#cli-vs-global-css)
- [CLI and the `upload` command](#cli-and-the-upload-command)

## Slots in content-sized containers

> This point isn't unique to Code Components. It's valid for Single-Directory
> Components, as well as any component source markup and styling.

When you're outputting a slot surrounded by a container that sizes based on its
content (flex items, grid items, inline elements, etc.), be mindful of how that
container will collapse when the slot output is empty. For example, assuming you
have a slot named `logo`:

```jsx
<div className="flex">
  <div>{logo}</div>
</div>
```

If the slot's output is empty, the surrounding `<div>` will not have any width
due to the flex container's sizing. This means that the Drupal Canvas UI won't
be able to show you instrumentation in its editor frame overlay to place
components into that slot. (The _Layers_ panel will work regardless.) To solve
this, you can add a minimum width:

```jsx
<div className="flex">
  <div className="min-w-32">{logo}</div>
</div>
```

This works great as long as you're expecting content in this slot that will
always exceed the minimum width you set. If that is not the case, here is a
workaround you can use until we have a better solution in Drupal Canvas:

```jsx
<div className="flex">
  <div
    className={cn(
      logo?.props?.value?.includes("canvas--slot-empty-placeholder") &&
        "min-w-32",
    )}
  >
    {logo}
  </div>
</div>
```

## `hidden` CSS class

> This point isn't unique to Code Components. It's valid for Single-Directory
> Components, as well as any component source markup and styling that uses a
> class named `hidden` inside a CSS cascade layer (e.g., any theme using
> Tailwind CSS 4).

### tl;dr

When using the `hidden` Tailwind utility class but need to override it
conditionally (e.g., for responsive variants), you need to add `!important` (`!`
prefix in Tailwind CSS) to the overriding class.

For example, `md:!block hidden`.

### Details

Drupal
[core's `system` module defines CSS classes to hide elements in various ways](https://git.drupalcode.org/project/drupal/-/blob/11.x/core/modules/system/css/components/hidden.module.css).
One of those classes is named `hidden`, which sets a `display: none`
declaration. This will typically take precedence over Tailwind's display
utilities because it's not defined in a
[cascade layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer#description),
unlike Tailwind's generated styles. (Styles that are not defined in a layer
always override styles defined in named and anonymous layers.)

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
