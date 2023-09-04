import React, { Suspense, lazy } from "react";
import { Fragment } from 'react';
// import Footer from '../sections/Footer';
import Header from '../sections/Header';
import AnnouncementBar from '../components/AnnouncementBar';

const Footer = lazy(() => import('../sections/Footer'));

const Layout = (props) => {
  return (
    <Fragment>
        { props.announcementBar && (
          <AnnouncementBar />
        )}
        { !props.noHeader && (<Header externalUrl={props.externalUrl} />) }
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
