import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    headerTitle: {
        display: 'flex',
        flexBasis: '100%',
        fontWeight: 600,
        fontSize: 16,
    },
})
const NavigationCaption = props => {
    const { caption } = props
    const classes = useStyles();
    
    return (
        <Box className={classes.headerTitle} {...props}>
            {caption}
        </Box>
    )
}

NavigationCaption.propTypes = {
    caption: PropTypes.string,
}
export default NavigationCaption
