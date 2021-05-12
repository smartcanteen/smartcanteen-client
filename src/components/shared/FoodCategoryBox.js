import React from 'react'
import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    btnCategory:{
        margin:5,
    }
})

const FoodCategoryBox = props => {
    const { name, active } = props
    const classes = useStyles()
    return (
        <Button 
            variant={active?'contained':'outlined'} 
            color="primary" 
            size="small"
            className={classes.btnCategory}    
        >
            
            { name }
        </Button>
    )
}

export default FoodCategoryBox
