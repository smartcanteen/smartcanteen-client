import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import clsx from 'clsx'
import { Box, Button, FormControl, TextField, InputAdornment, FormLabel, Switch, FormControlLabel } from '@material-ui/core'
import { TopNavigation, BottomNavigation, AppContainer } from 'components/layout'
import { NavigationCaption, FoodCategoryBox, NavigationBack } from 'components/shared'
import { makeStyles } from '@material-ui/core/styles';

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

const menuCategories = [{ id: 0, name: "Minuman", active:false }, { id: 1, name: "Makanan Ringan", active:false }, { id: 2, name: "Manisan & Dessert", active:false }, { id: 3, name: "Nasi", active:true }, { id: 4, name: "Fast Food", active:true }, { id: 5, name: "Roti", active:false }, { id: 6, name: "Japanese", active:false }, { id: 7, name: "Bakso & Soto" }, { id: 8, name: "Mi", active:false }, { id: 9, name: "Korean", active:false }, { id: 10, name: "Kopi", active:false }, { id: 11, name: "Martabak", active:false }, { id: 12, name: "Pizza & Pasta", active:false }, { id: 13, name: "Chinese", active:false }, { id: 14, name: "Sate", active:false }, { id: 15, name: "Western", active:false }, { id: 16, name: "Seafood", active:false }, { id: 17, name: "Thai", active:false }, { id: 18, name: "Indian", active:false }, { id: 19, name: "Aceh", active:false }, { id: 20, name: "Bali", active:false }, { "id": 21, name: "Daging", active:false }, { id: 22, name: "Mexican", active:false }]

const MenuEdit = props => {
    const { history } = props
    const classes = useStyles()
    const [avaibility, setAvaibility] = useState(true)
    const handleChangeAvailability = () => setAvaibility(!avaibility)
    const goBack = () => history.goBack()

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
                                defaultValue="Nasi Goreng"
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
                            defaultValue="150.000"
                        />
                    </Box>
                    <Box mb={2}>
                        <FormLabel component="legend">Food Category</FormLabel>
                        <Box flex flexWrap maxWidth="100%" my={1}>
                            {menuCategories.map((category, index) =>
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
}

export default withRouter(MenuEdit)
