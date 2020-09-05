//binary tree paths
//leetcode #257
// easy difficulty

/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
*/

//node class
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//construct tree
var tree = new Node(1)
tree.left = new Node(2)
tree.right = new Node(3)
tree.left.right = new Node(5)

//recursive function
const depthSearch = (root, currentPath, paths) => {
    currentPath += root.value
    if (root.left === null && root.right === null) {
      paths.push(currentPath)
    }
    currentPath += '->'
    if (root.left !== null) {
      depthSearch(root.left, currentPath, paths)
    }
    if (root.right !== null) {
      depthSearch(root.right, currentPath, paths)
    }
}

//main function
var binaryTreePaths = function(root) {
  const paths = []
  if (root === null) return paths

  depthSearch(root, '', paths)
  return paths
}

console.log(binaryTreePaths(tree))