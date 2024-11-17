import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';
import { useSearchParams } from 'react-router-dom';

export default function MetodePenyelesaianEliminasi() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') == 'materi';

  const [inputValues, setInputValues] = useState({
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: '',
    input15: '',
    input16: '',
    input17: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input8: false,
    input9: false,
    input10: false,
    input11: false,
    input12: false,
    input13: false,
    input14: false,
    input15: false,
    input16: false,
    input17: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const [isBlurred3, setIsBlurred3] = useState(true);
  const [isBlurred4, setIsBlurred4] = useState(true);
  const section = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid = savedStatus.statuses.input8 && savedStatus.statuses.input9;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input10;
      setIsBlurred2(!allValid2);
      const allValid3 = savedStatus.statuses.input11 && savedStatus.statuses.input12;
      setIsBlurred3(!allValid3);
      const allValid4 = savedStatus.statuses.input13 && savedStatus.statuses.input14 && savedStatus.statuses.input15 && savedStatus.statuses.input16 && savedStatus.statuses.input17;
      setIsBlurred4(!allValid4);
    }

    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    if (!isBlurred && !isBlurred2 && !isBlurred3 && !isBlurred4 && sessionData?.MetodePenyelesaianEliminasi) {
      return;
    } else {
      if (!isBlurred && section.current) {
        section.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!isBlurred2 && section2.current) {
        section2.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!isBlurred3 && section3.current) {
        section3.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!isBlurred4 && section4.current) {
        section4.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const newSessionData = {
          ...sessionData,
          MetodePenyelesaianEliminasi: true,
        };
        localStorage.setItem('sessionData', JSON.stringify(newSessionData));
      }
    }
  }, [isBlurred, isBlurred2, isBlurred3, isBlurred4]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input8' && value.replace(/\./g, '') == '48000000') {
      isValid = true;
    } else if (inputName === 'input9' && value.replace(/\./g, '') == '-50500000') {
      isValid = true;
    } else if (inputName === 'input10' && value.replace(/\./g, '') == '1700000') {
      isValid = true;
    } else if (inputName === 'input11' && value.replace(/\./g, '') == '5') {
      isValid = true;
    } else if (inputName === 'input12' && value.replace(/\./g, '') == '1600000') {
      isValid = true;
    } else if (inputName === 'input13' && value.replace(/\./g, '') == '20700000') {
      isValid = true;
    } else if (inputName === 'input14' && value.replace(/\./g, '') == '14700000') {
      isValid = true;
    } else if (inputName === 'input15' && value.replace(/\./g, '') == '6000000') {
      isValid = true;
    } else if (inputName === 'input16' && value.replace(/\./g, '') == '6000000') {
      isValid = true;
    } else if (inputName === 'input17' && value.replace(/\./g, '') == '1500000') {
      isValid = true;
    }

    // Update state untuk value dan status validasi input tertentu
    const updatedValues = {
      ...inputValues,
      [inputName]: value,
    };
    const updatedStatuses = {
      ...inputStatuses,
      [inputName]: isValid,
    };

    setInputValues(updatedValues);
    setInputStatuses(updatedStatuses);

    // Simpan ke localStorage secara real-time
    const updatedStatus = {
      values: updatedValues,
      statuses: updatedStatuses,
    };
    localStorage.setItem('inputStatuses', JSON.stringify(updatedStatus));

    // Periksa apakah semua input sudah valid
    const allValid = updatedStatus.statuses.input8 && updatedStatus.statuses.input9;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatus.statuses.input10;
    setIsBlurred2(!allValid2);
    const allValid3 = updatedStatus.statuses.input11 && updatedStatus.statuses.input12;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatus.statuses.input13 && updatedStatus.statuses.input14 && updatedStatus.statuses.input15 && updatedStatus.statuses.input16 && updatedStatus.statuses.input17;
    setIsBlurred4(!allValid4);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Metode Penyelesaian SPLTV <span className="text-muted fw-medium ms-sm-2 fs-5">Metode Eliminasi</span>
      </h3>
      <h5 className="fw-bold">A. Metode Eliminasi</h5>
      <p>Metode eliminasi ini dilakukan dengan mengeliminasi atau menghilangkan salah satu variabel dari tiga variabel yang ada. Yuk ikuti langkah berikut untuk tahu bagaimana penyelesaian menggunakan metode eliminasi.</p>
      <div className="d-flex justify-content-center mb-4">
        <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4 text-center">
          <p className="text-center">
            Kita akan mencoba mengetahui harga tiap gulung warna kain berdasarkan cerita yang ada pada awal pembelajaran ini. Kita ketahui bentuk SPLTV yang telah kita susun dari cerita tersebut adalah sebagai berikut.
          </p>
          <p className="mb-1">4x + 6y + 3z = 20.700.000 &ensp; ...(1)</p>
          <p className="mb-1">5x + 5y + 5z = 24.000.000 &ensp; ...(2)</p>
          <p className="mb-1">2x + 3y + 7z = 19.700.000 &ensp; ...(3)</p>
        </div>
      </div>

      <p className="fw-bold">Langkah penyelesaian dengan metode eliminasi:</p>
      <p>
        1. Eliminasi salah satu variabel pada persamaan (1) dan (2), atau persamaan (2) dan (3), atau persamaan (1) dan (3) untuk membentuk persamaan linear dua variabel. Kali ini kita akan mencoba untuk mengeliminasi variabel x pada
        persamaan (1) dan (2).
      </p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '600px' }}>
          <div className="" style={{ width: '250px' }}>
            <p>4x + 6y + 3z = 20.700.000</p>
            <p>5x + 5y + 5z = 24.000.000</p>
          </div>
          <div className="text-center px-0" style={{ width: '50px' }}>
            <p>| ×5 |</p>
            <p>| ×4 |</p>
          </div>
          <div className="" style={{ width: '300px' }}>
            <p>20x + 30y + 15z = 103.500.000</p>
            <p className="border-bottom d-inline-block border-black position-relative kurang pb-3">20x + 20y + 20z = 96.500.000</p>
            <p className="ps-5 ms-2">10y - 5z = 7.500.000 &ensp; ...(4)</p>
          </div>
        </div>
      </div>

      <p>2. Selanjutnya, kita dapat mengulangi langkah tersebut untuk mengeliminasi variabel x pada persamaan (2) dan (3) seperti berikut.</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '850px' }}>
          <div className="" style={{ width: '250px' }}>
            <p className="mt-2 mb-2">5x + 5y + 5z = 24.000.000</p>
            <p>2x + 3y + 7z = 19.700.000</p>
          </div>
          <div className="px-0 text-center" style={{ width: '50px' }}>
            <p className="mt-2 mb-2">| ×2 |</p>
            <p>| ×5 |</p>
          </div>
          <div className="" style={{ width: '550px' }}>
            <div className="d-flex align-items-center gap-2 mb-1">
              <p className="mb-0">10x + 10y + 10z =</p>
              <input
                className={`form-control d-inline-block ${inputStatuses.input8 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input8 && !inputStatuses.input8 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '148px' }}
                value={inputValues.input8}
                onChange={e => handleChange('input8', e)}
              />
              <Tips>hasil perkalian 24.000.000 dengan 2</Tips>
            </div>
            <p className="border-bottom d-inline-block border-black position-relative kurang pb-3">10x + 15y + 35z = 98.500.000</p>
            <div>
              <p className="ps-4 ms-3 d-inline-block">-5y - 25z =</p>
              <input
                className={`form-control d-inline-block ms-2 ${inputStatuses.input9 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input9 && !inputStatuses.input9 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '148px' }}
                value={inputValues.input9}
                onChange={e => handleChange('input9', e)}
              />
              <p className="ps-2 d-inline-block">...(5)</p>
            </div>
            <p className="d-inline-block ps-5 ms-5 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
              hitung hasil operasi tersebut
            </p>
          </div>
        </div>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>3. Dari langkah sebelumnya, kita mendapatkan dua persamaan baru, ya itu persamaan (4) dan (5) yang menyisakan dua variabel y dan z. Kita akan melakukan eliminasi pada kedua persamaan tersebut.</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '550px' }}>
            <div className="" style={{ width: '250px' }}>
              <p>10y - 5z = 7.500.000</p>
              <p>-5y - 25z = -50.500.000</p>
            </div>
            <div className=" text-center px-0" style={{ width: '50px' }}>
              <p>| ×1 |</p>
              <p>| ×2 |</p>
            </div>
            <div className="" style={{ width: '250px' }}>
              <p>10y - 5z = 7.500.000</p>
              <p className="border-bottom d-inline-block border-black position-relative tambah pb-3">-10y - 50z = -101.000.000</p>
              <p className="ps-4">-55z = -93.500.000</p>
              <div className="d-inline-block">
                <p className="ms-4 mb-0 d-inline-block border-bottom border-black position-relative z-samadengan">-55</p>
                <p className="ms-4">-55</p>
              </div>
              <div className="d-inline-block">
                <p className="ms-4 mb-0 d-inline-block border-bottom border-black position-relative">-93.500.000</p>
                <p className="ms-4 text-center">-55</p>
              </div>
              <div>
                <p className="ps-4 ms-3 d-inline-block">z =</p>
                <input
                  className={`form-control d-inline-block ms-2 ${inputStatuses.input10 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input10 && !inputStatuses.input10 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input10}
                  onChange={e => handleChange('input10', e)}
                />
              </div>
              <p className="d-inline-block fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dibagi dengan -55 untuk mengetahui nilai z
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>4. Dari langkah 3 kita mengetahui nilai z. Kemudian kita akan mengeliminasi variabel y, sehingga</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '600px' }}>
            <div className="" style={{ width: '250px' }}>
              <p>10y - 5z = 7.500.000</p>
              <p>-5y - 25z = -50.500.000</p>
            </div>
            <div className="text-center px-0" style={{ width: '100px' }}>
              <p className="d-inline-block">| ×</p>
              <input
                className={`form-control d-inline-block ${inputStatuses.input11 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input11 && !inputStatuses.input11 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '40px' }}
                value={inputValues.input11}
                onChange={e => handleChange('input11', e)}
              />
              <p className="d-inline-block ms-1"> |</p>
              <p>| ×1 |</p>
            </div>
            <div className="" style={{ width: '250px' }}>
              <p>50y - 25z = 37.500.000</p>
              <p className="border-bottom d-inline-block border-black position-relative kurang pb-3">-5y - 25z = -50.500.000</p>
              <p className="ps-4">55y = 88.000.000</p>
              <div className="d-inline-block">
                <p className="ms-4 mb-0 d-inline-block border-bottom border-black position-relative y-samadengan">55</p>
                <p className="ms-4">55</p>
              </div>
              <div className="d-inline-block">
                <p className="ms-4 mb-0 d-inline-block border-bottom border-black position-relative">88.000.000</p>
                <p className="ms-4 text-center">55</p>
              </div>
              <div>
                <p className="ps-4 ms-3 d-inline-block">y =</p>
                <input
                  className={`form-control d-inline-block ms-2 ${inputStatuses.input12 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input12 && !inputStatuses.input12 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input12}
                  onChange={e => handleChange('input12', e)}
                />
              </div>
              <p className="d-inline-block fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dibagi dengan 55 untuk mengetahui nilai y
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>5. Setelah kita melakukan eliminasi dan mendapatkan nilai dari variabel z dan y, maka nilai x dapat kita tentukan dari salah satu persamaan, misal persamaan (1), sehingga</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '850px' }}>
            <div className=" text-end" style={{ width: '300px' }}>
              <p>4x + 6y + 3z </p>
              <p>4x + 6(1.600.000) + 3(1.700.000) </p>
              <p>4x + 9.600.000 + 5.100.000 </p>
              <p>4x + 14.700.000 </p>
              <p className="mt-3 pt-1">4x + 14.700.000 - 14.700.000</p>
              <p className="mt-3 pt-1">4x</p>
              <div className="mt-3">
                <p className="ms-4 mb-0 d-inline-block border-bottom border-black position-relative x">4</p>
                <p className="ms-4 mb-0">4</p>
              </div>
              <p className="mt-2">x</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="mt-3 pt-1">=</p>
              <p className="mt-3 pt-1">=</p>
              <p className="mt-3 pt-2">=</p>
              <p className="mt-3 pt-2">=</p>
            </div>
            <div className="" style={{ width: '500px' }}>
              <p>20.700.000</p>
              <p>20.700.000</p>
              <p>20.700.000</p>
              <p>20.700.000</p>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  className={`form-control ${inputStatuses.input13 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input13 && !inputStatuses.input13 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input13}
                  onChange={e => handleChange('input13', e)}
                />
                <span>-</span>
                <input
                  className={`form-control ${inputStatuses.input14 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input14 && !inputStatuses.input14 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input14}
                  onChange={e => handleChange('input14', e)}
                />

                <p className="mb-0 fst-italic text-muted" style={{ fontSize: '12px' }}>
                  kurangi kedua ruas dengan 14.700.000
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  className={`form-control ${inputStatuses.input15 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input15 && !inputStatuses.input15 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input15}
                  onChange={e => handleChange('input15', e)}
                />

                <p className="mb-0 fst-italic text-muted" style={{ fontSize: '12px' }}>
                  hitung hasil operasi pengurangan tersebut
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  className={`form-control ${inputStatuses.input16 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input16 && !inputStatuses.input16 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input16}
                  onChange={e => handleChange('input16', e)}
                />
                <span>/ 4</span>

                <p className="mb-0 fst-italic text-muted" style={{ fontSize: '12px' }}>
                  masukkan hasil operasi pengurangan tersebut
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className={`form-control ${inputStatuses.input17 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input17 && !inputStatuses.input17 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input17}
                  onChange={e => handleChange('input17', e)}
                />
                <p className="mb-0 fst-italic text-muted" style={{ fontSize: '12px' }}>
                  kedua ruas dibagi dengan 4 untuk mengetahui nilai x
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred4 ? 'blur' : ''}`}>
        <p ref={section4}>Jika teman-teman sudah menyelesaikan langkah-langkah di atas, kita mendapatkan nilai variabel x = 1.500.000, nilai variabel y = 1.600.000, dan nilai variabel z = 1.700.000.</p>
        <p>
          Kita ingat kembali bahwa: <br />
          • Variabel x mewakili harga satu gulung kain warna putih <br />
          • Variabel y mewakili harga satu gulung kain warna abu-abu <br />• Variabel z mewakili harga satu gulung kain warna cokelat
        </p>
        <p>Jadi, harga satu gulung kain warna putih adalah Rp1.500.000, harga satu gulung kain warna abu-abu adalah Rp1.600.000, dan harga satu gulung kain warna cokelat adalah Rp1.700.000.</p>
        <p>
          <b> Bagaimana? Mudah bukan untuk mengikuti langkah penyelesaian dengan metode eliminasi?</b> <br />
          Jika kalian sudah memahaminya, mari kita pelajari alternatif penyelesaian dengan metode lain, yaitu substitusi.
        </p>

        <div className="d-flex justify-content-center py-4">
          <NextButton link={`/materi/metode-penyelesaian-spltv/substitusi` + (from ? '?from=materi' : '')}>Penyelesaian SPLTV dengan Metode Eliminasi</NextButton>
        </div>
      </div>
    </Main>
  );
}
