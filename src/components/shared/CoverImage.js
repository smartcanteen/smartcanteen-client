import React from 'react'
import { Box } from '@material-ui/core'
import DefaultCoverImage from 'assets/images/CoverImage.png'

const CoverImage = props => {
    const { imageSrc } = props

    return (
        <Box style={{background:`url(${imageSrc !== undefined?imageSrc:DefaultCoverImage})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center center', width:'100%', height:'250px'}}/>
    )
}

export default CoverImage
