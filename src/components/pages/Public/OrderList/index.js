import React from 'react'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { Box } from '@material-ui/core'
import OrderCard from 'components/shared/OrderCard'
import SmartCanteenLogo from 'assets/images/smartcanteen-logo-purple.png'

const ordersData = [
    {
        orderItems:[
            {nama:'Bihun Goreng', jumlah:91},
        ],
        status:1
    },
    {
        orderItems:[
            {nama:'Bubur Ayam', jumlah:10},
            {nama:'Jus Alpuket', jumlah:2},
        ],
        status:2
    },
    {
        orderItems:[
            {nama:'Soto Ayam', jumlah:100},
            {nama:'Jus Mangga', jumlah:29},
        ],
        status:2
    },
    {
        orderItems:[
            {nama:'Bubur Kacang Ijo', jumlah:15},
            {nama:'Jus Tomat', jumlah:10},
        ],
        status:3
    }
]

const OrderList = () => {
    return (
        <Box>
            <TopNavigation isLogoNavigation>
                <img src={SmartCanteenLogo} alt="app-logo" className="app-logo" />
            </TopNavigation>
            <AppContainer noPadding hasBottomNav>
                <Box p={2}>
                    {ordersData.map((ongoingOrder,index) => 
                        <OrderCard key={index} ordered orderFoodList={ongoingOrder.orderItems}/>
                    )}
                </Box>

            </AppContainer>
            <BottomNavigation />

        </Box>
    )
}

export default OrderList
