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


export const getTransaction = async (id) => {
  try {
    const response = await axiosInstance.get(`/transaction/${id}`);
    console.log("dataTrans", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
};
