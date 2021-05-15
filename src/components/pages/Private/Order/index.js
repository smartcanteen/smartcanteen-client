import React from 'react'
import { Box } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, OrderTab } from 'components/shared'

const Order = () => {
    return (
        <Box className="order-page">
            <TopNavigation withCaption>
                <NavigationCaption caption="Ongoing Orders" />
            </TopNavigation>
            <AppContainer hasBottomNav noPadding>
                <OrderTab/>
            </AppContainer>
            <BottomNavigation isAuthenticated />

        </Box>
    )
}

export default Order
