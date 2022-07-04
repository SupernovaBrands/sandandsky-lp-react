import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './UI/layout/Layout';
import SurveyResultTemplate from "./UI/templates/SurveyResultTemplate";

const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));
const Survey = lazy(() => import('./UI/templates/Survey'));

const App = () => {
  const noHeader = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/'
    || window.location.pathname === '/survey-result' || window.location.pathname === '/survey-result/';
  const noFooter = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/'
    || window.location.pathname === '/survey-result' || window.location.pathname === '/survey-result/';
  return (
    <Layout noFooter={noFooter()} noHeader={noHeader()}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/pore-tight-kit' element={<ProductDetail />} />
          <Route path='/australian-pink-clay-pore-tight-kit' element={<ProductDetail />} />
          <Route path='/test-18' element={<ProductDetail />} />
          <Route path='/customers-survey' element={<Survey />} />
          <Route path='/survey-result' element={<SurveyResultTemplate />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
