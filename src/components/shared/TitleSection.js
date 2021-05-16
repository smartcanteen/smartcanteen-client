import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
    title:{
        fontWeight:'bold',
        color: theme.palette.primary.dark
    }
}))

const TitleSection = ({title}) => {
    const classes = useStyles()

    return (
        <Typography variant="overline" className={classes.title}>
            {title}
        </Typography>
    )
}

export default TitleSection
