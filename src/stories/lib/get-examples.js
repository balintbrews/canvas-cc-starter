import yaml from "js-yaml";

/**
 * Loads and parses a `component.yml` file and returns example values for props.
 * Uses dynamic imports to work in both Node.js and browser environments.
 * @param {string} componentName - The name of the component.
 * @returns {Promise<Object>} Promise that resolves to object containing example values for all props
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
    const examples = {};

    if (componentData.props && componentData.props.properties) {
      for (const [propName, propConfig] of Object.entries(
        componentData.props.properties,
      )) {
        if (
          propConfig.examples &&
          Array.isArray(propConfig.examples) &&
          propConfig.examples.length > 0
        ) {
          examples[propName] = propConfig.examples[0];
        }
      }
    }

    return examples;
  } catch (error) {
    console.error(
      `Error loading examples for "${componentName}":`,
      error.message,
    );
    return {};
  }
}
