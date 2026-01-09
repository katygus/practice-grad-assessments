## Assessment Practice Tips:

### For HOF/Callbacks/Closure problems:

Think: "What needs to remember state between calls?"

Pattern: Outer function sets up environment, returns inner function(s)

Watch for: When to throw errors vs return falsy values

### For nested structure traversal:

Always identify: Is it an array? Object? Mixed?

Decide: Pre-order, in-order, or post-order traversal?

Accumulate: In parameters or return values?

### For BST implementation:

add(): Compare, go left if smaller, right if larger, handle duplicates

depth(): Base case is null leaf (depth 0), add 1 for each level

Test with: Empty tree, single node, left-heavy, right-heavy, balanced

### Time Management Strategy:

Scan all problems first (5 min)

Implement easiest first (build confidence)

For tricky ones: Write pseudocode in comments first

Test incrementally: Add one feature, test, add next

Leave time for edge cases: Empty inputs, duplicates, boundaries

## Key Points to Remember:

For HOF/Closure problems: You're usually creating a function that sets up some "memory" (closure) and returns another function that uses that memory.

For nested traversal problems: Think "what type of thing am I looking at right now?" Object? Array? Simple value? Handle each differently.

For BST problems: Always start with the basic pattern:

    if (!this.left && value < current.value) { 
    // Add to left
    
    } else if (value < current.value) {
      // Go left and check again
      
    }
    
    // Similar for right

For Depth Calculation:

    // Pseudo-code:
    depth(node) {
      if (!node) return 0;
      leftDepth = depth(node.left);
      rightDepth = depth(node.right);
      return 1 + max(leftDepth, rightDepth);
    }

## How to Use These Tests: 

Start with empty function implementations - just the function/class shells

Run the file - you'll see all tests fail (that's expected!)

Pick one challenge at a time - start with the first one

Uncomment console.logs gradually - implement one test at a time

When a test passes, move to the next one

Don't look ahead - focus on making the current test pass

### Test Results Will Show:

✅ PASS when your implementation is correct

❌ FAIL when something's wrong

The test description tells you what's being tested

### Pro Tips:

Run tests often - after every small change

If a test fails, look at what it expected vs what you returned

Use console.log inside your functions to debug

Start with simple cases first (empty inputs, single items)

### When You're Stuck:

Write down what you know

Write down what you need to find out

Try the smallest possible example first

Draw pictures (especially for BST problems!)
