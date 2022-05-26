import React, { lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import Carousel from '../components/Carousel';
import ProductProvider from '../../store/ProductProvider';
import FaqAccordion from '../sections/FaqAccordion';

const CustomerReviews = lazy(() => import('../sections/CustomerReviews'));
const CustomerReviews2 = lazy(() => import('../sections/CustomerReviews2'));
const Recognize = lazy(() => import('../sections/Recognize'));

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm />
            <Suspense fallback={<div></div>}>
                <CustomerReviews />
                <Recognize />
                <CustomerReviews2 />
                <FaqAccordion />
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
