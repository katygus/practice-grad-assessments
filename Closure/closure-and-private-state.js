/**
 * Challenge 1: The Counter Factory
 * 
 * Create a function that returns an object with increment, decrement, and get methods.
 * The count should be private and start at 0.
 */

function createCounter() {
  // Your code here
  let count = 0;
   return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    get: function() {
      return count;
    }
  }
}

// const counter = createCounter();
// console.log(counter.get()); // -> 0
// counter.increment();
// counter.increment();
// console.log(counter.get()); // -> 2
// counter.decrement();
// console.log(counter.get()); // -> 1
// const counter2 = createCounter();
// counter2.increment();
// counter2.increment();
// counter2.increment();
// console.log(counter2.get())

/**
 * Challenge 2: The Password Validator
 * 
 * Create a function that returns a validate method.
 * The correct password should be private.
 * validate(password) returns true/false and tracks attempts.
 */

function createPasswordValidator(correctPassword) {
// validate method takes in a string
  let attempts = 0;
  return {
    validate: function(string) {
      if (string === correctPassword) {
        attempts++;
        return true;
      }
      if (string !== correctPassword) {
        attempts++;
        return false;
      }
    },
    getAttempts: function() {
      return attempts;
    }
  }
}

// const validator = createPasswordValidator('secret123');
// console.log(validator.validate('wrong')); // -> false
// console.log(validator.validate('secret123')); // -> true
// console.log(validator.getAttempts());// -> 2
// const validator2 = createPasswordValidator('abc123'); 
// console.log(validator2.validate('secret123'));
// console.log(validator2.validate('321cba'));
// console.log(validator2.validate('abc123'));
// console.log(validator2.getAttempts());
/**
 * Challenge 3: The Rate Limiter
 * 
 * Create a function that returns a tryCall method.
 * tryCall() returns true if called less than limit times per interval.
 */

function createRateLimiter(limit, intervalMs) {
    
}

// const limiter = createRateLimiter(3, 1000); // 3 calls per second
// console.log(limiter.tryCall()); // -> true
// console.log(limiter.tryCall()); // -> true
// console.log(limiter.tryCall()); // -> true
// console.log(limiter.tryCall()); // -> false (limit reached)
// setTimeout(() => console.log(limiter.tryCall()), 1000); // -> true (after 1s)

/**
 * Challenge 4: The Bank Account
 * 
 * Create a bank account with private balance.
 * Methods: deposit, withdraw, getBalance.
 * Withdrawals can't go below 0.
 */

function createBankAccount(initialBalance = 0) {
  // Your code here
}

// const account = createBankAccount(100);
// console.log(account.getBalance()); // -> 100
// account.deposit(50);
// console.log(account.getBalance()); // -> 150
// account.withdraw(200); // -> Should fail or return false
// console.log(account.getBalance()); // -> 150

/**
 * Challenge 5: The Pub-Sub Event System
 * 
 * Create an event emitter with subscribe and emit methods.
 * Subscribers should be private.
 */

function createEventEmitter() {
  // Your code here
}

// const emitter = createEventEmitter();
// const unsubscribe = emitter.subscribe('login', (user) => {
//   console.log(`User logged in: ${user}`);
// });
// emitter.emit('login', 'Alice'); // -> "User logged in: Alice"
// unsubscribe();
// emitter.emit('login', 'Bob'); // -> Nothing happens

/**
 * Challenge 6: The Cache Manager
 * 
 * Create a cache with set, get, and clear methods.
 * Items should expire after given TTL.
 */

function createCache(ttlMs = 5000) {
  // Your code here
}

// const cache = createCache(2000); // 2 second TTL
// cache.set('user', { name: 'Alice' });
// console.log(cache.get('user')); // -> { name: 'Alice' }
// setTimeout(() => {
//   console.log(cache.get('user')); // -> undefined (expired)
// }, 2001);

/**
 * Challenge 7: The State Machine
 * 
 * Create a state machine with transition and getState methods.
 * Only allow valid transitions defined in a private rules object.
 */

function createStateMachine(initialState, validTransitions) {
  // Your code here
}

// const trafficLight = createStateMachine('red', {
//   red: ['green'],
//   green: ['yellow'],
//   yellow: ['red']
// });
// console.log(trafficLight.getState()); // -> 'red'
// console.log(trafficLight.transition('green')); // -> true
// console.log(trafficLight.getState()); // -> 'green'
// console.log(trafficLight.transition('red')); // -> false (invalid)

/**
 * Challenge 8: The Module Pattern Calculator
 * 
 * Create a calculator module that only exposes add, subtract, and getResult.
 * The current result should be private.
 */

const calculator = (function() {
  // Your code here
})();

// console.log(calculator.add(5)); // -> 5
// console.log(calculator.add(10)); // -> 15
// console.log(calculator.subtract(3)); // -> 12
// console.log(calculator.getResult()); // -> 12
// console.log(calculator.result); // -> undefined (private)

/**
 * Challenge 9: The Undo/Redo Stack
 * 
 * Create a history manager with push, undo, redo, and getCurrent methods.
 * History should be private with limited size.
 */

function createHistoryManager(maxSize = 50) {
  // Your code here
}

// const history = createHistoryManager();
// history.push({ page: 'home' });
// history.push({ page: 'about' });
// console.log(history.getCurrent()); // -> { page: 'about' }
// history.undo();
// console.log(history.getCurrent()); // -> { page: 'home' }
// history.redo();
// console.log(history.getCurrent()); // -> { page: 'about' }

/**
 * Challenge 10: The Function Generator with Memory
 * 
 * Create a function that generates unique IDs.
 * Each call returns next ID, but remembers previous ones.
 * Should accept optional prefix.
 */

function createIdGenerator(prefix = 'id') {
  // Your code here
}

// const gen = createIdGenerator('user');
// console.log(gen()); // -> 'user-1'
// console.log(gen()); // -> 'user-2'
// console.log(gen()); // -> 'user-3'
// 
// const taskGen = createIdGenerator('task');
// console.log(taskGen()); // -> 'task-1' (independent counter)