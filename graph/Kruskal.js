/**
 * 适用于边稀疏的图
 * 先将边排序,从小到大枚举
 * 如果边的两个节点不在同一个强连通图当中,那么把这条边加入,合并
 * 直到加入 N-1 条边,判断强连通图使用并查集
 * @constructor
 */
function Kruskal() {

}