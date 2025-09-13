/**
 * Custom CSS Plugin for ESLint
 * Demonstrates how to create a custom CSS linting rule
 */

export default {
  meta: {
    name: "my-plugin",
    version: "1.0.0"
  },
  rules: {
    "no-important": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow !important in CSS declarations",
        },
        messages: {
          avoidImportant: "!important annotations are not allowed."
        },
        schema: []
      },
      create(context) {
        return {
          "Declaration"(node) {
            if (node.important === true) {
              context.report({
                node,
                messageId: "avoidImportant"
              });
            }
          }
        };
      }
    }
  }
};