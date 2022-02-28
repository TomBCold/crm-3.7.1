import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material';
import React from 'react';

function ModalDr() {
  const [openModalDr, setOpenModalDr] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModalDr(true);
  };
  const handleCloseDr = () => {
    setOpenModalDr(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Добавить водителя
      </Button>
      <Dialog open={openModalDr} onClose={handleCloseDr}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите данные водителя
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Имя"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Тип машины"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Номер телефона"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDr}>Отмена</Button>
          <Button onClick={handleCloseDr}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ModalDr;
