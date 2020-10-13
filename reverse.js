// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 示例 1:
// 输入: 123
// 输出: 321
//  示例 2:
// 输入: -123
// 输出: -321
// 示例 3:
// 输入: 120
// 输出: 21
// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-integer
// 方法1 转成数组求值法
var reverse1 = function (x) {
    let m = x < 0;
    x = m ? -1 * x : x;
    x = Array.from('' + x);
    let len = x.length;
    let temp = '';
    let halfLen = len % 2 ? (len + 1) / 2 : len / 2;
    for (let i = 0; i < halfLen; i++) {
        temp = x[i];
        x[i] = x[len - i - 1];
        x[len - i - 1] = temp;

    }
    let result = m ? -1 * x.join('') : 1 * x.join('');
    if ((m && result < -1 * 2 ** 31) || (!m && result > 2 ** 31 - 1)) {
        return 0;
    }
    return result;
};
// 方法二 数值计算法
// result * 10 + x % 10 取出末位 x % 10（负数结果还是负数，无需关心正负），拼接到 result 中。
// x / 10 去除末位，| 0 强制转换为32位有符号整数。
// 通过 | 0 取整，无论正负，只移除小数点部分（正数向下取整，负数向上取整）。
// result | 0 超过32位的整数转换结果不等于自身，可用作溢出判断。

// 作者：zoffer
// 链接：https://leetcode-cn.com/problems/reverse-integer/solution/wei-yun-suan-ji-jian-jie-fa-by-ijzqardmbd/

var reverse = function (x) {
    let result = 0;
    while (x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};
// console.log(reverse(123))
console.log(reverse(1534236469));