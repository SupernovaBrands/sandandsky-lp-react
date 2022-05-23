import { useReducer } from 'react';
import RangeContext from './range-context';

const productPrice = {
    'bronzing-self-tanner-drops': {
        us: {
            price: '$27.90',
            comparePrice: null,
        },
        ca: {
            price: '$35.90',
            comparePrice: null,
        },
        uk: {
            price: '£22.90',
            comparePrice: null,
        },
        eu: {
            price: '€26,90',
            comparePrice: null,
        },
        au: {
            price: '$39.90',
            comparePrice: null,
        },
        int: {
            price: 'SG$38.90',
            comparePrice: null,
        },
        de: {
            price: '€26,90',
            comparePrice: null,
        },
        fr: {
            price: '€26,90',
            comparePrice: null,
        },
    },
    'spf-glow-kit': {
        us: {
            price: '$45.70',
            comparePrice: '$57.20',
        },
        ca: {
            price: '$69.90',
            comparePrice: '$87.40',
        },
        uk: {
            price: '£45.70',
            comparePrice: '£57.20',
        },
        eu: {
            price: '€45.70',
            comparePrice: '€57.20',
        },
        au: {
            price: '$63.80',
            comparePrice: '$79.80',
        },
        int: {
            price: 'SG$45.70',
            comparePrice: 'SG$57.20',
        },
        de: {
            price: '€45.70',
            comparePrice: '€57.20',
        },
        fr: {
            price: '€45.70',
            comparePrice: '€57.20',
        },
    },
    'sunny-honey-bali-bronzing-self-tan-set': {
        us: {
            price: '$46.90',
            comparePrice: '$73.90',
        },
        ca: {
            price: '$59.90',
            comparePrice: '$101.90',
        },
        uk: {
            price: '£39.90',
            comparePrice: '£56.90',
        },
        eu: {
            price: '€46,90',
            comparePrice: '€65,90',
        },
        au: {
            price: '$69.20',
            comparePrice: '$99.90',
        },
        int: {
            price: 'SG$64.90',
            comparePrice: 'SG$101.90',
        },
        de: {
            price: '€46,90',
            comparePrice: '€65,90',
        },
        fr: {
            price: '€46,90',
            comparePrice: '€65,90',
        },
    },
    'sunny-honey-bali-bronzing-self-tan-mousse': {
        us: {
            price: '$34.90',
            comparePrice: null,
        },
        ca: {
            price: '$49.90',
            comparePrice: null,
        },
        uk: {
            price: '£25.90',
            comparePrice: null,
        },
        eu: {
            price: '€31,90',
            comparePrice: null,
        },
        au: {
            price: '$44.90',
            comparePrice: null,
        },
        int: {
            price: 'SG$48.90',
            comparePrice: null,
        },
        de: {
            price: '€31,90',
            comparePrice: null,
        },
        fr: {
            price: '€31,90',
            comparePrice: null,
        },
    },
    'tanning-goddess': {
        us: {
            price: '$73.90',
            comparePrice: '$105.80',
        },
        ca: {
            price: '$101.90',
            comparePrice: '$146.90',
        },
        uk: {
            price: '£57.90',
            comparePrice: '£78.90',
        },
        eu: {
            price: '€66,90',
            comparePrice: '€95,80',
        },
        au: {
            price: '$101.90',
            comparePrice: '$146.80',
        },
        int: {
            price: 'SG$101.90',
            comparePrice: 'SG$145.80',
        },
        de: {
            price: '€66,90',
            comparePrice: '€95,80',
        },
        fr: {
            price: '€66,90',
            comparePrice: '€95,80',
        },
    },
    'self-tan-travel-kit': {
        us: {
            price: '$24.90',
            comparePrice: null,
        },
        ca: {
            price: '$33.90',
            comparePrice: null,
        },
        uk: {
            price: '£22.90',
            comparePrice: null,
        },
        eu: {
            price: '€24,90',
            comparePrice: null,
        },
        au: {
            price: '$34.90',
            comparePrice: null,
        },
        int: {
            price: 'SG$34.90',
            comparePrice: null,
        },
        de: {
            price: '€24,90',
            comparePrice: null,
        },
        fr: {
            price: '€24,90',
            comparePrice: null,
        },
    },
    'bali-bae-self-tan-set': {
        us: {
            price: '$59.00',
            comparePrice: '$90.80',
        },
        ca: {
            price: '$80.40',
            comparePrice: '$123.80',
        },
        uk: {
            price: '£50.20',
            comparePrice: '£71.80',
        },
        eu: {
            price: '€57,90',
            comparePrice: '€82,80',
        },
        au: {
            price: '$81.70',
            comparePrice: '$125.80',
        },
        int: {
            price: 'SG$88.70',
            comparePrice: 'SG$126.80',
        },
        de: {
            price: '€57,90',
            comparePrice: '€82,80',
        },
        fr: {
            price: '€57,90',
            comparePrice: '€82,80',
        },
    },
    'glowy-face-tan-set': {
        us: {
            price: '$62.20',
            comparePrice: '$77.80',
        },
        ca: {
            price: '$84.60',
            comparePrice: '$105.80',
        },
        uk: {
            price: '£54.20',
            comparePrice: '£67.80',
        },
        eu: {
            price: '€61,40',
            comparePrice: '€76,80',
        },
        au: {
            price: '$95.80',
            comparePrice: '$119.80',
        },
        int: {
            price: 'SG$89.50',
            comparePrice: 'SG$111.90',
        },
        de: {
            price: '€61,40',
            comparePrice: '€76,80',
        },
        fr: {
            price: '€61,40',
            comparePrice: '€76,80',
        },
    }
}

const rangeReducer = (state, action) => {
    return productPrice[action.productHandle][action.activeStore];
};

const RangeProvider = props => {
    const [productState, dispatchProductAction] = useReducer(rangeReducer, productPrice);
    const changeStoreHandler = (activeStore, productHandle) => {
        dispatchProductAction({type: 'CHANGESTORE', activeStore: activeStore, productHandle: productHandle})
    };

    return (
        <RangeContext.Provider value={productState}>
            {props.children}
        </RangeContext.Provider>
    );
};

export default RangeProvider;
