/**
 * hash查找
 * 哈希函数为“除法取余法”，解决冲突为“开放地址线性探测法”。
 * @param arr
 * @param value
 * @returns {number}
 * @constructor
 */
function HashSearch(arr, hashLength, value) {
    const len = arr.length
    let hash = new Array(hashLength)
    for (let i = 0; i < len; i++) {
        hashFunc(hash, hashLength, arr[i])
    }
    let hashAddress = value % hashLength
    while (hash[hashAddress] && hash[hashAddress] !== value) {
        hashAddress = (++hashAddress) % hashLength
    }
    if (hash[hashAddress])
        return hashAddress
    return -1
}

function hashFunc(hash, hashLength, value) {
    let key = value % hashLength
    while (hash[key]) {
        key = (++key) % hashLength
    }
    hash[key] = value
}

module.exports = HashSearch