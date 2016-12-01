/**
 * 01背包:
 * 最基础的背包问题，特点是：每种物品仅有一件，可以选择放或不放。
 * 状态转移方程:f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]}
 * @param n
 * @param m
 * @param v
 * @param w
 * @returns {*}
 */
function package01(n, m, v, w) {
    let f = []
    v.unshift(-1),w.unshift(-1)
    for (let i = 0; i <= n; i++) {
        f[i] = []
        for (let j = 0; j <= m; j++) {
            f[i][j] = 0
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (j - v[i] >= 0) {
                f[i][j] = max(f[i-1][j], f[i-1][j-v[i]]+w[i])
            } else {
                f[i][j] = f[i-1][j]
            }
        }
    }
    return f[n][m]
}

/**
 * 01背包空间复杂度的优化
 * 状态转移方程:f[j]=max(f[j],f[j-v[i]]+w[i])
 * 原理是当前阶段的最优解只与上一阶段最优解有关,因此只需要保留上一阶段最优解
 * 在这里倒推的目的就是确保当前阶段最优解是从上一阶段的最优解推出来的
 * 除此之外对于必须装满和无需装满两种情况,初始化条件不同:
 * 1. 除F[0]外其他全赋值为 Number.MIN_SAFE_INTEGER
 * 2. 全赋值为0
 * @param n
 * @param m
 * @param v
 * @param w
 */
function betterPackage01(n, m, v, w) {
    let f = new Array(m+1)
    v.unshift(-1),w.unshift(-1)
    for (let i=0; i <= m; i++) f[i] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = m; j >= v[i]; j--) {
            f[j] = max(f[j], f[j-v[i]]+w[i])
        }
    }
    return f[m]
}

function max(x, y) {
    return x > y ? x : y
}

console.log(package01(5, 100, [77,22,29,50,99], [92,22,87,46,90]))
console.log(betterPackage01(5, 100, [77,22,29,50,99], [92,22,87,46,90]))

/**
 * 完全背包问题
 * 所有物品都有无数件
 * 状态转移方程:f[i][v]=max{f[i-1][v-k*c[i]]+k*w[i]|0<=k*c[i]<=v}
 * @param n
 * @param m
 * @param v
 * @param w
 */
function packageComplete(n, m, v, w) {
    let f = []
    v.unshift(-1),w.unshift(-1)
    for (let i = 0; i <= n; i++) {
        f[i] = []
        for (let j = 0; j <= m; j++) {
            f[i][j] = 0
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            for (let k = 0; k <= Math.floor(j/v[i]); k++) {
                f[i][j] = max(f[i-1][j], f[i-1][j-v[i]*k]+w[i]*k)
            }
        }
    }
    return f[n][m]
}

/**
 * 完全背包的优化
 * 思路与01背包的优化一样
 * 其他优化策略:
 * 1. 去除大于m的。O(N)
 * 2. 去除体积大价值小的。O(N^2)
 * 3. 转化为 01 背包求解
 * @param n
 * @param m
 * @param v
 * @param w
 * @returns {*}
 */
function betterPackageComplete(n, m, v, w) {
    let f = []
    v.unshift(-1),w.unshift(-1)
    for (let i=0; i <= m; i++) f[i] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = v[i]; j <= m; j++) {
            f[j] = max(f[j], f[j-v[i]]+w[i])
        }
    }
    return f[m]
}

console.log(packageComplete(5, 100, [77,22,29,50,99], [92,22,87,46,90]))
console.log(betterPackageComplete(5, 100, [77,22,29,50,99], [92,22,87,46,90]))

/**
 * 待补充
 * 多重背包
 * 使用转化 01 背包或者完全背包类似的方式来做
 *
 * 混合背包
 *
 * 二维费用背包:增加一维状态
 *
 * 分组背包
 *
 * 有依赖的背包
 *
 * 泛化物品
 */