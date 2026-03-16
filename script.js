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
          explain: '"hello" is a string, which is in the string | number union.',
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
          explain: "Literal types restrict a variable to specific exact values.",
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
          'Verify Result, Theme type aliases, and currentTheme variable are all defined correctly.',
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
          explain: "The class keyword defines a blueprint for creating objects.",
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
          explain: "private means only code inside the same class can access that property.",
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
          explain: "protected allows access in the class and its subclasses only.",
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
          explain: "You can declare and initialize properties directly in constructor parameters.",
        },
      ],
      challenge: {
        title: "Build a Class",
        desc: "Create a TypeScript class with typed properties and a method.",
        task: `Create a class called <strong>Car</strong> with public make/model, private year, and a getInfo() method returning "Make Model (Year)".`,
        starterCode: `// Create the Car class\n`,
        hint: `class Car { constructor(public make: string, public model: string, private year: number) {} getInfo(): string { return \`\${this.make} \${this.model} (\${this.year})\`; } }`,
        checks: "Verify Car class has public make/model, private year, a getInfo method returning a string.",
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
          explain: "Generics allow one function to work with multiple types safely.",
        },
        {
          q: "Where can generics be used?",
          choices: ["Functions", "Interfaces", "Classes", "All of the above"],
          correct: 3,
          explain: "Generics can be applied to functions, interfaces, classes, and type aliases.",
        },
      ],
      challenge: {
        title: "Write a Generic Function",
        desc: "Practice the generic <T> syntax.",
        task: `Write a generic function called <strong>wrapInArray</strong> that takes a value of type T and returns T[]. Call it at least twice.`,
        starterCode: `// Generic function\n\n// Call with a string\n\n// Call with a number\n`,
        hint: "function wrapInArray<T>(value: T): T[] { return [value]; }",
        checks: "Verify wrapInArray uses <T>, takes T, returns T[], called with at least two types.",
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
          explain: "Numeric enums auto-number from 0 unless you specify a starting value.",
        },
        {
          q: "Which enum type is preferred in modern TypeScript?",
          choices: ["Numeric enum", "Const enum", "String enum", "Boolean enum"],
          correct: 2,
          explain: "String enums are preferred because the values are readable when debugging.",
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
          explain: "const enum values are inlined directly — no enum object exists at runtime.",
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
          explain: "TypeScript prevents assigning values that are not part of the enum type.",
        },
        {
          q: "Which is more readable when debugging?",
          choices: ["Numeric enum", "String enum", "Const enum", "Any type"],
          correct: 1,
          explain: "String enums provide clear readable values instead of numbers.",
        },
      ],
      challenge: {
        title: "Create and Use an Enum",
        desc: "Practice defining and using TypeScript enums.",
        task: `1. Create a <strong>string enum</strong> called <strong>Season</strong> with Spring/Summer/Autumn/Winter members.<br>2. Declare a variable <strong>currentSeason</strong> of type Season.`,
        starterCode: `// Define Season enum\n\n// Declare currentSeason\n`,
        hint: 'enum Season { Spring = "spring", Summer = "summer", Autumn = "autumn", Winter = "winter" }',
        checks: "Verify Season is a string enum with all four members, currentSeason is typed as Season.",
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
          explain: "typeof is the right tool for string, number, boolean primitives.",
        },
        {
          q: "Which guard checks if a property exists on an object?",
          choices: ["typeof", "instanceof", "in", "as"],
          correct: 2,
          explain: "The in operator checks for the existence of a property on an object.",
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
        checks: "Verify describe uses typeof guards for string, number, and boolean branches.",
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
            'Use import type when importing types only.',
            "Prefer named exports for flexibility.",
          ],
        },
      ],
      quiz: [
        {
          q: "Which keyword makes a function available to other files?",
          choices: ["public", "export", "import", "expose"],
          correct: 1,
          explain: "export makes declarations available for import in other files.",
        },
        {
          q: "How do you import a default export?",
          code: 'import ___ from "./math";',
          choices: ["{multiply}", "* as multiply", "multiply", "(multiply)"],
          correct: 2,
          explain: 'Default exports are imported without curly braces.',
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
          explain: 'Use import * as NS from "./file" to access all exports as NS.exportName.',
        },
        {
          q: "Which type of export is preferred for multiple functions?",
          choices: ["default export", "named export", "public export", "global export"],
          correct: 1,
          explain: "Named exports are easier to maintain and allow tree-shaking.",
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
        checks: "Check that greet and Person are exported, and import statements are present.",
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
          explain: "Required<T> converts optional properties into required ones.",
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
        checks: "Verify PublicProduct, UpdateProduct, ProductMap are all correctly defined.",
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
          explain: "Decorators always start with @ placed directly above the target.",
        },
        {
          q: "What must you enable in tsconfig for decorators?",
          choices: ["strictDecorators", "allowDecorators", "experimentalDecorators", "useDecorators"],
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
          choices: ["ClassDecorator", "MethodDecorator", "PropertyDecorator", "ParameterDecorator"],
          correct: 1,
          explain: "MethodDecorators get target, key, and descriptor.",
        },
        {
          q: "What does a property decorator typically receive?",
          choices: ["target, key, descriptor", "target, key", "constructor only", "method and parameters"],
          correct: 1,
          explain: "Property decorators receive target (prototype) and key (property name).",
        },
      ],
      challenge: {
        title: "Write a Decorator",
        desc: "Create and apply a class decorator.",
        task: `Write a <strong>class decorator</strong> called <strong>Frozen</strong> that freezes the class prototype. Apply it to class <strong>AppConfig</strong>.`,
        starterCode: `function Frozen(constructor: Function) {\n  // your code here\n}\n\n@Frozen\nclass AppConfig {\n  version: string = "1.0";\n}`,
        hint: `function Frozen(constructor: Function) { Object.freeze(constructor.prototype); }`,
        checks: "Verify Frozen decorator freezes prototype and is applied to AppConfig.",
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
            'Always use strict: true for maximum type safety.',
            "Organize your code with rootDir and outDir.",
            "Use paths to avoid long relative imports.",
            "Enable esModuleInterop for smooth CommonJS/ESM usage.",
          ],
        },
      ],
      quiz: [
        {
          q: 'What does "strict": true enable?',
          choices: ["Only null checks", "Only implicit any checks", "A collection of all strict type checks", "Faster compilation"],
          correct: 2,
          explain: '"strict": true enables strictNullChecks, noImplicitAny, and more.',
        },
        {
          q: 'What is the "outDir" option?',
          choices: ["Where TypeScript source lives", "Where compiled JavaScript output goes", "The entry point file", "The module resolution strategy"],
          correct: 1,
          explain: '"outDir" specifies the folder where tsc puts the compiled .js files.',
        },
        {
          q: "What command generates a tsconfig.json?",
          choices: ["tsc --config", "tsc --setup", "tsc --init", "npx tsconfig"],
          correct: 2,
          explain: '"tsc --init" creates a tsconfig.json with all options commented.',
        },
        {
          q: "Which option allows importing JSON files directly?",
          choices: ["resolveJsonModule", "allowJsonImport", "esModuleInterop", "includeJson"],
          correct: 0,
          explain: "resolveJsonModule allows importing JSON files.",
        },
        {
          q: 'What does "esModuleInterop" do?',
          choices: ["Enables default imports from CommonJS", "Converts ES Modules to CommonJS", "Adds strict type checking", "Generates source maps"],
          correct: 0,
          explain: "esModuleInterop allows default imports from CommonJS modules.",
        },
      ],
      challenge: {
        title: "Configure tsconfig.json",
        desc: "Create a tsconfig with strict checks and output folder.",
        task: `Write a tsconfig object with target "ES2021", strict true, outDir "./dist", rootDir "./src".`,
        starterCode: `const config = {\n  compilerOptions: {\n    // your settings here\n  },\n  include: [],\n  exclude: []\n};`,
        hint: `compilerOptions: { target: "ES2021", strict: true, outDir: "./dist", rootDir: "./src" }`,
        checks: 'Verify target, strict, outDir, rootDir are all set correctly.',
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
          choices: ["Using a class", "Using an interface or type alias", "Using any", "Using generics only"],
          correct: 1,
          explain: "Define an interface or type alias for props.",
        },
        {
          q: "What is the type of an input change event?",
          choices: ["InputEvent", "ChangeEvent<HTMLInputElement>", "Event<input>", "FormEvent"],
          correct: 1,
          explain: "React exports ChangeEvent<T> parameterized with the element type.",
        },
        {
          q: "How do you type a useRef for an input element?",
          choices: ["useRef(null)", "useRef<input>(null)", "useRef<HTMLInputElement>(null)", "useRef<Element>()"],
          correct: 2,
          explain: "Pass the HTML element type as generic: useRef<HTMLInputElement>(null).",
        },
        {
          q: "How do you type a button click event handler?",
          choices: ["() => void", "MouseEvent", "React.MouseEvent<HTMLButtonElement>", "any"],
          correct: 2,
          explain: "Use React.MouseEvent<T> to type mouse events.",
        },
        {
          q: "How do you mark a prop as optional?",
          choices: ["prop?: type", "prop: optional", "prop!", "prop?=type"],
          correct: 0,
          explain: "Use the ? symbol after the property name to make it optional.",
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
        checks: "Check CardProps has title, description, optional onClick. Card uses useState.",
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
          choices: ["typescript-express", "@types/express", "express-types", "ts-express"],
          correct: 1,
          explain: "@types/express provides type definitions for Express.",
        },
        {
          q: "How do you type route parameters in Express?",
          choices: ["Request<Params>", "Request(Params)", "Request[Params]", "TypedRequest"],
          correct: 0,
          explain: "Request is a generic: Request<Params, ResBody, ReqBody, Query>.",
        },
        {
          q: "What tool gives the fastest dev server restarts for TS?",
          choices: ["ts-node", "tsc --watch", "tsx", "babel"],
          correct: 2,
          explain: "tsx is faster than ts-node.",
        },
        {
          q: "How do you attach a typed user to req?",
          choices: ["req.user = any", "req.user = unknown", "Extend Express.Request with interface", "No typing needed"],
          correct: 2,
          explain: "Extend the Express.Request interface in a global namespace.",
        },
        {
          q: "What type does req.params.id have in Request<{ id: string }>?",
          choices: ["number", "string", "any", "undefined"],
          correct: 1,
          explain: "Route parameters are always strings unless you transform them.",
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
        checks: "Verify PostParams, PostBody, and updatePost with correct typed parameters.",
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
          explain: "keyof T gets all keys, [K in keyof T] iterates to create new mapped type.",
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
          explain: "infer R captures a type portion from another type for reuse.",
        },
        {
          q: "What is the result of ToArray<string | number>?",
          choices: ["string[] & number[]", "string[] | number[]", "[string, number]", "never"],
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
        checks: 'Verify OptionalGetters and IsStringLiteral are defined correctly.',
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
  1: { title: "User Profile Project", desc: "Build a typed profile object and simple utility functions.", tasks: { easy: "Define a typed user object with name, age, and email. Log a message using the values.", medium: "Add a roles array and a function `isAdult(user)` that returns a boolean using age checks." } },
  2: { title: "Primitives Practice Project", desc: "Use basic primitives and literal/unions to model user status.", tasks: { easy: "Declare typed variables for name:string, age:number, isActive:boolean. Log each value.", medium: "Add nullable and optional variables (string | null, number | undefined) and a function to normalize them." } },
  3: { title: "Arrays & Tuples Project", desc: "Apply arrays and tuples to represent structured lists.", tasks: { easy: "Create a string[] of fruits and a tuple [string, number] for an item. Log both.", medium: "Write a function that takes string[] and returns [firstItem, length] as tuple; include safety checks." } },
  4: { title: "Objects & Interfaces Project", desc: "Model data with interfaces and typed objects.", tasks: { easy: "Create an interface Product (id: number, name: string, price: number) and a product object.", medium: "Extend Product into DigitalProduct with downloadUrl and a function that prints a summary." } },
  5: { title: "Functions Project", desc: "Write typed functions with parameters and return types.", tasks: { easy: "Implement `greet(name: string): string` and `formatAge(age: number): string`.", medium: "Implement `calculateDiscount(price: number, discount?: number): number` and use it with inputs." } },
  6: { title: "Union Types Project", desc: "Work with union types and run-time type narrowing.", tasks: { easy: "Create `type Status = 'loading' | 'success' | 'error'` and a function to handle each case.", medium: "Create `type Value = string | number | boolean` and a function that returns a typed message based on typeof checks." } },
  7: { title: "Classes Project", desc: "Build a class with methods and encapsulated state.", tasks: { easy: "Implement class `Car` with make/model/year and `getInfo()` method.", medium: "Implement class `BankAccount` with deposit/withdraw/getBalance and private balance." } },
  8: { title: "Generics Project", desc: "Use generic functions and interfaces for reusable typed logic.", tasks: { easy: "Write generic `wrapInArray<T>(value: T): T[]` and show usage with two types.", medium: "Create generic `ApiResponse<T>` and function `formatResponse<T>(data: T): ApiResponse<T>`." } },
  9: { title: "Enums Project", desc: "Apply enums to define fixed named values and state.", tasks: { easy: "Define `enum Season` and a function `isSummer(season: Season)`.", medium: "Write a `nextSeason(season: Season): Season` using switch and enum values." } },
  10: { title: "Type Narrowing Project", desc: "Practice narrowing unions with control flow.", tasks: { easy: "Implement `describe(value: string | number | boolean): string` using typeof checks.", medium: "Extend to handle `null | undefined` and include an impossible `never` branch." } },
  11: { title: "Modules Project", desc: "Simulate module exports/imports with interfaces and functions.", tasks: { easy: "Write `interface Person` + `function greet(person: Person): string` and invoke it.", medium: "Create module-style code blocks: one for model exports, one for usage." } },
  12: { title: "Utility Types Project", desc: "Use Omit and Partial to transform types safely.", tasks: { easy: "Define type `PublicProduct = Omit<Product, 'secret'>` and use it.", medium: "Define `UpdateProduct = Partial<PublicProduct>` and apply change objects to a product instance." } },
  13: { title: "Decorators Project", desc: "Implement class or method decorators for runtime behavior.", tasks: { easy: "Create `@Frozen` class decorator and apply to class to prevent extensions.", medium: "Add `@Log` method decorator to print name and args when methods are called." } },
  14: { title: "tsconfig.json Project", desc: "Model tsconfig options and validate config shapes.", tasks: { easy: "Define an interface for tsconfig and build an object with target/strict/outDir/rootDir.", medium: "Write a function `isStrictConfig(config)` that narrows to strict config with guard checks." } },
  15: { title: "TypeScript + React Project", desc: "Create typed component props and render helper logic.", tasks: { easy: "Define `CardProps` and a `renderCard(props: CardProps)` function returning a JSX-like string.", medium: "Add optional `onClick` callback and a `Card` component type that uses it safely." } },
  16: { title: "TypeScript + Node.js Project", desc: "Type request/response objects and route handler logic.", tasks: { easy: "Define `interface Request` and `interface Response`, create `handlePost(req, res)` with typed body.", medium: "Implement `validatePost(req)` with type guards and `async createPost(req, res)` flow." } },
  17: { title: "Advanced Types Project", desc: "Build sophisticated conditional and mapped type utilities.", tasks: { easy: "Implement `IsArray<T>` using conditional types and test it on multiple types.", medium: "Implement mapped type `ElementType<T>` (array element extraction) and test with tuple/array types." } },
};

LESSONS.forEach((lesson) => {
  const safeTitle = lesson.title;
  const preset = projectPresets[lesson.id] || {};
  const optionDiffs = projectOptionsByLesson(lesson.id);

  if (!lesson.projects || !lesson.projects.length) {
    lesson.projects = optionDiffs.map((difficulty, index) => {
      const idSuffix = index === 0 ? "a" : "b";
      return {
        id: `${lesson.id}${idSuffix}`,
        title: `${preset.title || safeTitle + " Project"} (${difficulty})`,
        desc: preset.desc || `Build a mini project to apply the concepts learned in ${safeTitle}.`,
        task: (preset.tasks && preset.tasks[difficulty]) || `Create a small TypeScript example using the main concept from this lesson.`,
        starterCode: `// Write your project code here\n`,
        hint: `Start with the lesson concept and use proper TypeScript type annotations.`,
        reward: projectRewards[difficulty],
        difficulty,
        ascii: projectAscii[difficulty],
        requirements: [
          `Use the core concept from ${safeTitle} with proper TypeScript types`,
          `Add comments explaining your approach and key decisions`,
          `Include at least one typed function or interface`,
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
  return progress[id] || { learn: false, quiz: false, code: false, project: false };
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
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("ts_theme", next);
  document.getElementById("themeBtn").textContent = next === "light" ? "☀️" : "😴";
}
(function () {
  const t = localStorage.getItem("ts_theme") || "dark";
  if (t === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("themeBtn").textContent = "☀️";
  }
  updateContinueLesson();
  const last = getLastLesson();
  if (last > 1) showToast(`Restored progress: last lesson was ${last}`, "success");
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
function renderGrid() {
  updateStats();
  const grid = document.getElementById("lesson-grid");
  grid.innerHTML = "";
  LESSONS.forEach((l, i) => {
    const unlocked = isLessonUnlocked(i);
    const done = isLessonDone(l.id);
    const p = lessonProgress(l.id);
    const card = document.createElement("div");
    card.className = "l-card " + (done ? "done" : !unlocked ? "locked" : "active-now");
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
  activeLesson = LESSONS.find((l) => l.id === id || String(l.id) === String(id));
  if (!activeLesson) {
    showToast("Lesson not found.", "error");
    return;
  }
  quizState = { idx: 0, answered: false, allCorrect: true };
  activeProjectId = activeLesson.projects?.[0]?.id || activeLesson.project?.id || null;
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
  tq.className = "phase-tab" + (p.quiz ? " done-tab" : !p.learn ? " locked-tab" : "");
  tc.className = "phase-tab" + (p.code ? " done-tab" : !p.quiz ? " locked-tab" : "");
  tp.className = "phase-tab" + (p.project ? " project-done-tab" : !p.code ? " locked-tab" : "");
}

function switchPhase(phase) {
  const p = lessonProgress(activeLesson.id);
  if (phase === "quiz" && !p.learn) { showToast("Complete the lesson first!", "error"); return; }
  if (phase === "code" && !p.quiz) { showToast("Pass the quiz first!", "error"); return; }
  if (phase === "project" && !p.code) { showToast("Complete the code challenge first!", "error"); return; }
  activePhase = phase;
  ["learn", "quiz", "code", "project"].forEach((ph) => {
    document.getElementById("phase-" + ph).style.display = ph === phase ? "block" : "none";
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
    if (block.heading) html += `<div class="block-heading">${block.heading}</div>`;
    if (block.type === "text") html += `<div class="block-text">${block.body}</div>`;
    else if (block.type === "points") html += `<div class="point-list">${block.points.map((p) => `<div class="point">${p}</div>`).join("")}</div>`;
    else if (block.type === "code") html += `<div class="code-wrap"><div class="code-top"><div class="code-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div><span class="code-fname">${block.file || "example.ts"}</span></div><pre class="code-pre">${escHtml(block.code)}</pre></div>`;
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
  if (q.code) html += `<div class="code-wrap" style="margin-bottom:12px"><div class="code-top"><div class="code-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div></div><pre class="code-pre">${escHtml(q.code)}</pre></div>`;
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
  if (idx !== q.correct) { choices[idx].classList.add("wrong"); quizState.allCorrect = false; }
  choices.forEach((c, i) => { if (i !== idx && i !== q.correct) c.classList.add("dim"); });
  const ok = idx === q.correct;
  if (ok) { points += 10; save(); updateStats(); }
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
  if (quizState.allCorrect) { streak++; points += 20; }
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
  if (done) html += `<div style="margin-top:16px"><button class="btn btn-primary btn-full" onclick="switchPhase('project')">Go to Project Phase [ → ]</button></div>`;
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
  const selectedProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  // ── Project option selector — requirements INSIDE each card ──────────
  let selectorHtml = `<div class="project-selector">`;
  projects.forEach((p, idx) => {
    const isSelected = activeProjectId === p.id;
    const diffClass = p.difficulty === "easy" ? "diff-easy" : p.difficulty === "medium" ? "diff-medium" : "diff-hard";
    const optionLabel = projects.length > 1
      ? `Option ${String.fromCharCode(65 + idx)} — ${p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1)}`
      : "Project Option";
    const reqs = Array.isArray(p.requirements) ? p.requirements : [];

    selectorHtml += `<div class="project-option ${isSelected ? "selected" : ""}" onclick="selectProject('${p.id}')">
      <div class="project-option-num">${optionLabel}</div>
      <div class="project-option-name">${p.title || p.name || ""}</div>
      <div class="project-option-desc">${p.desc || ""}</div>
      <div class="project-difficulty ${diffClass}">⬥ ${p.difficulty}</div>
      ${reqs.length ? `
      <div style="margin-top:10px; border-top:1px solid var(--border); padding-top:8px;">
        <div style="font-family:'JetBrains Mono',monospace; font-size:.6rem; letter-spacing:.1em; text-transform:uppercase; color:var(--blue); margin-bottom:6px;">📋 Requirements</div>
        ${reqs.map(r => `
        <div style="display:flex; align-items:flex-start; gap:6px; font-size:.75rem; color:var(--muted); margin-bottom:4px; line-height:1.4;">
          <span style="color:var(--blue); flex-shrink:0;">◆</span>
          <span>${r}</span>
        </div>`).join("")}
      </div>` : ""}
    </div>`;
  });
  selectorHtml += `</div>`;

  // ── Selected task details + editor ───────────────────────────────────
  let html = `
<div class="project-header">
  <div class="project-title-bar">
    <div>
      <div class="project-title">🏗️ Mini Project</div>
      <div class="project-subtitle">Choose an option — each has its own requirements shown above</div>
    </div>
    <div class="xp-badge">+${selectedProject.reward || 50} XP</div>
  </div>
  ${selectorHtml}
  <div class="challenge-task" style="margin-bottom:16px;">
    <div class="challenge-task-label">Selected Task</div>
    <div class="challenge-task-text">${selectedProject.task || ""}</div>
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
    : activeLesson.project ? [activeLesson.project] : [];
  const project = projects.find((p) => p.id === activeProjectId);
  if (project) document.getElementById("project-editor").value = project.starterCode;
  const r = document.getElementById("project-result");
  r.className = "project-result";
  r.innerHTML = "";
}

// ══════════════════════════════════════════
// PROJECT VALIDATORS
// ══════════════════════════════════════════
const PROJECT_VALIDATORS = {
  "1a": function (code) {
    const c = stripComments(code);
    const hasName = /let\s+name\s*:\s*string/i.test(c) || /const\s+name\s*:\s*string/i.test(c);
    const hasAge = /age\s*:\s*number/i.test(c);
    const hasOnline = /isOnline\s*:\s*boolean/i.test(c);
    const hasTemplate = /`[^`]*\$\{/i.test(c);
    if (hasName && hasAge && hasOnline && hasTemplate) return { pass: true, title: "Personal Info Card built!", feedback: "Great job! You declared typed variables for name, age, isOnline and used template literals." };
    const missing = [];
    if (!hasName) missing.push("name: string variable");
    if (!hasAge) missing.push("age: number variable");
    if (!hasOnline) missing.push("isOnline: boolean variable");
    if (!hasTemplate) missing.push("a template literal greeting with ${}");
    return { pass: false, title: "Profile incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "1b": function (code) {
    const c = stripComments(code);
    const hasCelsius = /celsius\s*:\s*number/i.test(c);
    const hasFahrenheit = /fahrenheit\s*:\s*number/i.test(c);
    const hasKm = /kilometers\s*:\s*number/i.test(c);
    const hasMiles = /miles\s*:\s*number/i.test(c);
    if (hasCelsius && hasFahrenheit && hasKm && hasMiles) return { pass: true, title: "Unit Converter complete!", feedback: "All four typed variables declared!" };
    const missing = [];
    if (!hasCelsius) missing.push("celsius: number");
    if (!hasFahrenheit) missing.push("fahrenheit: number");
    if (!hasKm) missing.push("kilometers: number");
    if (!hasMiles) missing.push("miles: number");
    return { pass: false, title: "Converter incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "2a": function (code) {
    const c = stripComments(code);
    const hasColor = /colorName\s*:\s*string/i.test(c);
    const hasR = /\br\s*:\s*number/i.test(c);
    const isDark = /isDark\s*:\s*boolean/i.test(c);
    const hasOpacity = /opacity\s*:\s*number/i.test(c);
    if (hasColor && hasR && isDark && hasOpacity) return { pass: true, title: "Color Palette complete!", feedback: "All color properties typed correctly!" };
    return { pass: false, title: "Color properties incomplete", feedback: "Ensure you have colorName: string, r/g/b: number, isDark: boolean, opacity: number." };
  },
  "2b": function (code) {
    const c = stripComments(code);
    const hasUnknown = /rawData\s*:\s*unknown/i.test(c);
    const hasTypeCheck = /typeof\s+\w+/i.test(c);
    const hasAny = /:\s*any\b/i.test(c);
    if (hasUnknown && hasTypeCheck && hasAny) return { pass: true, title: "Safe API Handler complete!", feedback: "Used unknown for raw data, typeof guard, and showed any risk!" };
    const missing = [];
    if (!hasUnknown) missing.push("rawData: unknown declaration");
    if (!hasTypeCheck) missing.push("typeof guard for safe narrowing");
    if (!hasAny) missing.push("any type to show the risk");
    return { pass: false, title: "Handler incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "3a": function (code) {
    const c = stripComments(code);
    const hasStudents = /students\s*:\s*string\s*\[\]/i.test(c);
    const hasGrades = /grades\s*:\s*number\s*\[\]/i.test(c);
    const hasMap = /\.map\s*\(/i.test(c);
    const hasFilter = /\.filter\s*\(/i.test(c);
    if (hasStudents && hasGrades && hasMap && hasFilter) return { pass: true, title: "Gradebook complete!", feedback: "Typed string[] and number[] arrays with .map() and .filter()!" };
    const missing = [];
    if (!hasStudents) missing.push("students: string[] array");
    if (!hasGrades) missing.push("grades: number[] array");
    if (!hasMap) missing.push(".map() usage");
    if (!hasFilter) missing.push(".filter() usage");
    return { pass: false, title: "Gradebook incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "3b": function (code) {
    const c = stripComments(code);
    const hasRGB = /type\s+RGB\s*=\s*\[/i.test(c);
    const hasPalette = /readonly\s+RGB\s*\[\]/i.test(c) || /:\s*readonly\s+RGB\[\]/i.test(c);
    const hasDestruct = /const\s+\[\s*r\s*,/i.test(c);
    const hasBrightness = /brightness/i.test(c);
    if (hasRGB && hasPalette && hasDestruct && hasBrightness) return { pass: true, title: "Color Manager complete!", feedback: "RGB tuple type, readonly palette, destructuring, and brightness calculation!" };
    const missing = [];
    if (!hasRGB) missing.push("type RGB = [number, number, number]");
    if (!hasPalette) missing.push("readonly RGB[] palette");
    if (!hasDestruct) missing.push("const [r, g, b] = destructuring");
    if (!hasBrightness) missing.push("brightness calculation");
    return { pass: false, title: "Color manager incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "4a": function (code) {
    const c = stripComments(code);
    const hasBook = /interface\s+Book\s*\{/i.test(c);
    const hasLibrary = /interface\s+Library\s*\{/i.test(c);
    const hasReadonlyId = /readonly\s+id\s*:\s*number/i.test(c);
    const hasBooks = /books\s*:\s*Book\s*\[\]/i.test(c);
    if (hasBook && hasLibrary && hasReadonlyId && hasBooks) return { pass: true, title: "Library System complete!", feedback: "Book interface, Library with Book[], readonly id!" };
    const missing = [];
    if (!hasBook) missing.push("interface Book { ... }");
    if (!hasLibrary) missing.push("interface Library { ... }");
    if (!hasReadonlyId) missing.push("readonly id: number in Book");
    if (!hasBooks) missing.push("books: Book[] in Library");
    return { pass: false, title: "Library system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "4b": function (code) {
    const c = stripComments(code);
    const hasAddress = /interface\s+Address\s*\{/i.test(c);
    const hasSocial = /interface\s+SocialProfile\s*\{/i.test(c);
    const hasNested = /address\s*:\s*Address/i.test(c);
    const hasFn = /function\s+displayProfile|displayProfile\s*=/i.test(c);
    if (hasAddress && hasSocial && hasNested && hasFn) return { pass: true, title: "Social Profile complete!", feedback: "Nested Address in SocialProfile and displayProfile function!" };
    const missing = [];
    if (!hasAddress) missing.push("interface Address");
    if (!hasSocial) missing.push("interface SocialProfile");
    if (!hasNested) missing.push("address: Address inside SocialProfile");
    if (!hasFn) missing.push("displayProfile function");
    return { pass: false, title: "Profile incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "5a": function (code) {
    const c = stripComments(code);
    const hasAdd = /function\s+add\s*\(/i.test(c);
    const hasDivide = /function\s+divide\s*\(/i.test(c);
    const hasPower = /function\s+power\s*\(/i.test(c);
    const hasReturn0 = /return\s+0/i.test(c);
    if (hasAdd && hasDivide && hasPower && !hasReturn0) return { pass: true, title: "Math Library complete!", feedback: "All math functions implemented and typed!" };
    if (hasAdd && hasDivide && hasPower) return { pass: false, title: "Functions need implementation", feedback: "Functions found but some still return 0. Complete the function bodies." };
    const missing = [];
    if (!hasAdd) missing.push("function add(a, b): number");
    if (!hasDivide) missing.push("function divide(a, b): number");
    if (!hasPower) missing.push("function power(base, exp): number");
    return { pass: false, title: "Math library incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "5b": function (code) {
    const c = stripComments(code);
    const hasCap = /function\s+capitalize/i.test(c);
    const hasTrunc = /function\s+truncate/i.test(c);
    const hasPad = /function\s+padNumber/i.test(c);
    const hasCurrency = /function\s+formatCurrency/i.test(c);
    if (hasCap && hasTrunc && hasPad && hasCurrency) return { pass: true, title: "String Toolkit complete!", feedback: "All 4 string utilities implemented!" };
    const missing = [];
    if (!hasCap) missing.push("capitalize function");
    if (!hasTrunc) missing.push("truncate function");
    if (!hasPad) missing.push("padNumber function");
    if (!hasCurrency) missing.push("formatCurrency function");
    return { pass: false, title: "Toolkit incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "6a": function (code) {
    const c = stripComments(code);
    const hasNotifType = /type\s+NotificationType\s*=/i.test(c);
    const hasPriority = /type\s+NotificationPriority\s*=/i.test(c);
    const hasIface = /interface\s+Notification\s*\{/i.test(c);
    const hasGetIcon = /function\s+getIcon/i.test(c);
    if (hasNotifType && hasPriority && hasIface && hasGetIcon) return { pass: true, title: "Notification System built!", feedback: "Union types, interface, and getIcon function all present!" };
    const missing = [];
    if (!hasNotifType) missing.push("type NotificationType union");
    if (!hasPriority) missing.push("type NotificationPriority union");
    if (!hasIface) missing.push("interface Notification");
    if (!hasGetIcon) missing.push("function getIcon");
    return { pass: false, title: "Notification system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "6b": function (code) {
    const c = stripComments(code);
    const hasCircle = /interface\s+Circle\s*\{/i.test(c);
    const hasRect = /interface\s+Rectangle\s*\{/i.test(c);
    const hasGetArea = /function\s+getArea/i.test(c);
    const hasSwitch = /switch\s*\(/i.test(c);
    if (hasCircle && hasRect && hasGetArea && hasSwitch) return { pass: true, title: "Shape Calculator complete!", feedback: "Discriminated union with switch on kind!" };
    const missing = [];
    if (!hasCircle) missing.push("interface Circle with kind");
    if (!hasRect) missing.push("interface Rectangle with kind");
    if (!hasGetArea) missing.push("function getArea(shape: Shape)");
    if (!hasSwitch) missing.push("switch on shape.kind");
    return { pass: false, title: "Shape calculator incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "7a": function (code) {
    const c = stripComments(code);
    const hasCharacter = /class\s+Character\s*\{/i.test(c);
    const hasWarrior = /class\s+Warrior\s+extends\s+Character/i.test(c);
    const hasMage = /class\s+Mage\s+extends\s+Character/i.test(c);
    const hasSuper = /super\s*\(/i.test(c);
    if (hasCharacter && hasWarrior && hasMage && hasSuper) return { pass: true, title: "RPG System complete!", feedback: "Character base class with Warrior and Mage subclasses using super()!" };
    const missing = [];
    if (!hasCharacter) missing.push("class Character base");
    if (!hasWarrior) missing.push("class Warrior extends Character");
    if (!hasMage) missing.push("class Mage extends Character");
    if (!hasSuper) missing.push("super() call in subclass constructors");
    return { pass: false, title: "RPG system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "7b": function (code) {
    const c = stripComments(code);
    const hasBankAccount = /class\s+BankAccount\s*\{/i.test(c);
    const hasPrivate = /private\s+balance/i.test(c);
    const hasDeposit = /deposit\s*\(\s*amount\s*:\s*number/i.test(c);
    const hasWithdraw = /withdraw\s*\(\s*amount\s*:\s*number/i.test(c);
    const hasReturn = /return\s+(true|false)/i.test(c);
    if (hasBankAccount && hasPrivate && hasDeposit && hasWithdraw && hasReturn) return { pass: true, title: "Bank Account System complete!", feedback: "Private balance with deposit/withdraw/getBalance!" };
    const missing = [];
    if (!hasBankAccount) missing.push("class BankAccount");
    if (!hasPrivate) missing.push("private balance property");
    if (!hasDeposit) missing.push("deposit(amount: number) method");
    if (!hasWithdraw) missing.push("withdraw returning boolean");
    return { pass: false, title: "Bank account incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "8a": function (code) {
    const c = stripComments(code);
    const hasClass = /class\s+DataStore\s*<\s*T\s*>/i.test(c);
    const hasAdd = /add\s*\(\s*item\s*:\s*T/i.test(c);
    const hasFind = /find\s*\(/i.test(c);
    if (hasClass && hasAdd && hasFind) return { pass: true, title: "Generic DataStore built!", feedback: "DataStore<T> with typed add and find methods!" };
    const missing = [];
    if (!hasClass) missing.push("class DataStore<T>");
    if (!hasAdd) missing.push("add(item: T) method");
    if (!hasFind) missing.push("find(predicate) method");
    return { pass: false, title: "DataStore incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "8b": function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+ApiResponse\s*<\s*T\s*>/i.test(c);
    const hasCreateSuccess = /function\s+createSuccess\s*<\s*T\s*>/i.test(c);
    const hasCreateError = /function\s+createError\s*<\s*T\s*>/i.test(c);
    const hasUser = /interface\s+User\s*\{/i.test(c);
    const hasProduct = /interface\s+Product\s*\{/i.test(c);
    if (hasInterface && hasCreateSuccess && hasCreateError && hasUser && hasProduct) return { pass: true, title: "API Response System complete!", feedback: "Generic ApiResponse<T> with typed success and error factories!" };
    const missing = [];
    if (!hasInterface) missing.push("interface ApiResponse<T>");
    if (!hasCreateSuccess) missing.push("function createSuccess<T>");
    if (!hasCreateError) missing.push("function createError<T>");
    if (!hasUser) missing.push("interface User");
    if (!hasProduct) missing.push("interface Product");
    return { pass: false, title: "API system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "9a": function (code) {
    const c = stripComments(code);
    const hasLight = /enum\s+TrafficLight\s*\{/i.test(c);
    const hasAction = /enum\s+Action\s*\{/i.test(c);
    const hasGetAction = /function\s+getAction/i.test(c);
    const hasGetNext = /function\s+getNextLight/i.test(c);
    const hasLoop = /for\s*\(/i.test(c);
    if (hasLight && hasAction && hasGetAction && hasGetNext && hasLoop) return { pass: true, title: "Traffic Light Simulator complete!", feedback: "Two string enums, action mapping, state machine logic, and a simulation loop!" };
    const missing = [];
    if (!hasLight) missing.push("enum TrafficLight");
    if (!hasAction) missing.push("enum Action");
    if (!hasGetAction) missing.push("function getAction");
    if (!hasGetNext) missing.push("function getNextLight");
    if (!hasLoop) missing.push("simulation loop");
    return { pass: false, title: "Simulator incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "9b": function (code) {
    const c = stripComments(code);
    const hasRole = /enum\s+Role\s*\{/i.test(c);
    const hasPerm = /enum\s+Permission\s*\{/i.test(c);
    const hasRecord = /Record\s*<\s*Role/i.test(c);
    const hasFn = /function\s+hasPermission/i.test(c);
    if (hasRole && hasPerm && hasRecord && hasFn) return { pass: true, title: "Permission System complete!", feedback: "Role and Permission enums + Record + hasPermission function!" };
    const missing = [];
    if (!hasRole) missing.push("enum Role");
    if (!hasPerm) missing.push("enum Permission");
    if (!hasRecord) missing.push("Record<Role, Permission[]> permissions map");
    if (!hasFn) missing.push("function hasPermission");
    return { pass: false, title: "Permission system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "10a": function (code) {
    const c = stripComments(code);
    const hasInterfaces = /interface\s+ClickEvent\s*\{/i.test(c);
    const hasUnion = /type\s+AppEvent\s*=/i.test(c);
    const hasHandler = /function\s+handleEvent/i.test(c);
    const hasSwitch = /switch\s*\(\s*event\.type/i.test(c);
    if (hasInterfaces && hasUnion && hasHandler && hasSwitch) return { pass: true, title: "Event System complete!", feedback: "Discriminated union with exhaustive switch!" };
    const missing = [];
    if (!hasInterfaces) missing.push("ClickEvent, KeyEvent, ResizeEvent interfaces");
    if (!hasUnion) missing.push("type AppEvent = union");
    if (!hasHandler) missing.push("function handleEvent(event: AppEvent)");
    if (!hasSwitch) missing.push("switch on event.type");
    return { pass: false, title: "Event system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "10b": function (code) {
    const c = stripComments(code);
    const hasValidInput = /type\s+ValidInput\s*=/i.test(c);
    const hasTypePred = /v\s+is\s+string/i.test(c);
    const hasSanitize = /function\s+sanitize/i.test(c);
    if (hasValidInput && hasTypePred && hasSanitize) return { pass: true, title: "Input Validator complete!", feedback: "ValidInput union, type predicates, and sanitize function!" };
    const missing = [];
    if (!hasValidInput) missing.push("type ValidInput union");
    if (!hasTypePred) missing.push("type predicate (v is string)");
    if (!hasSanitize) missing.push("function sanitize");
    return { pass: false, title: "Validator incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "11a": function (code) {
    const c = stripComments(code);
    const hasMath = /MathUtils\s*=/i.test(c) || /const\s+MathUtils/i.test(c);
    const hasString = /StringUtils\s*=/i.test(c) || /const\s+StringUtils/i.test(c);
    const hasArray = /ArrayUtils\s*=/i.test(c) || /const\s+ArrayUtils/i.test(c);
    const hasClamp = /clamp\s*:/i.test(c);
    const hasSlugify = /slugify\s*:/i.test(c);
    if (hasMath && hasString && hasArray && hasClamp && hasSlugify) return { pass: true, title: "Utility Module System built!", feedback: "MathUtils, StringUtils, ArrayUtils organized as typed namespace objects!" };
    const missing = [];
    if (!hasMath || !hasClamp) missing.push("MathUtils with clamp and lerp");
    if (!hasString || !hasSlugify) missing.push("StringUtils with slugify and wordCount");
    if (!hasArray) missing.push("ArrayUtils with unique and chunk");
    return { pass: false, title: "Utility system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "11b": function (code) {
    const c = stripComments(code);
    const hasInterface = /interface\s+Plugin\s*\{/i.test(c);
    const hasManager = /class\s+PluginManager\s*\{/i.test(c);
    const hasRegister = /register\s*\(\s*plugin\s*:\s*Plugin/i.test(c);
    const hasThreePlugins = (c.match(/const\s+\w+Plugin/g) || []).length >= 3;
    if (hasInterface && hasManager && hasRegister && hasThreePlugins) return { pass: true, title: "Plugin Architecture complete!", feedback: "Plugin interface, PluginManager, and 3 concrete plugins!" };
    const missing = [];
    if (!hasInterface) missing.push("interface Plugin with execute method");
    if (!hasManager) missing.push("class PluginManager");
    if (!hasRegister) missing.push("register(plugin: Plugin) method");
    if (!hasThreePlugins) missing.push("at least 3 Plugin objects");
    return { pass: false, title: "Plugin system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "12a": function (code) {
    const c = stripComments(code);
    const hasCreateUser = /type\s+CreateUser\s*=\s*Omit/i.test(c);
    const hasUpdateUser = /type\s+UpdateUser\s*=\s*Partial/i.test(c);
    const hasSummary = /type\s+UserSummary\s*=\s*Pick/i.test(c);
    const hasFn = /function\s+createUser/i.test(c);
    if (hasCreateUser && hasUpdateUser && hasSummary && hasFn) return { pass: true, title: "User Manager complete!", feedback: "CreateUser with Omit, UpdateUser with Partial, UserSummary with Pick!" };
    const missing = [];
    if (!hasCreateUser) missing.push("type CreateUser = Omit<User, 'id'>");
    if (!hasUpdateUser) missing.push("type UpdateUser = Partial<Omit<...>>");
    if (!hasSummary) missing.push("type UserSummary = Pick<...>");
    if (!hasFn) missing.push("function createUser");
    return { pass: false, title: "User manager incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "12b": function (code) {
    const c = stripComments(code);
    const hasRequired = /type\s+RequiredConfig\s*=\s*Required/i.test(c);
    const hasOptional = /type\s+OptionalConfig\s*=\s*Partial/i.test(c);
    const hasFull = /type\s+FullConfig\s*=/i.test(c);
    const hasRecord = /Record\s*<\s*ConfigKeys/i.test(c);
    if (hasRequired && hasOptional && hasFull && hasRecord) return { pass: true, title: "Config System complete!", feedback: "Required+Optional split with intersection and Record!" };
    const missing = [];
    if (!hasRequired) missing.push("RequiredConfig = Required<Pick<...>>");
    if (!hasOptional) missing.push("OptionalConfig = Partial<Omit<...>>");
    if (!hasFull) missing.push("FullConfig = RequiredConfig & OptionalConfig");
    if (!hasRecord) missing.push("Record<ConfigKeys, string> for descriptions");
    return { pass: false, title: "Config system incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "13a": function (code) {
    const c = stripComments(code);
    const hasMinLength = /function\s+MinLength/i.test(c);
    const hasTimed = /function\s+Timed/i.test(c);
    const hasDescriptor = /descriptor\.value\s*=/i.test(c);
    const hasClass = /class\s+UserForm\s*\{/i.test(c);
    if (hasMinLength && hasTimed && hasDescriptor && hasClass) return { pass: true, title: "Validation Decorators complete!", feedback: "MinLength and Timed decorators with UserForm class!" };
    const missing = [];
    if (!hasMinLength) missing.push("function MinLength(min: number) decorator factory");
    if (!hasTimed) missing.push("function Timed method decorator");
    if (!hasDescriptor) missing.push("descriptor.value = ... wrapping in Timed");
    if (!hasClass) missing.push("class UserForm with decorators applied");
    return { pass: false, title: "Validators incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "14a": function (code) {
    const c = stripComments(code);
    const hasType = /type\s+Target\s*=/i.test(c);
    const hasInterface = /interface\s+TsConfig\s*\{/i.test(c);
    const hasFn = /function\s+createConfig/i.test(c);
    const has3Calls = (c.match(/createConfig\s*\(/g) || []).length >= 3;
    if (hasType && hasInterface && hasFn && has3Calls) return { pass: true, title: "Config Generator complete!", feedback: "Target union, TsConfig interface, createConfig with 3 variant calls!" };
    const missing = [];
    if (!hasType) missing.push("type Target union");
    if (!hasInterface) missing.push("interface TsConfig");
    if (!hasFn) missing.push("function createConfig");
    if (!has3Calls) missing.push("at least 3 config calls");
    return { pass: false, title: "Generator incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "15a": function (code) {
    const c = stripComments(code);
    const hasFormField = /interface\s+FormField\s*\{/i.test(c);
    const hasFormProps = /interface\s+FormProps\s*\{/i.test(c);
    const hasOnSubmit = /onSubmit\s*:/i.test(c);
    const hasState = /useState/i.test(c);
    const hasChange = /handleChange|onChange/i.test(c);
    if (hasFormField && hasFormProps && hasOnSubmit && hasState && hasChange) return { pass: true, title: "Form Builder complete!", feedback: "FormField and FormProps interfaces, typed useState, onChange handlers!" };
    const missing = [];
    if (!hasFormField) missing.push("interface FormField");
    if (!hasFormProps) missing.push("interface FormProps with onSubmit");
    if (!hasState) missing.push("useState for form values");
    if (!hasChange) missing.push("onChange handler");
    return { pass: false, title: "Form builder incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "16a": function (code) {
    const c = stripComments(code);
    const hasTodo = /interface\s+Todo\s*\{/i.test(c);
    const hasCreate = /type\s+CreateTodoDto\s*=\s*Omit/i.test(c);
    const hasUpdate = /type\s+UpdateTodoDto\s*=\s*Partial/i.test(c);
    const hasApi = /interface\s+ApiResponse\s*<\s*T\s*>/i.test(c);
    const hasHandler = /const\s+getAll\s*=/i.test(c);
    if (hasTodo && hasCreate && hasUpdate && hasApi && hasHandler) return { pass: true, title: "REST API Simulator complete!", feedback: "Todo CRUD with Omit/Partial DTOs, generic ApiResponse<T>, and typed handlers!" };
    const missing = [];
    if (!hasTodo) missing.push("interface Todo");
    if (!hasCreate) missing.push("type CreateTodoDto = Omit<Todo, ...>");
    if (!hasUpdate) missing.push("type UpdateTodoDto = Partial<...>");
    if (!hasApi) missing.push("interface ApiResponse<T>");
    if (!hasHandler) missing.push("typed handler functions");
    return { pass: false, title: "API simulator incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  "17a": function (code) {
    const c = stripComments(code);
    const hasNullable = /type\s+IsNullable\s*<\s*T\s*>/i.test(c);
    const hasRequired = /type\s+RequiredFields\s*<\s*T\s*>/i.test(c);
    const hasDeepReadonly = /type\s+DeepReadonly\s*<\s*T\s*>/i.test(c);
    const hasEvent = /type\s+EventHandlerName\s*<\s*T/i.test(c);
    if (hasNullable && hasRequired && hasDeepReadonly && hasEvent) return { pass: true, title: "Type Schema complete! You've mastered TypeScript! 🎉", feedback: "IsNullable, RequiredFields, DeepReadonly, EventHandlerName — all defined! Congratulations!" };
    const missing = [];
    if (!hasNullable) missing.push("type IsNullable<T>");
    if (!hasRequired) missing.push("type RequiredFields<T>");
    if (!hasDeepReadonly) missing.push("type DeepReadonly<T> (recursive)");
    if (!hasEvent) missing.push("type EventHandlerName<T>");
    return { pass: false, title: "Type schema incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
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
      : { pass: true, title: "Project accepted!", feedback: "Great work completing the project!" };
    if (result.pass) {
      const id = activeLesson.id;
      const wasAlreadyDone = lessonProgress(id).project;
      if (!wasAlreadyDone) { points += 50; streak++; }
      progress[id] = { ...lessonProgress(id), project: true };
      save();
      updateStats();
      updatePhaseTabs();
      resultEl.className = "project-result pass show";
      resultEl.innerHTML = `
<div class="project-result-hdr">
  <div class="project-result-icon">🎉</div>
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
  return code.replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
}
function hasTypedVar(code, name, type) {
  const c = stripComments(code);
  return new RegExp(`(let|const|var)\\s+${name}\\s*:\\s*${type}\\s*=`, "i").test(c);
}
function hasInterface(code, name) {
  const c = stripComments(code);
  return new RegExp(`interface\\s+${name}\\s*\\{`, "i").test(c);
}
function hasFunction(code, name) {
  const c = stripComments(code);
  return (
    new RegExp(`function\\s+${name}\\s*\\(`, "i").test(c) ||
    new RegExp(`(const|let)\\s+${name}\\s*=\\s*(\\(.*\\)|\\w+)\\s*=>`, "i").test(c)
  );
}
function hasStringArray(code, name) {
  const c = stripComments(code);
  return new RegExp(`(let|const|var)\\s+${name}\\s*:\\s*string\\s*\\[\\]`, "i").test(c);
}
function hasTuple(code, name, types) {
  const c = stripComments(code);
  return new RegExp(`(let|const|var)\\s+${name}\\s*:\\s*\\[${types}\\]`, "i").test(c);
}

const VALIDATORS = {
  1: (code) => {
    const hasUsername = hasTypedVar(code, "username", "string");
    const hasYear = hasTypedVar(code, "year", "number");
    if (hasUsername && hasYear) return { pass: true, title: "Both variables typed correctly!", feedback: "username as string and year as number — exactly right!" };
    if (!hasUsername && !hasYear) return { pass: false, title: "Missing both type annotations", feedback: 'Try:\nlet username: string = "YourName";\nlet year: number = 2026;' };
    if (!hasUsername) return { pass: false, title: "username type missing", feedback: 'Fix: let username: string = "YourName";' };
    return { pass: false, title: "year type missing", feedback: "Fix: let year: number = 2026;" };
  },
  2: (code) => {
    const ok = [hasTypedVar(code, "city", "string"), hasTypedVar(code, "population", "number"), hasTypedVar(code, "isCapital", "boolean")];
    const missing = ["city: string", "population: number", "isCapital: boolean"].filter((_, i) => !ok[i]);
    if (!missing.length) return { pass: true, title: "All three primitives typed!", feedback: "You correctly typed string, number, and boolean." };
    return { pass: false, title: `Missing: ${missing.join(", ")}`, feedback: `Still need:\n${missing.map((m) => `  let ${m} = ...`).join("\n")}` };
  },
  3: (code) => {
    const hasFruits = hasStringArray(code, "fruits");
    const hasPerson = hasTuple(code, "person", "string,\\s*number");
    const c = stripComments(code);
    const m = c.match(/fruits\s*(?::\s*string\s*\[\]\s*)?=\s*\[([^\]]*)\]/i);
    const fc = m ? (m[1].match(/,/g) || []).length + 1 : 0;
    if (hasFruits && hasPerson && fc >= 3) return { pass: true, title: "Array and tuple correct!", feedback: "Your fruits string[] has 3+ items and person [string, number] tuple is perfect!" };
    if (!hasFruits || fc < 3) return { pass: false, title: "fruits needs 3+ items", feedback: 'const fruits: string[] = ["apple","banana","mango"];' };
    return { pass: false, title: "person tuple needs annotation", feedback: 'let person: [string, number] = ["Alice", 25];' };
  },
  4: (code) => {
    const c = stripComments(code);
    const ok = [hasInterface(code, "Product"), /readonly\s+id\s*:\s*number/i.test(c), /name\s*:\s*string/i.test(c), /price\s*:\s*number/i.test(c), /:\s*Product/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Interface designed correctly!", feedback: "Product interface with readonly id, name, price — perfectly structured!" };
    if (!ok[0]) return { pass: false, title: "No interface found", feedback: "Start with: interface Product { readonly id: number; name: string; price: number; inStock?: boolean; }" };
    return { pass: false, title: "Interface incomplete", feedback: "Check: readonly id, name: string, price: number, and a variable typed as Product." };
  },
  5: (code) => {
    const c = stripComments(code);
    const ok = [hasFunction(code, "formatName"), /firstName\s*:\s*string/i.test(c), /lastName\s*:\s*string/i.test(c), /\)\s*:\s*string\s*[{=]/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Function typed correctly!", feedback: "formatName has typed params and returns string. Great work!" };
    if (!ok[0]) return { pass: false, title: "No formatName function", feedback: "Write: function formatName(firstName: string, lastName: string): string { ... }" };
    return { pass: false, title: "Function needs types", feedback: "Check: firstName: string, lastName: string, return type : string" };
  },
  6: (code) => {
    const c = stripComments(code);
    const rm = c.match(/type\s+Result\s*=([^;]+)/i);
    const tm = c.match(/type\s+Theme\s*=([^;]+)/i);
    const ok = [rm && /string/i.test(rm[1]) && /number/i.test(rm[1]) && /boolean/i.test(rm[1]), tm && /"light"/i.test(tm[1]) && /"dark"/i.test(tm[1]), /:\s*Theme/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Union types mastered!", feedback: "Result union and Theme literal type both perfect!" };
    const missing = [];
    if (!ok[0]) missing.push("Result = string | number | boolean");
    if (!ok[1]) missing.push('Theme = "light" | "dark"');
    if (!ok[2]) missing.push("a variable typed as Theme");
    return { pass: false, title: "Type aliases need work", feedback: `Missing:\n${missing.map((m) => "  • type " + m).join("\n")}` };
  },
  7: (code) => {
    const c = stripComments(code);
    const ok = [/class\s+Car\s*\{/i.test(c), /(?:public\s+)?make\s*:\s*string/i.test(c), /(?:public\s+)?model\s*:\s*string/i.test(c), /(?:private\s+)?year\s*:\s*number/i.test(c), /getInfo\s*\(\s*\)\s*:\s*string/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Car class built correctly!", feedback: "make, model, year with proper access modifiers and getInfo(): string — perfect!" };
    if (!ok[0]) return { pass: false, title: "No Car class found", feedback: "Start with: class Car { constructor(public make: string, ...) {} getInfo(): string { ... } }" };
    return { pass: false, title: "Class incomplete", feedback: "Check: public make/model, private year, getInfo(): string method." };
  },
  8: (code) => {
    const c = stripComments(code);
    const ok = [/function\s+wrapInArray\s*<\s*T\s*>/i.test(c), /value\s*:\s*T\b/i.test(c), /\)\s*:\s*T\s*\[/i.test(c), (c.match(/wrapInArray\s*[(<]/g) || []).length >= 2];
    if (ok.every(Boolean)) return { pass: true, title: "Generic function perfect!", feedback: "wrapInArray<T> taking T returning T[] called twice — excellent!" };
    if (!ok[0]) return { pass: false, title: "Missing <T> syntax", feedback: "function wrapInArray<T>(value: T): T[] { return [value]; }" };
    return { pass: false, title: "Almost!", feedback: "Check: parameter as T, return T[], at least 2 calls." };
  },
  9: (code) => {
    const c = stripComments(code);
    const ok = [/enum\s+Season\s*\{/i.test(c), /Spring\s*=\s*["']spring["']/i.test(c), /Summer\s*=\s*["']summer["']/i.test(c), /Autumn\s*=\s*["']autumn["']/i.test(c), /Winter\s*=\s*["']winter["']/i.test(c), /:\s*Season/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Enum perfect!", feedback: "All four string members + typed variable!" };
    if (!ok[0]) return { pass: false, title: "No Season enum", feedback: 'enum Season { Spring = "spring", Summer = "summer", Autumn = "autumn", Winter = "winter" }' };
    return { pass: false, title: "Enum incomplete", feedback: "Check all four members have string values and declare a Season variable." };
  },
  10: (code) => {
    const c = stripComments(code);
    const ok = [/function\s+describe\s*\(/i.test(c), /string\s*\|\s*number\s*\|\s*boolean/i.test(c), /typeof\s+\w+\s*===?\s*["']string["']/i.test(c), /typeof\s+\w+\s*===?\s*["']number["']/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Type narrowing mastered!", feedback: "describe() narrows string | number | boolean perfectly!" };
    if (!ok[0]) return { pass: false, title: "No describe function", feedback: "Write: function describe(value: string | number | boolean): string { ... }" };
    return { pass: false, title: "More narrowing needed", feedback: 'Check: union type param, typeof "string" check, typeof "number" check.' };
  },
  11: (code) => {
    const c = stripComments(code);
    const ok = [/export\s+function\s+greet\s*\(\s*\w+\s*:\s*string/i.test(c), /export\s+interface\s+Person\s*\{/i.test(c), /name\s*:\s*string/i.test(c), /age\s*:\s*number/i.test(c), /import\s*\{[^}]+\}\s*from/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Modules understood!", feedback: "Exported greet, exported Person interface, and imported them!" };
    const missing = ["export function greet(name: string): string", "export interface Person { ... }", "name: string in Person", "age: number in Person", "import { greet, Person } from ..."].filter((_, i) => !ok[i]);
    return { pass: false, title: "Module exports incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  12: (code) => {
    const c = stripComments(code);
    const ok = [/Omit\s*<\s*Product\s*,/i.test(c), /Partial\s*<\s*PublicProduct\s*>/i.test(c), /type\s+PublicProduct/i.test(c), /type\s+UpdateProduct/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Utility types composed!", feedback: "PublicProduct with Omit, UpdateProduct with Partial — perfect!" };
    return { pass: false, title: "Utility types incomplete", feedback: 'Need: type PublicProduct = Omit<Product, "secret">; type UpdateProduct = Partial<PublicProduct>;' };
  },
  13: (code) => {
    const c = stripComments(code);
    const ok = [/function\s+Frozen\s*\(\s*\w+\s*:\s*Function\s*\)/i.test(c), /Object\.freeze\s*\(/i.test(c), /class\s+AppConfig/i.test(c), /@Frozen/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Decorators applied correctly!", feedback: "Frozen class decorator freezing prototype, applied with @Frozen!" };
    return { pass: false, title: "Decorator incomplete", feedback: "Need: function Frozen(constructor: Function), Object.freeze(), class AppConfig, @Frozen applied." };
  },
  14: (code) => {
    const c = stripComments(code);
    const ok = [/target\s*:\s*["']ES2021["']/i.test(c), /strict\s*:\s*true/i.test(c), /outDir\s*:\s*["']\.\/dist["']/i.test(c), /rootDir\s*:\s*["']\.\/src["']/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "tsconfig configured!", feedback: "ES2021, strict, ./dist, ./src — production-ready config!" };
    const missing = ['target: "ES2021"', "strict: true", 'outDir: "./dist"', 'rootDir: "./src"'].filter((_, i) => !ok[i]);
    return { pass: false, title: "Config incomplete", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
  15: (code) => {
    const c = stripComments(code);
    const ok = [/interface\s+CardProps\s*\{/i.test(c), /title\s*:\s*string/i.test(c), /description\s*:\s*string/i.test(c), /onClick\s*\?\s*:\s*\(\s*\)\s*=>\s*void/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "React component typed!", feedback: "CardProps with title, description, optional onClick — perfect!" };
    return { pass: false, title: "Component needs work", feedback: "Check: interface CardProps, title: string, description: string, onClick?: () => void." };
  },
  16: (code) => {
    const c = stripComments(code);
    const ok = [/interface\s+PostParams\s*\{/i.test(c), /id\s*:\s*string/i.test(c), /Request\s*<\s*PostParams\s*>/i.test(c), /res\s*:\s*Response/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Express route typed!", feedback: "PostParams, typed Request<PostParams>, res: Response — perfect!" };
    return { pass: false, title: "Route handler incomplete", feedback: "Check: PostParams interface, Request<PostParams>, Response." };
  },
  17: (code) => {
    const c = stripComments(code);
    const ok = [/type\s+IsArray\s*<\s*T\s*>/i.test(c), /T\s+extends\s+any\s*\[\]/i.test(c), /\?\s*["']yes["']\s*:\s*["']no["']/i.test(c), /type\s+Test1/i.test(c), /type\s+Test2/i.test(c)];
    if (ok.every(Boolean)) return { pass: true, title: "Conditional type mastered! All 17 lessons complete! 🎉", feedback: 'IsArray<T> uses T extends any[] ? "yes" : "no" — the correct pattern. You\'ve completed the entire TS Academy course!' };
    const missing = ["type IsArray<T>", "T extends any[] condition", '? "yes" : "no"', "type Test1", "type Test2"].filter((_, i) => !ok[i]);
    return { pass: false, title: "Conditional type needs work", feedback: `Missing:\n${missing.map((m) => "  • " + m).join("\n")}` };
  },
};

function submitCode() {
  const code = document.getElementById("code-editor").value.trim();
  const editor = document.getElementById("code-editor");
  const thinking = document.getElementById("thinking");
  const resultEl = document.getElementById("ai-result");
  const submitBtn = document.getElementById("submit-btn");
  if (!code || code.replace(/\/\/[^\n]*/g, "").trim() === "") { alert("Please write some code first!"); return; }
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
    const result = validator ? validator(code) : { pass: true, title: "Looks good!", feedback: "Code accepted!" };
    if (result.pass) {
      const id = activeLesson.id;
      const was = lessonProgress(id).code;
      progress[id] = { ...lessonProgress(id), code: true };
      if (!was) { points += 30; streak++; save(); updateStats(); }
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
  ${hasNext
    ? `<button class="btn btn-primary" onclick="openLesson(${LESSONS[nextIdx].id})">Next Lesson: ${LESSONS[nextIdx].title} [ → ]</button>`
    : `<div style="font-family:'JetBrains Mono',monospace;color:var(--cyan);font-size:1.1rem">(^_^) You completed all 17 lessons + all projects!</div>`
  }
  <button class="btn btn-ghost" onclick="goBack()">All Lessons</button>
</div>`;
  showView("complete");
}

function escHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
updateStats();
renderGrid();
showView("lessons");
