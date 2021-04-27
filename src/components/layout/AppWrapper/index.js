import React from 'react'
import useStyles from "./style";

export default AppWrapper = ({children}) => {
    const classes = useStyles();
    return <div className={classes.appWrapper}>{children}</div>;
}