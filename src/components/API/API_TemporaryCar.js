import axiosInstance from "../../utils/axiosInstance";

export const createTempCar = async (data) => {
  console.log("werun at create temp car");
  try {
    const response = await axiosInstance.post("/temporarycars", data);
    alert(`create success`);
    return response.data.result;
  } catch (error) {
    if (error.response) {
      alert(`Error: ${error.response.data.message}`);
    } else if (error.request) {
      alert("Error: No response from server.");
    } else {
      alert(`Error: ${error.message}`);
    }
    return null;
  }
};
