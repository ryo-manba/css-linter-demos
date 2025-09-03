const stylelint = require("stylelint");

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions }
} = stylelint;

const ruleName = "example/selector-no-foo";

const messages = ruleMessages(ruleName, {
  rejected: (selector) => `Unexpected "foo" within selector "${selector}"`
});

const meta = {
  url: ""
};

const ruleFunction = (primary) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true]
    });

    if (!validOptions) return;

    root.walkRules((ruleNode) => {
      const { selector } = ruleNode;

      if (!selector.includes("foo")) return;

      report({
        result,
        ruleName,
        message: messages.rejected(selector),
        node: ruleNode,
        word: selector
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

module.exports = createPlugin(ruleName, ruleFunction);