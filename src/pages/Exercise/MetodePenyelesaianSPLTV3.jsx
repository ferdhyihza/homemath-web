import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';
import { useEffect, useRef, useState } from 'react';

export default function MetodePenyelesaianSPLTV3() {
  const [inputValues, setInputValues] = useState({
    input40l: '',
    input41l: '',
    input42l: '',
    input43l: '',
    input44l: '',
    input45l: '',
    input46l: '',
    input47l: '',
    input49l: '',
    input50l: '',
    input51l: '',
    input52: '',
    input53: '',
    input54: '',
    input55: '',
    input56l: '',
    input57l: '',
    input58l: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input40l: false,
    input41l: false,
    input42l: false,
    input43l: false,
    input44l: false,
    input45l: false,
    input46l: false,
    input47l: false,
    input49l: false,
    input50l: false,
    input51l: false,
    input52: false,
    input53: false,
    input54: false,
    input55: false,
    input56l: false,
    input57l: false,
    input58l: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const [isBlurred4, setIsBlurred4] = useState(true);
  const [isBlurred5, setIsBlurred5] = useState(true);
  const section = useRef(null);
  const section2 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    if (!isBlurred && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (!isBlurred2 && section2.current) {
      section2.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (!isBlurred4 && section4.current) {
      section4.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (!isBlurred5 && section5.current) {
      section5.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isBlurred, isBlurred2, isBlurred4, isBlurred5]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input40l' && value.replace(/\.|\s/g, '') == '269') {
      isValid = true;
    } else if (inputName === 'input41l' && value.replace(/\.|\s/g, '') == '87') {
      isValid = true;
    } else if (inputName === 'input42l' && value.replace(/\.|\s/g, '') == '182') {
      isValid = true;
    } else if (inputName === 'input43l' && value.replace(/\.|\s/g, '') == '3y-3z') {
      isValid = true;
    } else if (inputName === 'input44l' && value.replace(/\.|\s/g, '') == '3') {
      isValid = true;
    } else if (inputName === 'input45l' && value.replace(/\.|\s/g, '') == '91') {
      isValid = true;
    } else if (inputName === 'input46l' && value.replace(/\.|\s/g, '') == 'z') {
      isValid = true;
    } else if (inputName === 'input47l' && value.replace(/\.|\s/g, '') == '1') {
      isValid = true;
    } else if (inputName === 'input49l' && value.replace(/\.|\s/g, '') == '-z') {
      isValid = true;
    } else if (inputName === 'input50l' && value.replace(/\.|\s/g, '') == '1-91') {
      isValid = true;
    } else if (inputName === 'input51l' && value.replace(/\.|\s/g, '') == '-90') {
      isValid = true;
    } else if (inputName === 'input56l' && value.replace(/\.|\s/g, '') == '91') {
      isValid = true;
    } else if (inputName === 'input57l' && value.replace(/\.|\s/g, '') == '90') {
      isValid = true;
    } else if (inputName === 'input58l' && value.replace(/\.|\s/g, '') == '87+1') {
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
    // const updatedStatus = {
    //   values: updatedValues,
    //   statuses: updatedStatuses,
    // };
    // localStorage.setItem('inputStatuses', JSON.stringify(updatedStatus));

    // Periksa apakah semua input sudah valid
    const allValid = updatedStatuses.input40l && updatedStatuses.input41l && updatedStatuses.input42l;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatuses.input43l && updatedStatuses.input44l;
    setIsBlurred2(!allValid2);
    const allValid4 = updatedStatuses.input45l && updatedStatuses.input46l && updatedStatuses.input47l && updatedStatuses.input49l && updatedStatuses.input50l && updatedStatuses.input51l;
    setIsBlurred4(!allValid4);
    const allValid5 = updatedStatuses.input56l && updatedStatuses.input57l && updatedStatuses.input58l;
    setIsBlurred5(!allValid5);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Metode Penyelesaian SPLTV Latihan Soal 3 <span className="text-muted fw-medium ms-sm-2 fs-5">Penyelesaian SPLTV dengan Metode Campuran (Eliminasi & Substitusi)</span>
      </h3>
      <div className="d-flex justify-content-center mb-4">
        <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4 text-center">
          <p className="text-center">Diberikan SPLTV sebagai berikut</p>
          <p className="mb-1">2x + y - z = 177 &ensp; ...(1)</p>
          <p className="mb-1">x + y + z = 269 &ensp; ...(2)</p>
          <p className="mb-1">x - y + z = 87 &ensp; ...(3)</p>
        </div>
      </div>
      <p>
        <b>Penyelesaian:</b>
      </p>
      <p>1. Langkah pertama, kita akan menggunakan metode eliminasi untuk mengeliminasi salah satu variabel dari salah satu persamaan tersebut. Misalnya variabel x dan z pada persamaan (2) dan (3).</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '200px' }}>
          <div className="" style={{ width: '200px' }}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <p className="d-inline-block mb-0">x + y + z = </p>
              <input
                className={`form-control d-inline-block ${inputStatuses.input40l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input40l && !inputStatuses.input40l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '64px' }}
                value={inputValues.input40l}
                onChange={e => handleChange('input40l', e)}
              />
              {/* <p className="d-inline-block fst-italic text-muted mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil dari 20.700.000 dikalikan dengan 5
              </p> */}
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="border-bottom border-black position-relative kurang pb-3">
                <p className="d-inline-block mb-0 me-2">x - y + z =</p>
                <input
                  className={`form-control d-inline-block ${inputStatuses.input41l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input41l && !inputStatuses.input41l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input41l}
                  onChange={e => handleChange('input41l', e)}
                />
              </div>
              {/* <p className="d-inline-block pb-3 mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil dari 24.000.000 dikalikan <br /> dengan angka pada operator
              </p> */}
            </div>
            <div className="ps-3 ms-2 d-flex gap-2 mt-3">
              <p className="ps-2 pt-1">2y =</p>
              <div className="pb-3">
                <input
                  className={`form-control ${inputStatuses.input42l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input42l && !inputStatuses.input42l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input42l}
                  onChange={e => handleChange('input42l', e)}
                />
              </div>
            </div>
            <p className="ps-4 ms-3 pt-1">y = 182 / 2</p>
            <p className="ps-4 ms-3 pt-1">y = 91</p>
          </div>
        </div>
      </div>
      <div ref={section} className={`${isBlurred ? 'blur' : ''}`}>
        <p>
          2. Karena kita telah mengetahui nilai variabel y pada langkah pertama, kita dapat melakukan eliminasi pada persamaan yang menyisakan dua variabel, namun pastikan terdapat variabel y pada persamaan baru yang terbentuk. Misalnya
          kita akan mengeliminasi persamaan (1) dan (3). Sehingga,
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: ' 500px' }}>
            <div className=" text-end" style={{ width: '150px' }}>
              <p>2x + y - z = 177</p>
              <p>x - y + z = 87</p>
            </div>
            <div className=" text-center " style={{ width: '100px' }}>
              <p className="">| ×1 |</p>
              <p className="">| ×2 |</p>
            </div>
            <div className="" style={{ width: '250px' }}>
              <p>2x + y - z = 177</p>

              <p className="border-bottom d-inline-block border-black position-relative kurang pb-3">2x - 2y + 2z = 174</p>

              <div className="d-inline-block mb-2">
                <div className="text-center d-flex gap-2 align-items-center">
                  <input
                    className={`form-control ${inputStatuses.input43l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input43l && !inputStatuses.input43l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="... ... ..."
                    style={{ textAlign: 'center', width: '100px' }}
                    value={inputValues.input43l}
                    onChange={e => handleChange('input43l', e)}
                  />
                  <span>=</span>
                  <input
                    className={`form-control ${inputStatuses.input44l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input44l && !inputStatuses.input44l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.input44l}
                    onChange={e => handleChange('input44l', e)}
                  />
                </div>
                <Tips>hasil eliminasi pada kedua ruas</Tips>
              </div>
              <div className="d-flex gap-1">
                <p className="ps-5 ms-4">y - z = 1</p>
                <p>......... (4)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={section2} className={`${isBlurred2 ? 'blur' : ''}`}>
        <p>3. Setelah mendapatkan persamaan (4), kita langsung mensubstitusikan nilai variabel y ke dalam persamaan (4) untuk mengetahui nilai variabel z. Sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '600px' }}>
            <div className=" text-end" style={{ width: '200px' }}>
              <p className="mb-2">y - z</p>
              <div className="d-flex justify-content-end mb-2">
                <div className="d-flex gap-2 align-items-center ">
                  <input
                    className={`form-control ${inputStatuses.input45l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input45l && !inputStatuses.input45l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.input45l}
                    onChange={e => handleChange('input45l', e)}
                  />
                  <span>-</span>
                  <input
                    className={`form-control ${inputStatuses.input46l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input46l && !inputStatuses.input46l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.input46l}
                    onChange={e => handleChange('input46l', e)}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <input
                  className={`form-control ${inputStatuses.input49l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input49l && !inputStatuses.input49l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input49l}
                  onChange={e => handleChange('input49l', e)}
                />
              </div>
              <p className="mb-2 pt-2 mt-1">- z</p>
              <p className="mb-2 pt-2 mt-1">z</p>
            </div>
            <div className=" text-center px-0" style={{ width: '50px' }}>
              <p className="mb-2">=</p>
              <p className="pt-1">=</p>
              <p className="pt-2">=</p>
              <p className="pt-1">=</p>
              <p className="">=</p>
            </div>
            <div className="" style={{ width: '350px' }}>
              <p className="mb-2">1</p>
              <div className="d-flex mb-2">
                <input
                  className={`form-control ${inputStatuses.input47l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input47l && !inputStatuses.input47l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input47l}
                  onChange={e => handleChange('input47l', e)}
                />
              </div>
              <div className="d-flex mb-2 gap-2 align-items-center">
                <div className="text-center">
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      className={`form-control ${inputStatuses.input50l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input50l && !inputStatuses.input50l ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '64px' }}
                      value={inputValues.input50l}
                      onChange={e => handleChange('input50l', e)}
                    />
                  </div>
                </div>
                <Tips>kedua ruas dikurangi dengan 91</Tips>
              </div>
              <div className="d-flex mb-2 gap-2 align-items-center">
                <input
                  className={`form-control ${inputStatuses.input51l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input51l && !inputStatuses.input51l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input51l}
                  onChange={e => handleChange('input51l', e)}
                />
                <Tips>hasil operasi pengurangan sebelumnya</Tips>
              </div>
              <div className="d-flex mb-2 gap-2 align-items-center">
                <p className="mb-0">90</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred4 ? 'blur' : ''}`}>
        <p ref={section4}>4. Karena nilai dua variabel sudah kita ketahui, kita bisa mensubstitusikannya ke salah satu persamaan pada SPLTV yang diberikan, misalnya ke persamaan (3), maka</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '600px' }}>
            <div className=" text-end" style={{ width: '250px' }}>
              <p>x - y + z</p>
              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                <p className="mb-0">x - </p>
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex align-items-center">
                    <input
                      className={`form-control ${inputStatuses.input56l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input56l && !inputStatuses.input56l ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '64px' }}
                      value={inputValues.input56l}
                      onChange={e => handleChange('input56l', e)}
                    />
                  </div>
                  <span>+</span>
                  <div className="d-flex align-items-center">
                    <input
                      className={`form-control ${inputStatuses.input57l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input57l && !inputStatuses.input57l ? 'border-danger bg-danger-subtle' : ''}`}
                      type="text"
                      placeholder="..."
                      style={{ textAlign: 'center', width: '64px' }}
                      value={inputValues.input57l}
                      onChange={e => handleChange('input57l', e)}
                    />
                  </div>
                </div>
              </div>
              <p>x - 1</p>
              <p className="pt-1">x</p>
              <p className="">x</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p className="pt-1">=</p>
              <p className="">=</p>
              <p className="pt-1">=</p>
              <p className="">=</p>
            </div>
            <div className="" style={{ width: '300px' }}>
              <p>87</p>
              <p className="pt-1">87</p>
              <p className="">87</p>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  className={`form-control d-inline-block ${inputStatuses.input58l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input58l && !inputStatuses.input58l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input58l}
                  onChange={e => handleChange('input58l', e)}
                />
                <Tips>kedua ruas ditambah dengan 1</Tips>
              </div>
              <p>88</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={section5} className={`${isBlurred5 ? 'blur' : ''}`}>
        <p>5. Sehingga kita ketahui nilai variabel x=88, variabel y=91, dan variabel z=90.</p>

        <div className="d-flex justify-content-center py-4">
          <NextButton link="/latihan-soal" />
        </div>
      </div>
    </Main>
  );
}
