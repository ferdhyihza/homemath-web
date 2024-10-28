import Navbar from './Navbar';

export default function Main(props) {
  return (
    <>
      <div className="wrapper">
        <aside id="sidebar">
          <div className="sticky-top"></div>
        </aside>
        <div className="main container-fluid">
          <Navbar />
          {/* eslint-disable-next-line react/prop-types */}
          <div className="p-5 container">{props.children}</div>
        </div>
      </div>
    </>
  );
}
