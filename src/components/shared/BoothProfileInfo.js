import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {CoverImage} from 'components/shared'
const useStyles = makeStyles({

})
const BoothProfileInfo = () => {
    return (
        <Box className="profile-info">
            <Box className="cover-wrapper">
                <CoverImage/>
            </Box>
        </Box>
    )
}

export default BoothProfileInfo
