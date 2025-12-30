Theme: "The City Infrastructure"

Level 1: The Neighborhood (Arrays & Objects)

Model a small town:
1. House numbering system (arrays for street addresses)
2. Resident directory (objects for person data)
3. Family trees (nested structures)
4. Moving day: efficiently relocate blocks of houses

Guidance: Arrays = ordered, index-based access.
Objects = unordered, key-based access.
Choose based on: Do I need order? Do I need fast key lookup?

Level 2: The Public Transit (Linked Lists & Queues)

Design transportation:
1. Bus routes as linked lists (stops connected in sequence)
2. Passenger queues at stops
3. Circular routes (last connects to first)
4. Express vs local (skip certain nodes)

Guidance: Linked lists = train cars. Each knows about the next.
Queues = lines at coffee shop (first in, first out).
Stacks = stack of plates (last in, first out).

Level 3: The City Planning (Trees & Graphs)

Urban development:
1. City hierarchy: Mayor → Districts → Neighborhoods (tree)
2. Road network between locations (graph)
3. Emergency response routing (shortest path)
4. Zoning regulations (search constraints)

Guidance: Trees = organizational charts, file systems.
Graphs = social networks, maps, dependencies.
If it has parent-child: probably tree. If connections can be complex: graph.

Level 4: The Emergency Services (Hash Maps & Optimization)

Critical systems:
1. Quick citizen lookup by ID (hash map)
2. Dispatch priority system (priority queue)
3. Resource allocation across districts
4. Cache recent emergency locations

Guidance: Hash maps = phonebook. Jump straight to entry.
Trade-off: Speed vs memory. Sometimes arrays are fine!
Big O isn't just theory - it's "how long will citizens wait?"

How to use these practice files:

Start with empty function bodies - only read the comments and tests

Implement without looking at solutions - this forces you to recall patterns

Test incrementally - uncomment console.logs one at a time

When stuck: Write pseudocode first, then verbalize the solution to yourself

Compare approaches: After solving, think: "What's the time/space complexity? Could I optimize?"

The key is that the tests and structure are provided, so you can focus purely on implementing the algorithmic thinking without setup overhead. This mirrors the assessment experience!