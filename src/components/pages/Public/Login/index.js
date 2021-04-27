import React, {Fragment} from 'react'
import { Box, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { AppContainer, TopNavigation } from 'components/layout'

import { NavigationBack, NavigationCaption } from 'components/shared'
const Login = () => {
    return (
        <Fragment>
            <TopNavigation withIcon withCaption>
                <NavigationBack/>
                <NavigationCaption caption="Login Penjual"/>
            </TopNavigation>
            <AppContainer>
                asdasdas
            </AppContainer>
        </Fragment>
    )
}

export default Login
