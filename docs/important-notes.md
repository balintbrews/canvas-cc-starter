# Important notes for developing Drupal Canvas Code Components

This document outlines important issues, current limitations, and considerations
that you should be aware of when developing Code Components for Drupal Canvas.

- [1. Slots in content-sized containers need a minimum size](#1-slots-in-content-sized-containers-need-a-minimum-size)
- [2. The `upload` CLI command overrides components in Canvas and other considerations](#2-the-upload-cli-command-overrides-components-in-canvas-and-other-considerations)

---

## 1. Slots in content-sized containers need a minimum size

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

## 2. The `upload` CLI command overrides components in Canvas and other considerations

1. `npx canvas upload` overrides the published version of the Code Components,
   but doesn't discard auto-saved and unpublished changes to the components.
   Make sure to open Drupal Canvas in the browser after using the `upload`
   command, and discard unpublished Code Component changes of the components you
   recently uploaded.
2. [`#3549123`](https://www.drupal.org/project/canvas/issues/3549123):
   `npx canvas upload` overrides existing Code Components with matching machine
   names in your Drupal site without giving you any warnings.
3. The name of your component folders need to be all lowercased. They can
   contain hyphens (`-`) and underscores (`_`). If you're getting an HTTP 422
   error when using the upload command, this is the first thing you should
   check. (Enable verbose mode in your `.env` file to find out more about the
   error.)
