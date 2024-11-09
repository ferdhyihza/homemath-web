import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';

export default function BentukUmumSPLTV2() {
  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">Bentuk Umum SPLTV</h3>
      <p className="fw-bold">
        Ingatkah teman-teman pada cerita pada awal pembelajaran yang telah kalian pelajari kali ini? <br />
        Apakah dapat kita selesaikan dengan SPLTV?
      </p>
      <p>
        Setelah memahami bentuk umum SPLTV, teman-teman dapat mengubah cerita tersebut ke dalam bentuk SPLTV untuk diselesaikan. <br />
        Yuk kita coba mengubahnya ke dalam bentuk SPLTV
      </p>
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
        <input className="form-control border-green " type="text" placeholder="..." style={{ textAlign: 'center', width: '50px' }} />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
          Harga satu gulung kain <br />
          warna putih
        </p>
      </div>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '50px' }} />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
          Harga satu gulung kain <br />
          warna abu-abu
        </p>
      </div>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input className="form-control" type="text" placeholder="..." style={{ textAlign: 'center', width: '50px' }} />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
          Harga satu gulung kain <br />
          warna cokelat
        </p>
      </div>
      <p>
        Selanjutnya, kita dapat menentukan besaran koefisien dan konstanta untuk melengkapi persamaan tersebut. <br />
        Konveksi Roshima menghabiskan Rp20.700.000 untuk membeli: <b>(20.700.000 merupakan konstanta) </b> <br />• 4 gulung kain warna putih <b>(4 merupakan koefisien)</b> <br />• 6 gulung kain warna abu-abu <b>(6 merupakan koefisien)</b>
        <br />• 3 gulung kain warna cokelat <b>(3 merupakan koefisien)</b> <br />
        Sedangkan SM Bordir menghabiskan Rp24.000.000 untuk membeli: <b>(24.000.000 merupakan konstanta)</b> <br />• 5 gulung kain warna putih <b>(5 merupakan koefisien)</b> <br />• 5 gulung kain warna abu-abu <b>(5 merupakan koefisien)</b>{' '}
        <br />• 5 gulung kain warna cokelat <b>(5 merupakan koefisien)</b> <br />
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
          <div className="text-center p-2 border border-2 border-blue rounded-2">
            <input className="border-0 w-100 fs-5" type="text" placeholder="..." style={{ textAlign: 'center' }} />
          </div>
          <Tips>isikan konstanta yang diketahui</Tips>
        </div>
      </div>

      <p className="text-center mt-4 mb-1">Misalkan uang yang dihabiskan oleh konveksi SM Bordir menjadi persamaan (3), maka</p>
      <div className="row justify-content-center align-items-start mb-4">
        <div className="col-3 px-0 text-center ">
          <div className="d-flex p-2 border border-2 border-blue rounded-2 fs-5 justify-content-center">
            <input className="border-0 fs-5 " type="text" placeholder="..." style={{ textAlign: 'center', width: '24px' }} />
            <span>x + 3y +</span>
            <input className="border-0 fs-5 " type="text" placeholder="..." style={{ textAlign: 'center', width: '24px' }} />
            <span>z</span>
          </div>
          <Tips>isikan koefisien yang diketahui</Tips>
        </div>
        <div className="col-1 text-center">
          <p className="bg-blue-subtle d-inline-block py-1 px-2 rounded-2 mb-0 mt-2">=</p>
        </div>
        <div className="col-3 px-0">
          <div className="text-center p-2 border border-2 border-blue rounded-2">
            <input className="border-0 w-100 fs-5" type="text" placeholder="..." style={{ textAlign: 'center' }} />
          </div>
          <Tips>isikan konstanta yang diketahui</Tips>
        </div>
      </div>
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

      <div className="d-flex justify-content-center py-4">
        <NextButton link="/materi" />
      </div>
    </Main>
  );
}
