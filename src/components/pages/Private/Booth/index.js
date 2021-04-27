import React from 'react'
import { Box } from '@material-ui/core'
import { AppContainer, BottomNavigation, TopNavigation } from 'components/layout'
import { NavigationCaption, BoothProfileInfo } from 'components/shared'
const Booth = () => {
    return (
        <Box className="booth">
            <TopNavigation withCaption>
                <NavigationCaption caption="Booth"/>
            </TopNavigation>
            <AppContainer noPadding>
                <BoothProfileInfo/>
            </AppContainer>
            <BottomNavigation isAuthenticated/>
        </Box>
    )
}

export default Booth
