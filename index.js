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
    const meridian = this.hh > 12 ? 'PM' : 'AM',
          hh = this.checkHour(this.hh),
          mm = this.checkNumber(this.mm),
          ss = this.checkNumber(this.ss);
    return `${hh}:${mm}:${ss} ${meridian}`;
  }

  checkHour(hh) {
    let result;

    switch(true) {
      case hh > 12:
        result = hh - 12;
        break;
      case hh === 0:
        result = 12;
        break;
      default:
        result = hh;
    }

    return result;
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
