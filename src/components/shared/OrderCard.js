import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    boxWrapper:{
        // border:"1.5px solid",
        // borderColor:theme.palette.primary.dark
        // boxShadow:"0 0.8rem 1rem rgba(0, 0, 0, 0.075)"
        background:theme.palette.primary.main,
        color:'#FFF',
        borderRadius:5,
    },
    deactive:{
        color:theme.palette.primary.contrastText,
        border:"1px solid",
        borderColor:theme.palette.primary.contrastText,
        textTransform:'capitalize',
        margin:4,
        '&:hover': {
            color:theme.palette.primary.contrastText,
            background:theme.palette.primary.dark,
            border:"1px solid",
            borderColor:theme.palette.primary.contrastText,
         },
    },
    active:{
        background:'#dfe6e9',
        color:theme.palette.primary.main,
        textTransform:'capitalize',
        margin:4,
        '&:hover': {
            color:theme.palette.primary.contrastText,
            border:"1px solid",
            borderColor:theme.palette.primary.contrastText,
         },
    }
}))

const OrderCard = props => {
    const classes = useStyles()
    const { ordered, processed, finished, orderFoodList } = props
    return (
        <Box p={1.5} mb={2} className={classes.boxWrapper}>
            <Box mb={3}>
                <Typography variant="subtitle2" style={{fontWeight:'bold'}}>
                    Pesanan
                </Typography>
                <ul style={{marginLeft:'5vh'}}>
                    {orderFoodList?.map((food, index) => 
                        <li key={index}>
                            <Typography variant="overline">
                                {food?.nama} ( {food?.jumlah} )
                            </Typography>
                        </li>
                    )}
                </ul>
            </Box>
            <Box display="flex" justifyContent="space-between" py={1}>
                <Button fullWidth className={ordered?classes.active:classes.deactive} disableElevation>
                    Dipesan
                </Button>
                <Button fullWidth className={processed?classes.active:classes.deactive} disableElevation>
                    Diproses
                </Button>
                <Button fullWidth className={finished?classes.active:classes.deactive} disableElevation>
                    Selesai
                </Button>
            </Box>
        </Box>
    )
}

OrderCard.propTypes = {
    ordered:PropTypes.bool,
    processed:PropTypes.bool,
    finished:PropTypes.bool,
    orderFoodList:PropTypes.array
}

export default OrderCard
