import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import useStyles from "./style";

const AppContainer = props => {
    const classes = useStyles();
    const { isFlexbox, noPadding, hasBottomNav, backgroundWhite } = props;
    return (
        <div
            className={
                classNames(
                    classes.AppContainer,
                    isFlexbox ? classes.isFlexbox : undefined,
                    noPadding ? classes.noPadding : undefined,
                    hasBottomNav ? classes.haveBottomNav : undefined,
                    backgroundWhite ? classes.backgroundWhite : undefined,
                )
            }
        >
            {props.children}
        </div>
    )
}

AppContainer.propTypes = {
    isFlexbox: PropTypes.bool,
    noPadding: PropTypes.bool,
    hasBottomNav: PropTypes.bool,
    backgroundWhite: PropTypes.bool,
  };

export default AppContainer