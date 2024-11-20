/* eslint-disable react/prop-types */
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import Quotes from './Quotes';
import ScrollToTop from '../ScrollToTop';
import { useMemo } from 'react';
import ModalAlertTesFormatif from '../modals/ModalAlertTesFormatif';
import { OverlayTrigger, Toast, ToastContainer, Tooltip } from 'react-bootstrap';

export default function Main(props) {
  const location = useLocation();
  const isMateriPage = location.pathname.includes('/materi/');

  const memoizedQuotes = useMemo(() => {
    return isMateriPage ? <Quotes /> : null;
  }, [isMateriPage]);

  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Petunjuk penggunaan
    </Tooltip>
  );

  return (
    <>
      {location.pathname === '/' && (
        <ToastContainer position="bottom-end" className="p-3 " style={{ zIndex: 99, position: 'fixed', bottom: '0', right: '0', width: '82px' }}>
          <Toast className="d-flex justify-content-end">
            <Toast.Body className="d-inline-block p-1">
              <OverlayTrigger placement="top" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
                <Link to="/?petunjuk-penggunaan" smooth={true} duration={500} className="d-inline-block nav-link fw-medium text-light ">
                  <img src="/icon/icon-petunjuk.png" width={40} alt="icon petunjuk\ penggunaan" />
                </Link>
              </OverlayTrigger>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
      <ScrollToTop />
      <div className="sticky-top bg-white shadow-sm">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className={props.className}>
        <div className="main container pt-4 overflow-x-visible">
          {props.children}
          {/* <div className="pt-4"></div> */}
          {memoizedQuotes}
        </div>
      </div>
      <ModalAlertTesFormatif />
    </>
  );
}
