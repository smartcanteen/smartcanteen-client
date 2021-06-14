import React, { useState, useEffect } from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { AnalyticsCard, NavigationCaption, StatisticChart, TitleSection, MenuCard } from 'components/shared'
import { getFoodManyOrderSeller } from "configs/api";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZW5qdWFsIjoiMWQzYWQwOGItNGYyYi00YjhlLTgyMGItMDg4ZGFiYmU2NWRmIiwiZmlyc3RfbmFtZSI6IlBlbmp1YWwiLCJsYXN0X25hbWUiOiJEZXYiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJub190ZWxwIjoiMDgxMjMxMjM0MTIzIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xMyAxMjo1ODowNyIsImlkX3dhcnVuZyI6ImQxODIyOWMwLTNiYTAtNGRmOS1iYjIxLWRhOTU1Y2NjODNlNiIsImlzQWRtaW4iOmZhbHNlLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjIzNTg5MTAyfQ.e9Jm05oDzj_LEymd5lkGxWJ6JvOILSjbLcCSui45Hu4"

const Dashboard = () => {
    // const {token} = {token} //useRecoilValue(authState);
    // const { uuid } = {uuid:"1d3ad08b-4f2b-4b8e-820b-088dabbe65df")//props.match.params
    const [foodData, setFoodData] = useState();

    useEffect(() => {
        const getFoodData = async () => {
            const response = await getFoodManyOrderSeller(token);
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
            <Box className="dashboard">
                <TopNavigation withCaption>
                    <NavigationCaption caption="Dashboard" />
                </TopNavigation>
                <AppContainer hasBottomNav>
                    <Box mb={3} display="flex" justifyContent="space-between">
                        <AnalyticsCard title="Today Order" value={6}/>
                        <AnalyticsCard title="Today Income" value={800000}/>
                        <AnalyticsCard title="Today Buyer" value={100}/>
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
                        {foodData.filter( menu => menu.ketersediaan === true ).map((food,index) =>
                            <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} sold={food.manyOrder} />
                        )}
                    </Box>
                </AppContainer>
                <BottomNavigation isAuthenticated/>
            </Box>
        )
    }else{
        return (
            <Box className="dashboard">
                <TopNavigation withCaption>
                    <NavigationCaption caption="Dashboard" />
                </TopNavigation>
                <AppContainer hasBottomNav>
                    <Box mb={3} display="flex" justifyContent="space-between">
                        <AnalyticsCard title="Today Order" value={6}/>
                        <AnalyticsCard title="Today Income" value={800000}/>
                        <AnalyticsCard title="Today Buyer" value={100}/>
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
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress />
                    </Box>
                </AppContainer>
                <BottomNavigation isAuthenticated/>
            </Box>
        )
    }
}

export default Dashboard
