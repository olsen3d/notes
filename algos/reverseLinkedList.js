/*
leetcode 206 Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

var reverseList = function(head) {
  let previous = null
  let current = head

  while (current !== null) {
    const next = current.next
    current.next = previous
    previous = current
    current = next
  }
  return previous
}

/*


    prev  curr  next
A  >  B  >  C  >  D  >  E

*/
