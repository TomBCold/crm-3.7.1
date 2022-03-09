import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRolesFromServer } from '../../redux/actions/rolesAc';
import { addUserThunk } from '../../redux/actions/usersAllAC';

function AddUser() {
  const [openModalDr, setOpenModalDr] = React.useState(false);
  const roles = useSelector((state) => state.roles);
  const [inputName, setInputName] = useState('');
  const [inputTelephone, setInputTelephone] = useState();
  const [inputRole, setInputRole] = useState(1);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRolesFromServer());
  }, []);
  const handleName = (e) => {
    setInputName(e.target.value);
  };
  const handleTelephone = (e) => {
    setInputTelephone(+e.target.value);
  };
  const handleEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setInputPassword(e.target.value);
  };
  const handleRole = (e) => {
    setInputRole(e.target.value);
  };

  const handleClickOpen = () => {
    setOpenModalDr(true);
  };
  const handleCloseDr = () => {
    setOpenModalDr(false);
  };
  const handleAddDriver = () => {
    dispatch(
      addUserThunk(
        inputName,
        inputTelephone,
        inputRole,
        inputEmail,
        inputPassword
      )
    );
    setInputName('');
    setInputTelephone('');
    setOpenModalDr(false);
    setInputPassword('');
    setInputEmail('');
  };
  return (
    <>
      <Button style={{ color: '#FF5E5B', borderColor: '#FF5E5B' }} variant="outlined" onClick={handleClickOpen}>
        Добавить сотрудника
      </Button>
      <Dialog open={openModalDr} onClose={handleCloseDr}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Введите сотрудника</DialogContentText>
          <TextField
            onChange={handleName}
            value={inputName}
            autoFocus
            margin="dense"
            name="name"
            label="Имя"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleTelephone}
            value={inputTelephone}
            autoFocus
            margin="dense"
            name="telephone"
            label="Номер телефона"
            type="numder"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleEmail}
            value={inputEmail}
            autoFocus
            margin="dense"
            name="email"
            label="email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handlePassword}
            value={inputPassword}
            autoFocus
            margin="dense"
            name="password"
            label="Пороль"
            type="text"
            fullWidth
            variant="standard"
          />

          <FormControl fullWidth style={{ 'margin-top': '5%' }}>
            <InputLabel id="demo-simple-select-label">Должность</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="role"
              name="roleId"
              defaultValue={1}
              onChange={handleRole}
            >
              {roles.map((el) => (
                <MenuItem key={el.id} value={el.id}>
                  {el.title}
                </MenuItem>
              ))}
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

export default AddUser;
