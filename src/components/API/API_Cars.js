import axiosInstance from "../../utils/axiosInstance";

// API - RANDOM
export const carRandom = async () => {
  try {
    const response = await axiosInstance.get("/cars/car-random"); //เปลี่ยนตามเส้น API
    console.log(response.data.result); // .result มั้ยขึ้นอยู่กับว่า backend return เป็นอะไร
    return response.data.result;
  } catch (error) {
    return error.response.data;
  }
};

export const createCar = async (data) => {
  console.log("werun");
  try {
    const response = await axiosInstance.post("/cars", data);
    return response.data.result;
  } catch (error) {
    return error.response.data;
  }
};

//API - Get product info by ID
export const getCarById = async (id) => {
  try {
    const response = await axiosInstance.get(`/cars/${id}`);
    console.log("Frontend - Car Data:", response.data); 
    return response.data; 
  } catch (error) {
    return error.response.data; 
  }
};
