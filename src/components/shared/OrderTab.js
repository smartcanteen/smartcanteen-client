import React from 'react'
import { Box, Tab, Tabs } from '@material-ui/core'
import { OrderCard } from 'components/shared'

/* Status
    0: Menunggu Pembayaran
    1: Dipesan
    2: Diproses
    3: Selesai
    4: Ditolak
*/
const ordersData = [
    {
        orderItems:[
            {nama:'Nasi Goreng', jumlah:2},
            {nama:'Air Mineral', jumlah:1},
        ],
        status:1
    },
    {
        orderItems:[
            {nama:'Mie Goreng', jumlah:200},
            {nama:'Soto Daging', jumlah:10},
        ],
        status:1
    },
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
}

function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      "aria-controls": `scrollable-prevent-tabpanel-${index}`,
    };
  }

const OrderTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                variant="fullWidth"
            >
                <Tab label="Dipesan" {...a11yProps(0)}/>
                <Tab label="Diproses" {...a11yProps(1)}/>
                <Tab label="Selesai" {...a11yProps(2)}/>
            </Tabs>
            <Box margin={2}>
                <TabPanel value={value} index={0}>
                    {ordersData.filter(onGoing => onGoing.status === 1).map((ongoingOrder,index) => 
                        <OrderCard key={index} ordered orderFoodList={ongoingOrder.orderItems}/>
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {ordersData.filter(onGoing => onGoing.status === 2).map((ongoingOrder,index) => 
                        <OrderCard key={index} processed orderFoodList={ongoingOrder.orderItems}/>
                    )}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {ordersData.filter(onGoing => onGoing.status === 3).map((ongoingOrder,index) => 
                        <OrderCard key={index} finished orderFoodList={ongoingOrder.orderItems}/>
                    )}
                </TabPanel>

            </Box>
        </>
    )
}

export default OrderTab
