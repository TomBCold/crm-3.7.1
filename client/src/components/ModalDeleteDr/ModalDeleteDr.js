import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteDriverFromServer } from '../../redux/actions/driverAc';

export default function AlertDialog({ el }) {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteDriverFromServer(el.id));
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DeleteIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Удаление водителя
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            После того как вы его удалите, восстановить его не получится.
            Вы уверены, что хотите удалить водителя?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ОТМЕНИТЬ</Button>
          <Button onClick={deleteHandler} autoFocus>
            УДАЛИТЬ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
