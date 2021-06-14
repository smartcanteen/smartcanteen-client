import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CoverImage, BoothEmptyCard, MenuCard } from 'components/shared'

const useStyles = makeStyles( theme => ({
    boothName:{
        fontWeight:'bold',
        color: theme.palette.primary.main
    },
    boothId:{
        opacity:'0.5'
    },
    boothDesc:{
        margin:"2vh 0"
    },
    menuHeading:{
        fontWeight:'bold',
        marginBottom: 10
    }
}))
const BoothProfileInfo = (props) => {
    const { data, booth } = props
    console.log(data.filter( menu => menu.ketersediaan === false ))
    const isEmptyBooth = false
    const classes = useStyles()
    if (isEmptyBooth) {
        return <BoothEmptyCard />
    }
    return (
        <Box className="profile-info">
            <Box className="cover-wrapper">
                <CoverImage />
            </Box>
            <Box p={2}>
                <Box className="booth-info">
                    <Typography variant="h6" className={classes.boothName}>
                        {booth.nama_warung}
                    </Typography>
                    <Typography variant="caption" className={classes.boothId} gutterBottom>
                        Booth ID: {booth.id_warung}
                    </Typography>
                    <Typography variant="body2" className={classes.boothDesc}>
                        {booth.deskripsi}
                    </Typography>
                </Box>
                <Box className="booth-menu-list">
                    <Box color="primary.main">
                        <Typography variant="subtitle1" className={classes.menuHeading}>
                            Booth Menu
                        </Typography>
                    </Box>
                    <Box>
                        {
                        data.filter( menu => menu.ketersediaan === true ).map((food,index) =>
                            <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} id={food.id_makanan} isEdit/>
                        )}
                    </Box>
                    {data.filter( menu => menu.ketersediaan === false ).length>0 && 
                    (   <Box color="primary.main">
                            <Typography variant="subtitle1" className={classes.menuHeading}>
                                Sedang Tidak Tersedia
                            </Typography>
                        </Box>
                    )}
                    {data.filter( menu => menu.ketersediaan === false ).length>0 && (<Box>
                        {
                        data.filter( menu => menu.ketersediaan === false ).map((food,index) =>
                            <MenuCard key={index} foodName={food.nama} foodPrice={food.harga} foodCategory={food.kategori} id={food.id_makanan} isEdit/>
                        )}
                    </Box>)}
                </Box>
            </Box>
        </Box>
    )
}

export default BoothProfileInfo
