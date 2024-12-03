const { Tree, prettyPrint } = require('./bst');

function testTraversals() {
  console.log("=== Tree Traversal Methods Test ===");

  // Test cases with different tree structures
  const testCases = [
    {
      name: "Balanced Tree",
      array: [10, 5, 15, 2, 7, 12, 20]
    },
    {
      name: "Skewed Tree",
      array: [1, 2, 3, 4, 5, 6, 7]
    },
    {
      name: "Complex Tree",
      array: [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45]
    },
    {
      name: "Empty Tree",
      array: []
    }
  ];

  testCases.forEach(testCase => {
    console.log(`\n${testCase.name}:`);
    
    // Create tree
    const bst = Tree(testCase.array);

    // Print tree structure if not empty
    if (bst.root) {
      console.log("Tree Structure:");
      prettyPrint(bst.root);
    } else {
      console.log("Tree is empty");
    }

    // Perform different traversals
    console.log("\nTraversal Methods:");
    console.log("Level-Order:", bst.levelOrder());
    console.log("In-Order:   ", bst.inOrder());
    console.log("Pre-Order:  ", bst.preOrder());
    console.log("Post-Order: ", bst.postOrder());
  });
}

// Run the test
testTraversals();