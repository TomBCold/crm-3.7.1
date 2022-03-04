// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DescriptionIcon from '@mui/icons-material/Description';
import Status from '../Status/Status';
import style from './ContractFull.module.css';

function ContractFull({
  // eslint-disable-next-line no-unused-vars
  id, clientId, clientInvoices, supplierInvoices, driverName, forwarderName, upds, driveHandler,
  agreedHandler,
  clPayHandler,
  supplPayHandler,
  signaturePayHandler,
  agreed,
  drive,
  clPay,
  suppl,
  stutus,
  delta
}) {
  const [value, setValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.content}>
      <div className={style.status}>
        <Status
          id={id}
          driveHandler={driveHandler}
          agreedHandler={agreedHandler}
          clPayHandler={clPayHandler}
          supplPayHandler={supplPayHandler}
          signaturePayHandler={signaturePayHandler}
          agreed={agreed}
          drive={drive}
          clPay={clPay}
          suppl={suppl}
          stutus={stutus}
        />
      </div>
      <div className={style.info}>
        <div className={style.invoice}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value || 1}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Счета от клиентов" value="1" />
                  <Tab label="Счета от поставщиков" value="2" />
                  <Tab label="Отгрузочные документы" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <p>Счета от клиентов</p>
                {clientInvoices.map((el) => (
                  <DescriptionIcon
                    key={el}
                    sx={{ fontSize: 40 }}
                  />
                ))}
              </TabPanel>
              <TabPanel value="2">
                <p>Счета от поставщиков</p>
                {supplierInvoices.map((el) => (
                  <DescriptionIcon
                    key={el}
                    sx={{ fontSize: 40 }}
                  />
                ))}
              </TabPanel>
              <TabPanel value="3">Отгрузочные документы</TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className={style.driver}>
          <div>
            <div>Водитель</div>
            {driverName}
          </div>
          <div>
            <div>Экспедитор</div>
            <div>{forwarderName}</div>
          </div>
          <div>
            <div>
              Дельта
            </div>
            <div>{delta}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractFull;
