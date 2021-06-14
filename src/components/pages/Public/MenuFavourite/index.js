import React, { useState, useEffect } from 'react'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { Box, CircularProgress } from '@material-ui/core'
import MenuCard from 'components/shared/MenuCard'
import { NavigationCaption, NavigationBack } from 'components/shared'
import {
    useParams
  } from "react-router-dom";
import { getFoodManyOrder, getFoodOrderByHarga } from "configs/api";

const MenuFavourite = () => {
    let { ket } = useParams();
     // const {token} = {token} //useRecoilValue(authState);
    // const { uuid } = {uuid:"1d3ad08b-4f2b-4b8e-820b-088dabbe65df")//props.match.params
    const [foodData, setFoodData] = useState();
    useEffect(() => {
        const getFoodManyOrderData = async () => {
            const response = await getFoodManyOrder();
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                // console.log(`foodDetail`, data);
            }
        };

        const getFoodDataByHarga = async () => {
            const response = await getFoodOrderByHarga();
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                // console.log(`foodDetail`, data);
            }
        };

        const getFavorFoodData = async () => {
            const response = await getFoodOrderByHarga("?kategori=Favourite");
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                // console.log(`foodDetail`, data);
            }
        };

        if (ket === "laris") getFoodManyOrderData();
        if (ket === "favourite") getFavorFoodData();
        if (ket === "murah") getFoodDataByHarga();
    }, []);
    if (foodData){
        return (
            <Box>
                <TopNavigation>
                    <NavigationBack/>
                    <NavigationCaption caption="Daftar Menu"/>
                </TopNavigation>
                <AppContainer noPadding hasBottomNav>
                    <Box p={2}>
                        {foodData.map((food, index) =>
                            <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} isCounter />
                        )}
                    </Box>

                </AppContainer>
                <BottomNavigation />

            </Box>
        )
    }else{
        return (
            <Box>
                <TopNavigation>
                    <NavigationBack/>
                    <NavigationCaption caption="Daftar Menu"/>
                </TopNavigation>
                <AppContainer noPadding hasBottomNav>
                    <Box display="flex"
                    justifyContent="center"
                    alignItems="center">
                        <CircularProgress />
                    </Box>
                </AppContainer>
                <BottomNavigation />

            </Box>
        )
    }
}

export default MenuFavourite
