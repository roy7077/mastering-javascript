/*------Module pattern in Node js-----------*/
module is a mechanism for spliting js program into seprate managable chunk called as module , that can be imported whenever needed.

(i) CJS (common JS modules)
(ii)ESM (ES6 modules)

/*---Enabling----*/

* Node.js has two module systems: CommonJS modules and ECMAScript modules.

* By default, Node.js will treat the following as CommonJS modules:

* Files with a .cjs extension;

* Files with a .js extension when the nearest parent package.json file contains a top-level field "type" with a value of "commonjs".

* Files with a .js extension or without an extension, when the nearest parent package.json file doesn't contain a top-level field "type" or there is no package.json in any parent folder; unless the file contains syntax that errors unless it is evaluated as an ES module. Package authors should include the "type" field, even in packages where all sources are CommonJS. Being explicit about the type of the package will make things easier for build tools and loaders to determine how the files in the package should be interpreted.

* Files with an extension that is not .mjs, .cjs, .json, .node, or .js (when the nearest parent package.json file contains a top-level field "type" with a value of "module", those files will be recognized as CommonJS modules only if they are being included via require(), not when used as the command-line entry point of the program).