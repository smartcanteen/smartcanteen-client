import React, { useState, useEffect } from 'react'
import { Box, Avatar, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, SellerProfileBox } from 'components/shared'
import ProfileAvatar from 'assets/images/ProfileAvatar.svg'
import { getDetailSeller } from "configs/api";


const profileImgSize = '130px'
const useStyles = makeStyles({
    profileImage: {
        width: profileImgSize,
        height: profileImgSize
    },
})
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZW5qdWFsIjoiMWQzYWQwOGItNGYyYi00YjhlLTgyMGItMDg4ZGFiYmU2NWRmIiwiZmlyc3RfbmFtZSI6IlBlbmp1YWwiLCJsYXN0X25hbWUiOiJEZXYiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJub190ZWxwIjoiMDgxMjMxMjM0MTIzIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xMyAxMjo1ODowNyIsImlkX3dhcnVuZyI6ImQxODIyOWMwLTNiYTAtNGRmOS1iYjIxLWRhOTU1Y2NjODNlNiIsImlzQWRtaW4iOmZhbHNlLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjIzNTg5MTAyfQ.e9Jm05oDzj_LEymd5lkGxWJ6JvOILSjbLcCSui45Hu4"
const Profile = () => {
    const classes = useStyles()
    // const {token} = {token} //useRecoilValue(authState);
    // const { uuid } = {uuid:"1d3ad08b-4f2b-4b8e-820b-088dabbe65df")//props.match.params
    const [sellerData, setSellerData] = useState();
    // const dataAwal = { first_name:"", last_name:"", email:"", no_telp:"", id_penjual:"" }
    // const [foodData, setFoodData] = useState();
    useEffect(() => {
        const getSellerData = async () => {
            const response = await getDetailSeller(token);
            const { data } = response?.data;
            if(response.data.success){
                await setSellerData(data);
                // console.log(`sellerDetail`, data);
            }
        };

        getSellerData();
    }, []);
    if (sellerData){
    return (
        <Box className="profile">
            <TopNavigation withCaption>
                <NavigationCaption caption="Profile" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box minHeight="80vh" display="flex" flexDirection="column" className="profile-form">
                    <Box mb={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Avatar src={ProfileAvatar} className={classes.profileImage} />
                    </Box>
                    <SellerProfileBox data={sellerData} readOnly/>
                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated />

        </Box>
    )
    }else{
        // Spinner disini
        return(
        <Box className="profile">
            <TopNavigation withCaption>
                <NavigationCaption caption="Profile" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box display="flex"
                justifyContent="center"
                alignItems="center">
                    <CircularProgress />
                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated />
        </Box>)
    }
}

export default Profile
