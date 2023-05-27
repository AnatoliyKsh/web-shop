import React from 'react'
import {Grid} from '@material-ui/core';
import Product from "../Product/Product";

const products = [
    {id:0, name:'first'  , price:"10$", description:"first item", image: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fjucarie.md%2Fwp-content%2Fuploads%2F2020%2F07%2Ffirst-austria-logo.jpg&lr=213&pos=2&rpt=simage&text=first"},
    {id:1 ,name:"second", price:"20$", description:"second item", image: 'https://wallup.net/wp-content/uploads/2019/09/317485-green-field-17854-3840x2160.jpg'},
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};


export default Products;
