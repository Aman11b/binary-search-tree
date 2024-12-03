const { Tree, prettyPrint } = require('./bst');

function testTreeProperties() {
  console.log("=== Tree Properties Test ===");

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
    }
  ];

  testCases.forEach(testCase => {
    console.log(`\n${testCase.name}:`);
    
    // Create tree
    const bst = Tree(testCase.array);

    // Print tree structure
    console.log("Tree Structure:");
    prettyPrint(bst.root);

    // Test height method
    console.log("\nHeight Tests:");
    const testNodes = [
      { name: "Root", node: bst.root },
      { name: "Left Child", node: bst.root?.left },
      { name: "Right Child", node: bst.root?.right }
    ];

    testNodes.forEach(test => {
      if (test.node) {
        console.log(`${test.name} Height:`, bst.height(test.node));
      }
    });

    // Test depth method
    console.log("\nDepth Tests:");
    testNodes.forEach(test => {
      if (test.node) {
        console.log(`${test.name} Depth:`, bst.depth(test.node));
      }
    });

    // Test balance and rebalance
    console.log("\nBalance Tests:");
    console.log("Is Tree Balanced:", bst.isBalance());

    // Unbalance the tree by adding large values
    console.log("\nUnbalancing the Tree:");
    [100, 200, 300, 400, 500].forEach(val => bst.insert(val));
    
    console.log("Is Tree Balanced After Insertion:", bst.isBalance());

    // Rebalance the tree
    console.log("\nRebalancing the Tree:");
    bst.rebalance();
    console.log("Is Tree Balanced After Rebalance:", bst.isBalance());

    // Print final tree structure
    console.log("\nFinal Tree Structure:");
    prettyPrint(bst.root);
  });
}

// Run the test
testTreeProperties();