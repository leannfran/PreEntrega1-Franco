import React from 'react';
import Typography from '@mui/material/Typography'

const ItemListContainer = ({texto}) => {
    return (
        <>
          <Typography variant="h2" color="initial" >{texto}</Typography>
        </>
    );
}

export default ItemListContainer;
