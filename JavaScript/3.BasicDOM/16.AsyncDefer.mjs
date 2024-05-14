// async_defer_html_parsing.mjs

// 1. Async and Defer Attributes
console.log("1. Async and Defer Attributes:");

// Async attribute: Specifies that the script should be executed asynchronously as soon as it is available
// Defer attribute: Specifies that the script should be executed after the document has been parsed, but before firing DOMContentLoaded event
// Both attributes are used to improve page load performance by allowing scripts to be downloaded asynchronously without blocking the HTML parsing process

// Example usage:
// <script src="script.js" async></script>
// <script src="script.js" defer></script>

// 2. HTML Parsing Process
console.log("\n2. HTML Parsing Process:");

// HTML parsing is the process of converting HTML code into a hierarchical structure called the Document Object Model (DOM).
// The HTML parsing process consists of several stages:

// a. Tokenization: The HTML code is broken down into tokens such as start tags, end tags, attribute names, attribute values, etc.
// b. Lexical Analysis: The tokens are converted into tokens of meaningful content, such as opening tags, closing tags, attribute names, attribute values, etc.
// c. DOM Tree Construction: The browser builds a DOM tree by using the tokens generated in the previous steps. Each element in the DOM tree represents an HTML element, and their relationships are defined by their nesting structure in the HTML code.
// d. Render Tree Construction: The browser constructs a render tree based on the DOM tree, which represents the visual structure of the web page. It contains only the elements that are visible to the user and their styles.

// 3. Impact of Async and Defer on HTML Parsing
console.log("\n3. Impact of Async and Defer on HTML Parsing:");

// Async and defer attributes affect when the browser executes the JavaScript code while parsing HTML:

// Async:
// - The browser downloads the script file asynchronously while continuing to parse the HTML.
// - The script is executed as soon as it is available, which may be before the HTML parsing is complete.
// - Async scripts may interrupt the HTML parsing process and render-blocking resources (CSS, images) are not blocked by the script.

// Defer:
// - The browser downloads the script file asynchronously while continuing to parse the HTML.
// - The script is executed after the HTML parsing is complete, but before the DOMContentLoaded event is fired.
// - Defer scripts do not block the HTML parsing process and do not delay the rendering of the page.

// 4. Choosing Between Async and Defer
console.log("\n4. Choosing Between Async and Defer:");

// Use "async" when:
// - The script can be executed independently of the HTML structure (e.g., analytics scripts).
// - The script does not depend on the DOM or other scripts loaded before it.
// - Minimizing render-blocking resources is crucial for page performance.

// Use "defer" when:
// - The script depends on the DOM or other scripts loaded before it.
// - The script needs to be executed after the HTML parsing is complete but before the DOMContentLoaded event is fired.
// - Preserving the execution order of scripts is important.

// Note: It's generally recommended to use defer for scripts that need to manipulate the DOM, and async for non-essential scripts that don't require the DOM.

// Example usage:
// <script src="script.js" async></script>
// <script src="script.js" defer></script>
