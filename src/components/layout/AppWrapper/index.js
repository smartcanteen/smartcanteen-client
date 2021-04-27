import React from 'react'
import useStyles from "./style";

const AppWrapper = ({children}) => {
    const classes = useStyles();
    return <div className={classes.appWrapper}>{children}</div>;
}

export default AppWrapper