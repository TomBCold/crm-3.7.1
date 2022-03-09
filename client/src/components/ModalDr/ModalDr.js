import {
  Button, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarTypesFromServer } from '../../redux/actions/carTypeAC';
import { addDriverFromServer } from '../../redux/actions/driverAc';

function ModalDr() {
  const [openModalDr, setOpenModalDr] = React.useState(false);
  const carType = useSelector((state) => state.carType);
  const [inputNameDr, setInputNameDr] = useState('');
  const [inputTelephoneDr, setInputTelephoneDr] = useState();
  const [inputTypeDr, setInputTypeDr] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCarTypesFromServer());
  }, []);
  const handleNameDr = (e) => {
    setInputNameDr(e.target.value);
  };
  const handleTelephoneDr = (e) => {
    setInputTelephoneDr(+e.target.value);
  };
  const handleTypeDr = (e) => {
    setInputTypeDr(e.target.value);
  };

  const handleClickOpen = () => {
    setOpenModalDr(true);
  };
  const handleCloseDr = () => {
    setOpenModalDr(false);
  };
  const handleAddDriver = () => {
    dispatch(addDriverFromServer(inputNameDr, inputTelephoneDr, inputTypeDr));
    setInputNameDr('');
    setInputTelephoneDr('');
    setOpenModalDr(false);
  };
  return (
    <>
      <Button
        style={{
          color: '#FF5E5B', borderColor: '#FF5E5B', marginTop: 20, marginBottom: 20
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Добавить водителя
      </Button>
      <Dialog open={openModalDr} onClose={handleCloseDr}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите данные водителя
          </DialogContentText>
          <TextField
            onChange={handleNameDr}
            value={inputNameDr}
            autoFocus
            margin="dense"
            name="name"
            label="Имя"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleTelephoneDr}
            value={inputTelephoneDr}
            autoFocus
            margin="dense"
            name="telephone"
            label="Номер телефона"
            type="numder"
            fullWidth
            variant="standard"
          />

          <FormControl fullWidth style={{ 'margin-top': '5%' }}>
            <InputLabel id="demo-simple-select-label">Car</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Car"
              name="carTypeId"
              defaultValue={1}
              onChange={handleTypeDr}
            >
              {carType.map((el) => <MenuItem key={el.id} value={el.id}>{el.title}</MenuItem>)}

            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>

          <Button style={{ color: '#FF5E5B' }} onClick={handleCloseDr}>Отмена</Button>
          <Button style={{ color: '#FF5E5B' }} onClick={handleAddDriver}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ModalDr;
