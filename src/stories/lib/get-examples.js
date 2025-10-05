import yaml from "js-yaml";

/**
 * Loads and parses a `component.yml` file and returns example values for props.
 * Uses dynamic imports to work in both Node.js and browser environments.
 * @param {string} componentName - The name of the component.
 * @returns {Promise<Array<Object>>} Promise that resolves to array of objects, each containing example values for all props
 */
export async function getComponentExamples(componentName) {
  try {
    let fileContents;

    try {
      // Import the `component.yml` file.
      const yamlModule = await import(
        `../../components/${componentName}/component.yml?raw`
      );
      fileContents = yamlModule.default;
    } catch (importError) {
      throw new Error(
        `component.yml file not found for "${componentName}": ${importError.message}`,
      );
    }

    let componentData;

    try {
      // Parse the YAML content.
      componentData = yaml.load(fileContents);
    } catch (parseError) {
      throw new Error(
        `Error parsing component.yml file for "${componentName}": ${parseError.message}`,
      );
    }

    // Extract examples from props.
    const examplesArray = [];

    if (componentData.props && componentData.props.properties) {
      // Determine the number of examples (assumes all props have the same count).
      let exampleCount = 0;
      for (const propConfig of Object.values(componentData.props.properties)) {
        if (
          propConfig.examples &&
          Array.isArray(propConfig.examples) &&
          propConfig.examples.length > 0
        ) {
          exampleCount = propConfig.examples.length;
          break;
        }
      }

      // Build array of example objects
      for (let i = 0; i < exampleCount; i++) {
        const exampleObj = {};
        for (const [propName, propConfig] of Object.entries(
          componentData.props.properties,
        )) {
          if (
            propConfig.examples &&
            Array.isArray(propConfig.examples) &&
            propConfig.examples.length > i
          ) {
            exampleObj[propName] = propConfig.examples[i];
          }
        }
        examplesArray.push(exampleObj);
      }
    }

    return examplesArray;
  } catch (error) {
    console.error(
      `Error loading examples for "${componentName}":`,
      error.message,
    );
    return [];
  }
}
