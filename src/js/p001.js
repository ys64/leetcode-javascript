// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// It failed with [5],[5].
// It is failing with [1,8],[0]
var addTwoNumbers = function(l1, l2) {
  let carry_over = 0;
  let previous = null;
  let answer = null;
  while (true) {
    if ((l1 === null || l2 === null) && carry_over === 0) {
      break;
    }

    let first = 0;
    if (l1 !== null) {
      first = l1.val;
      l1 = l1.next;
    }

    let second = 0;
    if (l2 !== null) {
      second = l2.val;
      l2 = l2.next;
    }

    const ans = (first + second + carry_over) % 10;
    carry_over = parseInt((first + second + carry_over) / 10);

    if (previous == null) {
      answer = new ListNode(ans, undefined);
      previous = answer;
    } else {
      const temp = new ListNode(ans, undefined);
      previous.next = temp;
      previous = temp;
    }
  }
  console.log(answer);

  return answer;
};

const ln1_3 = new ListNode(3, undefined);
const ln1_2 = new ListNode(4, ln1_3);
const ln1_1 = new ListNode(2, ln1_2);

const ln2_3 = new ListNode(4, undefined);
const ln2_2 = new ListNode(6, ln2_3);
const ln2_1 = new ListNode(5, ln2_2);

addTwoNumbers(ln1_1, ln2_1);
