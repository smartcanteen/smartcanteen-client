import axios from "../axios";

const replaceKategori = (text) => {
  const regex = /,Favourite|Favourite|,Makan Siang|Makan Siang|,Sarapan|Makan Malam|,Makan Malam|Sarapan/gi
  return text.replace(regex, "")
};

export const getFoodSeller = async (token,query="") => {
  try{
      return await axios
        .get("/makanan/all"+query, {
          headers: {
            Authorization: token,
          },
        })
    
        .then((res) => {
          res.data.data.map((food,index) => food.kategori = replaceKategori(food.kategori))
          return res
        })
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
    
        .then((res) => {
          res.data.data.map((food,index) => food.kategori = replaceKategori(food.kategori))
          return res
        })
        .catch((err) => err.response);

  }catch{
      return "Failed"
  }
};

export const getAllFood = async (token,query="") => {
  try{
      return await axios
        .get("/makanan"+query)
    
        .then((res) => {
          res.data.data.map((food,index) => food.kategori = replaceKategori(food.kategori))
          return res
        })
        .catch((err) => err.response);

  }catch{
      return "Failed"
  }
};

export const getFoodManyOrder = async (query="") => {
  try{
      return await axios
        .get("/makanan/manyOrder"+query)
    
        .then((res) => {
          res.data.data.map((food,index) => food.kategori = replaceKategori(food.kategori))
          return res
        })
        .catch((err) => err.response);

  }catch{
      return "Failed"
  }
};

export const getFoodOrderByHarga = async (query="") => {
  try{
      return await axios
        .get("/makanan/murah"+query)
    
        .then((res) => {
          res.data.data.map((food,index) => food.kategori = replaceKategori(food.kategori))
          return res
        })
        .catch((err) => err.response);

  }catch{
      return "Failed"
  }
};