/**
 * Challenge 1: The Linked List Node
 * 
 * Implement a linked list node with value and next pointer.
 * Add methods: addNext, getLast, toArray.
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  
  addNext(value) {
    // Your code here
  }
  
  getLast() {
    // Your code here
  }
  
  toArray() {
    // Your code here
  }
}

// const node = new ListNode(1);
// node.addNext(2);
// node.addNext(3);
// console.log(node.toArray()); // -> [1, 2, 3]
// console.log(node.getLast().value); // -> 3

/**
 * Challenge 2: The Stack with Max Tracking
 * 
 * Implement a stack with push, pop, peek, and getMax methods.
 * getMax should return current maximum in O(1) time.
 */

class MaxStack {
  constructor() {
    // Your code here
  }
  
  push(value) {
    // Your code here
  }
  
  pop() {
    // Your code here
  }
  
  peek() {
    // Your code here
  }
  
  getMax() {
    // Your code here
  }
}

// const stack = new MaxStack();
// stack.push(5);
// stack.push(2);
// stack.push(8);
// console.log(stack.getMax()); // -> 8
// stack.pop();
// console.log(stack.getMax()); // -> 5

/**
 * Challenge 3: The Circular Queue
 * 
 * Implement a fixed-size circular queue with enqueue, dequeue, and isFull methods.
 */

class CircularQueue {
  constructor(size) {
    // Your code here
  }
  
  enqueue(value) {
    // Your code here
  }
  
  dequeue() {
    // Your code here
  }
  
  isFull() {
    // Your code here
  }
  
  isEmpty() {
    // Your code here
  }
}

// const queue = new CircularQueue(3);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.isFull()); // -> true
// console.log(queue.dequeue()); // -> 1
// queue.enqueue(4); // Should work (circular)
// console.log(queue.dequeue()); // -> 2

/**
 * Challenge 4: The Binary Search Tree
 * 
 * Implement BST with insert, contains, and inOrderTraversal methods.
 */

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(value) {
    // Your code here
  }
  
  contains(value) {
    // Your code here
  }
  
  inOrderTraversal(callback) {
    // Your code here
  }
}

// const bst = new BinarySearchTree(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// console.log(bst.contains(7)); // -> true
// console.log(bst.contains(12)); // -> false
// const result = [];
// bst.inOrderTraversal(val => result.push(val));
// console.log(result); // -> [3, 5, 7, 10, 15]

/**
 * Challenge 5: The Hash Map with Chaining
 * 
 * Implement a hash map with set, get, and remove methods.
 * Handle collisions using chaining (array at each bucket).
 */

class HashMap {
  constructor(size = 53) {
    // Your code here
  }
  
  _hash(key) {
    // Your code here
  }
  
  set(key, value) {
    // Your code here
  }
  
  get(key) {
    // Your code here
  }
  
  remove(key) {
    // Your code here
  }
}

// const map = new HashMap();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name')); // -> 'Alice'
// map.remove('age');
// console.log(map.get('age')); // -> undefined

/**
 * Challenge 6: The Priority Queue
 * 
 * Implement a min-heap priority queue with insert, extractMin, and peek methods.
 */

class PriorityQueue {
  constructor() {
    // Your code here
  }
  
  insert(value, priority) {
    // Your code here
  }
  
  extractMin() {
    // Your code here
  }
  
  peek() {
    // Your code here
  }
}

// const pq = new PriorityQueue();
// pq.insert('Task A', 3);
// pq.insert('Task B', 1);
// pq.insert('Task C', 2);
// console.log(pq.extractMin()); // -> 'Task B' (priority 1)
// console.log(pq.extractMin()); // -> 'Task C' (priority 2)

/**
 * Challenge 7: The Graph with Adjacency List
 * 
 * Implement a graph with addVertex, addEdge, getNeighbors, and hasPath methods.
 */

class Graph {
  constructor() {
    // Your code here
  }
  
  addVertex(vertex) {
    // Your code here
  }
  
  addEdge(vertex1, vertex2) {
    // Your code here
  }
  
  getNeighbors(vertex) {
    // Your code here
  }
  
  hasPath(start, end) {
    // Your code here
  }
}

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');
// console.log(graph.getNeighbors('B')); // -> ['A', 'C']
// console.log(graph.hasPath('A', 'C')); // -> true
// console.log(graph.hasPath('C', 'A')); // -> false (undirected would be true)

/**
 * Challenge 8: The LRU Cache
 * 
 * Implement Least Recently Used cache with get and put methods.
 * Cache has maximum capacity, removes least recently used when full.
 */

class LRUCache {
  constructor(capacity) {
    // Your code here
  }
  
  get(key) {
    // Your code here
  }
  
  put(key, value) {
    // Your code here
  }
}

// const cache = new LRUCache(2);
// cache.put('a', 1);
// cache.put('b', 2);
// console.log(cache.get('a')); // -> 1
// cache.put('c', 3); // Removes 'b' (least recently used)
// console.log(cache.get('b')); // -> undefined

/**
 * Challenge 9: The Trie (Prefix Tree)
 * 
 * Implement a trie for word storage with insert, search, and startsWith methods.
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    // Your code here
  }
  
  insert(word) {
    // Your code here
  }
  
  search(word) {
    // Your code here
  }
  
  startsWith(prefix) {
    // Your code here
  }
}

// const trie = new Trie();
// trie.insert('apple');
// console.log(trie.search('apple')); // -> true
// console.log(trie.search('app')); // -> false
// console.log(trie.startsWith('app')); // -> true
// trie.insert('app');
// console.log(trie.search('app')); // -> true

/**
 * Challenge 10: The Disjoint Set (Union-Find)
 * 
 * Implement union-find data structure with find, union, and connected methods.
 */

class DisjointSet {
  constructor(size) {
    // Your code here
  }
  
  find(x) {
    // Your code here
  }
  
  union(x, y) {
    // Your code here
  }
  
  connected(x, y) {
    // Your code here
  }
}

// const ds = new DisjointSet(5);
// ds.union(0, 1);
// ds.union(1, 2);
// console.log(ds.connected(0, 2)); // -> true
// console.log(ds.connected(0, 3)); // -> false