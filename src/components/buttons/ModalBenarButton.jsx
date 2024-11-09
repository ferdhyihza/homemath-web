/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

export default function ModalBenarButton({ id, onButtonClick, children, className }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Ambil data buttonStatesTrue dari localStorage saat komponen pertama kali dimuat
    const savedButtonStates = JSON.parse(localStorage.getItem('buttonStatesTrue')) || {};
    if (savedButtonStates[id]) {
      setIsClicked(true);
    }
  }, [id]);

  const handleClick = () => {
    setIsClicked(true);

    // Ambil data buttonStatesTrue dari localStorage, update sesuai id, lalu simpan kembali
    const updatedButtonStates = JSON.parse(localStorage.getItem('buttonStatesTrue')) || {};
    updatedButtonStates[id] = true;
    localStorage.setItem('buttonStatesTrue', JSON.stringify(updatedButtonStates));
    onButtonClick();
  };

  return (
    <>
      <button type="button" className={` ${isClicked ? 'bg-success-subtle border-success border disabled' : ''} ${className}`} data-bs-toggle="modal" data-bs-target="#modalBenar" onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
