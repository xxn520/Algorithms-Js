let n = 8
let a = []          // 列坐标
let b = [], c = [], d = []
let ans = 0

function dfs(row) {
    if (row > n) {
        ans++
        let ret = ''
        for (let j = 1; j < n; j++) {
            ret = ret + a[j] + ' '
        }
        ret += a[n]
        console.log(ret)
    } else {
        for (let i = 1; i <= n; i++) {
            if (b[i] === 0 && c[row - i] === 0 && d[row + i] === 0) {
                b[i] = 1
                c[row - i] = 1
                d[row + i] = 1
                a[row] = i
                dfs(row+1)
                b[i] = 0
                c[row - i] = 0
                d[row + i] = 0
            }
        }
    }
}

function queue(number) {
    n = number
    for (let i = 1-n; i <= 2*n; i++) {
        b[i] = 0
        c[i] = 0
        d[i] = 0
    }
    ans = 0
    dfs(1)
    console.log(`${n}皇后方案有${ans}种!`)
}

/**
 * dfs 再不剪枝的情况下 n 的值可接受的在 15 以内(一秒为时间限制)
 */
console.time('a')
queue(13)
console.timeEnd('a')