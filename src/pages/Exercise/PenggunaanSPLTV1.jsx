import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import { useEffect, useRef, useState } from 'react';

export default function PenggunaanSPLTV1() {
  const [inputValues, setInputValues] = useState({
    input61l: '',
    input62l: '',
    input63l: '',
    input64l: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input61l: false,
    input62l: false,
    input63l: false,
    input64l: false,
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
    //   const allValid = savedStatus.statuses.input61l;
    //   setIsBlurred(!allValid);
    //   const allValid2 = savedStatus.statuses.input62l;
    //   setIsBlurred2(!allValid2);
    //   const allValid3 = savedStatus.statuses.input63l;
    //   setIsBlurred3(!allValid3);
    //   const allValid4 = savedStatus.statuses.input64l;
    //   setIsBlurred4(!allValid4);
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
    if (inputName === 'input61l' && value.replace(/\.|\s/g, '') == '12') {
      isValid = true;
    } else if (inputName === 'input62l' && value.replace(/\.|\s/g, '') == '5') {
      isValid = true;
    } else if (inputName === 'input63l' && value.replace(/\.|\s/g, '') == '3') {
      isValid = true;
    } else if (inputName === 'input64l' && value.replace(/\.|\s/g, '') == '4') {
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
    const allValid = updatedStatuses.input61l;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatuses.input62l;
    setIsBlurred2(!allValid2);
    const allValid3 = updatedStatuses.input63l;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatuses.input64l;
    setIsBlurred4(!allValid4);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">Penggunaan SPLTV Latihan Soal 1</h3>
      <p>
        <em> Perhatikan permasalahan berikut!</em> <br />
        Tiga ekor siput, sebut saja siput A, B, dan C bergerak pada sebuah lintasan. Dilakukan pengamatan terhadap pergerakan mereka, dalam waktu satu menit panjang lintasan yang dilalui ketiga siput tersebut jika dijumlahkan adalah 12 cm.
        Pada percobaan lain, 2 kali panjang lintasan yang dilalui siput B sama dengan panjang lintasan siput A ditambah dengan 2 kali panjang lintasan siput C. Percobaan terakhir, panjang lintasan yang dilalui siput A dijumlahkan dengan 2
        kali panjang lintasan yang dilalui siput B kemudian dijumlahkan lagi dengan panjang lintasan yang dilalui siput C adalah 17 cm. Berdasarkan informasi tersebut, panjang lintasan yang dapat dilalui oleh setiap siput dalam waktu satu
        menit adalah…
      </p>
      <p>
        <b>Penyelesaian:</b> <br />
        Langkah pertama yang dapat kita lakukan adalah menentukan variabel. Misalkan
        <br />
        Panjang lintasan yang ditempuh siput A = a
        <br />
        Panjang lintasan yang ditempuh siput B = b
        <br />
        Panjang lintasan yang ditempuh siput C = c
      </p>
      <p>
        <b>Diketahui:</b> <br />
      </p>
      <p>
        Jumlah panjang lintasan yang ditempuh dalam waktu satu menit adalah 12 cm, sehingga
        <br />a + b + c = 12 &emsp;&emsp;&emsp;............(1)
      </p>
      <p>
        2 kali panjang lintasan yang dilalui siput B sama dengan panjang lintasan siput A ditambah dengan 2 kali panjang lintasan siput C, sehingga
        <br />
        2b = a + 2c
        <br />⇔ 2b - a = a - a + 2c
        <br />⇔ a - 2b +2c = 0 &emsp;&emsp;&emsp;............(2)
      </p>
      <p>
        Panjang lintasan yang dilalui siput A dijumlahkan dengan 2 kali panjang lintasan yang dilalui siput B kemudian dijumlahkan lagi dengan panjang lintasan yang dilalui siput C adalah 17 cm, sehingga
        <br />a + 2b + c = 17 &emsp;&emsp;&emsp;............(3)
      </p>
      <p>
        Maka, kita ketahui tiga persamaan yaitu, <br />
        a + b + c = 12 &emsp;&emsp;&emsp;............(1)
        <br />
        a - 2b +2c = 0 &emsp;&emsp;&emsp;............(2)
        <br />a + 2b + c = 17 &emsp;&emsp;&emsp;............(3)
      </p>
      <p>Setelah kita mengubahnya dalam bentuk SPLTV, kita dapat menyelesaikannya dengan metode yang telah kita pelajari. Mari kita selesaikan dengan metode campuran (eliminasi & substitusi)</p>
      <p>1. Eliminasi variabel a pada persamaan (1) dan (2) dengan mengurangi kedua persamaan tersebut. Sehingga,</p>
      <div className="ps-4">
        <p className="mb-0">a + b + c = 12</p>
        <p className="d-inline-block mb-1 pe-3 pb-1 border-bottom border-black kurang position-relative">a - 2b +2c = 0</p>
        <div className="d-block mb-2">
          <div className="d-flex gap-2 align-items-center">
            <p className="mb-0 ps-4 ">3b - c =</p>
            <input
              type="text"
              className={`form-control ${inputStatuses.input61l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input61l && !inputStatuses.input61l ? 'border-danger bg-danger-subtle' : ''}`}
              placeholder="..."
              style={{ width: '48px', textAlign: 'center' }}
              value={inputValues.input61l}
              onChange={e => handleChange('input61l', e)}
            />
            <p className="mb-0 ">............(4)</p>
          </div>
        </div>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>2. Eliminasi variabel a dan c pada persamaan (1) dan (3) dengan mengurangi kedua persamaan tersebut. Sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-start mb-2 ps-4 mx-0" style={{ minWidth: '200px' }}>
            <div className="" style={{ width: '200px' }}>
              <p>a + b + c = 12</p>
              <p className="d-inline-block mb-1 pb-3 border-bottom border-black tambah position-relative pe-5">a + 2b + c = 17</p>
              <p className="mb-2 ps-4 ms-3">-b = -5</p>
              <p className="mb-2 ps-3">-b(-1) = -5(-1)</p>
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0 ps-4 ms-4">b =</p>
                <input
                  type="text"
                  className={`form-control ${inputStatuses.input62l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input62l && !inputStatuses.input62l ? 'border-danger bg-danger-subtle' : ''}`}
                  placeholder="..."
                  style={{ width: '64px', textAlign: 'center' }}
                  value={inputValues.input62l}
                  onChange={e => handleChange('input62l', e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>3. Dari langkah sebelumnya, kita telah mengetahui nilai variabel b, sehingga kita bisa melakukan substitusi nilai tersebut ke persamaan (4) seperti berikut</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-start mb-2 ps-4 mx-0" style={{ minWidth: '300px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>3b - c =</p>
              <p>3(5) - c</p>
              <p>15 - c</p>
              <p>15 - 15 -c</p>
              <p>-c</p>
              <p>-c(-1)</p>
              <p className="pt-2">c</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '100px' }}>
              <p>12</p>
              <p>12</p>
              <p>12</p>
              <p>12 - 15</p>
              <p>-3</p>
              <p>-3(-1)</p>
              <div className="d-inline-block mb-2">
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="text"
                    className={`form-control ${inputStatuses.input63l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input63l && !inputStatuses.input63l ? 'border-danger bg-danger-subtle' : ''}`}
                    placeholder="..."
                    style={{ width: '64px', textAlign: 'center' }}
                    value={inputValues.input63l}
                    onChange={e => handleChange('input63l', e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>
          4. Dari hasil substitusi tersebut, kita telah mengetahui nilai variabel b dan c, maka kita bisa mensubstitusikan juga nilai tersebut ke persamaan pada SPLTV yang kita identifikasi untuk mengetahui nilai variabel a. Misalkan
          substitusi nilai variabel b dan c ke persamaan (1), sehingga
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-start ps-4 mx-0" style={{ minWidth: '250px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>a + b + c</p>
              <p>a + 5 + 3</p>
              <p>a + 8</p>
              <p>a + 8 - 8</p>
              <p className="pt-2">a</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '100px' }}>
              <p>12</p>
              <p>12</p>
              <p>12</p>
              <p>12 - 8</p>
              <div className="d-inline-block mb-2">
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="text"
                    className={`form-control ${inputStatuses.input64l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input64l && !inputStatuses.input64l ? 'border-danger bg-danger-subtle' : ''}`}
                    placeholder="..."
                    style={{ width: '64px', textAlign: 'center' }}
                    value={inputValues.input64l}
                    onChange={e => handleChange('input64l', e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={section4} className={`${isBlurred4 ? 'blur' : ''}`}>
        <p>5. Maka, kita telah mengetahu bahwa nilai variabel a = 4, b = 5, dan c = 3. Jadi, dalam waktu satu menit, siput A dapat menempuh panjang lintasan sejauh 4 cm, siput B sejauh 5 cm, dan siput C sejauh 3 cm.</p>
        <div className="d-flex justify-content-center py-4">
          <NextButton latsol={true} link="/latihan-soal">
            Penggunaan SPLTV
          </NextButton>
        </div>
      </div>
    </Main>
  );
}
