import React from 'react'
import { Button } from '@material-ui/core'
import { TopNavigation, BottomNavigation } from 'components/layout'
import SmartCanteenLogo from 'assets/images/smartcanteen-logo-purple.png'
const Home = () => {
    return (
        <div>
            <TopNavigation isLogoNavigation>
                <img src={SmartCanteenLogo} alt="app-logo" className="app-logo"/>
            </TopNavigation>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <BottomNavigation/>
        </div>
    )
}

export default Home
