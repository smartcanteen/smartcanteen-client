import React from 'react'
import { Box } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, SellerProfileBox, NavigationBack } from 'components/shared'

const ProfileEdit = () => {
    return (
        <Box className="profile-edit">
            <TopNavigation withCaption withIcon>
                <NavigationBack/>
                <NavigationCaption caption="Profile Edit" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box minHeight="80vh" display="flex" justifyContent="center" flexDirection="column" className="profile-form">
                    <SellerProfileBox editProfile/>
                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated />

        </Box>
    )
}

export default ProfileEdit
