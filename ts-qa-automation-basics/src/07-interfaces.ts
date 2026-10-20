// Interface: a contract describing the shape of an object
interface Browser {
  name: string; // required property
  readonly version: number; // can be set once, never changed
  open(url: string): string; // required method
}

// Interfaces can extend other interfaces
interface MobileBrowser extends Browser {
  device: string; // extra property
}

// A class promises to follow the contract using "implements"
class Chrome implements Browser {
  name = "Chrome"; // satisfies "name"
  readonly version = 120; // satisfies "version"
  open(url: string): string {
    // satisfies "open"
    return `${this.name} opened ${url}`;
  }
}

// A plain object can also satisfy an interface
const mobile: MobileBrowser = {
  name: "Safari",
  version: 17,
  device: "iPhone",
  open: (url) => `${mobile.name} on ${mobile.device} opened ${url}`,
};

// Function that accepts ANY object matching the interface (polymorphism)
function visit(b: Browser, url: string): void {
  console.log(b.open(url));
}

visit(new Chrome(), "https://playwright.dev"); // Chrome opened https://playwright.dev
visit(mobile, "https://example.com"); // Safari on iPhone opened https://example.com
