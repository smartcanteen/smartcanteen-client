import React from 'react'
import { Box, Input, FormControl, InputLabel, FormHelperText, Button } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, NavigationBack } from 'components/shared'

import WelcomeImage from 'assets/images/welcome-illustration.svg'
const BoothAdd = () => {
    return (
        <Box className="add-booth">
            <TopNavigation withCaption withIcon>
                <NavigationBack />
                <NavigationCaption caption="Register New Booth" />
            </TopNavigation>
            <AppContainer>
                <Box minHeight="80vh" display="flex" flexDirection="column" justifyContent="center">
                    <Box display="flex" justifyContent="center" mb={3}>
                        <img src={WelcomeImage} alt="welcome-img" width={300}/>
                    </Box>
                    <Box mb={2}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="booth-name">Booth Name</InputLabel>
                            <Input id="booth-name" />
                            <FormHelperText>Example: Warung Pintar</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box mb={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="booth-desc">Booth Description</InputLabel>
                            <Input id="booth-desc" />
                            <FormHelperText>Example: Warung makan termurah!</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" size="large" disableElevation>
                            Save Booth
                        </Button>
                    </Box>

                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated/>
        </Box>
    )
}

export default BoothAdd
