import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { formatCurrency } from 'utils/helper'
const useStyles = makeStyles({
    title:{
        fontSize:12,
        marginBottom:5
    },
    value:{
        fontWeight:'bold',
    },
    fullWidth:{
        maxWidth:'95%'
    }
})

const AnalyticsCard = props => {
    const classes = useStyles()
    const { title, value, style, fullWidth } = props
    return (
        <Box className={fullWidth?classes.fullWidth:''} bgcolor="primary.main" textAlign="center" p={.8} borderRadius={5} color="#FFF" marginX={.5} width="100%" {...style} >
            <Typography variant="body2" className={classes.title}>
                { title }
            </Typography>
            <Typography variant="h5" className={classes.value}>
                { formatCurrency(value) }
            </Typography>
        </Box>
    )
}

AnalyticsCard.porpTypes = {
    title:PropTypes.string,
    value:PropTypes.number,
    fullWidth:PropTypes.bool
}

export default AnalyticsCard
