import React from 'react';
import style from './Loader.module.css';

function Loader() {
  return (
    <div className={style.container}>
      <img src="/1234.png" alt="crm" />
      <h1>Загрузка...</h1>
    </div>

  );
}

export default Loader;
