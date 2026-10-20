// Abstract class: cannot be instantiated, only extended
abstract class BasePage {
  // Constructor shared by every page
  constructor(protected readonly name: string) {}

  // Abstract method: NO body here, every child MUST implement it
  abstract getUrl(): string;

  // Concrete method: shared code every child inherits
  open(): void {
    console.log(`Opening ${this.name} at ${this.getUrl()}`);
  }
}

// Child class implements the abstract method
class HomePage extends BasePage {
  constructor() {
    super("Home"); // pass the name to the abstract parent
  }
  getUrl(): string {
    return "https://example.com/"; // required implementation
  }
}

// Another child with its own URL
class CartPage extends BasePage {
  constructor() {
    super("Cart");
  }
  getUrl(): string {
    return "https://example.com/cart";
  }
}

// const p = new BasePage("x"); // ERROR if uncommented: cannot create an abstract class
const pages: BasePage[] = [new HomePage(), new CartPage()]; // parent type, child objects
pages.forEach((p) => p.open()); // each calls its own getUrl() (polymorphism)
