/**
 * 选择排序
 * 特征:不稳定(序列5 8 5 2 9)、内部排序
 * 时间复杂度:O(N^2)
 * 空间复杂度:O(N)
 * @param arr
 * @param type
 * @returns {*}
 * @constructor
 */
function SelectionSort(arr, type = 'asc') {
    const len = arr.length
    let temp = null
    for (let i = 0; i < len; i++) {
        let max = i, min = i        // 每次遍历记录下最大或最小的索引值,然后与 i 位置的元素进行交换。
        for (let j = i+1; j < len; j++) {
            if (type === 'asc' && arr[j] < arr[min]) {
                min = j
            } else if (type === 'desc' && arr[j] > arr[max]) {
                max = j
            }
        }
        if (type === 'asc') {
            temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        } else {
            temp = arr[max]
            arr[max] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

module.exports = SelectionSort