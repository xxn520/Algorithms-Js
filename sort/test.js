const InsertSort = require('./InsertSort')
const BubbleSort = require('./BubbleSort')
const SelectionSort = require('./SelectionSort')
const QuickSort = require('./QuickSort')
const HeapSort = require('./HeapSort')
const MergeSort = require('./MergeSort')
const CountingSort = require('./CountingSort')
const BucketSort = require('./BucketSort')

// 插入排序
console.log(InsertSort([1,4,2,5,7,3,9,6,8]))
console.log(InsertSort([1,4,2,5,7,3,9,6,8], 'desc'))

// 冒泡排序
console.log(BubbleSort([1,4,2,5,7,3,9,6,8]))
console.log(BubbleSort([1,4,2,5,7,3,9,6,8], 'desc'))

// 选择排序
console.log(SelectionSort([1,4,2,5,7,3,9,6,8]))
console.log(SelectionSort([1,4,2,5,7,3,9,6,8], 'desc'))

// 快速排序
let arr = [1,4,2,5,7,3,9,6,8]
QuickSort(arr, 0, 8)
console.log(arr)
QuickSort(arr, 0, 8, 'desc')
console.log(arr)

// 堆排序
console.log(HeapSort([1,4,2,5,7,3,9,6,8]))
console.log(HeapSort([1,4,2,5,7,3,9,6,8], 'desc'))

// 归并排序
console.log(MergeSort([1,4,2,5,7,3,9,6,8]))
console.log(MergeSort([1,4,2,5,7,3,9,6,8], 'desc'))

// 计数排序
console.log(CountingSort([1,4,2,5,7,3,9,6,8]))
console.log(CountingSort([1,4,2,5,7,3,9,6,8], 'desc'))

// 桶排序
console.log(BucketSort([1,4,2,5,7,3,9,6,8], 9))
console.log(BucketSort([1,4,2,5,7,3,9,6,8], 9, 'desc'))