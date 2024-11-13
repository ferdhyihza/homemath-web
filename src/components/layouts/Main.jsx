import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Quotes from './Quotes';
import ScrollToTop from '../ScrollToTop';
import { useMemo } from 'react';
import ModalAlertTesFormatif from '../modals/ModalAlertTesFormatif';

export default function Main(props) {
  const location = useLocation();
  const isMateriPage = location.pathname.includes('/materi/');

  const memoizedQuotes = useMemo(() => {
    return isMateriPage ? <Quotes /> : null;
  }, [isMateriPage]);

  return (
    <>
      <ScrollToTop />
      <div className="sticky-top bg-white shadow-sm">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="main container">
        {/* eslint-disable-next-line react/prop-types */}
        <div className="pt-4">{props.children}</div>
        {memoizedQuotes}
      </div>
      <ModalAlertTesFormatif />
    </>
  );
}
