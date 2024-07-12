import axiosInstance from "../../utils/axiosInstance";

export const createTempCar = async (data) => {
    console.log("werun at create temp car");
    try {
      const response = await axiosInstance.post("/temporarycars", data);
      return response.data.result;
    } catch (error) {
      return error.response.data;
    }
  };