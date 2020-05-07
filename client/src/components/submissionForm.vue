<template>
  <div class="submissionForm">
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
    <button
      :style="styleObject03"
      @click="
        submitForm();
        refreshPage();
      "
    >
      submit
    </button>
  </div>
</template>

<script>
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
      formData: {
        artistName: "",
        projectTitle: "",
        link: ""
      },
      refreshPage() {
        window.location.reload();
      },
      submissions: [],
      error: ""
    };
  },
  async created() {
    try {
      this.submissions = await SubmitService.getSubmissions();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async submitForm() {
      await SubmitService.insertSubmission(this.formData);
      this.submissions = await SubmitService.getSubmissions();
    }
  }
};
</script>
