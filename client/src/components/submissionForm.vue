<template>
  <div class="sibmissionForm">
    <form @submit.prevent="submitForm">
      <input
        :style="styleObject01"
        type="text"
        placeholder="artist name ..."
        v-model="artistName"
      />
      <input
        :style="styleObject02"
        type="text"
        placeholder="project title ..."
        v-model="projectTitle"
      />
      <input
        :style="styleObject02"
        type="text"
        placeholder="link ..."
        v-model="link"
      />
      <button :style="styleObject03" type="submit">submit</button>
    </form>
  </div>
</template>

<script>
//import axios from "axios";
import SubmitService from "../SubmitService";
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
      artistName: "",
      projectTitle: "",
      link: "",
      error: "",
      async created() {
        try {
          this.submissions = await SubmitService.getSubmissions();
        } catch (err) {
          this.error = err.message;
        }
      },
      methods: {
        submitForm() {}
      }
    };
  }
};
</script>
