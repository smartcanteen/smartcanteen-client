import React, { useState, useEffect } from 'react'
import { withRouter, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { Box, Button, FormControl, TextField, InputAdornment, FormLabel, Switch, FormControlLabel, CircularProgress } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, FoodCategoryBox, NavigationBack } from 'components/shared'
import { makeStyles } from '@material-ui/core/styles';
import { getDetailFoodSeller } from "configs/api";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZW5qdWFsIjoiMWQzYWQwOGItNGYyYi00YjhlLTgyMGItMDg4ZGFiYmU2NWRmIiwiZmlyc3RfbmFtZSI6IlBlbmp1YWwiLCJsYXN0X25hbWUiOiJEZXYiLCJlbWFpbCI6ImRldkBnbWFpbC5jb20iLCJub190ZWxwIjoiMDgxMjMxMjM0MTIzIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0xMyAxMjo1ODowNyIsImlkX3dhcnVuZyI6ImQxODIyOWMwLTNiYTAtNGRmOS1iYjIxLWRhOTU1Y2NjODNlNiIsImlzQWRtaW4iOmZhbHNlLCJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjIzNTg5MTAyfQ.e9Jm05oDzj_LEymd5lkGxWJ6JvOILSjbLcCSui45Hu4"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        //   margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
    },
}));

let menuCategories = [
    { id: 0, name: "Minuman", active:false }, 
    { id: 1, name: "Makanan Ringan", active:false }, 
    { id: 2, name: "Manisan & Dessert", active:false }, 
    { id: 3, name: "Nasi", active:false }, 
    { id: 4, name: "Fast Food", active:false }, 
    { id: 5, name: "Roti", active:false }, 
    { id: 6, name: "Japanese", active:false }, 
    { id: 7, name: "Bakso & Soto", active:false }, 
    { id: 8, name: "Mi", active:false }, 
    { id: 9, name: "Korean", active:false }, 
    { id: 10, name: "Kopi", active:false }, 
    { id: 11, name: "Martabak", active:false }, 
    { id: 12, name: "Pizza & Pasta", active:false }, 
    { id: 13, name: "Chinese", active:false }, 
    { id: 14, name: "Sate", active:false }, 
    { id: 15, name: "Western", active:false }, 
    { id: 16, name: "Seafood", active:false }, 
    { id: 17, name: "Thai", active:false }, 
    { id: 18, name: "Indian", active:false }, 
    { id: 19, name: "Aceh", active:false }, 
    { id: 20, name: "Bali", active:false }, 
    { id: 21, name: "Daging", active:false }, 
    { id: 22, name: "Mexican", active:false }
]



const MenuEdit = props => {
    const setCategory = (Categori) => {
        const Cat = Categori.split(',')
        menuCategories.map((categ, index) => {
            categ.active = Cat.includes(categ.name)
        })
        console.log("newMenuCateg",menuCategories)
    
        return menuCategories
    }
    let query = useQuery();
    const { history } = props
    const id = query.get("id")
    const classes = useStyles()
    const [avaibility, setAvaibility] = useState(true)
    // const [MenuCategory, setMenuCategory] = useState(true)
    const handleChangeAvailability = () => setAvaibility(!avaibility)
    const goBack = () => history.goBack()
    // const MenuCateg = setCategory("Nasi,Bali")
    
    // const {token} = {token} //useRecoilValue(authState);
    // const { uuid } = {uuid:"1d3ad08b-4f2b-4b8e-820b-088dabbe65df")//props.match.params
    const [foodData, setFoodData] = useState();

    useEffect(() => {
        const getFoodData = async () => {
            const response = await getDetailFoodSeller(token,id);
            const { data } = response?.data;
            if(response.data.success){
                await setFoodData(data);
                await setAvaibility(data.ketersediaan)
                console.log(`foodDetail`, data);
            }
        };

        getFoodData();
    }, []);
    if (foodData){
        let MenuCateg = setCategory(foodData.kategori)
        return (
            <Box className="menu-edit">
                <TopNavigation withCaption withIcon>
                    <NavigationBack />
                    <NavigationCaption caption="Edit Menu" />
                </TopNavigation>

                <AppContainer hasBottomNav>
                    <Box minHeight="80vh" display="flex" flexDirection="column">
                        <Box mb={2}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Food Name"
                                    className={clsx(classes.margin, classes.textField)}
                                    style={{ width: '100%' }}
                                    defaultValue={foodData.nama}
                                />
                            </FormControl>
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Food Price"
                                className={clsx(classes.margin, classes.textField)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                }}
                                style={{ width: '100%' }}
                                defaultValue={foodData.harga}
                            />
                        </Box>
                        <Box mb={2}>
                            <FormLabel component="legend">Food Category</FormLabel>
                            <Box flex flexWrap maxWidth="100%" my={1}>
                                {MenuCateg.map((category, index) =>
                                    <FoodCategoryBox key={index} name={category.name} active={category.active} />
                                )}
                            </Box>
                        </Box>

                        <Box mb={2} justifyContent="center" alignItems="center">
                            <FormLabel component="legend">Food Avaibility ({avaibility ? 'Tersedia' : 'Tidak Tersedia'})</FormLabel>
                            <Box>
                                <FormControlLabel
                                    control={<Switch checked={avaibility} onChange={handleChangeAvailability} color="primary" />}
                                />
                            </Box>
                        </Box>

                        <Box mb={3}>
                            <Button disableElevation fullWidth variant="contained" color="primary" size="large" onClick={goBack}>
                                Edit Data
                            </Button>
                        </Box>
                    </Box>

                </AppContainer>
                <BottomNavigation isAuthenticated />
            </Box>
        )
    }else{
        return (
            <Box className="menu-edit">
                <TopNavigation withCaption withIcon>
                    <NavigationBack />
                    <NavigationCaption caption="Edit Menu" />
                </TopNavigation>

                <AppContainer hasBottomNav>
                    <Box display="flex"
                    justifyContent="center"
                    alignItems="center">
                        <CircularProgress />
                    </Box>
                </AppContainer>
                <BottomNavigation isAuthenticated />
            </Box>
        )
    }
}

export default withRouter(MenuEdit)
