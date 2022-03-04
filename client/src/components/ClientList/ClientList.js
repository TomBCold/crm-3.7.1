import React, { useState } from 'react';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import {
  Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Divider, InputBase, Paper, TextField
} from '@mui/material';
import ClientItem from '../ClientItem/ClientItem';
import { addClient } from '../../redux/actions/clientAC';

export default function ClientList() {
  const clients = useSelector((state) => state.clients);
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputInn, setInputInn] = useState('');
  const [inputTelephone, setInputTelephone] = useState('');
  const [input, setInput] = useState('');

  const filterClient = clients.filter((client) => client.name.toLowerCase()
    .includes(input.toLowerCase()) || client.telephone
    .includes(input) || client.inn
    .includes(input) || client.User.name.toLowerCase()
    .includes(input.toLowerCase()));
  const handleName = (e) => {
    setInputName(e.target.value);
  };
  const handleType = (e) => {
    setInputType(e.target.value);
  };
  const handleInn = (e) => {
    setInputInn(e.target.value);
  };
  const handleTelephone = (e) => {
    setInputTelephone(e.target.value);
  };
  const submitHandler = () => {
    dispatch(addClient({
      userId, inputName, inputType, inputInn, inputTelephone
    }));
    setInputName('');
    setInputType('');
    setInputInn('');
    setInputTelephone('');
    setIsOpen(false);
  };
  return (
    <div>
      <Button
        style={{
          color: '#FF5E5B', borderColor: '#FF5E5B', marginTop: 40, marginBottom: 30
        }}
        variant="outlined"
        onClick={() => setIsOpen(!isOpen)}
      >
        Добавить
      </Button>
      <Dialog open={isOpen}>
        <DialogTitle>Добавить клиента</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите данные
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleName}
            value={inputName}
            margin="dense"
            name="name"
            label="Имя"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            onChange={handleType}
            value={inputType}
            margin="dense"
            name="type"
            label="Тип клиента"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            onChange={handleInn}
            value={inputInn}
            name="inn"
            label="ИНН"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            onChange={handleTelephone}
            value={inputTelephone}
            name="telephone"
            label="Телефон"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ Color: '#FF5E5B' }}
            onClick={() => {
              submitHandler();
              setIsOpen(!isOpen);
            }}
          >
            Добавить
          </Button>
          <Button onClick={() => setIsOpen(!isOpen)}>Отмена</Button>
        </DialogActions>
      </Dialog>
      <List sx={{ width: '100%', bgcolor: '#F5F5F5', borderRadius: 8 }}>
        <Paper
          component="form"
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'search google maps' }}
            input={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        {filterClient.map((el) => (
          <ClientItem
            key={el.id}
            id={el.id}
            userName={el.User.name}
            name={el.name}
            inn={el.inn}
            telephone={el.telephone}
          />
        ))}
      </List>
    </div>
  );
}

// <Button variant="contained" onClick={() => setIsOpen(!isOpen)}>Добавить</Button>
// eslint-disable-next-line max-len
// <Modal isOpen={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//   <Box>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Добавить нового клиента
//     </Typography>
//     <Typography id="modal-modal-description" sx={{mt: 2}}>
//       <TextField
//         onChange={handleName}
//         value={inputName}
//         name="name"
//         id="filled-basic"
//         label="Имя"
//         variant="filled"
//       />
//       <TextField
//         onChange={handleType}
//         value={inputType}
//         name="type"
//         id="filled-basic"
//         label="Тип клиента"
//         variant="filled"
//       />
//       <TextField
//         onChange={handleInn}
//         value={inputInn}
//         name="inn"
//         id="filled-basic"
//         label="ИНН"
//         variant="filled"
//       />
//       <TextField
//         onChange={handleTelephone}
//         value={inputTelephone}
//         name="telephone"
//         id="filled-basic"
//         label="Телефон"
//         variant="filled"
//       />
//     </Typography>
//   </Box>
//   <Box>
//     <Button
//       variant="contained"
//       onClick={() => {
//         submitHandler();
//         setIsOpen(!isOpen);
//       }}
//     >
//       Добавить
//     </Button>
//     {' '}
//     <Button onClick={() => setIsOpen(!isOpen)}>
//       Закрыть
//     </Button>
//   </Box>
// </Modal>
