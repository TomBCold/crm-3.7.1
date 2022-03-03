import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import ContractString from '../ContractString/ContractString';

export default function ContractList() {
  const contracts = useSelector((state) => state.contracts);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>

        <List sx={{ width: '100%' }}>
          {contracts.map((el) => (
            <ContractString
              key={el.id}
              id={el.id}
              userName={el.User.name}
              driverName={el.Driver.name}
              clientId={el.Client.id}
              clientName={el.Client.name}
              forwarderName={el.Forwarder.name}
              statusApprove={el.statusApprove}
              statusExport={el.statusExport}
              statusPackage={el.statusPackage}
              statusPaymentClient={el.statusPaymentClient}
              statusPaymentSupplier={el.statusPaymentSupplier}
              statusSignature={el.statusSignature}
              clientInvoices={el.ClientInvoices}
              supplierInvoices={el.SupplierInvoices}
              upds={el.Upds}
            />
          ))}
        </List>
      </Box>
    </div>
  );
}
