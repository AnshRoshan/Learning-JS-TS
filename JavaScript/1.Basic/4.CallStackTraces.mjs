// stack_trace_and_call_stack.mjs

// Function to demonstrate stack trace
function funcA() {
    try {
        funcB();
    } catch (error) {
        console.error("Error caught in funcA:", error);
    }
}

function funcB() {
    funcC();
}

function funcC() {
    throw new Error("Oops! Something went wrong.");
}

// Invoking function to trigger stack trace
funcA();
