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
    if (inputName === 'input18l' && value.replace(/\.|\s/g, '') == '62') {
      isValid = true;
    } else if (inputName === 'input19l' && value.replace(/\.|\s/g, '') == '62') {
      isValid = true;
    } else if (inputName === 'input20l' && value.replace(/\.|\s/g, '') == '-20') {
      isValid = true;
    } else if (inputName === 'input21l' && value.replace(/\.|\s/g, '') == '-155') {
      isValid = true;
    } else if (inputName === 'input22l' && value.replace(/\.|\s/g, '') == '155') {
      isValid = true;
    } else if (inputName === 'input23l' && value.replace(/\.|\s/g, '') == '144') {
      isValid = true;
    } else if (inputName === 'input24l' && value.replace(/\.|\s/g, '') == '-20') {
      isValid = true;
    } else if (inputName === 'input25l' && value.replace(/\.|\s/g, '') == '-20+3r') {
      isValid = true;
    } else if (inputName === 'input26l' && value.replace(/\.|\s/g, '') == '3r-20') {
      isValid = true;
    } else if (inputName === 'input27l' && value.replace(/\.|\s/g, '') == '24') {
      isValid = true;
    } else if (inputName === 'input28l' && value.replace(/\.|\s/g, '') == '24') {
      isValid = true;
    } else if (inputName === 'input29l' && value.replace(/\.|\s/g, '') == '7') {
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
          <p className="mb-1">p + q + r = 31 &ensp; ...(1)</p>
          <p className="mb-1">2p + 3q - r = 42 &ensp; ...(2)</p>
          <p className="mb-1">-5p + q = -r - 11 &ensp; ...(3)</p>
        </div>
      </div>
      <p>
        <b>Penyelesaian:</b>
      </p>
      <p>1. Pertama, kita dapat merubah terlebih dahulu persamaan (3) menjadi,</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '250px' }}>
          <div className="text-end" style={{ width: '100px' }}>
            <p>-5p + q</p>
            <p>-5p + q + r</p>
            <p>-5p + q + r</p>
          </div>
          <div className="text-center" style={{ width: '50px' }}>
            <p>=</p>
            <p>=</p>
            <p className="">=</p>
          </div>
          <div className="" style={{ width: '100px' }}>
            <p>-r -11</p>
            <p>-r + r - 11</p>
            <p>-11</p>
          </div>
        </div>
      </div>
      <p>Sehingga kita dapatkan persamaan</p>
      <p className="mb-1">p + q + r = 31 &ensp; ...(1)</p>
      <p className="mb-1">2p + 3q - r = 42 &ensp; ...(2)</p>
      <p className="">-5p + q + r = -11 &ensp; ...(3)</p>

      <p>2. Pilih salah satu variabel yang ingin dinyatakan ke dalam dua variabel lainnya. Misalnya kita menyatakan p pada persamaan (1) ke dalam variabel q dan r.</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '300px' }}>
          <div className="text-end" style={{ width: '150px' }}>
            <p>p + q + r</p>
            <p>p + q - q + r - r</p>
            <p>p</p>
          </div>
          <div className="text-center" style={{ width: '50px' }}>
            <p>=</p>
            <p>=</p>
            <p className="">=</p>
          </div>
          <div className="" style={{ width: '100px' }}>
            <p>31</p>
            <p>31 - q - r</p>
            <p>31 - q - r</p>
          </div>
        </div>
      </div>

      <p>3. Variabel p telah kita nyatakan ke dalam variabel lainnya, menjadi persamaan (4). Langkah selanjutnya adalah kita substitusi persamaan (4) ke dua persamaan lainnya, sehingga.</p>
      <p>
        <i className="text-muted">(substitusi persamaan (4) ke persamaan (2))</i>
      </p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '750px' }}>
          <div className="text-end" style={{ width: '400px' }}>
            <p>2p + 3q - r</p>
            <p>2(31 - q - r) + 3q - r</p>
            <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
              <p className="mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                hasil perkalian 2 dengan 31
              </p>
              <input
                className={`form-control ${inputStatuses.input18l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input18l && !inputStatuses.input18l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '64px' }}
                value={inputValues.input18l}
                onChange={e => handleChange('input18l', e)}
              />
              <p className="mb-0">- 2q - 2r + 3q - r</p>
            </div>
            <p className="pt-1">62 + q - 3r</p>
            <p className="pt-2">62 - 62 + q - 3r</p>
            {/* <div className="d-inline-block">
              <p className="border-bottom border-black mb-0 d-inline-block">3y - 3z</p>
              <p className="text-center mb-0">3</p>
            </div> */}
            <p className="pt-2">q - 3r</p>
          </div>
          <div className="text-center" style={{ width: '50px' }}>
            <p>=</p>
            <p>=</p>
            <p className="pt-2">=</p>
            <p className="pt-1">=</p>
            <p className="pt-2">=</p>
            <p className="pt-2">=</p>
            {/* <p className="pt-2">=</p> */}
          </div>
          <div className="" style={{ width: '300px' }}>
            <p>42</p>
            <p>42</p>
            <p className="pt-2">42</p>
            <p className="pt-1">42</p>
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">42 - </p>
              <input
                className={`form-control ${inputStatuses.input19l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input19l && !inputStatuses.input19l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '64px' }}
                value={inputValues.input19l}
                onChange={e => handleChange('input19l', e)}
              />
              <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dikurangi hasil <br /> perkalian 2 dengan 31
              </p>
            </div>
            {/* <div className="d-flex gap-2 align-items-center">
              <div className="d-inline-block">
                <p className="border-bottom border-black mb-0 d-inline-block">3</p>
                <p className="text-center mb-0">3</p>
              </div>
              <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dibagi dengan 3
              </p>
            </div> */}
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
            {/* <p className="d-inline-block ms-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dibagi dengan 3
            </p> */}
          </div>
        </div>
      </div>

      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>
          <i className="text-muted">(substitusi persamaan (4) ke persamaan (3))</i>
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '650px' }}>
            <div className="text-end" style={{ width: '250px' }}>
              <p>-5p + q + r</p>
              <p>-5(31 - q - r) + q + r</p>
              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                <input
                  className={`form-control ${inputStatuses.input21l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input21l && !inputStatuses.input21l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input21l}
                  onChange={e => handleChange('input21l', e)}
                />
                <p className="mb-0">+ 5q + 5r + q + r</p>
              </div>
              <p className="pt-1">-155 + 6q + 6r</p>
              <p className="pt-1">-155 + 155 + 6q + 6r</p>
              {/* <div className="d-inline-block">
                <p className="border-bottom border-black mb-0 d-inline-block">2y</p>
                <p className="text-center mb-0">2</p>
              </div> */}
              <p className="pt-2">6q + 6r</p>
            </div>
            <div className="text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '350px' }}>
              <p>-11</p>
              <p>-11</p>
              <p className="pt-2">-11</p>
              <p className="pt-1">-11</p>
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0">-11 + </p>
                <input
                  className={`form-control ${inputStatuses.input22l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input22l && !inputStatuses.input22l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input22l}
                  onChange={e => handleChange('input22l', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas ditambah dengan 155
                </p>
              </div>
              {/* <div className="d-flex gap-2 align-items-center">
                <div className="d-inline-block pt-1">
                  <p className="border-bottom border-black mb-0 d-inline-block">182</p>
                  <p className="text-center mb-0">2</p>
                </div>
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dibagi dengan 2
                </p>
              </div> */}
              <div className="d-flex gap-2 align-items-center mt-2">
                <div>
                  <input
                    className={`form-control ${inputStatuses.input23l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input23l && !inputStatuses.input23l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.input23l}
                    onChange={e => handleChange('input23l', e)}
                  />
                </div>
                ........... (6)
              </div>
              {/* <p className="d-inline-block ms-2 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dibagi dengan 2
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>
          4. Dari langkah sebelumnya, kita mendapatkan persamaan (5) dan (6). Selanjutnya, kita peril mengubah salah satu persamaan tersebut menjadi sebuah fungsi. Misalnya kita merubah persamaan (5) menjadi fungsi q atau kita nyatakan ke
          dalam variabel q. Sehingga,
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '800px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>q - 3r</p>
              <p className="pt-2">q - 3r + 3r</p>
              <p className="pt-2">q</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
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
                  style={{ textAlign: 'center', width: '128px' }}
                  value={inputValues.input25l}
                  onChange={e => handleChange('input25l', e)}
                />
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <input
                  className={`form-control ${inputStatuses.input26l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input26l && !inputStatuses.input26l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '128px' }}
                  value={inputValues.input26l}
                  onChange={e => handleChange('input26l', e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>5. Selanjutnya, kita dapat mensubstitusikan fungsi q atau persamaan (7) ke dalam persamaan (6). Sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '300px' }}>
            <div className=" text-end" style={{ width: '150px' }}>
              <p>6q + 6r</p>
              <p>6(3r - 20) + 6r</p>
              <p>18r - 120 + 6r</p>
              <p>24r - 120</p>
              <p>24r - 120 + 120</p>
              <p>24r</p>
              <div className="d-inline-block pt-1">
                <p className="border-bottom border-black mb-0 d-inline-block">24r</p>
                <p className="text-center mb-0">24</p>
              </div>
              <p className="pt-1">r</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="pt-3">=</p>
              <p>=</p>
            </div>
            <div className="" style={{ width: '100px' }}>
              <p>144</p>
              <p>144</p>
              <p>144</p>
              <p>144</p>
              <p>144 + 120</p>
              <p>264</p>
              <div className="d-inline-block pt-1">
                <p className="border-bottom border-black mb-0 d-inline-block">264</p>
                <p className="text-center mb-0">24</p>
              </div>
              <p className="pt-1">11</p>
            </div>
          </div>
        </div>

        <p>6. Setelah kita mengetahui besar nilai variabel r, kita dapat mensubstitusikannya ke dalam persamaan (5), (6), atau (7) untuk mengetahui nilai variabel q. Misalnya kita substitusikan ke persamaan (5). Sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '300px' }}>
            <div className=" text-end" style={{ width: '150px' }}>
              <p>q - 3r</p>
              <p>q - 3(11) + 6r</p>
              <p>q - 33</p>
              <p>q - 33 + 33</p>
              <p>q</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
            </div>
            <div className="" style={{ width: '100px' }}>
              <p>-20</p>
              <p>-20</p>
              <p>-20</p>
              <p>-20 + 33</p>
              <p>13</p>
            </div>
          </div>
        </div>

        <p>7. Kita telah mengetahui besar nilai variabel q dan r, sehingga kita dapat mensubstitusikannya ke persamaan (1), (2), atau (3) untuk mengetahui besar nilai variabel p. Misal substitusi ke persamaan (1). Maka,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '750px' }}>
            <div className=" text-end" style={{ width: '350px' }}>
              <p>p + q + r</p>
              <p>p + 13 + 11</p>
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  hasil penjumlahan 13 dengan 11
                </p>
                <span>p + </span>
                <input
                  className={`form-control ${inputStatuses.input27l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input27l && !inputStatuses.input27l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input27l}
                  onChange={e => handleChange('input27l', e)}
                />
              </div>
              <p className="pt-3">p + 24 - 24</p>
              <p className="pt-1">p</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-1">=</p>
              <p className="pt-1">=</p>
            </div>
            <div className="" style={{ width: '350px' }}>
              <p>31</p>
              <p>31</p>
              <p className="pt-2">31</p>
              <div className="d-flex gap-2 align-items-center mb-2">
                <p className="mb-0">31 - </p>
                <input
                  className={`form-control ${inputStatuses.input28l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input28l && !inputStatuses.input28l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input28l}
                  onChange={e => handleChange('input28l', e)}
                />
                <p className="d-inline-block mb-0 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                  kedua ruas dikurangi dengan hasil <br />
                  penjumlahan 13 dengan 11
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
        <p>8. Sehingga kita ketahui nilai variabel p = 7, variabel q = 13, dan variabel r = 11.</p>
        <div className="d-flex justify-content-center py-4">
          <NextButton latsol={true} link="/latihan-soal">
            Penyelesaian SPLTV dengan Metode Substitusi
          </NextButton>
        </div>
      </div>
    </Main>
  );
}
