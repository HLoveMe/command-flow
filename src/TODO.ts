// 1:根据环境 去掉work
// Object 实现修改
// T | null 和 null的区分
// RunCommandWork  new RunCommandWork('$X$ + 20 * $Y$',{'A':'$X$,'B':'$Y$' '}) 换为 new RunCommandWork('$X$ + 20 * $Y$',{'$X$：'A','$Y$':"B"})