import React from "react";

const RangeContext = React.createContext({
    price: '',
    comparePrice: '',
    changeStore: (activeStore, productHandle) => {},
});

export default RangeContext;
