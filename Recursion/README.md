Theme: "The Matryoshka Doll Warehouse"

Level 1: Unpacking the Nested Boxes

Each doll contains smaller dolls. Write functions that:
1. Count total dolls in a nested set
2. Find the smallest doll (deepest nesting)
3. List all doll colors from outside to inside
4. Check if specific color exists anywhere in nesting

Guidance: Every recursive function needs:
1. Base case (when do I stop?)
2. Recursive case (how do I get closer to stopping?)
3. Return statement that combines current + recursive result

Level 2: The Assembly Line

Manufacture dolls in patterns:
1. Generate fractal-like patterns (branching recursion)
2. Build a "family tree" of doll sizes
3. Find all possible unpacking sequences
4. Optimize: memoize repeated calculations

Guidance: Draw the call stack on paper! Each recursive call
pauses the current function and starts a new one. When it returns,
it resumes where it left off WITH that new information.

Level 3: The Recursive Warehouse Search

Navigate a warehouse with sections containing subsections:
1. Find item by ID in deeply nested storage
2. Calculate total value with nested pricing
3. Transform nested structure to flat inventory list
4. Implement recursion with multiple recursive calls (tree traversal)

Guidance: If you get stuck, try the "Three Questions Method":
1. What's the smallest possible case? (base)
2. How do I reduce the problem? (recursive step)
3. How do I combine solutions? (return strategy)

How to use these practice files:

Start with empty function bodies - only read the comments and tests

Implement without looking at solutions - this forces you to recall patterns

Test incrementally - uncomment console.logs one at a time

When stuck: Write pseudocode first, then verbalize the solution to yourself

Compare approaches: After solving, think: "What's the time/space complexity? Could I optimize?"

The key is that the tests and structure are provided, so you can focus purely on implementing the algorithmic thinking without setup overhead. This mirrors the assessment experience!