import { useReducer } from "react";
import ProductContext from "./product-context";

const price = {
    us: {
        price: '$46.90',
        compareAtPrice: '$73.90',
        saving: 'Save 37%',
    },
    uk: {
        price: '£39.90',
        compareAtPrice: '£56.90',
        saving: 'Save 30%',
    },
    ca: {
        price: '$59.90',
        compareAtPrice: '$101.90',
        saving: 'Save 41%',
    },
    au: {
        price: '$69.20',
        compareAtPrice: '$99.90',
        saving: 'Save 31%',
    },
    eu: {
        price: '€46,90',
        compareAtPrice: '€65,90',
        saving: 'Save 29%',
    },
    int: {
        price: 'SG$64.90',
        compareAtPrice: 'SG$101.90',
        saving: 'Save 36%',
    },
    fr: {
        price: '€46,90',
        compareAtPrice: '€65,90',
        saving: '29% de réduction',
    },
    de: {
        price: '€46,90',
        compareAtPrice: '€65,90',
        saving: 'Spare 29%',
    }
}

const productReducer = (state, action) => {
    return price[action.activeStore];
};

const ProductProvider = props => {
    const [productState, dispatchProductAction] = useReducer(productReducer, price.uk);
    const storeChangeHandler = (activeStore) => {
        dispatchProductAction({type: 'CHANGESTORE', activeStore: activeStore})
    };

    const productContext = {
        price: productState.price,
        compareAtPrice: productState.compareAtPrice,
        saving: productState.saving,
        storeChange: storeChangeHandler,
    };
    

    return (
        <ProductContext.Provider value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;