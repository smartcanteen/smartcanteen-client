import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { Box, CircularProgress } from '@material-ui/core'

import MenuCard from 'components/shared/MenuCard'

import PromoSlider from 'components/shared/PromoSlider'
import SmartCanteenLogo from 'assets/images/smartcanteen-logo-purple.png'
import TerFavourite from 'assets/images/TerFavourite.png'
import TerLaris from 'assets/images/TerLaris.png'
import TerMurah from 'assets/images/TerMurah.png'
import { getFoodManyOrder } from "configs/api";

const menuCategories = [{"id":0,"name":"Minuman"},{"id":1,"name":"Makanan Ringan"},{"id":2,"name":"Manisan & Dessert"},{"id":3,"name":"Nasi"},{"id":4,"name":"Fast Food"},{"id":5,"name":"Roti"},{"id":6,"name":"Japanese"},{"id":7,"name":"Bakso & Soto"},{"id":8,"name":"Mi"},{"id":9,"name":"Korean"}]

const Home = () => {
    const [foodData, setFoodData] = useState();
    useEffect(() => {
        const getRekomenFoodData = async () => {
            const response = await getFoodManyOrder("?kategori=Makan Siang");
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                // console.log(`foodDetail`, data);
            }
        };

        getRekomenFoodData();
    }, []);
    if (foodData){
        return (
            <Box>
                <TopNavigation isLogoNavigation>
                    <img src={SmartCanteenLogo} alt="app-logo" className="app-logo" />
                </TopNavigation>
                <AppContainer noPadding hasBottomNav>
                    <Box px={2} mb={2}>
                        <PromoSlider />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                        <Link to="/menus/favourite" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 8, boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", maxWidth: "30%", minWidth: "30%", minHeight: "15vh", textDecoration:'none', color:"#333" }}>
                            <img src={TerFavourite} alt="" width="50%" style={{ marginBottom: 8 }} />
                            <p>Ter Favorit</p>
                        </Link>

                        <Link to="/menus/laris" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 8, boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", maxWidth: "30%", minWidth: "30%", minHeight: "15vh", textDecoration:'none', color:"#333" }}>
                            <img src={TerLaris} alt="" width="50%" style={{ marginBottom: 8 }} />
                            <p>Ter Laris</p>
                        </Link>

                        <Link to="/menus/murah" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 8, boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", maxWidth: "30%", minWidth: "30%", minHeight: "15vh", textDecoration:'none', color:"#333" }}>
                            <img src={TerMurah} alt="" width="50%" style={{ marginBottom: 8 }} />
                            <p>Ter Murah</p>
                        </Link>
                    </Box>
                    <Box p={2}>
                        <Box mb={2} fontWeight="bold">Rekomendasi Makanan</Box>

                            {
                            foodData.filter( menu => menu.ketersediaan === true ).map((food,index) =>
                                <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} isCounter/>
                            )}
                    </Box>
                    <Box p={2}>
                        <Box mb={2} fontWeight="bold">Kategori Makanan</Box>
                        <Box display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="center">
                            {menuCategories.map( (category, index) =>
                                <Link to="/" key={index} style={{maxWidth:"45%", minWidth:"45%", minHeight:'5vh', borderRadius:5, border:"1px solid", textAlign:'center', textDecoration:'none', marginBottom:8, display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    {category.name}
                                </Link>
                            )}

                        </Box>
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
                    <Box px={2} mb={2}>
                        <PromoSlider />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                        <Link to="/menus/favourite" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 8, boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", maxWidth: "30%", minWidth: "30%", minHeight: "15vh", textDecoration:'none', color:"#333" }}>
                            <img src={TerFavourite} alt="" width="50%" style={{ marginBottom: 8 }} />
                            <p>Ter Favorit</p>
                        </Link>

                        <Link to="/menus/laris" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 8, boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", maxWidth: "30%", minWidth: "30%", minHeight: "15vh", textDecoration:'none', color:"#333" }}>
                            <img src={TerLaris} alt="" width="50%" style={{ marginBottom: 8 }} />
                            <p>Ter Laris</p>
                        </Link>

                        <Link to="/menus/murah" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 8, boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", maxWidth: "30%", minWidth: "30%", minHeight: "15vh", textDecoration:'none', color:"#333" }}>
                            <img src={TerMurah} alt="" width="50%" style={{ marginBottom: 8 }} />
                            <p>Ter Murah</p>
                        </Link>
                    </Box>
                    <Box p={2}>
                        <Box mb={2} fontWeight="bold">Rekomendasi Makanan</Box>
                        <Box display="flex"
                        justifyContent="center"
                        alignItems="center">
                            <CircularProgress />
                        </Box>
                    </Box>
                    <Box p={2}>
                        <Box mb={2} fontWeight="bold">Kategori Makanan</Box>
                        <Box display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="center">
                            {menuCategories.map( (category, index) =>
                                <Link to="/" key={index} style={{maxWidth:"45%", minWidth:"45%", minHeight:'5vh', borderRadius:5, border:"1px solid", textAlign:'center', textDecoration:'none', marginBottom:8, display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    {category.name}
                                </Link>
                            )}

                        </Box>
                    </Box>
                </AppContainer>
                <BottomNavigation />
            </Box>
        )
    }
}

export default Home
