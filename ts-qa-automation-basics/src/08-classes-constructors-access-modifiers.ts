// A class is a blueprint for objects (core of the Page Object Model)
class LoginPage {
  public readonly url: string; // public: accessible everywhere
  private attempts = 0; // private: only inside this class
  protected role = "user"; // protected: this class and its subclasses

  // Constructor runs on "new"; "public username" declares + assigns in one step
  constructor(public username: string, url: string) {
    this.url = url; // "this" points to the current object
  }

  // Public method: the page's action
  login(password: string): boolean {
    this.attempts++; // update private state
    return password.length >= 6; // simple fake validation
  }

  // Getter: read a private value safely from outside
  get attemptCount(): number {
    return this.attempts;
  }
}

// Inheritance: AdminLoginPage reuses LoginPage and extends it
class AdminLoginPage extends LoginPage {
  constructor(username: string) {
    super(username, "https://example.com/admin"); // call parent constructor first
    this.role = "admin"; // allowed: protected member
  }

  // Method overriding with extra behavior
  override login(password: string): boolean {
    console.log(`Logging in as ${this.role}`); // uses protected "role"
    return super.login(password); // reuse parent logic
  }
}

const page = new LoginPage("tester", "https://example.com/login"); // create an object
console.log(page.login("secret123"), page.attemptCount); // true 1
// page.attempts = 5; // ERROR if uncommented: 'attempts' is private

const admin = new AdminLoginPage("root"); // create the subclass object
console.log(admin.login("123"), admin.url); // Logging in as admin / false https://example.com/admin
