import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import ContractList from '../ContractList/ContractList';
import ClientList from '../ClientList/ClientList';
import DeliveryList from '../DeliveryList/DeliveryList';
import { getClients } from '../../redux/actions/clientAC';
import { getContracts } from '../../redux/actions/contractAC';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  });
  useEffect(() => {
    dispatch(getContracts());
  });
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ContractList />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/delivery" element={<DeliveryList />} />
      </Routes>
    </div>
  );
}

export default MainPage;

