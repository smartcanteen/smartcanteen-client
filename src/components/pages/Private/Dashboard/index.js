import React from 'react'
import { Box } from '@material-ui/core'

import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption } from 'components/shared'
const Dashboard = () => {
    return (
        <Box className="dashboard">

            <TopNavigation withCaption>
                <NavigationCaption caption="Dashboard" />
            </TopNavigation>
            <AppContainer>
                Akan diisi data statistik, dan info pesanan terbaru
            </AppContainer>
            <BottomNavigation isAuthenticated/>


        </Box>
    )
}

export default Dashboard
