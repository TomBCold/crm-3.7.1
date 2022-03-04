// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Status from '../Status/Status';
import style from './ContractFull.module.css';

function ContractFull({
  // eslint-disable-next-line no-unused-vars
  id, clientId, clientInvoices, supplierInvoices, driverName, forwarderName, upds
}) {
  const [value, setValue] = React.useState(null);
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
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab style={{ color: '#FF5E5B' }} label="Счета от клиентов" value="1" />
                  <Tab style={{ color: '#FF5E5B' }} label="Счета от поставщиков" value="2" />
                  <Tab style={{ color: '#FF5E5B' }} label="Отгрузочные документы" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <p>Счета от клиентов</p>

                {/* <div className="mb-3">

                  <input
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                  <input
                    type="count"
                    plaseholder="Сумма"
                    onChange={(e) => setSum(e.target.value)}
                  />
                </div> */}
                <DriveFolderUploadIcon sx={{ fontSize: 70 }} style={{ color: '#FF5E5B' }} onClick={handleOpen} />
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={s}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Добавьте счета
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="mb-3 ">

                          <input
                            type="file"
                            onChange={(e) => setImg(e.target.files[0])}
                          />
                          Введите Сумму
                          <input
                            type="count"
                            plaseholder="Сумма"
                            onChange={(e) => setSum(e.target.value)}
                          />
                        </div>
                        <Button onClick={uploadHandler}>
                          загрузить
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </TabPanel>
              <TabPanel value="2">Счета от поставщиков</TabPanel>
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
