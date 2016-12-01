/**
 * Dijkstra 算法(单源最短路径)
 * 分为两个点集s,t,一开始只有起点在s中其他都在t中
 * 每次找出另一个点集t中距离起点最近的点,加入s集
 * 并且调整到t集中点的距离
 * 优化:找最近的点可以使用对来优化,将复杂度从 O(N^2) 降到 O(NLogN)
 * 无法判断含负权边的图的最短路
 * @param a 邻接矩阵
 * @param v0 起点
 * @constructor
 */
function Dijkstra(a, v0) {
    const len = a.length
    let dist = [], flag = [], prev = []
    for (let i = 0; i < len; i++) {
        flag[i] = false
        dist[i] = a[v0][i]
        if(dist[i] == Number.MAX_SAFE_INTEGER) {
            prev[i] = -1
        } else {
            prev[i] = v0
        }
    }
    flag[v0] = true
    dist[v0] = 0
    for(let i = 1; i < len; i++) {
        let min = Number.MAX_SAFE_INTEGER
        let tmpj = v0
        for (let j = 0; j < len; j++) {
            if (!flag[j] && dist[j] < min) {
                tmpj = j
                min = dist[j]
            }
        }
        flag[tmpj] = true
        for (let j = 0; j < len; j++) {
            if (dist[tmpj]+a[tmpj][j] < dist[j] && !flag[j]) {
                dist[j] = dist[tmpj]+a[tmpj][j]
                prev[j] = tmpj
            }
        }
    }
    console.log(dist)
    console.log(prev)
}

/**
 * 0 6 3 0 0 0
 * 6 0 2 5 0 0
 * 3 2 0 3 4 0
 * 0 5 3 0 2 3
 * 0 0 4 2 0 5
 * 0 0 0 3 5 0
 */
!function () {
    const max = Number.MAX_SAFE_INTEGER
    let a = [
        [max, 6, 3, max, max, max],
        [6, max, 2, 5, max, max],
        [3, 2, max, 3, 4, max],
        [max, 5, 3, max, 2, 3],
        [max, max, 4, 2, max, 5],
        [max, max, max, 3, 5, max]
    ]
    Dijkstra(a, 0)
}()