import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';

export default function MetodePenyelesaianSPLTV2() {
  const [inputValues, setInputValues] = useState({
    input18l: '',
    input19l: '',
    input20l: '',
    input21l: '',
    input22l: '',
    input23l: '',
    input24l: '',
    input25l: '',
    input26l: '',
    input27l: '',
    input28l: '',
    input29l: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input18l: false,
    input19l: false,
    input20l: false,
    input21l: false,
    input22l: false,
    input23l: false,
    input24l: false,
    input25l: false,
    input26l: false,
    input27l: false,
    input28l: false,
    input29l: false,
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
    // const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    // if (savedStatus) {
    //   setInputValues(savedStatus.values);
    //   setInputStatuses(savedStatus.statuses);
    //   // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
    //   const allValid = savedStatus.statuses.input18l && savedStatus.statuses.input19l && savedStatus.statuses.input20l;
    //   setIsBlurred(!allValid);
    //   const allValid2 = savedStatus.statuses.input21l && savedStatus.statuses.input22l && savedStatus.statuses.input23l;
    //   setIsBlurred2(!allValid2);
    //   const allValid3 = savedStatus.statuses.input24l && savedStatus.statuses.input25l && savedStatus.statuses.input26l;
    //   setIsBlurred3(!allValid3);
    //   const allValid4 = savedStatus.statuses.input27l && savedStatus.statuses.input28l && savedStatus.statuses.input29l && savedStatus.statuses.input30l && savedStatus.statuses.input31l;
    //   setIsBlurred4(!allValid4);
    //   const allValid5 = savedStatus.statuses.input32l && savedStatus.statuses.input33l && savedStatus.statuses.input34l && savedStatus.statuses.input35l && savedStatus.statuses.input36l;
    //   setIsBlurred5(!allValid5);
    //   const allValid6 = savedStatus.statuses.input37l && savedStatus.statuses.input38l;
    //   setIsBlurred6(!allValid6);
    // }

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
  }, [isBlurred, isBlurred2, isBlurred3, isBlurred4]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input18l' && value.replace(/\./g, '') == '174') {
      isValid = true;
    } else if (inputName === 'input19l' && value.replace(/\./g, '') == '174') {
      isValid = true;
    } else if (inputName === 'input20l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'input21l' && value.replace(/\./g, '') == '87') {
      isValid = true;
    } else if (inputName === 'input22l' && value.replace(/\./g, '') == '87') {
      isValid = true;
    } else if (inputName === 'input23l' && value.replace(/\./g, '') == '91') {
      isValid = true;
    } else if (inputName === 'input24l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'input25l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'input26l' && value.replace(/\./g, '') == '91') {
      isValid = true;
    } else if (inputName === 'input27l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'input28l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'input29l' && value.replace(/\./g, '') == '88') {
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
    const allValid = updatedStatuses.input18l && updatedStatuses.input19l && updatedStatuses.input20l;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatuses.input21l && updatedStatuses.input22l && updatedStatuses.input23l;
    setIsBlurred2(!allValid2);
    const allValid3 = updatedStatuses.input24l && updatedStatuses.input25l && updatedStatuses.input26l;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatuses.input27l && updatedStatuses.input28l && updatedStatuses.input29l;
    setIsBlurred4(!allValid4);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Metode Penyelesaian SPLTV Latihan Soal 2 <span className="text-muted fw-medium ms-sm-2 fs-5">Penyelesaian SPLTV dengan Metode Substitusi</span>
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
      <p>1. Pilih salah satu variabel yang ingin dinyatakan ke dalam dua variabel lainnya. Misalnya kita menyatakan x pada persamaan (3) ke dalam variabel y dan z.</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '400px' }}>
          <div className="text-end" style={{ width: '150px' }}>
            <p>x - y + z</p>
            <p>x - y + y + z -z</p>
            <p>x</p>
          </div>
          <div className="text-center" style={{ width: '50px' }}>
            <p>=</p>
            <p>=</p>
            <p className="">=</p>
          </div>
          <div className="" style={{ width: '200px' }}>
            <p>87</p>
            <p>87 + y - z</p>
            <p>87 + y - z &ensp; .........(4)</p>
          </div>
        </div>
      </div>

      <p>2. Variabel x telah kita nyatakan ke dalam variabel lainnya, menjadi persamaan (4). Langkah selanjutnya adalah kita substitusi persamaan (4) ke dua persamaan lainnya, sehingga.</p>
      <p>
        <i className="text-muted">(substitusi persamaan (4) ke persamaan (1))</i>
      </p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '750px' }}>
          <div className="text-end" style={{ width: '400px' }}>
            <p>2x + y - z</p>
            <p>2(87 + y - z) + y - z</p>
            <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
              <p className="mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil perkalian 2 dengan 87
              </p>
              <input
                className={`form-control ${inputStatuses.input18l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input18l && !inputStatuses.input18l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '64px' }}
                value={inputValues.input18l}
                onChange={e => handleChange('input18l', e)}
              />
              <p className="mb-0">+ 2y - 2z + y - z</p>
            </div>
            <p className="pt-1">2y + y - 2z - z</p>
            <p className="pt-2">3y - 3z</p>
            <p className="pt-2">y - z</p>
          </div>
          <div className="text-center" style={{ width: '50px' }}>
            <p>=</p>
            <p>=</p>
            <p className="pt-2">=</p>
            <p className="">=</p>
            <p className="pt-2">=</p>
            <p className="pt-2">=</p>
          </div>
          <div className="" style={{ width: '300px' }}>
            <p>177</p>
            <p>177</p>
            <p className="pt-2">177</p>
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">177 - </p>
              <input
                className={`form-control ${inputStatuses.input19l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input19l && !inputStatuses.input19l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '64px' }}
                value={inputValues.input19l}
                onChange={e => handleChange('input19l', e)}
              />
              <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dikurangi hasil <br /> perkalian 2 dengan 87
              </p>
            </div>
            <p className="pt-2 mt-1">3</p>
            <div className="d-flex gap-2 align-items-center mt-2">
              <div>
                <input
                  className={`form-control ${inputStatuses.input20l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input20l && !inputStatuses.input20l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input20l}
                  onChange={e => handleChange('input20l', e)}
                />
              </div>
              ........... (5)
            </div>
            <p className="d-inline-block ms-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dibagi dengan 3
            </p>
          </div>
        </div>
      </div>

      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>
          <i className="text-muted">(substitusi persamaan (4) ke persamaan (2))</i>
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '600px' }}>
            <div className="text-end" style={{ width: '200px' }}>
              <p>x + y + z</p>
              <p>(87 + y - z) + y + z</p>
              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                <input
                  className={`form-control ${inputStatuses.input21l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input21l && !inputStatuses.input21l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input21l}
                  onChange={e => handleChange('input21l', e)}
                />
                <p className="mb-0">+ y + y - z + z</p>
              </div>
              <p className="pt-1">2y</p>
              <p className="pt-2">2y</p>
              <p className="pt-2">y</p>
            </div>
            <div className="text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="">=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '350px' }}>
              <p>269</p>
              <p>269</p>
              <p className="pt-2">269</p>
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0">269 - </p>
                <input
                  className={`form-control ${inputStatuses.input22l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input22l && !inputStatuses.input22l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input22l}
                  onChange={e => handleChange('input22l', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dikurangi dengan 87
                </p>
              </div>
              <p className="pt-2 mt-1">182</p>
              <div className="d-flex gap-2 align-items-center mt-2">
                <input
                  className={`form-control ${inputStatuses.input23l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input23l && !inputStatuses.input23l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input23l}
                  onChange={e => handleChange('input23l', e)}
                />
              </div>
              <p className="d-inline-block ms-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dibagi dengan 2
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>3. Dari langkah sebelumnya, kita mendapatkan persamaan (5) dan nilai variabel y. Sehingga, kita dapat langsung mensubstitusikan nilai variabel y ke dalam persamaan (5) seperti berikut</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '800px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>y - z</p>
              <p className="pt-2">91 - z</p>
              <p className="pt-2">-z</p>
              <p className="pt-2">-z</p>
              <p className="pt-2">z</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '250px' }}>
              <div className="d-flex gap-2 align-items-center">
                <input
                  className={`form-control ${inputStatuses.input24l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input24l && !inputStatuses.input24l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input24l}
                  onChange={e => handleChange('input24l', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  konstanta persamaan (5)
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center pt-2">
                <input
                  className={`form-control ${inputStatuses.input25l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input25l && !inputStatuses.input25l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input25l}
                  onChange={e => handleChange('input25l', e)}
                />
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <span>1 - </span>
                <input
                  className={`form-control ${inputStatuses.input26l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input26l && !inputStatuses.input26l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input26l}
                  onChange={e => handleChange('input26l', e)}
                />
              </div>
              <p className="pt-3">- 90</p>
              <p className="pt-2">90</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>4. Setelah mengetahui nilai variabel y dan z pada langkah sebelumnya, kita dapat mensubstitusikan nilai tersebut ke dalam salah satu persamaan (1), (2), atau (3). Misalkan substitusi ke persamaan (3), sehingga</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '750px' }}>
            <div className=" text-end" style={{ width: '350px' }}>
              <p>x - y + z</p>
              <p>x - 91 + 90</p>
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  hasil penjumlahan -91 dengan 90
                </p>
                <span>x - </span>
                <input
                  className={`form-control ${inputStatuses.input27l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input27l && !inputStatuses.input27l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input27l}
                  onChange={e => handleChange('input27l', e)}
                />
              </div>
              <p className="pt-3">x</p>
              <p className="pt-1">x</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
            </div>
            <div className="" style={{ width: '350px' }}>
              <p>87</p>
              <p>87</p>
              <p className="pt-2">87</p>
              <div className="d-flex gap-2 align-items-center mb-2">
                <p className="mb-0">87 + </p>
                <input
                  className={`form-control ${inputStatuses.input28l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input28l && !inputStatuses.input28l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input28l}
                  onChange={e => handleChange('input28l', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dijumlah dengan hasil <br />
                  penjumlahan -91 dengan 90
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mb-2">
                <input
                  className={`form-control ${inputStatuses.input29l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input29l && !inputStatuses.input29l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input29l}
                  onChange={e => handleChange('input29l', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  didapatkan nilai variabel y
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={section4} className={`${isBlurred4 ? 'blur' : ''}`}>
        <p>5. Sehingga kita ketahui nilai variabel x = 88, variabel y = 91, dan variabel z = 90.</p>
        <div className="d-flex justify-content-center py-4">
          <NextButton latsol={true} link="/latihan-soal">
            Penyelesaian SPLTV dengan Metode Substitusi
          </NextButton>
        </div>
      </div>
    </Main>
  );
}
