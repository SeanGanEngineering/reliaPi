import axios from "axios";

export const addTestPlan = async (testData) => {
  try {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/test-plans',
        data: testData
      })
      console.log(response);
      return response;
    } catch (error) {
      console.log(error)
  }
}