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

function Node(value, key, left, right) {
    this.value = value
    this.key = key
    this.left = left
    this.right = right
}

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