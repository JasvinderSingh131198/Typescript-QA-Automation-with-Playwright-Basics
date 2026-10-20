// Custom error class: gives failures a meaningful name
class ElementNotFoundError extends Error {
  constructor(selector: string) {
    super(`Element not found: ${selector}`); // set the error message
    this.name = "ElementNotFoundError"; // set the error type name
  }
}

// Function that fails for a missing selector
function findElement(selector: string): string {
  if (selector === "") {
    throw new ElementNotFoundError("(empty)"); // "throw" raises an error
  }
  return `<${selector}>`; // success path
}

// try / catch / finally
function safeFind(selector: string): void {
  try {
    console.log(findElement(selector)); // may throw
  } catch (error) {
    // "error" is unknown in strict mode, so check its type first
    if (error instanceof ElementNotFoundError) {
      console.log(`Handled: ${error.message}`);
    } else {
      throw error; // unknown problem: do not hide it
    }
  } finally {
    console.log("Cleanup done"); // always runs (close browser, etc.)
  }
}

safeFind("button"); // <button> then Cleanup done
safeFind(""); // Handled: Element not found: (empty) then Cleanup done
