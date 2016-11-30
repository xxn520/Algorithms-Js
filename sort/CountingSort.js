/**
 * 计数排序
 * 前提是待排序的内容为一定范围内的整数
 * 特征:稳定、外部排序
 * 时间复杂度:O(N+K),K是整数范围
 * 空间复杂度:O(N)
 * @param arr
 * @param type
 * @returns {Array}
 * @constructor
 */
function CountingSort(arr, type = 'asc') {
    const len = arr.length
    let countArr = {}, result = new Array(len)
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < len; i++) {
        let cur = arr[i]
        if (arr[i] > max) {
            max = arr[i]
        }
        countArr[cur] = countArr[cur] ? countArr[cur]+1 : 1
    }
    for (let i = 2; i <= max; i++) {
        countArr[i] += countArr[i-1]
    }
    for (let i = len - 1; i >= 0; i--) {
        if (type === 'asc') {
            result[countArr[arr[i]]-1] = arr[i]
        } else {
            result[len - countArr[arr[i]]] = arr[i]
        }
        countArr[arr[i]]--
    }
    return result
}

module.exports = CountingSort