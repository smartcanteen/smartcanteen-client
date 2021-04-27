import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Icon, SvgIcon  } from '@material-ui/core'

// Icon List
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

// Custom Style
import useStyles from './style'

const ParseIcon = ({iconSource, width, height }) => {
    return(
        <Icon>
            <img src={iconSource} alt="menu-icon" width={width} height={height}/>
        </Icon>
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
        { label: "Menu", value: "/", icon: <FastfoodIcon/> },
        { label: "Cek Status", value: "/", icon: <ShoppingBasketIcon/> },
        { label: "Penjual", value: "/", icon: <RestaurantMenuIcon/> },
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
                    }}
                />

            ))}
        </BottomNavigation>
    )
}

export default BottomNav
