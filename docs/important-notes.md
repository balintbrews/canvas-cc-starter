# Important notes for developing Drupal Canvas Code Components

This document outlines important issues, current limitations, and considerations
that you should be aware of when developing Code Components for Drupal Canvas.

- [1. Prop machine names must be the camel cased version of the prop titles](#1-prop-machine-names-must-be-the-camel-cased-version-of-the-prop-titles)
- [2. Props with enum options lose labels when edited in Canvas](#2-props-with-enum-options-lose-labels-when-edited-in-canvas)
- [3. Slots in content-sized containers need a minimum size](#3-slots-in-content-sized-containers-need-a-minimum-size)
- [4. The `hidden` Tailwind CSS utility class needs to be used carefully](#4-the-hidden-tailwind-css-utility-class-needs-to-be-used-carefully)
- [5. The CLI tool considers the global CSS in Canvas to be the source of truth](#5-the-cli-tool-considers-the-global-css-in-canvas-to-be-the-source-of-truth)
- [6. The `upload` CLI command overrides components in Canvas and other considerations](#6-the-upload-cli-command-overrides-components-in-canvas-and-other-considerations)

---

## 1. Prop machine names must be the camel cased version of the prop titles

The in-browser code editor
[automatically generates the machine names for the props](https://git.drupalcode.org/project/canvas/-/blob/1efb2c0f06b63c335f3d80f2051cfef31873466d/ui/src/features/code-editor/utils.ts#L22)
based on the human-readable prop titles. It does so by converting to camel case
using [`camelCase()` from `lodash`](https://lodash.com/docs/4.17.15#camelCase).
What this means is that you should follow the same logic until this behavior is
changed in the in-browser code editor
([#3524675](https://www.drupal.org/project/canvas/issues/3524675)). Otherwise
editing a Code Component's props in Canvas will change the prop machine names,
thus breaking your component's code.

For example, the `iconNameFromLucide` → `"Icon: Name from Lucide"` machine name
and title pair will work, but `icon` → `"Icon: Name from Lucide"` would break.

## 2. Props with enum options lose labels when edited in Canvas

A somewhat similar limitation that is detailed in _1. Prop titles vs. machine
names_ also applies to props with enum options where values (`enum`) and labels
(`meta:enum`) can be defined in your `component.yml`. The in-browser code editor
will simply copy the values to also be the labels. This won't break anything,
but the end-user experience will be altered as your labels won't be shown.
([#3524675](https://www.drupal.org/project/canvas/issues/3524675) will address
this.)

## 3. Slots in content-sized containers need a minimum size

> This point isn't unique to Code Components. It's valid for Single-Directory
> Components, as well as any component source markup and styling.

When you're outputting a slot surrounded by a container that sizes based on its
content (flex items, grid items, inline elements, etc.), be mindful of how that
container will collapse when the slot output is empty. For example, assuming you
have a slot named `branding`:

```jsx
<div className="flex">
  <div>{branding}</div>
</div>
```

If the slot's output is empty, the surrounding `<div>` will not have any width
due to the flex container's sizing. This means that the Drupal Canvas UI won't
be able to show you instrumentation in its editor frame overlay to place
components into that slot. (The _Layers_ panel will work regardless.) To solve
this, you can add a minimum width:

```jsx
<div className="flex">
  <div className="min-w-32">{branding}</div>
</div>
```

This works great as long as you're expecting content in this slot that will
always exceed the minimum width you set. If that is not the case, here is a
workaround you can use until we have a better solution in Drupal Canvas:

```jsx
<div className="flex">
  <div
    className={cn(
      branding?.props?.value?.includes("canvas--slot-empty-placeholder") &&
        "min-w-32",
    )}
  >
    {branding}
  </div>
</div>
```

## 4. The `hidden` Tailwind CSS utility class needs to be used carefully

> This point isn't unique to Code Components. It's valid for Single-Directory
> Components, as well as any component source markup and styling that uses a
> class named `hidden` inside a CSS cascade layer (e.g., any theme using
> Tailwind CSS 4).

**tl;dr**

When using the `hidden` Tailwind utility class but need to override it
conditionally (e.g., for responsive variants), you need to add `!important` (`!`
prefix in Tailwind CSS) to the overriding class.

For example, `md:!block hidden`.

**Details**

Drupal
[core's `system` module defines CSS classes to hide elements in various ways](https://git.drupalcode.org/project/drupal/-/blob/11.x/core/modules/system/css/components/hidden.module.css).
One of those classes is named `hidden`, which sets a `display: none`
declaration. This will typically take precedence over Tailwind's display
utilities because it's not defined in a
[cascade layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer#description),
unlike Tailwind's generated styles. (Styles that are not defined in a layer
always override styles defined in named and anonymous layers.)

## 5. The CLI tool considers the global CSS in Canvas to be the source of truth

1. [`#3549124`](https://www.drupal.org/project/canvas/issues/3549124):
   `npx canvas download` overrides your `src/components/global.css` file without
   giving you any warnings when downloading any component.
2. `npx canvas build` (which is executed by `npx canvas upload`) doesn't use
   your `src/components/global.css` file for building Tailwind CSS. It downloads
   the global CSS from Drupal Canvas in the background to use that for building
   the CSS. This is by design, but we may need to revisit this decision. Until
   then, make sure to manually add any changes in Drupal Canvas that you're
   adding in your `src/components/global.css` before running the
   `build`/`upload` command.

## 6. The `upload` CLI command overrides components in Canvas and other considerations

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
