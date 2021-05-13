import React from 'react'
import { Box, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, SellerProfileBox } from 'components/shared'
import ProfileAvatar from 'assets/images/ProfileAvatar.svg'

const profileImgSize = '130px'
const useStyles = makeStyles({
    profileImage: {
        width: profileImgSize,
        height: profileImgSize
    },
})
const Profile = () => {
    const classes = useStyles()
    return (
        <Box className="profile">
            <TopNavigation withCaption>
                <NavigationCaption caption="Profile" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box minHeight="80vh" display="flex" flexDirection="column" className="profile-form">
                    <Box mb={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Avatar src={ProfileAvatar} className={classes.profileImage} />
                    </Box>
                    <SellerProfileBox readOnly/>
                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated />

        </Box>
    )
}

export default Profile
