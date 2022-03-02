import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Status from '../Status/Status';
import style from './ContractFull.module.css';
// import StatusItem from '../StatusItem/StatusItem';

function ContractFull({ id, clientId }) {
  const [value, setValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [img, setImg] = useState({});
  const [sum, setSum] = useState(0);
  const uploadHandler = React.useCallback(async () => {
    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('clientId', clientId);
      formData.append('file', img);
      formData.append('fileName', img.name);
      formData.append('sum', sum);
      await axios.post('/invoice/clientInvoice', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      setImg({});
      setSum(0);
    } catch (err) {
      console.log(err);
    }
  });
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
                  <Tab label="Счета от клиентов" value="1" />
                  <Tab label="Счета от поставщиков" value="2" />
                  <Tab label="Отгрузочные документы" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                Счета от клиентов
                <div className="mb-3">
                  <input
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                  <input
                    type="count"
                    plaseholder="Сумма"
                    onChange={(e) => setSum(e.target.value)}
                  />
                </div>
                <Button onClick={uploadHandler}>
                  загрузить
                </Button>
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
