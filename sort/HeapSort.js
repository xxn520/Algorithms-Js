/**
 * 堆排序
 * 首先建堆,然后依次将根移到末尾,调整堆
 * 时间复杂度:O(NLogN)
 * 空间复杂度:O(N)
 * @param arr
 * @param type
 * @returns {*}
 * @constructor
 */
function HeapSort(arr, type = 'asc') {
    const len = arr.length
    let temp = null
    BuildHeap(arr, len, type)
    for(let i = len - 1; i > 0; i--){
        temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp
        HeapAdjust(arr, 0, i, type);
    }
    return arr
}

/**
 * 建堆:依次调整非叶子结点,构造大根堆或小根堆
 * 复杂度:O(NLogN)
 * @param arr
 * @param len
 * @param type
 * @constructor
 */
function BuildHeap(arr, len, type) {
    for(let i = Math.floor(len/2) - 1; i >= 0; i--) {
        HeapAdjust(arr, i, len, type)
    }
}

/**
 * 节点调整,递归
 * 复杂度:O(LogN)
 * @param arr
 * @param i
 * @param len
 * @param type
 * @constructor
 */
function HeapAdjust(arr, i, len, type) {
    let lchild = i*2+1
    let rchild = i*2+2
    let max = i, min = i
    let temp = null
    if(lchild < len && arr[lchild] > arr[max] && type === 'asc'){
        max = lchild
    }
    if(rchild < len && arr[rchild] > arr[max] && type === 'asc'){
        max = rchild
    }
    if(lchild < len && arr[lchild] < arr[min] && type === 'desc'){
        min = lchild
    }
    if(rchild < len && arr[rchild] < arr[min] && type === 'desc'){
        min = rchild
    }
    if (max != i && type === 'asc') {
        temp = arr[i]
        arr[i] = arr[max]
        arr[max] =temp
        HeapAdjust(arr, max, len, type)
    }
    if (min != i && type === 'desc') {
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] =temp
        HeapAdjust(arr, min, len, type)
    }
}

module.exports = HeapSort