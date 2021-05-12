import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Fab  } from '@material-ui/core'

// Icon List For User
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReceiptIcon from '@material-ui/icons/Receipt';

// Icon List For Seller
import DashboardIcon from '@material-ui/icons/Dashboard';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RoomServiceIcon from '@material-ui/icons/RoomService';

// Custom Style
import useStyles from './style'

const FloatingMenu = ({icon}) => {
    const classes = useStyles();
    return(
        <Fab color="primary" aria-label="add" className={classes.floatingMenu}>
            {icon}
        </Fab>
    )
}

const BottomNav = props => {
    const classes = useStyles();
    let history = useHistory();
    const pathname = window.location.pathname;
    
    // harusnya isAuthenticated diambil dari state
    const { isAuthenticated } = props
    
    const [value, setValue] = useState(pathname);
    
    const handleChange = (event, uri) => {
        history.push(uri);
        setValue(uri);
    };
    
    let menus = []

    if(isAuthenticated){
        // Menus for Seller
        menus = [
            { label: "Dashboard", value: "/dashboard", icon: <DashboardIcon/> },
            { label: "Profile", value: "/profile", icon: <AccountCircleIcon/> },
            { label: "", value: "/order/list", icon: <FloatingMenu icon={<AlarmAddIcon/>}/>, active:true },
            { label: "Booth", value: "/booth", icon: <RoomServiceIcon/> },
            { label: "Add Menu", value: "/menu/add", icon: <AddBoxIcon/> },
        ];
    }else{
        // Menus for Buyer
        menus = [
            { label: "Beranda", value: "/", icon: <HomeIcon/> },
            { label: "Menu", value: "/menus", icon: <FastfoodIcon/> },
            { label: "", value: "/dashboard", icon: <FloatingMenu icon={<ShoppingCartIcon/>}/>, active:true },
            { label: "Penjual", value: "/check-status", icon: <RestaurantMenuIcon/> },
            { label: "Pesanan", value: "/check-status", icon: <ReceiptIcon/> },
        ];
    }

    return (
        <BottomNavigation
            showLabels
            onChange={handleChange}
            value={value}
            className={classes.bottomNavWrapper}
        >
            {menus.map((menu, index) => (
                <BottomNavigationAction
                    key={index}
                    label={menu.label}
                    value={menu.value}
                    icon={menu.icon}
                    classes={{
                        root: classes.bottomNavItem, 
                        selected: classes.bottomNavItemSelected,
                        label: classes.bottomNavItemLabel,
                    }}
                    className={
                        menu.active?classes.activeButton:''
                    }
                />

            ))}
            
        </BottomNavigation>
    )
}

BottomNav.propTypes = {
    isAuthenticated:PropTypes.bool,
}

export default BottomNav
