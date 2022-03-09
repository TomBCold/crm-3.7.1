import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Header from '../Header/Header';
import ContractList from '../ContractList/ContractList';
import ClientList from '../ClientList/ClientList';
import DeliveryList from '../DeliveryList/DeliveryList';
import { getClients } from '../../redux/actions/clientAC';
import { getContracts } from '../../redux/actions/contractAC';
import { checkUser } from '../../redux/actions/userAC';
import UserPage from '../UserPage/UserPage';
import style from './MainPage.module.css';
import { getAllDriversFromServer } from '../../redux/actions/driverAc';
import { getAllForwardersFromServer } from '../../redux/actions/forwardersAc';
import DirectorPage from '../DirectorPage/DirectorPage';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    dispatch(checkUser());
    dispatch(getContracts());
    dispatch(getAllDriversFromServer());
    dispatch(getAllForwardersFromServer());
  }, []);

  const user = useSelector((state) => state.user);
  return (
    <div className={style.tools}>
      <Header />

      <Container maxWidth="xl">

        <Routes>
          <Route path="/" element={<ContractList />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/delivery" element={<DeliveryList />} />
          <Route path="/user" element={user.roleId === 1 ? <UserPage /> : <DirectorPage />} />
        </Routes>
      </Container>

    </div>
  );
}

export default MainPage;
