import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CoverImage, BoothEmptyCard, MenuCard } from 'components/shared'

const foodMenuList = [
    {
        id_makanan:1,
        nama:'Nasi Goreng Murah',
        harga:150000,
        kategori:'Makanan, Nasi, Fast Food',
        ketersediaan:true
    },
    {
        id_makanan:2,
        nama:'Bubur Ayam',
        harga:100000,
        kategori:'Makanan, Nasi, Bubur',
        ketersediaan:true
    },
    { 
        id_makanan:3,
        nama:'Nasi Tim Daging Kambing',
        harga:80000,
        kategori:'Makanan, Nasi, Daging',
        ketersediaan:true
    },
    {
        id_makanan:4,
        nama:'Nasi Steak Daging Ayam',
        harga:120000,
        kategori:'Makanan, Nasi, Daging, Western',
        ketersediaan:true
    },
    {
        id_makanan:5,
        nama:'Air Mineral Ada Manis-manisnya',
        harga:10000,
        kategori:'Minuman',
        ketersediaan:false
    },
    {
        id_makanan:6,
        nama:'Jus Alpukat',
        harga:50000,
        kategori:'Minuman',
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
const BoothProfileInfo = (props) => {
    const { data } = props
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
