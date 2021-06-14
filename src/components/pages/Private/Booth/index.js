import React, { useState, useEffect } from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import { AppContainer, BottomNavigation, TopNavigation } from 'components/layout'
import { NavigationCaption, BoothProfileInfo } from 'components/shared'
import { getFoodSeller, getBoothDetail } from "configs/api";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZW5qdWFsIjoiMWQzYWQwOGItNGYyYi00YjhlLTgyMGItMDg4ZGFiYmU2NWRmIiwiZmlyc3RfbmFtZSI6IlBlbmp1YWwiLCJsYXN0X25hbWUiOiJEZXYiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJub190ZWxwIjoiMDgxMjMxMjM0MTIzIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xMyAxMjo1ODowNyIsImlkX3dhcnVuZyI6ImQxODIyOWMwLTNiYTAtNGRmOS1iYjIxLWRhOTU1Y2NjODNlNiIsImlzQWRtaW4iOmZhbHNlLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjIzNTg5MTAyfQ.e9Jm05oDzj_LEymd5lkGxWJ6JvOILSjbLcCSui45Hu4"

const Booth = () => {
    // const {token} = {token} //useRecoilValue(authState);
    // const { uuid } = {uuid:"1d3ad08b-4f2b-4b8e-820b-088dabbe65df")//props.match.params
    const [foodData, setFoodData] = useState();
    const [boothData, setBoothData] = useState();


    useEffect(() => {
        const getFoodData = async () => {
            const response = await getFoodSeller(token);
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                // console.log(`foodDetail`, data);
            }
        };

        const getBoothData = async () => {
            const response = await getBoothDetail(token);
            const { data } = response?.data;
            if(response.data.success){
                await setBoothData(data);
                // console.log(`boothDetail`, data);
            }
        };

        getBoothData();
        getFoodData();
    }, []);
    if (foodData && boothData){
        return (
            <Box className="booth">
                <TopNavigation withCaption>
                    <NavigationCaption caption="Booth"/>
                </TopNavigation>
                <AppContainer noPadding hasBottomNav>
                    <BoothProfileInfo data={foodData} booth={boothData} />
                </AppContainer>
                <BottomNavigation isAuthenticated/>
            </Box>
        )
    }else{
        return (
            <Box className="booth">
                <TopNavigation withCaption>
                    <NavigationCaption caption="Booth"/>
                </TopNavigation>
                <AppContainer noPadding hasBottomNav>
                    <Box display="flex"
                    justifyContent="center"
                    alignItems="center">
                        <CircularProgress />
                    </Box>
                </AppContainer>
                <BottomNavigation isAuthenticated/>
            </Box>
        )
    }
}

export default Booth
