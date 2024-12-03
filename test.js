const { Tree, prettyPrint } = require('./bst');

// Test function to validate tree creation
function testTreeCreation() {
    console.log("=== Tree Creation Test ===");
    
    // Test with various input arrays
    const testCases = [
        [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324],
        [10, 5, 15, 2, 7, 12, 20],
        [100, 50, 150, 25, 75, 125, 175],
        [1, 2, 3, 4, 5, 6, 7]  // Already sorted
    ];

    testCases.forEach((testArray, index) => {
        console.log(`\nTest Case ${index + 1}: Input Array [${testArray}]`);
        
        // Create tree
        const bst = Tree(testArray);
        
        // Print the tree
        console.log("Balanced BST Structure:");
        prettyPrint(bst.root);

        // Verify some properties
        console.log("Verification:");
        console.log("- Duplicates removed: ", new Set(testArray).size);
        console.log("- Tree root exists: ", bst.root !== null);
    });
}

// Run the test
testTreeCreation();