/**
 * 部分背包问题描述:
 * 给定一个最大载重量为 M 的包和 N 种物品，物品适可分割的。已知第 i 种物品的最多拥有 Wi 公斤，其商品价值为 Vi 元/公斤，
 * 编程确定一个方案，使得装入包中的所有物品总价值最大。
 *
 * 0/1 背包问题描述:
 * 与部分背包的区别在于物品是否可分割。
 *
 * 比较:
 * 部分背包问题可以使用贪心算法,而 0/1 背包问题需要使用动态规划或搜索等算法,不能使用贪心算法。
 * 原因在于贪心算法要求子问题无后效性,也就是某个状态以前的过程不会影响以后的状态，只与当前状态有关。
 * 落实到贪心算法来看就是子问题的最优解之间相互不影响。
 * 对于 0/1 背包,选择某个大小的物品可能会影响到下面的装配,而部分背包则不会,尽量装性价比高的不会影响其它的装配,并且最后肯定是装满的。
 * 但是贪心与动态规划还是有相同点的,就是两者都是满足最优子结构的。
 */