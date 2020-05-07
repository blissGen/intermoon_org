<template>
  <div class="landingPage">
    <div :key="graphic()">
      <p :style="styleObject01">{{ msg }}</p>
      <h1></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingPage",

  data: function() {
    return {
      msg: "intermoon_",
      styleObject01: {
        display: "flex",
        height: "60vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "45px",
        fontWeight: "lighter"
      },
      graphic() {
        const script = p5 => {
          let indexBG;
          let indexB = [];

          p5.setup = () => {
            let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
            canvas.position(0, 0);
            canvas.style("z-index", -1);
            canvas.style("display", "block");
            indexBG = new IndexBackground();
            for (let i = 0; i < 100; i++) {
              indexB.push(new IndexBall());
            }
          };

          p5.windowResized = () => {
            p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
          };

          p5.draw = () => {
            indexBG.bgNoise();
            indexBG.bgShow();
            for (let i = 0; i < indexB.length; i++) {
              indexB[i].bNoise();
              indexB[i].bShow();
            }
          };

          class IndexBackground {
            constructor() {
              this.aoff = 0;
              this.boff = this.aoff + 10;
              this.coff = this.boff + 10;
              this.t = 0.003;
            }

            bgNoise() {
              this.aoff += this.t;
              this.boff += this.t;
              this.coff += this.t;
              this.n1 = p5.noise(this.aoff) * 255;
              this.n2 = p5.noise(this.boff) * 255;
              this.n3 = p5.noise(this.coff) * 255;
            }

            bgShow() {
              p5.background(this.n1, this.n2, this.n3);
            }
          }

          class IndexBall {
            constructor() {
              this.aoff = 30;
              this.boff = this.aoff + 10;
              this.coff = this.boff + 10;
              this.t1 = 0.008;

              this.xoff = p5.random(0, p5.windowWidth);
              this.yoff = p5.random(0, p5.windowHeight);
              this.zoff = this.yoff + 10;
              this.t2 = 0.002;
            }

            bNoise() {
              this.aoff += this.t1;
              this.boff += this.t1;
              this.coff += this.t1;
              this.n1 = p5.noise(this.aoff) * 255;
              this.n2 = p5.noise(this.boff) * 255;
              this.n3 = p5.noise(this.coff) * 255;

              this.xoff += this.t2;
              this.yoff += this.t2;
              this.zoff += this.t2;
              this.n4 = p5.noise(this.xoff) * p5.windowWidth;
              this.n5 = p5.noise(this.yoff) * p5.windowHeight;
              this.n6 = p5.noise(this.zoff) * 125;
            }

            bShow() {
              p5.ellipse(this.n4, this.n5, this.n6);
              p5.fill(this.n1, this.n2, this.n3, 150);
              p5.noStroke();
            }
          }
        };
        const P5 = require("p5");
        new P5(script);
      }
    };
  }
};
</script>

<style scoped></style>
