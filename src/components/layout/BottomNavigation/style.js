import { makeStyles } from '@material-ui/core/styles'
const containerWidth = 415

const useStyles = makeStyles(theme => ({
    bottomNavWrapper: {
        background: theme.palette.primary.main,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        minHeight: 68,
        zIndex: 2,
        [theme.breakpoints.up('sm')]: {
            maxWidth: containerWidth,
        },
    },
    bottomNavItem: {
        color: theme.palette.primary.contrastText,
        opacity: 0.5,
        padding: 12,
        "&$bottomNavItemSelected": {
            color: theme.palette.primary.contrastText,
            opacity: 1,
            padding: 12,
        },
        "&:hover": {
            color: theme.palette.primary.contrastText,
            opacity: 1,
        },
    },
    bottomNavItemLabel: {
        marginTop: 8,
        // Inter SemiBold Narrow 12
        fontWeight: 600,
        fontSize: 12,
        lineHeight: '100%',
        letterSpacing: '-0.0342em',
        
        "&$bottomNavItemSelected": {
            // Inter Regular 12
            fontSize: 12,
        },
    },
    bottomNavItemSelected: {},
}));

export default useStyles