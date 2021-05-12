import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Avatar, FormControl, Input, InputLabel, FormHelperText, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption } from 'components/shared'
import ProfileAvatar from 'assets/images/ProfileAvatar.svg'
import EditIcon from '@material-ui/icons/Edit';

const profileImgSize = '130px'
const useStyles = makeStyles({
    profileImage:{
        width:profileImgSize,
        height:profileImgSize
    },
    formControlStyle:{
        '& .MuiFormControl-root':{
            // background:'red'
            '& .MuiInputBase-root':{
                // background:'transparent'
                color:'#000'
            }
        }
    }

})
const Profile = () => {
    const classes = useStyles()
    return (
        <Box className="profile">
            <TopNavigation withCaption>
                <NavigationCaption caption="Profile" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box minHeight="80vh" display="flex" flexDirection="column">
                    <Box mb={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Avatar src={ProfileAvatar} className={classes.profileImage} />
                    </Box>
                    <Box mb={2} color="#FFF">
                        <FormControl fullWidth className={classes.formControlStyle} >
                            <TextField disabled label="Seller ID" variant="filled" id="seller-id" defaultValue="ab6295f0-2c72-4ef4-9fac-c047463a1227"/>
                        </FormControl>
                    </Box>
                    <Box mb={2} display="flex" justifyContent="space-between">
                        <Box maxWidth="46.5%">
                            <FormControl className={classes.formControlStyle}>
                                <TextField disabled label="First Name" variant="filled" id="first-name" defaultValue="Athalla"/>
                            </FormControl>
                        </Box>
                        <Box maxWidth="46.5%">
                            <FormControl className={classes.formControlStyle}>
                                <TextField disabled label="Last Name" variant="filled" id="last-name" defaultValue="Rizky"/>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box mb={2}>
                        <FormControl fullWidth className={classes.formControlStyle}>
                            <TextField disabled label="Email" variant="filled" id="email" defaultValue="athalla@smartcanteen.com"/>
                        </FormControl>
                    </Box>
                    <Box mb={2}>
                        <FormControl fullWidth className={classes.formControlStyle}>
                            <TextField disabled label="Phone Number" variant="filled" id="phoneNumb" defaultValue="081287651234"/>
                        </FormControl>
                    </Box>

                    <Box>
                        <Link to="/profile/edit" style={{textDecoration:'none'}}>
                            <Button variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<EditIcon />}>
                                                    Edit Profile
                            </Button>
                        </Link>

                    </Box>
                </Box>
            </AppContainer>
            <BottomNavigation isAuthenticated/>

        </Box>
    )
}

export default Profile
