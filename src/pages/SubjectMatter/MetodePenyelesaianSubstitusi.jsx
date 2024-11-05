import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';

export default function MetodePenyelesaianSubstitusi() {
  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">
        Metode Penyelesaian SPLTV <span className="text-muted fw-medium ms-2 fs-5">Metode Substitusi</span>
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
      <div className="row">
        <div className="col-5 text-end">
          <p>5x + 5y + 5z</p>
          <p>5x</p>
          <div className="mt-2">
            <p className=" mb-0 d-inline-block border-bottom border-black position-relative x">5</p>
            <p className="">5</p>
          </div>
          <p>x</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p>=</p>
          <p className="mt-4">=</p>
          <p className="mt-4 pt-2">=</p>
        </div>
        <div className="col-6">
          <p>24.000.000</p>
          <p>24.000.000 - 5y - 5z</p>
          <div className="d-inline-block">
            <p className="mb-0 d-inline-block border-bottom border-black position-relative ">24.000.000 - 5y - 5z</p>
            <p className="text-center">5</p>
          </div>
          <p>4.800.000 - y - z &ensp; .........(4)</p>
        </div>
      </div>
      <p>2. Variabel x telah kita nyatakan ke dalam variabel lainnya, menjadi persamaan (4). Langkah selanjutnya adalah kita substitusi persamaan (4) ke dua persamaan lainnya, sehingga.</p>
      <p>
        <i className="text-muted">(substitusi persamaan (4) ke persamaan (1))</i>
      </p>
      <div className="row">
        <div className="col-5 text-end">
          <p>4x + 6y + 3z</p>
          <p>4(4.800.000 - y - z) + 6y + 3z</p>
          <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
            <p className="mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil perkalian 4 dengan 4.800.000
            </p>
            <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            <p className="mb-0">- 4y - 4z + 6y + 3z</p>
          </div>
          <p className="pt-1">- 4y + 6y - 4z + 3z</p>
          <p className="pt-2">2y - z</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p>=</p>
          <p className="pt-2">=</p>
          <p className="">=</p>
          <p className="pt-2">=</p>
        </div>
        <div className="col-6">
          <p>20.700.000</p>
          <p>20.700.000</p>
          <p className="pt-2">20.700.000</p>
          <div className="d-flex gap-2 align-items-center">
            <p className="mb-0">20.700.000 - </p>
            <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dikurangi hasil perkalian 4 dengan 4.800.000
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center mt-2">
            <div>
              <input className="form-control w-100" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            ........... (5)
          </div>
          <p className="d-inline-block ms-2" style={{ textAlign: 'center', fontSize: '12px' }}>
            hasil operasi pada ruas kanan
          </p>
        </div>
      </div>
      <p>
        <i className="text-muted">(substitusi persamaan (4) ke persamaan (3))</i>
      </p>
      <div className="row">
        <div className="col-5 text-end">
          <p>2x + 3y + 7z</p>
          <p>2(4.800.000 - y - z) + 3y + 7z</p>
          <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
            <p className="mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil perkalian 2 dengan 4.800.000
            </p>
            <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            <p className="mb-0">- 2y - 2z + 3y + 7z</p>
          </div>
          <p className="pt-1">- 2y + 3y - 2z + 7z</p>
          <p className="pt-2">y + 5z</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p>=</p>
          <p className="pt-2">=</p>
          <p className="">=</p>
          <p className="pt-2">=</p>
        </div>
        <div className="col-6">
          <p>19.700.000</p>
          <p>19.700.000</p>
          <p className="pt-2">19.700.000</p>
          <div className="d-flex gap-2 align-items-center">
            <p className="mb-0">19.700.000 - </p>
            <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dikurangi hasil perkalian 2 dengan 4.800.000
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center mt-2">
            <div>
              <input className="form-control w-100" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            ........... (6)
          </div>
          <p className="d-inline-block ms-2" style={{ textAlign: 'center', fontSize: '12px' }}>
            hasil operasi pada ruas kanan
          </p>
        </div>
      </div>
      <p>
        3. Dari langkah sebelumnya, kita mendapatkan persamaan (5) dan (6). Selanjutnya, yang perlu kita lakukan adalah mengubah salah satu persamaan tersebut menjadi sebuah fungsi. Misalnya kita akan mengubah persamaan (5) ke dalam fungsi
        y. Sehingga
      </p>
      <div className="row">
        <div className="col-3 text-end">
          <p>2y - z</p>
          <p className="pt-2">- z</p>
          <p className="pt-2">z</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p className="pt-2">=</p>
          <p className="pt-2">=</p>
        </div>
        <div className="col-8">
          <div className="d-flex gap-2 align-items-center">
            <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              konstanta persamaan (5)
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center pt-2">
            <div className="text-center px-5 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
              <span>- 2y</span>
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              masukkan konstanta persamaan (5) kemudian kedua ruas dikurangi dengan 2y
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center mt-2">
            <div className="text-center px-5 p-1 border border rounded-2 d-flex">
              <span>2y - </span>
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            ........... (6)
          </div>
          <p className="d-inline-block ms-2" style={{ textAlign: 'center', fontSize: '12px' }}>
            masukkan konstanta persamaan (5) kemudian kedua ruas dibagi dengan -1
          </p>
        </div>
      </div>
      <p>4. Selanjutnya, kita dapat menyubtitusikan fungsi y atau persamaan (7) ke dalam persamaan (6)</p>
      <p>
        Persamaan (6) <br />
        y + 5z = 10.100.000 <br />
        Persamaan (7) <br />z = 2y - 1.500.000
      </p>
      <p>sehingga,</p>
      <div className="row">
        <div className="col-5 text-end">
          <p>y + 5z</p>
          <p>y + 5(2y - 1.500.000)</p>
          <div className="d-flex gap-2 align-items-center justify-content-end">
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil perkalian 5 dengan 1.500.000
            </p>
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <span>y + 10y - </span>
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
          </div>
          <p className="pt-3">11y</p>
          <p className="pt-1">11y</p>
          <p className="pt-1">y</p>
          <p className="pt-1">y</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p>=</p>
          <p className="pt-2">=</p>
          <p className="">=</p>
          <p className="pt-2">=</p>
          <p className="pt-1">=</p>
          <p className="pt-1">=</p>
        </div>
        <div className="col-6">
          <p>10.100.000</p>
          <p>10.100.000</p>
          <p className="pt-2">10.100.000</p>
          <div className="d-flex gap-2 align-items-center mb-2">
            <p className="mb-0">10.100.000 + </p>
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dijumlah dengan hasil <br />
              perkalian 5 dengan 1.500.000
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center mb-2">
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              10.100.000 dikurangi dengan <br />
              hasil operasi sebelumnya
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center mb-2">
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
              <span>/11</span>
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dibagi dengan 11
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              didapatkan nilai variabel y
            </p>
          </div>
        </div>
      </div>
      <p>5. Setelah kita mengetahui besar nilai variabel y, kita dapat mensubstitusikannya ke dalam persamaan (5), (6) atau (7) untuk mengetahui besar nilai variabel z. Misalnya substitusi ke persamaan (5)</p>
      <p>
        Persamaan (5) <br />
        2y - z = 1.500.000
      </p>
      <p>sehingga, </p>
      <div className="row">
        <div className="col-5 text-end">
          <p>2y - z</p>
          <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              masukkan nilai variabel y
            </p>
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <span>2(</span>
              <input className="border-0" type="text" placeholder="...................................." style={{ textAlign: 'center', width: '124px' }} />
              <span>)</span>
            </div>
            <p className="mb-0">-z</p>
          </div>
          <div className="d-flex gap-2 align-items-center justify-content-end">
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil perkalian 2 dengan <br />
              nilai variabel y
            </p>
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="mb-0">-z</p>
          </div>
          <p className="pt-3">-z</p>
          <p className="pt-1">-z</p>
          <p className="pt-1">z</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p className="pt-2">=</p>
          <p className="">=</p>
          <p className="pt-2">=</p>
          <p className="pt-1">=</p>
          <p className="pt-1">=</p>
        </div>
        <div className="col-6">
          <p>1.500.000</p>
          <p className="pt-2">1.500.000</p>
          <p className="">1.500.000</p>
          <div className="d-flex gap-2 align-items-center mb-2">
            <p className="mb-0">1.500.000 - </p>
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dikurangi dengan hasil <br />
              perkalian 2 dengan nilai variabel y
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center mb-2">
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dibagi dengan -1
            </p>
          </div>
        </div>
      </div>
      <p>
        6. Dari langkah-langkah di atas, kita telah mengetahui besar nilai variabel y dan z. Untuk mengetahui besar nilai variabel x, langkah terakhir adalah menyubstitusikan nilai variabel y dan z ke persamaan (1), (2), atau (3). Misalnya
        kita akan substitusi ke persamaan (2)
      </p>
      <p>
        Persamaan (2) <br />
        5x + 5y + 5z = 24.000.000
      </p>
      <p>sehingga,</p>
      <div className="row">
        <div className="col-5 text-end">
          <p>5x + 5y + 5z</p>
          <p>5x + 5(1.600.000) + 5(1.700.000)</p>
          <p>5x + 8.000.000 + 8.500.000</p>
          <p>5x + 16.500.000</p>
          <p>5x</p>
          <p className="pt-1">5x</p>
          <p className="pt-1">x</p>
        </div>
        <div className="col-1 text-center">
          <p>=</p>
          <p>=</p>
          <p>=</p>
          <p>=</p>
          <p>=</p>
          <p className="pt-1">=</p>
          <p className="pt-1">=</p>
        </div>
        <div className="col-6">
          <p>24.000.000</p>
          <p>24.000.000</p>
          <p>24.000.000</p>
          <p>24.000.000</p>
          <p>24.000.000 - 16.500.000</p>
          <div className="d-flex gap-2 align-items-center mb-2">
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              hasil dari 24.000.000 dikurangi <br />
              dengan 16.500.000
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center mb-2">
            <div className="text-center px-3 p-1 border border rounded-2 d-flex">
              <input className="border-0" type="text" placeholder="..." style={{ textAlign: 'center', width: '124px' }} />
            </div>
            <p className="d-inline-block mb-0" style={{ textAlign: 'center', fontSize: '12px' }}>
              kedua ruas dibagi dengan 5
            </p>
          </div>
        </div>
      </div>
      <p>Dari seluruh langkah yang telah kita kerjakan tersebut, kita telah mengetahui besar nilai variabel x = 1.500.000, nilai variabel y = 1.600.000 dan nilai variabel z = 1.700.000.</p>
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
        <NextButton link="/materi/metode-penyelesaian-spltv/campuran" />
      </div>
    </Main>
  );
}
