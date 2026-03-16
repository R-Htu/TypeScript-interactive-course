// ══════════════════════════════════════════
// LESSON DATA (abbreviated — full 17 lessons)
// ══════════════════════════════════════════

const LESSONS = window.LESSONS ||
  window.lessons || [
    {
      id: 1,
      icon: "[?]",
      title: "What is TypeScript?",
      desc: "Intro to TS — what, why, and how it works",
      content: [
        {
          type: "text",
          heading: "What is TypeScript?",
          body: `TypeScript is a programming language developed by <strong>Microsoft</strong> in 2012.  
      It is essentially <strong>JavaScript with a type system</strong>, meaning you can specify what types of data your variables, functions, and objects should hold.  
      TypeScript code is compiled (or "transpiled") to plain JavaScript that runs in any browser or Node.js environment.  

      <br><br>
      <strong>Key idea:</strong> TypeScript adds types and tooling to JavaScript, helping catch errors <strong>before</strong> your code runs.`,
        },
        {
          type: "points",
          heading: "Why Use TypeScript?",
          points: [
            "[+] Catches errors at compile time, not runtime — safer code",
            "[>] Better autocomplete and editor support — IntelliSense knows your types",
            "[~] Self-documenting — types explain expected data clearly",
            "[#] Safer refactoring — rename variables or functions confidently without breaking code",
            "[*] Supports modern JavaScript features with backward compatibility",
          ],
        },
        {
          type: "code",
          heading: "Your First Typed Variable",
          file: "hello.ts",
          code: `// Number variable
let age: number = 25;
age = 30;       // ✅ OK

// age = "hello"; // ❌ Error: Cannot assign string to number

// String variable
let username: string = "Alice";
console.log(username); // Output: Alice`,
        },
        {
          type: "code",
          heading: "Compilation Flow",
          file: "terminal",
          code: `// Step 1: Compile TypeScript to JavaScript
tsc hello.ts    

// Step 2: Run the compiled JavaScript
node hello.js   // Output will display in console`,
        },
        {
          type: "text",
          heading: "Key Takeaways",
          body: `- TypeScript adds a type system on top of JavaScript.<br>
      - Types help prevent bugs and improve code readability.<br>
      - The TypeScript compiler checks types at compile time and produces JavaScript for execution.<br>
      - You can gradually adopt TypeScript — it works with existing JavaScript code.`,
        },
      ],
      quiz: [
        {
          q: "What is TypeScript?",
          choices: [
            "A CSS framework",
            "JavaScript with types",
            "A Python library",
            "A database tool",
          ],
          correct: 1,
          explain: "TypeScript adds a type system on top of JavaScript!",
        },
        {
          q: "TypeScript compiles to ___",
          choices: ["Python", "Java", "JavaScript", "C++"],
          correct: 2,
          explain: "TypeScript always compiles to plain JavaScript.",
        },
        {
          q: "What does this declare?",
          code: "let score: number = 100;",
          choices: [
            "A string variable",
            "A boolean flag",
            "A typed number variable",
            "An array",
          ],
          correct: 2,
          explain: "The : number annotation declares the type as number.",
        },
        {
          q: "Why use TypeScript instead of JavaScript?",
          choices: [
            "Faster runtime",
            "Compile-time type checking",
            "It replaces HTML",
            "It adds CSS",
          ],
          correct: 1,
          explain:
            "TypeScript allows errors to be caught before running the code using type checking.",
        },
        {
          q: "Which of these is true about TypeScript?",
          choices: [
            "It only runs in browsers",
            "It requires a compiler",
            "It cannot use JavaScript libraries",
            "It doesn’t support objects",
          ],
          correct: 1,
          explain:
            "TypeScript code must be compiled to JavaScript before running, but it can use JS libraries.",
        },
      ],
      challenge: {
        title: "Your First Type Annotation",
        desc: "Declare variables with proper type annotations and understand TypeScript basics.",
        task: "Declare a variable called <strong>username</strong> of type <strong>string</strong> and assign it your name. Then declare a variable called <strong>year</strong> of type <strong>number</strong> and assign the current year.",
        starterCode: `// Declare username as a string

// Declare year as a number
`,
        hint: "Use the syntax: let variableName: type = value;",
        checks:
          "Verify that username is typed as string with a value, and year is typed as number with a value. Provide feedback if either type is missing or value is not assigned.",
      },
    },
    {
      id: 2,
      icon: "[#]",
      title: "Primitive Types",
      desc: "string, number, boolean, null, undefined, any, unknown, void, never",
      content: [
        {
          type: "text",
          heading: "Core Primitives",
          body: "TypeScript's most-used types are <strong>string</strong> (text), <strong>number</strong> (numeric values), and <strong>boolean</strong> (true/false).",
        },
        {
          type: "code",
          heading: "String & Number",
          file: "primitives.ts",
          code: `let name: string = "Ruth";
let greeting: string = \`Hello \${name}!\`;

let age: number = 22;
let price: number = 9.99;
let hex: number = 0xFF;`,
        },
        {
          type: "code",
          heading: "Boolean & Special Types",
          file: "more-types.ts",
          code: `let isActive: boolean = true;
let done: boolean = false;

// any — disables type checking (avoid when possible)
let wild: any = 42;
wild = "now a string"; // no error

// unknown — safer version of any
let data: unknown = fetch('/api');

// null and undefined
let nothing: null = null;
let notAssigned: undefined = undefined;

// void — usually for functions with no return
function logMessage(msg: string): void {
  console.log(msg);
}

// never — for functions that never return
function throwError(): never {
  throw new Error("Something went wrong");
}`,
        },
        {
          type: "points",
          heading: "Type Inference",
          points: [
            "TypeScript can guess types automatically",
            "let x = 10;   // infers: number",
            'let s = "hi"; // infers: string',
            "Explicit annotations are still good practice",
          ],
        },
      ],
      quiz: [
        {
          q: "Which type holds text?",
          choices: ["number", "boolean", "string", "text"],
          correct: 2,
          explain: "string is the type for text values.",
        },
        {
          q: "What type is this?",
          code: "let isLogged: ___ = true;",
          choices: ["string", "number", "boolean", "any"],
          correct: 2,
          explain: "true and false are boolean values.",
        },
        {
          q: "Which causes a type error?",
          choices: [
            "let x: number = 10;",
            'let s: string = "hi";',
            'let n: number = "5";',
            "let b: boolean = false;",
          ],
          correct: 2,
          explain: '"5" is a string, not assignable to number.',
        },
        {
          q: "Which type disables type checking?",
          choices: ["any", "unknown", "void", "never"],
          correct: 0,
          explain: "any disables type checking, allowing any value.",
        },
        {
          q: "Which type is safer than any?",
          choices: ["any", "unknown", "void", "never"],
          correct: 1,
          explain:
            "unknown requires type checking before use, making it safer than any.",
        },
      ],
      challenge: {
        title: "Type All Primitives",
        desc: "Practice declaring variables with different primitive types.",
        task: `Declare variables for each of the following types:
      <strong>city</strong> as a string, <strong>population</strong> as a number, 
      <strong>isCapital</strong> as a boolean, <strong>nothing</strong> as null, 
      <strong>notAssigned</strong> as undefined, <strong>wild</strong> as any, 
      <strong>data</strong> as unknown.`,
        starterCode: `// Your typed variables here
    `,
        hint: "Use: let name: type = value; for each variable with the proper type.",
        checks:
          "Check that each variable has the correct type and value for string, number, boolean, null, undefined, any, and unknown.",
      },
    },
    {
      id: 3,
      icon: "[~]",
      title: "Arrays & Tuples",
      desc: "Typed collections, tuples, readonly arrays, union types, and array methods",
      content: [
        {
          type: "text",
          heading: "Typed Arrays",
          body: "Arrays hold multiple values of the same type. TypeScript enforces types at compile time so you cannot mix types accidentally.",
        },
        {
          type: "code",
          heading: "Array Syntax & Methods",
          file: "arrays.ts",
          code: `// Syntax 1: Type[]
let scores: number[] = [95, 87, 100];
let names: string[] = ["Alice", "Bob"];

// Syntax 2: Array<Type>
let flags: Array<boolean> = [true, false];

// Common methods
scores.push(99);        // add to end → scores: [95, 87, 100, 99]
scores.pop();           // remove from end → scores: [95, 87, 100]
let top = scores[0];    // index access → top: 95

// Array iteration methods
let doubled = scores.map(score => score * 2);    // map → doubled: [190, 174, 200]
let passed = scores.filter(score => score >= 90);  // filter → passed: [95, 100]
scores.forEach(score => console.log(score));       
// forEach output:
// 95
// 87
// 100

// Union type arrays
let mixed: (string | number)[] = ["hello", 42, "world"];
console.log(mixed);
// Output: ["hello", 42, "world"]`,
        },
        {
          type: "code",
          heading: "Tuples — Fixed Structure",
          file: "tuples.ts",
          code: `// Tuple: fixed length + specific types per position
let user: [string, number] = ["Alice", 25];
let rgb: [number, number, number] = [255, 0, 128];

// Named tuple (TS 4.0+)
let point: [x: number, y: number] = [10, 20];

// Tuple destructuring
let [name, age] = user;
console.log(name); // Alice
console.log(age);  // 25

// Readonly arrays & tuples
let colors: readonly string[] = ["red", "green", "blue"];
let person: readonly [string, number] = ["Alice", 25];
// colors.push("yellow"); // ❌ Error
// person[0] = "Bob";     // ❌ Error`,
        },
        {
          type: "points",
          heading: "Arrays vs Tuples",
          points: [
            "Array: any length, all elements same type",
            "Tuple: fixed length, each position has its own type",
            "Readonly arrays/tuples cannot be modified",
            "Use tuples for structured data like coordinates or CSV rows",
            "Union arrays can hold multiple types",
            "Array methods: push, pop, map, filter, forEach are safe with typed arrays",
          ],
        },
      ],
      quiz: [
        {
          q: "What is the correct array type for numbers?",
          choices: ["Array", "numbers[]", "number[]", "[number]"],
          correct: 2,
          explain: "number[] is the shorthand syntax for an array of numbers.",
        },
        {
          q: "What does this declare?",
          code: 'let pair: [string, number] = ["Alice", 25];',
          choices: [
            "An array of strings",
            "An array of numbers",
            "A tuple",
            "An object",
          ],
          correct: 2,
          explain: "Fixed-length arrays with typed positions are tuples.",
        },
        {
          q: "Which is valid?",
          choices: [
            'let n: number[] = ["a","b"];',
            "let s: string[] = [1,2,3];",
            "let b: boolean[] = [true,false];",
            "let x: number[] = true;",
          ],
          correct: 2,
          explain: "boolean[] can only hold true and false values.",
        },
        {
          q: "Which tuple cannot be modified?",
          code: 'let user: readonly [string, number] = ["Alice", 25];',
          choices: ['user[0] = "Bob";', 'user.push("new");', "Both", "None"],
          correct: 2,
          explain: "Readonly tuples cannot be changed or added to.",
        },
        {
          q: "Which array method creates a new array with transformed values?",
          choices: ["push", "map", "pop", "forEach"],
          correct: 1,
          explain:
            "map creates a new array with values returned from the callback.",
        },
        {
          q: "Which array method filters values based on a condition?",
          choices: ["map", "filter", "forEach", "push"],
          correct: 1,
          explain:
            "filter creates a new array including only elements that meet the condition.",
        },
      ],
      challenge: {
        title: "Build Typed Arrays & Tuples",
        desc: "Practice creating arrays and tuples with proper TypeScript types.",
        task: `Create arrays and tuples with proper types:
          - <strong>fruits</strong> as string[] with at least 3 fruit names
          - <strong>numbers</strong> as number[] with at least 3 numbers
          - <strong>person</strong> as [string, number] tuple with a name and age
          - <strong>colors</strong> as readonly string[] with 3 color names`,
        starterCode: `// String array
          let fruits: string[] = [];

          // Number array
          let numbers: number[] = [];

          // Tuple
          let person: [string, number];

          // Readonly array
          let colors: readonly string[] = [];`,
        hint: "Use let name: type = value; or const name: readonly type[] = [...] for readonly arrays.",
        checks:
          "Verify fruits and numbers arrays have correct types and at least 3 elements, person is a [string, number] tuple, colors is a readonly string array with 3 elements.",
      },
    },
    {
      id: 4,
      icon: "[{}]",
      title: "Objects & Interfaces",
      desc: "Shape your data with interfaces and type objects",
      content: [
        {
          type: "text",
          heading: "What is an Interface?",
          body: `An <strong>interface</strong> in TypeScript defines the <em>shape</em> of an object — 
      which properties it has, their types, and whether they are optional or readonly. 
      Interfaces are <strong>reusable</strong> and can be extended.`,
        },
        {
          type: "text",
          heading: "Difference Between Objects and Interfaces",
          body: `- Objects are actual values at runtime; they hold data.<br>
      - Interfaces are TypeScript-only constructs; they exist at compile time to check types.<br>
      - You can type an object inline without an interface, but that type cannot be reused.<br>
      - Interfaces make your code more maintainable, especially for large projects.`,
        },
        {
          type: "text",
          heading: "Benefits of Interfaces",
          body: `- <strong>Reusable</strong>: Define once, use many times.<br>
      - <strong>Readable</strong>: Makes your code self-documenting.<br>
      - <strong>Extendable</strong>: Can extend other interfaces to build complex types.<br>
      - <strong>Optional & readonly properties</strong>: Enforce rules on objects.`,
        },
        {
          type: "code",
          heading: "Inline Object Types",
          file: "objects.ts",
          code: `// Inline object type — works but not reusable
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};

// Optional property with ?
let product: { name: string; price?: number } = {
  name: "Laptop"  // price is optional
};`,
        },
        {
          type: "code",
          heading: "Interfaces — Reusable Shapes",
          file: "interfaces.ts",
          code: `interface User {
  readonly id: number;  // cannot change after set
  name: string;
  email: string;
  role?: string;        // optional
}

const alice: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// alice.id = 99;  Error! readonly`,
        },
        {
          type: "code",
          heading: "Extending Interfaces",
          file: "extend.ts",
          code: `interface Animal {
  name: string;
  speak(): string;
}

interface Dog extends Animal {
  breed: string;
}

const rex: Dog = {
  name: "Rex",
  breed: "Labrador",
  speak: () => "Woof!"
};`,
        },
        {
          type: "code",
          heading: "Interface with Methods",
          file: "methods.ts",
          code: `interface Calculator {
  add(a: number, b: number): number;
  multiply?(a: number, b: number): number; // optional method
}

const calc: Calculator = {
  add: (x, y) => x + y
  // multiply is optional
};`,
        },
        {
          type: "points",
          heading: "Key Notes About Interfaces",
          points: [
            "Interfaces only exist at compile-time, they do not produce JavaScript code.",
            "Use readonly to prevent modification of a property.",
            "Use ? to mark a property as optional.",
            "Interfaces can extend other interfaces to combine shapes.",
            "You can type objects inline, but interfaces are reusable and clearer.",
            "Interfaces improve maintainability in large codebases.",
          ],
        },
      ],
      quiz: [
        {
          q: "What keyword defines a reusable object shape?",
          choices: ["type", "object", "interface", "shape"],
          correct: 2,
          explain: "interface defines reusable object shapes in TypeScript.",
        },
        {
          q: "What does ? mean on a property?",
          code: "interface Config { port?: number; }",
          choices: ["Required", "Read-only", "Optional", "Nullable"],
          correct: 2,
          explain: "? marks a property as optional — it can be omitted.",
        },
        {
          q: "What does readonly prevent?",
          choices: [
            "Reading a value",
            "Changing a value after initialization",
            "Deleting the interface",
            "Adding new properties",
          ],
          correct: 1,
          explain:
            "readonly means the value can only be set once, during creation.",
        },
        {
          q: "Can interfaces be extended?",
          choices: ["Yes", "No"],
          correct: 0,
          explain:
            "Interfaces can extend other interfaces to create combined shapes.",
        },
        {
          q: "Do interfaces exist at runtime?",
          choices: ["Yes", "No"],
          correct: 1,
          explain:
            "Interfaces are erased in JavaScript and only exist at compile time for type checking.",
        },
      ],
      challenge: {
        title: "Design an Interface",
        desc: "Create a typed interface for a real-world object.",
        task: `Create an <strong>interface</strong> called <strong>Product</strong> with:
- <strong>id</strong> (readonly number)
- <strong>name</strong> (string)
- <strong>price</strong> (number)
- <strong>inStock</strong> (optional boolean)<br>
Then create a variable of type Product.`,
        starterCode: `// Define the Product interface

// Create a product variable`,
        hint: "interface Product { readonly id: number; name: string; price: number; inStock?: boolean; }",
        checks:
          "Verify Product interface has id as readonly number, name as string, price as number, inStock as optional boolean. Then check a variable is declared using that interface type.",
      },
    },
    {
      id: 5,
      icon: "[!]",
      title: "Functions",
      desc: "Type parameters, return values, optional/default params, rest params, and callbacks",
      content: [
        {
          type: "text",
          heading: "What are Functions in TypeScript?",
          body: `Functions are reusable blocks of code that perform tasks. In TypeScript, you can explicitly type:
        - <strong>parameters</strong>: the type of data the function accepts
        - <strong>return type</strong>: the type of data it returns

        This prevents errors like passing the wrong type of arguments or misusing return values.`,
        },
        {
          type: "text",
          heading: "Benefits of Typed Functions",
          body: `- Catch errors at compile time before running code.<br>
        - Makes your code more readable and self-documenting.<br>
        - Helps IDEs provide better autocomplete and type hints.<br>
        - Ensures callbacks and higher-order functions have the correct types.`,
        },
        {
          type: "code",
          heading: "Basic Function Types",
          file: "functions.ts",
          code: `function add(a: number, b: number): number {
    return a + b;
  }

  const greet = (name: string): string => {
    return \`Hello, \${name}!\`;
  };

  // void = function returns nothing
  function log(msg: string): void {
    console.log(msg);
  }`,
        },
        {
          type: "code",
          heading: "Optional & Default Parameters",
          file: "params.ts",
          code: `// Optional parameter with ?
  function greetUser(name: string, title?: string): string {
    return title ? \`Hi \${title} \${name}\` : \`Hi \${name}\`;
  }

  console.log(greetUser("Alice"));          // Hi Alice
  console.log(greetUser("Alice", "Dr."));   // Hi Dr. Alice

  // Default parameter
  function createUser(name: string, role: string = "guest") {
    return { name, role };
  }

  console.log(createUser("Bob"));           // { name: "Bob", role: "guest" }
  console.log(createUser("Bob", "admin"));  // { name: "Bob", role: "admin" }

  // Rest parameters
  function sum(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
  }

  console.log(sum(1, 2, 3, 4)); // 10
  `,
        },
        {
          type: "code",
          heading: "Function Types as Variables & Callbacks",
          file: "fn-types.ts",
          code: `// Type a function variable
  let calc: (a: number, b: number) => number;

  calc = (x, y) => x + y;  // OK
  calc = (x, y) => x * y;  // OK

  // Callback function
  function process(arr: string[], cb: (s: string) => void) {
    arr.forEach(cb);
  }

  // Example usage
  process(["a", "b", "c"], (letter) => console.log(letter));
  // Output:
  // a
  // b
  // c`,
        },
        {
          type: "points",
          heading: "Key Notes About Functions",
          points: [
            "Always type parameters and return values for safety.",
            "Use optional parameters (?) when a value is not always required.",
            "Default values can make parameters optional without undefined.",
            "Rest parameters (...) allow passing multiple arguments as an array.",
            "Functions can be typed when assigned to variables.",
            "Callbacks should have typed parameters and return type.",
          ],
        },
      ],
      quiz: [
        {
          q: "What is the return type here?",
          code: "function square(n: number): ___ { return n * n; }",
          choices: ["string", "boolean", "void", "number"],
          correct: 3,
          explain: "Multiplying numbers returns a number.",
        },
        {
          q: "What does void mean as return type?",
          choices: [
            "Returns undefined only",
            "Returns any type",
            "Returns nothing",
            "Returns null",
          ],
          correct: 2,
          explain: "void means the function does not return a value.",
        },
        {
          q: "How do you make a parameter optional?",
          choices: [
            "param!: type",
            "param*: type",
            "param?: type",
            "optional param: type",
          ],
          correct: 2,
          explain: "Adding ? after the name makes a parameter optional.",
        },
        {
          q: "How do you provide a default value for a parameter?",
          choices: [
            "param = value",
            "param?: value",
            "param!: value",
            "param value",
          ],
          correct: 0,
          explain:
            "Use param = value to assign a default if the argument is not passed.",
        },
        {
          q: "Which syntax types a function variable?",
          code: "let calc: (a: number, b: number) => number;",
          choices: [
            "let calc: function",
            "let calc: () => any",
            "let calc: (a: number, b: number) => number",
            "let calc: number",
          ],
          correct: 2,
          explain:
            "(a: number, b: number) => number explicitly types the function variable parameters and return type.",
        },
      ],
      challenge: {
        title: "Type a Function",
        desc: "Write a properly typed TypeScript function with parameters, optional values, and return type.",
        task: `Write a function called <strong>formatName</strong> that:
  - Takes <strong>firstName</strong> (string)
  - <strong>lastName</strong> (string)
  - Optional <strong>title</strong> (string)
  - Returns a formatted string combining the inputs.

  All parameters and the return type must be explicitly typed.`,
        starterCode: `// Write the formatName function with typed params and return type
  function formatName(firstName: string, lastName: string, title?: string): string {
    // Your code here
    return "";
  }`,
        hint: `function formatName(firstName: string, lastName: string, title?: string): string { ... }`,
        checks:
          "Check that formatName has firstName and lastName typed as string, an optional title parameter, returns string, and combines inputs correctly.",
      },
    },
    {
      id: 6,
      icon: "[|]",
      title: "Union Types",
      desc: "Values that can be one of several types",
      content: [
        {
          type: "text",
          heading: "What Are Union Types?",
          body: `Union types let a variable hold values of <strong>more than one type</strong> using the <code>|</code> (pipe) operator.  
      This is safer than <code>any</code> because TypeScript still knows the possible types and provides type checking.  
      <br><br>
      <strong>Benefits:</strong>
      <ul>
        <li>Allows flexibility without losing type safety</li>
        <li>Supports type narrowing using typeof, instanceof, or in</li>
        <li>Works well with type aliases for readability</li>
        <li>Can combine multiple literal types for stricter allowed values</li>
      </ul>`,
        },
        {
          type: "code",
          heading: "Basic Union Example",
          file: "unions.ts",
          code: `let id: string | number;

id = "USER_123"; // OK
id = 42;         // OK

function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // string methods safe here
  } else {
    console.log(id.toFixed(2));   // number methods safe here
  }
}

printId("abc"); // Output: ABC
printId(123);   // Output: 123.00`,
        },
        {
          type: "code",
          heading: "Type Aliases with Unions",
          file: "aliases.ts",
          code: `// Give union types a name
type ID = string | number;
type Status = "pending" | "approved" | "rejected";
type Direction = "north" | "south" | "east" | "west";

let orderId: ID = "ORD-001";
let status: Status = "pending";  // only these 3 values allowed
let dir: Direction = "north";

// status = "shipped"; // ❌ Error! Not allowed`,
        },
        {
          type: "points",
          heading: "Type Narrowing with Unions",
          points: [
            "Use typeof checks to narrow primitive types (string, number, boolean).",
            "Use instanceof to narrow class instances.",
            "Use the in operator to check for specific properties.",
            "TypeScript tracks which branch you are in to enforce correct operations.",
            "Type aliases make union types easier to read and reuse.",
          ],
        },
      ],
      quiz: [
        {
          q: "Which operator creates union types?",
          choices: ["&", "|", "+", "||"],
          correct: 1,
          explain: "The | pipe operator creates union types.",
        },
        {
          q: "Which is valid for: let x: string | number",
          choices: ["x = true", "x = []", 'x = "hello"', "x = {}"],
          correct: 2,
          explain:
            '"hello" is a string, which is in the string | number union.',
        },
        {
          q: "What is a literal type?",
          code: 'type Dir = "north" | "south";',
          choices: [
            "A type alias for any string",
            "A type restricted to exact specific values",
            "A union of numbers",
            "A boolean type",
          ],
          correct: 1,
          explain:
            "Literal types restrict a variable to specific exact values.",
        },
        {
          q: "Which TypeScript feature is safer than using any?",
          choices: ["Union types", "void", "Object", "Number"],
          correct: 0,
          explain:
            "Union types allow flexibility while keeping type safety, unlike any.",
        },
        {
          q: "What is true about type aliases?",
          choices: [
            "Cannot use unions",
            "Give a name to a type",
            "Are runtime objects",
            "Make any type readonly",
          ],
          correct: 1,
          explain:
            "Type aliases allow you to name a union (or other types) for readability and reuse.",
        },
      ],
      challenge: {
        title: "Unions & Type Aliases",
        desc: "Practice creating and using union types.",
        task: `1. Create a type alias called <strong>Result</strong> that is <code>string | number | boolean</code>.<br>
2. Create a type alias called <strong>Theme</strong> that is a literal union of <code>"light"</code> and <code>"dark"</code>.<br>
3. Declare a variable <strong>currentTheme</strong> of type Theme and assign it "light" or "dark".`,
        starterCode: `// Create type aliases

// Declare currentTheme
`,
        hint: 'type Result = string | number | boolean; type Theme = "light" | "dark"; let currentTheme: Theme = "light";',
        checks:
          'Verify Result type alias is defined as string | number | boolean, Theme type alias is defined as "light" | "dark", and currentTheme variable is assigned either "light" or "dark".',
      },
    },

    // ── LESSON 7 ──
    {
      id: 7,
      icon: "[C]",
      title: "Classes",
      desc: "Blueprints for objects — OOP in TypeScript",
      content: [
        {
          type: "text",
          heading: "What are Classes?",
          body: `Classes are <strong>blueprints for creating objects</strong>. They allow you to define properties and methods for objects.
        TypeScript adds <strong>access modifiers</strong> (public, private, protected) and strict typing on top of JavaScript classes, making object-oriented programming (OOP) safer and more expressive.
        <br><br>
        Benefits:
        <ul>
          <li>Reusable blueprints for objects</li>
          <li>Type-safe properties and methods</li>
          <li>Supports inheritance and code reuse</li>
          <li>Access modifiers improve encapsulation</li>
        </ul>`,
        },
        {
          type: "code",
          heading: "Basic Class",
          file: "person.ts",
          code: `class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age  = age;
    }

    greet(): string {
      return \`Hi, I'm \${this.name}!\`;
    }
  }

  const alice = new Person("Alice", 25);
  console.log(alice.greet()); // Output: Hi, I'm Alice!`,
        },
        {
          type: "points",
          heading: "Access Modifiers",
          points: [
            "public  — accessible from anywhere (default)",
            "private — accessible only inside the class",
            "protected — accessible inside the class and subclasses",
          ],
        },
        {
          type: "code",
          heading: "Shorthand Constructor",
          file: "shorthand.ts",
          code: `// Verbose way:
  class Dog {
    name: string;
    constructor(name: string) { this.name = name; }
  }

  // Shorthand — declare + assign in one step:
  class DogShort {
    constructor(public name: string, public breed: string) {}
  }

  const rex = new DogShort("Rex", "Labrador");
  console.log(rex.name); // Output: Rex`,
        },
        {
          type: "code",
          heading: "Inheritance",
          file: "inheritance.ts",
          code: `class Animal {
    constructor(public name: string) {}
    
    speak(): string {
      return \`\${this.name} makes a sound.\`;
    }
  }

  class Dog extends Animal {
    constructor(name: string, public breed: string) {
      super(name); // Call parent constructor
    }

    speak(): string {
      return \`\${this.name} barks!\`;
    }
  }

  const dog = new Dog("Rex", "Labrador");
  console.log(dog.speak()); // Output: Rex barks!`,
        },
        {
          type: "code",
          heading: "Using Private & Protected",
          file: "private-protected.ts",
          code: `class BankAccount {
    constructor(public owner: string, private balance: number) {}

    deposit(amount: number): void {
      this.balance += amount;
    }

    getBalance(): number {
      return this.balance;
    }
  }

  const account = new BankAccount("Alice", 1000);
  account.deposit(500);
  console.log(account.getBalance()); // Output: 1500
  // console.log(account.balance); // ❌ Error: 'balance' is private`,
        },
        {
          type: "points",
          heading: "Key Notes About Classes",
          points: [
            "Classes define blueprints, not actual objects — use `new` to create instances.",
            "Access modifiers control visibility of properties and methods.",
            "Shorthand constructors reduce boilerplate.",
            "Inheritance allows reusing code and overriding methods.",
            "TypeScript enforces types in properties, constructor parameters, and methods.",
          ],
        },
      ],
      quiz: [
        {
          q: "What keyword creates a class?",
          choices: ["object", "type", "class", "interface"],
          correct: 2,
          explain:
            "The class keyword defines a blueprint for creating objects.",
        },
        {
          q: "What does private mean?",
          choices: [
            "Accessible anywhere",
            "Only inside the class",
            "Only in subclasses",
            "Read-only",
          ],
          correct: 1,
          explain:
            "private means only code inside the same class can access that property.",
        },
        {
          q: "What does super() do in a subclass?",
          choices: [
            "Creates a new instance",
            "Calls the parent constructor",
            "Deletes the parent",
            "Makes a method public",
          ],
          correct: 1,
          explain:
            "super() calls the constructor of the parent class — required when extending.",
        },
        {
          q: "Which is true about protected?",
          choices: [
            "Accessible anywhere",
            "Accessible inside class and subclasses",
            "Cannot be accessed ever",
            "Same as public",
          ],
          correct: 1,
          explain:
            "protected allows access in the class and its subclasses only.",
        },
        {
          q: "What is shorthand constructor syntax?",
          choices: [
            "Declare properties inside constructor parameters",
            "Use let outside",
            "Use type aliases",
            "Use arrow functions",
          ],
          correct: 0,
          explain:
            "You can declare and initialize properties directly in constructor parameters using access modifiers.",
        },
      ],
      challenge: {
        title: "Build a Class",
        desc: "Create a TypeScript class with typed properties, access modifiers, and a method.",
        task: `Create a class called <strong>Car</strong> with:
  - <strong>public make</strong> (string)
  - <strong>public model</strong> (string)
  - <strong>private year</strong> (number)
  - Add a method called <strong>getInfo()</strong> that returns a string like "Make Model (Year)".
  - Use shorthand constructor syntax if possible.`,
        starterCode: `// Create the Car class
  `,
        hint: `class Car { constructor(public make: string, public model: string, private year: number) {} getInfo(): string { return \`\${this.make} \${this.model} (\${this.year})\`; } }`,
        checks:
          "Verify that Car class has public make/model, private year, a getInfo method returning a string. Shorthand constructor is optional but recommended.",
      },
    },

    // ── LESSON 8 ──
    {
      id: 8,
      icon: "[T]",
      title: "Generics",
      desc: "Write once, work with any type",
      content: [
        {
          type: "text",
          heading: "What Are Generics?",
          body: `Generics allow you to write **reusable code** that works with different types while still being **type-safe**.  
      Without generics, you would need to write separate functions, classes, or interfaces for each type.  

      <br><br>
      Generics use the syntax <code>&lt;T&gt;</code> (T stands for "type", but you can name it anything).  
      You can think of generics as **placeholders for types** that get specified when the code is used.  

      <br><br>
      <strong>Benefits of Generics:</strong>
      <ul>
        <li>Write one function or class that works with any type</li>
        <li>Maintain type safety — TypeScript knows the type at compile time</li>
        <li>Improve code reuse and reduce duplication</li>
        <li>Combine with constraints to enforce required properties</li>
        <li>Works with functions, interfaces, classes, and type aliases</li>
      </ul>`,
        },
        {
          type: "code",
          heading: "Generic Function Example",
          file: "generics.ts",
          code: `// Without generics — duplicate functions for each type
function getFirstNumber(arr: number[]): number { return arr[0]; }
function getFirstString(arr: string[]): string  { return arr[0]; }

// With generics — one function handles ANY type
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// Usage examples
getFirst<number>([1, 2, 3]);     // 1
getFirst<string>(["a", "b"]);    // "a"
getFirst([true, false]);         // TypeScript infers boolean automatically`,
        },
        {
          type: "code",
          heading: "Generic Interface Example",
          file: "api-response.ts",
          code: `interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

interface User { name: string; email: string; }

const userRes: ApiResponse<User> = {
  data: { name: "Alice", email: "a@example.com" },
  success: true,
  message: "User found"
};

const countRes: ApiResponse<number> = {
  data: 42,
  success: true,
  message: "Count retrieved"
};`,
        },
        {
          type: "code",
          heading: "Generics with Constraints",
          file: "constraints.ts",
          code: `// T must have a .length property
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

logLength("hello");      // 5
logLength([1, 2, 3]);    // 3
// logLength(42);         // ❌ Error - number has no .length

// Multiple type parameters
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b } as T & U;
}

const merged = merge({ name: "Alice" }, { age: 25 });
// merged: { name: string, age: number }`,
        },
        {
          type: "points",
          heading: "Why Use Generics?",
          points: [
            "Write flexible, reusable functions, interfaces, and classes.",
            "Maintain strong type safety across multiple uses.",
            "Combine with type inference for cleaner code.",
            "Add constraints to ensure certain properties exist on generic types.",
            "Reduces duplicate code and improves maintainability.",
          ],
        },
      ],
      quiz: [
        {
          q: "What syntax marks a generic type parameter?",
          choices: ["(T)", "[T]", "<T>", "{T}"],
          correct: 2,
          explain: "Generic type parameters use angle brackets: <T>.",
        },
        {
          q: "What does extends do in a generic constraint?",
          code: "function fn<T extends { length: number }>(v: T) {}",
          choices: [
            "Makes T extend a class",
            "Limits T to types that have .length",
            "Inherits from T",
            "Creates a subtype",
          ],
          correct: 1,
          explain: "extends in generics constrains what types T can be.",
        },
        {
          q: "What is inferred here?",
          code: "getFirst([1, 2, 3])",
          choices: ["any", "unknown", "number", "string"],
          correct: 2,
          explain: "TypeScript infers T = number from the array contents.",
        },
        {
          q: "Which is a benefit of generics?",
          choices: [
            "Write multiple duplicate functions",
            "Improve code reuse with type safety",
            "Remove all type checking",
            "Force all values to be strings",
          ],
          correct: 1,
          explain:
            "Generics allow one function to work with multiple types safely, improving reuse.",
        },
        {
          q: "Where can generics be used?",
          choices: ["Functions", "Interfaces", "Classes", "All of the above"],
          correct: 3,
          explain:
            "Generics can be applied to functions, interfaces, classes, and type aliases.",
        },
      ],
      challenge: {
        title: "Write a Generic Function",
        desc: "Practice the generic <T> syntax.",
        task: `Write a generic function called <strong>wrapInArray</strong> that:
1. Takes a value of type <strong>T</strong>
2. Returns it wrapped in an array of type <strong>T[]</strong>
3. Call it at least twice, once with a string and once with a number.`,
        starterCode: `// Generic function

// Call with a string

// Call with a number
`,
        hint: "function wrapInArray<T>(value: T): T[] { return [value]; }",
        checks:
          "Verify wrapInArray is a generic function using <T>, takes a parameter of type T, and returns an array of T. Ensure it is called with at least two different types (e.g., string and number).",
      },
    },
    // lesson 9
    {
      id: 9,
      icon: "[E]",
      title: "Enums",
      desc: "Named constants — goodbye magic strings",
      content: [
        {
          type: "text",
          heading: "What Are Enums?",
          body: `Enums let you define a set of **named constants**, which makes your code **more readable** and **self-documenting**.  
      Instead of using "magic numbers" or strings, enums give meaningful names to values.  

      <br><br>
      Benefits of using enums:
      <ul>
        <li>Replace magic strings or numbers with readable names</li>
        <li>Make code easier to maintain and refactor</li>
        <li>Provide type safety — only valid enum values can be used</li>
        <li>Work well with switch statements, comparisons, and mappings</li>
        <li>Support numeric, string, and const enums (zero runtime cost)</li>
      </ul>`,
        },
        {
          type: "code",
          heading: "Numeric Enums",
          file: "numeric-enum.ts",
          code: `enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0

// You can set a custom start value
enum Priority { 
  Low = 1, 
  Medium = 2, 
  High = 3 
}

console.log(Priority.Medium); // 2`,
        },
        {
          type: "code",
          heading: "String Enums (preferred)",
          file: "string-enum.ts",
          code: `// String enums are more readable
enum Status {
  Pending  = "PENDING",
  Active   = "ACTIVE",
  Inactive = "INACTIVE"
}

enum UserRole {
  Admin = "admin",
  User  = "user",
  Guest = "guest"
}

function checkRole(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Welcome, admin!");
  }
}

checkRole(UserRole.Admin); // Welcome, admin!`,
        },
        {
          type: "code",
          heading: "Const Enum — zero runtime cost",
          file: "const-enum.ts",
          code: `// const enum values are inlined and removed at compile time
const enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let fav: Color = Color.Blue;
// Compiles to: let fav = "BLUE"
// The enum object is not included in JavaScript output`,
        },
        {
          type: "points",
          heading: "Tips & Best Practices",
          points: [
            "Prefer string enums for readability and debugging.",
            "Use numeric enums only when you need automatic numbering or bit flags.",
            "Use const enums for performance when values are fixed and won’t need the object at runtime.",
            "Enums can be used in switch statements for exhaustive checks.",
            "TypeScript ensures only valid enum values can be assigned.",
          ],
        },
      ],
      quiz: [
        {
          q: "What is the default value of the first enum member?",
          choices: ["1", "undefined", "0", '"first"'],
          correct: 2,
          explain:
            "Numeric enums auto-number from 0 unless you specify a starting value.",
        },
        {
          q: "Which enum type is preferred in modern TypeScript?",
          choices: [
            "Numeric enum",
            "Const enum",
            "String enum",
            "Boolean enum",
          ],
          correct: 2,
          explain:
            "String enums are preferred because the values are readable when debugging.",
        },
        {
          q: "What does a const enum do?",
          choices: [
            "Creates a runtime object",
            "Gets inlined and removed at compile time",
            "Is only for constants",
            "Prevents enum mutation",
          ],
          correct: 1,
          explain:
            "const enum values are inlined directly — no enum object exists at runtime.",
        },
        {
          q: "Can you assign a value outside the enum?",
          choices: [
            "Yes, any value",
            "No, only valid enum members",
            "Yes, for numeric enums only",
            "Only for string enums",
          ],
          correct: 1,
          explain:
            "TypeScript prevents assigning values that are not part of the enum type.",
        },
        {
          q: "Which is more readable when debugging?",
          choices: ["Numeric enum", "String enum", "Const enum", "Any type"],
          correct: 1,
          explain:
            "String enums provide clear readable values instead of numbers.",
        },
      ],
      challenge: {
        title: "Create and Use an Enum",
        desc: "Practice defining and using TypeScript enums.",
        task: `1. Create a <strong>string enum</strong> called <strong>Season</strong> with four members:
- Spring = "spring"
- Summer = "summer"
- Autumn = "autumn"
- Winter = "winter"  

2. Declare a variable <strong>currentSeason</strong> of type Season and assign one of the enum values.`,
        starterCode: `// Define Season enum

// Declare currentSeason
`,
        hint: 'enum Season { Spring = "spring", Summer = "summer", Autumn = "autumn", Winter = "winter" }',
        checks:
          "Verify that Season is a string enum with all four members assigned string values. Check that currentSeason is declared with type Season and assigned a valid enum value.",
      },
    },

    // ── LESSON 10 ──
    {
      id: 10,
      icon: "[N]",
      title: "Type Narrowing",
      desc: "Teach TS to figure out exact types at runtime",
      content: [
        {
          type: "text",
          heading: "What is Type Narrowing?",
          body: `Type narrowing is how TypeScript <strong>figures out a more specific type</strong> from a broad one. 
      When you have a union type (like <code>string | number</code>), TypeScript cannot automatically use type-specific methods. 
      Type narrowing allows you to safely tell TypeScript the exact type at runtime using guards or assertions.`,
        },
        {
          type: "text",
          heading: "Why Use Type Narrowing?",
          body: `- Prevents runtime errors by letting TypeScript know the exact type.<br>
      - Allows safe use of type-specific methods (like <code>toUpperCase()</code> for strings).<br>
      - Works well with <strong>union types</strong> and complex objects.<br>
      - Improves IDE support and autocomplete.`,
        },
        {
          type: "code",
          heading: "Using typeof Guard",
          file: "typeof-guard.ts",
          code: `// ID 10-1: typeof guard
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    // TypeScript knows value is string
    return value.toUpperCase();
  } else {
    // TypeScript knows value is number
    return value.toFixed(2);
  }
}

console.log(formatValue("hello")); // "HELLO"
console.log(formatValue(3.14));    // "3.14"`,
        },
        {
          type: "code",
          heading: "Using instanceof Guard",
          file: "instanceof-guard.ts",
          code: `// ID 10-2: instanceof guard
class Cat { meow() { return "Meow!"; } }
class Dog { bark() { return "Woof!"; } }

function makeSound(animal: Cat | Dog): string {
  if (animal instanceof Cat) {
    return animal.meow(); // TS knows it's Cat
  }
  return animal.bark();   // TS knows it's Dog
}

console.log(makeSound(new Cat())); // "Meow!"
console.log(makeSound(new Dog())); // "Woof!"`,
        },
        {
          type: "code",
          heading: 'Using "in" Operator Guard',
          file: "in-guard.ts",
          code: `// ID 10-3: "in" operator guard
interface Admin       { name: string; adminLevel: number; }
interface RegularUser { name: string; email: string; }

function describeUser(user: Admin | RegularUser): string {
  if ("adminLevel" in user) {
    return \`Admin level: \${user.adminLevel}\`;
  }
  return \`Email: \${user.email}\`;
}

const admin: Admin = { name: "Alice", adminLevel: 3 };
const user: RegularUser = { name: "Bob", email: "bob@example.com" };

console.log(describeUser(admin)); // "Admin level: 3"
console.log(describeUser(user));  // "Email: bob@example.com"`,
        },
        {
          type: "code",
          heading: "Type Assertion (as)",
          file: "type-assertion.ts",
          code: `// ID 10-4: type assertion
const input = document.createElement("input") as HTMLInputElement;
input.value = "Hello TypeScript";
console.log(input.value); // "Hello TypeScript"`,
        },
        {
          type: "points",
          heading: "Key Notes About Type Narrowing",
          points: [
            "Type narrowing helps TS figure out the exact type in union types.",
            "Use typeof for primitive types: string, number, boolean.",
            "Use instanceof for class instances.",
            'Use "in" to check for object property existence.',
            "Type assertions (as) override type inference — be careful!",
            "Narrowing allows safe use of type-specific methods and prevents errors.",
          ],
        },
      ],
      quiz: [
        {
          q: "Which guard works best for primitive types?",
          choices: ["instanceof", "in operator", "typeof", "as assertion"],
          correct: 2,
          explain:
            "typeof is the right tool for string, number, boolean primitives.",
        },
        {
          q: "Which guard checks if a property exists on an object?",
          choices: ["typeof", "instanceof", "in", "as"],
          correct: 2,
          explain:
            "The in operator checks for the existence of a property on an object.",
        },
        {
          q: 'What does the "as" keyword do?',
          choices: [
            "Converts a value to a different type",
            "Asserts a type — tells TS what type you believe it is",
            "Creates a type alias",
            "Narrows a union",
          ],
          correct: 1,
          explain:
            '"as" is a type assertion — you tell TypeScript the type. Use with caution!',
        },
      ],
      challenge: {
        title: "Narrow a Union Type",
        desc: "Use typeof to safely work with a union type.",
        task: `Write a function called <strong>describe</strong> that takes a parameter <strong>value</strong> of type <code>string | number | boolean</code>. 
Use <strong>typeof</strong> guards to return different strings: 
- If string → return its length
- If number → return it doubled
- If boolean → return "yes" or "no"`,
        starterCode: `// ID 10-5: Challenge
function describe(value: string | number | boolean): string {
  // Your code here
  return "";
}`,
        hint: `Use typeof checks: 
if (typeof value === "string") { ... } 
else if (typeof value === "number") { ... } 
else { ... }`,
        checks:
          "Verify describe function takes a string | number | boolean union parameter and uses typeof guards to handle each type differently, returning a string in all branches.",
      },
    },

    // ── LESSON 11 ──
    {
      id: 11,
      icon: "[M]",
      title: "Modules",
      desc: "Split code across files — the modern way",
      content: [
        {
          type: "text",
          heading: "What are Modules?",
          body: `As projects grow, managing all code in a single file becomes messy. Modules allow you to split code into <strong>separate files</strong>. 
      TypeScript supports ES Modules — the modern standard — letting you <code>export</code> and <code>import</code> functions, variables, classes, or types. 
      This keeps your code organized, reusable, and maintainable.`,
        },
        {
          type: "text",
          heading: "Why Use Modules?",
          body: `- **Organize code**: Keep related functions/types together.<br>
      - **Reusability**: Share code across multiple files or projects.<br>
      - **Tree-shaking**: Only include what is used in the final bundle.<br>
      - **Type safety**: Import types explicitly for safer code.<br>
      - **Easier collaboration**: Multiple developers can work on separate modules without conflicts.`,
        },
        {
          type: "code",
          heading: "Exporting Code",
          file: "math.ts",
          code: `// ID 11-1: Named exports
      export function add(a: number, b: number): number {
        return a + b;
      }

      export function subtract(a: number, b: number): number {
        return a - b;
      }

      export const PI: number = 3.14159;

      // Default export — one per file
      export default function multiply(a: number, b: number): number {
        return a * b;
      }`,
        },
        {
          type: "code",
          heading: "Importing Code",
          file: "app.ts",
          code: `// ID 11-2: Named imports
      import { add, subtract, PI } from "./math";

      // Default import
      import multiply from "./math";

      // Import everything as namespace
      import * as MathUtils from "./math";

      console.log(add(2, 3));          // 5
      console.log(PI);                 // 3.14159
      console.log(multiply(3, 4));     // 12
      console.log(MathUtils.add(1, 2));// 3`,
        },
        {
          type: "code",
          heading: "Exporting Types",
          file: "types.ts",
          code: `// ID 11-3: Export interfaces and type aliases
      export interface User {
        id: number;
        name: string;
        email: string;
      }

      export type Status = "active" | "inactive" | "banned";

      // In another file — use "import type" for type-only imports
      import type { User, Status } from "./types";

      function getUser(id: number): User {
        return { id, name: "Alice", email: "a@example.com" };
      }`,
        },
        {
          type: "text",
          heading: "Best Practices for Modules",
          body: `- Put all shared interfaces/types in a dedicated <code>types/</code> folder.<br>
            - Use <code>import type</code> when importing types only — this speeds up compilation.<br>
            - Limit files to a single default export; prefer named exports for flexibility.<br>
            - Always organize related code together to make modules self-contained and readable.`,
        },
      ],
      quiz: [
        {
          q: "Which keyword makes a function available to other files?",
          choices: ["public", "export", "import", "expose"],
          correct: 1,
          explain:
            "export makes declarations available for import in other files.",
        },
        {
          q: "How do you import a default export?",
          code: 'import ___ from "./math";',
          choices: ["{multiply}", "* as multiply", "multiply", "(multiply)"],
          correct: 2,
          explain:
            'Default exports are imported without curly braces: import multiply from "./math".',
        },
        {
          q: 'What is the benefit of "import type"?',
          choices: [
            "Faster syntax",
            "Imports values AND types",
            "Only imports types — removed at compile time",
            "Prevents circular imports",
          ],
          correct: 2,
          explain:
            '"import type" is erased at compile time, making builds faster and cleaner.',
        },
        {
          q: "How can you import all named exports under one namespace?",
          choices: [
            'import { * } from "./file"',
            'import * as NS from "./file"',
            'import NS from "./file"',
            'import all from "./file"',
          ],
          correct: 1,
          explain:
            'Use import * as NS from "./file" to access all exports as NS.exportName.',
        },
        {
          q: "Which type of export is preferred for multiple functions?",
          choices: [
            "default export",
            "named export",
            "public export",
            "global export",
          ],
          correct: 1,
          explain:
            "Named exports are easier to maintain and allow tree-shaking; default exports are limited to one per file.",
        },
      ],
      challenge: {
        title: "Advanced Module Challenge",
        desc: "Practice creating modules with functions, types, and classes and importing them correctly.",
        task: `Create three files: 
      1. <code>utils.ts</code> — export a function <strong>greet(name: string)</strong> returning "Hello, name!" and export an interface <strong>Person</strong> with <strong>name</strong> and <strong>age</strong> properties.
      2. <code>math.ts</code> — export a function <strong>square(n: number)</strong> returning the square of the number and a default export function <strong>cube(n: number)</strong> returning the cube.
      3. <code>app.ts</code> — import all functions and the interface, create a <strong>Person</strong> object, greet them, and calculate square and cube of a number.`,
        starterCode: `// utils.ts
      export function greet(name: string): string {
        return "";
      }

      export interface Person {
        name: string;
        age: number;
      }

      // math.ts
      export function square(n: number): number {
        return 0;
      }
      export default function cube(n: number): number {
        return 0;
      }

      // app.ts
      // Import statements here

      // Create a Person object
      // Call greet
      // Call square and cube functions`,
        hint: `Use:
      export function greet(name: string): string { ... }
      export interface Person { ... }
      export function square(n: number): number { ... }
      export default function cube(n: number): number { ... }
      import multiply from "./math";
      import { greet, Person, square } from "./utils or math";`,
        checks:
          "Check that utils.ts exports greet and Person, math.ts exports square and a default cube function. app.ts imports everything correctly, creates a Person object, and calls all functions with proper arguments.",
      },
    },

    // ── LESSON 12 ──
    {
      id: 12,
      icon: "[U]",
      title: "Utility Types",
      desc: "Built-in type helpers — Partial, Pick, Omit, Record, ReturnType, NonNullable",
      content: [
        {
          type: "text",
          heading: "What are Utility Types?",
          body: `TypeScript comes with several <strong>built-in generic types</strong> that help you transform or manipulate existing types without rewriting them.  
      Instead of manually creating similar types, you can <strong>compose and transform types</strong> to make your code safer and more maintainable.  

      Common utility types:
      - <code>Partial&lt;T&gt;</code> — makes all properties optional  
      - <code>Required&lt;T&gt;</code> — makes all properties required  
      - <code>Pick&lt;T,K&gt;</code> — select only certain keys  
      - <code>Omit&lt;T,K&gt;</code> — remove certain keys  
      - <code>Record&lt;K,V&gt;</code> — create a typed key-value map  
      - <code>ReturnType&lt;T&gt;</code> — infer the return type of a function  
      - <code>NonNullable&lt;T&gt;</code> — remove <code>null</code> and <code>undefined</code>`,
        },
        {
          type: "code",
          heading: "Partial<T> and Required<T>",
          file: "partial-required.ts",
          code: `interface User {
  name: string;
  age: number;
  email: string;
}

// Partial — all properties optional
function updateUser(id: number, data: Partial<User>): void {
  // data can have any subset of User fields
}

updateUser(1, { name: "Alice" });   // OK — just name
updateUser(2, { age: 30 });         // OK — just age

// Required — all optional become required
interface Config { host?: string; port?: number; }
function saveConfig(cfg: Required<Config>): void {
  console.log(cfg.host, cfg.port); // guaranteed to exist
}`,
        },
        {
          type: "code",
          heading: "Pick<T,K> and Omit<T,K>",
          file: "pick-omit.ts",
          code: `interface User {
  id: number;
  name: string;
  email: string;
  password: string;  // sensitive!
}

// Pick — keep only what you need
type UserCard = Pick<User, "id" | "name" | "email">;
// { id: number; name: string; email: string }

// Omit — remove what you don't want
type PublicUser = Omit<User, "password">;
// { id, name, email } — password removed!

function getProfile(user: User): PublicUser {
  const { password, ...rest } = user;
  return rest;
}`,
        },
        {
          type: "code",
          heading: "Record<K,V>, ReturnType<T>, NonNullable<T>",
          file: "record-returntype.ts",
          code: `// Record — typed key-value map
type Fruit = "apple" | "banana" | "orange";
const inventory: Record<Fruit, number> = {
  apple: 50, banana: 30, orange: 20
};

// ReturnType — extract function return type
function getUser() {
  return { name: "Alice", age: 25 };
}
type UserData = ReturnType<typeof getUser>;
// { name: string; age: number }

// NonNullable — remove null and undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // string`,
        },
        {
          type: "points",
          heading: "Key Notes About Utility Types",
          points: [
            "Use Partial<T> when updating objects without all fields.",
            "Required<T> ensures all optional fields are present.",
            "Pick<T,K> extracts only certain keys from a type.",
            "Omit<T,K> removes keys from a type — useful for hiding sensitive data.",
            "Record<K,V> creates a map with fixed keys and typed values.",
            "ReturnType<T> infers a function’s return type, helpful for reusable types.",
            "NonNullable<T> removes null and undefined from union types.",
          ],
        },
      ],
      quiz: [
        {
          q: "What does Partial<T> do?",
          choices: [
            "Makes all properties required",
            "Makes all properties optional",
            "Removes all properties",
            "Picks some properties",
          ],
          correct: 1,
          explain:
            "Partial<T> makes every property in T optional by adding ? to each.",
        },
        {
          q: "When should you use Omit<T, K>?",
          choices: [
            "When you want a few keys",
            "When you want all keys except some",
            "When all props are optional",
            "When types are unknown",
          ],
          correct: 1,
          explain:
            "Use Omit when you want everything except specific fields — like removing a password field.",
        },
        {
          q: "What does ReturnType<typeof fn> give you?",
          choices: [
            "The function parameters",
            "The function name",
            "The return type of the function",
            "The function body",
          ],
          correct: 2,
          explain: "ReturnType extracts the type that a function returns.",
        },
        {
          q: "Which utility type makes all optional fields required?",
          choices: ["Partial", "Required", "Pick", "Omit"],
          correct: 1,
          explain:
            "Required<T> converts optional properties into required ones.",
        },
        {
          q: "What is Record<K,V> used for?",
          choices: [
            "Define a map with typed keys and values",
            "Pick certain properties",
            "Remove keys",
            "Infer function return type",
          ],
          correct: 0,
          explain: "Record<K,V> creates a strongly typed key-value map.",
        },
        {
          q: "What does NonNullable<T> do?",
          choices: [
            "Keeps null/undefined",
            "Removes null/undefined",
            "Makes type optional",
            "Converts to string",
          ],
          correct: 1,
          explain: "NonNullable<T> removes null and undefined from a type.",
        },
      ],
      challenge: {
        title: "Advanced Utility Types Challenge",
        desc: "Combine multiple utility types to create safer interfaces.",
        task: `Given an interface <strong>Product</strong>:
      - id: number  
      - name: string  
      - price: number  
      - secret: string  

      Do the following:
      1. Create a type <strong>PublicProduct</strong> using <code>Omit</code> to remove the secret field.  
      2. Create a type <strong>UpdateProduct</strong> using <code>Partial</code> on PublicProduct.  
      3. Create a type <strong>ProductMap</strong> using <code>Record&lt;number, PublicProduct&gt;</code> to represent multiple products keyed by id.  
      4. Create a type <strong>ProductReturn</strong> using <code>ReturnType</code> from a function <code>getProduct</code> that returns a Product.`,
        starterCode: `interface Product {
        id: number;
        name: string;
        price: number;
        secret: string;
      }

      // Create PublicProduct using Omit

      // Create UpdateProduct using Partial

      // Create ProductMap using Record

      // Create ProductReturn using ReturnType
      function getProduct(): Product {
        return { id: 1, name: "Laptop", price: 999, secret: "top-secret" };
      }`,
        hint: `type PublicProduct = Omit<Product, "secret">;
      type UpdateProduct = Partial<PublicProduct>;
      type ProductMap = Record<number, PublicProduct>;
      type ProductReturn = ReturnType<typeof getProduct>;`,
        checks:
          "Verify PublicProduct uses Omit to remove secret. UpdateProduct uses Partial on PublicProduct. ProductMap uses Record<number, PublicProduct>. ProductReturn correctly uses ReturnType<typeof getProduct>.",
      },
    },

    // ── LESSON 13 ──
    {
      id: 13,
      icon: "[@]",
      title: "Decorators",
      desc: "Annotations for classes, methods, properties, and parameters",
      content: [
        {
          type: "text",
          heading: "What are Decorators?",
          body: `Decorators are <strong>functions that wrap other code</strong>. They start with <code>@</code> and sit above a class, method, property, or parameter.  
      TypeScript calls the decorator function and passes the target (class, property, method, etc.) to it.  

      Common use cases:
      - Logging method calls  
      - Freezing or sealing classes  
      - Adding metadata for frameworks (Angular, NestJS)  
      - Validating or transforming class properties`,
        },
        {
          type: "code",
          heading: "Enable decorators in tsconfig.json",
          file: "tsconfig.json",
          code: `{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "target": "ES2021"
  }
}`,
        },
        {
          type: "code",
          heading: "Class Decorator",
          file: "class-decorator.ts",
          code: `// Simple class decorator
function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@Sealed
class BankAccount {
  owner: string;
  constructor(owner: string) { this.owner = owner; }
}

// Decorator factory (with arguments)
function Controller(path: string) {
  return function(constructor: Function) {
    Reflect.defineMetadata('path', path, constructor);
  };
}

@Controller('/users')
class UserController { /* handles /users routes */ }`,
        },
        {
          type: "code",
          heading: "Method Decorator",
          file: "method-decorator.ts",
          code: `function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${key} with:\`, args);
    const result = original.apply(this, args);
    console.log(\`\${key} returned:\`, result);
    return result;
  };
  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number { return a + b; }
}

const calc = new Calculator();
calc.add(3, 4);
// Output:
// Calling add with: [3, 4]
// add returned: 7`,
        },
        {
          type: "code",
          heading: "Property & Parameter Decorators",
          file: "property-parameter-decorator.ts",
          code: `// Property decorator
function Readonly(target: any, key: string) {
  Object.defineProperty(target, key, { writable: false });
}

class Settings {
  @Readonly
  version = "1.0";
}

// Parameter decorator
function LogParam(target: any, methodName: string, paramIndex: number) {
  console.log(\`Parameter at position \${paramIndex} in method \${methodName} is decorated\`);
}

class Greeter {
  greet(@LogParam message: string) {
    console.log(message);
  }
}`,
        },
        {
          type: "points",
          heading: "5 Types of Decorators",
          points: [
            "@ClassDecorator — applied to the constructor",
            "@MethodDecorator — wraps a method (target, key, descriptor)",
            "@PropertyDecorator — applied to class fields",
            "@ParameterDecorator — applied to function parameters",
            "@AccessorDecorator — applied to getters/setters",
          ],
        },
      ],
      quiz: [
        {
          q: "What symbol starts a decorator?",
          choices: ["#", "$", "@", "!"],
          correct: 2,
          explain:
            "Decorators always start with @ placed directly above the target.",
        },
        {
          q: "What must you enable in tsconfig for decorators?",
          choices: [
            "strictDecorators",
            "allowDecorators",
            "experimentalDecorators",
            "useDecorators",
          ],
          correct: 2,
          explain:
            'Set "experimentalDecorators": true in compilerOptions to enable decorators.',
        },
        {
          q: "Which framework uses decorators as its entire API?",
          choices: ["React", "Vue", "Svelte", "NestJS"],
          correct: 3,
          explain:
            "NestJS is built around decorators — @Controller, @Get, @Post, @Body etc.",
        },
        {
          q: "Which decorator type wraps a method and has access to descriptor?",
          choices: [
            "ClassDecorator",
            "MethodDecorator",
            "PropertyDecorator",
            "ParameterDecorator",
          ],
          correct: 1,
          explain:
            "MethodDecorators get target, key, and descriptor — allowing wrapping/modifying the method.",
        },
        {
          q: "What does a property decorator typically receive?",
          choices: [
            "target, key, descriptor",
            "target, key",
            "constructor only",
            "method and parameters",
          ],
          correct: 1,
          explain:
            "Property decorators receive target (prototype) and key (property name).",
        },
      ],
      challenge: {
        title: "Advanced Decorator Challenge",
        desc: "Combine class, property, and method decorators.",
        task: `1. Write a <strong>class decorator</strong> called <strong>Frozen</strong> that freezes the class prototype.<br>
    2. Write a <strong>property decorator</strong> called <strong>ReadOnly</strong> that makes a property non-writable.<br>
    3. Write a <strong>method decorator</strong> called <strong>LogCalls</strong> that logs arguments and return value.<br>
    4. Create a class <strong>AppConfig</strong> with a property <strong>version</strong> (string) and a method <strong>updateVersion(newVer: string)</strong>. Apply the decorators appropriately.`,
        starterCode: `// Class decorator
    function Frozen(constructor: Function) {
      // your code here
    }

    // Property decorator
    function ReadOnly(target: any, key: string) {
      // your code here
    }

    // Method decorator
    function LogCalls(target: any, key: string, descriptor: PropertyDescriptor) {
      // your code here
    }

    // Apply decorators to AppConfig
    @Frozen
    class AppConfig {
      @ReadOnly
      version: string = "1.0";

      @LogCalls
      updateVersion(newVer: string) {
        // your code here
      }
    }`,
        hint: `Frozen freezes the prototype. ReadOnly sets writable: false. LogCalls wraps the original method to log args and result. Decorators are applied above class/property/method. `,
        checks:
          "Verify Frozen class decorator exists and freezes prototype. ReadOnly decorator exists and makes version property non-writable. LogCalls method decorator exists and logs arguments and return value when updateVersion is called. AppConfig class uses all three decorators correctly.",
      },
    },

    // ── LESSON 14 ──
    {
      id: 14,
      icon: "[CF]",
      title: "tsconfig.json",
      desc: "Master your TypeScript compiler configuration and project setup",
      content: [
        {
          type: "text",
          heading: "What is tsconfig.json?",
          body: `TypeScript uses <code>tsconfig.json</code> to understand <strong>how to compile your project</strong>.  
      It controls:
      - <strong>target</strong>: which JS version to generate  
      - <strong>module</strong>: CommonJS, ES Modules, etc.  
      - <strong>strictness</strong>: type checks  
      - <strong>paths & aliases</strong>: cleaner imports  
      - <strong>rootDir / outDir</strong>: input/output folders  

      You can generate it with <code>tsc --init</code>.`,
        },
        {
          type: "code",
          heading: "Complete tsconfig template",
          file: "tsconfig.json",
          code: `{
  "compilerOptions": {
    "target": "ES2021",       // output JS version
    "module": "commonjs",     // module system
    "strict": true,           // enable ALL strict checks
    "outDir": "./dist",       // compiled JS goes here
    "rootDir": "./src",       // your TS source lives here
    "sourceMap": true,        // generate .map files for debugging
    "esModuleInterop": true,  // better CommonJS/ESM interop
    "resolveJsonModule": true // allow importing .json files
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
        },
        {
          type: "points",
          heading: "Target — Which JS version to output",
          points: [
            '"ES5" — widest browser support, no arrow functions',
            '"ES2017" — async/await native, Node.js 8+',
            '"ES2021" — recommended for most projects',
            '"ESNext" — latest features, may not run everywhere',
          ],
        },
        {
          type: "code",
          heading: "Path Aliases — Clean Imports",
          file: "tsconfig.json (paths)",
          code: `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"],
      "@components/*": ["src/components/*"]
    }
  }
}

// Before (ugly):
import { formatDate } from '../../../utils/date';

// After (clean):
import { formatDate } from '@utils/date';`,
        },
        {
          type: "text",
          heading: "Best Practices",
          body: `- Always use <code>strict: true</code> for maximum type safety.<br>
      - Organize your code with <code>rootDir</code> and <code>outDir</code>.<br>
      - Use <code>paths</code> to avoid long relative imports.<br>
      - Include only the necessary files (<code>include</code>) and exclude build/output folders (<code>exclude</code>).<br>
      - Enable <code>esModuleInterop</code> for smooth CommonJS/ESM usage.`,
        },
      ],
      quiz: [
        {
          q: 'What does "strict": true enable?',
          choices: [
            "Only null checks",
            "Only implicit any checks",
            "A collection of all strict type checks",
            "Faster compilation",
          ],
          correct: 2,
          explain:
            '"strict": true enables strictNullChecks, noImplicitAny, strictFunctionTypes and more — all at once.',
        },
        {
          q: 'What is the "outDir" option?',
          choices: [
            "Where TypeScript source lives",
            "Where compiled JavaScript output goes",
            "The entry point file",
            "The module resolution strategy",
          ],
          correct: 1,
          explain:
            '"outDir" specifies the folder where tsc puts the compiled .js files.',
        },
        {
          q: "What command generates a tsconfig.json automatically?",
          choices: [
            "tsc --config",
            "tsc --setup",
            "tsc --init",
            "npx tsconfig",
          ],
          correct: 2,
          explain:
            '"tsc --init" creates a tsconfig.json with all options commented.',
        },
        {
          q: "Which option allows importing JSON files directly?",
          choices: [
            "resolveJsonModule",
            "allowJsonImport",
            "esModuleInterop",
            "includeJson",
          ],
          correct: 0,
          explain:
            "resolveJsonModule allows importing JSON files and gets their types automatically.",
        },
        {
          q: 'What does "esModuleInterop" do?',
          choices: [
            "Enables default imports from CommonJS",
            "Converts ES Modules to CommonJS",
            "Adds strict type checking",
            "Generates source maps",
          ],
          correct: 0,
          explain:
            "esModuleInterop allows default imports from CommonJS modules to work seamlessly.",
        },
      ],
      challenge: {
        title: "Advanced tsconfig Challenge",
        desc: "Create a tsconfig with strict checks, output folder, and path aliases.",
        task: `Write a <code>tsconfig.json</code> object (as JS object here) that satisfies:
      - target: "ES2021"
      - strict: true
      - outDir: "./dist"
      - rootDir: "./src"
      - paths:
        - "@utils/*" -> "src/utils/*"
        - "@components/*" -> "src/components/*"
      - include only "src/**/*"
      - exclude "node_modules" and "dist"`,
        starterCode: `// tsconfig as JS object
      const config = {
        compilerOptions: {
          // your settings here
        },
        include: [],
        exclude: []
      };`,
        hint: `compilerOptions: { target: "ES2021", strict: true, outDir: "./dist", rootDir: "./src", paths: { "@utils/*": ["src/utils/*"], "@components/*": ["src/components/*"] } }, include: ["src/**/*"], exclude: ["node_modules", "dist"]`,
        checks:
          'Verify compilerOptions.target = "ES2021", strict = true, outDir = "./dist", rootDir = "./src", paths includes "@utils/*" and "@components/*", include is ["src/**/*"], exclude is ["node_modules","dist"].',
      },
    },

    // ── LESSON 15 ──
    {
      id: 15,
      icon: "[R]",
      title: "TypeScript + React",
      desc: "Type-safe components, hooks, events, and props validation",
      content: [
        {
          type: "text",
          heading: "Why Use TypeScript with React?",
          body: `TypeScript enhances React development by adding **static typing**.  
      Benefits include:
      - Typed props for components, preventing wrong prop types.
      - Typed state using useState, reducing runtime errors.
      - Typed refs using useRef to avoid null errors.
      - Typed events for form elements and custom components.
      - Autocompletion and better tooling in IDEs.`,
        },
        {
          type: "code",
          heading: "Typing Component Props",
          file: "Button.tsx",
          code: `interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger"; // optional prop
  disabled?: boolean;                              // optional prop
}

function Button({ label, onClick, variant = "primary", disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={\`btn btn-\${variant}\`}>
      {label}
    </button>
  );
}

// Usage — TypeScript will catch missing props
// <Button label="Save" onClick={() => save()} />     // OK
// <Button />                                        // Error: missing label and onClick`,
        },
        {
          type: "code",
          heading: "Typing useState and useRef",
          file: "hooks.tsx",
          code: `import { useState, useRef } from 'react';

function UserProfile() {
  // TS infers number automatically
  const [count, setCount] = useState(0);

  // Explicit typing — starts null
  const [user, setUser] = useState<User | null>(null);

  // Typing a DOM ref
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus(); // safe access
  };

  return <input ref={inputRef} />;
}`,
        },
        {
          type: "code",
          heading: "Typing Event Handlers",
          file: "Form.tsx",
          code: `import { ChangeEvent, FormEvent } from 'react';

function LoginForm() {
  // Input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value); // TS knows .value exists
  };

  // Form submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // process form...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  );
}`,
        },
        {
          type: "text",
          heading: "Best Practices",
          body: `- Always define interfaces or types for props.<br>
      - Prefer explicit generics for useState when null or undefined is possible.<br>
      - Type refs with the specific HTML element.<br>
      - Type event handlers with React.ChangeEvent or React.FormEvent.<br>
      - Optional props should be marked with ?.`,
        },
      ],
      quiz: [
        {
          q: "How do you type React component props?",
          choices: [
            "Using a class",
            "Using an interface or type alias",
            "Using any",
            "Using generics only",
          ],
          correct: 1,
          explain:
            "Define an interface or type alias for props, then annotate the parameter: ({ label }: ButtonProps).",
        },
        {
          q: "What is the type of an input change event?",
          choices: [
            "InputEvent",
            "ChangeEvent<HTMLInputElement>",
            "Event<input>",
            "FormEvent",
          ],
          correct: 1,
          explain:
            "React exports ChangeEvent<T> — parameterized with the element type.",
        },
        {
          q: "How do you type a useRef for an input element?",
          choices: [
            "useRef(null)",
            "useRef<input>(null)",
            "useRef<HTMLInputElement>(null)",
            "useRef<Element>()",
          ],
          correct: 2,
          explain:
            "Pass the HTML element type as generic: useRef<HTMLInputElement>(null).",
        },
        {
          q: "How do you type a button click event handler?",
          choices: [
            "() => void",
            "MouseEvent",
            "React.MouseEvent<HTMLButtonElement>",
            "any",
          ],
          correct: 2,
          explain: "Use React.MouseEvent<T> to type mouse events on elements.",
        },
        {
          q: "How do you mark a prop as optional?",
          choices: ["prop?: type", "prop: optional", "prop!", "prop?=type"],
          correct: 0,
          explain:
            "Use the ? symbol after the property name to make it optional.",
        },
      ],
      challenge: {
        title: "Advanced React Component Challenge",
        desc: "Combine required and optional props with typed events and state.",
        task: `1. Define an interface <strong>CardProps</strong> with:
   - title: string (required)
   - description: string (required)
   - onClick: optional function returning void
2. Create a functional component <strong>Card</strong> that:
   - Uses CardProps
   - Has a button inside that calls onClick if provided
   - Maintains an internal counter state (useState<number>)
   - Updates the counter when the button is clicked`,
        starterCode: `import { useState } from "react";

// 1. Define CardProps interface

// 2. Create Card component
function Card({ title, description, onClick }: CardProps) {
  const [counter, setCounter] = useState(0);

      const handleClick = () => {
        setCounter(counter + 1);
        onClick?.(); // call optional prop if exists
      };

      return (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={handleClick}>Click me ({counter})</button>
        </div>
      );
    }`,
        hint: `interface CardProps { title: string; description: string; onClick?: () => void }
    function Card({ title, description, onClick }: CardProps) { const [counter, setCounter] = useState<number>(0); onClick?.(); }`,
        checks:
          "Check that CardProps has title and description as string, onClick optional. Card uses CardProps, has internal counter state, and calls onClick if provided.",
      },
    },

    // ── LESSON 16 ──
    {
      id: 16,
      icon: "[Nd]",
      title: "TypeScript + Node.js",
      desc: "Type-safe APIs with Express, middleware, and typed requests/responses",
      content: [
        {
          type: "text",
          heading: "TypeScript on the Backend",
          body: `TypeScript works seamlessly on the server. By combining TypeScript with Node.js frameworks like Express or NestJS, you can:
      - Type HTTP route parameters, query strings, and request bodies.
      - Ensure middleware functions are type-safe.
      - Reduce runtime errors and improve developer experience with autocompletion.
      - Integrate with popular Node packages while maintaining type safety.`,
        },
        {
          type: "code",
          heading: "Setup TypeScript for Node.js",
          file: "terminal",
          code: `npm init -y
npm install typescript ts-node @types/node --save-dev
npm install express
npm install @types/express --save-dev
npx tsc --init

# Optional: Use tsx for fast dev server restarts
npm install tsx --save-dev
# Add script in package.json: "dev": "tsx watch src/index.ts"`,
        },
        {
          type: "text",
          heading: "Typed Express Routes",
          body: `With TypeScript, you can type route parameters, request bodies, and responses.  
      This ensures your route handlers only receive the data they expect and improves IDE autocomplete.`,
        },
        {
          type: "code",
          heading: "Example: Typed GET routes",
          file: "src/index.ts",
          code: `import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

interface User { id: number; name: string; email: string; }

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" }
];

// GET all users
app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

// GET user by ID — typed route params
app.get('/users/:id',
  (req: Request<{ id: string }>, res: Response) => {
    const user = users.find(u => u.id === +req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  }
);

app.listen(3000, () => console.log('Server running on :3000'));`,
        },
        {
          type: "text",
          heading: "Typed Middleware",
          body: `TypeScript allows you to extend existing types, such as Express's Request, to include custom properties.  
      Example: attach a logged-in user object to the request, ensuring that every route accessing req.user is type-safe.`,
        },
        {
          type: "code",
          heading: "Example: Typed Middleware",
          file: "auth.ts",
          code: `import { Request, Response, NextFunction } from 'express';

// Extend Express Request globally
declare global {
  namespace Express {
    interface Request {
      user?: { id: number; role: string };
    }
  }
}

// Auth middleware
export function authMiddleware(
  req: Request, res: Response, next: NextFunction
): void {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  req.user = { id: 1, role: 'admin' }; // attach typed user
  next();
}

// req.user is now typed in all routes!`,
        },
        {
          type: "points",
          heading: "Best Practices for TS + Node.js",
          points: [
            "Always install @types/node and @types/express for full type safety.",
            "Type route parameters, query strings, and request bodies.",
            "Extend Express Request if you attach custom properties like req.user.",
            "Use tsx or ts-node for faster development server restarts.",
            "Keep middleware and route handlers strictly typed to prevent runtime errors.",
          ],
        },
      ],
      quiz: [
        {
          q: "Which package provides TypeScript types for Express?",
          choices: [
            "typescript-express",
            "@types/express",
            "express-types",
            "ts-express",
          ],
          correct: 1,
          explain:
            "@types/express is the DefinitelyTyped package providing type definitions for Express.",
        },
        {
          q: "How do you type route parameters in Express?",
          choices: [
            "Request<Params>",
            "Request(Params)",
            "Request[Params]",
            "TypedRequest",
          ],
          correct: 0,
          explain:
            "Request is a generic: Request<Params, ResBody, ReqBody, Query>. Pass your params interface as the first argument.",
        },
        {
          q: "What tool gives the fastest dev server restarts for TS?",
          choices: ["ts-node", "tsc --watch", "tsx", "babel"],
          correct: 2,
          explain:
            "tsx is faster than ts-node; it runs TypeScript directly without precompilation.",
        },
        {
          q: "How do you attach a typed user to req?",
          choices: [
            "req.user = any",
            "req.user = unknown",
            "Extend Express.Request with interface",
            "No typing needed",
          ],
          correct: 2,
          explain:
            "Extend the Express.Request interface in a global namespace to type req.user.",
        },
        {
          q: "What type of values does req.params.id have in Request<{ id: string }>?",
          choices: ["number", "string", "any", "undefined"],
          correct: 1,
          explain:
            "Route parameters are always strings unless you transform them.",
        },
      ],
      challenge: {
        title: "Advanced Typed Route Challenge",
        desc: "Combine typed route params, typed request body, and middleware.",
        task: `1. Define an interface <strong>PostParams</strong> with <strong>id: string</strong>.
          2. Define an interface <strong>PostBody</strong> with <strong>title: string</strong> and <strong>content: string</strong>.
          3. Write a typed Express arrow function <strong>updatePost</strong> that takes <code>req: Request&lt;PostParams, any, PostBody&gt;</code> and <code>res: Response</code>.
          4. Inside the function, return a JSON object combining <code>req.params.id</code> with <code>req.body</code>.`,
        starterCode: `import { Request, Response } from "express";

          // 1. PostParams interface

          // 2. PostBody interface

          // 3. Write the updatePost handler
          const updatePost = (req: Request<PostParams, any, PostBody>, res: Response) => {
            // Your code here
          }`,
        hint: `interface PostParams { id: string }
          interface PostBody { title: string; content: string }

          const updatePost = (req: Request<PostParams, any, PostBody>, res: Response) => {
            res.json({ id: req.params.id, ...req.body });
          };`,
        checks:
          "Verify PostParams has id: string. PostBody has title and content. updatePost uses Request<PostParams, any, PostBody> and Response, returning JSON combining params and body.",
      },
    },

    // ── LESSON 17 ──
    {
      id: 17,
      icon: "[A]",
      title: "Advanced Types",
      desc: "Conditional, mapped, template literal types, and infer — power-user TypeScript",
      content: [
        {
          type: "text",
          heading: "The Deep End of TypeScript",
          body: `Advanced types let TypeScript power users build **utility libraries, expressive APIs, and complex type logic**. 
      These tools include:
      - <strong>Conditional types</strong>: pick types based on conditions
      - <strong>Mapped types</strong>: transform all properties of a type
      - <strong>Template literal types</strong>: create dynamic string types
      - <strong>infer</strong>: capture a type from another type

      Once you master these, you can write highly reusable, type-safe, and expressive code.`,
        },
        {
          type: "text",
          heading: "Conditional Types",
          body: `Conditional types act like type-level ternaries: <code>T extends U ? X : Y</code>. 
      They evaluate one type based on whether it extends/assignable to another type.  
      They are extremely useful for building utility types like <code>Awaited</code>, <code>ReturnType</code>, or custom type transformations.`,
        },
        {
          type: "code",
          heading: "Conditional types examples",
          file: "conditional.ts",
          code: `// ID 17-1: Conditional type example
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// Unwrap Promise type
type Awaited<T> = T extends Promise<infer R> ? R : T;

type C = Awaited<Promise<string>>; // string
type D = Awaited<number>;          // number (passes through)

// Distribute over unions
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArr = ToArray<string | number>; 
// string[] | number[]`,
        },
        {
          type: "text",
          heading: "Mapped Types",
          body: `Mapped types let you create new types by iterating over keys of existing types.
      They power built-in types like <code>Partial</code>, <code>Readonly</code>, and <code>Pick</code>. 
      You can also rename keys or wrap values in other types, e.g., getters or promises.`,
        },
        {
          type: "code",
          heading: "Mapped types examples",
          file: "mapped.ts",
          code: `interface User { name: string; age: number; email: string; }

// Partial: makes all properties optional
type MyPartial<T> = { [K in keyof T]?: T[K]; };

// Readonly: makes all properties readonly
type MyReadonly<T> = { readonly [K in keyof T]: T[K]; };

// Transform properties to getters
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number; getEmail: () => string }`,
        },
        {
          type: "text",
          heading: "Template Literal Types & infer",
          body: `Template literal types allow you to construct string types dynamically:
- You can capitalize parts of keys for event handlers.
- Combined with unions, you can create very specific string patterns.
- <code>infer</code> allows capturing types from another type, often in conditional types, e.g., extracting the return type of a function.`,
        },
        {
          type: "code",
          heading: "Template literals and infer examples",
          file: "advanced.ts",
          code: `// Template literal types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<"click">; // "onClick"

type Side = "top" | "right" | "bottom" | "left";
type MarginProp = \`margin-\${Side}\`; 
// "margin-top" | "margin-right" | "margin-bottom" | "margin-left"

// infer — capture type from function
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() { return { name: "Alice", age: 25 }; }
type UserData = MyReturnType<typeof getUser>; 
// { name: string; age: number }`,
        },
        {
          type: "points",
          heading: "Key Takeaways for Advanced Types",
          points: [
            "Conditional types work like a ternary for types: T extends U ? X : Y.",
            "Mapped types allow transforming all properties of a type.",
            "Template literal types can construct complex string types from unions.",
            "The infer keyword captures a type portion in conditional types.",
            "Combine these features to build utility types for safer, reusable code.",
          ],
        },
      ],
      quiz: [
        {
          q: "What does T extends U ? X : Y do?",
          choices: [
            "Inherits from U",
            "Checks if T is assignable to U — picks X if true, Y if false",
            "Merges T and U",
            "Excludes U from T",
          ],
          correct: 1,
          explain:
            "Conditional types work like a ternary — if T is assignable to U, the type is X; otherwise Y.",
        },
        {
          q: "What does [K in keyof T] do?",
          choices: [
            "Copies one key from T",
            "Loops over all keys of T — mapped type",
            "Picks keys by value",
            "Removes keys from T",
          ],
          correct: 1,
          explain:
            "keyof T gets all keys, [K in keyof T] iterates to create new mapped type.",
        },
        {
          q: "What does infer R do in a conditional type?",
          choices: [
            "Imports a type from another file",
            "Creates a new generic",
            "Captures/extracts a type from within another type",
            "Infers the return value at runtime",
          ],
          correct: 2,
          explain:
            "infer R captures a type portion from another type for reuse.",
        },
        {
          q: "What is the result of ToArray<string | number>?",
          choices: [
            "string[] & number[]",
            "string[] | number[]",
            "[string, number]",
            "never",
          ],
          correct: 1,
          explain:
            "Conditional types distribute over unions; each branch returns a separate array type.",
        },
        {
          q: "What does MyReturnType<typeof getUser> evaluate to?",
          choices: [
            "Promise<{name: string; age: number}>",
            "{name: string; age: number}",
            "string",
            "number",
          ],
          correct: 1,
          explain:
            "infer captures the return type of getUser, giving { name: string; age: number }.",
        },
      ],
      challenge: {
        title: "Advanced Type Challenge",
        desc: "Combine conditional types, mapped types, template literal types, and infer.",
        task: `1. Create a mapped type <strong>OptionalGetters&lt;T&gt;</strong> that transforms all properties of T into optional getter functions (e.g., <code>getPropName?: () => Type</code>).
          2. Create a conditional type <strong>IsStringLiteral&lt;T&gt;</strong> that returns "yes" if T is a string literal type (e.g., "hello"), otherwise "no".
          3. Test your types using an interface <strong>User</strong> with <strong>name</strong> and <strong>age</strong>.`,
        starterCode: `interface User { name: string; age: number; }

          // 1. Optional getters mapped type
          type OptionalGetters<T> = {};

          // 2. Conditional type to check string literal
          type IsStringLiteral<T> = {};

          // Tests
          type NameGetter = OptionalGetters<User>;
          type CheckName = IsStringLiteral<"Alice">; // "yes"
          type CheckNumber = IsStringLiteral<42>;   // "no"`,
        hint: `// Optional getters
          type OptionalGetters<T> = {
            [K in keyof T as \`get\${Capitalize<string & K>}\`]?: () => T[K];
          };

          // Conditional type to detect string literal
          type IsStringLiteral<T> = string extends T ? "no" : "yes";`,
        checks:
          'Verify OptionalGetters creates optional getter functions for all keys of a type. IsStringLiteral returns "yes" for string literal types and "no" for non-literals.',
      },
    },
  ];

// Generate project suggestions for lessons not explicitly configured
const projectDifficulty = (lessonId) => {
  if (lessonId <= 5) return "easy";
  if (lessonId <= 11) return "medium";
  return "hard";
};
const projectAscii = { easy: "(^_^)", medium: "(^_~)", hard: ">(>_<)" };
const projectRewards = { easy: 30, medium: 50, hard: 70 };

const projectOptionsByLesson = (lessonId) => {
  if (lessonId <= 11) return ["easy", "medium"];
  return ["medium", "hard"];
};

const projectPresets = {
  1: {
    title: "User Profile Project",
    desc: "Build a typed profile object and simple utility functions.",
    tasks: {
      easy: "Define a typed user object with name, age, and email. Log a message using the values.",
      medium:
        "Add a roles array and a function `isAdult(user)` that returns a boolean using age checks.",
    },
  },
  2: {
    title: "Primitives Practice Project",
    desc: "Use basic primitives and literal/unions to model user status.",
    tasks: {
      easy: "Declare typed variables for name:string, age:number, isActive:boolean. Log each value.",
      medium:
        "Add nullable and optional variables (string | null, number | undefined) and a function to normalize them.",
    },
  },
  3: {
    title: "Arrays & Tuples Project",
    desc: "Apply arrays and tuples to represent structured lists.",
    tasks: {
      easy: "Create a string[] of fruits and a tuple [string, number] for an item. Log both.",
      medium:
        "Write a function that takes string[] and returns [firstItem, length] as tuple; include safety checks.",
    },
  },
  4: {
    title: "Objects & Interfaces Project",
    desc: "Model data with interfaces and typed objects.",
    tasks: {
      easy: "Create an interface Product (id: number, name: string, price: number) and a product object.",
      medium:
        "Extend Product into DigitalProduct with downloadUrl and a function that prints a summary.",
    },
  },
  5: {
    title: "Functions Project",
    desc: "Write typed functions with parameters and return types.",
    tasks: {
      easy: "Implement `greet(name: string): string` and `formatAge(age: number): string`.",
      medium:
        "Implement `calculateDiscount(price: number, discount?: number): number` and use it with inputs.",
    },
  },
  6: {
    title: "Union Types Project",
    desc: "Work with union types and run-time type narrowing.",
    tasks: {
      easy: "Create `type Status = 'loading' | 'success' | 'error'` and a function to handle each case.",
      medium:
        "Create `type Value = string | number | boolean` and a function that returns a typed message based on typeof checks.",
    },
  },
  7: {
    title: "Classes Project",
    desc: "Build a class with methods and encapsulated state.",
    tasks: {
      easy: "Implement class `Car` with make/model/year and `getInfo()` method.",
      medium:
        "Implement class `BankAccount` with deposit/withdraw/getBalance and private balance.",
    },
  },
  8: {
    title: "Generics Project",
    desc: "Use generic functions and interfaces for reusable typed logic.",
    tasks: {
      easy: "Write generic `wrapInArray<T>(value: T): T[]` and show usage with two types.",
      medium:
        "Create generic `ApiResponse<T>` and function `formatResponse<T>(data: T): ApiResponse<T>`.",
    },
  },
  9: {
    title: "Enums Project",
    desc: "Apply enums to define fixed named values and state.",
    tasks: {
      easy: "Define `enum Season` and a function `isSummer(season: Season)`.",
      medium:
        "Write a `nextSeason(season: Season): Season` using switch and enum values.",
    },
  },
  10: {
    title: "Type Narrowing Project",
    desc: "Practice narrowing unions with control flow.",
    tasks: {
      easy: "Implement `describe(value: string | number | boolean): string` using typeof checks.",
      medium:
        "Extend to handle `null | undefined` and include an impossible `never` branch.",
    },
  },
  11: {
    title: "Modules Project",
    desc: "Simulate module exports/imports with interfaces and functions.",
    tasks: {
      easy: "Write `interface Person` + `function greet(person: Person): string` and invoke it.",
      medium:
        "Create module-style code blocks: one for model exports, one for usage, demonstrating import behavior in comments.",
    },
  },
  12: {
    title: "Utility Types Project",
    desc: "Use Omit and Partial to transform types safely.",
    tasks: {
      easy: "Define type `PublicProduct = Omit<Product, 'secret'>` and use it.",
      medium:
        "Define `UpdateProduct = Partial<PublicProduct>` and apply change objects to a product instance.",
    },
  },
  13: {
    title: "Decorators Project",
    desc: "Implement class or method decorators for runtime behavior.",
    tasks: {
      easy: "Create `@Frozen` class decorator and apply to class to prevent extensions.",
      medium:
        "Add `@Log` method decorator to print name and args when methods are called.",
    },
  },
  14: {
    title: "tsconfig.json Project",
    desc: "Model tsconfig options and validate config shapes.",
    tasks: {
      easy: "Define an interface for tsconfig and build an object with target/strict/outDir/rootDir.",
      medium:
        "Write a function `isStrictConfig(config)` that narrows to strict config with guard checks.",
    },
  },
  15: {
    title: "TypeScript + React Project",
    desc: "Create typed component props and render helper logic.",
    tasks: {
      easy: "Define `CardProps` and a `renderCard(props: CardProps)` function returning a JSX-like string.",
      medium:
        "Add optional `onClick` callback and a `Card` component type that uses it safely.",
    },
  },
  16: {
    title: "TypeScript + Node.js Project",
    desc: "Type request/response objects and route handler logic.",
    tasks: {
      easy: "Define `interface Request` and `interface Response`, create `handlePost(req, res)` with typed body.",
      medium:
        "Implement `validatePost(req)` with type guards and `async createPost(req, res)` flow.",
    },
  },
  17: {
    title: "Advanced Types Project",
    desc: "Build sophisticated conditional and mapped type utilities.",
    tasks: {
      easy: "Implement `IsArray<T>` using conditional types and test it on multiple types.",
      medium:
        "Implement mapped type `ElementType<T>` (array element extraction) and test with tuple/array types.",
    },
  },
};

LESSONS.forEach((lesson) => {
  const safeTitle = lesson.title;
  const preset = projectPresets[lesson.id] || {};
  const optionDiffs = projectOptionsByLesson(lesson.id);

  // Support both singular `project` and existing `projects` formats
  if (!lesson.projects || !lesson.projects.length) {
    lesson.projects = optionDiffs.map((difficulty, index) => {
      const idSuffix = index === 0 ? "a" : "b";
      return {
        id: `${lesson.id}${idSuffix}`,
        title:
          optionDiffs.length > 1
            ? `${safeTitle} Project (${difficulty})`
            : preset.title || `${safeTitle} Project`,
        desc:
          preset.desc ||
          `Build a mini project to apply the concepts learned in ${safeTitle}.`,
        task:
          (preset.tasks && preset.tasks[difficulty]) ||
          preset.task ||
          `Create a small TypeScript example that uses the main concept from this lesson. Use proper typing and comments explaining what you built.`,
        starterCode: `// Write your project code here\n`,
        hint: `The project should be open-ended. Start with the lesson concept, and show your typing with ${projectAscii[difficulty]} style output.`,
        reward: projectRewards[difficulty],
        difficulty,
        ascii: projectAscii[difficulty],
        requirements: [
          `Define typed variables or structures for the core concept`,
          `Add comments explaining your approach`,
          `Use TypeScript annotations wherever possible`,
        ],
      };
    });
  }

  if (!lesson.project) {
    lesson.project = lesson.projects[0];
  }
});

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let streak = +localStorage.getItem("ts_streak") || 0;
let points = +localStorage.getItem("ts_points") || 0;
let progress = JSON.parse(localStorage.getItem("ts_progress") || "{}");
let activeLesson = null;
let activePhase = "learn";
let quizState = { idx: 0, answered: false, allCorrect: true };
let activeProjectId = null;

function save() {
  localStorage.setItem("ts_streak", streak);
  localStorage.setItem("ts_points", points);
  localStorage.setItem("ts_progress", JSON.stringify(progress));
}
function lessonProgress(id) {
  return (
    progress[id] || { learn: false, quiz: false, code: false, project: false }
  );
}
function isLessonDone(id) {
  const p = lessonProgress(id);
  return p.learn && p.quiz && p.code && p.project;
}
function isLessonUnlocked(idx) {
  if (idx === 0) return true;
  const prev = LESSONS[idx - 1];
  return prev ? isLessonDone(prev.id) : false;
}
function getLastLesson() {
  return +localStorage.getItem("ts_last_lesson") || 1;
}
function setLastLesson(id) {
  localStorage.setItem("ts_last_lesson", String(id));
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "toast-out 0.25s ease forwards";
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

// ══════════════════════════════════════════
// THEME
// ══════════════════════════════════════════
function toggleTheme() {
  const isLight =
    document.documentElement.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("ts_theme", next);
  document.getElementById("themeBtn").textContent =
    next === "light" ? "☀️" : "😴";
}
(function () {
  const t = localStorage.getItem("ts_theme") || "dark";
  if (t === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("themeBtn").textContent = "☀️";
  }
  updateContinueLesson();
  const last = getLastLesson();
  if (last > 1)
    showToast(`Restored progress: last lesson was ${last}`, "success");
})();

// ══════════════════════════════════════════
// HEADER STATS
// ══════════════════════════════════════════
function updateStats() {
  const done = LESSONS.filter((l) => isLessonDone(l.id)).length;
  const pct = Math.round((done / LESSONS.length) * 100);
  document.getElementById("st-streak").textContent = streak;
  document.getElementById("st-points").textContent = points;
  document.getElementById("st-done").textContent = done;
  document.getElementById("prog-pct").textContent = pct + "%";
  document.getElementById("prog-fill").style.width = pct + "%";
  updateContinueLesson();
}

function updateContinueLesson() {
  const el = document.getElementById("continue-lesson");
  const btn = document.getElementById("btn-start-lesson");
  if (!el) return;
  let suggested = getLastLesson();
  const doneIds = LESSONS.filter((l) => isLessonDone(l.id)).map((l) => l.id);
  if (activeLesson && activeLesson.id) {
    suggested = activeLesson.id;
  } else if (doneIds.length > 0) {
    const maxDone = Math.max(...doneIds);
    suggested = Math.min(maxDone + 1, LESSONS.length);
  }
  el.textContent = String(suggested);
  if (btn) {
    btn.textContent = `Start Lesson ${suggested}`;
    btn.onclick = () => openLesson(suggested);
  }
}

// ══════════════════════════════════════════
// VIEWS
// ══════════════════════════════════════════
function hideHeroIntro() {
  document.querySelector(".intro-panel")?.classList.add("hidden");
  document.querySelector(".intro-continue")?.classList.add("hidden");
}
function showHeroIntro() {
  document.querySelector(".intro-panel")?.classList.remove("hidden");
  document.querySelector(".intro-continue")?.classList.remove("hidden");
}
function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  document.getElementById("view-" + id).classList.remove("hidden");
}
function goBack() {
  renderGrid();
  showHeroIntro();
  updateContinueLesson();
  showView("lessons");
}

// ══════════════════════════════════════════
// LESSON GRID — dynamic render
// ══════════════════════════════════════════
function renderGrid() {
  updateStats();
  const grid = document.getElementById("lesson-grid");
  grid.innerHTML = "";
  LESSONS.forEach((l, i) => {
    const unlocked = isLessonUnlocked(i);
    const done = isLessonDone(l.id);
    const p = lessonProgress(l.id);
    const card = document.createElement("div");
    card.className =
      "l-card " + (done ? "done" : !unlocked ? "locked" : "active-now");
    if (unlocked) card.onclick = () => openLesson(l.id);
    const badgeClass = done ? "done" : !unlocked ? "locked-b" : "open";
    const badgeText = done ? "✔️" : !unlocked ? "🔒" : "[ >> ]";
    const dots = [
      p.learn ? "done" : unlocked ? "active" : "",
      p.quiz ? "quiz-done" : p.learn && unlocked ? "active" : "",
      p.code ? "code-done" : p.quiz && unlocked ? "active" : "",
      p.project ? "project-done" : p.code && unlocked ? "active" : "",
    ]
      .map((cls) => `<div class="step-dot ${cls}"></div>`)
      .join("");
    card.innerHTML = `
      <div class="l-card-top"><div class="l-icon">${l.icon}</div><div class="l-badge ${badgeClass}">${badgeText}</div></div>
      <div class="l-title">Lesson ${l.id} — ${l.title}</div>
      <div class="l-desc">${l.desc}</div>
      <div class="l-steps">${dots}</div>`;
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════
// OPEN LESSON
// ══════════════════════════════════════════
function openLesson(id) {
  activeLesson = LESSONS.find(
    (l) => l.id === id || String(l.id) === String(id),
  );
  if (!activeLesson) {
    console.error("openLesson: lesson not found", id);
    showToast("Lesson not found, check your data array.", "error");
    return;
  }
  const p = lessonProgress(id);
  quizState = { idx: 0, answered: false, allCorrect: true };
  activeProjectId =
    activeLesson.projects?.[0]?.id || activeLesson.project?.id || null;
  if (!p.learn) activePhase = "learn";
  else if (!p.quiz) activePhase = "quiz";
  else if (!p.code) activePhase = "code";
  else if (!p.project) activePhase = "project";
  else activePhase = "learn";
  renderLearnPhase();
  renderQuizPhase();
  renderCodePhase();
  renderProjectPhase();
  updatePhaseTabs();
  switchPhase(activePhase);
  setLastLesson(id);
  hideHeroIntro();
  updateContinueLesson();
  showView("lesson");
}

// ══════════════════════════════════════════
// PHASE TABS — now 4
// ══════════════════════════════════════════
function updatePhaseTabs() {
  const p = lessonProgress(activeLesson.id);
  const tl = document.getElementById("tab-learn");
  const tq = document.getElementById("tab-quiz");
  const tc = document.getElementById("tab-code");
  const tp = document.getElementById("tab-project");
  tl.className = "phase-tab" + (p.learn ? " done-tab" : " active");
  tq.className =
    "phase-tab" + (p.quiz ? " done-tab" : p.learn ? "" : " locked-tab");
  tc.className =
    "phase-tab" + (p.code ? " done-tab" : p.quiz ? "" : " locked-tab");
  tp.className =
    "phase-tab" +
    (p.project ? " project-done-tab" : p.code ? "" : " locked-tab");
}

function switchPhase(phase) {
  const p = lessonProgress(activeLesson.id);
  if (phase === "quiz" && !p.learn) return;
  if (phase === "code" && !p.quiz) return;
  if (phase === "project" && !p.code) return;
  activePhase = phase;
  ["learn", "quiz", "code", "project"].forEach((ph) => {
    document.getElementById("phase-" + ph).style.display =
      ph === phase ? "block" : "none";
    const tab = document.getElementById("tab-" + ph);
    tab.classList.toggle("active", ph === phase);
    if (ph === "project") tab.classList.toggle("project-active", ph === phase);
  });
}

// ══════════════════════════════════════════
// LEARN PHASE
// ══════════════════════════════════════════
function renderLearnPhase() {
  const l = activeLesson;
  const whatYoullLearn = l.content
    .filter((block) => block.heading)
    .map((block) => `• ${block.heading}`)
    .join("<br>");

  let html = `<div class="learn-lesson-hdr"><div class="learn-icon">${l.icon}</div><div><div class="learn-title">Lesson ${l.id} — ${l.title}</div><div class="learn-sub">${l.desc}</div></div></div>`;
  html += `<div class="content-block"><div class="block-heading">What you'll learn</div><div class="block-text">${whatYoullLearn || "Review the main lesson concepts and examples."}</div></div>`;

  l.content.forEach((block) => {
    html += `<div class="content-block">`;
    if (block.heading)
      html += `<div class="block-heading">${block.heading}</div>`;
    if (block.type === "text")
      html += `<div class="block-text">${block.body}</div>`;
    else if (block.type === "points")
      html += `<div class="point-list">${block.points.map((p) => `<div class="point">${p}</div>`).join("")}</div>`;
    else if (block.type === "code")
      html += `<div class="code-wrap"><div class="code-top"><div class="code-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div><span class="code-fname">${block.file || "example.ts"}</span></div><pre class="code-pre">${escHtml(block.code)}</pre></div>`;
    html += `</div>`;
  });
  document.getElementById("learn-content").innerHTML = html;
}
function finishLearn() {
  const id = activeLesson.id;
  progress[id] = { ...lessonProgress(id), learn: true };
  save();
  updateStats();
  updatePhaseTabs();
  quizState = { idx: 0, answered: false, allCorrect: true };
  renderQuizPhase();
  switchPhase("quiz");
}

// ══════════════════════════════════════════
// QUIZ PHASE
// ══════════════════════════════════════════
function renderQuizPhase() {
  renderQuestion();
}
function renderQuestion() {
  const q = activeLesson.quiz[quizState.idx];
  const tot = activeLesson.quiz.length;
  const pct = Math.round((quizState.idx / tot) * 100);
  let html = `<div class="quiz-hdr"><div class="quiz-q-num">Question ${quizState.idx + 1} of ${tot}</div><div class="prog-track" style="margin-bottom:16px"><div class="prog-fill" style="width:${pct}%"></div></div><div class="quiz-q-text">${q.q}</div></div>`;
  if (q.code)
    html += `<div class="code-wrap" style="margin-bottom:12px"><div class="code-top"><div class="code-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div></div><pre class="code-pre">${escHtml(q.code)}</pre></div>`;
  html += `<div class="choices" id="choices-wrap">`;
  q.choices.forEach((c, i) => {
    html += `<div class="choice" onclick="selectAnswer(${i})"><div class="choice-letter">${String.fromCharCode(65 + i)}</div><div class="choice-text">${escHtml(c)}</div></div>`;
  });
  html += `</div><div class="feedback-box" id="quiz-feedback"></div>`;
  document.getElementById("quiz-content").innerHTML = html;
}
function selectAnswer(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = activeLesson.quiz[quizState.idx];
  const choices = document.querySelectorAll(".choice");
  const fb = document.getElementById("quiz-feedback");
  choices[q.correct].classList.add("correct");
  if (idx !== q.correct) {
    choices[idx].classList.add("wrong");
    quizState.allCorrect = false;
  }
  choices.forEach((c, i) => {
    if (i !== idx && i !== q.correct) c.classList.add("dim");
  });
  const ok = idx === q.correct;
  if (ok) {
    points += 10;
    save();
    updateStats();
  }
  fb.className = "feedback-box show";
  fb.innerHTML = `<div class="fb-icon">${ok ? "(^_^)" : "(x_x)"}</div><div><div class="fb-title ${ok ? "ok" : "bad"}">${ok ? "Correct!" : "Not quite!"}</div><div class="fb-msg">${q.explain}</div><div class="btn-row" style="margin-top:14px"><button class="btn btn-primary" onclick="nextQuestion()">${quizState.idx + 1 < activeLesson.quiz.length ? "Next Question [ → ]" : "Finish Quiz [ → ]"}</button></div></div>`;
}
function nextQuestion() {
  quizState.idx++;
  quizState.answered = false;
  if (quizState.idx >= activeLesson.quiz.length) finishQuiz();
  else renderQuestion();
}
function finishQuiz() {
  const id = activeLesson.id;
  progress[id] = { ...lessonProgress(id), quiz: true };
  if (quizState.allCorrect) {
    streak++;
    points += 20;
  }
  save();
  updateStats();
  updatePhaseTabs();
  renderCodePhase();
  switchPhase("code");
}

// ══════════════════════════════════════════
// CODE CHALLENGE PHASE
// ══════════════════════════════════════════
function renderCodePhase() {
  const ch = activeLesson.challenge;
  const done = lessonProgress(activeLesson.id).code;
  let html = `<div class="challenge-hdr"><div class="challenge-title">⌨️ Code Challenge</div><div class="challenge-desc">${ch.desc}</div></div>
<div class="challenge-task"><div class="challenge-task-label">Your Task</div><div class="challenge-task-text">${ch.task}</div></div>
<div class="editor-wrap"><div class="editor-label">Your TypeScript Code</div><textarea class="code-editor" id="code-editor" spellcheck="false" placeholder="Write your TypeScript code here...">${done ? "// Already completed! Write more to practice.\n" : ch.starterCode}</textarea></div>
<div class="thinking" id="thinking"><span style="font-family:'JetBrains Mono',monospace">AI is checking your code</span><span class="think-dots"><span>.</span><span>.</span><span>.</span></span></div>
<div class="ai-result" id="ai-result"></div>
<div class="btn-row">
  <button class="btn btn-cyan" id="hint-btn" onclick="toggleHint()">Show Hint</button>
  <button class="btn btn-primary" id="submit-btn" onclick="submitCode()">Check My Code [ ✓ ]</button>
</div>
<div id="hint-box" style="display:none;margin-top:12px;padding:14px;background:rgba(251,191,36,.07);border:1px solid rgba(251,191,36,.2);border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:.82rem;color:var(--yellow)">💡 ${ch.hint}</div>`;
  if (done)
    html += `<div style="margin-top:16px"><button class="btn btn-primary btn-full" onclick="switchPhase('project')">Go to Project Phase [ → ]</button></div>`;
  document.getElementById("code-content").innerHTML = html;
}
function toggleHint() {
  const hb = document.getElementById("hint-box");
  const btn = document.getElementById("hint-btn");
  const show = hb.style.display === "none";
  hb.style.display = show ? "block" : "none";
  btn.textContent = show ? "Hide Hint" : "Show Hint";
}

// ══════════════════════════════════════════
// PROJECT PHASE
// ══════════════════════════════════════════
function renderProjectPhase() {
  const projects = activeLesson.projects?.length
    ? activeLesson.projects
    : activeLesson.project
      ? [activeLesson.project]
      : [];
  const done = lessonProgress(activeLesson.id).project;
  if (!activeProjectId && projects.length > 0) activeProjectId = projects[0].id;
  if (!projects.length) {
    document.getElementById("project-content").innerHTML =
      `<div class="project-header"><div class="project-title">No project available for this lesson yet.</div><div class="project-subtitle">Complete code challenge first and the project tab unlocks when added.</div></div>`;
    return;
  }
  const selectedProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  const projectDifficultyLabel = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  };
  let selectorHtml = `<div class="project-selector">`;
  projects.forEach((p) => {
    const diffClass =
      p.difficulty === "easy"
        ? "diff-easy"
        : p.difficulty === "medium"
          ? "diff-medium"
          : "diff-hard";
    selectorHtml += `<div class="project-option ${activeProjectId === p.id ? "selected" : ""}" onclick="selectProject('${p.id}')">
      <div class="project-option-num">Project Option</div>
      <div class="project-option-name">${p.title || p.name}</div>
      <div class="project-option-level">${projectDifficultyLabel[p.difficulty] || "Custom"} difficulty</div>
      <div class="project-option-desc">${p.desc}</div>
      <div class="project-difficulty ${diffClass}">⬥ ${p.difficulty}</div>
    </div>`;
  });
  selectorHtml += `</div>`;

  const requirements = Array.isArray(selectedProject.requirements)
    ? selectedProject.requirements
    : ["Write any TypeScript project code that matches the task scope."];
  let reqHtml = `<div class="project-requirements"><div class="project-req-label">📋 Requirements</div><div class="project-req-list">`;
  requirements.forEach((r) => {
    reqHtml += `<div class="project-req-item"><span class="req-check">◆</span><span>${r}</span></div>`;
  });
  reqHtml += `</div></div>`;

  let html = `
<div class="project-header">
  <div class="project-title-bar">
    <div class="project-icon"></div>
    <div>
      <div class="project-title">Mini Project — ${selectedProject.name}</div>
      <div class="project-subtitle">Apply what you've learned in a real mini-project</div>
    </div>
    <div class="xp-badge">+50 XP</div>
  </div>
  ${selectorHtml}
  ${reqHtml}
  <div class="project-bonus">
    <div class="project-bonus-label">⭐ Bonus Challenge</div>
    <div class="project-bonus-text">${selectedProject.bonus}</div>
  </div>
</div>
<div class="project-editor-wrap">
  <div class="project-editor-label">Your Project Code</div>
  <textarea class="code-editor project-editor" id="project-editor" spellcheck="false" style="min-height:280px">${done ? "// Project completed! Try the other option or practice more.\n" : selectedProject.starterCode}</textarea>
</div>
<div class="thinking project-thinking" id="project-thinking">
  <span style="font-family:'JetBrains Mono',monospace">Reviewing your project</span>
  <span class="think-dots"><span>.</span><span>.</span><span>.</span></span>
</div>
<div class="project-result" id="project-result"></div>
<div class="btn-row">
  <button class="btn btn-ghost" onclick="resetProjectCode()">Reset Starter Code</button>
  <button class="btn btn-pink" id="project-submit-btn" onclick="submitProject()">Submit Project</button>
</div>`;

  if (done) {
    html += `<div style="margin-top:16px"><button class="btn btn-primary btn-full" onclick="completionScreen()">Lesson Complete — Continue [ → ]</button></div>`;
  }
  document.getElementById("project-content").innerHTML = html;
}

function selectProject(projectId) {
  activeProjectId = projectId;
  renderProjectPhase();
}

function resetProjectCode() {
  const projects = activeLesson.projects?.length
    ? activeLesson.projects
    : activeLesson.project
      ? [activeLesson.project]
      : [];
  const project = projects.find((p) => p.id === activeProjectId);
  if (project)
    document.getElementById("project-editor").value = project.starterCode;
  document.getElementById("project-result").className = "project-result";
  document.getElementById("project-result").innerHTML = "";
}

// ══════════════════════════════════════════
// PROJECT VALIDATORS
// ══════════════════════════════════════════
const PROJECT_VALIDATORS = {
  "1a": function (code) {
    const c = stripComments(code);
    const hasName =
      /let\s+name\s*:\s*string/i.test(c) ||
      /const\s+name\s*:\s*string/i.test(c);
    const hasAge = /age\s*:\s*number/i.test(c);
    const hasOnline = /isOnline\s*:\s*boolean/i.test(c);
    const hasTemplate = /`[^`]*\$\{/i.test(c);
    if (hasName && hasAge && hasOnline && hasTemplate)
      return {
        pass: true,
        title: "Personal Info Card built!",
        feedback:
          "Great job! You declared typed variables for name, age, isOnline and used template literals for your greeting. This is how real TypeScript projects start — with clearly typed data!",
      };
    const missing = [];
    if (!hasName) missing.push("name: string variable");
    if (!hasAge) missing.push("age: number variable");
    if (!hasOnline) missing.push("isOnline: boolean variable");
    if (!hasTemplate) missing.push("a template literal greeting with ${}");
    return {
      pass: false,
      title: "Profile incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "1b": function (code) {
    const c = stripComments(code);
    const hasCelsius = /celsius\s*:\s*number/i.test(c);
    const hasFahrenheit = /fahrenheit\s*:\s*number/i.test(c);
    const hasKm = /kilometers\s*:\s*number/i.test(c);
    const hasMiles = /miles\s*:\s*number/i.test(c);
    if (hasCelsius && hasFahrenheit && hasKm && hasMiles)
      return {
        pass: true,
        title: "Unit Converter complete!",
        feedback:
          "All four typed variables declared! Your converter handles both temperature and distance units with proper TypeScript type annotations. Well done!",
      };
    const missing = [];
    if (!hasCelsius) missing.push("celsius: number");
    if (!hasFahrenheit) missing.push("fahrenheit: number");
    if (!hasKm) missing.push("kilometers: number");
    if (!hasMiles) missing.push("miles: number");
    return {
      pass: false,
      title: "Converter incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "2a": function (code) {
    const c = stripComments(code);
    const hasColor = /colorName\s*:\s*string/i.test(c);
    const hasR = /\br\s*:\s*number/i.test(c);
    const isDark = /isDark\s*:\s*boolean/i.test(c);
    const hasOpacity = /opacity\s*:\s*number/i.test(c);
    if (hasColor && hasR && isDark && hasOpacity)
      return {
        pass: true,
        title: "Color Palette complete!",
        feedback:
          "Excellent! All color properties typed correctly: string, numbers, boolean. This is clean, self-documenting TypeScript code!",
      };
    return {
      pass: false,
      title: "Color properties incomplete",
      feedback:
        "Ensure you have colorName: string, r/g/b: number, isDark: boolean, opacity: number.",
    };
  },
  "2b": function (code) {
    const c = stripComments(code);
    const hasUnknown = /rawData\s*:\s*unknown/i.test(c);
    const hasTypeCheck = /typeof\s+\w+/i.test(c);
    const hasAny = /:\s*any\b/i.test(c);
    if (hasUnknown && hasTypeCheck && hasAny)
      return {
        pass: true,
        title: "Safe API Handler complete!",
        feedback:
          "Perfect! You used unknown for raw data, demonstrated a typeof guard for safe narrowing, and showed why any is dangerous. This is exactly how to handle untrusted data in TypeScript!",
      };
    const missing = [];
    if (!hasUnknown) missing.push("rawData: unknown declaration");
    if (!hasTypeCheck) missing.push("typeof guard for safe narrowing");
    if (!hasAny) missing.push("any type to show the risk");
    return {
      pass: false,
      title: "Handler incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "3a": function (code) {
    const c = stripComments(code);
    const hasStudents = /students\s*:\s*string\s*\[\]/i.test(c);
    const hasGrades = /grades\s*:\s*number\s*\[\]/i.test(c);
    const hasMap = /\.map\s*\(/i.test(c);
    const hasFilter = /\.filter\s*\(/i.test(c);
    if (hasStudents && hasGrades && hasMap && hasFilter)
      return {
        pass: true,
        title: "Gradebook complete!",
        feedback:
          "Great! You used typed string[] and number[] arrays, then applied .map() and .filter() to process the data. These are essential array operations in TypeScript!",
      };
    const missing = [];
    if (!hasStudents) missing.push("students: string[] array");
    if (!hasGrades) missing.push("grades: number[] array");
    if (!hasMap) missing.push(".map() to create passed boolean array");
    if (!hasFilter) missing.push(".filter() to get passing grades");
    return {
      pass: false,
      title: "Gradebook incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "3b": function (code) {
    const c = stripComments(code);
    const hasRGB = /type\s+RGB\s*=\s*\[/i.test(c);
    const hasPalette =
      /readonly\s+RGB\s*\[\]/i.test(c) || /:\s*readonly\s+RGB\[\]/i.test(c);
    const hasDestruct = /const\s+\[\s*r\s*,/i.test(c);
    const hasBrightness = /brightness/i.test(c);
    if (hasRGB && hasPalette && hasDestruct && hasBrightness)
      return {
        pass: true,
        title: "Color Manager complete!",
        feedback:
          "Excellent! You defined an RGB tuple type, created a readonly palette array, used tuple destructuring, and calculated brightness. Real TypeScript color management!",
      };
    const missing = [];
    if (!hasRGB) missing.push("type RGB = [number, number, number]");
    if (!hasPalette) missing.push("readonly RGB[] palette");
    if (!hasDestruct) missing.push("const [r, g, b] = destructuring");
    if (!hasBrightness) missing.push("brightness calculation");
    return {
      pass: false,
      title: "Color manager incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "4a": function (code) {
    const c = stripComments(code);
    const hasBook = /interface\s+Book\s*\{/i.test(c);
    const hasLibrary = /interface\s+Library\s*\{/i.test(c);
    const hasReadonlyId = /readonly\s+id\s*:\s*number/i.test(c);
    const hasBooks = /books\s*:\s*Book\s*\[\]/i.test(c);
    if (hasBook && hasLibrary && hasReadonlyId && hasBooks)
      return {
        pass: true,
        title: "Library System complete!",
        feedback:
          "Great design! Book interface with readonly id, Library containing Book[], and 3 book objects. This is exactly how you model real-world data in TypeScript!",
      };
    const missing = [];
    if (!hasBook) missing.push("interface Book { ... }");
    if (!hasLibrary) missing.push("interface Library { ... }");
    if (!hasReadonlyId) missing.push("readonly id: number in Book");
    if (!hasBooks) missing.push("books: Book[] in Library");
    return {
      pass: false,
      title: "Library system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "4b": function (code) {
    const c = stripComments(code);
    const hasAddress = /interface\s+Address\s*\{/i.test(c);
    const hasSocial = /interface\s+SocialProfile\s*\{/i.test(c);
    const hasNested = /address\s*:\s*Address/i.test(c);
    const hasFn = /function\s+displayProfile|displayProfile\s*=/i.test(c);
    if (hasAddress && hasSocial && hasNested && hasFn)
      return {
        pass: true,
        title: "Social Profile complete!",
        feedback:
          "Excellent! You nested Address inside SocialProfile and wrote displayProfile function. Nested interfaces are fundamental to modeling complex data in TypeScript!",
      };
    const missing = [];
    if (!hasAddress) missing.push("interface Address");
    if (!hasSocial) missing.push("interface SocialProfile");
    if (!hasNested) missing.push("address: Address inside SocialProfile");
    if (!hasFn) missing.push("displayProfile function");
    return {
      pass: false,
      title: "Profile incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "5a": function (code) {
    const c = stripComments(code);
    const hasAdd = /function\s+add\s*\(/i.test(c);
    const hasDivide = /function\s+divide\s*\(/i.test(c);
    const hasPower = /function\s+power\s*\(/i.test(c);
    const hasReturn0 = /return\s+0/i.test(c);
    if (hasAdd && hasDivide && hasPower && !hasReturn0)
      return {
        pass: true,
        title: "Math Library complete!",
        feedback:
          "All 5 math functions implemented and typed! divide(10, 0) returning 0 is a great safety practice. This is production-ready utility code!",
      };
    if (hasAdd && hasDivide && hasPower)
      return {
        pass: false,
        title: "Functions need implementation",
        feedback:
          "Functions found! But some still return 0. Complete all function bodies with actual math.",
      };
    const missing = [];
    if (!hasAdd) missing.push("function add(a, b): number");
    if (!hasDivide) missing.push("function divide(a, b): number");
    if (!hasPower) missing.push("function power(base, exp, decimals?): string");
    return {
      pass: false,
      title: "Math library incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "5b": function (code) {
    const c = stripComments(code);
    const hasCap = /function\s+capitalize/i.test(c);
    const hasTrunc = /function\s+truncate/i.test(c);
    const hasPad = /function\s+padNumber/i.test(c);
    const hasCurrency = /function\s+formatCurrency/i.test(c);
    const hasDefault = /=\s*["'][\.\$]/.test(c);
    if (hasCap && hasTrunc && hasPad && hasCurrency)
      return {
        pass: true,
        title: "String Toolkit complete!",
        feedback:
          "All 4 string utilities implemented with optional defaults! truncate with default suffix and formatCurrency with default symbol are clean TypeScript patterns. Excellent work!",
      };
    const missing = [];
    if (!hasCap) missing.push("capitalize function");
    if (!hasTrunc) missing.push("truncate function");
    if (!hasPad) missing.push("padNumber function");
    if (!hasCurrency) missing.push("formatCurrency function");
    return {
      pass: false,
      title: "Toolkit incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "6a": function (code) {
    const c = stripComments(code);
    const hasNotifType = /type\s+NotificationType\s*=/i.test(c);
    const hasPriority = /type\s+NotificationPriority\s*=/i.test(c);
    const hasIface = /interface\s+Notification\s*\{/i.test(c);
    const hasGetIcon = /function\s+getIcon/i.test(c);
    if (hasNotifType && hasPriority && hasIface && hasGetIcon)
      return {
        pass: true,
        title: "Notification System built!",
        feedback:
          "You created literal union types for NotificationType and NotificationPriority, a typed Notification interface, and a getIcon function. This is real-world TypeScript UI code!",
      };
    const missing = [];
    if (!hasNotifType) missing.push("type NotificationType union");
    if (!hasPriority) missing.push("type NotificationPriority union");
    if (!hasIface) missing.push("interface Notification");
    if (!hasGetIcon) missing.push("function getIcon");
    return {
      pass: false,
      title: "Notification system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "6b": function (code) {
    const c = stripComments(code);
    const hasCircle = /interface\s+Circle\s*\{/i.test(c);
    const hasRect = /interface\s+Rectangle\s*\{/i.test(c);
    const hasGetArea = /function\s+getArea/i.test(c);
    const hasSwitch = /switch\s*\(/i.test(c);
    if (hasCircle && hasRect && hasGetArea && hasSwitch)
      return {
        pass: true,
        title: "Shape Calculator complete!",
        feedback:
          "Discriminated union with Circle, Rectangle, Triangle shapes — the switch on kind is exactly the right pattern. TypeScript can verify you handle all cases!",
      };
    const missing = [];
    if (!hasCircle) missing.push("interface Circle with kind");
    if (!hasRect) missing.push("interface Rectangle with kind");
    if (!hasGetArea) missing.push("function getArea(shape: Shape)");
    if (!hasSwitch) missing.push("switch on shape.kind");
    return {
      pass: false,
      title: "Shape calculator incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "7a": function (code) {
    const c = stripComments(code);
    const hasCharacter = /class\s+Character\s*\{/i.test(c);
    const hasWarrior = /class\s+Warrior\s+extends\s+Character/i.test(c);
    const hasMage = /class\s+Mage\s+extends\s+Character/i.test(c);
    const hasSuper = /super\s*\(/i.test(c);
    if (hasCharacter && hasWarrior && hasMage && hasSuper)
      return {
        pass: true,
        title: "RPG System complete!",
        feedback:
          "Character base class with Warrior and Mage subclasses using super() — textbook OOP inheritance in TypeScript! Your RPG characters have unique abilities while sharing base functionality.",
      };
    const missing = [];
    if (!hasCharacter) missing.push("class Character base");
    if (!hasWarrior) missing.push("class Warrior extends Character");
    if (!hasMage) missing.push("class Mage extends Character");
    if (!hasSuper) missing.push("super() call in subclass constructors");
    return {
      pass: false,
      title: "RPG system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "7b": function (code) {
    const c = stripComments(code);
    const hasBankAccount = /class\s+BankAccount\s*\{/i.test(c);
    const hasPrivate = /private\s+balance/i.test(c);
    const hasDeposit = /deposit\s*\(\s*amount\s*:\s*number/i.test(c);
    const hasWithdraw = /withdraw\s*\(\s*amount\s*:\s*number/i.test(c);
    const hasReturn = /return\s+(true|false)/i.test(c);
    if (hasBankAccount && hasPrivate && hasDeposit && hasWithdraw && hasReturn)
      return {
        pass: true,
        title: "Bank Account System complete!",
        feedback:
          "Excellent encapsulation! Private balance with controlled public methods, withdraw returning boolean for failure handling. This is production-grade TypeScript class design!",
      };
    const missing = [];
    if (!hasBankAccount) missing.push("class BankAccount");
    if (!hasPrivate) missing.push("private balance property");
    if (!hasDeposit) missing.push("deposit(amount: number) method");
    if (!hasWithdraw) missing.push("withdraw returning boolean");
    return {
      pass: false,
      title: "Bank account incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "8a": function (code) {
    const c = stripComments(code);
    const hasClass = /class\s+DataStore\s*<\s*T\s*>/i.test(c);
    const hasAdd = /add\s*\(\s*item\s*:\s*T/i.test(c);
    const hasFind = /find\s*\(/i.test(c);
    const hasTwoCalls = (c.match(/new\s+DataStore/g) || []).length >= 1;
    if (hasClass && hasAdd && hasFind)
      return {
        pass: true,
        title: "Generic DataStore built!",
        feedback:
          "DataStore<T> with typed add, remove, find methods — this is exactly how reusable generic containers are built in TypeScript. The same class works for any type!",
      };
    const missing = [];
    if (!hasClass) missing.push("class DataStore<T>");
    if (!hasAdd) missing.push("add(item: T) method");
    if (!hasFind) missing.push("find(predicate) method");
    return {
      pass: false,
      title: "DataStore incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "8b": function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+ApiResponse\s*<\s*T\s*>/i.test(c);
    const hasCreateSuccess = /function\s+createSuccess\s*<\s*T\s*>/i.test(c);
    const hasCreateError = /function\s+createError\s*<\s*T\s*>/i.test(c);
    const hasUser = /interface\s+User\s*\{/i.test(c);
    const hasProduct = /interface\s+Product\s*\{/i.test(c);
    if (
      hasInterface &&
      hasCreateSuccess &&
      hasCreateError &&
      hasUser &&
      hasProduct
    )
      return {
        pass: true,
        title: "API Response System complete!",
        feedback:
          "Generic ApiResponse<T> with typed success and error factories — this pattern is used in virtually every real TypeScript API project. You've mastered generics in practice!",
      };
    const missing = [];
    if (!hasInterface) missing.push("interface ApiResponse<T>");
    if (!hasCreateSuccess) missing.push("function createSuccess<T>");
    if (!hasCreateError) missing.push("function createError<T>");
    if (!hasUser) missing.push("interface User");
    if (!hasProduct) missing.push("interface Product");
    return {
      pass: false,
      title: "API system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "9a": function (code) {
    const c = stripComments(code);
    const hasLight = /enum\s+TrafficLight\s*\{/i.test(c);
    const hasAction = /enum\s+Action\s*\{/i.test(c);
    const hasGetAction = /function\s+getAction/i.test(c);
    const hasGetNext = /function\s+getNextLight/i.test(c);
    const hasLoop = /for\s*\(/i.test(c);
    if (hasLight && hasAction && hasGetAction && hasGetNext && hasLoop)
      return {
        pass: true,
        title: "Traffic Light Simulator complete!",
        feedback:
          "Two string enums, action mapping, state machine logic, and a simulation loop! This is a perfect real-world enum use case — state machines with clear named values.",
      };
    const missing = [];
    if (!hasLight) missing.push("enum TrafficLight");
    if (!hasAction) missing.push("enum Action");
    if (!hasGetAction) missing.push("function getAction");
    if (!hasGetNext) missing.push("function getNextLight");
    if (!hasLoop) missing.push("simulation loop");
    return {
      pass: false,
      title: "Simulator incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "9b": function (code) {
    const c = stripComments(code);
    const hasRole = /enum\s+Role\s*\{/i.test(c);
    const hasPerm = /enum\s+Permission\s*\{/i.test(c);
    const hasRecord = /Record\s*<\s*Role/i.test(c);
    const hasFn = /function\s+hasPermission/i.test(c);
    if (hasRole && hasPerm && hasRecord && hasFn)
      return {
        pass: true,
        title: "Permission System complete!",
        feedback:
          "Role and Permission enums + Record<Role, Permission[]> + hasPermission function — this is how real RBAC (Role-Based Access Control) is implemented in TypeScript APIs!",
      };
    const missing = [];
    if (!hasRole) missing.push("enum Role");
    if (!hasPerm) missing.push("enum Permission");
    if (!hasRecord) missing.push("Record<Role, Permission[]> permissions map");
    if (!hasFn) missing.push("function hasPermission");
    return {
      pass: false,
      title: "Permission system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "10a": function (code) {
    const c = stripComments(code);
    const hasInterfaces = /interface\s+ClickEvent\s*\{/i.test(c);
    const hasUnion = /type\s+AppEvent\s*=/i.test(c);
    const hasHandler = /function\s+handleEvent/i.test(c);
    const hasSwitch = /switch\s*\(\s*event\.type/i.test(c);
    if (hasInterfaces && hasUnion && hasHandler && hasSwitch)
      return {
        pass: true,
        title: "Event System complete!",
        feedback:
          "Discriminated union with type literals, handleEvent with exhaustive switch — TypeScript guarantees you handle all event types. This pattern is used in React, Redux, and many real systems!",
      };
    const missing = [];
    if (!hasInterfaces)
      missing.push(
        "ClickEvent, KeyEvent, ResizeEvent interfaces with type discriminant",
      );
    if (!hasUnion) missing.push("type AppEvent = union");
    if (!hasHandler) missing.push("function handleEvent(event: AppEvent)");
    if (!hasSwitch) missing.push("switch on event.type");
    return {
      pass: false,
      title: "Event system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "10b": function (code) {
    const c = stripComments(code);
    const hasValidInput = /type\s+ValidInput\s*=/i.test(c);
    const hasTypePred = /v\s+is\s+string/i.test(c);
    const hasSanitize = /function\s+sanitize/i.test(c);
    const hasValidateForm =
      /function\s+validateForm/i.test(c) || /validateForm\s*=/i.test(c);
    if (hasValidInput && hasTypePred && hasSanitize)
      return {
        pass: true,
        title: "Input Validator complete!",
        feedback:
          "ValidInput union, type predicate guards (v is string), and sanitize function — type predicates are one of TypeScript's most powerful and underused features!",
      };
    const missing = [];
    if (!hasValidInput) missing.push("type ValidInput union");
    if (!hasTypePred) missing.push("type predicate (v is string)");
    if (!hasSanitize) missing.push("function sanitize");
    return {
      pass: false,
      title: "Validator incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "11a": function (code) {
    const c = stripComments(code);
    const hasMath = /MathUtils\s*=/i.test(c) || /const\s+MathUtils/i.test(c);
    const hasString =
      /StringUtils\s*=/i.test(c) || /const\s+StringUtils/i.test(c);
    const hasArray = /ArrayUtils\s*=/i.test(c) || /const\s+ArrayUtils/i.test(c);
    const hasClamp = /clamp\s*:/i.test(c);
    const hasSlugify = /slugify\s*:/i.test(c);
    if (hasMath && hasString && hasArray && hasClamp && hasSlugify)
      return {
        pass: true,
        title: "Utility Module System built!",
        feedback:
          "MathUtils, StringUtils, ArrayUtils all organized as typed namespace objects — this is the module organization pattern used in many real TypeScript utility libraries!",
      };
    const missing = [];
    if (!hasMath || !hasClamp) missing.push("MathUtils with clamp and lerp");
    if (!hasString || !hasSlugify)
      missing.push("StringUtils with slugify and wordCount");
    if (!hasArray) missing.push("ArrayUtils with unique and chunk");
    return {
      pass: false,
      title: "Utility system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "11b": function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+Plugin\s*\{/i.test(c);
    const hasManager = /class\s+PluginManager\s*\{/i.test(c);
    const hasRegister = /register\s*\(\s*plugin\s*:\s*Plugin/i.test(c);
    const hasThreePlugins = (c.match(/const\s+\w+Plugin/g) || []).length >= 3;
    if (hasInterface && hasManager && hasRegister && hasThreePlugins)
      return {
        pass: true,
        title: "Plugin Architecture complete!",
        feedback:
          "Plugin interface, PluginManager class, and 3 concrete plugins — this is exactly the Strategy + Registry design pattern used in Express middleware, Webpack plugins, and many real systems!",
      };
    const missing = [];
    if (!hasInterface) missing.push("interface Plugin with execute method");
    if (!hasManager) missing.push("class PluginManager");
    if (!hasRegister) missing.push("register(plugin: Plugin) method");
    if (!hasThreePlugins) missing.push("at least 3 Plugin objects");
    return {
      pass: false,
      title: "Plugin system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "12a": function (code) {
    const c = stripComments(code);
    const hasCreateUser = /type\s+CreateUser\s*=\s*Omit/i.test(c);
    const hasUpdateUser = /type\s+UpdateUser\s*=\s*Partial/i.test(c);
    const hasSummary = /type\s+UserSummary\s*=\s*Pick/i.test(c);
    const hasFn = /function\s+createUser/i.test(c);
    if (hasCreateUser && hasUpdateUser && hasSummary && hasFn)
      return {
        pass: true,
        title: "User Manager complete!",
        feedback:
          "CreateUser with Omit, UpdateUser with Partial, UserSummary with Pick — this is exactly how real SaaS applications protect sensitive data and separate DTOs from full models!",
      };
    const missing = [];
    if (!hasCreateUser) missing.push("type CreateUser = Omit<User, 'id'>");
    if (!hasUpdateUser) missing.push("type UpdateUser = Partial<Omit<...>>");
    if (!hasSummary) missing.push("type UserSummary = Pick<...>");
    if (!hasFn) missing.push("function createUser");
    return {
      pass: false,
      title: "User manager incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "12b": function (code) {
    const c = stripComments(code);
    const hasRequired = /type\s+RequiredConfig\s*=\s*Required/i.test(c);
    const hasOptional = /type\s+OptionalConfig\s*=\s*Partial/i.test(c);
    const hasFull = /type\s+FullConfig\s*=/i.test(c);
    const hasRecord = /Record\s*<\s*ConfigKeys/i.test(c);
    if (hasRequired && hasOptional && hasFull && hasRecord)
      return {
        pass: true,
        title: "Config System complete!",
        feedback:
          "Required+Optional split with & intersection, ConfigKeys with keyof, Record for descriptions — this is advanced type composition at its finest! Real TypeScript config libraries use exactly this.",
      };
    const missing = [];
    if (!hasRequired) missing.push("RequiredConfig = Required<Pick<...>>");
    if (!hasOptional) missing.push("OptionalConfig = Partial<Omit<...>>");
    if (!hasFull) missing.push("FullConfig = RequiredConfig & OptionalConfig");
    if (!hasRecord) missing.push("Record<ConfigKeys, string> for descriptions");
    return {
      pass: false,
      title: "Config system incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "13a": function (code) {
    const c = stripComments(code);
    const hasMinLength = /function\s+MinLength/i.test(c);
    const hasTimed = /function\s+Timed/i.test(c);
    const hasDescriptor = /descriptor\.value\s*=/i.test(c);
    const hasClass = /class\s+UserForm\s*\{/i.test(c);
    if (hasMinLength && hasTimed && hasDescriptor && hasClass)
      return {
        pass: true,
        title: "Validation Decorators complete!",
        feedback:
          "MinLength, MaxValue, Timed decorators with a decorated class — factory decorators returning functions is the right pattern for parameterized decorators!",
      };
    const missing = [];
    if (!hasMinLength)
      missing.push("function MinLength(min: number) decorator factory");
    if (!hasTimed) missing.push("function Timed method decorator");
    if (!hasDescriptor)
      missing.push("descriptor.value = ... wrapping in Timed");
    if (!hasClass) missing.push("class UserForm with decorators applied");
    return {
      pass: false,
      title: "Validators incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "14a": function (code) {
    const c = stripComments(code);
    const hasType = /type\s+Target\s*=/i.test(c);
    const hasInterface = /interface\s+TsConfig\s*\{/i.test(c);
    const hasFn = /function\s+createConfig/i.test(c);
    const has3Calls = (c.match(/createConfig\s*\(/g) || []).length >= 3;
    if (hasType && hasInterface && hasFn && has3Calls)
      return {
        pass: true,
        title: "Config Generator complete!",
        feedback:
          "Target union type, TsConfig interface, createConfig with defaults, 3 config variants — this is how TypeScript project setup tools like create-react-app generate configs!",
      };
    const missing = [];
    if (!hasType) missing.push("type Target union");
    if (!hasInterface) missing.push("interface TsConfig");
    if (!hasFn) missing.push("function createConfig");
    if (!has3Calls) missing.push("at least 3 config calls");
    return {
      pass: false,
      title: "Generator incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "15a": function (code) {
    const c = stripComments(code);
    const hasFormField = /interface\s+FormField\s*\{/i.test(c);
    const hasFormProps = /interface\s+FormProps\s*\{/i.test(c);
    const hasOnSubmit = /onSubmit\s*:/i.test(c);
    const hasState = /useState/i.test(c);
    const hasChange = /handleChange|onChange/i.test(c);
    if (hasFormField && hasFormProps && hasOnSubmit && hasState && hasChange)
      return {
        pass: true,
        title: "Form Builder complete!",
        feedback:
          "FormField and FormProps interfaces, typed useState, onChange handlers — this is how real React form libraries like react-hook-form use TypeScript to ensure type-safe form handling!",
      };
    const missing = [];
    if (!hasFormField) missing.push("interface FormField");
    if (!hasFormProps) missing.push("interface FormProps with onSubmit");
    if (!hasState) missing.push("useState for form values");
    if (!hasChange) missing.push("onChange handler");
    return {
      pass: false,
      title: "Form builder incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "16a": function (code) {
    const c = stripComments(code);
    const hasTodo = /interface\s+Todo\s*\{/i.test(c);
    const hasCreate = /type\s+CreateTodoDto\s*=\s*Omit/i.test(c);
    const hasUpdate = /type\s+UpdateTodoDto\s*=\s*Partial/i.test(c);
    const hasApi = /interface\s+ApiResponse\s*<\s*T\s*>/i.test(c);
    const hasHandler = /const\s+getAll\s*=/i.test(c);
    if (hasTodo && hasCreate && hasUpdate && hasApi && hasHandler)
      return {
        pass: true,
        title: "REST API Simulator complete!",
        feedback:
          "Todo CRUD with Omit/Partial DTOs, generic ApiResponse<T>, and typed Express handlers — this is a complete production-ready TypeScript REST API pattern!",
      };
    const missing = [];
    if (!hasTodo) missing.push("interface Todo");
    if (!hasCreate) missing.push("type CreateTodoDto = Omit<Todo, ...>");
    if (!hasUpdate) missing.push("type UpdateTodoDto = Partial<...>");
    if (!hasApi) missing.push("interface ApiResponse<T>");
    if (!hasHandler) missing.push("typed handler functions");
    return {
      pass: false,
      title: "API simulator incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  "17a": function (code) {
    const c = stripComments(code);
    const hasNullable = /type\s+IsNullable\s*<\s*T\s*>/i.test(c);
    const hasRequired = /type\s+RequiredFields\s*<\s*T\s*>/i.test(c);
    const hasDeepReadonly = /type\s+DeepReadonly\s*<\s*T\s*>/i.test(c);
    const hasEvent = /type\s+EventHandlerName\s*<\s*T/i.test(c);
    const hasRecursive = /DeepReadonly\s*<\s*T\s*\[/i.test(c);
    if (hasNullable && hasRequired && hasDeepReadonly && hasEvent)
      return {
        pass: true,
        title: "Type Schema complete! You've mastered TypeScript! 🎉",
        feedback:
          "IsNullable, RequiredFields, OptionalFields, EventHandlerName, DeepReadonly — all defined! You've reached the advanced TypeScript level used by library authors. Congratulations on completing all 17 lessons!",
      };
    const missing = [];
    if (!hasNullable) missing.push("type IsNullable<T>");
    if (!hasRequired) missing.push("type RequiredFields<T>");
    if (!hasDeepReadonly) missing.push("type DeepReadonly<T> (recursive)");
    if (!hasEvent) missing.push("type EventHandlerName<T>");
    return {
      pass: false,
      title: "Type schema incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
};

function submitProject() {
  const code = document.getElementById("project-editor").value.trim();
  const thinking = document.getElementById("project-thinking");
  const resultEl = document.getElementById("project-result");
  const submitBtn = document.getElementById("project-submit-btn");
  if (!code || code.replace(/\/\/[^\n]*/g, "").trim() === "") {
    alert("Write your project code first!");
    return;
  }
  submitBtn.disabled = true;
  thinking.classList.add("show");
  resultEl.className = "project-result";
  resultEl.innerHTML = "";
  setTimeout(() => {
    thinking.classList.remove("show");
    submitBtn.disabled = false;
    const validator = PROJECT_VALIDATORS[activeProjectId];
    const result = validator
      ? validator(code)
      : {
          pass: true,
          title: "Project accepted!",
          feedback: "Great work completing the project!",
        };
    if (result.pass) {
      const id = activeLesson.id;
      const wasAlreadyDone = lessonProgress(id).project;
      if (!wasAlreadyDone) {
        points += 50;
        streak++;
      }
      progress[id] = { ...lessonProgress(id), project: true };
      save();
      updateStats();
      updatePhaseTabs();
      resultEl.className = "project-result pass show";
      resultEl.innerHTML = `
<div class="project-result-hdr">
  <div class="project-result-icon"></div>
  <div class="project-result-title">${escHtml(result.title)}</div>
  <div class="xp-badge">+50 XP</div>
</div>
<div class="project-result-body">${escHtml(result.feedback)}</div>
<div class="btn-row" style="margin-top:16px">
  <button class="btn btn-pink" onclick="completionScreen()">Complete Lesson! [ \\o/ ]</button>
</div>`;
    } else {
      resultEl.className = "project-result fail show";
      resultEl.innerHTML = `
<div class="project-result-hdr">
  <div class="project-result-icon">(x_x)</div>
  <div class="project-result-title">${escHtml(result.title)}</div>
</div>
<div class="project-result-body">${escHtml(result.feedback)}</div>
<div class="btn-row" style="margin-top:16px">
  <button class="btn btn-ghost" onclick="submitProject()">Try Again [ → ]</button>
</div>`;
    }
  }, 1100);
}

// ══════════════════════════════════════════
// CODE CHALLENGE VALIDATORS (abbreviated from original)
// ══════════════════════════════════════════
function stripComments(code) {
  return code
    .replace(/\/\/[^\n]*/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .trim();
}
function hasTypedVar(code, name, type) {
  const c = stripComments(code);
  return new RegExp(
    `(let|const|var)\\s+${name}\\s*:\\s*${type}\\s*=`,
    "i",
  ).test(c);
}
function hasInterface(code, name) {
  const c = stripComments(code);
  return new RegExp(`interface\\s+${name}\\s*\\{`, "i").test(c);
}
function hasFunction(code, name) {
  const c = stripComments(code);
  return (
    new RegExp(`function\\s+${name}\\s*\\(`, "i").test(c) ||
    new RegExp(
      `(const|let)\\s+${name}\\s*=\\s*(\\(.*\\)|\\w+)\\s*=>`,
      "i",
    ).test(c)
  );
}
function hasTypeAlias(code, name, contains) {
  const c = stripComments(code);
  const defn = new RegExp(`type\\s+${name}\\s*=`, "i").test(c);
  if (!defn) return false;
  if (!contains) return true;
  return c.includes(contains);
}
function hasStringArray(code, name) {
  const c = stripComments(code);
  return new RegExp(
    `(let|const|var)\\s+${name}\\s*:\\s*string\\s*\\[\\]`,
    "i",
  ).test(c);
}
function hasTuple(code, name, types) {
  const c = stripComments(code);
  return new RegExp(
    `(let|const|var)\\s+${name}\\s*:\\s*\\[${types}\\]`,
    "i",
  ).test(c);
}

const VALIDATORS = {
  1: (code) => {
    const hasUsername = hasTypedVar(code, "username", "string");
    const hasYear = hasTypedVar(code, "year", "number");
    if (hasUsername && hasYear)
      return {
        pass: true,
        title: "Both variables typed correctly!",
        feedback:
          "You declared username as string and year as number — exactly right!",
      };
    if (!hasUsername && !hasYear)
      return {
        pass: false,
        title: "Missing both type annotations",
        feedback:
          'Try:\nlet username: string = "YourName";\nlet year: number = 2026;',
      };
    if (!hasUsername)
      return {
        pass: false,
        title: "username type missing",
        feedback: 'Fix: let username: string = "YourName";',
      };
    return {
      pass: false,
      title: "year type missing",
      feedback: "Fix: let year: number = 2026;",
    };
  },
  2: (code) => {
    const ok = [
      hasTypedVar(code, "city", "string"),
      hasTypedVar(code, "population", "number"),
      hasTypedVar(code, "isCapital", "boolean"),
    ];
    const missing = [
      "city: string",
      "population: number",
      "isCapital: boolean",
    ].filter((_, i) => !ok[i]);
    if (!missing.length)
      return {
        pass: true,
        title: "All three primitives typed!",
        feedback:
          "You correctly typed string, number, and boolean. Great work!",
      };
    return {
      pass: false,
      title: `Missing: ${missing.join(", ")}`,
      feedback: `Still need:\n${missing.map((m) => `  let ${m} = ...`).join("\n")}`,
    };
  },
  3: (code) => {
    const hasFruits = hasStringArray(code, "fruits");
    const hasPerson = hasTuple(code, "person", "string,\\s*number");
    const c = stripComments(code);
    const m = c.match(/fruits\s*(?::\s*string\s*\[\]\s*)?=\s*\[([^\]]*)\]/i);
    const fc = m ? (m[1].match(/,/g) || []).length + 1 : 0;
    if (hasFruits && hasPerson && fc >= 3)
      return {
        pass: true,
        title: "Array and tuple correct!",
        feedback:
          "Your fruits string[] has 3+ items and person [string, number] tuple is perfect!",
      };
    if (!hasFruits || fc < 3)
      return {
        pass: false,
        title: "fruits needs 3+ items",
        feedback: 'const fruits: string[] = ["apple","banana","mango"];',
      };
    return {
      pass: false,
      title: "person tuple needs annotation",
      feedback: 'let person: [string, number] = ["Alice", 25];',
    };
  },
  4: (code) => {
    const c = stripComments(code);
    const ok = [
      hasInterface(code, "Product"),
      /readonly\s+id\s*:\s*number/i.test(c),
      /name\s*:\s*string/i.test(c),
      /price\s*:\s*number/i.test(c),
      /:\s*Product/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Interface designed correctly!",
        feedback:
          "Product interface with readonly id, name, price — perfectly structured!",
      };
    if (!ok[0])
      return {
        pass: false,
        title: "No interface found",
        feedback:
          "Start with: interface Product { readonly id: number; name: string; price: number; inStock?: boolean; }",
      };
    return {
      pass: false,
      title: "Interface incomplete",
      feedback:
        "Check: readonly id, name: string, price: number, and a variable typed as Product.",
    };
  },
  5: (code) => {
    const c = stripComments(code);
    const ok = [
      hasFunction(code, "formatName"),
      /firstName\s*:\s*string/i.test(c),
      /lastName\s*:\s*string/i.test(c),
      /\)\s*:\s*string\s*[{=]/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Function typed correctly!",
        feedback: "formatName has typed params and returns string. Great work!",
      };
    if (!ok[0])
      return {
        pass: false,
        title: "No formatName function",
        feedback:
          "Write: function formatName(firstName: string, lastName: string): string { ... }",
      };
    return {
      pass: false,
      title: "Function needs types",
      feedback:
        "Check: firstName: string, lastName: string, return type : string",
    };
  },
  6: (code) => {
    const c = stripComments(code);
    const rm = c.match(/type\s+Result\s*=([^;]+)/i);
    const tm = c.match(/type\s+Theme\s*=([^;]+)/i);
    const ok = [
      rm &&
        /string/i.test(rm[1]) &&
        /number/i.test(rm[1]) &&
        /boolean/i.test(rm[1]),
      tm && /"light"/i.test(tm[1]) && /"dark"/i.test(tm[1]),
      /:\s*Theme/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Union types mastered!",
        feedback: "Result union and Theme literal type both perfect!",
      };
    const missing = [];
    if (!ok[0]) missing.push("Result = string | number | boolean");
    if (!ok[1]) missing.push('Theme = "light" | "dark"');
    if (!ok[2]) missing.push("a variable typed as Theme");
    return {
      pass: false,
      title: "Type aliases need work",
      feedback: `Missing:\n${missing.map((m) => "  • type " + m).join("\n")}`,
    };
  },
  7: (code) => {
    const c = stripComments(code);
    const ok = [
      /class\s+Car\s*\{/i.test(c),
      /(?:public\s+)?make\s*:\s*string/i.test(c),
      /(?:public\s+)?model\s*:\s*string/i.test(c),
      /(?:private\s+)?year\s*:\s*number/i.test(c),
      /getInfo\s*\(\s*\)\s*:\s*string/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Car class built correctly!",
        feedback:
          "make, model, year with proper access modifiers and getInfo(): string — perfect!",
      };
    if (!ok[0])
      return {
        pass: false,
        title: "No Car class found",
        feedback:
          "Start with: class Car { constructor(public make: string, ...) {} getInfo(): string { ... } }",
      };
    return {
      pass: false,
      title: "Class incomplete",
      feedback:
        "Check: public make/model, private year, getInfo(): string method.",
    };
  },
  8: (code) => {
    const c = stripComments(code);
    const ok = [
      /function\s+wrapInArray\s*<\s*T\s*>/i.test(c),
      /value\s*:\s*T\b/i.test(c),
      /\)\s*:\s*T\s*\[/i.test(c),
      (c.match(/wrapInArray\s*[(<]/g) || []).length >= 2,
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Generic function perfect!",
        feedback:
          "wrapInArray<T> taking T returning T[] called twice — excellent!",
      };
    if (!ok[0])
      return {
        pass: false,
        title: "Missing <T> syntax",
        feedback: "function wrapInArray<T>(value: T): T[] { return [value]; }",
      };
    return {
      pass: false,
      title: "Almost!",
      feedback: `Check: parameter as T, return T[], at least 2 calls.`,
    };
  },
  9: (code) => {
    const c = stripComments(code);
    const ok = [
      /enum\s+Season\s*\{/i.test(c),
      /Spring\s*=\s*["']spring["']/i.test(c),
      /Summer\s*=\s*["']summer["']/i.test(c),
      /Autumn\s*=\s*["']autumn["']/i.test(c),
      /Winter\s*=\s*["']winter["']/i.test(c),
      /:\s*Season/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Enum perfect!",
        feedback:
          "All four string members + typed variable. String enums are the modern TypeScript way!",
      };
    if (!ok[0])
      return {
        pass: false,
        title: "No Season enum",
        feedback:
          'enum Season { Spring = "spring", Summer = "summer", Autumn = "autumn", Winter = "winter" }',
      };
    return {
      pass: false,
      title: "Enum incomplete",
      feedback: `Check all four members have string values and declare a Season variable.`,
    };
  },
  10: (code) => {
    const c = stripComments(code);
    const ok = [
      /function\s+describe\s*\(/i.test(c),
      /string\s*\|\s*number\s*\|\s*boolean/i.test(c),
      /typeof\s+\w+\s*===?\s*["']string["']/i.test(c),
      /typeof\s+\w+\s*===?\s*["']number["']/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Type narrowing mastered!",
        feedback:
          "describe() narrows string | number | boolean perfectly with typeof guards!",
      };
    if (!ok[0])
      return {
        pass: false,
        title: "No describe function",
        feedback:
          "Write: function describe(value: string | number | boolean): string { ... }",
      };
    return {
      pass: false,
      title: "More narrowing needed",
      feedback: `Check: union type param, typeof "string" check, typeof "number" check.`,
    };
  },
  11: (code) => {
    const c = stripComments(code);
    const ok = [
      /export\s+function\s+greet\s*\(\s*\w+\s*:\s*string/i.test(c),
      /export\s+interface\s+Person\s*\{/i.test(c),
      /name\s*:\s*string/i.test(c),
      /age\s*:\s*number/i.test(c),
      /import\s*\{[^}]+\}\s*from/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Modules understood!",
        feedback:
          "Exported greet, exported Person interface, and imported them — full module cycle mastered!",
      };
    const missing = [
      "export function greet(name: string): string",
      "export interface Person { ... }",
      "name: string in Person",
      "age: number in Person",
      "import { greet, Person } from ...",
    ].filter((_, i) => !ok[i]);
    return {
      pass: false,
      title: "Module exports incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  12: (code) => {
    const c = stripComments(code);
    const ok = [
      /Omit\s*<\s*Product\s*,/i.test(c),
      /Partial\s*<\s*PublicProduct\s*>/i.test(c),
      /type\s+PublicProduct/i.test(c),
      /type\s+UpdateProduct/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Utility types composed!",
        feedback:
          "PublicProduct with Omit, UpdateProduct with Partial — perfect!",
      };
    const missing = [
      'type PublicProduct = Omit<Product, "secret">',
      "type UpdateProduct = Partial<PublicProduct>",
    ].filter((_, i) => !ok[i + 2] || !ok[i]);
    return {
      pass: false,
      title: "Utility types incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  13: (code) => {
    const c = stripComments(code);
    const ok = [
      /function\s+Frozen\s*\(\s*\w+\s*:\s*Function\s*\)/i.test(c),
      /Object\.freeze\s*\(/i.test(c),
      /class\s+AppConfig/i.test(c),
      /@Frozen/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Decorators applied correctly!",
        feedback:
          "Frozen class decorator freezing prototype, applied with @Frozen — perfect TypeScript decorator pattern!",
      };
    return {
      pass: false,
      title: "Decorator incomplete",
      feedback:
        "Need: function Frozen(constructor: Function), Object.freeze(), class AppConfig, @Frozen applied.",
    };
  },
  14: (code) => {
    const c = stripComments(code);
    const ok = [
      /target\s*:\s*["']ES2021["']/i.test(c),
      /strict\s*:\s*true/i.test(c),
      /outDir\s*:\s*["']\.\/dist["']/i.test(c),
      /rootDir\s*:\s*["']\.\/src["']/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "tsconfig configured!",
        feedback:
          "ES2021, strict, ./dist, ./src — production-ready TypeScript config!",
      };
    const missing = [
      'target: "ES2021"',
      "strict: true",
      'outDir: "./dist"',
      'rootDir: "./src"',
    ].filter((_, i) => !ok[i]);
    return {
      pass: false,
      title: "Config incomplete",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
  15: (code) => {
    const c = stripComments(code);
    const ok = [
      /interface\s+CardProps\s*\{/i.test(c),
      /title\s*:\s*string/i.test(c),
      /description\s*:\s*string/i.test(c),
      /onClick\s*\?\s*:\s*\(\s*\)\s*=>\s*void/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "React component typed!",
        feedback:
          "CardProps with title, description, optional onClick — perfect modern React TypeScript!",
      };
    return {
      pass: false,
      title: "Component needs work",
      feedback:
        "Check: interface CardProps, title: string, description: string, onClick?: () => void.",
    };
  },
  16: (code) => {
    const c = stripComments(code);
    const ok = [
      /interface\s+PostParams\s*\{/i.test(c),
      /id\s*:\s*string/i.test(c),
      /Request\s*<\s*PostParams\s*>/i.test(c),
      /res\s*:\s*Response/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Express route typed!",
        feedback:
          "PostParams, typed Request<PostParams>, res: Response — production-grade Express TypeScript!",
      };
    const missing = [
      "interface PostParams { id: string }",
      "Request<PostParams> on req",
      "res: Response parameter",
    ].filter((_, i) => !ok[i + 0]);
    return {
      pass: false,
      title: "Route handler incomplete",
      feedback: `Check: PostParams interface, Request<PostParams>, Response.`,
    };
  },
  17: (code) => {
    const c = stripComments(code);
    const ok = [
      /type\s+IsArray\s*<\s*T\s*>/i.test(c),
      /T\s+extends\s+any\s*\[\]/i.test(c),
      /\?\s*["']yes["']\s*:\s*["']no["']/i.test(c),
      /type\s+Test1/i.test(c),
      /type\s+Test2/i.test(c),
    ];
    if (ok.every(Boolean))
      return {
        pass: true,
        title: "Conditional type mastered! All 17 lessons complete! 🎉",
        feedback:
          'IsArray<T> uses T extends any[] ? "yes" : "no" — the correct pattern. You\'ve completed the entire TS Academy course!',
      };
    const missing = [
      "type IsArray<T>",
      "T extends any[] condition",
      '? "yes" : "no"',
      "type Test1",
      "type Test2",
    ].filter((_, i) => !ok[i]);
    return {
      pass: false,
      title: "Conditional type needs work",
      feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}`,
    };
  },
};

function submitCode() {
  const code = document.getElementById("code-editor").value.trim();
  const editor = document.getElementById("code-editor");
  const thinking = document.getElementById("thinking");
  const resultEl = document.getElementById("ai-result");
  const submitBtn = document.getElementById("submit-btn");
  if (!code || code.replace(/\/\/[^\n]*/g, "").trim() === "") {
    alert("Please write some code first!");
    return;
  }
  editor.classList.add("checking");
  submitBtn.disabled = true;
  thinking.classList.add("show");
  resultEl.className = "ai-result";
  resultEl.innerHTML = "";
  setTimeout(() => {
    thinking.classList.remove("show");
    editor.classList.remove("checking");
    submitBtn.disabled = false;
    const validator = VALIDATORS[activeLesson.id];
    const result = validator
      ? validator(code)
      : { pass: true, title: "Looks good!", feedback: "Code accepted!" };
    if (result.pass) {
      const id = activeLesson.id;
      const was = lessonProgress(id).code;
      progress[id] = { ...lessonProgress(id), code: true };
      if (!was) {
        points += 30;
        streak++;
        save();
        updateStats();
      }
      save();
      updatePhaseTabs();
      resultEl.className = "ai-result pass show";
      resultEl.innerHTML = `<div class="ai-result-hdr"><div class="ai-result-icon">(^_^)</div><div class="ai-result-title">${escHtml(result.title)}</div></div><div class="ai-result-body">${escHtml(result.feedback)}</div><div class="btn-row" style="margin-top:16px"><button class="btn btn-primary" onclick="switchPhase('project')">Go to Project Phase</button></div>`;
    } else {
      resultEl.className = "ai-result fail show";
      resultEl.innerHTML = `<div class="ai-result-hdr"><div class="ai-result-icon">(x_x)</div><div class="ai-result-title">${escHtml(result.title)}</div></div><div class="ai-result-body">${escHtml(result.feedback)}</div><div class="btn-row" style="margin-top:16px"><button class="btn btn-ghost" onclick="submitCode()">Try Again [ → ]</button></div>`;
    }
  }, 900);
}

// ══════════════════════════════════════════
// COMPLETION SCREEN
// ══════════════════════════════════════════
function completionScreen() {
  const l = activeLesson;
  const nextIdx = LESSONS.findIndex((x) => x.id === l.id) + 1;
  const hasNext = nextIdx < LESSONS.length;
  document.getElementById("complete-content").innerHTML = `
<div class="complete-ascii">\\o/</div>
<div class="complete-title">Lesson ${l.id} Complete!</div>
<div class="complete-sub">You finished: Learn → Quiz → Challenge → Project</div>
<div class="complete-rewards">
  <div class="reward-card"><div class="reward-val" style="color:var(--yellow)">(*)</div><div class="reward-val" style="color:var(--yellow)">${points}</div><div class="reward-label">Total Points</div></div>
  <div class="reward-card"><div class="reward-val" style="color:var(--orange)">>_<</div><div class="reward-val" style="color:var(--orange)">${streak}</div><div class="reward-label">Streak</div></div>
  <div class="reward-card"><div class="reward-val" style="color:var(--cyan)">[@]</div><div class="reward-val" style="color:var(--cyan)">${LESSONS.filter((x) => isLessonDone(x.id)).length}/${LESSONS.length}</div><div class="reward-label">Lessons Done</div></div>
  <div class="reward-card"><div class="reward-val" style="color:var(--blue)">[P]</div><div class="reward-val" style="color:var(--blue)">${LESSONS.filter((x) => lessonProgress(x.id).project).length}</div><div class="reward-label">Projects Built</div></div>
</div>
<div class="btn-row" style="justify-content:center">
  ${hasNext ? `<button class="btn btn-primary" onclick="openLesson(${LESSONS[nextIdx].id})">Next Lesson: ${LESSONS[nextIdx].title} [ → ]</button>` : `<div style="font-family:'JetBrains Mono',monospace;color:var(--cyan);font-size:1.1rem">(^_^) You completed all 17 lessons + all projects!</div>`}
  <button class="btn btn-ghost" onclick="goBack()">All Lessons</button>
</div>`;
  showView("complete");
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
updateStats();
renderGrid();
showView("lessons");
