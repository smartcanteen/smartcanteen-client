import axios from "../axios";

export const getDetailSeller = async (token) => {
    try{
        return await axios
          .get("/penjual/", {
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

export const updateSeller = async (token,sellerData) => {
    try{
        console.log("testaxios",sellerData)
        return await axios
          .post("/penjual/update", sellerData, {
            headers: {
                Authorization: token,
            }
          })
      
          .then((res) => res)
          .catch((err) => err.response);

    }catch{
        return "Failed"
    }
};