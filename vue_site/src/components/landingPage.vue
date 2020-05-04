<template>
  <div class="hello">
    <p :style="styleObject01">{{ msg }}</p>
    <!--<img alt="A-Kitty" src="@/assets/akitty-sm.gif" />-->
    <h1></h1>
    <!--<button @click="digiUp">{{ digital }}</button>-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: function() {
    return {
      msg: "intermoon_",
      digital: 0,
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
  methods: {
    digiUp: function() {
      this.digital += 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
