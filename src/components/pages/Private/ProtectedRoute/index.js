import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest }) => {
    // const status = useRecoilValue(authState)
    const status = {
        isAuthenticated:false,
    }
    return(
        <Route
            {...rest}
            render={
                (props) => (status?.isAuthenticated ? <Component {...props}/> : <Redirect to="/login"/>)
            }
        />
    )
}

export default ProtectedRoute