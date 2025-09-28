import "../src/components/global.css";

export default {
  parameters: {
    viewport: {
      // Match viewport sizes in Drupal Canvas.
      // @see https://git.drupalcode.org/project/canvas/-/blob/197f387af2bea7c073e91ddeded4039dfdc03031/ui/src/types/Preview.ts#L7
      options: {
        desktopLarge: {
          name: "Large Desktop",
          styles: {
            width: "2560px",
            height: "1440px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1920px",
            height: "1080px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "468px",
            height: "800px",
          },
        },
      },
    },
    layout: "fullscreen",
  },
  initialGlobals: {
    viewport: { value: "tablet", isRotated: false },
  },
};
