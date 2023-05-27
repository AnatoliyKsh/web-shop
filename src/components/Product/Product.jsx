import React from 'react';
import {Card, CardMedia, CardActions, CardContent, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './Styles'

const Product = ({product})=>{
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterButton>
                        {product.name}

                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>

                </div>
                <Typography variant="h2" color="textSecondary">{product.description} </Typography></CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="add to Card">
                        <AddShoppingCart/>
                    </IconButton>

                </CardActions>



        </Card>
    )
}
export default Product
