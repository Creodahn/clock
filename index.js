class Clock {
  constructor() {
    this.update();
  }

  update() {
    const now = new Date();

    this.hh = now.getHours();
    this.mm = now.getMinutes();
    this.ss = now.getSeconds();
  }

  formatTime() {
    const hh = this.checkNumber(this.hh),
          mm = this.checkNumber(this.mm),
          ss = this.checkNumber(this.ss);
    return `${hh}:${mm}:${ss}`;
  }

  checkNumber(num) {
    return num < 10 ? `0${num}` : num.toString();
  }

  start(id) {
    this.interval = setInterval(() => {
      this.update();

      document.getElementById(id).innerHTML = this.formatTime();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
