const SequenceSearch = require('./SequenceSearch')
const BinarySearch = require('./BinarySearch')
const InsertionSearch = require('./InsertionSearch')
const BinarySearchTree = require('./BinarySearchTree')
const RedBlackTree = require('./RedBlackTree')
const HashSearch = require('./HashSearch')

// 顺序查找
console.log(SequenceSearch([1,4,2,5,7,3,9,6,8], 9))

// 二分查找
console.log(BinarySearch([1,2,4,6,7,9,11,12,16,54], 9))

// 插值查找
console.log(InsertionSearch([0,1,6,7,9,11,12,16,54], 9))

// 二叉查找树
console.log(BinarySearchTree([1,4,2,5,7,3,9,6,8], 6))

// 红黑树
console.log(RedBlackTree([0,1,6,7,9,11,12,16,54], 9))

// 哈希查找
console.log(HashSearch([13,29,27,28,26,30,38,9,7,44,17], 13, 30))