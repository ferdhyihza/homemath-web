import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Main(props) {
  const location = useLocation();
  const isMateriPage = location.pathname.includes('/materi/');

  return (
    <>
      <div className="main container">
        <Navbar />
        {/* eslint-disable-next-line react/prop-types */}
        <div className="p-5">{props.children}</div>
      </div>
    </>
  );
}
