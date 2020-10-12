// 字符串中的最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"
// 第一版 有问题 无法正确得到ccc和cccc的结果
function longestPalindromeOne(s) {
    let resultObj = [];
    if (s.length === 0 || s.length === 1) {
        resultObj[s.length] = s;
    }
    let lastIndex = s.length - 1;
    for (let index = 0; index < lastIndex; index++) {
        let leftLen = index - 0;
        let rightLen = s[index] === s[index + 1] ? lastIndex - index - 1 : lastIndex - index;
        let leftIndex = index;
        let rightIndex = s[index] === s[index + 1] ? index + 1 : index;
        let offset = 1;
        while (offset <= Math.min(leftLen, rightLen)) {
            if (s[leftIndex - offset] && s[rightIndex + offset] && s[leftIndex - offset] === s[rightIndex + offset]) {
                offset++;
            }
            else {
                break;
            }
        }
        offset = offset - 1;
        let l = leftIndex - offset;
        let r = rightIndex + offset;
        let palindrome = s.substring(l, r + 1);
        let palindromeLen = r - l + 1;
        resultObj[palindromeLen] = resultObj[palindromeLen] || palindrome;
    }
    return resultObj.pop();
}

// 第二版 中心法
function longestPalindrome(s) {
    let len = s.length;
    function getMaxIndex(left, right) {
        while (left >= 0 && right < len && s[left] === s[right]) {
            left--;
            right++;
        }
        return {
            left: left + 1,
            right: right - 1,
            length: right - 1 - (left + 1)
        };
    }
    let start = 0;
    let end = 0;
    for (let i = 0; i < len; i++) {
        // 两种情况都判断 可以解决第一版连续相同字符的问题
        let maxIndex1 = getMaxIndex(i, i); // aba类型
        let maxIndex2 = getMaxIndex(i, i + 1); // abba类型
        let maxIndex = maxIndex1.length > maxIndex2.length ? maxIndex1 : maxIndex2;
        if (maxIndex.length > end - start) {
            start = maxIndex.left;
            end = maxIndex.right;
        }
    }
    return s.substring(start, end + 1);
}