export default function Footer() {
  return (
    <footer className="bg-darkblue mt-4 rounded-top-4 p-5">
      <div className="d-flex justify-content-between mb-4">
        <h4 className=" fw-bold" href="#" id="navbar-title">
          HOMEMATH
        </h4>
        <div className="d-flex">
          <img className="me-2" src="/avatar-icon.png" style={{ width: '40px', height: '40px' }} alt="" />
          <div className="d-none d-md-flex flex-column justify-content-center">
            <h6 className="mb-0 fw-bold">Betty Agustina</h6>
            <p className="mb-0" style={{ fontSize: '14px' }}>
              Tadris Matematika
            </p>
          </div>
        </div>
      </div>
      <h6 className="p-3 d-inline-block fw-bold mb-3" style={{ backgroundColor: '#cbddec', color: 'black' }}>
        Hubungi kami :
      </h6>
      <p className="fw-light">e-mail : bettyagustina20@gmail.com</p>
      <p className="fw-light">telepon : 085853456926</p>
      <p className="fw-light">
        alamat : Desa Bagelenan, Kec. Srengat, Kab. Blitar <br />
        Jawa Timur, Indonesia 66152
      </p>
    </footer>
  );
}