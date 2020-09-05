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
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

//construct tree
var tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.right = new TreeNode(5)


var binaryTreePaths = function(root) {
const paths = [];
const currentPath = []
if (!root) return paths
return dfs(root, currentPath, paths)
}

function dfs(root, currentPath, paths){
currentPath.push(root.val);

if (!root.left && !root.right){
  paths.push(currentPath.join('->'))
} else {
  dfs(root.left, paths, currentPath.slice())
  dfs(root.right, paths, currentPath.slice())
}
return paths;
}

console.log(binaryTreePaths(tree))
