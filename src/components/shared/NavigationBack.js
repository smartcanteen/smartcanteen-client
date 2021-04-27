import React from 'react'
import { withRouter } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
    backButton:{
        marginRight: 12,
        padding: 4,
    }
})

const NavigationBack = ({history}) => {
    const classes = useStyles();
    const goBack = async () => history.goBack();
    
    return (
        <IconButton onClick={goBack} color="primary" className={classes.backButton}>
            <ArrowBack />
        </IconButton>
    )
}

export default withRouter(NavigationBack)
