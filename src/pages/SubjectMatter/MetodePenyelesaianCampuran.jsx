import { useSearchParams } from 'react-router-dom';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';
import { useEffect, useRef, useState } from 'react';

export default function MetodePenyelesaianCampuran() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') == 'materi';

  const [inputValues, setInputValues] = useState({
    input39: '',
    input40: '',
    input41: '',
    input42: '',
    input43: '',
    input44: '',
    input45: '',
    input46: '',
    input47: '',
    input48: '',
    input49: '',
    input50: '',
    input51: '',
    input52: '',
    input53: '',
    input54: '',
    input55: '',
    input56: '',
    input57: '',
    input58: '',
    input59: '',
    input60: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input39: false,
    input40: false,
    input41: false,
    input42: false,
    input43: false,
    input44: false,
    input45: false,
    input46: false,
    input47: false,
    input48: false,
    input49: false,
    input50: false,
    input51: false,
    input52: false,
    input53: false,
    input54: false,
    input55: false,
    input56: false,
    input57: false,
    input58: false,
    input59: false,
    input60: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const [isBlurred3, setIsBlurred3] = useState(true);
  const [isBlurred4, setIsBlurred4] = useState(true);
  const [isBlurred5, setIsBlurred5] = useState(true);
  const section = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid = savedStatus.statuses.input39 && savedStatus.statuses.input40 && savedStatus.statuses.input41 && savedStatus.statuses.input42;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input43 && savedStatus.statuses.input44;
      setIsBlurred2(!allValid2);
      const allValid3 =
        savedStatus.statuses.input45 && savedStatus.statuses.input46 && savedStatus.statuses.input47 && savedStatus.statuses.input48 && savedStatus.statuses.input49 && savedStatus.statuses.input50 && savedStatus.statuses.input51;
      setIsBlurred3(!allValid3);
      const allValid4 = savedStatus.statuses.input52 && savedStatus.statuses.input53 && savedStatus.statuses.input54 && savedStatus.statuses.input55;
      setIsBlurred4(!allValid4);
      const allValid5 = savedStatus.statuses.input56 && savedStatus.statuses.input57 && savedStatus.statuses.input58 && savedStatus.statuses.input59 && savedStatus.statuses.input60;
      setIsBlurred5(!allValid5);
    }

    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    if (!isBlurred && !isBlurred2 && !isBlurred3 && !isBlurred4 && !isBlurred5 && sessionData?.MetodePenyelesaianCampuran) {
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
        const newSessionData = {
          ...sessionData,
          MetodePenyelesaianCampuran: true,
        };
        localStorage.setItem('sessionData', JSON.stringify(newSessionData));
      }
    }
  }, [isBlurred, isBlurred2, isBlurred3, isBlurred4, isBlurred5]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input39' && value.replace(/\.|\s/g, '') == '4') {
      isValid = true;
    } else if (inputName === 'input40' && value.replace(/\.|\s/g, '') == '103500000') {
      isValid = true;
    } else if (inputName === 'input41' && value.replace(/\.|\s/g, '') == '96000000') {
      isValid = true;
    } else if (inputName === 'input42' && value.replace(/\.|\s/g, '') == '7500000') {
      isValid = true;
    } else if (inputName === 'input43' && value.replace(/\.|\s/g, '') == '-5y-25z') {
      isValid = true;
    } else if (inputName === 'input44' && value.replace(/\.|\s/g, '') == '-50500000') {
      isValid = true;
    } else if (inputName === 'input45' && value.replace(/\.|\s/g, '') == '-5y-25z') {
      isValid = true;
    } else if (inputName === 'input46' && value.replace(/\.|\s/g, '') == '-50500000') {
      isValid = true;
    } else if (inputName === 'input47' && value.replace(/\.|\s/g, '') == '-10y-50z') {
      isValid = true;
    } else if (inputName === 'input48' && value.replace(/\.|\s/g, '') == '-101000000') {
      isValid = true;
    } else if (inputName === 'input49' && value.replace(/\.|\s/g, '') == '-55z') {
      isValid = true;
    } else if (inputName === 'input50' && value.replace(/\.|\s/g, '') == '-93500000') {
      isValid = true;
    } else if (inputName === 'input51' && value.replace(/\.|\s/g, '') == '1700000') {
      isValid = true;
    } else if (inputName === 'input52' && value.replace(/\.|\s/g, '') == '7500000') {
      isValid = true;
    } else if (inputName === 'input53' && value.replace(/\.|\s/g, '') == '-5y-25z') {
      isValid = true;
    } else if (inputName === 'input54' && value.replace(/\.|\s/g, '') == '-50500000') {
      isValid = true;
    } else if (inputName === 'input55' && value.replace(/\.|\s/g, '') == '1700000') {
      isValid = true;
    } else if (inputName === 'input56' && value.replace(/\.|\s/g, '') == '1600000') {
      isValid = true;
    } else if (inputName === 'input57' && value.replace(/\.|\s/g, '') == '1700000') {
      isValid = true;
    } else if (inputName === 'input58' && value.replace(/\.|\s/g, '') == '16500000') {
      isValid = true;
    } else if (inputName === 'input59' && value.replace(/\.|\s/g, '') == '7500000') {
      isValid = true;
    } else if (inputName === 'input60' && value.replace(/\.|\s/g, '') == '7500000') {
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
    const allValid = updatedStatus.statuses.input39 && updatedStatus.statuses.input40 && updatedStatus.statuses.input41 && updatedStatus.statuses.input42;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatus.statuses.input43 && updatedStatus.statuses.input44;
    setIsBlurred2(!allValid2);
    const allValid3 =
      updatedStatus.statuses.input45 &&
      updatedStatus.statuses.input46 &&
      updatedStatus.statuses.input47 &&
      updatedStatus.statuses.input48 &&
      updatedStatus.statuses.input49 &&
      updatedStatus.statuses.input50 &&
      updatedStatus.statuses.input51;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatus.statuses.input52 && updatedStatus.statuses.input53 && updatedStatus.statuses.input54 && updatedStatus.statuses.input55;
    setIsBlurred4(!allValid4);
    const allValid5 = updatedStatus.statuses.input56 && updatedStatus.statuses.input57 && updatedStatus.statuses.input58 && updatedStatus.statuses.input59 && updatedStatus.statuses.input60;
    setIsBlurred5(!allValid5);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Metode Penyelesaian SPLTV <span className="text-muted fw-medium ms-sm-2 fs-5">Metode Campuran (Eliminasi & Substitusi)</span>
      </h3>
      <h5 className="fw-bold">C. Metode Campuran (Eliminasi & Substitusi)</h5>
      <p>
        Metode ini merupakan metode penyelesaian dengan menggabungkan metode eliminasi dan substitusi. Kalian dapat menggunakan kedua metode yang sudah dipelajari secara bersamaan. Dapat menggunakan eliminasi terlebih dahulu atau substitusi
        dahulu. Pada pembelajaran ini, akan ditunjukkan bagaimana alternatif penyelesaian dengan menggunakan metode eliminasi kemudian substitusi.
      </p>
      <div className="d-flex justify-content-center mb-4">
        <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4 text-center">
          <p className="text-center">Kita akan mencoba mengetahui harga tiap gulung warna kain seperti contoh permasalahan sebelumnya. Kita ketahui bentuk SPLTV yang telah kita susun dari cerita tersebut adalah sebagai berikut.</p>
          <p className="mb-1">4x + 6y + 3z = 20.700.000 &ensp; ...(1)</p>
          <p className="mb-1">5x + 5y + 5z = 24.000.000 &ensp; ...(2)</p>
          <p className="mb-1">2x + 3y + 7z = 19.700.000 &ensp; ...(3)</p>
        </div>
      </div>
      <p className="fw-bold">Langkah penyelesaian dengan metode campuran:</p>
      <p>1. Langkah pertama, kita akan menggunakan metode eliminasi untuk mengeliminasi salah satu variabel dari salah satu persamaan tersebut. Misalnya variabel x pada persamaan (1) dan (2).</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '900px' }}>
          <div className=" text-end" style={{ width: '250px' }}>
            <p className="pt-2">4x + 6y + 3z = 20.700.000</p>
            <p className="pt-2">5x + 5y + 5z = 24.000.000</p>
          </div>
          <div className=" text-center px-0" style={{ width: '100px' }}>
            <p className="pt-2">| ×5 |</p>
            <p className="d-inline-block"> | ×</p>
            <input
              className={`form-control d-inline-block me-1 ${inputStatuses.input39 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input39 && !inputStatuses.input39 ? 'border-danger bg-danger-subtle' : ''}`}
              type="text"
              placeholder="..."
              style={{ textAlign: 'center', width: '40px' }}
              value={inputValues.input39}
              onChange={e => handleChange('input39', e)}
            />
            <p className="d-inline-block"> |</p>
          </div>
          <div className="" style={{ width: '550px' }}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <p className="d-inline-block mb-0">20x + 30y + 15z = </p>
              <input
                className={`form-control d-inline-block ${inputStatuses.input40 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input40 && !inputStatuses.input40 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '148px' }}
                value={inputValues.input40}
                onChange={e => handleChange('input40', e)}
              />
              <p className="d-inline-block fst-italic text-muted mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil dari 20.700.000 dikalikan dengan 5
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="border-bottom border-black position-relative kurang pb-3">
                <p className="d-inline-block mb-0 me-2">20x + 30y + 15z = </p>
                <input
                  className={`form-control d-inline-block ${inputStatuses.input41 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input41 && !inputStatuses.input41 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '148px' }}
                  value={inputValues.input41}
                  onChange={e => handleChange('input41', e)}
                />
              </div>
              <p className="d-inline-block pb-3 mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil dari 24.000.000 dikalikan <br /> dengan angka pada operator
              </p>
            </div>
            <div className="ps-4 ms-2 d-flex gap-2 mt-3">
              <p className="ps-4 pt-1">10y - 5z =</p>
              <div className="pb-3">
                <input
                  className={`form-control ${inputStatuses.input42 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input42 && !inputStatuses.input42 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center' }}
                  value={inputValues.input42}
                  onChange={e => handleChange('input42', e)}
                />
                <Tips>
                  hasil pengurangan konstanta <br />
                  persamaan (1) dengan persamaan (2)
                </Tips>
              </div>
              <p className=" pt-1">... (4)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>2. Selanjutnya, kita dapat mengulangi langkah tersebut untuk mengeliminasi variabel x pada persamaan (2) dan (3) seperti berikut.</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '700px' }}>
            <div className=" text-end" style={{ width: '250px' }}>
              <p>5x + 5y + 5z = 24.000.000</p>
              <p>2x + 3y + 7z = 19.700.000</p>
            </div>
            <div className=" text-center " style={{ width: '100px' }}>
              <p className="">| ×2 |</p>
              <p className="">| ×5 |</p>
            </div>
            <div className="" style={{ width: '350px' }}>
              <p>10x + 10y + 10z = 48.000.000</p>
              <div className="">
                <p className="border-bottom d-inline-block border-black position-relative kurang pb-3">10x + 15y + 35z = 98.500.000</p>
              </div>

              <div className="d-inline-block mb-2">
                <div className="text-center d-flex gap-2 align-items-center">
                  <input
                    className={`form-control ${inputStatuses.input43 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input43 && !inputStatuses.input43 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="... ... ..."
                    style={{ textAlign: 'center', width: '100px' }}
                    value={inputValues.input43}
                    onChange={e => handleChange('input43', e)}
                  />
                  <span>=</span>
                  <input
                    className={`form-control ${inputStatuses.input44 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input44 && !inputStatuses.input44 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '148px' }}
                    value={inputValues.input44}
                    onChange={e => handleChange('input44', e)}
                  />
                  <p className="mb-0">... (5)</p>
                </div>
                <Tips>hasil eliminasi pada kedua ruas</Tips>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>3. Dari langkah sebelumnya, kita mendapatkan dua persamaan baru, yaitu persamaan (4) dan (5) yang menyisakan dua variabel y dan z. Kita akan melakukan eliminasi pada kedua persamaan tersebut.</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '950px' }}>
            <div className=" text-end" style={{ width: '300px' }}>
              <p>10y - 5z = 7.500.000</p>
              <div className="d-flex justify-content-end">
                <div className=" mb-2 text-center">
                  <div className="d-flex gap-2 align-items-center mb-1">
                    <input
                      className={`form-control ${inputStatuses.input45 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input45 && !inputStatuses.input45 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="... ... ..."
                      style={{ textAlign: 'center', width: '100px' }}
                      value={inputValues.input45}
                      onChange={e => handleChange('input45', e)}
                    />
                    <span>=</span>
                    <input
                      className={`form-control ${inputStatuses.input46 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input46 && !inputStatuses.input46 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '148px' }}
                      value={inputValues.input46}
                      onChange={e => handleChange('input46', e)}
                    />
                  </div>
                  <Tips>persamaan (5)</Tips>
                </div>
              </div>
            </div>
            <div className=" text-center px-0" style={{ width: '100px' }}>
              <p className="">| ×1 |</p>
              <p className="pt-2">| ×2 |</p>
            </div>
            <div className="" style={{ width: '550px' }}>
              <p>10y - 5z = 7.500.000</p>
              <div className="d-flex">
                <div className="d-flex mb-2 text-center border-bottom border-black position-relative tambah pb-3">
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      className={`form-control ${inputStatuses.input47 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input47 && !inputStatuses.input47 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="... ... ..."
                      style={{ textAlign: 'center', width: '100px' }}
                      value={inputValues.input47}
                      onChange={e => handleChange('input47', e)}
                    />
                    <span>=</span>
                    <input
                      className={`form-control ${inputStatuses.input48 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input48 && !inputStatuses.input48 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '148px' }}
                      value={inputValues.input48}
                      onChange={e => handleChange('input48', e)}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex mb-2 gap-2 align-items-center">
                <div className="text-center">
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      className={`form-control ${inputStatuses.input49 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input49 && !inputStatuses.input49 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '100px' }}
                      value={inputValues.input49}
                      onChange={e => handleChange('input49', e)}
                    />
                    <span>=</span>
                    <input
                      className={`form-control ${inputStatuses.input50 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input50 && !inputStatuses.input50 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '148px' }}
                      value={inputValues.input50}
                      onChange={e => handleChange('input50', e)}
                    />
                  </div>
                </div>
                <Tips>hasil dari eliminasi pada kedua ruas</Tips>
              </div>
              <div className="d-flex mb-2 gap-2 align-items-center">
                <div className="text-center">
                  <div className="d-flex gap-2 align-items-center">
                    <span className="px-5">z</span>
                    <span>=</span>
                    <input
                      className={`form-control ${inputStatuses.input51 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input51 && !inputStatuses.input51 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '128px' }}
                      value={inputValues.input51}
                      onChange={e => handleChange('input51', e)}
                    />
                  </div>
                </div>
                <Tips>
                  kedua ruas dibagi dengan angka yang <br />
                  dapat menyisakan variabel z saja
                </Tips>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>4. Kita telah mengetahui besar nilai variabel z. Selanjutnya kita dapat mensubstitusikan nilai tersebut ke persamaan (4) atau (5) untuk mengetahui nilai variabel y.</p>
        <p>Persamaan (4)</p>
        <div className="d-flex align-items-center gap-2 mb-2">
          <p className="mb-0">10y - 5z = </p>
          <input
            className={`form-control ${inputStatuses.input52 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input52 && !inputStatuses.input52 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '128px' }}
            value={inputValues.input52}
            onChange={e => handleChange('input52', e)}
          />
        </div>
        <p>Persamaan (5)</p>
        <div className="d-flex align-items-center gap-2 mb-2">
          <input
            className={`form-control ${inputStatuses.input53 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input53 && !inputStatuses.input53 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="... ... ..."
            style={{ textAlign: 'center', width: '128px' }}
            value={inputValues.input53}
            onChange={e => handleChange('input53', e)}
          />
          <p className="mb-0"> = </p>
          <input
            className={`form-control ${inputStatuses.input54 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input54 && !inputStatuses.input54 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '148px' }}
            value={inputValues.input54}
            onChange={e => handleChange('input54', e)}
          />
        </div>
        <p>Nilai variabel z</p>
        <div className="d-flex align-items-center gap-2 mb-2">
          <p className="mb-0">z = </p>
          <input
            className={`form-control ${inputStatuses.input55 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input55 && !inputStatuses.input55 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '128px' }}
            value={inputValues.input55}
            onChange={e => handleChange('input55', e)}
          />
        </div>
      </div>

      <div className={`${isBlurred4 ? 'blur' : ''}`}>
        <p ref={section4}>Misal akan kita substitusikan ke persamaan (4), maka</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '850px' }}>
            <div className=" text-end" style={{ width: '200px' }}>
              <p>10y - 5z</p>
              <p>10y - 5(1.700.000)</p>
              <p>10y - 8.500.000</p>
              <p>10y</p>
              <p>10y</p>
              <p className="pt-2">y</p>
              <p className="pt-3">y</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-3">=</p>
            </div>
            <div className="" style={{ width: '250px' }}>
              <p>7.500.000</p>
              <p>7.500.000</p>
              <p>7.500.000</p>
              <p>7.500.000 + 8.500.000</p>
              <p>16.000.000</p>
              <div className="d-inline-block">
                <p className="border-bottom border-black mb-0 d-inline-block">16.000.000</p>
                <p className="text-center">10</p>
              </div>
              <p>1.600.000</p>
            </div>
            <div className="" style={{ width: '300px' }}>
              <p className="fst-italic text-muted mb-4" style={{ fontSize: '12px' }}>
                persamaan (4)
              </p>
              <p className="fst-italic text-muted mb-4" style={{ fontSize: '12px' }}>
                substitusi nilai z ke persamaan (4)
              </p>
              <p className="fst-italic text-muted mb-4" style={{ fontSize: '12px' }}>
                hasil substitusi nilai z ke persamaan (4)
              </p>
              <p className="fst-italic text-muted mb-5" style={{ fontSize: '12px' }}>
                kedua ruas dijumlahkan dengan 8.500.000
              </p>
              <p className="fst-italic text-muted mb-4 mt-5 pt-4" style={{ fontSize: '12px' }}>
                kedua ruas dibagi dengan 10
              </p>
              <p className="fst-italic text-muted pt-2 " style={{ fontSize: '12px' }}>
                diketahui nilai variabel y
              </p>
            </div>
          </div>
        </div>

        <p>5. Selanjutnya, kita mensubstitusikan lagi nilai variabel y dan z yang sudah diketahui ke persamaan (1), (2), atau (3). Misalnya ke persamaan (2), sehingga</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '1000px' }}>
            <div className=" text-end" style={{ width: '400px' }}>
              <p>5x + 5y + 5z</p>
              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                <p className="mb-0">5x + </p>
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex align-items-center">
                    <span>5(</span>
                    <input
                      className={`form-control ${inputStatuses.input56 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input56 && !inputStatuses.input56 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="............................"
                      style={{ textAlign: 'center', width: '128px' }}
                      value={inputValues.input56}
                      onChange={e => handleChange('input56', e)}
                    />
                    <span>)</span>
                  </div>
                  <span>+</span>
                  <div className="d-flex align-items-center">
                    <span>5(</span>
                    <input
                      className={`form-control ${inputStatuses.input57 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input57 && !inputStatuses.input57 ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="............................"
                      style={{ textAlign: 'center', width: '128px' }}
                      value={inputValues.input57}
                      onChange={e => handleChange('input57', e)}
                    />
                    <span>)</span>
                  </div>
                </div>
              </div>
              <p>5x + 8.000.000 + 8.500.000</p>
              <p>5x + 16.500.000</p>
              <p>5x</p>
              <p className="pt-2">5x</p>
              <p className="pt-2">x</p>
              <p className="">x</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p className="pt-1">=</p>
              <p className="">=</p>
              <p className="">=</p>
              <p className="">=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
              <p className="">=</p>
            </div>
            <div className="" style={{ width: '550px' }}>
              <div className="d-flex gap-5">
                <p>24.000.000</p>
                <Tips>persamaan (2)</Tips>
              </div>
              <p className="pt-1">24.000.000</p>
              <p className="">24.000.000</p>
              <p className="">24.000.000</p>
              <div className="d-flex align-items-center gap-2 mb-2">
                <p className="mb-0">24.000.000 - </p>
                <input
                  className={`form-control d-inline-block ${inputStatuses.input58 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input58 && !inputStatuses.input58 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '148px' }}
                  value={inputValues.input58}
                  onChange={e => handleChange('input58', e)}
                />
                <Tips>kedua ruas dikurangi dengan 16.500.000</Tips>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  className={`form-control d-inline-block ${inputStatuses.input59 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input59 && !inputStatuses.input59 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '148px' }}
                  value={inputValues.input59}
                  onChange={e => handleChange('input59', e)}
                />
                <Tips>hasil operasi pada ruas kanan</Tips>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  className={`form-control d-inline-block ${inputStatuses.input60 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input60 && !inputStatuses.input60 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '148px' }}
                  value={inputValues.input60}
                  onChange={e => handleChange('input60', e)}
                />
                <span>/ 5</span>
                <Tips>kedua ruas dibagi dengan 5</Tips>
              </div>
              <p>1.500.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred5 ? 'blur' : ''}`}>
        <p ref={section5}>
          Setelah menyelesaikan langkah tersebut, kita tahu bahwa dengan menggunakan ketiga metode yang sudah kalian coba, mendapatkan hasil yang sama. Yaitu kita mengetahui besar nilai variabel x = 1.500.000, nilai variabel y = 1.600.000
          dan nilai variabel z = 1.700.000.
        </p>
        <p>
          Kita ingat kembali bahwa: <br />
          • Variabel x mewakili harga satu gulung kain warna putih <br />
          • Variabel y mewakili harga satu gulung kain warna abu-abu <br />• Variabel z mewakili harga satu gulung kain warna cokelat
        </p>
        <p>
          <b>Metode mana yang menurut kalian lebih mudah dan cepat?</b> <br />
          Jika sudah memahami metode-metode untuk menyelesaikan SPLTV. lantas untuk apa kita mempelajari SPLTV?
        </p>

        <div className="d-flex justify-content-center py-4">
          <NextButton link={from ? '/materi' : '/materi/penggunaan-spltv'} />
        </div>
      </div>
    </Main>
  );
}
