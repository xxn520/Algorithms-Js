const COLOR_BLACK = 'black'
const COLOR_RED = 'red'

/**
 * 红黑树
 * 和二叉查找树的区别在建树上,树是平衡树,高度比普通的二叉查找树低
 * 每次插入节点后都会进行树的调整
 * 如果节点的右子节点为红色，且左子节点位黑色，则进行左旋操作
 * 如果节点的左子节点为红色，并且左子节点的左子节点也为红色，则进行右旋操作
 * 如果节点的左右子节点均为红色，则执行FlipColor操作，提升中间结点。
 * @param arr
 * @param value
 * @returns {*}
 * @constructor
 */
function RedBlackTree(arr, value) {
    const len = arr.length
    let root = new Node(arr[0], 0, COLOR_BLACK, null, null)
    for (let i = 1; i < len; i++) {
        insertToRbt(root, arr[i], i)
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
 * 左旋
 * @param node
 * @returns {*}
 */
function rotateLeft(node)
{
    let originRight = node.Right
    node.Right = originRight.Left
    originRight.Left = node
    originRight.color = node.color
    node.color = COLOR_RED
    return originRight
}

/**
 * 右旋
 * @param node
 * @returns {*|Node}
 */
function rotateRight(node) {
    let orignLeft = node.left
    node.left = orignLeft.right
    orignLeft.right = node
    orignLeft.color = node.color
    node.color = COLOR_RED
    return orignLeft
}

/**
 * 插入节点
 * @param node
 * @param value
 * @param key
 */
function insertToRbt(node, value, key) {
    if (value < node.value) {
        if (node.left) {
            insertToRbt(node.left, value, key)
        } else {
            let cur = new Node(value, key, COLOR_RED, null, null)
            node.left = cur
        }
    } else {
        if (node.right) {
            insertToRbt(node.right, value, key)
        } else {
            let cur = new Node(value, key, COLOR_RED, null, null)
            node.right = cur
        }
    }

    if (isRed(node.Right) && !isRed(node.Left)) rotateLeft(node)
    if (isRed(node.Left) && isRed(node.Left.Left)) rotateRight(node)
    if (isRed(node.Left) && isRed(node.Right)) flipColor(node)
}


function isRed(node) {
    return node && node.color === COLOR_RED
}

/**
 * 颜色置换
 * @param node
 */
function flipColor(node) {
    node.left.color = node.right.color = COLOR_BLACK
    node.color = COLOR_RED
}

function Node(value, key, color, left, right) {
    this.value = value
    this.key = key
    this.color = color
    this.left = left
    this.right = right
}

module.exports = RedBlackTree