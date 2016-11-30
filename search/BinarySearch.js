/**
 * 二分查找
 * 有序查找,需要先排序
 * 时间复杂度:O(Log2N)
 * @param arr
 * @param value
 * @returns {number}
 * @constructor
 */
function BinarySearch(arr, value) {
    const len = arr.length
    let low = 0, high = len - 1
    while(low < high) {
        let mid = Math.floor((low + high)/2)
        if (arr[mid] === value) return mid
        if (arr[mid] > value) high = mid - 1
        if (arr[mid] < value) low = mid + 1
    }
    return -1
}

module.exports = BinarySearch