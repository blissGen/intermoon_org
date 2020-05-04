class IndexBall {
  constructor() {
    this.aoff = 30;
    this.boff = this.aoff + 10;
    this.coff = this.boff + 10;
    this.t1 = 0.008;

    this.xoff = random(0, windowWidth);
    this.yoff = random(0, windowHeight);
    this.zoff = this.yoff + 10;
    this.t2 = 0.002;
    let n1, n2, n3, n4, n5, n6;
  }

  bNoise() {
    this.aoff += this.t1;
    this.boff += this.t1;
    this.coff += this.t1;
    this.n1 = noise(this.aoff) * 255;
    this.n2 = noise(this.boff) * 255;
    this.n3 = noise(this.coff) * 255;

    this.xoff += this.t2;
    this.yoff += this.t2;
    this.zoff += this.t2;
    this.n4 = noise(this.xoff) * windowWidth;
    this.n5 = noise(this.yoff) * windowHeight;
    this.n6 = noise(this.zoff) * 125;
  }

  bShow() {
    ellipse(this.n4, this.n5, this.n6);
    fill(this.n1, this.n2, this.n3, 150);
    noStroke();
  }
}
