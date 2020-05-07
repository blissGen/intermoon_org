<template>
  <div class="hello">
    <p :style="styleObject01">{{ msg }}</p>
    <h1></h1>
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
      }
    };
  },
  mounted() {
	const script = function (p5) {
	  
	  let indexBG;
	  let indexB = [];
	  
	  function setup() {
	    let canvas = createCanvas(windowWidth, windowHeight);
	    canvas.position(0, 0);
	    canvas.style("z-index", -1);
	    canvas.style("display", "block");
	    indexBG = new IndexBackground();
	    for (let i = 0; i < 100; i++) {
	      indexB.push(new IndexBall());
	    }
	  }
	  
	  function windowResized() {
	    resizeCanvas(windowWidth, windowHeight);
	  }
	  
	  function draw() {
	    indexBG.bgNoise();
	    indexBG.bgShow();
	    for (let i = 0; i < indexB.length; i++) {
	      indexB[i].bNoise();
	      indexB[i].bShow();
	    }
	  }
	  
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
	  
	}
  }
};
</script>

<style scoped></style>
