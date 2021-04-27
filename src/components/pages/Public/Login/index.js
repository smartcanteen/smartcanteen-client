import React, { Fragment } from 'react'
import { Box, Typography, Divider, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { AppContainer, TopNavigation } from 'components/layout'
import { NavigationBack, NavigationCaption } from 'components/shared'

import ChefIllustration from 'assets/images/chef-illustration.svg'
const Login = () => {
    return (
        <Fragment>
            <TopNavigation withIcon withCaption>
                <NavigationBack />
                <NavigationCaption caption="Login Penjual" />
            </TopNavigation>
            <AppContainer>
                <Box display="flex" justifyContent="center">
                    <img src={ChefIllustration} alt="illustration" width={250} />
                </Box>
                <Box textAlign="center" p={2} color="primary.main" fontWeight="bold">
                    {/* <Typography variant="body2">
                        Hai, halaman ini khusus penjual. <br /> Jika kamu tersesat kamu dapat kembali.
                    </Typography> */}
                    <Alert severity="warning" color="warning">
                        Hai, halaman ini khusus penjual. <br /> Jika kamu tersesat kamu dapat kembali.
                    </Alert>
                </Box>
                <Box my={3}>
                    <Divider />

                </Box>
                <Box p={2}>
                  
                    <Box mb={2}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="email">Alamat Email</InputLabel>
                            <Input id="email" />
                            <FormHelperText>Example: penjual@smartcanteen.com</FormHelperText>
                        </FormControl>

                    </Box>
                    <Box mb={5}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                    </Box>

                    <Button variant="contained" color="primary" size="large" fullWidth disableElevation>
                        Login
                    </Button>
                </Box>
            </AppContainer>
        </Fragment>
    )
}

export default Login
