import React, { Suspense, lazy } from "react";
import { Fragment } from 'react';
// import Footer from '../sections/Footer';
import Header from '../sections/Header';

const Footer = lazy(() => import('../sections/Footer'));

const Layout = (props) => {
  return (
    <Fragment>
        { !props.noHeader && (<Header />) }
        <main>{props.children}</main>
        { !props.noFooter && (
          <Suspense fallback={<div></div>}>
            <Footer />
          </Suspense>
        )}
   </Fragment>
  );
};

export default Layout;
