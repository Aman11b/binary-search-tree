const { Tree, prettyPrint } = require('./bst');

function testInsert() {
  console.log("=== Insert Method Test ===");

  // Create an initial tree
  const initialArray = [10, 5, 15, 2, 7, 12, 20];
  const bst = Tree(initialArray);

  console.log("Original Tree:");
  prettyPrint(bst.root);

  // Test inserting new values
  const valuesToInsert = [3, 6, 18, 1, 25];
  
  console.log("\n=== Inserting New Values ===");
  valuesToInsert.forEach(value => {
    console.log(`\nInserting ${value}:`);
    bst.insert(value);
    prettyPrint(bst.root);
    
    // Verify the inserted value exists
    console.log(`Verifying ${value} is in the tree:`);
    const findInsertedValue = (node, val) => {
      if (node === null) return false;
      if (node.data === val) return true;
      return findInsertedValue(node.left, val) || findInsertedValue(node.right, val);
    };
    console.log(findInsertedValue(bst.root, value) ? "✓ Value found" : "✗ Value not found");
  });

  // Test inserting duplicate (should not change tree)
  console.log("\n=== Attempting to Insert Duplicate ===");
  bst.insert(10);
  prettyPrint(bst.root);

  // Verify properties
  console.log("\n=== Verification ===");
  console.log("Insertion tests complete");
}

// Run the test
testInsert();