import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useDispatch } from 'react-redux';
import { delClient } from '../../redux/actions/clientAC';

function ClientItem({
  id, userName, name, inn, telephone
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(delClient(id));
  };
  return (
    <ListItem
      secondaryAction={(
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon onClick={() => setIsOpen(!isOpen)} />
          <Dialog
            open={isOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Удаление клиента
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                После того как вы его удалите, восстановить его не получится.
                Вы уверены, что хотите удалить клиента?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button style={{ color: '#FF5E5B' }} onClick={() => setIsOpen(!isOpen)}>Отменить</Button>
              <Button style={{ color: '#FF5E5B' }} onClick={deleteHandler} autoFocus>
                Удалить
              </Button>
            </DialogActions>
          </Dialog>
        </IconButton>
      )}
    >
      <ListItemText primary={id}>{id}</ListItemText>
      <ListItemText primary={name}>{name}</ListItemText>
      <ListItemText primary={inn}>{inn}</ListItemText>
      <ListItemText primary={telephone}>{telephone}</ListItemText>
      <ListItemText primary={userName}>{userName}</ListItemText>
    </ListItem>
  );
}

export default ClientItem;
