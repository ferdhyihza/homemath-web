/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

export default function ModalBenarButton({ id, onButtonClick, children, className, jenis }) {
  const location = useLocation();
  const isLatsol = location.pathname.includes('/latihan-soal/');

  let item = 'buttonStatesTrue';
  if (isLatsol) item = 'buttonStatesTrueLatsol';

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Ambil data buttonStatesTrue dari localStorage saat komponen pertama kali dimuat
    const savedButtonStates = JSON.parse(localStorage.getItem(item)) || {};
    if (savedButtonStates[id]) {
      setIsClicked(true);
    }
  }, [id]);

  const handleClick = () => {
    setIsClicked(true);

    // Ambil data buttonStatesTrue dari localStorage, update sesuai id, lalu simpan kembali
    const updatedButtonStates = JSON.parse(localStorage.getItem(item)) || {};
    updatedButtonStates[id] = true;
    localStorage.setItem(item, JSON.stringify(updatedButtonStates));
    onButtonClick();
  };

  return (
    <>
      <button type="button" className={` ${isClicked ? 'bg-success-subtle border-success border disabled' : ''} ${className}`} data-bs-toggle="modal" data-bs-target={`#modalBenar${jenis}`} onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
