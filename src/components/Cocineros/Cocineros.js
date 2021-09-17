import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Cards from '../Cards/Card';

const Cocineros = () => {

    return <div>
    <Header />
    <Grid container  spacing="2px">
        <Cards />
        <Cards />
        <Cards />
    </Grid>
    <Footer />
    </div>
}

export default Cocineros