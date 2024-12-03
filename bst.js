const Node=(data)=>{
    return{
        data,
        left:null,
        right:null
    };
};

const Tree=(array)=>{
    const cleanArray=[...new Set(array)].sort((a,b)=>a-b);

    const buildTree=(arr)=>{
        if(arr.length===0) return null;

        const midIndex=Math.floor(arr.length/2);
        const rootNode=Node(arr[midIndex]);

        rootNode.left=buildTree(arr.slice(0,midIndex));
        rootNode.right=buildTree(arr.slice(midIndex+1));

        return rootNode;
    };

    return{
        root:buildTree(cleanArray),
    };
};

const prettyPrint=(node,prefix='',isLeft=true)=>{
    if(node==null) return;

    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};
module.exports={
    Node,
    Tree,
    prettyPrint
};

