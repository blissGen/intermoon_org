<template>
  <div class="sibmissionForm">
    <form @submit.prevent>
      <input
        :style="styleObject01"
        type="text"
        placeholder="artist name ..."
        v-model="text"
      />
      <input
        :style="styleObject02"
        type="text"
        placeholder="project title ..."
        v-model="text"
      />
      <input
        :style="styleObject02"
        type="text"
        placeholder="link ..."
        v-model="text"
      />
      <button :style="styleObject03" @click="submitForm()" type="submit">
        submit
      </button>
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
      text: "",
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
        async submitForm() {
          await SubmitService.insertSubmission(this.ext);
        }
      }
    };
  }
};
</script>
