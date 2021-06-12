import axios from '../axios'


export const submitLogin = async (payload) => {
    const formData = new URLSearchParams()
    formData.append('email', payload.email)
    formData.append('password', payload.password)

    try{
        return await 
        axios.post('/penjual/login', formData)
             .then(res => {
                 localStorage.setItem('token_penjual', res.data?.data.token)
                 return res
             })
             .catch(err => err.response)
    }catch{
        return "Failed"
    }
}

export const logout = async () => {
    await localStorage.removeItem('token_penjual')
    await localStorage.removeItem('detail_penjual')
    return{
        success:true,
        message:"Berhasil Logout"
    }
}