import axios from "axios";

const url = "http://localhost:1111/api/submissions";

class SubmitService {
  static getSubmissions() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          const data = res.data;
          resolve(
            data.map(submission => ({
              ...submission,
              createdAt: new Date(submission.createdAt)
            }))
          );
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static insertSubmission(text) {
    return axios.submission(url, {
      text
    });
  }
}

export default SubmitService;
