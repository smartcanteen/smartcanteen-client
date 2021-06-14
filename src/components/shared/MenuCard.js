import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';

import InputCounter from 'components/shared/InputCounter'

import MenuCoverImage from 'assets/images/MenuCoverImage.png'
const imageSize = 85

const useStyles = makeStyles( theme => ({
    menuCardWrapper:{
        display:'flex',
        marginBottom:10,
    },
    menuImage:{
        minWidth:imageSize,
        minHeight:imageSize,
        maxHeight:imageSize,
        backgroundSize:'cover',
        backgroundPosition:'center center'
    },
    foodName:{
        fontWeight:'bold',
        color:'#333'
    },
    foodCategory:{
        opacity:'0.8',
        fontSize:11,
        color: theme.palette.primary.dark
    },
    addToCartBtn:{
        minHeight:50
    },
    buyTextBtn:{
        fontSize:10,
        fontWeight:'bold'
    }
}))
const MenuCard = props => {
    const classes = useStyles()
    const { foodName, foodPrice, foodCategory, isEdit, isBuy, id, sold, isCounter } = props
    const linkEdit = `/menu/edit?id=${id}`
    return (
            <Box className={classes.menuCardWrapper}>
                <Box style={{backgroundImage:`url(${MenuCoverImage})`}} className={classes.menuImage}/>
                <Box paddingX={1} width='100%'>
                    <Typography variant="subtitle1" className={classes.foodName}>
                        {foodName}
                    </Typography>
                    <Box display="flex" flexDirection="column" justifyContent="space-between" height="8vh">
                        <Typography variant="body2">
                            {foodPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-
                        </Typography>
                        {sold && (<Typography variant="caption">
                            {"Terjual: "+sold}
                        </Typography>)}
                        <Typography variant="caption" className={classes.foodCategory} gutterBottom>
                            { foodCategory }
                            {/* Food ID: 11cc180d-6358-4cd3-af5a-937f01f891de */}
                            {/* {foodCategory.map((category,index)=>
                                category + ', '
                            )} */}
                        </Typography>
                    </Box>
                </Box>
                {
                    isCounter && (
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <InputCounter/>
                        </Box>

                    )
                }
                <Box display="flex" alignItems="flex-end" justifyContent="center">
                    {isEdit && (
                        <Link to={linkEdit} style={{textDecoration:'none'}}>
                            <Button color="primary" disableElevation className={classes.addToCartBtn}>
                                <Box>
                                    <EditIcon fontSize="small"/>
                                    <Typography className={classes.buyTextBtn}>
                                        Edit
                                    </Typography>
                                </Box>
                            </Button>
                        </Link>
                    )}
                    {isBuy && (
                        <Button color="primary" disableElevation className={classes.addToCartBtn}>
                            <Box>
                                <AddShoppingCartIcon fontSize="small"/>
                                <Typography className={classes.buyTextBtn}>
                                    Add
                                </Typography>
                            </Box>
                        </Button>
                    )}
                </Box>
            </Box>
    )
}

MenuCard.propTypes = {
    foodId:PropTypes.string,
    foodCategory:PropTypes.string,
    foodName: PropTypes.string,
    foodPrice: PropTypes.string,
    isEdit: PropTypes.bool,
    isBuy: PropTypes.bool,
    isCounter: PropTypes.bool
}

export default MenuCard
