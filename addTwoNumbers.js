// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// let {
//     NodeList,
//     loopCreateList
// } = require('./sequentList');
function addTwoNumbers(l1, l2) {
    let result = [];
    let carry = 0;
    while (l1 || l2) {
        let val1 = l1 && l1.val ? l1.val : 0;
        let val2 = l2 && l2.val ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = sum >= 10 ? 1 : 0;
        sum = sum >= 10 ? sum - 10 : sum;
        result.push(sum);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry) {
        result.push(carry);
    }
    return loopCreateList(result);
}
// 如果在没有loopCreateList构造方法的情况下，如何在做加法的同时构建链表
function addTwoNumbersList(l1, l2) {
    let head = null;
    let tail = null;
    let carry = 0;
    while (l1 || l2) {
        let val1 = l1 && l1.val ? l1.val : 0;
        let val2 = l2 && l2.val ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = sum >= 10 ? 1 : 0;
        sum = sum >= 10 ? sum - 10 : sum;
        if (!head) {
            head = tail = new NodeList(sum);
        }
        else {
            tail.next = new NodeList(sum);
            tail = tail.next;
        }
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    return head;
}

let l1 = loopCreateList([9, 9, 9]);
let l2 = loopCreateList([5, 9]);
console.log(addTwoNumbersList(l1, l2));