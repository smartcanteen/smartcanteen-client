import { makeStyles } from '@material-ui/core/styles'

const containerWidth = 415
const minHeight = 80

const useStyles = makeStyles((theme) => ({
    topNavigationWrapper: {
        backgroundColor: theme.palette.background.default,
        boxShadow:"0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey[300],
        width:"100%",
        margin: "0 auto",
        minHeight,
        [theme.breakpoints.up('sm')]: {
            maxWidth: containerWidth,
        },
        left: 0,
        right: 0,
        color: "#000",
        padding:"5px"
    },
    logoNavigation:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },  
    noBorderBottom:{
        borderBottom:0,
    },
    withCaption:{
        justifyContent: "flex-start",
    },
    withIcon:{
        justifyContent:"space-between"   
    },
}));

export default useStyles;