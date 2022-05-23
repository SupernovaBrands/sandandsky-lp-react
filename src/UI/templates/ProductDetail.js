import React, { lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import ProductProvider from '../../store/ProductProvider';

const CustomerReviews = lazy(() => import('../sections/CustomerReviews'));

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm />
            <Suspense fallback={<div></div>}>
                <CustomerReviews />
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
