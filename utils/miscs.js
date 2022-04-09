// let timer
// function debounce1(delay, cb) {
//   clearTimeout(this.timer)
//   this.timer = setTimeout(cb, delay)
// }

// debounce1.timer

export class Trigger {
  timer
  lastTime = 0

  debounce(delay, cb) {
    clearTimeout(this.timer)
    this.timer = setTimeout(cb, delay)
  }

  throttle(delay, cb) {
    const currentTime = Date.now()
    if (currentTime - this.lastTime > delay) {
      cb()
      this.lastTime = currentTime
    }
  }
}
