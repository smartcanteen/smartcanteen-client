import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import MenuCoverImage from 'assets/images/MenuCoverImage.png'
const imageSize = 80

const useStyles = makeStyles({
    menuCardWrapper:{
        display:'flex',
        marginBottom:10
    },
    menuImage:{
        minWidth:imageSize,
        minHeight:imageSize,
        backgroundSize:'cover'
    },
    foodName:{
        fontWeight:'bold',
        color:'#333'
    },
    addToCartBtn:{
        minHeight:50
    },
    buyTextBtn:{
        fontSize:10,
        fontWeight:'bold'
    }
})
const MenuCard = props => {
    const classes = useStyles()
    const { foodName, foodPrice } = props
    return (
            <Box className={classes.menuCardWrapper}>
                <Box style={{backgroundImage:`url(${MenuCoverImage})`}} className={classes.menuImage}/>
                <Box p={1} width='100%'>
                    <Typography variant="subtitle1" className={classes.foodName}>
                        {foodName}
                    </Typography>
                    <Box display="flex">
                        <Typography variant="body2">
                            {foodPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" alignItems="flex-end" justifyContent="center">
                    <Button color="primary" disableElevation className={classes.addToCartBtn}>
                        <Box>
                            <AddShoppingCartIcon fontSize="small"/>
                            <Typography className={classes.buyTextBtn}>
                                Add
                            </Typography>
                        </Box>
                    </Button>
                </Box>
            </Box>
    )
}

MenuCard.propTypes = {
    foodId:PropTypes.string,
    foodName: PropTypes.string,
    foodPrice: PropTypes.string,
}

export default MenuCard
