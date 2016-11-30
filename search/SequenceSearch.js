/**
 * 循序查找
 * 无序查找
 * 时间复杂度:O(N)
 * @param arr
 * @param value
 * @returns {number}
 * @constructor
 */
function SequenceSearch(arr, value) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

module.exports = SequenceSearch