/**
 * Floyd 求最短路可以说是动态规划最简单的例子了吧
 * 使用的前提是可划分阶段
 * 通过每个阶段的最短路径推出下一个阶段的最短路径
 * 局部最优到全局最优,利用了动态规划的无后效性
 * @constructor
 */
function Floyd(weight, path, vertexnum) {
    for(let k = 0; k < vertexnum; k++) {
        for(let i= 0; i < vertexnum; i++) {
            for(let j = 0; j < vertexnum; j++) {
                if ((weight[i][k] > 0
                    && weight[k][j] > 0
                    && weight[i][k] < Number.MAX_SAFE_INTEGER
                    && weight[k][j] < Number.MAX_SAFE_INTEGER)
                    && (weight[i][k] + weight[k][j] < weight[i][j])) {
                    weight[i][j] = weight[i][k] + weight[k][j];
                    path[i][j] = path[k][j];
                }
            }
        }
    }
}