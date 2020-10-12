class Stack {
    constructor() {
        // 数组模拟栈的形式 数组尾部为栈顶部 数组头部为栈底
        this.items = [];
    }
    // 入栈
    push(ele) {
        this.items.push(ele);
    }
    // 出栈
    pop() {
        this.items.pop();
    }
    get peek() {
        return this.items[this.items.length - 1]
    }
}

const stack = new Stack();
stack.push(2);
console.log(stack.peek);