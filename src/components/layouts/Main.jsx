import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Quotes from './Quotes';
import ScrollToTop from '../ScrollToTop';

export default function Main(props) {
  const location = useLocation();
  const isMateriPage = location.pathname.includes('/materi/');

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
        {isMateriPage && <Quotes />}
      </div>
    </>
  );
}
