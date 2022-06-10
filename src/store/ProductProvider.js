import { useReducer } from "react";
import ProductContext from "./product-context";

const _content = {
    us: {
        compareAtPrice: '$67.70',
        price: '$47.40',
        saving: 'Save 30%',
    },
    uk: {
        compareAtPrice: '£62.70',
        price: '£43.90',
        saving: 'Save 30%',
    },
    ca: {
        compareAtPrice: '$89.70',
        price: '$62.80',
        saving: 'Save 30%',
    },
    au: {
        compareAtPrice: '$103.70',
        price: '$72.60',
        saving: 'Save 30%',
    },
    eu: {
        compareAtPrice: '€67,70',
        price: '€47,40',
        saving: 'Save 30%',
    },
    int: {
        compareAtPrice: '$67.70',
        price: '$47.40',
        saving: 'Save 30%',
    },
    my: {
        compareAtPrice: 'RM303.00',
        price: 'RM239.00',
        saving: 'Save 21%',
    }
}

const productReducer = (state, action) => {
    return _content[action.activeStore];
};

const ProductProvider = props => {
    const [productState, dispatchProductAction] = useReducer(productReducer, _content.us);
    const storeChangeHandler = (activeStore) => {
        const validStore = ['us', 'au', 'ca', 'uk', 'eu', 'int', 'my'].indexOf(activeStore) !== -1 ? activeStore : 'us';
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