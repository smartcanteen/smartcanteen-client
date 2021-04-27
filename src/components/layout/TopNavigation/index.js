import React from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames";
import { AppBar, Toolbar } from "@material-ui/core"
import useStyles from "./style";

const TopNavigation = props => {
    const classes = useStyles();
    const { position, background, withCaption, withIcon, noBorderBottom, isLogoNavigation } = props;
    return (
        <AppBar
            className={classNames(
                classes.topNavigationWrapper,
                noBorderBottom ? classes.noBorderBottom : undefined
            )}
            style={{ background }}
            position={position}
        >
            <Toolbar
                className={classNames(
                    withCaption ? classes.withCaption : '',
                    withIcon ? classes.withIcon : '',
                    isLogoNavigation ? classes.logoNavigation : ''
                )}
            >
                {props.children}
            </Toolbar>
        </AppBar>
    )
}

TopNavigation.propTypes = {
    isLogoNavigation: PropTypes.bool,
    withCaption: PropTypes.bool,
    withIcon:PropTypes.bool
}

export default TopNavigation