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
            "It doesn't support objects",
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
scores.push(99);        // add to end
scores.pop();           // remove from end
let top = scores[0];    // index access → top: 95

// Array iteration methods
let doubled = scores.map(score => score * 2);
let passed = scores.filter(score => score >= 90);
scores.forEach(score => console.log(score));

// Union type arrays
let mixed: (string | number)[] = ["hello", 42, "world"];`,
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
          type: "points",
          heading: "Key Notes About Interfaces",
          points: [
            "Interfaces only exist at compile-time, they do not produce JavaScript code.",
            "Use readonly to prevent modification of a property.",
            "Use ? to mark a property as optional.",
            "Interfaces can extend other interfaces to combine shapes.",
            "You can type objects inline, but interfaces are reusable and clearer.",
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
          body: `Functions are reusable blocks of code that perform tasks. In TypeScript, you can explicitly type parameters and return types. This prevents errors like passing the wrong type of arguments or misusing return values.`,
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

  function log(msg: string): void {
    console.log(msg);
  }`,
        },
        {
          type: "code",
          heading: "Optional & Default Parameters",
          file: "params.ts",
          code: `function greetUser(name: string, title?: string): string {
    return title ? \`Hi \${title} \${name}\` : \`Hi \${name}\`;
  }

  function createUser(name: string, role: string = "guest") {
    return { name, role };
  }

  function sum(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
  }`,
        },
        {
          type: "points",
          heading: "Key Notes About Functions",
          points: [
            "Always type parameters and return values for safety.",
            "Use optional parameters (?) when a value is not always required.",
            "Default values can make parameters optional without undefined.",
            "Rest parameters (...) allow passing multiple arguments as an array.",
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
            "(a: number, b: number) => number explicitly types the function variable.",
        },
      ],
      challenge: {
        title: "Type a Function",
        desc: "Write a properly typed TypeScript function.",
        task: `Write a function called <strong>formatName</strong> that takes <strong>firstName</strong> (string), <strong>lastName</strong> (string), optional <strong>title</strong> (string), and returns a formatted string. All parameters and the return type must be explicitly typed.`,
        starterCode: `function formatName(firstName: string, lastName: string, title?: string): string {
    // Your code here
    return "";
  }`,
        hint: `function formatName(firstName: string, lastName: string, title?: string): string { ... }`,
        checks:
          "Check that formatName has firstName and lastName typed as string, an optional title parameter, returns string.",
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
          body: `Union types let a variable hold values of <strong>more than one type</strong> using the <code>|</code> (pipe) operator.`,
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
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}`,
        },
        {
          type: "code",
          heading: "Type Aliases with Unions",
          file: "aliases.ts",
          code: `type ID = string | number;
type Status = "pending" | "approved" | "rejected";

let orderId: ID = "ORD-001";
let status: Status = "pending";
// status = "shipped"; // ❌ Error!`,
        },
        {
          type: "points",
          heading: "Type Narrowing with Unions",
          points: [
            "Use typeof checks to narrow primitive types.",
            "Use instanceof to narrow class instances.",
            "Use the in operator to check for specific properties.",
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
            "Type aliases allow you to name a union for readability and reuse.",
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
          "Verify Result, Theme type aliases, and currentTheme variable are all defined correctly.",
      },
    },
    {
      id: 7,
      icon: "[C]",
      title: "Classes",
      desc: "Blueprints for objects — OOP in TypeScript",
      content: [
        {
          type: "text",
          heading: "What are Classes?",
          body: `Classes are <strong>blueprints for creating objects</strong>. TypeScript adds access modifiers and strict typing on top of JavaScript classes.`,
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
  console.log(alice.greet());`,
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
          heading: "Inheritance",
          file: "inheritance.ts",
          code: `class Animal {
    constructor(public name: string) {}
    speak(): string { return \`\${this.name} makes a sound.\`; }
  }
  class Dog extends Animal {
    constructor(name: string, public breed: string) { super(name); }
    speak(): string { return \`\${this.name} barks!\`; }
  }`,
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
          explain: "super() calls the constructor of the parent class.",
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
            "You can declare and initialize properties directly in constructor parameters.",
        },
      ],
      challenge: {
        title: "Build a Class",
        desc: "Create a TypeScript class with typed properties and a method.",
        task: `Create a class called <strong>Car</strong> with public make/model, private year, and a getInfo() method returning "Make Model (Year)".`,
        starterCode: `// Create the Car class\n`,
        hint: `class Car { constructor(public make: string, public model: string, private year: number) {} getInfo(): string { return \`\${this.make} \${this.model} (\${this.year})\`; } }`,
        checks:
          "Verify Car class has public make/model, private year, a getInfo method returning a string.",
      },
    },
    {
      id: 8,
      icon: "[T]",
      title: "Generics",
      desc: "Write once, work with any type",
      content: [
        {
          type: "text",
          heading: "What Are Generics?",
          body: `Generics allow you to write <strong>reusable code</strong> that works with different types while still being <strong>type-safe</strong>. Generics use the syntax <code>&lt;T&gt;</code>.`,
        },
        {
          type: "code",
          heading: "Generic Function Example",
          file: "generics.ts",
          code: `function getFirst<T>(arr: T[]): T {
  return arr[0];
}
getFirst<number>([1, 2, 3]);     // 1
getFirst<string>(["a", "b"]);    // "a"`,
        },
        {
          type: "code",
          heading: "Generic Interface Example",
          file: "api-response.ts",
          code: `interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}`,
        },
        {
          type: "points",
          heading: "Why Use Generics?",
          points: [
            "Write flexible, reusable functions, interfaces, and classes.",
            "Maintain strong type safety across multiple uses.",
            "Add constraints to ensure certain properties exist on generic types.",
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
            "Generics allow one function to work with multiple types safely.",
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
        task: `Write a generic function called <strong>wrapInArray</strong> that takes a value of type T and returns T[]. Call it at least twice.`,
        starterCode: `// Generic function\n\n// Call with a string\n\n// Call with a number\n`,
        hint: "function wrapInArray<T>(value: T): T[] { return [value]; }",
        checks:
          "Verify wrapInArray uses <T>, takes T, returns T[], called with at least two types.",
      },
    },
    {
      id: 9,
      icon: "[E]",
      title: "Enums",
      desc: "Named constants — goodbye magic strings",
      content: [
        {
          type: "text",
          heading: "What Are Enums?",
          body: `Enums let you define a set of <strong>named constants</strong>, making your code more readable and self-documenting.`,
        },
        {
          type: "code",
          heading: "String Enums (preferred)",
          file: "string-enum.ts",
          code: `enum Status {
  Pending  = "PENDING",
  Active   = "ACTIVE",
  Inactive = "INACTIVE"
}

function checkRole(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Welcome, admin!");
  }
}`,
        },
        {
          type: "points",
          heading: "Tips & Best Practices",
          points: [
            "Prefer string enums for readability and debugging.",
            "Use numeric enums only when you need automatic numbering.",
            "Use const enums for performance when values are fixed.",
            "Enums can be used in switch statements for exhaustive checks.",
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
        task: `1. Create a <strong>string enum</strong> called <strong>Season</strong> with Spring/Summer/Autumn/Winter members.<br>2. Declare a variable <strong>currentSeason</strong> of type Season.`,
        starterCode: `// Define Season enum\n\n// Declare currentSeason\n`,
        hint: 'enum Season { Spring = "spring", Summer = "summer", Autumn = "autumn", Winter = "winter" }',
        checks:
          "Verify Season is a string enum with all four members, currentSeason is typed as Season.",
      },
    },
    {
      id: 10,
      icon: "[N]",
      title: "Type Narrowing",
      desc: "Teach TS to figure out exact types at runtime",
      content: [
        {
          type: "text",
          heading: "What is Type Narrowing?",
          body: `Type narrowing is how TypeScript <strong>figures out a more specific type</strong> from a broad one using guards or assertions.`,
        },
        {
          type: "code",
          heading: "Using typeof Guard",
          file: "typeof-guard.ts",
          code: `function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}`,
        },
        {
          type: "code",
          heading: "Using instanceof Guard",
          file: "instanceof-guard.ts",
          code: `class Cat { meow() { return "Meow!"; } }
class Dog { bark() { return "Woof!"; } }

function makeSound(animal: Cat | Dog): string {
  if (animal instanceof Cat) {
    return animal.meow();
  }
  return animal.bark();
}`,
        },
        {
          type: "points",
          heading: "Key Notes About Type Narrowing",
          points: [
            "Use typeof for primitive types: string, number, boolean.",
            "Use instanceof for class instances.",
            'Use "in" to check for object property existence.',
            "Type assertions (as) override type inference — be careful!",
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
          explain: '"as" is a type assertion — use with caution!',
        },
      ],
      challenge: {
        title: "Narrow a Union Type",
        desc: "Use typeof to safely work with a union type.",
        task: `Write a function called <strong>describe</strong> that takes <code>string | number | boolean</code> and uses typeof guards to handle each type.`,
        starterCode: `function describe(value: string | number | boolean): string {\n  // Your code here\n  return "";\n}`,
        hint: `Use typeof checks for "string", "number", else handle boolean.`,
        checks:
          "Verify describe uses typeof guards for string, number, and boolean branches.",
      },
    },
    {
      id: 11,
      icon: "[M]",
      title: "Modules",
      desc: "Split code across files — the modern way",
      content: [
        {
          type: "text",
          heading: "What are Modules?",
          body: `Modules allow you to split code into <strong>separate files</strong> using <code>export</code> and <code>import</code>.`,
        },
        {
          type: "code",
          heading: "Exporting Code",
          file: "math.ts",
          code: `export function add(a: number, b: number): number { return a + b; }
export const PI: number = 3.14159;
export default function multiply(a: number, b: number): number { return a * b; }`,
        },
        {
          type: "code",
          heading: "Importing Code",
          file: "app.ts",
          code: `import { add, PI } from "./math";
import multiply from "./math";
import * as MathUtils from "./math";`,
        },
        {
          type: "points",
          heading: "Best Practices for Modules",
          points: [
            "Put all shared interfaces/types in a dedicated types/ folder.",
            "Use import type when importing types only.",
            "Prefer named exports for flexibility.",
          ],
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
          explain: "Default exports are imported without curly braces.",
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
          explain: '"import type" is erased at compile time.',
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
            "Named exports are easier to maintain and allow tree-shaking.",
        },
      ],
      challenge: {
        title: "Module Exports & Imports",
        desc: "Practice module syntax.",
        task: `Export a function <strong>greet(name: string)</strong> and an interface <strong>Person</strong> with name and age. Write import statements for both.`,
        starterCode: `export function greet(name: string): string { return ""; }
export interface Person { name: string; age: number; }
import { } from "./utils";`,
        hint: `export function greet(name: string): string { return \`Hello, \${name}!\`; }`,
        checks:
          "Check that greet and Person are exported, and import statements are present.",
      },
    },
    {
      id: 12,
      icon: "[U]",
      title: "Utility Types",
      desc: "Built-in type helpers — Partial, Pick, Omit, Record, ReturnType, NonNullable",
      content: [
        {
          type: "text",
          heading: "What are Utility Types?",
          body: `TypeScript comes with built-in generic types: <code>Partial</code>, <code>Required</code>, <code>Pick</code>, <code>Omit</code>, <code>Record</code>, <code>ReturnType</code>, <code>NonNullable</code>.`,
        },
        {
          type: "code",
          heading: "Partial<T> and Omit<T,K>",
          file: "utility.ts",
          code: `interface User { id: number; name: string; email: string; password: string; }

type PublicUser = Omit<User, "password">;
function updateUser(id: number, data: Partial<User>): void {}`,
        },
        {
          type: "points",
          heading: "Key Notes About Utility Types",
          points: [
            "Use Partial<T> when updating objects without all fields.",
            "Pick<T,K> extracts only certain keys from a type.",
            "Omit<T,K> removes keys — useful for hiding sensitive data.",
            "Record<K,V> creates a map with fixed keys and typed values.",
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
          explain: "Partial<T> makes every property in T optional.",
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
          explain: "Use Omit when you want everything except specific fields.",
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
        desc: "Combine multiple utility types.",
        task: `Given interface Product (id, name, price, secret): 1. Create <strong>PublicProduct</strong> using Omit. 2. Create <strong>UpdateProduct</strong> using Partial. 3. Create <strong>ProductMap</strong> using Record.`,
        starterCode: `interface Product { id: number; name: string; price: number; secret: string; }
// Create PublicProduct
// Create UpdateProduct
// Create ProductMap`,
        hint: `type PublicProduct = Omit<Product, "secret">; type UpdateProduct = Partial<PublicProduct>; type ProductMap = Record<number, PublicProduct>;`,
        checks:
          "Verify PublicProduct, UpdateProduct, ProductMap are all correctly defined.",
      },
    },
    {
      id: 13,
      icon: "[@]",
      title: "Decorators",
      desc: "Annotations for classes, methods, properties, and parameters",
      content: [
        {
          type: "text",
          heading: "What are Decorators?",
          body: `Decorators are <strong>functions that wrap other code</strong>. They start with <code>@</code> and sit above a class, method, property, or parameter.`,
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
}`,
        },
        {
          type: "points",
          heading: "5 Types of Decorators",
          points: [
            "@ClassDecorator — applied to the constructor",
            "@MethodDecorator — wraps a method",
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
          explain: 'Set "experimentalDecorators": true in compilerOptions.',
        },
        {
          q: "Which framework uses decorators as its entire API?",
          choices: ["React", "Vue", "Svelte", "NestJS"],
          correct: 3,
          explain: "NestJS is built around decorators.",
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
          explain: "MethodDecorators get target, key, and descriptor.",
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
        title: "Write a Decorator",
        desc: "Create and apply a class decorator.",
        task: `Write a <strong>class decorator</strong> called <strong>Frozen</strong> that freezes the class prototype. Apply it to class <strong>AppConfig</strong>.`,
        starterCode: `function Frozen(constructor: Function) {\n  // your code here\n}\n\n@Frozen\nclass AppConfig {\n  version: string = "1.0";\n}`,
        hint: `function Frozen(constructor: Function) { Object.freeze(constructor.prototype); }`,
        checks:
          "Verify Frozen decorator freezes prototype and is applied to AppConfig.",
      },
    },
    {
      id: 14,
      icon: "[CF]",
      title: "tsconfig.json",
      desc: "Master your TypeScript compiler configuration",
      content: [
        {
          type: "text",
          heading: "What is tsconfig.json?",
          body: `TypeScript uses <code>tsconfig.json</code> to understand how to compile your project. Generate it with <code>tsc --init</code>.`,
        },
        {
          type: "code",
          heading: "Complete tsconfig template",
          file: "tsconfig.json",
          code: `{
  "compilerOptions": {
    "target": "ES2021",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
        },
        {
          type: "points",
          heading: "Best Practices",
          points: [
            "Always use strict: true for maximum type safety.",
            "Organize your code with rootDir and outDir.",
            "Use paths to avoid long relative imports.",
            "Enable esModuleInterop for smooth CommonJS/ESM usage.",
          ],
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
            '"strict": true enables strictNullChecks, noImplicitAny, and more.',
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
          q: "What command generates a tsconfig.json?",
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
          explain: "resolveJsonModule allows importing JSON files.",
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
            "esModuleInterop allows default imports from CommonJS modules.",
        },
      ],
      challenge: {
        title: "Configure tsconfig.json",
        desc: "Create a tsconfig with strict checks and output folder.",
        task: `Write a tsconfig object with target "ES2021", strict true, outDir "./dist", rootDir "./src".`,
        starterCode: `const config = {\n  compilerOptions: {\n    // your settings here\n  },\n  include: [],\n  exclude: []\n};`,
        hint: `compilerOptions: { target: "ES2021", strict: true, outDir: "./dist", rootDir: "./src" }`,
        checks: "Verify target, strict, outDir, rootDir are all set correctly.",
      },
    },
    {
      id: 15,
      icon: "[R]",
      title: "TypeScript + React",
      desc: "Type-safe components, hooks, events, and props validation",
      content: [
        {
          type: "text",
          heading: "Why Use TypeScript with React?",
          body: `TypeScript enhances React with typed props, typed state, typed refs, and typed events.`,
        },
        {
          type: "code",
          heading: "Typing Component Props",
          file: "Button.tsx",
          code: `interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

function Button({ label, onClick, variant = "primary", disabled }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
}`,
        },
        {
          type: "code",
          heading: "Typing Event Handlers",
          file: "Form.tsx",
          code: `import { ChangeEvent, FormEvent } from 'react';

function LoginForm() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return <form onSubmit={handleSubmit}><input onChange={handleChange} /></form>;
}`,
        },
        {
          type: "points",
          heading: "Best Practices",
          points: [
            "Always define interfaces or types for props.",
            "Prefer explicit generics for useState when null is possible.",
            "Type refs with the specific HTML element.",
            "Optional props should be marked with ?.",
          ],
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
          explain: "Define an interface or type alias for props.",
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
            "React exports ChangeEvent<T> parameterized with the element type.",
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
          explain: "Use React.MouseEvent<T> to type mouse events.",
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
        title: "Typed React Component",
        desc: "Create typed component props.",
        task: `Define interface <strong>CardProps</strong> with title/description (string) and optional onClick. Create a Card component with internal counter state.`,
        starterCode: `import { useState } from "react";
// 1. Define CardProps interface

// 2. Create Card component
function Card({ title, description, onClick }: CardProps) {
  const [counter, setCounter] = useState(0);
  return <div><h2>{title}</h2><p>{description}</p></div>;
}`,
        hint: `interface CardProps { title: string; description: string; onClick?: () => void }`,
        checks:
          "Check CardProps has title, description, optional onClick. Card uses useState.",
      },
    },
    {
      id: 16,
      icon: "[Nd]",
      title: "TypeScript + Node.js",
      desc: "Type-safe APIs with Express, middleware, and typed requests/responses",
      content: [
        {
          type: "text",
          heading: "TypeScript on the Backend",
          body: `TypeScript works seamlessly with Node.js and Express for type-safe server code.`,
        },
        {
          type: "code",
          heading: "Typed GET routes",
          file: "src/index.ts",
          code: `import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

interface User { id: number; name: string; email: string; }

app.get('/users/:id',
  (req: Request<{ id: string }>, res: Response) => {
    res.json({ id: req.params.id });
  }
);`,
        },
        {
          type: "points",
          heading: "Best Practices",
          points: [
            "Always install @types/node and @types/express.",
            "Type route parameters, query strings, and request bodies.",
            "Extend Express Request for custom properties like req.user.",
            "Use tsx or ts-node for faster development.",
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
          explain: "@types/express provides type definitions for Express.",
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
            "Request is a generic: Request<Params, ResBody, ReqBody, Query>.",
        },
        {
          q: "What tool gives the fastest dev server restarts for TS?",
          choices: ["ts-node", "tsc --watch", "tsx", "babel"],
          correct: 2,
          explain: "tsx is faster than ts-node.",
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
            "Extend the Express.Request interface in a global namespace.",
        },
        {
          q: "What type does req.params.id have in Request<{ id: string }>?",
          choices: ["number", "string", "any", "undefined"],
          correct: 1,
          explain:
            "Route parameters are always strings unless you transform them.",
        },
      ],
      challenge: {
        title: "Typed Express Route",
        desc: "Combine typed route params and typed request body.",
        task: `Define <strong>PostParams</strong> (id: string) and <strong>PostBody</strong> (title, content). Write typed <strong>updatePost</strong> handler.`,
        starterCode: `import { Request, Response } from "express";
// 1. PostParams interface
// 2. PostBody interface
// 3. Write the updatePost handler
const updatePost = (req: Request<PostParams, any, PostBody>, res: Response) => {
  // Your code here
}`,
        hint: `interface PostParams { id: string } interface PostBody { title: string; content: string }`,
        checks:
          "Verify PostParams, PostBody, and updatePost with correct typed parameters.",
      },
    },
    {
      id: 17,
      icon: "[A]",
      title: "Advanced Types",
      desc: "Conditional, mapped, template literal types, and infer",
      content: [
        {
          type: "text",
          heading: "The Deep End of TypeScript",
          body: `Advanced types: <strong>Conditional types</strong>, <strong>Mapped types</strong>, <strong>Template literal types</strong>, <strong>infer</strong>.`,
        },
        {
          type: "code",
          heading: "Conditional & Mapped types",
          file: "advanced.ts",
          code: `type IsString<T> = T extends string ? "yes" : "no";
type MyPartial<T> = { [K in keyof T]?: T[K]; };
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`,
        },
        {
          type: "points",
          heading: "Key Takeaways",
          points: [
            "Conditional types: T extends U ? X : Y.",
            "Mapped types transform all properties of a type.",
            "Template literal types create dynamic string types.",
            "infer captures a type portion in conditional types.",
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
          explain: "Conditional types work like a ternary for types.",
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
          explain: "Conditional types distribute over unions.",
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
          explain: "infer captures the return type of getUser.",
        },
      ],
      challenge: {
        title: "Advanced Type Challenge",
        desc: "Combine conditional and mapped types.",
        task: `1. Create <strong>OptionalGetters&lt;T&gt;</strong> mapped type. 2. Create <strong>IsStringLiteral&lt;T&gt;</strong> conditional type. Test with interface User.`,
        starterCode: `interface User { name: string; age: number; }
type OptionalGetters<T> = {};
type IsStringLiteral<T> = {};
type NameGetter = OptionalGetters<User>;
type CheckName = IsStringLiteral<"Alice">;`,
        hint: `type OptionalGetters<T> = { [K in keyof T as \`get\${Capitalize<string & K>}\`]?: () => T[K]; }; type IsStringLiteral<T> = string extends T ? "no" : "yes";`,
        checks:
          "Verify OptionalGetters and IsStringLiteral are defined correctly.",
      },
    },
  ];

// ══════════════════════════════════════════
// PROJECT PRESETS
// ══════════════════════════════════════════
const projectAscii = { easy: "(^_^)", medium: "(^_~)", hard: ">(>_<)" };
const projectRewards = { easy: 30, medium: 50, hard: 70 };

const projectOptionsByLesson = (lessonId) => {
  if (lessonId <= 11) return ["easy", "medium"];
  return ["medium", "hard"];
};

const projectPresets = {
  1: {
    title: "User Profile Project",
    goal: "Build a typed profile object and simple utility functions.",
    requirements: [
      "Create a typed user object with name: string, age: number, and email: string.",
      "Log a greeting message using template literals.",
      "Add a roles: string[] array.",
      "Write a function isAdult(user) that returns true if age >= 18.",
    ],
    example: `Hello, Alice! You are 25 years old.
Roles: ["admin", "editor"]
Is adult: true`,
    concepts: [
      "variables",
      "types",
      "arrays",
      "template literals",
      "functions",
    ],
  },
  2: {
    title: "Primitives Practice Project",
    goal: "Use basic primitives and literal/unions to model user status.",
    requirements: [
      "Declare typed variables: name: string, age: number, isActive: boolean.",
      "Log each value.",
      "Add nullable and optional variables (string | null, number | undefined).",
      "Write a function to normalize them.",
    ],
    example: `Name: Bob
Age: undefined
Active: false
Normalized Age: 0`,
    concepts: ["primitives", "unions", "nullable types", "functions"],
  },
  3: {
    title: "Arrays & Tuples Project",
    goal: "Apply arrays and tuples to represent structured lists.",
    requirements: [
      "Create a string[] of fruits.",
      "Create a tuple [string, number] for a fruit and quantity.",
      "Write a function that takes string[] and returns [firstItem, length] as a tuple.",
    ],
    example: `Fruits: ["Apple", "Banana"]
First fruit: Apple
Number of fruits: 2`,
    concepts: ["arrays", "tuples", "functions"],
  },
  4: {
    title: "Objects & Interfaces Project",
    goal: "Model data with interfaces and typed objects.",
    requirements: [
      "Create interface Product { id: number, name: string, price: number }.",
      "Create a product object.",
      "Extend Product into DigitalProduct with downloadUrl: string.",
      "Write a function to print a product summary.",
    ],
    example: `Product: Book ($20)
DigitalProduct: Ebook - URL: example.com/ebook`,
    concepts: ["interfaces", "objects", "type extension"],
  },
  5: {
    title: "Functions Project",
    goal: "Write typed functions with parameters and return types.",
    requirements: [
      "Implement greet(name: string): string and formatAge(age: number): string.",
      "Implement calculateDiscount(price: number, discount?: number): number.",
      "Call functions and print results.",
    ],
    example: `Hello, John!
Age: 30
Discounted price: 80`,
    concepts: ["functions", "parameters", "return types"],
  },
  6: {
    title: "Union Types Project",
    goal: "Work with union types and run-time type narrowing.",
    requirements: [
      "Create type Status = 'loading' | 'success' | 'error'.",
      "Write a function to handle each Status.",
      "Create type Value = string | number | boolean.",
      "Write a function returning a typed message based on typeof checks.",
    ],
    example: `Status: success
Value type: string`,
    concepts: ["union types", "type narrowing", "functions"],
  },
  7: {
    title: "Classes Project",
    goal: "Build a class with methods and encapsulated state.",
    requirements: [
      "Implement class Car with make/model/year and getInfo() method.",
      "Implement class BankAccount with deposit/withdraw/getBalance and private balance.",
    ],
    example: `Car: Toyota Corolla (2020)
Balance after deposit: 100`,
    concepts: ["classes", "methods", "encapsulation"],
  },
  8: {
    title: "Generics Project",
    goal: "Use generic functions and interfaces for reusable typed logic.",
    requirements: [
      "Write generic wrapInArray<T>(value: T): T[] and show usage with multiple types.",
      "Create generic ApiResponse<T> and function formatResponse<T>(data: T): ApiResponse<T>.",
    ],
    example: `Wrapped number: [42]
Wrapped string: ["hello"]
Response: { success: true, data: {...} }`,
    concepts: ["generics", "functions", "interfaces"],
  },
  9: {
    title: "Enums Project",
    goal: "Apply enums to define fixed named values and state.",
    requirements: [
      "Define enum Season.",
      "Write function isSummer(season: Season): boolean.",
      "Write nextSeason(season: Season): Season using switch.",
    ],
    example: `Season: Winter
Is summer? false
Next season: Spring`,
    concepts: ["enums", "switch statements", "functions"],
  },
  10: {
    title: "Type Narrowing Project",
    goal: "Practice narrowing unions with control flow.",
    requirements: [
      "Implement describe(value: string | number | boolean): string using typeof checks.",
      "Extend to handle null | undefined and include an impossible never branch.",
    ],
    example: `Value: 42
Type: number
Value: null
Type: unknown`,
    concepts: ["type narrowing", "control flow", "unions"],
  },
  11: {
    title: "Modules Project",
    goal: "Simulate module exports/imports with interfaces and functions.",
    requirements: [
      "Write interface Person and function greet(person: Person): string.",
      "Invoke functions from multiple module-style blocks.",
    ],
    example: `Hello, Alice!`,
    concepts: ["modules", "interfaces", "functions"],
  },
  12: {
    title: "Utility Types Project",
    goal: "Use Omit and Partial to transform types safely.",
    requirements: [
      "Define type PublicProduct = Omit<Product, 'secret'> and use it.",
      "Define UpdateProduct = Partial<PublicProduct> and apply changes to a product instance.",
    ],
    example: `Updated product: { id: 1, name: "Book" }`,
    concepts: ["utility types", "Omit", "Partial"],
  },
  13: {
    title: "Decorators Project",
    goal: "Implement class or method decorators for runtime behavior.",
    requirements: [
      "Create @Frozen class decorator to prevent class extensions.",
      "Add @Log method decorator to print method name and arguments when called.",
    ],
    example: `Method called: greet
Args: ["Alice"]`,
    concepts: ["decorators", "classes", "methods"],
  },
  14: {
    title: "tsconfig.json Project",
    goal: "Model tsconfig options and validate config shapes.",
    requirements: [
      "Define interface TsConfig with target, strict, outDir, rootDir.",
      "Build config objects and write function isStrictConfig(config) to validate.",
    ],
    example: `Strict config detected`,
    concepts: ["interfaces", "type guards", "objects"],
  },
  15: {
    title: "TypeScript + React Project",
    goal: "Create typed component props and render helper logic.",
    requirements: [
      "Define CardProps and function renderCard(props: CardProps) returning JSX-like string.",
      "Add optional onClick callback and ensure type safety in Card component.",
    ],
    example: `<div>Card: title</div>`,
    concepts: ["React", "props", "type safety"],
  },
  16: {
    title: "TypeScript + Node.js Project",
    goal: "Type request/response objects and route handler logic.",
    requirements: [
      "Define interface Request and interface Response.",
      "Create handlePost(req, res) with typed body.",
      "Implement validatePost(req) with type guards and async createPost(req, res) flow.",
    ],
    example: `Post created successfully`,
    concepts: ["Node.js", "TypeScript types", "functions"],
  },
  17: {
    title: "Advanced Types Project",
    goal: "Build sophisticated conditional and mapped type utilities.",
    requirements: [
      "Implement IsArray<T> using conditional types and test on multiple types.",
      "Implement mapped type ElementType<T> to extract array/tuple elements.",
    ],
    example: `ElementType<number[]> = number
ElementType<[string, boolean]> = string | boolean`,
    concepts: ["conditional types", "mapped types", "advanced TypeScript"],
  },
  18: {
    title: "Shopping List Manager",
    goal: "Create a program that manages a shopping list.",
    requirements: [
      "Create a variable shoppingList: string[].",
      "Add at least 3 items.",
      "Write a function addItem(item: string): void.",
      "Write a function removeItem(item: string): void.",
      "Print the list.",
    ],
    example: `Shopping List:
Milk
Bread
Eggs`,
    concepts: ["arrays", "functions"],
  },
  19: {
    title: "Student Grade Calculator",
    goal: "Calculate the average grade.",
    requirements: [
      "Create grades: number[].",
      "Add at least 4 grades.",
      "Write calculateAverage(grades: number[]): number.",
      "Print the average.",
    ],
    example: `Average Grade: 85`,
    concepts: ["arrays", "numbers"],
  },
  20: {
    title: "Temperature Converter",
    goal: "Convert temperatures between Celsius and Fahrenheit.",
    requirements: [
      "Create function celsiusToFahrenheit(c: number): number.",
      "Create function fahrenheitToCelsius(f: number): number.",
      "Call both functions and print results.",
    ],
    example: `25°C = 77°F
77°F = 25°C`,
    concepts: ["functions", "numbers"],
  },
  21: {
    title: "Age Calculator",
    goal: "Calculate age based on birth year.",
    requirements: [
      "Create birthYear: number.",
      "Create currentYear: number.",
      "Write function calculateAge(birthYear: number): number.",
      "Print age.",
    ],
    example: `Age: 20`,
    concepts: ["numbers", "functions"],
  },
  22: {
    title: "Random Name Picker",
    goal: "Select a random name from a list.",
    requirements: [
      "Create names: string[] with at least 5 names.",
      "Write pickRandomName(names: string[]): string.",
      "Print selected name.",
    ],
    example: `Selected: Maria`,
    concepts: ["arrays", "Math.random"],
  },
  23: {
    title: "Fruit Inventory",
    goal: "Manage inventory of fruits using interfaces.",
    requirements: [
      "Create interface Fruit { name: string; quantity: number }.",
      "Create fruits: Fruit[] and add at least 3 items.",
      "Print inventory.",
    ],
    example: `Apple - 10
Banana - 5
Orange - 7`,
    concepts: ["interfaces", "arrays"],
  },
  24: {
    title: "Number Guessing Game",
    goal: "Build a simple number guessing game.",
    requirements: [
      "Generate a random number.",
      "Create function checkGuess(guess: number): boolean.",
      "Print result depending on guess.",
    ],
    example: `Correct guess!`,
    concepts: ["numbers", "logic", "functions"],
  },
  25: {
    title: "Color List",
    goal: "Work with a readonly array of colors.",
    requirements: [
      "Create colors: readonly string[].",
      "Add at least 4 colors.",
      "Print all colors.",
    ],
    example: `Colors:
Red
Blue
Green
Yellow`,
    concepts: ["readonly arrays", "arrays"],
  },
  26: {
    title: "Simple Calculator",
    goal: "Implement basic arithmetic functions.",
    requirements: [
      "Write functions: add(a,b), subtract(a,b), multiply(a,b), divide(a,b).",
      "Print results of all functions.",
    ],
    example: `Sum: 10
Difference: 2
Product: 20
Quotient: 5`,
    concepts: ["functions", "numbers"],
  },
  27: {
    title: "User Profile",
    goal: "Define a typed user interface and create a profile.",
    requirements: [
      "Create interface User { name: string; age: number; email: string }.",
      "Create one user object and print the profile.",
    ],
    example: `Name: John
Age: 30
Email: john@example.com`,
    concepts: ["interfaces", "objects"],
  },
  28: {
    title: "Book List",
    goal: "Manage a list of books.",
    requirements: [
      "Create books: string[].",
      "Add at least 5 books.",
      "Print the list of books.",
    ],
    example: `Books:
Book 1
Book 2
Book 3
Book 4
Book 5`,
    concepts: ["arrays", "strings"],
  },
  29: {
    title: "Daily Expenses",
    goal: "Track daily expenses and calculate total.",
    requirements: [
      "Create expenses: number[].",
      "Add at least 5 expense values.",
      "Write totalExpenses(expenses: number[]): number.",
      "Print the total.",
    ],
    example: `Total: 120`,
    concepts: ["arrays", "numbers", "functions"],
  },
  30: {
    title: "Todo List Manager",
    goal: "Manage tasks with add, remove, and complete functionality.",
    requirements: [
      "Create interface Todo { task: string; completed: boolean }.",
      "Create todos: Todo[] and add 3 tasks.",
      "Write functions addTodo, removeTodo, markComplete.",
      "Print all todos.",
    ],
    example: `Task: Learn TS - Completed: false
Task: Build App - Completed: true`,
    concepts: ["interfaces", "arrays", "functions"],
  },
  31: {
    title: "Simple Timer",
    goal: "Implement a countdown timer.",
    requirements: [
      "Create function startTimer(seconds: number): void.",
      "Print remaining time each second.",
      "Print 'Time's up!' at the end.",
    ],
    example: `10...
9...
...
Time's up!`,
    concepts: ["functions", "timers", "logic"],
  },
  32: {
    title: "Password Validator",
    goal: "Validate passwords based on rules.",
    requirements: [
      "Write function validatePassword(password: string): boolean.",
      "Check rules: min length 8, contains number and special character.",
      "Print valid or invalid.",
    ],
    example: `Password valid: true`,
    concepts: ["strings", "regex", "functions"],
  },
  33: {
    title: "Contact Manager",
    goal: "Store and search contacts using interfaces.",
    requirements: [
      "Create interface Contact { name: string; phone: string; email?: string }.",
      "Create contacts: Contact[] with at least 3 entries.",
      "Write function findContact(name: string): Contact | undefined.",
    ],
    example: `Found contact: Alice - 123456789`,
    concepts: ["interfaces", "arrays", "functions"],
  },
  34: {
    title: "BMI Calculator",
    goal: "Calculate Body Mass Index and classify.",
    requirements: [
      "Write function calculateBMI(weightKg: number, heightM: number): number.",
      "Write function classifyBMI(bmi: number): string.",
      "Print BMI value and classification.",
    ],
    example: `BMI: 22.5
Classification: Normal`,
    concepts: ["numbers", "functions", "logic"],
  },
};

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
  activeLesson = null;
  renderGrid();
  showHeroIntro();
  updateContinueLesson();
  showView("lessons");
}

// ══════════════════════════════════════════
// LESSON GRID
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// Project pairing map — lesson ID → [presetA, presetB]
// ══════════════════════════════════════════

const projectPairMap = {
  1: [1, 18],
  2: [2, 19],
  3: [3, 20],
  4: [4, 21],
  5: [5, 22],
  6: [6, 23],
  7: [7, 24],
  8: [8, 25],
  9: [9, 26],
  10: [10, 27],
  11: [11, 28],
  12: [12, 29],
  13: [13, 30],
  14: [14, 31],
  15: [15, 32],
  16: [16, 33],
  17: [17, 34],
};

// ══════════════════════════════════════════
// LESSONS.forEach — TWO projects per lesson
// ══════════════════════════════════════════
LESSONS.forEach((lesson) => {
  if (!lesson.projects || !lesson.projects.length) {
    const pair = projectPairMap[lesson.id] || [lesson.id, lesson.id];
    const presetA = projectPresets[pair[0]] || {};
    const presetB = projectPresets[pair[1]] || {};

    const diffA = lesson.id <= 11 ? "easy" : "medium";
    const diffB = lesson.id <= 11 ? "medium" : "hard";

    lesson.projects = [
      {
        id: `p${pair[0]}`,
        title: presetA.title || `${lesson.title} Project (Option A)`,
        desc: presetA.goal || `Apply the concepts from ${lesson.title}.`,
        task: presetA.goal || "",
        requirements: Array.isArray(presetA.requirements)
          ? presetA.requirements
          : [
              `Use the core concept from ${lesson.title} with proper TypeScript types`,
              `Add comments explaining your approach`,
              `Include at least one typed function or interface`,
            ],
        example: presetA.example || "",
        concepts: presetA.concepts || [],
        starterCode: `// Option A: ${presetA.title || lesson.title + " Project"}\n// Goal: ${presetA.goal || ""}\n\n// Write your TypeScript code here\n`,
        hint: `Focus on: ${(presetA.concepts || [lesson.title]).join(", ")}`,
        reward: 30,
        difficulty: diffA,
        ascii: diffA === "easy" ? "(^_^)" : "(^_~)",
      },
      {
        id: `p${pair[1]}`,
        title: presetB.title || `${lesson.title} Project (Option B)`,
        desc: presetB.goal || `A harder challenge using ${lesson.title}.`,
        task: presetB.goal || "",
        requirements: Array.isArray(presetB.requirements)
          ? presetB.requirements
          : [
              `Build a more advanced version using ${lesson.title}`,
              `Combine multiple TypeScript features`,
              `Include typed helper functions`,
            ],
        example: presetB.example || "",
        concepts: presetB.concepts || [],
        starterCode: `// Option B: ${presetB.title || lesson.title + " Project"}\n// Goal: ${presetB.goal || ""}\n\n// Write your TypeScript code here\n`,
        hint: `Focus on: ${(presetB.concepts || [lesson.title]).join(", ")}`,
        reward: 50,
        difficulty: diffB,
        ascii: diffB === "medium" ? "(^_~)" : ">(>_<)",
      },
    ];
  }

  if (!lesson.project) {
    lesson.project = lesson.projects[0];
  }
});

// ══════════════════════════════════════════
// renderGrid — card rendering ONLY
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
// OPEN LESSON — always starts at Learn phase
// ══════════════════════════════════════════
function openLesson(id) {
  activeLesson = LESSONS.find(
    (l) => l.id === id || String(l.id) === String(id),
  );
  if (!activeLesson) {
    showToast("Lesson not found.", "error");
    return;
  }
  quizState = { idx: 0, answered: false, allCorrect: true };
  activeProjectId =
    activeLesson.projects?.[0]?.id || activeLesson.project?.id || null;
  // Always start at learn phase
  activePhase = "learn";
  renderLearnPhase();
  renderQuizPhase();
  renderCodePhase();
  renderProjectPhase();
  updatePhaseTabs();
  switchPhase("learn");
  setLastLesson(id);
  hideHeroIntro();
  updateContinueLesson();
  showView("lesson");
}

// ══════════════════════════════════════════
// PHASE TABS — locked until prior phase done
// ══════════════════════════════════════════
function updatePhaseTabs() {
  const p = lessonProgress(activeLesson.id);
  const tl = document.getElementById("tab-learn");
  const tq = document.getElementById("tab-quiz");
  const tc = document.getElementById("tab-code");
  const tp = document.getElementById("tab-project");
  tl.className = "phase-tab" + (p.learn ? " done-tab" : "");
  tq.className =
    "phase-tab" + (p.quiz ? " done-tab" : !p.learn ? " locked-tab" : "");
  tc.className =
    "phase-tab" + (p.code ? " done-tab" : !p.quiz ? " locked-tab" : "");
  tp.className =
    "phase-tab" +
    (p.project ? " project-done-tab" : !p.code ? " locked-tab" : "");
}

function switchPhase(phase) {
  const p = lessonProgress(activeLesson.id);
  if (phase === "quiz" && !p.learn) {
    showToast("Complete the lesson first!", "error");
    return;
  }
  if (phase === "code" && !p.quiz) {
    showToast("Pass the quiz first!", "error");
    return;
  }
  if (phase === "project" && !p.code) {
    showToast("Complete the code challenge first!", "error");
    return;
  }
  activePhase = phase;
  ["learn", "quiz", "code", "project"].forEach((ph) => {
    document.getElementById("phase-" + ph).style.display =
      ph === phase ? "block" : "none";
    const tab = document.getElementById("tab-" + ph);
    tab.classList.toggle("active", ph === phase);
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
  fb.innerHTML = `<div class="fb-icon">${ok ? "<span class='ascii'>(^_^)</span>" : "<span class='ascii'>(x_x)</span>"}</div><div><div class="fb-title ${ok ? "ok" : "bad"}">${ok ? "Correct!" : "Not quite!"}</div><div class="fb-msg">${q.explain}</div><div class="btn-row" style="margin-top:14px"><button class="btn btn-primary" onclick="nextQuestion()">${quizState.idx + 1 < activeLesson.quiz.length ? "Next Question [ → ]" : "Finish Quiz [ → ]"}</button></div></div>`;
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
<div class="thinking" id="thinking"><span style="font-family:'JetBrains Mono',monospace">Checking your code</span><span class="think-dots"><span>.</span><span>.</span><span>.</span></span></div>
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
// PROJECT PHASE — requirements shown inside each option card
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
      `<div class="project-header"><div class="project-title">No project available for this lesson yet.</div></div>`;
    return;
  }

  const selectedProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  // ── Option selector cards (side by side) ─────────────────────────────
  let selectorHtml = `<div class="project-selector">`;
  projects.forEach((p, idx) => {
    const isSelected = activeProjectId === p.id;
    const diffClass =
      p.difficulty === "easy"
        ? "diff-easy"
        : p.difficulty === "medium"
          ? "diff-medium"
          : "diff-hard";
    const optionLabel = `Option ${String.fromCharCode(65 + idx)} — ${p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1)}`;
    const reqs = Array.isArray(p.requirements) ? p.requirements : [];
    const concepts = Array.isArray(p.concepts) ? p.concepts : [];

    selectorHtml += `
    <div class="project-option ${isSelected ? "selected" : ""}" onclick="selectProject('${p.id}')">
      <div class="project-option-num">${optionLabel}</div>
      <div class="project-option-name">${escHtml(p.title || "")}</div>
      <div class="project-option-desc">${escHtml(p.desc || "")}</div>
      <div class="project-difficulty ${diffClass}">⬥ ${p.difficulty} &nbsp;·&nbsp; +${p.reward || 50} XP</div>

      ${
        concepts.length
          ? `
      <div style="margin-top:8px; display:flex; flex-wrap:wrap; gap:4px;">
        ${concepts.map((c) => `<span style="font-family:'JetBrains Mono',monospace; font-size:.6rem; padding:2px 7px; border-radius:4px; background:rgba(99,179,237,.1); color:var(--blue); border:1px solid rgba(99,179,237,.2);">${escHtml(c)}</span>`).join("")}
      </div>`
          : ""
      }

      ${
        reqs.length
          ? `
      <div style="margin-top:10px; border-top:1px solid var(--border); padding-top:8px;">
        <div style="font-family:'JetBrains Mono',monospace; font-size:.58rem; letter-spacing:.08em; text-transform:uppercase; color:var(--blue); margin-bottom:6px;">📋 Steps</div>
        ${reqs
          .map(
            (r, i) => `
        <div style="display:flex; align-items:flex-start; gap:8px; margin-bottom:5px; line-height:1.4;">
          <span style="font-family:'JetBrains Mono',monospace; font-size:.65rem; color:var(--blue); font-weight:700; flex-shrink:0;">Step ${i + 1}</span>
          <span style="font-size:.75rem; color:var(--muted);">${escHtml(r)}</span>
        </div>`,
          )
          .join("")}
      </div>`
          : ""
      }

      ${
        p.example
          ? `
      <div style="margin-top:8px; background:rgba(72,187,120,.05); border:1px solid rgba(72,187,120,.15); border-radius:6px; padding:8px;">
        <div style="font-family:'JetBrains Mono',monospace; font-size:.55rem; text-transform:uppercase; color:var(--green); margin-bottom:4px;">💡 Expected Output</div>
        <pre style="font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--muted); margin:0; white-space:pre-wrap;">${escHtml(p.example)}</pre>
      </div>`
          : ""
      }
    </div>`;
  });
  selectorHtml += `</div>`;

  // ── Full layout ───────────────────────────────────────────────────────
  let html = `
<div class="project-header">
  <div class="project-title-bar">
    <div>
      <div class="project-title">🏗️ Mini Project — Choose Your Option</div>
      <div class="project-subtitle">Both options cover the same lesson concepts at different depths</div>
    </div>
  </div>
  ${selectorHtml}
</div>

<div class="project-editor-wrap">
  <div class="project-editor-label">Your Project Code — ${escHtml(selectedProject.title || "")}</div>
  <textarea class="code-editor project-editor" id="project-editor" spellcheck="false" style="min-height:280px">${done ? "// Project completed! Practice more below.\n" : escHtml(selectedProject.starterCode || "// Write your project code here\n")}</textarea>
</div>
<div class="thinking project-thinking" id="project-thinking">
  <span style="font-family:'JetBrains Mono',monospace">Reviewing your project</span>
  <span class="think-dots"><span>.</span><span>.</span><span>.</span></span>
</div>
<div class="project-result" id="project-result"></div>
<div class="btn-row">
  <button class="btn btn-ghost" onclick="resetProjectCode()">Reset Starter Code</button>
  <button class="btn btn-primary" id="project-submit-btn" onclick="submitProject()">Submit Project</button>
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
  const r = document.getElementById("project-result");
  r.className = "project-result";
  r.innerHTML = "";
}

// ══════════════════════════════════════════
// FULL PROJECT VALIDATORS (p1–p34)
// ══════════════════════════════════════════
const PROJECT_VALIDATORS = {
  // ── Lesson 1 Option A: User Profile Project ──────────────────────────
  p1: function (code) {
    const c = stripComments(code);
    const hasName = /name\s*:\s*string/i.test(c);
    const hasAge = /age\s*:\s*number/i.test(c);
    const hasEmail = /email\s*:\s*string/i.test(c);
    const hasTemplate = /`[^`]*\$\{/i.test(c);
    const hasIsAdult = /function\s+isAdult/i.test(c);
    if (hasName && hasAge && hasEmail && hasTemplate && hasIsAdult)
      return {
        pass: true,
        title: "User Profile complete!",
        feedback:
          "Typed user object, template literal greeting, and isAdult function all present!",
      };
    const missing = [];
    if (!hasName) missing.push("name: string property");
    if (!hasAge) missing.push("age: number property");
    if (!hasEmail) missing.push("email: string property");
    if (!hasTemplate) missing.push("template literal greeting with ${}");
    if (!hasIsAdult) missing.push("function isAdult(user)");
    return {
      pass: false,
      title: "User Profile incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 1 Option B: Shopping List Manager ─────────────────────────
  p18: function (code) {
    const c = stripComments(code);
    const hasList = /shoppingList\s*:\s*string\s*\[\]/i.test(c);
    const hasAdd = /function\s+addItem\s*\(\s*item\s*:\s*string/i.test(c);
    const hasRemove = /function\s+removeItem\s*\(\s*item\s*:\s*string/i.test(c);
    if (hasList && hasAdd && hasRemove)
      return {
        pass: true,
        title: "Shopping List Manager complete!",
        feedback: "shoppingList: string[], addItem, removeItem all present!",
      };
    const missing = [];
    if (!hasList) missing.push("shoppingList: string[]");
    if (!hasAdd) missing.push("function addItem(item: string)");
    if (!hasRemove) missing.push("function removeItem(item: string)");
    return {
      pass: false,
      title: "Shopping List incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 2 Option A: Primitives Practice ───────────────────────────
  p2: function (code) {
    const c = stripComments(code);
    const hasName = /name\s*:\s*string/i.test(c);
    const hasAge = /age\s*:\s*number/i.test(c);
    const hasActive = /isActive\s*:\s*boolean/i.test(c);
    const hasNullable = /string\s*\|\s*null|number\s*\|\s*undefined/i.test(c);
    if (hasName && hasAge && hasActive && hasNullable)
      return {
        pass: true,
        title: "Primitives Project complete!",
        feedback: "All typed variables and nullable types present!",
      };
    const missing = [];
    if (!hasName) missing.push("name: string");
    if (!hasAge) missing.push("age: number");
    if (!hasActive) missing.push("isActive: boolean");
    if (!hasNullable)
      missing.push("nullable type (string | null or number | undefined)");
    return {
      pass: false,
      title: "Primitives incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 2 Option B: Student Grade Calculator ──────────────────────
  p19: function (code) {
    const c = stripComments(code);
    const hasGrades = /grades\s*:\s*number\s*\[\]/i.test(c);
    const hasFn = /function\s+calculateAverage/i.test(c);
    if (hasGrades && hasFn)
      return {
        pass: true,
        title: "Grade Calculator complete!",
        feedback: "grades: number[] and calculateAverage function found!",
      };
    const missing = [];
    if (!hasGrades) missing.push("grades: number[]");
    if (!hasFn) missing.push("function calculateAverage");
    return {
      pass: false,
      title: "Grade Calculator incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 3 Option A: Arrays & Tuples ───────────────────────────────
  p3: function (code) {
    const c = stripComments(code);
    const hasFruits = /fruits\s*:\s*string\s*\[\]/i.test(c);
    const hasTuple = /:\s*\[string,\s*number\]/i.test(c);
    const hasFn = /function\s+\w+\s*\(\s*\w+\s*:\s*string\s*\[\]/i.test(c);
    if (hasFruits && hasTuple && hasFn)
      return {
        pass: true,
        title: "Arrays & Tuples complete!",
        feedback:
          "fruits: string[], [string, number] tuple, and array function all present!",
      };
    const missing = [];
    if (!hasFruits) missing.push("fruits: string[] array");
    if (!hasTuple) missing.push("tuple type [string, number]");
    if (!hasFn) missing.push("function taking string[] parameter");
    return {
      pass: false,
      title: "Arrays & Tuples incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 3 Option B: Temperature Converter ─────────────────────────
  p20: function (code) {
    const c = stripComments(code);
    const hasC = /function\s+celsiusToFahrenheit/i.test(c);
    const hasF = /function\s+fahrenheitToCelsius/i.test(c);
    if (hasC && hasF)
      return {
        pass: true,
        title: "Temperature Converter complete!",
        feedback: "Both conversion functions implemented!",
      };
    const missing = [];
    if (!hasC) missing.push("function celsiusToFahrenheit");
    if (!hasF) missing.push("function fahrenheitToCelsius");
    return {
      pass: false,
      title: "Converter incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 4 Option A: Objects & Interfaces ──────────────────────────
  p4: function (code) {
    const c = stripComments(code);
    const hasProduct = /interface\s+Product\s*\{/i.test(c);
    const hasDigital =
      /interface\s+DigitalProduct/i.test(c) || /DigitalProduct/i.test(c);
    const hasFn =
      /function\s+\w+.*Product/i.test(c) ||
      /printSummary|displayProduct|productSummary/i.test(c);
    if (hasProduct && hasDigital && hasFn)
      return {
        pass: true,
        title: "Objects & Interfaces complete!",
        feedback:
          "Product, DigitalProduct interfaces and summary function present!",
      };
    const missing = [];
    if (!hasProduct) missing.push("interface Product");
    if (!hasDigital) missing.push("DigitalProduct extending Product");
    if (!hasFn) missing.push("function to print product summary");
    return {
      pass: false,
      title: "Interfaces incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 4 Option B: Age Calculator ────────────────────────────────
  p21: function (code) {
    const c = stripComments(code);
    const hasBirth = /birthYear\s*:\s*number/i.test(c);
    const hasFn = /function\s+calculateAge/i.test(c);
    if (hasBirth && hasFn)
      return {
        pass: true,
        title: "Age Calculator complete!",
        feedback: "birthYear: number and calculateAge function found!",
      };
    const missing = [];
    if (!hasBirth) missing.push("birthYear: number");
    if (!hasFn) missing.push("function calculateAge");
    return {
      pass: false,
      title: "Age Calculator incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 5 Option A: Functions Project ─────────────────────────────
  p5: function (code) {
    const c = stripComments(code);
    const hasGreet = /function\s+greet/i.test(c);
    const hasFormat = /function\s+formatAge/i.test(c);
    const hasDiscount = /function\s+calculateDiscount/i.test(c);
    if (hasGreet && hasFormat && hasDiscount)
      return {
        pass: true,
        title: "Functions Project complete!",
        feedback:
          "greet, formatAge, and calculateDiscount functions all present!",
      };
    const missing = [];
    if (!hasGreet) missing.push("function greet(name: string): string");
    if (!hasFormat) missing.push("function formatAge(age: number): string");
    if (!hasDiscount)
      missing.push("function calculateDiscount(price, discount?)");
    return {
      pass: false,
      title: "Functions incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 5 Option B: Random Name Picker ────────────────────────────
  p22: function (code) {
    const c = stripComments(code);
    const hasNames = /names\s*:\s*string\s*\[\]/i.test(c);
    const hasFn = /function\s+pickRandomName/i.test(c);
    const hasRandom = /Math\.random/i.test(c);
    if (hasNames && hasFn && hasRandom)
      return {
        pass: true,
        title: "Random Name Picker complete!",
        feedback:
          "names: string[], pickRandomName, and Math.random all present!",
      };
    const missing = [];
    if (!hasNames) missing.push("names: string[] with 5+ names");
    if (!hasFn) missing.push("function pickRandomName(names: string[])");
    if (!hasRandom) missing.push("Math.random() usage");
    return {
      pass: false,
      title: "Name Picker incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 6 Option A: Union Types Project ───────────────────────────
  p6: function (code) {
    const c = stripComments(code);
    const hasStatus =
      /type\s+Status\s*=.*loading.*success.*error/i.test(c) ||
      /type\s+Status\s*=/i.test(c);
    const hasValue =
      /type\s+Value\s*=\s*string\s*\|\s*number\s*\|\s*boolean/i.test(c);
    const hasFn = /function\s+\w+.*Status|typeof\s+\w+/i.test(c);
    if (hasStatus && hasValue && hasFn)
      return {
        pass: true,
        title: "Union Types complete!",
        feedback:
          "Status and Value union types with handling function present!",
      };
    const missing = [];
    if (!hasStatus)
      missing.push("type Status = 'loading' | 'success' | 'error'");
    if (!hasValue) missing.push("type Value = string | number | boolean");
    if (!hasFn) missing.push("function handling each type/status");
    return {
      pass: false,
      title: "Union Types incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 6 Option B: Fruit Inventory ───────────────────────────────
  p23: function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+Fruit\s*\{/i.test(c);
    const hasArray = /fruits\s*:\s*Fruit\s*\[\]/i.test(c);
    if (hasInterface && hasArray)
      return {
        pass: true,
        title: "Fruit Inventory complete!",
        feedback: "Fruit interface and fruits: Fruit[] array present!",
      };
    const missing = [];
    if (!hasInterface)
      missing.push("interface Fruit { name: string; quantity: number }");
    if (!hasArray) missing.push("fruits: Fruit[] array with 3+ items");
    return {
      pass: false,
      title: "Fruit Inventory incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 7 Option A: Classes Project ───────────────────────────────
  p7: function (code) {
    const c = stripComments(code);
    const hasCar = /class\s+Car\s*\{/i.test(c);
    const hasGetInfo = /getInfo\s*\(/i.test(c);
    const hasBank = /class\s+BankAccount/i.test(c);
    const hasPrivate = /private\s+balance/i.test(c);
    if (hasCar && hasGetInfo && hasBank && hasPrivate)
      return {
        pass: true,
        title: "Classes Project complete!",
        feedback:
          "Car class with getInfo and BankAccount with private balance found!",
      };
    const missing = [];
    if (!hasCar) missing.push("class Car with make/model/year");
    if (!hasGetInfo) missing.push("getInfo() method");
    if (!hasBank) missing.push("class BankAccount");
    if (!hasPrivate) missing.push("private balance property");
    return {
      pass: false,
      title: "Classes incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 7 Option B: Number Guessing Game ──────────────────────────
  p24: function (code) {
    const c = stripComments(code);
    const hasRandom = /Math\.random/i.test(c);
    const hasFn = /function\s+checkGuess/i.test(c);
    const hasBoolean = /:\s*boolean/i.test(c);
    if (hasRandom && hasFn && hasBoolean)
      return {
        pass: true,
        title: "Number Guessing Game complete!",
        feedback:
          "Random number, checkGuess function, and boolean return present!",
      };
    const missing = [];
    if (!hasRandom) missing.push("Math.random() for random number");
    if (!hasFn) missing.push("function checkGuess(guess: number): boolean");
    if (!hasBoolean) missing.push("boolean return type");
    return {
      pass: false,
      title: "Guessing Game incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 8 Option A: Generics Project ──────────────────────────────
  p8: function (code) {
    const c = stripComments(code);
    const hasWrap = /function\s+wrapInArray\s*<\s*T\s*>/i.test(c);
    const hasApiResponse = /interface\s+ApiResponse\s*<\s*T\s*>/i.test(c);
    const hasFormat = /function\s+formatResponse\s*<\s*T\s*>/i.test(c);
    if (hasWrap && hasApiResponse && hasFormat)
      return {
        pass: true,
        title: "Generics Project complete!",
        feedback:
          "wrapInArray<T>, ApiResponse<T>, and formatResponse<T> all present!",
      };
    const missing = [];
    if (!hasWrap) missing.push("function wrapInArray<T>(value: T): T[]");
    if (!hasApiResponse) missing.push("interface ApiResponse<T>");
    if (!hasFormat) missing.push("function formatResponse<T>");
    return {
      pass: false,
      title: "Generics incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 8 Option B: Color List ────────────────────────────────────
  p25: function (code) {
    const c = stripComments(code);
    const hasReadonly =
      /colors\s*:\s*readonly\s+string\s*\[\]/i.test(c) ||
      /readonly\s+string\s*\[\]/i.test(c);
    if (hasReadonly)
      return {
        pass: true,
        title: "Color List complete!",
        feedback: "readonly string[] colors array present!",
      };
    return {
      pass: false,
      title: "Color List incomplete",
      feedback: "Need colors: readonly string[] with at least 4 colors.",
    };
  },

  // ── Lesson 9 Option A: Enums Project ─────────────────────────────────
  p9: function (code) {
    const c = stripComments(code);
    const hasEnum = /enum\s+Season\s*\{/i.test(c);
    const hasIsSummer = /function\s+isSummer/i.test(c);
    const hasNextSeason = /function\s+nextSeason/i.test(c);
    const hasSwitch = /switch\s*\(/i.test(c);
    if (hasEnum && hasIsSummer && hasNextSeason && hasSwitch)
      return {
        pass: true,
        title: "Enums Project complete!",
        feedback:
          "Season enum, isSummer and nextSeason functions with switch present!",
      };
    const missing = [];
    if (!hasEnum) missing.push("enum Season");
    if (!hasIsSummer)
      missing.push("function isSummer(season: Season): boolean");
    if (!hasNextSeason)
      missing.push("function nextSeason(season: Season): Season");
    if (!hasSwitch) missing.push("switch statement");
    return {
      pass: false,
      title: "Enums incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 9 Option B: Simple Calculator ─────────────────────────────
  p26: function (code) {
    const c = stripComments(code);
    const hasAdd = /function\s+add\s*\(/i.test(c);
    const hasSub = /function\s+subtract\s*\(/i.test(c);
    const hasMul = /function\s+multiply\s*\(/i.test(c);
    const hasDiv = /function\s+divide\s*\(/i.test(c);
    if (hasAdd && hasSub && hasMul && hasDiv)
      return {
        pass: true,
        title: "Simple Calculator complete!",
        feedback: "add, subtract, multiply, divide functions all present!",
      };
    const missing = [];
    if (!hasAdd) missing.push("function add(a, b)");
    if (!hasSub) missing.push("function subtract(a, b)");
    if (!hasMul) missing.push("function multiply(a, b)");
    if (!hasDiv) missing.push("function divide(a, b)");
    return {
      pass: false,
      title: "Calculator incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 10 Option A: Type Narrowing Project ───────────────────────
  p10: function (code) {
    const c = stripComments(code);
    const hasDescribe = /function\s+describe/i.test(c);
    const hasUnion = /string\s*\|\s*number\s*\|\s*boolean/i.test(c);
    const hasTypeof = /typeof\s+\w+\s*===?\s*["']string["']/i.test(c);
    const hasNever = /never/i.test(c);
    if (hasDescribe && hasUnion && hasTypeof && hasNever)
      return {
        pass: true,
        title: "Type Narrowing complete!",
        feedback:
          "describe function, union type, typeof guards, and never branch present!",
      };
    const missing = [];
    if (!hasDescribe)
      missing.push("function describe(value: string | number | boolean)");
    if (!hasUnion) missing.push("string | number | boolean union");
    if (!hasTypeof) missing.push("typeof guard checks");
    if (!hasNever) missing.push("never branch for impossible case");
    return {
      pass: false,
      title: "Type Narrowing incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 10 Option B: User Profile (interface) ─────────────────────
  p27: function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+User\s*\{/i.test(c);
    const hasName = /name\s*:\s*string/i.test(c);
    const hasAge = /age\s*:\s*number/i.test(c);
    const hasEmail = /email\s*:\s*string/i.test(c);
    if (hasInterface && hasName && hasAge && hasEmail)
      return {
        pass: true,
        title: "User Profile complete!",
        feedback: "User interface with name, age, email present!",
      };
    const missing = [];
    if (!hasInterface) missing.push("interface User");
    if (!hasName) missing.push("name: string");
    if (!hasAge) missing.push("age: number");
    if (!hasEmail) missing.push("email: string");
    return {
      pass: false,
      title: "User Profile incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 11 Option A: Modules Project ──────────────────────────────
  p11: function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+Person\s*\{/i.test(c);
    const hasGreet = /function\s+greet/i.test(c);
    const hasExport = /export\s+(function|interface|const)/i.test(c);
    if (hasInterface && hasGreet && hasExport)
      return {
        pass: true,
        title: "Modules Project complete!",
        feedback:
          "Person interface, greet function, and export statements present!",
      };
    const missing = [];
    if (!hasInterface) missing.push("interface Person");
    if (!hasGreet) missing.push("function greet(person: Person): string");
    if (!hasExport) missing.push("export statement");
    return {
      pass: false,
      title: "Modules incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 11 Option B: Book List ────────────────────────────────────
  p28: function (code) {
    const c = stripComments(code);
    const hasBooks = /books\s*:\s*string\s*\[\]/i.test(c);
    const hasFive = (() => {
      const m = c.match(/books\s*(?::\s*string\s*\[\]\s*)?=\s*\[([^\]]*)\]/i);
      return m ? (m[1].match(/,/g) || []).length + 1 >= 5 : false;
    })();
    if (hasBooks && hasFive)
      return {
        pass: true,
        title: "Book List complete!",
        feedback: "books: string[] with 5+ books present!",
      };
    const missing = [];
    if (!hasBooks) missing.push("books: string[] array");
    if (!hasFive) missing.push("at least 5 books in the array");
    return {
      pass: false,
      title: "Book List incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 12 Option A: Utility Types Project ────────────────────────
  p12: function (code) {
    const c = stripComments(code);
    const hasPublic = /type\s+PublicProduct\s*=\s*Omit/i.test(c);
    const hasUpdate = /type\s+UpdateProduct\s*=\s*Partial/i.test(c);
    if (hasPublic && hasUpdate)
      return {
        pass: true,
        title: "Utility Types complete!",
        feedback:
          "PublicProduct with Omit and UpdateProduct with Partial present!",
      };
    const missing = [];
    if (!hasPublic)
      missing.push("type PublicProduct = Omit<Product, 'secret'>");
    if (!hasUpdate) missing.push("type UpdateProduct = Partial<PublicProduct>");
    return {
      pass: false,
      title: "Utility Types incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 12 Option B: Daily Expenses ───────────────────────────────
  p29: function (code) {
    const c = stripComments(code);
    const hasExpenses = /expenses\s*:\s*number\s*\[\]/i.test(c);
    const hasFn = /function\s+totalExpenses/i.test(c);
    if (hasExpenses && hasFn)
      return {
        pass: true,
        title: "Daily Expenses complete!",
        feedback: "expenses: number[] and totalExpenses function present!",
      };
    const missing = [];
    if (!hasExpenses) missing.push("expenses: number[] with 5+ values");
    if (!hasFn)
      missing.push("function totalExpenses(expenses: number[]): number");
    return {
      pass: false,
      title: "Expenses incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 13 Option A: Decorators Project ───────────────────────────
  p13: function (code) {
    const c = stripComments(code);
    const hasFrozen = /function\s+Frozen/i.test(c);
    const hasFreeze = /Object\.freeze/i.test(c);
    const hasLog = /function\s+Log/i.test(c);
    const hasDescriptor = /descriptor\.value\s*=/i.test(c);
    if (hasFrozen && hasFreeze && hasLog && hasDescriptor)
      return {
        pass: true,
        title: "Decorators Project complete!",
        feedback: "@Frozen class decorator and @Log method decorator present!",
      };
    const missing = [];
    if (!hasFrozen) missing.push("function Frozen class decorator");
    if (!hasFreeze) missing.push("Object.freeze() inside Frozen");
    if (!hasLog) missing.push("function Log method decorator");
    if (!hasDescriptor) missing.push("descriptor.value wrapping in Log");
    return {
      pass: false,
      title: "Decorators incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 13 Option B: Todo List Manager ────────────────────────────
  p30: function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+Todo\s*\{/i.test(c);
    const hasArray = /todos\s*:\s*Todo\s*\[\]/i.test(c);
    const hasAdd = /function\s+addTodo|addTodo\s*=/i.test(c);
    const hasRemove = /function\s+removeTodo|removeTodo\s*=/i.test(c);
    const hasComplete = /function\s+markComplete|markComplete\s*=/i.test(c);
    if (hasInterface && hasArray && hasAdd && hasRemove && hasComplete)
      return {
        pass: true,
        title: "Todo List Manager complete!",
        feedback:
          "Todo interface, todos array, addTodo, removeTodo, markComplete all present!",
      };
    const missing = [];
    if (!hasInterface)
      missing.push("interface Todo { task: string; completed: boolean }");
    if (!hasArray) missing.push("todos: Todo[]");
    if (!hasAdd) missing.push("function addTodo");
    if (!hasRemove) missing.push("function removeTodo");
    if (!hasComplete) missing.push("function markComplete");
    return {
      pass: false,
      title: "Todo Manager incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 14 Option A: tsconfig Project ─────────────────────────────
  p14: function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+TsConfig\s*\{/i.test(c);
    const hasTarget = /target\s*:\s*["']ES2021["']/i.test(c);
    const hasStrict = /strict\s*:\s*true/i.test(c);
    const hasFn = /function\s+isStrictConfig/i.test(c);
    if (hasInterface && hasTarget && hasStrict && hasFn)
      return {
        pass: true,
        title: "tsconfig Project complete!",
        feedback:
          "TsConfig interface, ES2021 target, strict mode, and isStrictConfig function present!",
      };
    const missing = [];
    if (!hasInterface) missing.push("interface TsConfig");
    if (!hasTarget) missing.push('target: "ES2021"');
    if (!hasStrict) missing.push("strict: true");
    if (!hasFn) missing.push("function isStrictConfig(config)");
    return {
      pass: false,
      title: "tsconfig incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 14 Option B: Simple Timer ─────────────────────────────────
  p31: function (code) {
    const c = stripComments(code);
    const hasFn = /function\s+startTimer/i.test(c);
    const hasSeconds = /seconds\s*:\s*number/i.test(c);
    if (hasFn && hasSeconds)
      return {
        pass: true,
        title: "Simple Timer complete!",
        feedback: "startTimer(seconds: number) function present!",
      };
    const missing = [];
    if (!hasFn) missing.push("function startTimer(seconds: number): void");
    if (!hasSeconds) missing.push("seconds: number parameter");
    return {
      pass: false,
      title: "Timer incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 15 Option A: React Project ────────────────────────────────
  p15: function (code) {
    const c = stripComments(code);
    const hasCardProps = /interface\s+CardProps\s*\{/i.test(c);
    const hasRender = /function\s+renderCard|renderCard\s*=/i.test(c);
    const hasOnClick = /onClick\s*\?/i.test(c);
    if (hasCardProps && hasRender && hasOnClick)
      return {
        pass: true,
        title: "React Project complete!",
        feedback:
          "CardProps interface, renderCard function, optional onClick all present!",
      };
    const missing = [];
    if (!hasCardProps) missing.push("interface CardProps");
    if (!hasRender) missing.push("function renderCard(props: CardProps)");
    if (!hasOnClick) missing.push("optional onClick?: () => void");
    return {
      pass: false,
      title: "React project incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 15 Option B: Password Validator ───────────────────────────
  p32: function (code) {
    const c = stripComments(code);
    const hasFn = /function\s+validatePassword/i.test(c);
    const hasBoolean = /:\s*boolean/i.test(c);
    const hasLength = /\.length/i.test(c);
    if (hasFn && hasBoolean && hasLength)
      return {
        pass: true,
        title: "Password Validator complete!",
        feedback:
          "validatePassword function with length check and boolean return present!",
      };
    const missing = [];
    if (!hasFn)
      missing.push("function validatePassword(password: string): boolean");
    if (!hasBoolean) missing.push("boolean return type");
    if (!hasLength) missing.push("length check (min 8 chars)");
    return {
      pass: false,
      title: "Password Validator incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 16 Option A: Node.js Project ──────────────────────────────
  p16: function (code) {
    const c = stripComments(code);
    const hasReq = /interface\s+(Request|PostParams)\s*\{/i.test(c);
    const hasRes = /interface\s+(Response|PostBody)\s*\{/i.test(c);
    const hasFn =
      /function\s+handlePost|const\s+handlePost|validatePost|createPost/i.test(
        c,
      );
    if (hasReq && hasRes && hasFn)
      return {
        pass: true,
        title: "Node.js Project complete!",
        feedback: "Request/Response interfaces and handler function present!",
      };
    const missing = [];
    if (!hasReq) missing.push("interface Request or PostParams");
    if (!hasRes) missing.push("interface Response or PostBody");
    if (!hasFn)
      missing.push("handler function (handlePost/validatePost/createPost)");
    return {
      pass: false,
      title: "Node.js project incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 16 Option B: Contact Manager ──────────────────────────────
  p33: function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+Contact\s*\{/i.test(c);
    const hasArray = /contacts\s*:\s*Contact\s*\[\]/i.test(c);
    const hasFn = /function\s+findContact/i.test(c);
    if (hasInterface && hasArray && hasFn)
      return {
        pass: true,
        title: "Contact Manager complete!",
        feedback:
          "Contact interface, contacts array, and findContact function present!",
      };
    const missing = [];
    if (!hasInterface)
      missing.push("interface Contact { name, phone, email? }");
    if (!hasArray) missing.push("contacts: Contact[]");
    if (!hasFn)
      missing.push("function findContact(name: string): Contact | undefined");
    return {
      pass: false,
      title: "Contact Manager incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 17 Option A: Advanced Types Project ───────────────────────
  p17: function (code) {
    const c = stripComments(code);
    const hasIsArray = /type\s+IsArray\s*<\s*T\s*>/i.test(c);
    const hasConditional = /T\s+extends\s+any\s*\[\]/i.test(c);
    const hasElementType = /type\s+ElementType\s*<\s*T\s*>/i.test(c);
    if (hasIsArray && hasConditional && hasElementType)
      return {
        pass: true,
        title: "Advanced Types complete! 🎉",
        feedback:
          "IsArray<T> conditional type and ElementType<T> mapped type both present!",
      };
    const missing = [];
    if (!hasIsArray) missing.push("type IsArray<T> conditional type");
    if (!hasConditional) missing.push("T extends any[] condition");
    if (!hasElementType)
      missing.push("type ElementType<T> for array element extraction");
    return {
      pass: false,
      title: "Advanced Types incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
    };
  },

  // ── Lesson 17 Option B: BMI Calculator ───────────────────────────────
  p34: function (code) {
    const c = stripComments(code);
    const hasCalc = /function\s+calculateBMI/i.test(c);
    const hasClassify = /function\s+classifyBMI/i.test(c);
    const hasWeight = /weightKg\s*:\s*number/i.test(c);
    const hasHeight = /heightM\s*:\s*number/i.test(c);
    if (hasCalc && hasClassify && hasWeight && hasHeight)
      return {
        pass: true,
        title: "BMI Calculator complete!",
        feedback:
          "calculateBMI and classifyBMI functions with typed parameters present!",
      };
    const missing = [];
    if (!hasCalc)
      missing.push(
        "function calculateBMI(weightKg: number, heightM: number): number",
      );
    if (!hasClassify) missing.push("function classifyBMI(bmi: number): string");
    if (!hasWeight) missing.push("weightKg: number parameter");
    if (!hasHeight) missing.push("heightM: number parameter");
    return {
      pass: false,
      title: "BMI Calculator incomplete",
      feedback: `Missing:\n${missing.map((m) => " • " + m).join("\n")}`,
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
  <div class="project-result-icon">(*^▽^*)</div>
  <div class="project-result-title">${escHtml(result.title)}</div>
  <div class="xp-badge">+50 XP</div>
</div>
<div class="project-result-body">${escHtml(result.feedback)}</div>
<div class="btn-row" style="margin-top:16px">
  <button class="btn btn-primary" onclick="completionScreen()">Complete Lesson! [ \\o/ ]</button>
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
// CODE CHALLENGE VALIDATORS
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
        feedback: "username as string and year as number — exactly right!",
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
        feedback: "You correctly typed string, number, and boolean.",
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
      /title\?\s*:\s*string/i.test(c), // Check for optional title
      /\)\s*:\s*string\s*[{]/i.test(c),
    ];

    // Check if function body is empty (just returns "")
    const hasEmptyReturn = /return\s*[""'']\s*;/i.test(c);
    const hasNoLogic = !/if|title|\$\{|\+/i.test(c) || hasEmptyReturn;

    if (ok.every(Boolean) && !hasNoLogic)
      return {
        pass: true,
        title: "Function typed correctly!",
        feedback:
          "formatName has typed params, optional title, returns string, and includes logic. Great work!",
      };

    if (!ok[0])
      return {
        pass: false,
        title: "No formatName function",
        feedback:
          "Write: function formatName(firstName: string, lastName: string, title?: string): string { ... }",
      };

    if (hasNoLogic)
      return {
        pass: false,
        title: "Function needs implementation!",
        feedback:
          "The function signature is correct, but you need to implement the logic. Use template literals or string concatenation to format the name. Example: return title ? `${title} ${firstName} ${lastName}` : `${firstName} ${lastName}`;",
      };

    return {
      pass: false,
      title: "Function needs proper types",
      feedback:
        "Check: firstName: string, lastName: string, title?: string (optional), return type : string",
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
      feedback: "Check: parameter as T, return T[], at least 2 calls.",
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
        feedback: "All four string members + typed variable!",
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
      feedback:
        "Check all four members have string values and declare a Season variable.",
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
        feedback: "describe() narrows string | number | boolean perfectly!",
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
      feedback:
        'Check: union type param, typeof "string" check, typeof "number" check.',
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
          "Exported greet, exported Person interface, and imported them!",
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
    return {
      pass: false,
      title: "Utility types incomplete",
      feedback:
        'Need: type PublicProduct = Omit<Product, "secret">; type UpdateProduct = Partial<PublicProduct>;',
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
          "Frozen class decorator freezing prototype, applied with @Frozen!",
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
        feedback: "ES2021, strict, ./dist, ./src — production-ready config!",
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
          "CardProps with title, description, optional onClick — perfect!",
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
          "PostParams, typed Request<PostParams>, res: Response — perfect!",
      };
    return {
      pass: false,
      title: "Route handler incomplete",
      feedback: "Check: PostParams interface, Request<PostParams>, Response.",
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
      resultEl.innerHTML = `<div class="ai-result-hdr"><div class="ai-result-icon">(^_^)</div><div class="ai-result-title">${escHtml(result.title)}</div></div><div class="ai-result-body">${escHtml(result.feedback)}</div><div class="btn-row" style="margin-top:16px"><button class="btn btn-primary" onclick="switchPhase('project')">Go to Project Phase [ → ]</button></div>`;
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
  <div class="reward-card"><div class="reward-val" style="color:var(--yellow)">${points}</div><div class="reward-label">Total Points</div></div>
  <div class="reward-card"><div class="reward-val" style="color:var(--orange)">${streak}</div><div class="reward-label">Streak</div></div>
  <div class="reward-card"><div class="reward-val" style="color:var(--cyan)">${LESSONS.filter((x) => isLessonDone(x.id)).length}/${LESSONS.length}</div><div class="reward-label">Lessons Done</div></div>
  <div class="reward-card"><div class="reward-val" style="color:var(--blue)">${LESSONS.filter((x) => lessonProgress(x.id).project).length}</div><div class="reward-label">Projects Built</div></div>
</div>
<div class="btn-row" style="justify-content:center">
  ${
    hasNext
      ? `<button class="btn btn-primary" onclick="openLesson(${LESSONS[nextIdx].id})">Next Lesson: ${LESSONS[nextIdx].title} [ → ]</button>`
      : `<div style="font-family:'JetBrains Mono',monospace;color:var(--cyan);font-size:1.1rem">(^_^) You completed all 17 lessons + all projects!</div>`
  }
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

const epProjects = {
  35: {
    title: "Advanced Todo Filters",
    goal: "Filter todos dynamically by status and priority.",
    desc: "Learn how to manipulate arrays of objects using multiple criteria. You'll practice extending existing types and using the .filter() method to create a refined user experience.",
    reqs: [
      "Extend Todo with priority: 'low' | 'medium' | 'high'",
      "Create filter functions for status and priority",
      "Return filtered results as a new array",
    ],
    example: "High Priority Todos:\nBuild App",
    tags: ["arrays", "state"],
    diff: "medium",
  },
  36: {
    title: "Shopping Cart System",
    goal: "Calculate total price of cart items.",
    desc: "Master the .reduce() method. Simulates real-world e-commerce logic where you iterate through a list of products to derive a single numerical value (the total).",
    reqs: [
      "Create CartItem interface (name, price, quantity)",
      "Add items to a global array",
      "Use reduce() to calculate the grand total",
    ],
    example: "Total: 150",
    tags: ["arrays"],
    diff: "medium",
  },
  37: {
    title: "Role Permission Checker",
    goal: "Check user permissions based on role.",
    desc: "Focus on Type Guards and Union Types. Build a security-first function that determines if a user can perform actions like 'edit', 'delete', or 'view' based on their role.",
    reqs: [
      "Create Role union type: 'admin' | 'editor' | 'viewer'",
      "Implement hasPermission(user, action) function",
      "Return true/false based on role logic",
    ],
    example: "Admin can delete: true",
    tags: ["state"],
    diff: "medium",
  },
  38: {
    title: "API Error Handler",
    goal: "Handle API states.",
    desc: "Understand the 'State Pattern'. By using a Union Type for states like 'loading', 'error', and 'success', you ensure that your UI always knows exactly what to display.",
    reqs: [
      "Create ApiState union: 'idle' | 'loading' | 'success' | 'error'",
      "Use a switch statement to return user-friendly messages",
    ],
    example: "Loading...",
    tags: ["state"],
    diff: "medium",
  },
  39: {
    title: "Product Search Engine",
    goal: "Search products by keyword.",
    desc: "Implement basic search logic. Handle user input and use string methods like .includes() to search through a dataset efficiently.",
    reqs: [
      "Create Product array with names and categories",
      "Filter the array using .includes() on the keyword",
    ],
    example: "Found: Laptop",
    tags: ["arrays"],
    diff: "medium",
  },
  40: {
    title: "Chat Message Formatter",
    goal: "Format chat messages.",
    desc: "Learn String Manipulation and Interfaces. Take raw message data and transform it into a readable string format suitable for a chat UI.",
    reqs: [
      "Create Message interface (user, text, timestamp)",
      "Format a string output using Template Literals",
    ],
    example: "[10:00] John: Hello!",
    tags: ["state"],
    diff: "medium",
  },
  41: {
    title: "Bank Transaction System",
    goal: "Track account transactions.",
    desc: "Explore Object-Oriented Programming (OOP). Build a class that manages a private balance and maintains a history of every deposit and withdrawal.",
    reqs: [
      "Create Account class with private balance",
      "Add methods for deposit() and withdraw()",
      "Store transaction history in an array",
    ],
    example: "Balance: 200",
    tags: ["oop"],
    diff: "medium",
  },
  42: {
    title: "Game Score Tracker",
    goal: "Track player scores.",
    desc: "Practice State Management. Create a system to track multiple players and update their scores dynamically as they progress through a simulated game.",
    reqs: [
      "Create Player interface (id, name, score)",
      "Implement a function to update scores by ID",
    ],
    example: "Alice: 50",
    tags: ["state"],
    diff: "medium",
  },
  43: {
    title: "Dynamic Form Validator",
    goal: "Validate dynamic fields.",
    desc: "Advanced Generics. Create a validation function that works with any object structure, ensuring required fields are present.",
    reqs: [
      "Use TypeScript Generics <T>",
      "Check for missing or empty fields in a dynamic object",
    ],
    example: "Missing: email",
    tags: ["generics"],
    diff: "hard",
  },
  44: {
    title: "Event Scheduler",
    goal: "Sort events by date.",
    desc: "Working with Dates. Learn how to parse date strings and use the .sort() method to arrange events in chronological order.",
    reqs: [
      "Create Event interface with a Date property",
      "Sort the event array from earliest to latest",
    ],
    example: "Meeting - 2025",
    tags: ["arrays"],
    diff: "medium",
  },
  45: {
    title: "Currency Converter",
    goal: "Convert currencies.",
    desc: "Use Enums for fixed data. Uses a Currency Enum and a mapping object to calculate values between different global currencies like USD, EUR, and GBP.",
    reqs: [
      "Create enum Currency { USD, EUR, GBP }",
      "Map conversion rates to an object and calculate the result",
    ],
    example: "USD → EUR: 90",
    tags: ["state"],
    diff: "medium",
  },
  46: {
    title: "File Upload System",
    goal: "Simulate file upload states.",
    desc: "Simulate Asynchronous flows. Manage a 'Status' union to track a file's journey from 'idle' to 'uploading' to 'complete'.",
    reqs: [
      "Create Status union type",
      "Function to update state based on simulated progress",
    ],
    example: "Uploading...",
    tags: ["state"],
    diff: "medium",
  },
  47: {
    title: "Leaderboard System",
    goal: "Rank players.",
    desc: "Data Sorting. Build a leaderboard that automatically ranks players by their score, showing only the Top 3 or Top 5 users.",
    reqs: [
      "Sort an array of player objects by 'score' descending",
      "Slice the array to show top results",
    ],
    example: "1. Alice",
    tags: ["arrays"],
    diff: "medium",
  },
  48: {
    title: "Notification System",
    goal: "Send notifications.",
    desc: "Handle Multi-channel logic. Determine whether to send a 'Push', 'Email', or 'SMS' notification based on the input type.",
    reqs: [
      "Create notification types: 'email' | 'sms' | 'push'",
      "Use a switch statement to trigger the correct format",
    ],
    example: "Email sent",
    tags: ["state"],
    diff: "medium",
  },
  49: {
    title: "Inventory Restock System",
    goal: "Restock products.",
    desc: "Business Logic. Alert the user when stock is low and provide a function to increase the quantity of specific items.",
    reqs: [
      "Function to increase 'quantity' property",
      "Log an alert if 'quantity' falls below a threshold",
    ],
    example: "Restocked: Apple",
    tags: ["state"],
    diff: "medium",
  },
  50: {
    title: "Blog Post Manager",
    goal: "Manage blog posts.",
    desc: "CRUD Operations. Practice managing a list of posts, allowing for new entries to be added and old ones to be removed.",
    reqs: [
      "Create Post interface (title, content, author)",
      "Implement functions to add() and remove() posts by title",
    ],
    example: "Post added",
    tags: ["oop"],
    diff: "medium",
  },
  51: {
    title: "Weather Reporter",
    goal: "Describe weather.",
    desc: "Map Enums to Strings. Uses a Weather Enum to return descriptive, human-readable sentences about current atmospheric conditions.",
    reqs: [
      "Create Weather enum (Sunny, Rainy, Cloudy)",
      "Return custom descriptions for each enum value",
    ],
    example: "Sunny day",
    tags: ["state"],
    diff: "medium",
  },
  52: {
    title: "Quiz System",
    goal: "Validate answers.",
    desc: "Logic Comparison. Build a quiz engine that compares a user's selected answer against a 'correctAnswer' property within a Question interface.",
    reqs: [
      "Create Question interface with options and answer",
      "Function to compare user input and return 'Correct' or 'Wrong'",
    ],
    example: "Correct!",
    tags: ["oop"],
    diff: "medium",
  },
  53: {
    title: "URL Parser",
    goal: "Parse URL parts.",
    desc: "Regex and String Splitting. Take a raw URL string and break it down into its core components like Protocol, Domain, and Path.",
    reqs: [
      "Split a URL string using .split() or Regex",
      "Return an object containing the separated parts",
    ],
    example: "Domain: google.com",
    tags: ["advanced"],
    diff: "hard",
  },
  54: {
    title: "Pagination System",
    goal: "Paginate arrays.",
    desc: "UI Logic. Break large datasets into small 'pages'. A vital skill for building performant web applications with lots of data.",
    reqs: [
      "Create a paginate(array, pageNumber, pageSize) function",
      "Use .slice() to return only the items for the current page",
    ],
    example: "Page 1: [1,2,3]",
    tags: ["arrays"],
    diff: "medium",
  },
  55: {
    title: "Retry Request Logic",
    goal: "Retry failed operations.",
    desc: "Recursion and Error Handling. Implement a 'Retry' mechanism that attempts to run a function multiple times before finally giving up on failure.",
    reqs: [
      "Function that takes 'attempts' as an argument",
      "Use a loop or recursion to retry the task if it fails",
    ],
    example: "Retry 1...",
    tags: ["advanced"],
    diff: "hard",
  },
  56: {
    title: "Theme Switcher",
    goal: "Toggle theme.",
    desc: "State Toggling. Create a simple system to switch between 'light' and 'dark' modes, ensuring only valid theme names can be used.",
    reqs: [
      "Create Theme type union: 'light' | 'dark'",
      "Function to toggle the current value to its opposite",
    ],
    example: "Theme: dark",
    tags: ["state"],
    diff: "medium",
  },
  57: {
    title: "Data Transformer",
    goal: "Transform arrays.",
    desc: "Functional Programming. Use Generics to create a utility that can take an array of any type and apply a transformation function to every element.",
    reqs: [
      "Use TypeScript Generics",
      "Map through an array to change values (e.g., doubling numbers)",
    ],
    example: "[2,4,6]",
    tags: ["generics", "arrays"],
    diff: "hard",
  },
  58: {
    title: "Logger Utility",
    goal: "Log messages with levels.",
    desc: "Advanced Formatting. Build a professional-grade logging utility that prefixes messages with [INFO], [WARN], or [ERROR] tags.",
    reqs: [
      "Create log levels enum or union",
      "Function to format and output strings to the console",
    ],
    example: "[ERROR] Failed",
    tags: ["advanced"],
    diff: "medium",
  },
  59: {
    title: "User Authentication",
    goal: "Validate login.",
    desc: "Security Basics. Simulate a login flow where you check a username and password against a 'database' and return a success or failure object.",
    reqs: [
      "Check provided credentials against a mock user object",
      "Return an object containing 'success' status and a message",
    ],
    example: "Login success",
    tags: ["oop"],
    diff: "medium",
  },
  60: {
    title: "Drag & Drop State",
    goal: "Manage drag state.",
    desc: "Complex UI State. Manage the state of an item being dragged, tracking its original position and whether it is currently 'hovering' over a drop zone.",
    reqs: [
      "Create DragState interface (isDragging, targetId)",
      "Update state values based on simulated mouse events",
    ],
    example: "Dragging...",
    tags: ["state"],
    diff: "hard",
  },
  61: {
    title: "Markdown Renderer",
    goal: "Convert markdown to HTML.",
    desc: "Pattern Matching. Use Regular Expressions to find Markdown syntax (like asterisks) and replace them with HTML tags like <b> or <i>.",
    reqs: [
      "Detect **text** and *text* patterns",
      "Use .replace() with Regex to return an HTML string",
    ],
    example: "<b>Hello</b>",
    tags: ["advanced"],
    diff: "hard",
  },
  62: {
    title: "Command Parser",
    goal: "Parse CLI commands.",
    desc: "CLI Logic. Build a parser that takes a string input (like 'git commit -m') and extracts the primary command and its arguments.",
    reqs: [
      "Split string by spaces",
      "Identify the first word as the command and the rest as arguments",
    ],
    example: "Command: run",
    tags: ["advanced"],
    diff: "medium",
  },
  63: {
    title: "Cache System",
    goal: "Store key-value pairs.",
    desc: "Memory Management. Create a Cache class using the JavaScript 'Map' object to store and retrieve data quickly without recalculating it.",
    reqs: [
      "Create a class with get() and set() methods",
      "Use a Map to store values internally",
    ],
    example: "Cache hit",
    tags: ["oop", "generics"],
    diff: "hard",
  },
  64: {
    title: "Dependency Graph",
    goal: "Detect circular dependencies.",
    desc: "Advanced Algorithms. Use a Depth First Search (DFS) to find if any items in a graph point back to themselves.",
    reqs: [
      "Represent items and their dependencies as a Graph",
      "Implement a loop detection algorithm (DFS)",
    ],
    example: "Circular detected!",
    tags: ["advanced"],
    diff: "hard",
  },
};

/* ── Render cards ─────────────────────────────────────────── */
function renderEpProjects(filter = "all") {
  const grid = document.getElementById("ep-grid");
  if (!grid) return;
  grid.innerHTML = "";

  Object.entries(epProjects).forEach(([id, p]) => {
    const show = filter === "all" || p.tags.includes(filter);
    const reqTags = p.reqs
      .slice(0, 2)
      .map(
        (r) =>
          `<span class="ep-req-tag">${r.length > 32 ? r.slice(0, 30) + "…" : r}</span>`,
      )
      .join("");

    const card = document.createElement("div");
    card.className = "ep-card" + (show ? "" : " ep-hidden");
    card.dataset.id = id;
    card.innerHTML = `
      <div class="ep-card-top">
        <span class="ep-card-num">#${id}</span>
        <span class="ep-card-difficulty ep-diff-${p.diff}">${p.diff}</span>
      </div>
      <div class="ep-card-title">${p.title}</div>
      <div class="ep-card-goal">> ${p.goal}</div>
      <div class="ep-card-desc">${p.desc}</div>
      <div class="ep-card-reqs">${reqTags}</div>
      <div class="ep-card-footer">
        <div>
          <div class="ep-example-label">output:</div>
          <div class="ep-example-val">${p.example.split("\n")[0]}</div>
        </div>
        <button class="ep-open-btn" onclick="openEpModal(${id}, event)">Open [ → ]</button>
      </div>
    `;
    card.addEventListener("click", () => openEpModal(parseInt(id)));
    grid.appendChild(card);
  });
}

/* ── Filter ───────────────────────────────────────────────── */
function filterProjects(filter, btn) {
  document
    .querySelectorAll(".ep-filter")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderEpProjects(filter);
}

/* ── Modal ────────────────────────────────────────────────── */
function openEpModal(id, e) {
  if (e) e.stopPropagation();
  const p = epProjects[id];
  if (!p) return;

  const reqItems = p.reqs.map((r) => `<li>${r}</li>`).join("");
  document.getElementById("ep-modal-body").innerHTML = `
    <h3>${p.title}</h3>
    <div class="ep-modal-goal">> Goal: ${p.goal}</div>

    <div class="ep-modal-section-label">[ DESCRIPTION ]</div>
    <div class="ep-modal-desc">${p.desc}</div>

    <div class="ep-modal-section-label">[ REQUIREMENTS ]</div>
    <ul class="ep-modal-reqs-list">${reqItems}</ul>

    <div class="ep-modal-section-label">[ EXPECTED OUTPUT ]</div>
    <pre class="ep-modal-example">${p.example}</pre>

    <div class="ep-modal-actions">
      <button class="ep-modal-btn ep-modal-btn-primary" onclick="closeEpModal()">Got it [ ✓ ]</button>
      <button class="ep-modal-btn ep-modal-btn-secondary" onclick="closeEpModal()">[ ← ] Back</button>
    </div>
  `;
  document.getElementById("ep-modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeEpModal(e) {
  if (e && e.target !== document.getElementById("ep-modal-overlay")) return;
  document.getElementById("ep-modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeEpModal();
});

/* ── Init ─────────────────────────────────────────────────── */
renderEpProjects();
