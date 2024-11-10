import { useEffect, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';

export default function PengantarSPLTV3() {
  const [inputValues, setInputValues] = useState({
    input1l: '',
    input2l: '',
    input3l: '',
    input4l: '',
    input5l: '',
    input6l: '',
    input7l: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input1l: false,
    input2l: false,
    input3l: false,
    input4l: false,
    input5l: false,
    input6l: false,
    input7l: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid = savedStatus.statuses.input1l && savedStatus.statuses.input2l && savedStatus.statuses.input3l;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input4l && savedStatus.statuses.input5l && savedStatus.statuses.input6l && savedStatus.statuses.input7l;
      setIsBlurred2(!allValid2);
    }
  }, []);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input1l' && value === 'x') {
      isValid = true;
    } else if (inputName === 'input2l' && value === 'y') {
      isValid = true;
    } else if (inputName === 'input3l' && value === 'z') {
      isValid = true;
    } else if (inputName === 'input4l' && value.replace(/\./g, '') == '24000000') {
      isValid = true;
    } else if (inputName === 'input5l' && value == '2') {
      isValid = true;
    } else if (inputName === 'input6l' && value == '7') {
      isValid = true;
    } else if (inputName === 'input7l' && value.replace(/\./g, '') == '19700000') {
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
    const allValid = updatedStatuses.input1l && updatedStatuses.input2l && updatedStatuses.input3l;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatuses.input4l && updatedStatuses.input5l && updatedStatuses.input6l && updatedStatuses.input7l;
    setIsBlurred2(!allValid2);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">
        Latihan Soal 3 <span className="text-muted fw-medium ms-2 fs-5">Bentuk Umum SPLTV: Menyusun Sistem Persamaan Linear Tiga Variabel</span>
      </h3>

      <p>
        Beberapa pengusaha konveksi di daerah Kota Blitar, akan memproduksi baju seragam sekolah pada masa awal tahun ajaran baru. Salah satu toko tekstil terkenal di Kota Blitar menjadi pilihan utama para pengusaha untuk membeli bahan
        baku. <br />
        Konveksi Roshima menghabiskan Rp20.700.000 untuk membeli: <br />
        • 4 gulung kain warna putih <br />
        • 6 gulung kain warna abu-abu <br />
        • 3 gulung kain warna cokelat <br />
        Sedangkan SM Bordir menghabiskan Rp24.000.000 untuk membeli: <br />
        • 5 gulung kain warna putih <br />
        • 5 gulung kain warna abu-abu <br />
        • 5 gulung kain warna cokelat <br />
        Konveksi ketiga, yaitu Sportees menghabiskan Rp19.700.000 untuk membeli: <br />• 2 gulung kain warna putih <br />
        • 3 gulung kain warna abu-abu <br />
        • 7 gulung kain warna cokelat <br />
        Di sisi lain, konveksi Berkarya ingin merintis usahanya dengan memulai membeli bahan kain di toko tersebut. Namun, ia hanya memiliki informasi total harga kain dari konveksi Roshima dan SM Bordir. Bagaimana ia akan mengetahui harga
        setiap gulung warna kain?
      </p>
      <p>
        <b>Penyelesaian:</b> <br />
        Langkah pertama, kita dapat mengidentifikasi apa saja unsur yang muncul pada cerita tersebut. Kita mengetahui terdapat kain warna putih, warna abu-abu, dan warna cokelat, ketiga warna kain tersebut merupakan unsur variabel. Jumlah
        dari banyaknya tiap kain yang dibeli oleh konveksi, merupakan koefisien. Adapun jumlah total biaya yang harus dibayarkan untuk membeli kain, merupakan konstanta.
      </p>
      <p>
        <b>Yuk coba ilustrasi berikut!</b> <br />
        Mari kita misalkan setiap gulung warna kain sebagai variabel yang ingin kita ketahui nilainya.
      </p>
      <p className="text-center fst-italic my-4">Lengkapi kotak kosong berikut dengan variabel yang mewakili harga satu gulung kain warna putih adalah x, warna abu-abu adalah y, dan warna cokelat adalah z</p>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input
          className={`form-control ${inputStatuses.input1l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input1l && !inputStatuses.input1l ? 'border-danger bg-danger-subtle' : ''}`}
          type="text"
          placeholder="..."
          style={{ textAlign: 'center', width: '50px' }}
          value={inputValues.input1l}
          onChange={e => handleChange('input1l', e)}
        />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
          Harga satu gulung kain <br />
          warna putih
        </p>
      </div>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input
          className={`form-control ${inputStatuses.input2l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input2l && !inputStatuses.input2l ? 'border-danger bg-danger-subtle' : ''}`}
          type="text"
          placeholder="..."
          style={{ textAlign: 'center', width: '50px' }}
          value={inputValues.input2l}
          onChange={e => handleChange('input2l', e)}
        />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
          Harga satu gulung kain <br />
          warna abu-abu
        </p>
      </div>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input
          className={`form-control ${inputStatuses.input3l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input3l && !inputStatuses.input3l ? 'border-danger bg-danger-subtle' : ''}`}
          type="text"
          placeholder="..."
          style={{ textAlign: 'center', width: '50px' }}
          value={inputValues.input3l}
          onChange={e => handleChange('input3l', e)}
        />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
          Harga satu gulung kain <br />
          warna cokelat
        </p>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p>
          Selanjutnya, kita dapat menentukan besaran koefisien dan konstanta untuk melengkapi persamaan tersebut. <br />
          Konveksi Roshima menghabiskan Rp20.700.000 untuk membeli: <b>(20.700.000 merupakan konstanta) </b> <br />• 4 gulung kain warna putih <b>(4 merupakan koefisien)</b> <br />• 6 gulung kain warna abu-abu <b>(6 merupakan koefisien)</b>
          <br />• 3 gulung kain warna cokelat <b>(3 merupakan koefisien)</b> <br />
          Sedangkan SM Bordir menghabiskan Rp24.000.000 untuk membeli: <b>(24.000.000 merupakan konstanta)</b> <br />• 5 gulung kain warna putih <b>(5 merupakan koefisien)</b> <br />• 5 gulung kain warna abu-abu{' '}
          <b>(5 merupakan koefisien)</b> <br />• 5 gulung kain warna cokelat <b>(5 merupakan koefisien)</b> <br />
          Konveksi ketiga, yaitu Sportees menghabiskan Rp19.700.000 untuk membeli: <b>(19.700.000 merupakan konstanta)</b> <br />• 2 gulung kain warna putih <b>(2 merupakan koefisien)</b> <br />• 3 gulung kain warna abu-abu{' '}
          <b>(3 merupakan koefisien)</b> <br />• 7 gulung kain warna cokelat <b>(7 merupakan koefisien)</b> <br />
        </p>
        <p>
          Berdasarkan informasi di atas, kita telah mengetahui mana yang merupakan koefisien dan konstanta untuk kita ubah menjadi persamaan linear. Setelah mengetahui variabel dan koefisiennya,
          <b> yuk ikuti bagaimana menyusunnya menjadi SPLTV yang dapat kita selesaikan dengan kegiatan berikut!</b>
        </p>

        <p className="text-center mt-4 mb-1">Misalkan uang yang dihabiskan oleh konveksi Roshima menjadi persamaan (1), maka</p>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-3 text-center p-2 border border-2 border-blue rounded-2 fs-5">4x + 6y + 3z</div>
          <div className="col-1 text-center">
            <p className="bg-blue-subtle d-inline-block py-1 px-2 rounded-2 mb-0">=</p>
          </div>
          <div className="col-3 text-center p-2 border border-2 border-blue rounded-2 fs-5">20.700.000</div>
        </div>

        <p className="text-center mt-4 mb-1">Misalkan uang yang dihabiskan oleh konveksi SM Bordir menjadi persamaan (2), maka</p>
        <div className="row justify-content-center align-items-start mb-2">
          <div className="col-3 text-center p-2 border border-2 border-blue rounded-2 fs-5">5x + 5y + 5z</div>
          <div className="col-1 text-center">
            <p className="bg-blue-subtle d-inline-block py-1 px-2 rounded-2 mb-0 mt-2">=</p>
          </div>
          <div className="col-3 px-0">
            <div
              className={`text-center p-2 border border-2 border-blue rounded-2 ${inputStatuses.input4l ? 'border-success bg-success-subtle disabled' : ''} ${
                inputValues.input4l && !inputStatuses.input4l ? 'border-danger bg-danger-subtle' : ''
              }`}
            >
              <input
                className={`border-0 w-100 fs-5 ${inputStatuses.input4l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input4l && !inputStatuses.input4l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center' }}
                value={inputValues.input4l}
                onChange={e => handleChange('input4l', e)}
              />
            </div>
            <Tips>isikan konstanta yang diketahui</Tips>
          </div>
        </div>

        <p className="text-center mt-4 mb-1">Misalkan uang yang dihabiskan oleh konveksi SM Bordir menjadi persamaan (3), maka</p>
        <div className="row justify-content-center align-items-start mb-4">
          <div className="col-3 px-0 text-center ">
            <div
              className={`d-flex p-2 border border-2 border-blue rounded-2 fs-5 justify-content-center ${inputStatuses.input5l || inputStatuses.input6l ? 'border-success bg-success-subtle' : ''} ${
                (inputValues.input5l && !inputStatuses.input5l) || (inputValues.input6l && !inputStatuses.input6l) ? 'border-danger bg-danger-subtle' : ''
              } ${inputStatuses.input5l && inputStatuses.input6l ? 'disabled' : ''}`}
            >
              <input
                className={`border-1 rounded-1 mx-1 fs-5 ${inputStatuses.input5l ? 'border-success bg-success-subtle' : ''} ${inputValues.input5l && !inputStatuses.input5l ? 'border-danger bg-danger-subtle ' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '24px' }}
                value={inputValues.input5l}
                onChange={e => handleChange('input5l', e)}
              />
              <span>x + 3y +</span>
              <input
                className={`border-1 rounded-1 mx-1 fs-5 ${inputStatuses.input6l ? 'border-success bg-success-subtle' : ''} ${inputValues.input6l && !inputStatuses.input6l ? 'border-danger bg-danger-subtle ' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '24px' }}
                value={inputValues.input6l}
                onChange={e => handleChange('input6l', e)}
              />
              <span>z</span>
            </div>
            <Tips>isikan koefisien yang diketahui</Tips>
          </div>
          <div className="col-1 text-center">
            <p className="bg-blue-subtle d-inline-block py-1 px-2 rounded-2 mb-0 mt-2">=</p>
          </div>
          <div className="col-3 px-0">
            <div
              className={`text-center p-2 border border-2 border-blue rounded-2 ${inputStatuses.input7l ? 'border-success bg-success-subtle disabled' : ''} ${
                inputValues.input7l && !inputStatuses.input7l ? 'border-danger bg-danger-subtle' : ''
              }`}
            >
              <input
                className={`border-0 w-100 fs-5 ${inputStatuses.input7l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input7l && !inputStatuses.input7l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center' }}
                value={inputValues.input7l}
                onChange={e => handleChange('input7l', e)}
              />
            </div>
            <Tips>isikan konstanta yang diketahui</Tips>
          </div>
        </div>
      </div>
      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p>Dengan demikian, kita telah mengubah kalimat pada cerita tadi menjadi sebuah SPLTV yang dapat kita selesaikan, yaitu</p>
        <div className="d-flex justify-content-center mb-4">
          <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4">
            <div className="d-flex justify-content-between gap-4">
              <p className="mb-0">4x + 6y + 3z = 20.700.000</p>
              <p className="mb-0">... (1)</p>
            </div>
            <div className="d-flex justify-content-between gap-4">
              <p className="mb-0">5x + 5y + 5z = 24.000.000</p>
              <p className="mb-0">... (2)</p>
            </div>
            <div className="d-flex justify-content-between gap-4">
              <p className="mb-0">2x + 3y + 7z = 19.700.000</p>
              <p className="mb-0">... (3)</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred2 ? 'blur' : ''} d-flex justify-content-center py-4`}>
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
