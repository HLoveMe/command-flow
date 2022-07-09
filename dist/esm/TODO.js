// 1:根据环境 去掉work
// Object 实现修改  : 基础对象实现调整
// T | null 和 null的区分
// RunCommandWork  new RunCommandWork('$X$ + 20 * $Y$',{'A':'$X$,'B':'$Y$' '}) 换为 new RunCommandWork('$X$ + 20 * $Y$',{'$X$：'A','$Y$':"B"})
// type isEqual<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
// // type A<T> = T extends (T | null) ? (T | null) extends T ? 1 : 2 : 3
// // type A<T> = [T] extends [null | T] ? [null | T] extends [T] ? 1 : 2 : 3
// type A<T> = isEqual<T, T | null>
// type a = A<number | string | null>
// type b = A<number | string>
//# sourceMappingURL=TODO.js.map