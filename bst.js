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
    };

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
    };

    const findMinNode=(node)=>{
        let current=node;
        while(current.left!==null){
            current=current.left;
        }

        return current;
    };

    const deleteItem=(value)=>{
        const deleteNode=(node,val)=>{
            if(node===null){
                return null;
            }

            //SEARCH THE NODE
            if(val<node.data){
                node.left=deleteNode(node.left,val);
                return node;
            }else if(val>node.data){
                node.right=deleteNode(node.right,val);
                return node;
            }

            // NO CHILD
            if(node.left===null && node.right===null){
                return null;
            }

            //ONE CHILD
            if(node.left===null){
                return node.right;
            }
            if(node.right===null){
                return node.left
            }

            //TWO CHILD
            const minRight=findMinNode(node.right);
            node.data=minRight.data;
            node.right=deleteNode(node.right,minRight.data);
            return node;
        };

        root=deleteNode(root,value);
        return root;
    };

    // Level-Order traversal
    const levelOrder=()=>{
        if(root===null) return [];

        const result=[];

        const queue=[root];

        while(queue.length>0){
            const currentNode=queue.shift();
            result.push(currentNode.data);

            if(currentNode.left!=null){
                queue.push(currentNode.left);
            }

            if(currentNode.right!==null){
                queue.push(currentNode.right);
            }
        }

        return result;
    };

    const inOrder=()=>{
        const result=[];

        const traverse=(node)=>{

            if(!node) return;

            if(node.left) traverse(node.left);
            result.push(node.data);
            if(node.right) traverse(node.right);
            
        };

        if(root) traverse(root);
        return result;
    };

    const preOrder=()=>{
        const result=[];

        const traverse=(node)=>{
            if(!node) return;

            result.push(node.data);

            if(node.left) traverse(node.left);
            
            if(node.right) traverse(node.right);
        };

        if(root) traverse(root);
        return result;
    };

    const postOrder=()=>{
        const result=[];

        const traverse=(node)=>{

            if(!node) return;

            if(node.left) traverse(node.left);
            
            if(node.right) traverse(node.right);

            result.push(node.data);
            
        };

        if(root) traverse(root);
        return result;
    };

    const height=(node)=>{
        if(!node) return -1;

        const leftHeight=height(node.left);
        const rightHeight=height(node.right);

        return Math.max(leftHeight,rightHeight)+1;
    };

    const depth=(node)=>{
        if(!node || !root) return -1;

        const findDepth=(currentNode,targetNode,currentDepth)=>{
            if(!currentNode) return -1;

            if(currentNode===targetNode) return currentDepth;

            if(currentNode.left){
                const leftDepth=findDepth(currentNode.left,targetNode,currentDepth+1);
                if(leftDepth!==-1) return leftDepth;
            }
            
            if(currentNode.right){
                const rightDepth=findDepth(currentNode.right,targetNode,currentDepth+1);
                if (rightDepth !== -1) return rightDepth;
            }

            return -1;
            
        };

        return findDepth(root,node,0);
    };

    const isBalance=()=>{

        const checkBalance=(node)=>{
            if(!node) return{balanced:true ,height:-1}

            const left=checkBalance(node.left);
            if(!left.balanced) return {balanced:false, 
            height:0}

            const right=checkBalance(node.right);
            if(!right.balanced) return{
                balanced:false,
                height:0
            };

            const heightDiff=Math.abs(left.height-right.height);
            const balanced=heightDiff<=1;

            return{
                balanced,
                height:Math.max(left.height,right.height)+1
            };
        };

        if(!root) return true;
        return checkBalance(root).balanced;
    };

    const rebalance=()=>{
        const values=inOrder();
        
        root=buildTree(values);
        return root;
    }

    return{
        get root(){return root},
        insert,
        find,
        deleteItem,
        levelOrder,
        inOrder,
        preOrder,
        postOrder,
        height,
        depth,
        isBalance,
        rebalance
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

