import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Icon, Fab  } from '@material-ui/core'

// Icon List
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import StarsIcon from '@material-ui/icons/Stars';

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

const BottomNav = () => {
    const classes = useStyles();
    let history = useHistory();

    const pathname = window.location.pathname;
    const [value, setValue] = useState(pathname);

    const handleChange = (event, uri) => {
        history.push(uri);
        setValue(uri);
    };

    const menus = [
        // { label: "Home", value: "/", icon: <ParseIcon iconSource={HomeIcon} width={20} height={20}/> },
        { label: "Beranda", value: "/", icon: <HomeIcon/> },
        { label: "Menu", value: "/menus", icon: <FastfoodIcon/> },
        { label: "", value: "/check-status", icon: <FloatingMenu icon={<ShoppingBasketIcon/>}/>, active:true },
        { label: "Penjual", value: "/check-status", icon: <RestaurantMenuIcon/> },
        { label: "Rekomendasi", value: "/recommendation", icon: <StarsIcon/> },
    ];

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
                        // active: menu.active?classes.activeButton:''
                    }}
                    className={
                        menu.active?classes.activeButton:''
                    }
                />

            ))}
            
        </BottomNavigation>
    )
}

export default BottomNav
