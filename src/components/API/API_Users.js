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

//API - Register
export const registerUser = async (firstName, lastName, registerEmail, registerPassword, confirmPassword, pnumber) => {
  try {
    const response = await axiosInstance.post("/users/register", {
      FirstName: firstName,
      LastName: lastName,
      Email: registerEmail,
      Password: registerPassword,
      confirmPassword: confirmPassword,
      pnumber: pnumber,
      // isAdmin: false,
      // pinned: [],
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// apiupload profile pic
export const uploadProfilePicture = async (userId, Profile_Image) => {
  try {
    const response = await axiosInstance.patch("/users/uploadprofilepicture", {
      userId,
      Profile_Image,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error(error.message);
  }
};

//API - Get User info by ID
export const getUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/profile/${id}`);
    console.log("Frontend - User Data:", response.data); 
    return response.data; 
  } catch (error) {
    return error.response.data; 
  }
};
