# Binary Search Tree (BST) Implementation in JavaScript

## Overview
This project provides a robust implementation of a Binary Search Tree (BST) with various operations and traversal methods. It demonstrates fundamental data structure concepts and tree manipulation techniques.

## Features

### Tree Operations
- ✅ Create a balanced Binary Search Tree
- ✅ Insert nodes
- ✅ Delete nodes
- ✅ Find nodes
- ✅ Rebalance tree

### Traversal Methods
- 🌳 Level-Order Traversal
- 🌳 In-Order Traversal
- 🌳 Pre-Order Traversal
- 🌳 Post-Order Traversal

### Tree Properties
- 📏 Calculate node height
- 📏 Calculate node depth
- ✔️ Check tree balance
- 🔄 Rebalance tree

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm

### Clone the Repository
```bash
git clone https://github.com/yourusername/binary-search-tree.git
cd binary-search-tree
```

### Install Dependencies
```bash
npm install
```

## Available Scripts

### Run Tests
```bash
# Run specific test suites
npm run test:insert
npm run test:find
npm run test:traversals
npm run test:properties
```

## Example Usage
```javascript
const { Tree, prettyPrint } = require('./bst');

// Create a new tree
const numbers = [10, 5, 15, 2, 7, 12, 20];
const bst = Tree(numbers);

// Insert a new node
bst.insert(8);

// Perform traversals
console.log("Level Order:", bst.levelOrder());
console.log("In Order:", bst.inOrder());

// Check tree properties
console.log("Tree Height:", bst.height(bst.root));
console.log("Is Balanced:", bst.isBalanced());

// Pretty print the tree structure
prettyPrint(bst.root);
```

## Core Methods

### `insert(value)`
- Adds a new node to the tree
- Maintains BST properties
- Prevents duplicate values

### `deleteItem(value)`
- Removes a node from the tree
- Handles different deletion scenarios
- Maintains tree structure

### `find(value)`
- Searches for a specific value
- Returns the node if found
- Returns null if not found

### `height(node)`
- Calculates the height of a given node
- Represents the longest path to a leaf

### `depth(node)`
- Calculates the depth of a given node
- Represents the distance from the root

### `isBalanced()`
- Checks if the tree is balanced
- Ensures height difference ≤ 1 for all nodes

### `rebalance()`
- Rebuilds the tree to minimize height difference
- Uses in-order traversal to collect values

## Traversal Methods

### `levelOrder()`
- Breadth-first traversal
- Visits nodes level by level

### `inOrder()`
- Depth-first traversal (Left-Root-Right)
- Produces sorted output for BST

### `preOrder()`
- Depth-first traversal (Root-Left-Right)
- Useful for creating tree copies

### `postOrder()`
- Depth-first traversal (Left-Right-Root)
- Useful for deleting trees

## Time Complexity

| Operation     | Average Case | Worst Case |
|---------------|--------------|------------|
| Insertion     | O(log n)     | O(n)       |
| Deletion      | O(log n)     | O(n)       |
| Search        | O(log n)     | O(n)       |
| Traversal     | O(n)         | O(n)       |

## Space Complexity
- O(h) for recursive operations (h = tree height)
- Best case: O(log n) for balanced trees
- Worst case: O(n) for skewed trees

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is open-source and available under the MIT License.

## Acknowledgments
- Inspired by computer science data structure principles
- Created as a learning project for advanced JavaScript programming
