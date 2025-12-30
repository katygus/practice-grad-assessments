Theme: "The Vault System"

Level 1: The Basic Safe

Create secure containers that:
1. Remember a secret number only accessible through specific methods
2. Track access attempts without exposing the count
3. Allow deposit/withdrawal but never go below zero
4. Create multiple independent safes from the same blueprint

Guidance: Closures = function + its birthplace environment.
The inner function REMEMBERS where it was born, even after
the outer function has finished running.

Level 2: The Bank Vault

Implement financial security:
1. Account generator with private balance and transaction history
2. Rate limiter: only allows X operations per time period
3. API key manager: validates keys without exposing storage
4. State machine: can only transition between specific states

Guidance: Useful pattern: Return an OBJECT with methods.
Each method shares access to the same private variables.
This is how you create true private state in JavaScript.

Level 3: The National Archives

Build sophisticated systems:
1. Cache system with expiration and size limits
2. Middleware chain builder (like Express!)
3. Event emitter with subscriber management
4. Module pattern: export only public API, keep internals private

Guidance: Closures are everywhere in real code:
- React hooks (useState, useEffect)
- Express middleware
- Event handlers
- Module systems
They're not just academic - they're practical encapsulation tools.


How to use these practice files:

Start with empty function bodies - only read the comments and tests

Implement without looking at solutions - this forces you to recall patterns

Test incrementally - uncomment console.logs one at a time

When stuck: Write pseudocode first, then verbalize the solution to yourself

Compare approaches: After solving, think: "What's the time/space complexity? Could I optimize?"

The key is that the tests and structure are provided, so you can focus purely on implementing the algorithmic thinking without setup overhead. This mirrors the assessment experience!