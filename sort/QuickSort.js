/**
 * 快速排序
 * 平均速度最快
 * 特征:不稳定、内部排序
 * 时间复杂度:O(NLogN),随机化优化下不会退化为O(N)
 * 空间复杂度:O(N)
 * @param arr
 * @param l
 * @param r
 * @constructor
 */
function QuickSort(arr, l, r, type = 'asc') {
    let i = l, j = r, mid = arr[Math.floor((l+r)/2)]   // 防止复杂度退化为 O(N^2)
    let temp = null
    while(i <= j) {
        if (type === 'asc') {
            while(arr[j] > mid) j--
            while(arr[i] < mid) i++
        } else {
            while(arr[j] < mid) j--
            while(arr[i] > mid) i++
        }
        if (i <= j) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    if (l < j) QuickSort(arr, l, j, type)
    if (i < r) QuickSort(arr, i, r, type)
}

module.exports = QuickSort