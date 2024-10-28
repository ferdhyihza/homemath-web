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
          <div className="p-5">{props.children}</div>
        </div>
      </div>
    </>
  );
}
