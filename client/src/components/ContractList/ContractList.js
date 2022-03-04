import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Divider, InputBase, Paper } from '@mui/material';
import ContractString from '../ContractString/ContractString';

export default function ContractList() {
  const contracts = useSelector((state) => state.contracts);
  const [input, setInput] = useState('');
  const filterContracts = contracts.filter((contract) => contract.Client.name.toLowerCase()
    .includes(input.toLowerCase()));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
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
        </Typography>
        <List sx={{ width: '100%' }}>
          {filterContracts.map((el) => (
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
