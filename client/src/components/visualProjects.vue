<template>
  <div class="visuals">
    <ul
      :style="visualDisplay"
      v-for="visual in visuals.slice().reverse()"
      :key="visual.projectTitle"
    >
      <img
        :style="resizeImage"
        :src="visual.image"
        :title="visual.projectTitle"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: "visuals",
  data: function() {
    return {
      resizeImage: {
        width: "600px"
      },
      visualDisplay: {
        display: "inline-block",
        verticalAlign: "middle",
        margin: "0px",
        padding: "20px"
      },
      visuals: [
        {
          projectTitle: "ascii cat",
          image: require("@/assets/visual/gif/a.gif")
        }
      ]
    };
  }
};
</script>
