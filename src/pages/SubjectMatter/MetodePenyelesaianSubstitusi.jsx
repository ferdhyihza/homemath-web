import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import { useSearchParams } from 'react-router-dom';

export default function MetodePenyelesaianSubstitusi() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') == 'materi';

  const [inputValues, setInputValues] = useState({
    input18: '',
    input19: '',
    input20: '',
    input21: '',
    input22: '',
    input23: '',
    input24: '',
    input25: '',
    input26: '',
    input27: '',
    input28: '',
    input29: '',
    input30: '',
    input31: '',
    input32: '',
    input33: '',
    input34: '',
    input35: '',
    input36: '',
    input37: '',
    input38: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input18: false,
    input19: false,
    input20: false,
    input21: false,
    input22: false,
    input23: false,
    input24: false,
    input25: false,
    input26: false,
    input27: false,
    input28: false,
    input29: false,
    input30: false,
    input31: false,
    input32: false,
    input33: false,
    input34: false,
    input35: false,
    input36: false,
    input37: false,
    input38: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const [isBlurred3, setIsBlurred3] = useState(true);
  const [isBlurred4, setIsBlurred4] = useState(true);
  const [isBlurred5, setIsBlurred5] = useState(true);
  const [isBlurred6, setIsBlurred6] = useState(true);
  const section = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);

  const sessionData = JSON.parse(localStorage.getItem('sessionData'));
  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid = savedStatus.statuses.input18 && savedStatus.statuses.input19 && savedStatus.statuses.input20;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input21 && savedStatus.statuses.input22 && savedStatus.statuses.input23;
      setIsBlurred2(!allValid2);
      const allValid3 = savedStatus.statuses.input24 && savedStatus.statuses.input25 && savedStatus.statuses.input26;
      setIsBlurred3(!allValid3);
      const allValid4 = savedStatus.statuses.input27 && savedStatus.statuses.input28 && savedStatus.statuses.input29 && savedStatus.statuses.input30 && savedStatus.statuses.input31;
      setIsBlurred4(!allValid4);
      const allValid5 = savedStatus.statuses.input32 && savedStatus.statuses.input33 && savedStatus.statuses.input34 && savedStatus.statuses.input35 && savedStatus.statuses.input36;
      setIsBlurred5(!allValid5);
      const allValid6 = savedStatus.statuses.input37 && savedStatus.statuses.input38;
      setIsBlurred6(!allValid6);
    }

    if (!isBlurred && !isBlurred2 && !isBlurred3 && !isBlurred4 && !isBlurred5 && !isBlurred6 && sessionData?.MetodePenyelesaianSubstitusi) {
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
      }
      if (!isBlurred5 && section5.current) {
        section5.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!isBlurred6 && section6.current) {
        section6.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const newSessionData = {
          ...sessionData,
          MetodePenyelesaianSubstitusi: true,
        };
        localStorage.setItem('sessionData', JSON.stringify(newSessionData));
      }
    }
  }, [isBlurred, isBlurred2, isBlurred3, isBlurred4, isBlurred5, isBlurred6, sessionData]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input18' && value.replace(/\./g, '') == '19200000') {
      isValid = true;
    } else if (inputName === 'input19' && value.replace(/\./g, '') == '19200000') {
      isValid = true;
    } else if (inputName === 'input20' && value.replace(/\./g, '') == '1500000') {
      isValid = true;
    } else if (inputName === 'input21' && value.replace(/\./g, '') == '9600000') {
      isValid = true;
    } else if (inputName === 'input22' && value.replace(/\./g, '') == '9600000') {
      isValid = true;
    } else if (inputName === 'input23' && value.replace(/\./g, '') == '10100000') {
      isValid = true;
    } else if (inputName === 'input24' && value.replace(/\./g, '') == '1500000') {
      isValid = true;
    } else if (inputName === 'input25' && value.replace(/\./g, '') == '1500000') {
      isValid = true;
    } else if (inputName === 'input26' && value.replace(/\./g, '') == '1500000') {
      isValid = true;
    } else if (inputName === 'input27' && value.replace(/\./g, '') == '7500000') {
      isValid = true;
    } else if (inputName === 'input28' && value.replace(/\./g, '') == '7500000') {
      isValid = true;
    } else if (inputName === 'input29' && value.replace(/\./g, '') == '17600000') {
      isValid = true;
    } else if (inputName === 'input30' && value.replace(/\./g, '') == '17600000') {
      isValid = true;
    } else if (inputName === 'input31' && value.replace(/\./g, '') == '1600000') {
      isValid = true;
    } else if (inputName === 'input32' && value.replace(/\./g, '') == '1600000') {
      isValid = true;
    } else if (inputName === 'input33' && value.replace(/\./g, '') == '3200000') {
      isValid = true;
    } else if (inputName === 'input34' && value.replace(/\./g, '') == '3200000') {
      isValid = true;
    } else if (inputName === 'input35' && value.replace(/\./g, '') == '-1700000') {
      isValid = true;
    } else if (inputName === 'input36' && value.replace(/\./g, '') == '1700000') {
      isValid = true;
    } else if (inputName === 'input37' && value.replace(/\./g, '') == '7500000') {
      isValid = true;
    } else if (inputName === 'input38' && value.replace(/\./g, '') == '1500000') {
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
    const allValid = updatedStatus.statuses.input18 && updatedStatus.statuses.input19 && updatedStatus.statuses.input20;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatus.statuses.input21 && updatedStatus.statuses.input22 && updatedStatus.statuses.input23;
    setIsBlurred2(!allValid2);
    const allValid3 = updatedStatus.statuses.input24 && updatedStatus.statuses.input25 && updatedStatus.statuses.input26;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatus.statuses.input27 && updatedStatus.statuses.input28 && updatedStatus.statuses.input29 && updatedStatus.statuses.input30 && updatedStatus.statuses.input31;
    setIsBlurred4(!allValid4);
    const allValid5 = updatedStatus.statuses.input32 && updatedStatus.statuses.input33 && updatedStatus.statuses.input34 && updatedStatus.statuses.input35 && updatedStatus.statuses.input36;
    setIsBlurred5(!allValid5);
    const allValid6 = updatedStatus.statuses.input37 && updatedStatus.statuses.input38;
    setIsBlurred6(!allValid6);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Metode Penyelesaian SPLTV <span className="text-muted fw-medium ms-sm-2 fs-5">Metode Substitusi</span>
      </h3>
      <h5 className="fw-bold">B. Metode Substitusi</h5>
      <p>Metode substitusi dilakukan dengan menyatakan salah satu variabel yang ada ke dalam variabel lainnya. Yuk ikuti lagi langkah alternatif berikut untuk tahu bagaimana penyelesaian menggunakan metode substitusi.</p>
      <div className="d-flex justify-content-center mb-4">
        <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4 text-center">
          <p className="text-center">Kita akan mencoba mengetahui harga tiap gulung warna kain seperti contoh permasalahan sebelumnya. Kita ketahui bentuk SPLTV yang telah kita susun dari cerita tersebut adalah sebagai berikut.</p>
          <p className="mb-1">4x + 6y + 3z = 20.700.000 &ensp; ...(1)</p>
          <p className="mb-1">5x + 5y + 5z = 24.000.000 &ensp; ...(2)</p>
          <p className="mb-1">2x + 3y + 7z = 19.700.000 &ensp; ...(3)</p>
        </div>
      </div>
      <p className="fw-bold">Langkah penyelesaian dengan metode substitusi:</p>
      <p>1. Pilih salah satu variabel yang ingin dinyatakan ke dalam dua variabel lainnya. Misalnya kita menyatakan x pada persamaan (2) ke dalam variabel y dan z.</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '450px' }}>
          <div className="text-end" style={{ width: '150px' }}>
            <p>5x + 5y + 5z</p>
            <p>5x</p>
            <div className="mt-2">
              <p className=" mb-0 d-inline-block border-bottom border-black position-relative x">5</p>
              <p className="">5</p>
            </div>
            <p>x</p>
          </div>
          <div className="text-center" style={{ width: '50px' }}>
            <p>=</p>
            <p>=</p>
            <p className="mt-4">=</p>
            <p className="mt-4 pt-2">=</p>
          </div>
          <div className="" style={{ width: '250px' }}>
            <p>24.000.000</p>
            <p>24.000.000 - 5y - 5z</p>
            <div className="d-inline-block">
              <p className="mb-0 d-inline-block border-bottom border-black position-relative ">24.000.000 - 5y - 5z</p>
              <p className="text-center">5</p>
            </div>
            <p>4.800.000 - y - z &ensp; .........(4)</p>
          </div>
        </div>
      </div>

      <p>2. Variabel x telah kita nyatakan ke dalam variabel lainnya, menjadi persamaan (4). Langkah selanjutnya adalah kita substitusi persamaan (4) ke dua persamaan lainnya, sehingga.</p>
      <p>
        <i className="text-muted">(substitusi persamaan (4) ke persamaan (1))</i>
      </p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '1150px' }}>
          <div className="text-end" style={{ width: '500px' }}>
            <p>4x + 6y + 3z</p>
            <p>4(4.800.000 - y - z) + 6y + 3z</p>
            <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
              <p className="mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil perkalian 4 dengan 4.800.000
              </p>
              <input
                className={`form-control ${inputStatuses.input18 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input18 && !inputStatuses.input18 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '124px' }}
                value={inputValues.input18}
                onChange={e => handleChange('input18', e)}
              />
              <p className="mb-0">- 4y - 4z + 6y + 3z</p>
            </div>
            <p className="pt-1">- 4y + 6y - 4z + 3z</p>
            <p className="pt-2">2y - z</p>
          </div>
          <div className="text-center" style={{ width: '50px' }}>
            <p>=</p>
            <p>=</p>
            <p className="pt-2">=</p>
            <p className="">=</p>
            <p className="pt-2">=</p>
          </div>
          <div className="" style={{ width: '600px' }}>
            <p>20.700.000</p>
            <p>20.700.000</p>
            <p className="pt-2">20.700.000</p>
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">20.700.000 - </p>
              <input
                className={`form-control ${inputStatuses.input19 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input19 && !inputStatuses.input19 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '124px' }}
                value={inputValues.input19}
                onChange={e => handleChange('input19', e)}
              />
              <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dikurangi hasil perkalian 4 dengan 4.800.000
              </p>
            </div>
            <div className="d-flex gap-2 align-items-center mt-2">
              <div>
                <input
                  className={`form-control w-100 ${inputStatuses.input20 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input20 && !inputStatuses.input20 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input20}
                  onChange={e => handleChange('input20', e)}
                />
              </div>
              ........... (5)
            </div>
            <p className="d-inline-block ms-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil operasi pada ruas kanan
            </p>
          </div>
        </div>
      </div>

      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>
          <i className="text-muted">(substitusi persamaan (4) ke persamaan (3))</i>
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '1150px' }}>
            <div className="text-end" style={{ width: '500px' }}>
              <p>2x + 3y + 7z</p>
              <p>2(4.800.000 - y - z) + 3y + 7z</p>
              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                <p className="mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  hasil perkalian 2 dengan 4.800.000
                </p>
                <input
                  className={`form-control ${inputStatuses.input21 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input21 && !inputStatuses.input21 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input21}
                  onChange={e => handleChange('input21', e)}
                />
                <p className="mb-0">- 2y - 2z + 3y + 7z</p>
              </div>
              <p className="pt-1">- 2y + 3y - 2z + 7z</p>
              <p className="pt-2">y + 5z</p>
            </div>
            <div className="text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="">=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '600px' }}>
              <p>19.700.000</p>
              <p>19.700.000</p>
              <p className="pt-2">19.700.000</p>
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0">19.700.000 - </p>
                <input
                  className={`form-control ${inputStatuses.input22 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input22 && !inputStatuses.input22 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input22}
                  onChange={e => handleChange('input22', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dikurangi hasil perkalian 2 dengan 4.800.000
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <div>
                  <input
                    className={`form-control w-100 ${inputStatuses.input23 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input23 && !inputStatuses.input23 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '124px' }}
                    value={inputValues.input23}
                    onChange={e => handleChange('input23', e)}
                  />
                </div>
                ........... (6)
              </div>
              <p className="d-inline-block ms-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil operasi pada ruas kanan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>
          3. Dari langkah sebelumnya, kita mendapatkan persamaan (5) dan (6). Selanjutnya, yang perlu kita lakukan adalah mengubah salah satu persamaan tersebut menjadi sebuah fungsi. Misalnya kita akan mengubah persamaan (5) ke dalam
          fungsi y. Sehingga
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '800px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>2y - z</p>
              <p className="pt-2">- z</p>
              <p className="pt-2">z</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '650px' }}>
              <div className="d-flex gap-2 align-items-center">
                <input
                  className={`form-control ${inputStatuses.input24 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input24 && !inputStatuses.input24 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input24}
                  onChange={e => handleChange('input24', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  konstanta persamaan (5)
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center pt-2">
                <input
                  className={`form-control ${inputStatuses.input25 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input25 && !inputStatuses.input25 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input25}
                  onChange={e => handleChange('input25', e)}
                />
                <span>- 2y</span>

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  masukkan konstanta persamaan (5) kemudian kedua ruas dikurangi dengan 2y
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <span>2y - </span>
                <input
                  className={`form-control ${inputStatuses.input26 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input26 && !inputStatuses.input26 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input26}
                  onChange={e => handleChange('input26', e)}
                />
                ........... (6)
              </div>
              <p className="d-inline-block ms-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                masukkan konstanta persamaan (5) kemudian kedua ruas dibagi dengan -1
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>4. Selanjutnya, kita dapat menyubtitusikan fungsi y atau persamaan (7) ke dalam persamaan (6)</p>
        <p>
          Persamaan (6) <br />
          y + 5z = 10.100.000 <br />
          Persamaan (7) <br />z = 2y - 1.500.000
        </p>
        <p>sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '1000px' }}>
            <div className=" text-end" style={{ width: '450px' }}>
              <p>y + 5z</p>
              <p>y + 5(2y - 1.500.000)</p>
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  hasil perkalian 5 dengan 1.500.000
                </p>

                <span>y + 10y - </span>
                <input
                  className={`form-control ${inputStatuses.input27 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input27 && !inputStatuses.input27 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input27}
                  onChange={e => handleChange('input27', e)}
                />
              </div>
              <p className="pt-3">11y</p>
              <p className="pt-1">11y</p>
              <p className="pt-1">y</p>
              <p className="pt-2">y</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '500px' }}>
              <p>10.100.000</p>
              <p>10.100.000</p>
              <p className="pt-2">10.100.000</p>
              <div className="d-flex gap-2 align-items-center mb-2">
                <p className="mb-0">10.100.000 + </p>

                <input
                  className={`form-control ${inputStatuses.input28 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input28 && !inputStatuses.input28 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input28}
                  onChange={e => handleChange('input28', e)}
                />

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dijumlah dengan hasil <br />
                  perkalian 5 dengan 1.500.000
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <input
                  className={`form-control ${inputStatuses.input29 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input29 && !inputStatuses.input29 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input29}
                  onChange={e => handleChange('input29', e)}
                />

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  10.100.000 ditambah dengan <br />
                  hasil operasi sebelumnya
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <input
                  className={`form-control ${inputStatuses.input30 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input30 && !inputStatuses.input30 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input30}
                  onChange={e => handleChange('input30', e)}
                />
                <span>/ 11</span>

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dibagi dengan 11
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <input
                  className={`form-control ${inputStatuses.input31 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input31 && !inputStatuses.input31 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input31}
                  onChange={e => handleChange('input31', e)}
                />

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  didapatkan nilai variabel y
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred4 ? 'blur' : ''}`}>
        <p ref={section4}>5. Setelah kita mengetahui besar nilai variabel y, kita dapat mensubstitusikannya ke dalam persamaan (5), (6) atau (7) untuk mengetahui besar nilai variabel z. Misalnya substitusi ke persamaan (5)</p>
        <p>
          Persamaan (5) <br />
          2y - z = 1.500.000
        </p>
        <p>sehingga, </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '950px' }}>
            <div className=" text-end" style={{ width: '350px' }}>
              <p className="mb-2">2y - z</p>
              <div className="d-flex align-items-center justify-content-end mb-2">
                <p className="d-inline-block mb-0 me-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  masukkan nilai variabel y
                </p>

                <span>2(</span>
                <input
                  className={`form-control mx-1 ${inputStatuses.input32 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input32 && !inputStatuses.input32 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="...................................."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input32}
                  onChange={e => handleChange('input32', e)}
                />
                <span>)</span>

                <p className="mb-0 ms-2">- z</p>
              </div>
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  hasil perkalian 2 dengan <br />
                  nilai variabel y
                </p>

                <input
                  className={`form-control ${inputStatuses.input33 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input33 && !inputStatuses.input33 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input33}
                  onChange={e => handleChange('input33', e)}
                />

                <p className="mb-0">-z</p>
              </div>
              <p className="pt-2">-z</p>
              <p className="pt-1">-z</p>
              <p className="pt-1">z</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p className="">=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
            </div>
            <div className="" style={{ width: '450px' }}>
              <p>1.500.000</p>
              <p className="">1.500.000</p>
              <p className="pt-1 mb-2 pb-1">1.500.000</p>
              <div className="d-flex gap-2 align-items-center mb-2">
                <p className="mb-0">1.500.000 - </p>

                <input
                  className={`form-control ${inputStatuses.input34 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input34 && !inputStatuses.input34 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input34}
                  onChange={e => handleChange('input34', e)}
                />

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dikurangi dengan hasil <br />
                  perkalian 2 dengan nilai variabel y
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <input
                  className={`form-control ${inputStatuses.input35 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input35 && !inputStatuses.input35 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input35}
                  onChange={e => handleChange('input35', e)}
                />
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input
                  className={`form-control ${inputStatuses.input36 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input36 && !inputStatuses.input36 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input36}
                  onChange={e => handleChange('input36', e)}
                />

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dibagi dengan -1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred5 ? 'blur' : ''}`}>
        <p ref={section5}>
          6. Dari langkah-langkah di atas, kita telah mengetahui besar nilai variabel y dan z. Untuk mengetahui besar nilai variabel x, langkah terakhir adalah menyubstitusikan nilai variabel y dan z ke persamaan (1), (2), atau (3).
          Misalnya kita akan substitusi ke persamaan (2)
        </p>
        <p>
          Persamaan (2) <br />
          5x + 5y + 5z = 24.000.000
        </p>
        <p>sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '700px' }}>
            <div className=" text-end" style={{ width: '300px' }}>
              <p>5x + 5y + 5z</p>
              <p>5x + 5(1.600.000) + 5(1.700.000)</p>
              <p>5x + 8.000.000 + 8.500.000</p>
              <p>5x + 16.500.000</p>
              <p>5x</p>
              <p className="pt-1">5x</p>
              <p className="pt-1">x</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
            </div>
            <div className="" style={{ width: '350px' }}>
              <p>24.000.000</p>
              <p>24.000.000</p>
              <p>24.000.000</p>
              <p>24.000.000</p>
              <p>24.000.000 - 16.500.000</p>
              <div className="d-flex gap-2 align-items-center mb-2">
                <input
                  className={`form-control ${inputStatuses.input37 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input37 && !inputStatuses.input37 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input37}
                  onChange={e => handleChange('input37', e)}
                />

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  hasil dari 24.000.000 dikurangi <br />
                  dengan 16.500.000
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <input
                  className={`form-control ${inputStatuses.input38 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input38 && !inputStatuses.input38 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '124px' }}
                  value={inputValues.input38}
                  onChange={e => handleChange('input38', e)}
                />

                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dibagi dengan 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred6 ? 'blur' : ''}`}>
        <p ref={section6}>Dari seluruh langkah yang telah kita kerjakan tersebut, kita telah mengetahui besar nilai variabel x = 1.500.000, nilai variabel y = 1.600.000 dan nilai variabel z = 1.700.000.</p>
        <p>
          Kita ingat kembali bahwa: <br />
          • variabel x mewakili harga satu gulung kain warna putih <br />
          • variabel y mewakili harga satu gulung kain warna abu-abu <br />• variabel z mewakili harga satu gulung kain warna cokelat
        </p>
        <p>Jadi, harga satu gulung kain warna putih adalah Rp1.500.000, harga satu gulung kain warna abu-abu adalah Rp1.600.000, dan harga satu gulung kain warna cokelat adalah Rp1.700.000.</p>
        <p>
          <b> Bagaimana? Lebih mudah menggunakan metode eliminasi atau substitusi?</b> <br />
          Jika kalian ingin menggunakan cara yang lebih praktis atau cepat, kalian dapat menggunakan kedua metode tersebut secara bersamaan. Coba perhatikan alternatif penyelesaian berikut ini!
        </p>

        <div className="d-flex justify-content-center py-4">
          <NextButton confirmation={sessionData?.MetodePenyelesaianSubstitusi} link={`/materi/metode-penyelesaian-spltv/campuran` + (from ? '?from=materi' : '')}>
            Penyelesaian SPLTV dengan Metode Substitusi
          </NextButton>
        </div>
      </div>
    </Main>
  );
}
