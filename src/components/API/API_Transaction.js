import axiosInstance from "../../utils/axiosInstance";

export const createTransaction = async (data) => {
  console.log("werun at transaction");
  try {
    const response = await axiosInstance.post("/transaction", data);
    return response.data.result;
  } catch (error) {
    return error.response.data;
  }
};

export const getTransaction = async()=>{
  const response = await axiosInstance.get("/transaction")
  return response
}