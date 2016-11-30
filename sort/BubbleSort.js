/**
 * 冒泡排序
 * 特征:稳定、内部排序
 * 时间复杂度:O(N^2)
 * 空间复杂度:O(N)
 * 除了下面的 flag 剪枝策略外，还可以使用双向冒泡，几乎可以减少一半的排序趟数		
 * @param arr
 * @param type
 * @returns {*}
 * @constructor
 */
function BubbleSort(arr, type = 'asc') {
	const len = arr.length
	let temp = null, flag = false
	for (let i = 0; i < len; i++) {                 // 在不剪枝的情况下,总共冒泡 len 次,每次将最大或最小的冒泡到
		flag = false
		for (let j = 0; j < len-i; j++) {			// 枚举未排序的进行相邻的交换
			if (type === 'asc') {
				if (arr[j] > arr[j+1]) {
					flag = true
					temp = arr[j]
					arr[j] = arr[j+1]
					arr[j+1] = temp
				}
			} else {
				if (arr[j] < arr[j+1]) {
					flag = true
					temp = arr[j]
					arr[j] = arr[j+1]
					arr[j+1] = temp
				}
			}
		}
		if (!flag) {	// 如果本次循环没有进行交换，说明已经排好序，可以直接退出循环。
			break
		}
	}
	return arr
}

module.exports = BubbleSort