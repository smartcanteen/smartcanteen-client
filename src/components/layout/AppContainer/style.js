import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    AppContainer: {
        padding: 20,
        boxSizing: 'border-box',
        minHeight: '100vh',
    },
    
    isFlexbox: {
        display: 'flex',
        flexDirection: 'column',
    },

    noPadding:{
        padding:0,
    },

    haveBottomNav: {
        paddingBottom: 100,
    },

    backgroundWhite: {
        backgroundColor: '#fff',
    },
})

export default useStyles