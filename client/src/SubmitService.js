import axios from "axios";

const url = "http://localhost:1111/api/submissions/";

class SubmitService {
  static getSubmissions() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(submission => ({
            ...submission,
            createdAt: new Date(submission.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default SubmitService;
