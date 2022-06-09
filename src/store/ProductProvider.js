import { useReducer } from "react";
import ProductContext from "./product-context";

const _content = {
    us: {
        price: '$67.70',
        compareAtPrice: '$47.40',
        saving: 'Save 30%',
    },
    uk: {
        price: '£62.70',
        compareAtPrice: '£43.90',
        saving: 'Save 30%',
    },
    ca: {
        price: '$89.70',
        compareAtPrice: '$62.80',
        saving: 'Save 30%',
    },
    au: {
        price: '$103.70',
        compareAtPrice: '$72.60',
        saving: 'Save 30%',
    },
    eu: {
        price: '€67,70',
        compareAtPrice: '€47,40',
        saving: 'Save 30%',
    },
    int: {
        price: '$67.70',
        compareAtPrice: '$47.40',
        saving: 'Save 30%',
    }
}

const productReducer = (state, action) => {
    return _content[action.activeStore];
};

const ProductProvider = props => {
    const [productState, dispatchProductAction] = useReducer(productReducer, _content.us);
    const storeChangeHandler = (activeStore) => {
        const validStore = ['us', 'au', 'ca', 'uk', 'eu', 'int'].indexOf(activeStore) !== -1 ? activeStore : 'us';
        dispatchProductAction({type: 'CHANGESTORE', activeStore: validStore})
    };

    const productContext = { ...productState, storeChange: storeChangeHandler };

    return (
        <ProductContext.Provider value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;