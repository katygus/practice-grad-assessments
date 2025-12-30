Repo 1: Callbacks & Higher-Order Functions
Theme: "The Party Planner"

Level 1: The Guest List Transformer
You're managing RSVPs for events. Create functions that:
1. Filter guests who confirmed (callback returns true/false)
2. Transform names to formal invitations (callback modifies each)
3. Sort by arrival time (callback compares two guests)
4. Find first VIP guest (callback identifies special criteria)

Guidance: Remember - callbacks are like giving instructions to helpers.
They don't do the work themselves, they tell OTHER functions what to do.

Level 2: The Event Coordinator

Build a scheduler that:
1. Has a function that accepts ANY action and a time delay
2. Chains events: when one finishes, it calls the next
3. Handles errors: if any event fails, trigger cleanup
4. Creates a "while RSVP continues" loop that stops when condition met

Guidance: Think of callbacks as "what to do next" slips of paper
you pass between functions. Async patterns start here!

Level 3: The Multi-Venue Manager

Coordinate across multiple locations:
1. Process each venue's guest list in parallel
2. Collect all results into one master list
3. Implement a priority system using callback ordering
4. Create a "fallback" system: if main callback fails, use backup

Guidance: This is where you practice avoiding "callback hell."
If you're nesting 3+ levels deep, there's usually a cleaner pattern.

How to use these practice files:

Start with empty function bodies - only read the comments and tests

Implement without looking at solutions - this forces you to recall patterns

Test incrementally - uncomment console.logs one at a time

When stuck: Write pseudocode first, then verbalize the solution to yourself

Compare approaches: After solving, think: "What's the time/space complexity? Could I optimize?"

The key is that the tests and structure are provided, so you can focus purely on implementing the algorithmic thinking without setup overhead. This mirrors the assessment experience!