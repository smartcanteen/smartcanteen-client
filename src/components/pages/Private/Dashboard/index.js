import React from 'react'
import { Box } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { AnalyticsCard, NavigationCaption, StatisticChart, TitleSection, MenuCard } from 'components/shared'

const bestFood = [
    {
        id_makanan:1,
        nama:'Nasi Goreng Murah',
        harga:150000,
        kategori:'Makanan, Nasi, Fast Food',
        ketersediaan:true
    },
    {
        id_makanan:2,
        nama:'Bubur Ayam',
        harga:100000,
        kategori:'Makanan, Nasi, Bubur',
        ketersediaan:true
    },
    {
        id_makanan:3,
        nama:'Nasi Tim Daging Kambing',
        harga:80000,
        kategori:'Makanan, Nasi, Daging',
        ketersediaan:true
    },

]

const Dashboard = () => {
    return (
        <Box className="dashboard">
            <TopNavigation withCaption>
                <NavigationCaption caption="Dashboard" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box mb={3}>
                    <TitleSection title="Daily Report's"/> 
                    <Box display="flex" justifyContent="space-between">
                        <AnalyticsCard title="Today Order" value={6}/>
                        <AnalyticsCard title="Today Income" value={800000}/>
                        <AnalyticsCard title="Today Buyer" value={100}/>
                    </Box>
                </Box>
                <Box mb={3}>
                    <TitleSection title="Sales Statistic"/>
                    <StatisticChart />
                </Box>
                <Box mb={3} display="flex" flexDirection="column" alignItems="space-between" paddingY={2}>
                    <TitleSection title="Weekly Report's"/>
                    <Box mb={1}>
                        <AnalyticsCard fullWidth title="Weekly Total Order" value={90}/>
                    </Box>
                    <Box mb={1}>
                        <AnalyticsCard fullWidth title="Weekly Total Income" value={20000000}/>
                    </Box>

                    <Box mb={1}>
                        <AnalyticsCard fullWidth title="Weekly Total Order" value={530}/>
                    </Box>
                </Box>
                <Box>
                    <TitleSection title="Most Saleable Menu"/>
                    {bestFood.filter( menu => menu.ketersediaan === true ).map((food,index) =>
                        <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori}/>
                    )}
                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated/>
        </Box>
    )
}

export default Dashboard
