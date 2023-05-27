import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography  } from "@material-ui/core" ;
import  {AddShoppingCart} from "@material-ui/icons";
import useStyles from "./Styles"

const NavigationBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={""} alt="web-shop" height="25px" className={classes.image}/>


                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <AddShoppingCart/>
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}
export default NavigationBar
