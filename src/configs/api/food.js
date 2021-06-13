import axios from "../axios";

export const getFoodSeller = async (token) => {
  try{
      return await axios
        .get("/makanan/all", {
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

export const getDetailFoodSeller = async (token,id) => {
  try{
      return await axios
        .get(`/makanan/${id}`, {
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

export const getFoodManyOrderSeller = async (token) => {
  try{
      return await axios
        .get("/makanan/all/manyOrder", {
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