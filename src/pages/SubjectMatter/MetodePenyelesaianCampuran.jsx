import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';

export default function MetodePenyelesaianCampuran() {
  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">
        Metode Penyelesaian SPLTV <span className="text-muted fw-medium ms-2 fs-5">Metode Campuran (Eliminasi & Substitusi)</span>
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
      <div className="row justify-content-center">
        <div className="col-3 text-end">
          <p className="pt-2">4x + 6y + 3z = 20.700.000</p>
          <p>5x + 5y + 5z = 24.000.000</p>
        </div>
        <div className="col-1 text-center">
          <p className="pt-2">| ×5 |</p>
          <p className="d-inline-block"> | ×</p>
          <input className="form-control d-inline-block me-1" type="text" placeholder="..." style={{ textAlign: 'center', width: '40px' }} />
          <p className="d-inline-block"> |</p>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-center gap-2 mb-2">
            <p className="d-inline-block mb-0">20x + 30y + 15z = </p>
            <input className="form-control d-inline-block " type="text" placeholder="..." style={{ textAlign: 'center', width: '148px' }} />
            <p className="d-inline-block fst-italic mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil dari 20.700.000 dikalikan dengan 5
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="border-bottom border-black position-relative kurang pb-3">
              <p className="d-inline-block mb-0 me-2">20x + 30y + 15z = </p>
              <input className="form-control d-inline-block " type="text" placeholder="..." style={{ textAlign: 'center', width: '148px' }} />
            </div>
            <p className="d-inline-block pb-3 mb-0 fst-italic" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil dari 24.000.000 dikalikan <br /> dengan angka pada operator
            </p>
          </div>
          <div className="ps-4 ms-2 d-flex gap-2 mt-3">
            <p className="ps-4 pt-1">10y - 5z =</p>
            <div className="pb-3">
              <input className="form-control " type="text" placeholder="..." style={{ textAlign: 'center' }} />
              <Tips>
                hasil pengurangan konstanta <br />
                persamaan (1) dengan persamaan (2)
              </Tips>
            </div>
            <p className=" pt-1">... (4)</p>
          </div>
        </div>
      </div>
      <p>2. Selanjutnya, kita dapat mengulangi langkah tersebut untuk mengeliminasi variabel x pada persamaan (2) dan (3) seperti berikut.</p>
      <div className="row justify-content-center">
        <div className="col-3 text-end">
          <p>5x + 5y + 5z = 24.000.000</p>
          <p>2x + 3y + 7z = 19.700.000</p>
        </div>
        <div className="col-1 text-center">
          <p className="">| ×2 |</p>
          <p className="">| ×5 |</p>
        </div>
        <div className="col-6">
          <p>10x + 10y + 10z = 48.000.000</p>
          <p className="border-bottom border-black position-relative kurang pb-3 d-inline-block">10x + 15y + 35z = 98.500.000</p>
          <div className="d-flex gap-2 align-items-center">
            <div className=" mb-2 text-center">
              <div className="p-2 border rounded-2 d-flex">
                <input className="border-0" type="text" placeholder="... ... ..." style={{ textAlign: 'center', width: '100px' }} />
                <span>=</span>
                <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
              </div>
              <Tips>hasil eliminasi pada kedua ruas</Tips>
            </div>
            <p className="">... (5)</p>
          </div>
        </div>
      </div>
      <p>3. Dari langkah sebelumnya, kita mendapatkan dua persamaan baru, yaitu persamaan (4) dan (5) yang menyisakan dua variabel y dan z. Kita akan melakukan eliminasi pada kedua persamaan tersebut.</p>
      <div className="row justify-content-center">
        <div className="col-3 text-end">
          <p>10y - 5z = 7.500.000</p>
          <div className="d-flex justify-content-end">
            <div className=" mb-2 text-center">
              <div className="p-2 border rounded-2 d-flex">
                <input className="border-0" type="text" placeholder="... ... ..." style={{ textAlign: 'center', width: '100px' }} />
                <span>=</span>
                <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
              </div>
              <Tips>persamaan (5)</Tips>
            </div>
          </div>
        </div>
        <div className="col-1 text-center">
          <p className="">| ×1 |</p>
          <p className="pt-2">| ×2 |</p>
        </div>
        <div className="col-6">
          <p>10y - 5z = 7.500.000</p>
          <div className="d-flex">
            <div className="d-flex mb-2 text-center border-bottom border-black position-relative tambah pb-3">
              <div className="p-2 border rounded-2 d-flex ">
                <input className="border-0" type="text" placeholder="... ... ..." style={{ textAlign: 'center', width: '100px' }} />
                <span>=</span>
                <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
              </div>
            </div>
          </div>
          <div className="d-flex mb-2 gap-2 align-items-center">
            <div className="text-center">
              <div className="p-2 border rounded-2 d-flex">
                <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '100px' }} />
                <span>=</span>
                <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
              </div>
            </div>
            <Tips>hasil dari eliminasi pada kedua ruas</Tips>
          </div>
          <div className="d-flex mb-2 gap-2 align-items-center">
            <div className="text-center">
              <div className="p-2 border rounded-2 d-flex">
                <span className="px-5">z</span>
                <span>=</span>
                <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
              </div>
            </div>
            <Tips>
              kedua ruas dibagi dengan angka yang <br />
              dapat menyisakan variabel z saja
            </Tips>
          </div>
        </div>
      </div>
      <p>4. Kita telah mengetahui besar nilai variabel z. Selanjutnya kita dapat mensubstitusikan nilai tersebut ke persamaan (4) atau (5) untuk mengetahui nilai variabel y.</p>
      <p>Persamaan (4)</p>
      <div className="d-flex align-items-center gap-2 mb-2">
        <p className="mb-0">10y - 5z = </p>
        <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
      </div>
      <p>Persamaan (5)</p>
      <div className="d-flex align-items-center gap-2 mb-2">
        <input className="form-control" type="text" placeholder="... ... ..." style={{ textAlign: 'center', width: '128px' }} />
        <p className="mb-0"> = </p>
        <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
      </div>
      <p>Nilai variabel z</p>
      <div className="d-flex align-items-center gap-2 mb-2">
        <p className="mb-0">z = </p>
        <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '128px' }} />
      </div>
      <p>Misal akan kita substitusikan ke persamaan (4), maka</p>
      <div className="row justify-content-center">
        <div className="col-2 text-end">
          <p>10y - 5z</p>
          <p>10y - 5(1.700.000)</p>
          <p>10y - 8.500.000</p>
          <p>10y</p>
          <p>10y</p>
          <p className="pt-2">y</p>
          <p className="pt-3">y</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p>=</p>
          <p>=</p>
          <p>=</p>
          <p>=</p>
          <p className="pt-2">=</p>
          <p className="pt-3">=</p>
        </div>
        <div className="col-2">
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
        <div className="col-3">
          <p className="fst-italic mb-4" style={{ fontSize: '12px' }}>
            persamaan (4)
          </p>
          <p className="fst-italic mb-4" style={{ fontSize: '12px' }}>
            substitusi nilai z ke persamaan (4)
          </p>
          <p className="fst-italic mb-4" style={{ fontSize: '12px' }}>
            hasil substitusi nilai z ke persamaan (4)
          </p>
          <p className="fst-italic mb-5" style={{ fontSize: '12px' }}>
            kedua ruas dijumlahkan dengan 8.500.000
          </p>
          <p className="fst-italic mb-4 mt-5 pt-4" style={{ fontSize: '12px' }}>
            kedua ruas dibagi dengan 10
          </p>
          <p className="fst-italic pt-2 " style={{ fontSize: '12px' }}>
            diketahui nilai variabel y
          </p>
        </div>
      </div>
      <p>5. Selanjutnya, kita mensubstitusikan lagi nilai variabel y dan z yang sudah diketahui ke persamaan (1), (2), atau (3). Misalnya ke persamaan (2), sehingga</p>
      <div className="row justify-content-center">
        <div className="col-4 text-end">
          <p>5x + 5y + 5z</p>
          <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
            <p className="mb-0">5x + </p>
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <span>5(</span>
              <input className="border-0" type="text" placeholder="............................" style={{ textAlign: 'center', width: '100px' }} />
              <span>) + 5(</span>
              <input className="border-0" type="text" placeholder="............................" style={{ textAlign: 'center', width: '100px' }} />
              <span>)</span>
            </div>
          </div>
          <p>5x + 8.000.000 + 8.500.000</p>
          <p>5x + 16.500.000</p>
          <p>5x</p>
          <p className="pt-2">5x</p>
          <p className="pt-2">x</p>
          <p className="">x</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p className="pt-1">=</p>
          <p className="">=</p>
          <p className="">=</p>
          <p className="">=</p>
          <p className="pt-2">=</p>
          <p className="pt-2">=</p>
          <p className="">=</p>
        </div>
        <div className="col-5">
          <div className="d-flex gap-5">
            <p>24.000.000</p>
            <Tips>persamaan (2)</Tips>
          </div>
          <p className="pt-1">24.000.000</p>
          <p className="">24.000.000</p>
          <p className="">24.000.000</p>
          <div className="d-flex align-items-center gap-2 mb-2">
            <p className="mb-0">24.000.000 - </p>
            <input className="form-control d-inline-block " type="text" placeholder="..." style={{ textAlign: 'center', width: '148px' }} />
            <Tips>kedua ruas dikurangi dengan 16.500.000</Tips>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <input className="form-control d-inline-block " type="text" placeholder="..." style={{ textAlign: 'center', width: '148px' }} />
            <Tips>hasil operasi pada ruas kanan</Tips>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <input className="form-control d-inline-block " type="text" placeholder="..." style={{ textAlign: 'center', width: '148px' }} />
            <Tips>kedua ruas dibagi dengan 5</Tips>
          </div>
          <p>1.500.000</p>
        </div>
      </div>
      <p>
        Setelah menyelesaikan langkah tersebut, kita tahu bahwa dengan menggunakan ketiga metode yang sudah kalian coba, mendapatkan hasil yang sama. Yaitu kita mengetahui besar nilai variabel x = 1.500.000, nilai variabel y = 1.600.000 dan
        nilai variabel z = 1.700.000.
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
        <NextButton link="/materi/penggunaan-spltv" />
      </div>
    </Main>
  );
}
