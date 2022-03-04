import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addForwarderFromServer } from '../../redux/actions/forwardersAc';

function ModalFor() {
  const [openModalFor, setOpenModalFor] = React.useState(false);
  const [inputTelephoneFor, setInputTelephoneFor] = useState('');
  const [inputNameFor, setInputNameFor] = useState('');
  const dispatch = useDispatch();
  const handleClickOpenFor = () => {
    setOpenModalFor(true);
  };
  const handleCloseFor = () => {
    setOpenModalFor(false);
  };
  const handleNameFor = (e) => {
    setInputNameFor(e.target.value);
  };
  const handleTelephoneFor = (e) => {
    setInputTelephoneFor(e.target.value);
  };
  const handleChengeSubmit = () => {
    dispatch(addForwarderFromServer(inputNameFor, inputTelephoneFor));
    setInputNameFor('');
    setInputTelephoneFor('');
    setOpenModalFor(false);
  };
  return (
    <div>
      <Button
        style={{
          color: '#FF5E5B', borderColor: '#FF5E5B', marginTop: 20, marginBottom: 20
        }}
        variant="outlined"
        onClick={handleClickOpenFor}
      >
        Добавить экспедитора
      </Button>
      <Dialog open={openModalFor} onClose={handleCloseFor}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите данные экспедитора
          </DialogContentText>
          <TextField
            onChange={handleNameFor}
            value={inputNameFor}
            autoFocus
            margin="dense"
            name="name"
            label="Имя"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleTelephoneFor}
            value={inputTelephoneFor}
            autoFocus
            margin="dense"
            name="telephone"
            label="Номер телефона"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: '#FF5E5B' }} onClick={handleCloseFor}>Отмена</Button>
          <Button style={{ color: '#FF5E5B' }} onClick={handleChengeSubmit}>Добавить</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default ModalFor;
