// example.js - JavaScript file with violations
// biome-ignore lint/correctness/noUnusedVariables: ignored using `--suppress`
var unused = 1; // unused variable
console.log("test"); // console usage
// biome-ignore lint/suspicious/noDebugger: ignored using `--suppress`
debugger; // debugger statement

// biome-ignore lint/correctness/noConstantCondition: ignored using `--suppress`
if (true) {} // empty block

// biome-ignore lint/correctness/noUnusedVariables: ignored using `--suppress`
var duplicate = 1;
// biome-ignore lint/suspicious/noRedeclare: ignored using `--suppress`
// biome-ignore lint/correctness/noUnusedVariables: ignored using `--suppress`
var duplicate = 2; // duplicate variable