import React from 'react';
import {Card, CardMedia, CardActions, CardContent, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './Styles'

const Product = ({product,onAddToCart})=>{
    const classes = useStyles();
     // console.log(product);
     // return <div>test</div>
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterButton>
                        {product.name}

                    </Typography>
                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>

                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="h2" color="textSecondary"/></CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="add to Card" onClick={()=>onAddToCart(product.id,1)}>
                    <AddShoppingCart/>
                </IconButton>

            </CardActions>



        </Card>
    )
}
export default Product
