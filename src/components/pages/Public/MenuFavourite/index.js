import React from 'react'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { Box } from '@material-ui/core'
import MenuCard from 'components/shared/MenuCard'
import { NavigationCaption, NavigationBack } from 'components/shared'

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

]

const MenuFavourite = () => {
    return (
        <Box>
            <TopNavigation>
                <NavigationBack/>
                <NavigationCaption caption="Daftar Menu"/>
            </TopNavigation>
            <AppContainer noPadding hasBottomNav>
                <Box p={2}>
                    <Box mb={2} fontWeight="bold">Nasi</Box>
                    {foodMenuList.map((food, index) =>
                        <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} isCounter />
                    )}
                </Box>

            </AppContainer>
            <BottomNavigation />

        </Box>
    )
}

export default MenuFavourite
