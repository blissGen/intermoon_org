import axios from "axios";

const url = "http://localhost:1111/api/submissions";

class SubmitService {
  static async getSubmissions() {
    const res = await axios.get(url);
    try {
      const data = res.data;
      return data.map(submission => ({
        ...submission,
        cratedAt: new Date(submission.createdAt)
      }));
    } catch (err) {
      return err;
    }
  }
  static insertSubmission(text) {
    return axios.post(url, {
		text
    });
  }
}

export default SubmitService;
