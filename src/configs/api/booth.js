import axios from "../axios";

export const getBoothDetail = async (token) => {
  try{
      return await axios
        .get("/warung", {
          headers: {
            Authorization: token,
          },
        })
    
        .then((res) => res)
        .catch((err) => err.response);

  }catch{
      return "Failed"
  }
};