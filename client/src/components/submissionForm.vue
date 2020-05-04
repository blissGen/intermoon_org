<template>
  <div class="sibmissionForm">
    <form>
      <input :style="styleObject01" type="text" placeholder="artist name ..." />
      <input
        :style="styleObject02"
        type="text"
        placeholder="project title ..."
      />
      <input :style="styleObject02" type="text" placeholder="link ..." />
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
        marginTop: "75px",
        width: "300px"
      },
      styleObject02: {
        display: "block",
        margin: "auto",
        marginTop: "25px",
        width: "300px"
      }
    };
  }
};
</script>
