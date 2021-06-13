import { atom, selectorFamily, selector } from 'recoil'

const tokenSeller = localStorage.getItem('token_penjual') ? localStorage.getItem('token_penjual') : '' 
const authStatus = tokenSeller !== '' ? true : false
const profileData = localStorage.getItem('detail_penjual') ? JSON.parse(localStorage.getItem('detail_penjual')) : null
export const authState = atom({
    key:'authState',
    default:{
        token:tokenSeller,
        isAuthenticated:authStatus,
    }
})

export const authProfileData = atom({
    key:'authProfileData',
    default:profileData
})