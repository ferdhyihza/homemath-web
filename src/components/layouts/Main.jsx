import Navbar from './Navbar';

export default function Main(props) {
  return (
    <>
      <div className="sticky-top bg-white shadow-sm">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="main container">
        {/* eslint-disable-next-line react/prop-types */}
        <div className="py-4">{props.children}</div>
      </div>
    </>
  );
}
