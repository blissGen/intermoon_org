<template>
  <div class="sibmissionForm">
    <form>
      <input :style="styleObject01" type="text" placeholder="artist-name.." />
      <input :style="styleObject02" type="text" placeholder="artist-name.." />
      <input :style="styleObject02" type="text" placeholder="artist-name.." />
    </form>
  </div>
</template>

<script>
export default {
  name: "submissionForm",
  data: function() {
    return {
      styleObject01: {
        display: "block",
        margin: "auto",
        marginTop: "75px"
      },
      styleObject02: {
        display: "block",
        margin: "auto",
        marginTop: "25px"
      }
    };
  }
};
</script>
