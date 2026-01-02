/**
 * Challenge 1: The Binary Tree Tracker
 *
 * Write a recursive function that counts how many nodes in a binary tree
 * have a value greater than the given threshold.
 */

let count = 0;
function countNodesAbove(root, threshold) {
  
  if (root === undefined) return;

  if (root.value <= threshold) {
    if (root.right) {
      countNodesAbove(root.right, threshold);
    }
  }

  if (root.value > threshold) {
    count++;

    if (root.left) {
      countNodesAbove(root.left, threshold);
    }
    if (root.right) {
      countNodesAbove(root.right, threshold);
    }
  } 
 
  return count;
}

// Test tree structure:
const tree = {
  value: 10,
  left: { value: 5, left: { value: 3 }, right: { value: 7 } },
  right: { value: 15, left: { value: 12 }, right: { value: 18 } },
};
// console.log(countNodesAbove(tree, 10)); // -> 3 (10, 15, 12, 18)

/**
 * Challenge 2: The Directory Size Calculator
 *
 * Write a recursive function that calculates total size of all files in nested directories.
 * Files have size property, directories have contents array.
 */
/* NOTES
Problem: This only works if the contents array has no more than 2 elements. When I add a third, it reaches the base before going into the 3rd element
*/
function calculateTotalSize(directory, totalCount = 0) {
  
  // BASE?: if the object has a key of size, add it to totalCount 
  if (directory.hasOwnProperty('size')) {
    totalCount += directory.size;
    console.log(totalCount);
    return totalCount;
  }
  // if the object hasOwnProperty of contents AND if the first element/object of contents array has a key of size, add it to totalCount
  else if (directory.hasOwnProperty('contents') && directory.contents[0].hasOwnProperty('size')) {
    totalCount += directory.contents[0].size;
    const newDirectory = directory.contents.slice(1)[0];
    console.log(newDirectory);
    return calculateTotalSize(newDirectory, totalCount);
  }
  // if the object hasOwnProperty of contents AND the first element/object hasOwnProperty of contents, recurse passing in the first element/object
  else if (directory.hasOwnProperty('contents') && directory.contents[0].hasOwnProperty('contents')) {
    const newDirectory = directory.contents.slice(1)[0];
    return calculateTotalSize(newDirectory, totalCount);
  } else {
  console.log(totalCount);
  return totalCount;
  }
}

const fileSystem = {
  name: 'root',
  contents: [
    { name: 'file1.txt', size: 100 },
    {
      name: 'folder1',
      contents: [
        { name: 'file2.txt', size: 200 },
        { name: 'file3.txt', size: 150 },
        { name: 'file4.txt', size: 120}
      ]
    }
  ]
};
console.log(calculateTotalSize(fileSystem)); // -> 450

/**
 * Challenge 3: The Permutation Generator with Constraints
 *
 * Write a recursive function that generates all permutations of an array
 * but skips permutations where adjacent elements are equal.
 */

function generateValidPermutations(arr) {}

// console.log(generateValidPermutations([1, 2, 2]));
// -> [[1, 2, 2], [2, 1, 2], [2, 2, 1]]
// Note: All have adjacent 2s, so none skipped in this case

/**
 * Challenge 4: The Maze Solver
 *
 * Write a recursive function that finds a path through a 2D maze.
 * Return array of [row, col] coordinates from start to end.
 * 0 = open path, 1 = wall, can only move up/down/left/right.
 */

function solveMaze(maze, start, end) {}

// const maze = [
//   [0, 1, 0, 0],
//   [0, 0, 0, 1],
//   [1, 0, 1, 0],
//   [0, 0, 0, 0]
// ];
// console.log(solveMaze(maze, [0,0], [3,3]));
// -> Possible path: [[0,0], [1,0], [1,1], [1,2], [2,2], [3,2], [3,3]]

/**
 * Challenge 5: The Expression Tree Evaluator
 *
 * Write a recursive function that evaluates a mathematical expression tree.
 * Nodes can be operators (+, -, *, /) or numbers.
 */

function evaluateExpression(node) {}

// const expressionTree = {
//   operator: '+',
//   left: {
//     operator: '*',
//     left: 3,
//     right: 4
//   },
//   right: {
//     operator: '-',
//     left: 10,
//     right: 2
//   }
// };
// console.log(evaluateExpression(expressionTree)); // -> (3*4) + (10-2) = 20

/**
 * Challenge 6: The Nested Object Key Finder
 *
 * Write a recursive function that finds all values for a given key
 * at any nesting level in an object.
 */

function findAllValues(obj, targetKey) {}

// const nestedObj = {
//   a: 1,
//   b: {
//     a: 2,
//     c: { a: 3, d: 4 }
//   },
//   e: { f: 5 }
// };
// console.log(findAllValues(nestedObj, 'a')); // -> [1, 2, 3]

/**
 * Challenge 7: The Binary Search Tree Validator
 *
 * Write a recursive function that checks if a binary tree is a valid BST.
 * For each node, all left descendants < node.value, all right descendants > node.value.
 */

function isValidBST(root, min = -Infinity, max = Infinity) {}

// const validBST = {
//   value: 10,
//   left: { value: 5, left: { value: 2 }, right: { value: 7 } },
//   right: { value: 15, left: { value: 12 }, right: { value: 20 } }
// };
// const invalidBST = {
//   value: 10,
//   left: { value: 5, left: { value: 2 }, right: { value: 15 } }, // 15 > 10!
//   right: { value: 20 }
// };
// console.log(isValidBST(validBST)); // -> true
// console.log(isValidBST(invalidBST)); // -> false

/**
 * Challenge 8: The Recursive Memoization Wrapper
 *
 * Write a function `memoize` that takes a recursive function and returns
 * a memoized version that caches results for given arguments.
 */

function memoize(recursiveFn) {
  // Your code here
}

// Test Fibonacci:
// const fib = memoize(function(n) {
//   if (n <= 1) return n;
//   return fib(n-1) + fib(n-2);
// });
// console.log(fib(40)); // -> 102334155 (should compute quickly!)

/**
 * Challenge 9: The Tail-Recursive Optimizer
 *
 * Rewrite this recursive function to be tail-recursive:
 */

function sumArrayRecursive(arr, index = 0, total = 0) {
  if (index === arr.length) return total;
  return sumArrayRecursive(arr, index + 1, total + arr[index]);
}

// console.log(sumArrayRecursive([1, 2, 3, 4, 5])); // -> 15

/**
 * Challenge 10: The Recursive Promise Chain
 *
 * Write a recursive function that processes an array of async tasks sequentially.
 * Each task returns a promise.
 */

function processAsyncRecursive(tasks, index = 0, results = []) {
  if (index >= tasks.length) return Promise.resolve(results);
  // Your code here
}

// const tasks = [
//   () => Promise.resolve('Task 1 done'),
//   () => Promise.resolve('Task 2 done'),
//   () => Promise.resolve('Task 3 done')
// ];
// processAsyncRecursive(tasks).then(console.log);
// -> ['Task 1 done', 'Task 2 done', 'Task 3 done']
