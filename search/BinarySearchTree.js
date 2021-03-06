/**
 * 二叉搜索树
 * @param arr
 * @param value
 * @returns {*}
 * @constructor
 */
function BinarySearchTree(arr, value) {
    const len = arr.length
    let root = new Node(arr[0], 0, null, null)
    for (let i = 1; i < len; i++) {
        insertToBst(root, arr[i], i)
    }
    let cur = root
    while (cur.value !== value) {
        if (cur.value > value) {
            cur = cur.left
        } else {
            cur = cur.right
        }
        if (cur === null) {
            return -1
        }
    }
    return cur.key
}

/**
 * 树节点
 * @param value
 * @param key
 * @param left
 * @param right
 * @constructor
 */
function Node(value, key, left, right) {
    this.value = value
    this.key = key
    this.left = left
    this.right = right
}

/**
 * 插入节点
 * 小的插入左子树,大的插入右子树
 * @param node
 * @param value
 * @param key
 */
function insertToBst(node, value, key) {
    if (value < node.value) {
        if (node.left) {
            insertToBst(node.left, value, key)
        } else {
            let cur = new Node(value, key, null, null)
            node.left = cur
        }
    } else {
        if (node.right) {
            insertToBst(node.right, value, key)
        } else {
            let cur = new Node(value, key, null, null)
            node.right = cur
        }
    }
}

module.exports = BinarySearchTree