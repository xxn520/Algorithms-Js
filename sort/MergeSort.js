/**
 * 归并排序
 * 特征:稳定、外部排序
 * 时间复杂度:O(NLogN)
 * 空间复杂度:O(N)
 * @param arr
 * @param type
 * @returns {*}
 * @constructor
 */
function MergeSort(arr, type = 'asc') {
    const len = arr.length
    const middle = Math.floor(len/2)
    if (len === 1) {
        return arr
    }
    return merge(MergeSort(arr.slice(0, middle), type), MergeSort(arr.slice(middle), type), type)
}

/**
 * 合并
 * 复杂度:O(N)
 * @param left
 * @param right
 * @param type
 * @returns {Array.<*>}
 */
function merge(left, right, type) {
    let result = []
    while(left.length > 0 && right.length > 0) {
        if (left[0] < right[0] && type === 'asc' ||
            left[0] > right[0] && type === 'desc') {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left).concat(right)
}

module.exports = MergeSort