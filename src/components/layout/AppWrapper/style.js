import { makeStyles } from '@material-ui/core/styles'

const containerWidth = 415

const useStyles = makeStyles( theme => ({
    appWrapper:{
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            maxWidth: containerWidth,
        },
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '100vh',
        margin: '0 auto',
        boxShadow: '0 0 24px rgba(0,0,0,.15)',  
    }
}))

export default useStyles