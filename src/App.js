import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './UI/layout/Layout';

const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/test5' element={<ProductDetail />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan' element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
