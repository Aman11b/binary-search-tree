const { Tree, prettyPrint } = require('./bst');

function testLevelOrder() {
  console.log("=== Level-Order Traversal Test ===");

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
      name: "Random Tree",
      array: [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45]
    }
  ];

  testCases.forEach(testCase => {
    console.log(`\n${testCase.name}:`);
    
    // Create tree
    const bst = Tree(testCase.array);

    // Print tree structure
    console.log("Tree Structure:");
    prettyPrint(bst.root);

    // Perform level-order traversal
    const levelOrderTraversal = bst.levelOrder();
    
    console.log("Level-Order Traversal:");
    console.log(levelOrderTraversal);
  });
}

// Run the test
testLevelOrder();