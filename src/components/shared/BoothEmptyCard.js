import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import EmptyBoothImage from 'assets/images/empty-booth-illustration.svg'
const BoothEmptyCard = () => {
    return (
        <Box className="empty-booth" p={4} minHeight="65vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box className="empty-booth-img"  display="flex" justifyContent="center" my={2}>
                <img src={EmptyBoothImage} alt="empty-booth" width={250}/>
            </Box>
            <Box my={2}>
                <Alert severity="warning" color="warning">
                    Kamu belum punya warung!
                </Alert>
            </Box>
            <Box display="flex" justifyContent="center">
                <Link to="/booth/add" style={{textDecoration:'none'}}>
                    <Button variant="contained" color="primary" size="large" disableElevation>
                        Buat Warung Sekarang
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default BoothEmptyCard
