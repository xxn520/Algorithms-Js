/**
 * 插值查找
 * 有序,针对二分查找进行了优化主要是对范围进行了贪心的自适应
 * @param arr
 * @param value
 * @returns {number}
 * @constructor
 */
function InsertionSearch(arr, value) {
    const len = arr.length
    let low = 0, high = len - 1
    while(low < high) {
        let mid = low + Math.ceil((value - arr[low])/(arr[high] - arr[low]) * (high - low))
        if (arr[mid] === value) return mid
        if (arr[mid] > value) high = mid - 1
        if (arr[mid] < value) low = mid + 1
    }
    return -1
}

module.exports = InsertionSearch