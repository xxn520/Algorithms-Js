/**
 * 桶排序
 * 这只是简化版的桶排序
 * 特征:稳定、外部排序
 * 平均时间复杂度为线性的O(N+C)，其中C为桶内快排的时间复杂度。
 * 如果相对于同样的N，桶数量M越大，其效率越高，最好的时间复杂度达到O(N)。
 * 空间复杂度为O(N+M)，如果输入数据非常庞大，而桶的数量也非常多，则空间代价无疑是昂贵的。
 * @param arr
 * @param max
 * @param type
 * @returns {Array}
 * @constructor
 */
function BucketSort(arr, max, type = 'asc') {
    const len = arr.length
    let countArr = new Array(max)
    let result = []
    for (let i = 0; i < len; i++) {
        let cur = arr[i]
        countArr[cur] = countArr[cur] ? countArr[cur]+1 : 1
    }
    if (type === 'asc') {
        for (let i = 0; i <= max; i++) {
            while (countArr[i] > 0) {
                result.push(i)
                countArr[i]--
            }
        }
    } else {
        for (let i = max; i >= 0; i--) {
            while (countArr[i] > 0) {
                result.push(i)
                countArr[i]--
            }
        }
    }
    return result
}

module.exports = BucketSort