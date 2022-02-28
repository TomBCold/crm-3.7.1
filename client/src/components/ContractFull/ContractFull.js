import React from 'react';

import style from './ContractFull.module.css';
import Status from '../Status/Status';

function ContractFull() {
  return (
    <div className={style.content}>
      <div className={style.status}>
        <Status />
      </div>
      <div className={style.info}>
        <div>zxcvbnm,.</div>
        <div className={style.driver}>
          <div>Gbhsdf</div>
          <div>12312351</div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default ContractFull;
