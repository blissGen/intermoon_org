class IndexBackground {
  constructor() {
    this.aoff = 0;
    this.boff = this.aoff + 10;
    this.coff = this.boff + 10;
    this.t = 0.003;
    let n1, n2, n3;
  }

  bgNoise() {
    this.aoff += this.t;
    this.boff += this.t;
    this.coff += this.t;
    this.n1 = noise(this.aoff) * 255;
    this.n2 = noise(this.boff) * 255;
    this.n3 = noise(this.coff) * 255;
  }

  bgShow() {
    background(this.n1, this.n2, this.n3);
  }
}

//p5
