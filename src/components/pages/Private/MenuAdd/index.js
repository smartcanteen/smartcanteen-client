import React, { useState } from 'react'
import clsx from 'clsx'
import { Box, Button, Input, FormControl, InputLabel, FormHelperText, TextField, InputAdornment, FormLabel, Switch, FormControlLabel } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, FoodCategoryBox } from 'components/shared'
import { makeStyles } from '@material-ui/core/styles';

import HamburgerImage from 'assets/images/hamburger-illustration.svg'

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

const menuCategories = [{"id":0,"name":"Minuman"},{"id":1,"name":"Makanan Ringan"},{"id":2,"name":"Manisan & Dessert"},{"id":3,"name":"Nasi"},{"id":4,"name":"Fast Food"},{"id":5,"name":"Roti"},{"id":6,"name":"Japanese"},{"id":7,"name":"Bakso & Soto"},{"id":8,"name":"Mi"},{"id":9,"name":"Korean"},{"id":10,"name":"Kopi"},{"id":11,"name":"Martabak"},{"id":12,"name":"Pizza & Pasta"},{"id":13,"name":"Chinese"},{"id":14,"name":"Sate"},{"id":15,"name":"Western"},{"id":16,"name":"Seafood"},{"id":17,"name":"Thai"},{"id":18,"name":"Indian"},{"id":19,"name":"Aceh"},{"id":20,"name":"Bali"},{"id":21,"name":"Daging"},{"id":22,"name":"Mexican"}]

const MenuAdd = () => {
    const classes = useStyles()
    
    const [avaibility, setAvaibility] = useState(true)
    const handleChangeAvailability = () => setAvaibility(!avaibility)
    return (
        <Box className="menu-add">
            <TopNavigation withCaption>
                <NavigationCaption caption="Add Menu" />
            </TopNavigation>
            <AppContainer hasBottomNav>
                <Box minHeight="80vh" display="flex" flexDirection="column">
                    <Box display="flex" justifyContent="center" mb={3}>
                        <img src={HamburgerImage} alt="welcome-img" width={300}/>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box fontWeight="bold" display="flex" justifyContent="center" borderBottom="3px solid" borderColor="primary.main" color="primary.main" maxWidth="38%">
                            <h3>Add New Menu</h3>
                        </Box>
                    </Box>
                    <Box mb={2}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="food-name">Food Name</InputLabel>
                            <Input id="food-name" />
                            <FormHelperText>Example: Nasi Goreng</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Food Price"
                            id="standard-start-adornment"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                            }}
                            style={{width:'100%'}}
                            fullWidth
                        />
                        <FormHelperText>Example: 20000</FormHelperText>
                    </Box>
                    <Box mb={2}>
                        <FormLabel component="legend">Food Category</FormLabel>
                        <Box flex flexWrap maxWidth="100%" my={1}>
                            {menuCategories.map( (category, index) =>
                                <FoodCategoryBox key={index} name={category.name}/>
                            )}
                        </Box>
                    </Box>

                    <Box mb={2} justifyContent="center" alignItems="center">
                        <FormLabel component="legend">Food Avaibility ({avaibility?'Tersedia':'Tidak Tersedia'})</FormLabel>
                        <Box>
                            <FormControlLabel
                            control={<Switch checked={avaibility} onChange={handleChangeAvailability} color="primary" />}
                            />
                        </Box>
                    </Box>

                    <Box mb={3}>
                        <Button disableElevation fullWidth variant="contained" color="primary" size="large">
                            Save Data
                        </Button>
                    </Box>
                </Box>

            </AppContainer>
            <BottomNavigation isAuthenticated/>
        </Box>
    )
}

export default MenuAdd
