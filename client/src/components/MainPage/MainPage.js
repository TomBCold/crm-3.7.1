import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Header from '../Header/Header';
import ContractList from '../ContractList/ContractList';
import ClientList from '../ClientList/ClientList';
import DeliveryList from '../DeliveryList/DeliveryList';
import { getClients } from '../../redux/actions/clientAC';
import { getContracts } from '../../redux/actions/contractAC';
import { checkUser } from '../../redux/actions/userAC';
import UserPage from '../UserPage/UserPage';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    dispatch(checkUser());
    dispatch(getContracts());
  }, []);

  return (
    <div>
      <Header />
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
