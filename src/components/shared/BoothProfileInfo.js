import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CoverImage, BoothEmptyCard, MenuCard } from 'components/shared'

const foodMenuList = [
    {
        id_makanan:1,
        nama:'Nasi Goreng Murah Banget',
        harga:150000,
        ketersediaan:true
    },
    {
        id_makanan:2,
        nama:'Bubur Ayam',
        harga:100000,
        ketersediaan:true
    },
    {
        id_makanan:3,
        nama:'Nasi Tim Daging Kambing',
        harga:80000,
        ketersediaan:true
    },
    {
        id_makanan:4,
        nama:'Nasi Steak Daging Ayam',
        harga:120000,
        ketersediaan:true
    },
    {
        id_makanan:5,
        nama:'Air Mineral Ada Manis-manisnya',
        harga:10000,
        ketersediaan:false
    },
    {
        id_makanan:6,
        nama:'Jus Alpukat',
        harga:50000,
        ketersediaan:true
    },
]
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
const BoothProfileInfo = () => {
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
                        Warung Athalla
                    </Typography>
                    <Typography variant="caption" className={classes.boothId} gutterBottom>
                        Booth ID: 11cc180d-6358-4cd3-af5a-937f01f891de
                    </Typography>
                    <Typography variant="body2" className={classes.boothDesc}>
                        Menyediakan makanan dan minuman dengan harga yang sangat terjangkau oleh para mahasiswa low-budget seperti Anda.
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
                            foodMenuList.filter( menu => menu.ketersediaan === true ).map((food,index) =>
                                <MenuCard key={index} foodName={food.nama} foodPrice={food.harga}/>
                            )}
                        {/* <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BoothProfileInfo
