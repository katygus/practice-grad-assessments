/**
 * CHALLENGE SET 1: Higher-Order Functions, Callbacks, and Closure
 */

/**
 * Challenge 1: The Configuration Builder
 * 
 * You're building a tool to create settings for an app.
 * Start with some default settings.
 * Let the user change settings one by one.
 * Chain the changes together: .setTimeout(5000).setRetries(3)
 * When done, call .build() to get the final settings.
 * If someone tries to set a timeout of -100, throw an error.
 */
function createConfigBuilder(defaults) {
   // Your code here
  // Start with the defaults
  // Return an object with methods like setTimeout, setRetries, etc.
  // Each method should return the same object so you can chain them
  // build() returns the final configuration
  // Throw errors for impossible values (like negative timeouts)
}

// Tests for Challenge 1
// console.log("=== Challenge 1 Tests ===");
// const builder = createConfigBuilder({ timeout: 1000, retries: 3 });
// const config = builder
//   .setTimeout(5000)
//   .setRetries(5)
//   .setLogger(true)
//   .build();
// console.log("Test 1 - Basic config:", 
//   config.timeout === 5000 && config.retries === 5 && config.logger === true 
//   ? "PASS" : "FAIL");

// const builder2 = createConfigBuilder({ timeout: 1000 });
// const config2 = builder2
//   .setRetries(3)
//   .build();
// console.log("Test 2 - Partial config:", 
//   config2.timeout === 1000 && config2.retries === 3 
//   ? "PASS" : "FAIL");

// console.log("Test 3 - Error handling:");
// try {
//   builder.setTimeout(-100);
//   console.log("FAIL - Should have thrown error");
// } catch (e) {
//   console.log("PASS - Caught error:", e.message || e);
// }

/**
 * Challenge 2: The Access Control Gatekeeper
 * 
 * You're building security for different types of users.
 * You have rules: admins can do everything, users can only read.
 * Create a gatekeeper that remembers these rules.
 * When someone asks "Can user Bob delete this?", check the rules.
 * If not allowed, throw an error.
 * Each user gets their own "access checker" function.
 */
function createGatekeeper(permissions) {
  // Your code here
  // permissions = {admin: ['read','write','delete'], user: ['read']}
  // Return an object with a method like forUser('admin')
  // That method returns a function that checks if action is allowed
  // Example: adminAccess('delete') → true, userAccess('delete') → error

}

// Tests for Challenge 2
// console.log("\n=== Challenge 2 Tests ===");
// const gatekeeper = createGatekeeper({
//   admin: ['read', 'write', 'delete'],
//   user: ['read'],
//   guest: []
// });

// const userAccess = gatekeeper.forUser('user');
// const adminAccess = gatekeeper.forUser('admin');
// const guestAccess = gatekeeper.forUser('guest');

// console.log("Test 1 - User can read:", userAccess('read') === true ? "PASS" : "FAIL");

// console.log("Test 2 - User cannot write:");
// try {
//   userAccess('write');
//   console.log("FAIL - Should have thrown error");
// } catch (e) {
//   console.log("PASS - Caught error");
// }

// console.log("Test 3 - Admin can delete:", adminAccess('delete') === true ? "PASS" : "FAIL");

// console.log("Test 4 - Guest cannot read:");
// try {
//   guestAccess('read');
//   console.log("FAIL - Should have thrown error");
// } catch (e) {
//   console.log("PASS - Caught error");
// }

/**
 * Challenge 3: The Validation Pipeline
 * 
 * You're checking if user data is valid before saving it.
 * Create a pipeline of checks (like an assembly line).
 * First check: has a name? Throw error if not.
 * Second check: is 18 or older? Throw error if not.
 * Third check: has valid email? Throw error if not.
 * If any check fails, stop there and return the error.
 * If all pass, return the valid data.
 */
function createValidatorPipeline() {
  // Your code here
  // Start with an empty list of validators
  // Add validators one by one: .add(checkFunction)
  // When validating data, run through validators in order
  // First validator that throws an error → stop and return error
  // All pass → return the data
}
  

// Tests for Challenge 3
// console.log("\n=== Challenge 3 Tests ===");
// const validateUser = createValidatorPipeline()
//   .add(val => {
//     if (!val.name) throw 'Name is required';
//   })
//   .add(val => {
//     if (val.age < 18) throw 'Must be 18 or older';
//   })
//   .add(val => {
//     if (!val.email.includes('@')) throw 'Invalid email';
//   });

// const goodUser = { name: 'Alice', age: 25, email: 'alice@test.com' };
// const badAgeUser = { name: 'Bob', age: 16, email: 'bob@test.com' };
// const noNameUser = { age: 30, email: 'test@test.com' };

// console.log("Test 1 - Valid user:", 
//   validateUser(goodUser).valid === true ? "PASS" : "FAIL");

// console.log("Test 2 - Underage user:", 
//   validateUser(badAgeUser).error === 'Must be 18 or older' ? "PASS" : "FAIL");

// console.log("Test 3 - Missing name:", 
//   validateUser(noNameUser).error === 'Name is required' ? "PASS" : "FAIL");

/**
 * Challenge 4: The Feature Flag System
 * 
 * Your app has new features that might be on or off.
 * Some users get new features, some don't.
 * Create a system that checks if a feature is on.
 * If feature is on, use the new code.
 * If feature is off, use the old code (or throw error).
 * The system should remember which features are on/off.
 */
function createFeatureFlags(flags) {
 // Your code here
  // flags = {newUI: true, analytics: false}
  // Return an object with two methods:
  // wrap('newUI', newCode, oldCode) → runs newCode if on, oldCode if off
  // require('analytics', code) → runs code if on, throws error if off
}

// Tests for Challenge 4
// console.log("\n=== Challenge 4 Tests ===");
// const features = createFeatureFlags({
//   newUI: true,
//   analytics: false,
//   export: true
// });

// const renderUI = features.wrap(
//   'newUI',
//   () => 'New UI rendered',
//   () => 'Old UI rendered'
// );

// console.log("Test 1 - Enabled feature:", 
//   renderUI() === 'New UI rendered' ? "PASS" : "FAIL");

// const renderExport = features.wrap(
//   'export',
//   () => 'Export enabled',
//   () => 'Export disabled'
// );

// console.log("Test 2 - Another enabled feature:", 
//   renderExport() === 'Export enabled' ? "PASS" : "FAIL");

// console.log("Test 3 - Disabled feature (require):");
// try {
//   const trackEvent = features.require('analytics', () => 'Event tracked');
//   trackEvent();
//   console.log("FAIL - Should have thrown error");
// } catch (e) {
//   console.log("PASS - Caught error:", e.message || e);
// }

/**
 * Challenge 5: The Memoized Calculator
 * 
 * Build a calculator that remembers answers it already computed.
 * If you ask "5 + 3" twice, it should compute once, remember the answer.
 * Different operations (add, multiply) have separate memories.
 * Throw errors for impossible math (like dividing by zero).
 */
function createMemoizedCalculator() {
// Your code here
  // Remember past calculations in some storage
  // When asked "add(5, 3)":
  // 1. Check if we've done this exact calculation before
  // 2. If yes, return remembered answer
  // 3. If no, calculate, remember, then return
  // Handle different operations: add, subtract, multiply, divide
  // Throw errors for bad inputs}

// Tests for Challenge 5
// console.log("\n=== Challenge 5 Tests ===");
// const calc = createMemoizedCalculator();

// console.log("Test 1 - First calculation:", 
//   calc.add(5, 3) === 8 ? "PASS" : "FAIL");

// console.log("Test 2 - Second call (should be cached):", 
//   calc.add(5, 3) === 8 ? "PASS" : "FAIL");

// console.log("Test 3 - Different calculation:", 
//   calc.multiply(4, 2) === 8 ? "PASS" : "FAIL");

// console.log("Test 4 - Division by zero:");
// try {
//   calc.divide(10, 0);
//   console.log("FAIL - Should have thrown error");
// } catch (e) {
//   console.log("PASS - Caught error");
// }

/**
 * CHALLENGE SET 2: Nested Structure Traversal and Accumulation
 * 
 * These challenges are about:
 * 1. Going through nested objects (objects inside objects)
 * 2. Collecting information as you go
 * 3. Making decisions based on what you find
 */

/**
 * Challenge 6: The Inventory Aggregator
 * 
 * You have a warehouse with aisles, shelves, boxes, and items.
 * Items have types ('widget', 'gadget') and counts (10, 5, etc.).
 * Go through the entire warehouse and add up counts.
 * Only count items that match a condition (like "type === 'widget'").
 * Return the total count.
 */
function aggregateInventory(warehouse, condition) {
  // Your code here
  // warehouse = {aisles: [{shelves: [{boxes: [{items: [...]}]}]}]}
  // Go through aisles → shelves → boxes → items
  // For each item, check: condition(item) → true/false?
  // If true, add item.count to total
  // Return total
}

// Tests for Challenge 6
// console.log("\n=== Challenge 6 Tests ===");
// const warehouse = {
//   name: 'Main',
//   aisles: [
//     {
//       id: 'A1',
//       shelves: [
//         {
//           level: 1,
//           boxes: [
//             { 
//               items: [
//                 { type: 'widget', count: 10 }, 
//                 { type: 'gadget', count: 5 }
//               ] 
//             },
//             { 
//               items: [
//                 { type: 'widget', count: 3 }
//               ] 
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 'A2',
//       shelves: [
//         {
//           level: 1,
//           boxes: [
//             {
//               items: [
//                 { type: 'gadget', count: 7 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// // Count all widgets
// const widgetCount = aggregateInventory(warehouse, item => item.type === 'widget');
// console.log("Test 1 - Count widgets:", widgetCount === 13 ? "PASS" : "FAIL");

// // Count items with count > 5
// const largeItems = aggregateInventory(warehouse, item => item.count > 5);
// console.log("Test 2 - Count large items:", largeItems === 17 ? "PASS" : "FAIL"); // 10 + 7

// // Count all items (no condition)
// const allItems = aggregateInventory(warehouse, () => true);
// console.log("Test 3 - Count all items:", allItems === 25 ? "PASS" : "FAIL"); // 10 + 5 + 3 + 7

/**
 * Challenge 7: The Configuration Flattener
 * 
 * You have settings nested inside objects.
 * Example: {server: {port: 3000, host: 'localhost'}}
 * You want to flatten this to: {'server.port': 3000, 'server.host': 'localhost'}
 * Go through all levels, use dots to show the path.
 * Handle arrays too: cors: ['site1', 'site2'] becomes 'cors.0': 'site1', 'cors.1': 'site2'
 */
function flattenWithPaths(config, prefix = '') {
  // Your code here
  // Look at each key in the object
  // If value is simple (number, string, boolean): save with path
  // If value is array: add index numbers to path (cors.0, cors.1)
  // If value is object: go deeper, add key to path
  // Build new flat object as you go
}

// Tests for Challenge 7
// console.log("\n=== Challenge 7 Tests ===");
// const config = {
//   server: {
//     port: 3000,
//     host: 'localhost',
//     cors: ['https://example.com', 'https://test.com']
//   },
//   database: {
//     url: 'mongodb://localhost:27017',
//     options: { useNewUrlParser: true }
//   }
// };

// const flattened = flattenWithPaths(config);
// console.log("Test 1 - Basic keys:", 
//   flattened['server.port'] === 3000 && 
//   flattened['server.host'] === 'localhost' ? "PASS" : "FAIL");

// console.log("Test 2 - Array handling:", 
//   flattened['server.cors.0'] === 'https://example.com' && 
//   flattened['server.cors.1'] === 'https://test.com' ? "PASS" : "FAIL");

// console.log("Test 3 - Nested object:", 
//   flattened['database.options.useNewUrlParser'] === true ? "PASS" : "FAIL");

// console.log("Test 4 - Total keys:", 
//   Object.keys(flattened).length === 6 ? "PASS" : "FAIL");

/**
 * Challenge 8: The Dependency Collector
 * 
 * You have software modules that depend on other modules.
 * Module A needs B and C, B needs D, C needs nothing.
 * List all modules needed, in the right order.
 * Parents before children, but keep sibling order.
 * No duplicates in final list.
 */
function collectDependencies(moduleTree) {
  // Your code here
  // Start with module itself
  // Then for each dependency, list it
  // Then for each of those, list their dependencies
  // Keep track of what you've already listed
  // Make sure parent comes before child
  // Example: A → [B, C] → B needs D → Result: A, B, C, D
}

// Tests for Challenge 8
// console.log("\n=== Challenge 8 Tests ===");
// const modules = {
//   name: 'app',
//   dependencies: [
//     {
//       name: 'ui',
//       dependencies: [
//         { name: 'buttons', dependencies: [] },
//         { name: 'forms', dependencies: [{ name: 'validation', dependencies: [] }] }
//       ]
//     },
//     { name: 'utils', dependencies: [] }
//   ]
// };

// const deps = collectDependencies(modules);
// console.log("Test 1 - Contains all deps:", 
//   deps.length === 5 ? "PASS" : "FAIL"); // app, ui, utils, buttons, forms, validation

// console.log("Test 2 - Correct order (parents before children):");
// const appIndex = deps.indexOf('app');
// const uiIndex = deps.indexOf('ui');
// const buttonsIndex = deps.indexOf('buttons');
// const formsIndex = deps.indexOf('forms');
// const validationIndex = deps.indexOf('validation');

// const orderValid = appIndex < uiIndex && 
//                    uiIndex < buttonsIndex && 
//                    uiIndex < formsIndex &&
//                    formsIndex < validationIndex;
// console.log(orderValid ? "PASS" : "FAIL");

/**
 * Challenge 9: The Permission Validator
 * 
 * You have resources (files, folders) with required permissions.
 * Example: 'read_docs' permission needed for docs folder.
 * User has list of permissions they have.
 * Go through resources, check if user has permission at each level.
 * If user has permission for folder, check contents too.
 * Return list of resources user can access.
 */
function findAccessibleResources(resourceTree, userPermissions, currentPath = []) {
 // Your code here
  // Check: does user have permission for this resource?
  // If yes: add to list, then check children
  // If no: skip this resource and all children
  // Build list as you go
  // Return array of resource names user can access
}

// Tests for Challenge 9
// console.log("\n=== Challenge 9 Tests ===");
// const resources = {
//   name: 'root',
//   children: [
//     {
//       name: 'docs',
//       permission: 'read_docs',
//       children: [
//         { name: 'api.md', permission: 'read_api' },
//         { name: 'guide.pdf', permission: 'read_guides' }
//       ]
//     },
//     {
//       name: 'settings',
//       permission: 'admin',
//       children: []
//     },
//     {
//       name: 'public',
//       permission: null,  // No permission required
//       children: [
//         { name: 'welcome.txt', permission: null }
//       ]
//     }
//   ]
// };

// const user1 = { permissions: ['read_docs', 'read_api'] };
// const accessible1 = findAccessibleResources(resources, user1.permissions);
// console.log("Test 1 - User with partial access:", 
//   accessible1.includes('docs') && 
//   accessible1.includes('api.md') && 
//   !accessible1.includes('guide.pdf') && 
//   accessible1.includes('public') &&
//   accessible1.includes('welcome.txt') ? "PASS" : "FAIL");

// const user2 = { permissions: ['admin'] };
// const accessible2 = findAccessibleResources(resources, user2.permissions);
// console.log("Test 2 - Admin user:", 
//   accessible2.includes('settings') && 
//   !accessible2.includes('docs') && 
//   accessible2.includes('public') ? "PASS" : "FAIL");

// const user3 = { permissions: [] };
// const accessible3 = findAccessibleResources(resources, user3.permissions);
// console.log("Test 3 - No permissions user:", 
//   accessible3.includes('public') && 
//   accessible3.includes('welcome.txt') && 
//   accessible3.length === 2 ? "PASS" : "FAIL");

/**
 * Challenge 10: The Template Variable Extractor
 * 
 * You have email templates with placeholders like {{user.name}}.
 * Templates can be strings or nested in objects.
 * Go through everything, find all {{...}} patterns.
 * Extract just the variable names (user.name, not the braces).
 * Return unique variable names (no duplicates).
 */
function extractTemplateVariables(templates) {
  // Your code here
  // Look through object/array structure
  // When you find a string, look for {{...}}
  // Extract what's between the braces
  // Add to collection if not already there
  // Return array of unique variable names
}

// Tests for Challenge 10
// console.log("\n=== Challenge 10 Tests ===");
// const emailTemplates = {
//   welcome: {
//     subject: 'Welcome {{user.name}}!',
//     body: {
//       header: 'Hello {{user.name}},',
//       content: 'Your account was created on {{date}}. Contact: {{support.email}}',
//       footer: 'Team {{company.name}}'
//     }
//   },
//   reminder: 'Don\'t forget about {{event.name}} on {{event.date}}',
//   plain: 'No variables here',
//   nested: {
//     deep: {
//       deeper: 'Hello {{deep.user}} from {{deep.location}}'
//     }
//   }
// };

// const variables = extractTemplateVariables(emailTemplates);
// console.log("Test 1 - Contains expected variables:", 
//   variables.includes('user.name') && 
//   variables.includes('date') && 
//   variables.includes('support.email') && 
//   variables.includes('company.name') && 
//   variables.includes('event.name') && 
//   variables.includes('event.date') && 
//   variables.includes('deep.user') && 
//   variables.includes('deep.location') ? "PASS" : "FAIL");

// console.log("Test 2 - No duplicates:", 
//   new Set(variables).size === variables.length ? "PASS" : "FAIL");

// console.log("Test 3 - Correct count:", 
//   variables.length === 8 ? "PASS" : "FAIL");

/**
 * CHALLENGE SET 3: Binary Search Trees
 * 
 * These challenges are about:
 * 1. Adding values to a BST in the right place
 * 2. Finding the deepest path (how far down the tree goes)
 * 3. Adding extra features to a basic BST
 */

/**
 * Challenge 11: The BST with Value Tracking
 * 
 * Basic BST: add values, smaller values go left, larger go right.
 * ADD THESE FEATURES:
 * 1. Track smallest and largest values in the tree
 * 2. Count how many times each value appears (handle duplicates)
 * 3. Find value closest to a given number (like closest to 13)
 * 4. Find deepest path from root to leaf (how many steps down)
 */

class EnhancedBST {
  constructor() {
    // Your code here
    // Set up root node
    // Track min, max, counts of values
  }

  add(value) {
 // Your code here
    // Start at root
    // Compare: if value < current, go left; if >, go right; if =, handle duplicate
    // Keep going until you find empty spot
    // Update min/max if needed
    // Count how many times you've seen this value
  }

  depth() {
    // Your code here
    // Find longest path from root to any leaf
    // Example: root → left → left → leaf = depth 3
    // Empty tree: depth 0, single node: depth 1
  }

  getMin() {
    // Your code here
  }

  getMax() {
    // Your code here
  }

  count(value) {
    // Your code here
  }

  findClosest(target) {
    // Your code here
  }
}

// Tests for Challenge 11
// console.log("\n=== Challenge 11 Tests ===");
// const bst = new EnhancedBST();
// [10, 5, 15, 5, 3, 7, 12, 18].forEach(val => bst.add(val));

// console.log("Test 1 - Depth:", bst.depth() === 3 ? "PASS" : "FAIL"); // 10 → 5 → 3 OR 10 → 15 → 18

// console.log("Test 2 - Min value:", bst.getMin() === 3 ? "PASS" : "FAIL");

// console.log("Test 3 - Max value:", bst.getMax() === 18 ? "PASS" : "FAIL");

// console.log("Test 4 - Count duplicates:", bst.count(5) === 2 ? "PASS" : "FAIL");

// console.log("Test 5 - Count non-existent:", bst.count(999) === 0 ? "PASS" : "FAIL");

// console.log("Test 6 - Find closest to 13:");
// const closest = bst.findClosest(13);
// console.log(closest === 12 || closest === 15 ? "PASS" : "FAIL");

// console.log("Test 7 - Find closest to 2:", bst.findClosest(2) === 3 ? "PASS" : "FAIL");

/**
 * Challenge 12: The Balanced BST Checker
 * 
 * BST where you check if tree is balanced.
 * Balanced = left and right sides are about same depth (difference ≤ 1).
 * add() should work normally.
 * isBalanced() tells you if tree is balanced.
 * depth() finds deepest path.
 */
class BalancedBST {
  constructor() {
    // Your code here
  }

  add(value) {
    // Your code here
    // Add like normal BST

  }

  depth() {
    // Your code here
    // Find deepest path

  }

  isBalanced() {
    // Your code here
    // Check left subtree depth
    // Check right subtree depth
    // If difference > 1, return false
    // Otherwise return true
  }
}

// Tests for Challenge 12
// console.log("\n=== Challenge 12 Tests ===");
// const balBst = new BalancedBST();
// [5, 3, 7].forEach(val => balBst.add(val));

// console.log("Test 1 - Small balanced tree:");
// console.log("Depth:", balBst.depth() === 2 ? "PASS" : "FAIL");
// console.log("Is balanced:", balBst.isBalanced() === true ? "PASS" : "FAIL");

// balBst.add(2);
// balBst.add(1);

// console.log("Test 2 - Now unbalanced:");
// console.log("Depth:", balBst.depth() === 4 ? "PASS" : "FAIL"); // 5 → 3 → 2 → 1
// console.log("Is balanced:", balBst.isBalanced() === false ? "PASS" : "FAIL");

// // Create perfectly balanced tree
// const perfectBst = new BalancedBST();
// [8, 4, 12, 2, 6, 10, 14].forEach(val => perfectBst.add(val));
// console.log("Test 3 - Perfectly balanced:");
// console.log("Depth:", perfectBst.depth() === 3 ? "PASS" : "FAIL");
// console.log("Is balanced:", perfectBst.isBalanced() === true ? "PASS" : "FAIL");

/**
 * Challenge 13: The Range BST
 * 
 * BST that's good at answering "what values are between 5 and 12?"
 * add() works normally.
 * rangeSearch(min, max) returns all values between min and max.
 * rangeCount(min, max) just counts how many values in that range.
 * depth() finds deepest path.
 */

class RangeBST {
  constructor() {
    // Your code here
  }

  add(value) {
    // Your code here
  }

  depth() {
    // Your code here
  }

  rangeSearch(min, max) {
    // Your code here
    // Go through tree
    // Collect values where: min ≤ value ≤ max
    // Return array of those values
  }

  rangeCount(min, max) {
    // Your code here
    // Same as rangeSearch but just count, don't collect values

  }
}

// Tests for Challenge 13
// console.log("\n=== Challenge 13 Tests ===");
// const rangeBst = new RangeBST();
// [10, 5, 15, 3, 7, 12, 18].forEach(val => rangeBst.add(val));

// console.log("Test 1 - Depth:", rangeBst.depth() === 3 ? "PASS" : "FAIL");

// const range1 = rangeBst.rangeSearch(7, 15);
// console.log("Test 2 - Range search (7-15):");
// const expected1 = [7, 10, 12, 15];
// console.log(range1.length === 4 && range1.every((val, i) => val === expected1[i]) ? "PASS" : "FAIL");

// const range2 = rangeBst.rangeSearch(1, 4);
// console.log("Test 3 - Range search (1-4):", 
//   range2.length === 1 && range2[0] === 3 ? "PASS" : "FAIL");

// console.log("Test 4 - Range count (5-12):", 
//   rangeBst.rangeCount(5, 12) === 4 ? "PASS" : "FAIL"); // 5, 7, 10, 12

// console.log("Test 5 - Range count (20-30):", 
//   rangeBst.rangeCount(20, 30) === 0 ? "PASS" : "FAIL");

/**
 * Challenge 14: The BST with Path Tracking
 * 
 * BST that remembers the path taken to add each value.
 * Example: add(10) → path [10]
 * add(5) → path [10, 5] (start at 10, go left to 5)
 * add(15) → path [10, 15] (start at 10, go right to 15)
 * Also find deepest path in whole tree.
 */
class PathTrackingBST {
  constructor() {
    // Your code here
    // Remember all add paths somewhere
  }

  add(value) {
    // Your code here
    // Start at root
    // Record each step: [root, next, next, ...] until you add value
    // Save this path
    // Return the path
  }

  depth() {
    // Your code here
  }

  getAddHistory() {
    // Your code here
    // Return array of all paths recorded during adds
  }

  getDeepestPath() {
    // Your code here
    // Find the longest path from root to any leaf
    // This might be different from add paths!
  }
}

// Tests for Challenge 14
// console.log("\n=== Challenge 14 Tests ===");
// const pathBst = new PathTrackingBST();

// console.log("Test 1 - Add paths:");
// const path1 = pathBst.add(10);
// console.log("Add 10:", JSON.stringify(path1) === JSON.stringify([10]) ? "PASS" : "FAIL");

// const path2 = pathBst.add(5);
// console.log("Add 5:", JSON.stringify(path2) === JSON.stringify([10, 5]) ? "PASS" : "FAIL");

// const path3 = pathBst.add(15);
// console.log("Add 15:", JSON.stringify(path3) === JSON.stringify([10, 15]) ? "PASS" : "FAIL");

// const path4 = pathBst.add(3);
// console.log("Add 3:", JSON.stringify(path4) === JSON.stringify([10, 5, 3]) ? "PASS" : "FAIL");

// console.log("Test 2 - Depth:", pathBst.depth() === 3 ? "PASS" : "FAIL");

// console.log("Test 3 - History length:", 
//   pathBst.getAddHistory().length === 4 ? "PASS" : "FAIL");

// const deepest = pathBst.getDeepestPath();
// console.log("Test 4 - Deepest path:", 
//   deepest.length === 3 && deepest[0] === 10 && deepest[2] === 3 ? "PASS" : "FAIL");

/**
 * Challenge 15: The BST Validation Wrapper
 * 
 * Create a BST that checks values before adding them.
 * Someone else gives you a validation function.
 * Before adding any value, run it through validator.
 * If validator throws error, don't add the value, throw the error.
 * If validator says OK, add the value.
 */
function createValidatedBST(validator) {
  // Your code here
  // validator is a function that takes a value
  // Returns true if value is OK, throws error if not
  // Wrap the BST so every add() checks validator first
  // If validator throws, don't add, re-throw the error
  // If validator says OK, add to BST normally
}

// Tests for Challenge 15
// console.log("\n=== Challenge 15 Tests ===");
// const numberValidator = val => {
//   if (typeof val !== 'number') throw 'Value must be a number';
//   if (val < 0) throw 'Value must be positive';
//   return true;
// };

// const validatedBst = createValidatedBST(numberValidator);
// validatedBst.add(10);
// validatedBst.add(5);

// console.log("Test 1 - Valid adds work:", 
//   validatedBst.depth() === 2 ? "PASS" : "FAIL");

// console.log("Test 2 - Negative number:");
// try {
//   validatedBst.add(-5);
//   console.log("FAIL - Should have thrown error");
// } catch (e) {
//   console.log(e === 'Value must be positive' ? "PASS" : "FAIL");
// }

// console.log("Test 3 - Non-number:");
// try {
//   validatedBst.add('not a number');
//   console.log("FAIL - Should have thrown error");
// } catch (e) {
//   console.log(e === 'Value must be a number' ? "PASS" : "FAIL");
// }

/**
 * Challenge 16: The BST Serializer
 * 
 * BST that can save itself to an array and load from array.
 * serialize() → convert tree to array that keeps the structure.
 * deserialize(array) → build tree from array.
 * The array should let you rebuild exact same tree.
 * depth() should work normally.
 */

class SerializableBST {
  constructor() {
    // Your code here
  }

  add(value) {
    // Your code here
  }

  depth() {
    // Your code here
  }

  serialize() {
    // Your code here
    // Convert tree to array
    // Common way: level by level, use null for empty spots
    // Example: [8, 3, 10, 1, 6, null, 14] for tree with root 8, left 3, right 10, etc.
  }

  static deserialize(array) {
    // Your code here
    // Build tree from array
    // First element is root
    // For element at index i: left child at 2i+1, right at 2i+2
    // null means no child there
  }
}

// Tests for Challenge 16
// console.log("\n=== Challenge 16 Tests ===");
// const serialBst = new SerializableBST();
// [8, 3, 10, 1, 6, 14, 4, 7, 13].forEach(val => serialBst.add(val));

// console.log("Test 1 - Original depth:", serialBst.depth() === 4 ? "PASS" : "FAIL");

// const serialized = serialBst.serialize();
// console.log("Test 2 - Serialization format:");
// console.log("Is array:", Array.isArray(serialized) ? "PASS" : "FAIL");
// console.log("First element is root:", serialized[0] === 8 ? "PASS" : "FAIL");

// const newBst = SerializableBST.deserialize(serialized);
// console.log("Test 3 - Deserialized depth:", 
//   newBst.depth() === 4 ? "PASS" : "FAIL");

// // Add one more to both to ensure structure maintained
// serialBst.add(15);
// newBst.add(15);
// console.log("Test 4 - Structures match after adding:", 
//   serialBst.depth() === newBst.depth() ? "PASS" : "FAIL");

// console.log("\n=== All Tests Complete ===");
