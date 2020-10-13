// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G
var convert = function (s, numRows) {
    let sLen = s.length;
    let resultObj = {};
    let resultString = '';
    // 建立z字空间
    for (let i = 0; i < numRows; i++) {
        resultObj['l' + i] = [];
    }
    // 分母的值是每个分组的元素个数 每个分组为一个折角
    // 以5为例 一个分组就是5+3=8个元素
    let fenmu = numRows + numRows - 2;
    // 将字符串以序号形式进行遍历
    for (let sIndex = 0; sIndex < sLen; sIndex++) {
        // 序号除以分组得到所在行数
        // 注意边界情况，femu不能为0 ，如果为0 会返回NAN阻塞后续操作，因此添加默认为0
        let lNum = sIndex % fenmu || 0;
        // 如果行数超过上线
        if (lNum > numRows - 1) {
            // 从新定义行数为 行数 - 当前超限行数%（行数 - 1）
            lNum = (numRows - 1) - lNum % (numRows - 1);
        }
        // 添加到Z型数组中
        resultObj['l' + lNum].push(s[sIndex]);
    }
    for (let i = 0; i < numRows; i++) {
        resultString += resultObj['l' + i].join('');
    }
    return resultString;
};
console.log(convert('LEETCODEISHIRING', 4));