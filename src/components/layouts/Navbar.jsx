import NavbarContent from './NavbarContent';

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-white py-3 sticky-top">
        <div className="container">
          <NavbarContent />
        </div>
      </nav>
    </>
  );
}