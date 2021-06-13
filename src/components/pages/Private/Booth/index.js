import React, { useState, useEffect } from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import { AppContainer, BottomNavigation, TopNavigation } from 'components/layout'
import { NavigationCaption, BoothProfileInfo } from 'components/shared'
import { getFoodSeller } from "configs/api";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZW5qdWFsIjoiMWQzYWQwOGItNGYyYi00YjhlLTgyMGItMDg4ZGFiYmU2NWRmIiwiZmlyc3RfbmFtZSI6Ik5vdml0YXMiLCJsYXN0X25hbWUiOiJHYW50ZW5rcyIsImVtYWlsIjoiZGV2QGdtYWlsLmNvbSIsIm5vX3RlbHAiOiIwODEyMzEyMzQxMjMiLCJjcmVhdGVkQXQiOiIyMDIxLTA1LTE1IDExOjMxOjA2IiwiaWRfd2FydW5nIjoiZDE4MjI5YzAtM2JhMC00ZGY5LWJiMjEtZGE5NTVjY2M4M2U2IiwiaXNBZG1pbiI6ZmFsc2UsImlzU2VsbGVyIjp0cnVlLCJpYXQiOjE2MjM0ODc5Mzd9.v7ubgiJZMsPJAgj1amo-slFd5VxP93r6YxcyvwedzPQ"

const Booth = () => {
    // const {token} = {token} //useRecoilValue(authState);
    // const { uuid } = {uuid:"1d3ad08b-4f2b-4b8e-820b-088dabbe65df")//props.match.params
    const [foodData, setFoodData] = useState();

    useEffect(() => {
        const getFoodData = async () => {
            const response = await getFoodSeller(token);
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                // console.log(`sellerDetail`, data);
            }
        };

        

        getFoodData();
    }, []);
    if (foodData){
        return (
            <Box className="booth">
                <TopNavigation withCaption>
                    <NavigationCaption caption="Booth"/>
                </TopNavigation>
                <AppContainer noPadding hasBottomNav>
                    <BoothProfileInfo data={foodData} />
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
