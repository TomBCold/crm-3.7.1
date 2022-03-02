/* eslint-disable max-len */
import React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { useSelector } from 'react-redux';
import Status from '../Status/Status';
import style from './ContractFull.module.css';
// import StatusItem from '../StatusItem/StatusItem';

function ContractFull({ id }) {
  const [value, setValue] = React.useState('1');
  // const contract = useSelector((state) => state.contracts);
  // const statusArr = Object.entries(contract.find((el) => el.id === id)).filter((el2) => el2[0] === 'statusApprove' || el2[0] === 'statusExport' || el2[0] === 'statusPackage' || el2[0] === 'statusPaymentClient' || el2[0] === 'statusPaymentSupplier' || el2[0] === 'statusSignature');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.content}>
      <div className={style.status}>
        <Status id={id} />
      </div>
      <div className={style.info}>
        <div className={style.invoice}>
          {/* <div className={style.invoiceItem}>
            Счтеа от клиентов
          </div>
          <div className={style.invoiceItem}>
            Счтеа от поставщиков
          </div>
          <div className={style.invoiceItem}>
            Отгрузочные документы
          </div> */}
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Счтеа от клиентов" value="1" />
                  <Tab label="Счтеа от поставщиков" value="2" />
                  <Tab label="Отгрузочные документы" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">Счтеа от клиентов</TabPanel>
              <TabPanel value="2">Счтеа от поставщиков</TabPanel>
              <TabPanel value="3">Отгрузочные документы</TabPanel>
            </TabContext>
          </Box>

        </div>
        <div className={style.driver}>
          <div>Водитель</div>
          <div>Экспедитор</div>
          <div>
            Дельта
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractFull;
