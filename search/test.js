const SequenceSearch = require('./SequenceSearch')
const BinarySearch = require('./BinarySearch')
const InsertionSearch = require('./InsertionSearch')

// 顺序查找
console.log(SequenceSearch([1,4,2,5,7,3,9,6,8], 9))

// 二分查找
console.log(BinarySearch([1,2,4,6,7,9,11,12,16,54], 9))

// 插值查找
console.log(InsertionSearch([0,1,6,7,9,11,12,16,54], 9))