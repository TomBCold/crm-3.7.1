import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import ContractList from '../ContractList/ContractList';
import ClientList from '../ClientList/ClientList';
import DeliveryList from '../DeliveryList/DeliveryList';

function MainPage() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/contracts" element={<ContractList />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/delivery" element={<DeliveryList />} />
      </Routes>
    </div>
  );
}

export default MainPage;
