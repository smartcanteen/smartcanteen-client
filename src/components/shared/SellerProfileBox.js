import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, FormControl, TextField, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { updateSeller } from "configs/api";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZW5qdWFsIjoiMWQzYWQwOGItNGYyYi00YjhlLTgyMGItMDg4ZGFiYmU2NWRmIiwiZmlyc3RfbmFtZSI6IlBlbmp1YWwiLCJsYXN0X25hbWUiOiJEZXYiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJub190ZWxwIjoiMDgxMjMxMjM0MTIzIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xMyAxMjo1ODowNyIsImlkX3dhcnVuZyI6ImQxODIyOWMwLTNiYTAtNGRmOS1iYjIxLWRhOTU1Y2NjODNlNiIsImlzQWRtaW4iOmZhbHNlLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjIzNTg5MTAyfQ.e9Jm05oDzj_LEymd5lkGxWJ6JvOILSjbLcCSui45Hu4"

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
    const { readOnly, editProfile, history, data } = props
    const [sellerData, setSellerData] = useState(data);
    const goBack = async () => {

        const berhasil = await updateSellerData(token,sellerData)
        if (berhasil.success) history.goBack()
        else{
            // alert disini
            console.log(berhasil.data[0].message)
        }
    }
    const updateSellerData = async (token, sellerData) => {
        delete sellerData.tenant
        delete sellerData.id_penjual
        delete sellerData.createdAt
        if (sellerData.password === "password" || sellerData.password === "") delete sellerData.password
        const response = await updateSeller(token,sellerData);
        return response?.data
    };
    
    function handleField(e) {
        let lastData = sellerData
        lastData[e.target.id] = e.target.value
        setSellerData(lastData)
    }
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)
    
    return (
        <React.Fragment>
            <Box mb={2} color="#FFF">
                <FormControl fullWidth >
                    <TextField disabled label="Seller ID" variant="filled" id="seller-id" defaultValue={sellerData?.id_penjual} />
                </FormControl>
            </Box>
            <Box mb={2} display="flex" justifyContent="space-between">
                <Box maxWidth="46.5%">
                    <FormControl className={classes.formControlStyle}>
                        <TextField disabled={readOnly} onChange={handleField} label="First Name" variant="filled" id="first_name" defaultValue={sellerData?.first_name}/>
                    </FormControl>
                </Box>
                <Box maxWidth="46.5%">
                    <FormControl className={classes.formControlStyle}>
                        <TextField disabled={readOnly} onChange={handleField} label="Last Name" variant="filled" id="last_name" defaultValue={sellerData?.last_name} />
                    </FormControl>
                </Box>
            </Box>
            <Box mb={2}>
                <FormControl fullWidth className={classes.formControlStyle}>
                    <TextField disabled={readOnly} onChange={handleField} label="Email" variant="filled" id="email" defaultValue={sellerData?.email} />
                </FormControl>
            </Box>
            <Box mb={2}>
                <FormControl fullWidth className={classes.formControlStyle}>
                    <TextField disabled={readOnly} onChange={handleField} label="Phone Number" variant="filled" id="no_telp" defaultValue={sellerData?.no_telp} />
                </FormControl>
            </Box>

            {editProfile && (
                <Box mb={2}>
                    <FormControl fullWidth className={classes.formControlStyle}>
                        <TextField disabled={readOnly} onChange={handleField} label="New Password" variant="filled" id="password" defaultValue="password" type={showPassword ? 'text' : 'password'}
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
                            size="medium"
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
