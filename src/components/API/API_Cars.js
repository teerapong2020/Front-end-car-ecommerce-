import axiosInstance from "../../utils/axiosInstance";

// API - RANDOM
export const carRandom = async () => {
  try {
    const response = await axiosInstance.get("/cars/car-random");//เปลี่ยนตามเส้น API
    console.log(response.data.result); // .result มั้ยขึ้นอยู่กับว่า backend return เป็นอะไร
    return response.data.result; 
  } catch (error) {
    return error.response.data; 
  }
};
