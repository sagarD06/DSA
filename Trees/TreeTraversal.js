class Node {
	constructor(value) {
		this.left = null;
		this.data = value;
		this.right = null;
	}
}

function preOrder(root) {
    if(root !== null){
        console.log(root.data);
        preOrder(root.left)
        preOrder(root.right)
    }
}

root = new Node(1);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(8);

preOrder(root)
