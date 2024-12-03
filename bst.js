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

    let root=buildTree(cleanArray);

    const insert=(value)=>{
        if(root===null){
            root=Node(value);
            return root;
        }

        const insertNode=(node,newValue)=>{
            if(node===null){
                return Node(newValue);
            }

            // Prevent duplicates
            if (newValue === node.data) {
                return node;
            }

            if(newValue<node.data){
                node.left=insertNode(node.left,newValue);
            }else{
                node.right=insertNode(node.right,newValue);
            }

            return node;
        };
        root=insertNode(root,value);
        return root;
    }

    const find=(value)=>{
        const searchNode=(node,val)=>{
            if(node===null){
                return null;
            }

            if(node.data===val){
                return node;
            }

            if(val<node.data){
                return searchNode(node.left,val);
            }else{
                return searchNode(node.right,val);
            }
        };

        return searchNode(root,value);
    }


    return{
        get root(){return root},
        insert,
        find
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

