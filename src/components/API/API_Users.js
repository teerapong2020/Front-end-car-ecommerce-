import axiosInstance from "../../utils/axiosInstance";


//API - Login
export const loginUser = async (email, password) => {
    try {
      const response = await axiosInstance.post("/users/login", 
        {
            //ระวังเรื่องพิมใหญ่พิมเล็กด้วย
            Email: email,
            Password: password,
        }
      );
      return response.data;
    } catch (error) {
      return error.response.data; 
    }
};