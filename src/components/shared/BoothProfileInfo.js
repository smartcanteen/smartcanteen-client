import React from 'react'
import { Box } from '@material-ui/core'
import { CoverImage, BoothEmptyCard } from 'components/shared'

const BoothProfileInfo = () => {
    const isEmptyBooth = true

    if (isEmptyBooth) {
        return <BoothEmptyCard />
    }
    return (
        <Box className="profile-info">
            <Box className="cover-wrapper">
                <CoverImage />
            </Box>
        </Box>
    )
}

export default BoothProfileInfo
