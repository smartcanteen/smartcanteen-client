import React from 'react'
import { TopNavigation, BottomNavigation } from 'components/layout'
import SmartCanteenLogo from 'assets/images/smartcanteen-logo-purple.png'

const Home = () => {
    return (
        <div>
            <TopNavigation isLogoNavigation>
                <img src={SmartCanteenLogo} alt="app-logo" className="app-logo"/>
            </TopNavigation>

            <BottomNavigation/>
        </div>
    )
}

export default Home
