//Merge two sorted linked lists
//Leetcode #21
//easy difficulty

/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

//helper function for making list nodes
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//O(n) time complexity where n is the size of the smaller list
//O(n) space complexity
const mergeTwoLists = (l1, l2) => {
  let resultList = new ListNode(-1)
  let resultIdx = resultList

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      resultIdx.next = l1
      l1 = l1.next
    } else {
      resultIdx.next = l2
      l2 = l2.next
    }
    resultIdx = resultIdx.next
  }

  if (l1 !== null) resultIdx.next = l1
  else resultIdx.next = l2

  return resultList.next
}

var n3 = new ListNode(10, null);
var n2 = new ListNode(3, n3);
var n1 = new ListNode(1, n2);
var L1 = n1

var n6 = new ListNode(9, null);
var n5 = new ListNode(6, n6);
var n4 = new ListNode(5, n5);
var L2 = n4

console.log(JSON.stringify(mergeTwoLists(L1, L2), null, 4))
