/**
 * 求含负权图的单源最短路径算法
 * 时间复杂度 O(N*E)
 * 复杂度很高需要优化,见 Spfa
 * @param a
 * @param e
 * @param v0
 * @returns {Array}
 * @constructor
 */
function BellmanFord(a, e, v0) {
    const len = a.length
    let dist = []
    for (let i = 0; i < len; i++) {
        dist[i] = Number.MAX_SAFE_INTEGER
    }
    dist[0] = 0
    for (let i = 1; i < len; i++) {
        let flag = false
        for (let j = 0; j < e.length; j++) {
            if (dist[e[j].u] + e[j].cost < dist[e[j].v]) {
                dist[e[j].v] = dist[e[j].u] + e[j].cost
                flag = true
            }
        }
        if (!flag) return dist
    }
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
    let e = [
        {u: 0, v: 1, cost: 6},
        {u: 0, v: 2, cost: 3},
        {u: 1, v: 0, cost: 6},
        {u: 1, v: 2, cost: 2},
        {u: 1, v: 3, cost: 5},
        {u: 2, v: 0, cost: 3},
        {u: 2, v: 1, cost: 2},
        {u: 2, v: 3, cost: 3},
        {u: 2, v: 4, cost: 4},
        {u: 3, v: 1, cost: 5},
        {u: 3, v: 2, cost: 3},
        {u: 3, v: 4, cost: 2},
        {u: 3, v: 5, cost: 3},
        {u: 4, v: 2, cost: 4},
        {u: 4, v: 3, cost: 2},
        {u: 4, v: 5, cost: 5},
        {u: 5, v: 3, cost: 3},
        {u: 5, v: 4, cost: 5}
    ]
    console.log(BellmanFord(a, e, 0))
}()