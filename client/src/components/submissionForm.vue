<template>
  <div class="sibmissionForm">
    <form @submit.prevent="submitForm">
      <input
        :style="styleObject01"
        type="text"
        placeholder="artist name ..."
        v-model="formData.artistName"
      />
      <input
        :style="styleObject02"
        type="text"
        placeholder="project title ..."
        v-model="formData.projectTitle"
      />
      <input
        :style="styleObject02"
        type="text"
        placeholder="link ..."
        v-model="formData.link"
      />
      <button :style="styleObject03" type="submit">submit</button>
    </form>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "submissionForm",
  data: function() {
    return {
      styleObject01: {
        display: "block",
        margin: "auto",
        marginTop: "100px",
        width: "300px"
      },
      styleObject02: {
        display: "block",
        margin: "auto",
        marginTop: "25px",
        width: "300px"
      },
      styleObject03: {
        display: "block",
        margin: "auto",
        marginTop: "50px",
        width: "200px"
      },
      formData: {
        artistName: "",
        projectTitle: "",
        link: ""
      },
      methods: {
        submitForm() {}
      }
    };
  }
};
</script>
