import React from 'react'
import { Box } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { AnalyticsCard, NavigationCaption, StatisticChart } from 'components/shared'

const Dashboard = () => {
    return (
        <Box className="dashboard">
            <TopNavigation withCaption>
                <NavigationCaption caption="Dashboard" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box mb={5} display="flex" justifyContent="space-between">
                    <AnalyticsCard title="Today Order" value={6}/>
                    <AnalyticsCard title="Today Income" value={800000}/>
                    <AnalyticsCard title="Today Buyer" value={100}/>
                </Box>
                <Box mb={5}>
                    <StatisticChart />
                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated/>


        </Box>
    )
}

export default Dashboard
