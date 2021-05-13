import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, FormControl, TextField, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles({
    formControlStyle: {
        '& .MuiFormControl-root': {
            // background:'red'
            '& .MuiInputBase-root': {
                // background:'transparent'
                color: '#000'
            }
        }
    }

})
const SellerProfileBox = props => {
    const { readOnly, editProfile, history } = props
    const goBack = () => history.goBack()
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)
    return (
        <React.Fragment>
            <Box mb={2} color="#FFF">
                <FormControl fullWidth className={classes.formControlStyle} >
                    <TextField disabled label="Seller ID" variant="filled" id="seller-id" defaultValue="ab6295f0-2c72-4ef4-9fac-c047463a1227" />
                </FormControl>
            </Box>
            <Box mb={2} display="flex" justifyContent="space-between">
                <Box maxWidth="46.5%">
                    <FormControl className={classes.formControlStyle}>
                        <TextField disabled={readOnly} label="First Name" variant="filled" id="first-name" defaultValue="Athalla" />
                    </FormControl>
                </Box>
                <Box maxWidth="46.5%">
                    <FormControl className={classes.formControlStyle}>
                        <TextField disabled={readOnly} label="Last Name" variant="filled" id="last-name" defaultValue="Rizky" />
                    </FormControl>
                </Box>
            </Box>
            <Box mb={2}>
                <FormControl fullWidth className={classes.formControlStyle}>
                    <TextField disabled={readOnly} label="Email" variant="filled" id="email" defaultValue="athalla@smartcanteen.com" />
                </FormControl>
            </Box>
            <Box mb={2}>
                <FormControl fullWidth className={classes.formControlStyle}>
                    <TextField disabled={readOnly} label="Phone Number" variant="filled" id="phoneNumb" defaultValue="081287651234" />
                </FormControl>
            </Box>

            {editProfile && (
                <Box mb={2}>
                    <FormControl fullWidth className={classes.formControlStyle}>
                        <TextField disabled={readOnly} label="Password" variant="filled" id="password" defaultValue="athalla ganteng banget" type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment:
                                    <IconButton onClick={handleShowPassword}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>,
                            }}

                        />
                    </FormControl>
                </Box>

            )}

            <Box display="flex" justifyContent="center" my={2}>
                {editProfile && (
                    <Button
                        disableElevation
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<SaveIcon />}
                        onClick={goBack}
                    >
                        Save Profile
                    </Button>
                )}

                {readOnly && (
                    <Link to="/profile/edit" style={{ textDecoration: 'none' }}>
                        <Button
                            disableElevation
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<EditIcon />}>
                            Edit Profile
                        </Button>
                    </Link>
                )}
            </Box>
        </React.Fragment>
    )
}

SellerProfileBox.propTypes = {
    readOnly: PropTypes.bool,
    editProfile: PropTypes.bool
}
export default withRouter(SellerProfileBox)
