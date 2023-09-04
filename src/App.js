import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './UI/layout/Layout';

const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));
const ApcRange = lazy(() => import('./UI/templates/ApcRange'));
const Survey = lazy(() => import('./UI/templates/Survey'));
const SurveyResultTemplate = lazy(() => import('./UI/templates/SurveyResultTemplate'));
const SurveyMask = lazy(() => import('./UI/templates/SurveyMask'));
const AmazonRange = lazy(() => import('./UI/templates/AmazonRange'));


const App = () => {
  const noHeader = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/' || window.location.pathname === '/mask-survey' || window.location.pathname === '/mask-survey/' || window.location.pathname === '/survey-result-mask' || window.location.pathname === '/survey-result-mask/'
    || window.location.pathname === '/survey-result' || window.location.pathname === '/survey-result/';
  const noFooter = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/' || window.location.pathname === '/mask-survey' || window.location.pathname === '/mask-survey/' || window.location.pathname === '/survey-result-mask' || window.location.pathname === '/survey-result-mask/'
    || window.location.pathname === '/survey-result' || window.location.pathname === '/survey-result/';
  const rangeAmazon = window.location.pathname === '/range-amazon' || window.location.pathname === '/range-amazon/';
  const externalUrl = rangeAmazon ? 'https://www.amazon.com/sandandsky?maas=maas_adg_8EA37C43F6AD95DB249DE08F65E1DCAA_afap_abs&ref_=aa_maas&tag=maas' : 'https://www.sandandsky.com';
  return (
    <Layout announcementBar={rangeAmazon} noFooter={noFooter()} noHeader={noHeader()} externalUrl={externalUrl}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/pore-tight-kit' element={<ProductDetail />} />
          <Route path='/australian-pink-clay-pore-tight-kit' element={<ProductDetail />} />
          <Route path='/test-18' element={<ProductDetail />} />
          <Route path='/customers-survey' element={<Survey />} />
          <Route path='/survey-result' element={<SurveyResultTemplate />} />
          <Route path='/survey-result-mask' element={<SurveyResultTemplate quizType='mask' />} />
          <Route path='/range-apc' element={<ApcRange />} />
          <Route path='/mask-survey' element={<SurveyMask />} />
          <Route path='/range-amazon' element={<AmazonRange />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
