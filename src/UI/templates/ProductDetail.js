import React, { lazy, Suspense } from 'react';
import ProductForm from '../sections/ProductForm';
import '../../product.scss';
import ProductImagePreview from "../components/ProductImagePreview";
import ProductProvider from '../../store/ProductProvider';
import FAQCONTENT from '../../store/product-faq';

const CustomerReviews = lazy(() => import('../sections/CustomerReviews'));
const CustomerReviews2 = lazy(() => import('../sections/CustomerReviews2'));
const Recognize = lazy(() => import('../sections/Recognize'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));

const ProductDetail = (props) => {
    return (
        <ProductProvider>
            <ProductForm />
            <Suspense fallback={<div></div>}>
                <CustomerReviews />
                <Recognize />
                <CustomerReviews2 />
                <FaqAccordion FAQData={FAQCONTENT} />
            </Suspense>
        </ProductProvider>
    )
};
export default ProductDetail
