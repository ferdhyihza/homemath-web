import Navbar from './Navbar';

export default function Sidebar(props) {
  return (
    <>
      <div className="wrapper">
        <aside id="sidebar">
          <div className="sticky-top">{props.quotes}</div>
        </aside>
        <div className="main">
          <div className="container-fluid">
            <Navbar />
          </div>
          <div className="p-5">{props.children}</div>
        </div>
      </div>
    </>
  );
}
