/**
 * 最长公共子串
 * 最优子结构:xi与yi的最长公共子串可以由,xi-1、yi-1推出
 * 重叠子问题
 * 三种情况:
 * 1. xi = yj, f[i][j] = f[i-1][j-1] + 1
 * 2. xi != yj, f[i][j] = max(f[i-1][j], f[i][j-1])
 * 3. i = 0 或 j = 0,那么为0
 * @param x
 * @param y
 * @returns {*}
 * @constructor
 */
function LCS(x, y) {
    const n = x.length, m = y.length
    let f = []
    f[0] = []
    x.unshift(-1), y.unshift(-1)
    for (let i = 1; i <= n; i++) {
        f[i] = []
        f[i][0] = 0
    }
    for (let i = 1; i <= m; i++) f[0][m] = 0

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (x[i] === y[j]) {
                f[i][j] = f[i-1][j-1] + 1
            } else {
                f[i][j] = f[i-1][j] > f[i][j-1] ? f[i-1][j] : f[i][j-1]
            }
        }
    }

    return f[n][m]
}

console.log(LCS(['A','B','C','B','D','A','B'], ['B','D','C','A','B','A']))