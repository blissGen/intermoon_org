<template>
  <div class="visuals">
    <img :style"resizeImage" :src"visual.image" />
  </div>
</template>

<script>
export default {
  name: "visuals",
  data: function() {
	return {
	  resizeImage: {
		width: "300px"
	  },
	  visuals: [
		{
		  projectTitle: "ascii cat",
		  image: require("@/assets/visual/gif/a.gif")
		}
	  ]
	}
  }
}
</script>
