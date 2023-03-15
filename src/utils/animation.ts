




interface IOptions {
  from: number
  to: number
  total?: number
  duration?: number
  onmove?: (n: number) => void
  onend?: () => void
}
// 0 - 120
export function createAnimation(options: IOptions) {
  const {
    from,
    to,
    total = 1500, // 动画总时间
    duration = 15, // 动画间隔时间
    onmove,
    onend
  } = options
  // 总共 变化次数
  const times = Math.floor(total / duration)
  // 每次变化的距离
  const dis = (to - from) / times
  let initFrom = from
  let currentTime = 0
  const timer = setInterval(() => {
    if (currentTime >= times) {
      clearInterval(timer)
      initFrom = to
      onend && onend()
      return
    }
    initFrom += dis
    currentTime++
    onmove && onmove(initFrom)
  }, duration)
}