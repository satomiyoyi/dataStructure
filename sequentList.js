// 将数组转化为数序链表
function NodeList(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
}
// 递归方法
// 思考点 是否可以优化成尾递归优化
function iterateCreateList(arr) {
    if (arr.length === 0) {
        return null;
    }
    if (arr.length === 1) {
        return new NodeList(arr[0], null);
    }
    return new NodeList(arr[0], iterateCreateList(arr.slice(1)));
}


// 循环方法
let loopCreateList = function (arr) {
    let head = null;
    let tail = null;
    for (let item of arr) {
        if (!head) {
            head = tail = new NodeList(item);
        }
        else {
            tail.next = new NodeList(item);
            tail = tail.next;
        }
    }
    return head;
}

// module.exports = {
//     NodeList,
//     loopCreateList
// };
// console.log(iterateCreateList([1, 2, 3]))
// console.log(loopCreateList([1, 2, 3]))