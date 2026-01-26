// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
// use('js-learning');

// Create a new document in the collection.
db.getCollection('challenges').insertMany(
    [
        // BEGINNER CHALLENGES
        {
            title: "Sum Two Numbers",
            description: "Write a function that takes two numbers and returns their sum.",
            difficulty: "beginner",
            category: "functions",
            initialCode: "function sum(a, b) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: "1, 2",
                    expectedOutput: 3,
                    description: "Sum of 1 and 2 should be 3"
                },
                {
                    input: "5, -3",
                    expectedOutput: 2,
                    description: "Sum of 5 and -3 should be 2"
                },
                {
                    input: "0, 0",
                    expectedOutput: 0,
                    description: "Sum of 0 and 0 should be 0"
                },
                {
                    input: "10.5, 2.5",
                    expectedOutput: 13,
                    description: "Sum of decimals should work"
                }
            ],
            hints: [
                "Use the + operator to add two numbers",
                "Make sure to return the result using the return keyword",
                "The function should take two parameters: a and b"
            ],
            points: 10
        },
        {
            title: "Check Even Number",
            description: "Write a function that returns true if a number is even, false otherwise.",
            difficulty: "beginner",
            category: "conditionals",
            initialCode: "function isEven(num) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [4],
                    expectedOutput: true,
                    description: "4 should return true"
                },
                {
                    input: [7],
                    expectedOutput: false,
                    description: "7 should return false"
                },
                {
                    input: [0],
                    expectedOutput: true,
                    description: "0 should return true"
                },
                {
                    input: [-2],
                    expectedOutput: true,
                    description: "Negative even numbers should return true"
                }
            ],
            hints: [
                "Use the modulo operator % to check remainder",
                "If number % 2 equals 0, it's even",
                "Don't forget to return a boolean value"
            ],
            points: 10
        },
        {
            title: "String Reversal",
            description: "Write a function that takes a string and returns it reversed.",
            difficulty: "beginner",
            category: "strings",
            initialCode: "function reverseString(str) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: ["hello"],
                    expectedOutput: "olleh",
                    description: "'hello' should become 'olleh'"
                },
                {
                    input: ["JavaScript"],
                    expectedOutput: "tpircSavaJ",
                    description: "Should handle mixed case"
                },
                {
                    input: [""],
                    expectedOutput: "",
                    description: "Empty string should return empty string"
                },
                {
                    input: ["a"],
                    expectedOutput: "a",
                    description: "Single character should return same"
                }
            ],
            hints: [
                "Convert string to array using split('')",
                "Use reverse() method on array",
                "Join back to string using join('')"
            ],
            points: 15
        },
        {
            title: "Find Maximum Number",
            description: "Write a function that finds the largest number in an array.",
            difficulty: "beginner",
            category: "arrays",
            initialCode: "function findMax(arr) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [[1, 5, 3, 9, 2]],
                    expectedOutput: 9,
                    description: "Should return 9 from [1,5,3,9,2]"
                },
                {
                    input: [[-10, -5, -20]],
                    expectedOutput: -5,
                    description: "Should return -5 from negative numbers"
                },
                {
                    input: [[42]],
                    expectedOutput: 42,
                    description: "Single element array should return that element"
                },
                {
                    input: [[0, 0, 0]],
                    expectedOutput: 0,
                    description: "All zeros should return 0"
                }
            ],
            hints: [
                "You can use Math.max with spread operator: Math.max(...arr)",
                "Or use a loop to find the maximum",
                "Handle empty array edge case"
            ],
            points: 15
        },

        // INTERMEDIATE CHALLENGES
        {
            title: "FizzBuzz",
            description: "Write a function that returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for multiples of both, or the number itself otherwise.",
            difficulty: "intermediate",
            category: "conditionals",
            initialCode: "function fizzBuzz(num) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [3],
                    expectedOutput: "Fizz",
                    description: "Multiple of 3 should return 'Fizz'"
                },
                {
                    input: [5],
                    expectedOutput: "Buzz",
                    description: "Multiple of 5 should return 'Buzz'"
                },
                {
                    input: [15],
                    expectedOutput: "FizzBuzz",
                    description: "Multiple of 3 and 5 should return 'FizzBuzz'"
                },
                {
                    input: [7],
                    expectedOutput: 7,
                    description: "Non-multiple should return the number"
                },
                {
                    input: [30],
                    expectedOutput: "FizzBuzz",
                    description: "30 should return 'FizzBuzz'"
                }
            ],
            hints: [
                "Check divisibility using modulo operator %",
                "Check for 3 and 5 first (most specific case)",
                "Return string or number based on conditions"
            ],
            points: 20
        },
        {
            title: "Palindrome Checker",
            description: "Write a function that checks if a string is a palindrome (reads same forwards and backwards).",
            difficulty: "intermediate",
            category: "strings",
            initialCode: "function isPalindrome(str) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: ["racecar"],
                    expectedOutput: true,
                    description: "'racecar' is a palindrome"
                },
                {
                    input: ["hello"],
                    expectedOutput: false,
                    description: "'hello' is not a palindrome"
                },
                {
                    input: ["A man a plan a canal Panama"],
                    expectedOutput: true,
                    description: "Should ignore spaces and case"
                },
                {
                    input: [""],
                    expectedOutput: true,
                    description: "Empty string is a palindrome"
                },
                {
                    input: ["Madam"],
                    expectedOutput: true,
                    description: "Should be case-insensitive"
                }
            ],
            hints: [
                "Remove non-alphanumeric characters and convert to lowercase",
                "Compare the string with its reversed version",
                "Use regex to clean the string: str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()"
            ],
            points: 20
        },
        {
            title: "Array Flatten",
            description: "Write a function that flattens a nested array (converts to single level).",
            difficulty: "intermediate",
            category: "arrays",
            initialCode: "function flattenArray(arr) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [[1, 2, [3, 4], 5]],
                    expectedOutput: [1, 2, 3, 4, 5],
                    description: "Should flatten nested arrays"
                },
                {
                    input: [[1, [2, [3, [4, 5]]]]],
                    expectedOutput: [1, 2, 3, 4, 5],
                    description: "Should handle deeply nested arrays"
                },
                {
                    input: [[]],
                    expectedOutput: [],
                    description: "Empty array should return empty array"
                },
                {
                    input: [[1, 2, 3]],
                    expectedOutput: [1, 2, 3],
                    description: "Already flat array should return same"
                }
            ],
            hints: [
                "Use recursion to handle nested arrays",
                "Check if element is array using Array.isArray()",
                "Use reduce to accumulate flattened elements"
            ],
            points: 25
        },
        {
            title: "Anagram Checker",
            description: "Write a function that checks if two strings are anagrams of each other.",
            difficulty: "intermediate",
            category: "strings",
            initialCode: "function areAnagrams(str1, str2) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: ["listen", "silent"],
                    expectedOutput: true,
                    description: "'listen' and 'silent' are anagrams"
                },
                {
                    input: ["hello", "world"],
                    expectedOutput: false,
                    description: "'hello' and 'world' are not anagrams"
                },
                {
                    input: ["Dormitory", "Dirty room"],
                    expectedOutput: true,
                    description: "Should ignore spaces and case"
                },
                {
                    input: ["", ""],
                    expectedOutput: true,
                    description: "Empty strings are anagrams"
                },
                {
                    input: ["a", "a"],
                    expectedOutput: true,
                    description: "Single same characters are anagrams"
                }
            ],
            hints: [
                "Remove spaces and convert to lowercase",
                "Sort characters of both strings and compare",
                "You can use: str.toLowerCase().replace(/\\s/g, '').split('').sort().join('')"
            ],
            points: 20
        },
        {
            title: "Find Missing Number",
            description: "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.",
            difficulty: "intermediate",
            category: "arrays",
            initialCode: "function findMissingNumber(nums) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [[3, 0, 1]],
                    expectedOutput: 2,
                    description: "Array [3,0,1] should return 2"
                },
                {
                    input: [[0, 1]],
                    expectedOutput: 2,
                    description: "Array [0,1] should return 2"
                },
                {
                    input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]],
                    expectedOutput: 8,
                    description: "Should find missing number in larger array"
                },
                {
                    input: [[0]],
                    expectedOutput: 1,
                    description: "Single element 0 should return 1"
                }
            ],
            hints: [
                "Calculate expected sum using formula: n*(n+1)/2 where n = array length",
                "Calculate actual sum of array",
                "Missing number = expected sum - actual sum"
            ],
            points: 25
        },

        // ADVANCED CHALLENGES
        {
            title: "Memoized Fibonacci",
            description: "Implement a memoized version of Fibonacci sequence to optimize repeated calculations.",
            difficulty: "advanced",
            category: "functions",
            initialCode: "function fibonacci(n, memo = {}) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [0],
                    expectedOutput: 0,
                    description: "fibonacci(0) should return 0"
                },
                {
                    input: [1],
                    expectedOutput: 1,
                    description: "fibonacci(1) should return 1"
                },
                {
                    input: [10],
                    expectedOutput: 55,
                    description: "fibonacci(10) should return 55"
                },
                {
                    input: [20],
                    expectedOutput: 6765,
                    description: "fibonacci(20) should return 6765"
                },
                {
                    input: [40],
                    expectedOutput: 102334155,
                    description: "Should handle large numbers efficiently"
                }
            ],
            hints: [
                "Use memoization to store previously calculated results",
                "Check if result exists in memo object before calculating",
                "Base cases: fibonacci(0) = 0, fibonacci(1) = 1",
                "Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)"
            ],
            points: 30
        },
        {
            title: "Debounce Function",
            description: "Implement a debounce function that delays invoking a function until after wait milliseconds have elapsed since the last time it was invoked.",
            difficulty: "advanced",
            category: "functions",
            initialCode: "function debounce(func, wait) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [() => console.log('called'), 100],
                    expectedOutput: "function",
                    description: "Should return a function"
                }
            ],
            hints: [
                "Return a new function that wraps the original",
                "Use setTimeout to delay execution",
                "Clear previous timeout on subsequent calls",
                "Use apply or call to maintain proper this context"
            ],
            points: 35,
            // Note: This challenge requires manual testing or more complex test setup
            testInstructions: "This function returns another function. Manual testing required."
        },
        {
            title: "Deep Clone Object",
            description: "Implement a function that creates a deep clone of a JavaScript object (including nested objects and arrays).",
            difficulty: "advanced",
            category: "objects",
            initialCode: "function deepClone(obj) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [{ a: 1, b: 2 }],
                    expectedOutput: { a: 1, b: 2 },
                    description: "Should clone simple object"
                },
                {
                    input: [{ a: { b: { c: 1 } } }],
                    expectedOutput: { a: { b: { c: 1 } } },
                    description: "Should deeply clone nested objects"
                },
                {
                    input: [[1, 2, [3, 4]]],
                    expectedOutput: [1, 2, [3, 4]],
                    description: "Should clone arrays and nested arrays"
                },
                {
                    input: [null],
                    expectedOutput: null,
                    description: "Should handle null"
                }
            ],
            hints: [
                "Check if input is object or array",
                "Handle primitive values (return as is)",
                "Use recursion for nested structures",
                "Handle circular references (bonus challenge)"
            ],
            points: 30
        },
        {
            title: "Promise.all Implementation",
            description: "Implement your own version of Promise.all that takes an array of promises and returns a single promise.",
            difficulty: "advanced",
            category: "async",
            initialCode: "function promiseAll(promises) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [[Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]],
                    expectedOutput: "Promise",
                    description: "Should return a promise"
                }
            ],
            hints: [
                "Return a new Promise",
                "Track resolved values in an array",
                "Resolve when all promises complete",
                "Reject immediately if any promise rejects"
            ],
            points: 40,
            testInstructions: "This function returns a Promise. Manual testing required with async/await."
        },
        {
            title: "Currying Function",
            description: "Implement a curry function that transforms a function with multiple arguments into a sequence of functions each with a single argument.",
            difficulty: "advanced",
            category: "functions",
            initialCode: "function curry(fn) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [(a, b, c) => a + b + c],
                    expectedOutput: "function",
                    description: "Should return a curried function"
                }
            ],
            hints: [
                "Return a function that collects arguments",
                "Check if enough arguments are provided",
                "If yes, call original function, else return new curried function",
                "Use fn.length to get expected number of arguments"
            ],
            points: 35
        },
        {
            title: "Binary Search",
            description: "Implement binary search algorithm to find an element in a sorted array. Return index if found, -1 otherwise.",
            difficulty: "advanced",
            category: "algorithms",
            initialCode: "function binarySearch(arr, target) {\n  // Write your code here\n}",
            testCases: [
                {
                    input: [[1, 3, 5, 7, 9], 5],
                    expectedOutput: 2,
                    description: "Should find 5 at index 2"
                },
                {
                    input: [[1, 3, 5, 7, 9], 2],
                    expectedOutput: -1,
                    description: "Should return -1 for non-existent element"
                },
                {
                    input: [[], 1],
                    expectedOutput: -1,
                    description: "Empty array should return -1"
                },
                {
                    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10],
                    expectedOutput: 9,
                    description: "Should find last element"
                }
            ],
            hints: [
                "Use two pointers: left and right",
                "Calculate middle index: Math.floor((left + right) / 2)",
                "If arr[middle] equals target, return middle",
                "If target < arr[middle], search left half, else search right half"
            ],
            points: 25
        }
    ]
);
