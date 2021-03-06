## Algorithms-Js

Js 实现各大算法:

1. 排序算法
 1. [冒泡排序](./sort/BubbleSort.js)
 2. [插入排序](./sort/InsertSort.js)
 3. [选择排序](./sort/SelectionSort.js)
 4. [快速排序](./sort/QuickSort.js)
 5. [堆排序](./sort/HeapSort.js)
 6. [归并排序](./sort/MergeSort.js)
 7. [计数排序](./sort/CountingSort.js)
 8. [基数排序](./sort/RadixSort.js)
 9. [桶排序](./sort/BucketSort.js)
2. 查找算法
 1. [顺序查找](./search/SequenceSearch.js)
 2. [二分查找](./search/BinarySearch.js)
 3. [插值查找](./search/InsertionSearch.js)
 4. [斐波那契查找(未完成)](./search/FibonacciSearch.js)
 5. [二叉查找树](./search/BinarySearchTree.js)
 6. [平衡查找树之2-3树(未完成)](./search/TwoThreeTree.js)
 7. [平衡查找树之红黑树](./serach/RedBlackTree.js)
 8. [分块查找](./search/BlockSearch.js)
 9. [哈希查找](./search/HashSearch.js)
3. 最优解算法之暴力搜索算法
 1. 深度优先搜索
    1. [n皇后问题](./dfs/NQueens.js)
    2. [01背包](./dfs/Package01.js)
    3. [石油储蓄区](./dfs/OilDeposits.js)
    4. 等等,待补充
 2. 广度优先搜索
    1. [八数码问题](./bfs/EightNumber.js)
    2. [走迷宫最短路](./bfs/Maze.js)
    3. 双向广搜
    4. A*算法
 3. 优化策略:可行性剪枝、最优性剪枝等
4. 最优解算法之贪心算法
 1. [部分背包问题](./greedy/PackageGreedy.js)
 2. [哈夫曼树](./greedy/HuffmanGreedy.js)
 3. 最短路算法(放到图论中写)
 4. 最小生成树算法(放到图论中写)
5. 最优解算法之动态规划算法
 1. [背包九讲](./dp/PackageDp.js)
 2. [Floyd算法](./dp/Floyd.js)
 3. [最长公共子串](./dp/LCS.js)
 4. 等等,待补充
6. 字符串模式匹配
 1. [kmp算法](./string/kmp.js)
7. 树算法
 1. 线段树
 2. 树状数组
 3. 字母树
 4. 等等
8. 图论算法
 1. 图的存储(N点、M边)
    1. 邻接矩阵 O(N^2)
    2. 邻接表(动态与静态)
    3. 边表 O(M)
 2. 最短路
    1. [Dijkstra 算法(堆优化)](./graph/Dijkstra.js)
    2. floyd 算法(见动态规划)
    3. [BellmanFord 算法](./graph/BellmanFord.js)
    4. [Spfa 算法](./graph/Spfa.js)
 3. 最小生成树
    1. [Prim 算法](./graph/Prim.js)
    2. [Kruskal 算法](./graph/Kruskal.js)
 4. [拓扑排序](./graph/TopologicalSort.js)
 5. 网络流
 6. 二分图
 7. 强连通图与强流通分量
 8. 等等
9. 数论算法