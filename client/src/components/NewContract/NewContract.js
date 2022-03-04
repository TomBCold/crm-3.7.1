import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import {
  FormControl, Grid, InputLabel, Select
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import style from '../ContractFull/ContractFull.module.css';
import { addContract } from '../../redux/actions/contractAC';

function NewContract({ handleClose }) {
  const drivers = useSelector((state) => state.drivers);
  const forwarders = useSelector((state) => state.forwarders);
  const clients = useSelector((state) => state.clients);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [clientId, setClientId] = useState(null);
  const [driverId, setDriverId] = useState(null);
  const [forwarderId, setForwarderId] = useState(null);
  const [imgClientInvoice, setImgClientInvoice] = useState({});
  const [sumClientInvoice, setSumClientInvoice] = useState(0);
  const [imgSupplierInvoice, setImgSupplierInvoice] = useState({});
  const [sumSupplierInvoice, setSumSupplierInvoice] = useState(0);
  const [imgUpd, setImgUpd] = useState({});
  const [sumUpd, setSumUpd] = useState(0);

  const submitHandler = () => {
    try {
      const contractForm = new FormData();
      contractForm.append('userId', user.id);
      contractForm.append('clientId', clientId);
      contractForm.append('driverId', driverId);
      contractForm.append('forwarderId', forwarderId);
      contractForm.append('imgClientInvoice', imgClientInvoice);
      contractForm.append('fileNameClientInvoice', imgClientInvoice.name);
      contractForm.append('sumClientInvoice', sumClientInvoice);
      // contractForm.append('supplierId', supplierId);
      contractForm.append('imgSupplierInvoice', imgSupplierInvoice);
      contractForm.append('fileNameSupplierInvoice', imgSupplierInvoice.name);
      contractForm.append('sumSupplierInvoice', sumSupplierInvoice);
      contractForm.append('urlUpd', imgUpd);
      contractForm.append('fileNameUpd', imgUpd.name);
      contractForm.append('sumUpd', sumUpd);
      dispatch(addContract(contractForm));
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <div style={{ marginTop: '8px' }}>
          <div>
            <FormControl sx={{ width: '200px', height: '100px' }} fullWidth>
              <InputLabel style={{ }} id="demo-simple-select-label">Клиент</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Clients"
                name="clientId"
                onChange={(e) => setClientId(e.target.value)}
              >
                {clients.map((el) => <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.invoice}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList style={{ color: '#FF5E5B' }} onChange={handleChange} aria-label="lab API tabs example">
                  <Tab style={{ color: '#FF5E5B', fontWeight: 'bolder' }} sx={{ fontSize: 10 }} label="Счет клиенту" value="1" />
                  <Tab style={{ color: '#FF5E5B', fontWeight: 'bolder' }} sx={{ fontSize: 10 }} label="Счет от поставщика" value="2" />
                  <Tab style={{ color: '#FF5E5B', fontWeight: 'bolder' }} sx={{ fontSize: 10 }} label="Отгрузочные документы" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">

                <Grid item md={6}>

                  <input
                    type="file"
                    onChange={(e) => setImgClientInvoice(e.target.files[0])}
                  />
                </Grid>
                <Grid item xs={6} style={{ marginTop: 20, marginBottom: 20 }}>
                  Введите сумму
                  <input
                    type="count"
                    plaseholder="Сумма"
                    onChange={(e) => setSumClientInvoice(e.target.value)}
                  />
                </Grid>

              </TabPanel>
              <TabPanel value="2">
                <Grid item md={6}>

                  <input
                    type="file"
                    onChange={(e) => setImgSupplierInvoice(e.target.files[0])}
                  />
                </Grid>
                <Grid item md={6} style={{ marginTop: 20, marginBottom: 20 }}>
                  Введите сумму
                  <input
                    type="count"
                    plaseholder="Сумма"
                    onChange={(e) => setSumSupplierInvoice(e.target.value)}
                  />
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <div className="mb-3">
                  <input
                    type="file"
                    onChange={(e) => setImgUpd(e.target.files[0])}
                  />
                  <input
                    type="count"
                    plaseholder="Сумма"
                    onChange={(e) => setSumUpd(e.target.value)}
                  />
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className={style.driver}>
          <div style={{ marginTop: '8px' }}>
            <div>
              <FormControl sx={{ width: '150px' }} fullWidth>
                <InputLabel id="demo-simple-select-label">Водитель</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Drivers"
                  name="driverId"
                  onChange={(e) => setDriverId(e.target.value)}
                >
                  {drivers.map((el) => <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
          </div>
          <div style={{ marginTop: '8px' }}>
            <div>
              <FormControl sx={{ width: '150px' }} fullWidth>
                <InputLabel id="demo-simple-select-label">Экспедитор</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Forwarders"
                  name="forwarderId"
                  onChange={(e) => setForwarderId(e.target.value)}
                >
                  {forwarders.map((el) => <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button style={{ color: '#FF5E5B', borderColor: '#FF5E5B', marginTop: '20' }} onClick={submitHandler}>
          Добавить
        </Button>
        <Button style={{ color: '#FF5E5B', borderColor: '#FF5E5B', marginTop: '20' }} onClick={handleClose}>
          Отменить
        </Button>
      </div>
    </div>
  );
}

export default NewContract;
