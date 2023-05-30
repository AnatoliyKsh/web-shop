import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography  } from "@material-ui/core" ;
import  {AddShoppingCart} from "@material-ui/icons";
import useStyles from "./Styles"
import { Link, useLocation} from 'react-router-dom'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';


const NavigationBar = ({totalItems}) => {
    const classes = useStyles();
    const navigation =useLocation();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={""} alt="web-shop" height="25px" className={classes.image}/>


                    </Typography >
                    <div className={classes.grow}/>
                    {navigation.pathname ==='/'&&(
                    <div className={classes.button}>
                        <IconButton component={Link} to="/Cart" aria-label="show cart items">
                            <Badge badgeContent={totalItems} color="secondary">
                                <AddShoppingCart/>
                            </Badge>

                        </IconButton>
                    </div>) }
                </Toolbar>
            </AppBar>

        </div>
    )
}
export default NavigationBar
