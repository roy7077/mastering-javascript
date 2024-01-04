Node js
-> open source
-> ryan dahl in 2009
-> brings raw js features into our terminal so that we can actually interact with OS based features.


/*--Relationship between Runtime and Framework:--*/

* A framework is typically used during the     development phase to provide a structure and set of tools for building an application.

* The runtime, on the other hand, comes into play when the developed application is executed by end-users.

/*------Node.js is primarily built upon two key components ---*/

* V8 Engine: Developed by Google, the V8 engine is an open-source JavaScript engine that executes JavaScript code. It is known for its high-performance execution and is also used in the Chrome web browser.

* JavaScript APIs and Functions: Node.js provides its own set of APIs (Application Programming Interfaces) and functions that extend the capabilities of JavaScript beyond what is available in a browser environment. These APIs include modules for file system operations, networking, HTTP handling, and more. Developers can leverage these APIs to build server-side applications using JavaScript.

* libuv: libuv is a multi-platform support library that provides essential features for asynchronous I/O operations and event-driven programming. It handles tasks such as managing the event loop, file system operations, and network operations. libuv is crucial for Node.js to achieve non-blocking I/O and handle concurrent operations efficiently.

* Bindings: Node.js uses bindings to connect JavaScript code with native C/C++ code. These bindings allow Node.js to interact with lower-level system functionalities or external libraries written in languages like C or C++. For example, some Node.js modules are implemented in native code to achieve performance benefits, and bindings facilitate the communication between JavaScript and the native code.

