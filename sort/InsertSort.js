/**
 * 插入排序
 * 特征:稳定、内部排序
 * 时间复杂度:最优O(N)、最差O(N^2)
 * 空间复杂度:O(N)
 * @param arr
 * @param type
 * @returns {*}
 * @constructor
 */
function InsertSort(arr, type = 'asc') {
	for (let i = 1, len = arr.length; i < len; i++) {
        let j = i                   // 插入的位置,初始为 i。
        let key = arr[i]            // 待插入的值。
        if (key < arr[i-1] && type === 'asc'){   // 当待插入元素小于已排序最大的,且为升序,需要排序。
            while (j > 0 && key < arr[j-1]) {    // 从已排序尾部开始逐个比较、后移,确定插入位置 j。
                arr[j] = arr[j-1]
                j--
            }
        } else if (key > arr[i-1] && type === 'desc') {     // 当待插入元素大于已排序最小的,且为降序,需要排序。
            while (j > 0 && key > arr[j-1]) {               // 从已排序尾部开始逐个比较、后移,确定插入位置 j。
                arr[j] = arr[j-1]
                j--
            }
        }
        arr[j] = key                // 插入待排序元素到求得的位置
	}
    return arr
}

module.exports = InsertSort