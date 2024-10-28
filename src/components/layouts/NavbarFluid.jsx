import NavbarContent from './NavbarContent';

export default function NavbarFluid() {
  return (
    <>
      <div className="row p-0 m-0">
        <div className="col-2 bg-darkblue"></div>
        <div className="col-10">
          <nav className="navbar bg bg-white py-3 sticky-top pe-2">
            <div className="container-fluid">
              <NavbarContent />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
