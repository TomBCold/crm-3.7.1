import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { Modal } from 'reactstrap';
import { TextField } from '@mui/material';
import ClientItem from '../ClientItem/ClientItem';
import { addClient } from '../../redux/actions/clientAC';

export default function ClintList() {
  const clients = useSelector((state) => state.clients);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputInn, setInputInn] = useState('');
  const [inputTelephone, setInputTelephone] = useState('');
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
      inputName, inputType, inputInn, inputTelephone
    }));
    setInputName('');
    setInputType('');
    setInputInn('');
    setInputTelephone('');
    setIsOpen(false);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          <div>
            поиск
            <Button variant="contained" onClick={() => setIsOpen(!isOpen)}>Добавить</Button>
            <Modal isOpen={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Добавить нового клиента
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <TextField
                    onChange={handleName}
                    value={inputName}
                    name="name"
                    id="filled-basic"
                    label="Имя"
                    variant="filled"
                  />
                  <TextField
                    onChange={handleType}
                    value={inputType}
                    name="type"
                    id="filled-basic"
                    label="Тип клиента"
                    variant="filled"
                  />
                  <TextField
                    onChange={handleInn}
                    value={inputInn}
                    name="inn"
                    id="filled-basic"
                    label="ИНН"
                    variant="filled"
                  />
                  <TextField
                    onChange={handleTelephone}
                    value={inputTelephone}
                    name="telephone"
                    id="filled-basic"
                    label="Телефон"
                    variant="filled"
                  />
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    submitHandler();
                    setIsOpen(!isOpen);
                  }}
                >
                  Добавить
                </Button>
                {' '}
                <Button onClick={() => setIsOpen(!isOpen)}>
                  Закрыть
                </Button>
              </Box>
            </Modal>
          </div>

        </Typography>
        <List sx={{ width: '100%' }}>
          {clients.map((el) => (
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
      </Box>
    </div>
  );
}
