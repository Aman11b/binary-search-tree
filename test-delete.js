const { Tree, prettyPrint } = require('./bst');

function testDelete() {
  console.log("=== Delete Method Test ===");

  // Create an initial tree
  const initialArray = [10, 5, 15, 2, 7, 12, 20, 1, 3, 6, 8, 18, 25];
  const bst = Tree(initialArray);

  console.log("Original Tree:");
  prettyPrint(bst.root);

  // Test cases for deletion
  const deleteTestCases = [
    // Leaf node deletion
    { value: 1, description: "Delete leaf node" },
    
    // Node with one child deletion
    { value: 2, description: "Delete node with one child" },
    
    // Node with two children deletion
    { value: 10, description: "Delete node with two children (root)" },
    
    // Deletion of non-existent value
    { value: 100, description: "Delete non-existent value" }
  ];

  deleteTestCases.forEach(testCase => {
    console.log(`\n${testCase.description} (Value: ${testCase.value}):`);
    
    // Attempt to find the node before deletion
    const beforeDelete = bst.find(testCase.value);
    console.log(`Node exists before deletion: ${beforeDelete ? 'Yes' : 'No'}`);

    // Delete the node
    bst.deleteItem(testCase.value);

    console.log("Tree after deletion:");
    prettyPrint(bst.root);

    // Check if node still exists
    const afterDelete = bst.find(testCase.value);
    console.log(`Node exists after deletion: ${afterDelete ? 'Yes' : 'No'}`);
  });

  // Verify properties
  console.log("\n=== Verification ===");
  console.log("Delete method tests complete");
}

// Run the test
testDelete();