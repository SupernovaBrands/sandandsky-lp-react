import React from "react";

const ProductContext = React.createContext({
    price: '',
    compareAtPrice: '',
    saving: '',
    storeChange: (activeStore) => {},
});

export default ProductContext;