const { Tree, prettyPrint } = require('./bst');

function testFind() {
  console.log("=== Find Method Test ===");

  // Create an initial tree
  const initialArray = [10, 5, 15, 2, 7, 12, 20, 1, 3, 6, 8];
  const bst = Tree(initialArray);

  console.log("Original Tree:");
  prettyPrint(bst.root);

  // Test cases for finding values
  const testCases = [
    { value: 10, expected: true },
    { value: 5, expected: true },
    { value: 15, expected: true },
    { value: 2, expected: true },
    { value: 7, expected: true },
    { value: 100, expected: false },
    { value: 0, expected: false }
  ];

  console.log("\n=== Finding Values ===");
  testCases.forEach(testCase => {
    const foundNode = bst.find(testCase.value);
    
    console.log(`\nSearching for ${testCase.value}:`);
    if (foundNode) {
      console.log(`Found node with value: ${foundNode.data}`);
      
      // Additional node information
      console.log('Node Details:');
      console.log(`- Left child: ${foundNode.left ? foundNode.left.data : 'None'}`);
      console.log(`- Right child: ${foundNode.right ? foundNode.right.data : 'None'}`);
    } else {
      console.log(`Value ${testCase.value} not found in the tree`);
    }
  });

  // Verify properties
  console.log("\n=== Verification ===");
  console.log("Find method tests complete");
}

// Run the test
testFind();