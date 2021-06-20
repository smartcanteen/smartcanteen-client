import React, { useState, useEffect } from 'react'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { Box, CircularProgress } from '@material-ui/core'
import MenuCard from 'components/shared/MenuCard'
import SmartCanteenLogo from 'assets/images/smartcanteen-logo-purple.png'
import { getAllFood } from "configs/api";

const foodMenuList = [
    {
        id_makanan: 1,
        nama: 'Nasi Goreng Murah',
        harga: 150000,
        kategori: 'Makanan, Nasi, Fast Food',
        ketersediaan: true,
        type: 'nasi'
    },
    {
        id_makanan: 2,
        nama: 'Bubur Ayam',
        harga: 100000,
        kategori: 'Makanan, Nasi, Bubur',
        ketersediaan: true,
        type: 'nasi'
    },
    {
        id_makanan: 3,
        nama: 'Nasi Tim Daging Kambing',
        harga: 80000,
        kategori: 'Makanan, Nasi, Daging',
        ketersediaan: true,
        type: 'nasi'
    },
    {
        id_makanan: 4,
        nama: 'Nasi Steak Daging Ayam',
        harga: 120000,
        kategori: 'Makanan, Nasi, Daging, Western',
        ketersediaan: true,
        type: 'nasi'
    },
    {
        id_makanan: 5,
        nama: 'Air Mineral Ada Manis-manisnya',
        harga: 10000,
        kategori: 'Minuman',
        ketersediaan: true,
        type: 'minuman'
    },
    {
        id_makanan: 6,
        nama: 'Jus Alpukat',
        harga: 50000,
        kategori: 'Minuman',
        ketersediaan: true,
        type: 'minuman'
    },
]

const Menus = () => {
    const [foodData, setFoodData] = useState();

    useEffect(() => {
        const getFoodData = async () => {
            const response = await getAllFood();
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                // console.log(`foodDetail`, data);
            }
        };

        getFoodData();
    }, []);
    if (foodData){
        return (
            <Box>
                <TopNavigation isLogoNavigation>
                    <img src={SmartCanteenLogo} alt="app-logo" className="app-logo" />
                </TopNavigation>
                <AppContainer noPadding hasBottomNav>
                    <Box p={2}>
                        <Box mb={2} fontWeight="bold">Makanan</Box>
                        {foodData.filter(menu => !menu.kategori.includes("Minuman") && !menu.kategori.includes("Makanan Ringan")).map((food, index) =>
                            <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} isCounter />
                        )}
                    </Box>
                    <Box p={2}>
                        <Box mb={2} fontWeight="bold">Minuman</Box>
                        {foodData.filter(menu => menu.kategori.includes("Minuman")).map((food, index) =>
                            <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} isCounter />
                        )}
                    </Box>
                    <Box p={2}>
                        <Box mb={2} fontWeight="bold">Makanan Ringan</Box>
                        {foodData.filter(menu => menu.kategori.includes("Makanan Ringan")).map((food, index) =>
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
                <TopNavigation isLogoNavigation>
                    <img src={SmartCanteenLogo} alt="app-logo" className="app-logo" />
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

export default Menus
