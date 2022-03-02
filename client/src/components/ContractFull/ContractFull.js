import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Button from '@mui/material/Button';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TabPanel from '@mui/lab/TabPanel';
// import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import Status from '../Status/Status';
import style from './ContractFull.module.css';

function ContractFull({
  // eslint-disable-next-line no-unused-vars
  id, clientId, clientInvoices, supplierInvoices, driverName, forwarderName, upds
}) {
  const [value, setValue] = React.useState(null);
  // const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [img, setImg] = useState({});
  const [sum, setSum] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
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
      handleClose();
    } catch (err) {
      console.log(err);
    }
  });
  const handleOpen = () => setOpen(true);

  const s = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  return (
    <div className={style.content}>
      <div className={style.status}>
        <Status />
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
                <DriveFolderUploadIcon sx={{ fontSize: 70 }} color="primary" onClick={handleOpen} />
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
