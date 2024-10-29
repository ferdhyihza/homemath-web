import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';

export default function UnsurPadaSPLTV() {
  return (
    <Main>
      <h3 className="fw-bold pb-3">Unsur pada SPLTV</h3>
      <p>
        Mari kita ingat sejenak, unsur-unsur yang terdapat pada sistem persamaan linear. <br />
        <b>Masih ingatkah unsur apa saja yang ada pada persamaan linear?</b>
      </p>
      <p>Jika sudah lupa, coba simak penjelasan berikut.</p>
      <p>
        <b>Variabel</b> <br />
        Merupakan simbol atau huruf suatu nilai yang besarnya belum diketahui secara pasti. Variabel biasanya dilambangkan dengan huruf x,y,z atau lain sebagainya. Diberikan 2x+3y=7. Pada persamaan tersebut, yang merupakan variabel adalah x
        dan y.
      </p>
      <p>
        <b>Koefisien</b> <br />
        Koefisien merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel. Contohnya 2x+3y=7. Pada contoh persamaan tersebut, yang merupakan koefisien adalah 2 dan 3.
      </p>
      <p>
        <b>Konstanta</b> <br />
        Konstanta merupakan nilai tetap atau konstan yang tidak diikuti oleh variabel di belakangnya. Pada persamaan 2x+3y=7, angka 7 merupakan konstanta dari persamaan tersebut.
      </p>
      <p>Untuk membantu kalian mengingat Kembali unsur-unsur di atas, coba lakukan kegiatan berikut ini.</p>
      <p>
        Diberikan persamaan: <br />
        2x+3y=7 … (1) <br />
        5x+y=11 … (2) <br />
        Mana saja yang merupakan variabel, konstanta, dan koefisien?
      </p>
      <div className="bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center">
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan variabel?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center">
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan konstanta?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center">
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan koefisien?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center py-4">
        <NextButton link="/materi/bentuk-umum-spltv" />
      </div>
    </Main>
  );
}
