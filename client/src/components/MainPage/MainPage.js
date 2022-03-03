import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import ContractList from '../ContractList/ContractList';
import ClientList from '../ClientList/ClientList';
import DeliveryList from '../DeliveryList/DeliveryList';
import { getClients } from '../../redux/actions/clientAC';
import { getContracts } from '../../redux/actions/contractAC';
import { checkUser } from '../../redux/actions/userAC';
import UserPage from '../UserPage/UserPage';
import style from './MainPage.module.css';
import ChatPage from '../ChatPage/ChatPage';
import { getAllDriversFromServer } from '../../redux/actions/driverAc';
import { getAllForwardersFromServer } from '../../redux/actions/forwardersAc';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    dispatch(checkUser());
    dispatch(getContracts());
    dispatch(getAllDriversFromServer());
    dispatch(getAllForwardersFromServer());
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.tools}>
      <Header />
      <div className={style.center}>
        {' '}
        <Button onClick={() => setIsOpen((prev) => !prev)} variant="outlined">Открыть чат</Button>
        {isOpen ? <ChatPage /> : null}
      </div>

      <Container maxWidth="xl">

        <Routes>
          <Route path="/" element={<ContractList />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/delivery" element={<DeliveryList />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Container>

    </div>
  );
}

export default MainPage;
