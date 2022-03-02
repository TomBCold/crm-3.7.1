import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ContractString from '../ContractString/ContractString';
import NewContract from '../NewContract/NewContract';

export default function ContractList() {
  const contracts = useSelector((state) => state.contracts);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Добавить
          </Button>
          <Modal open={open} onClose={handleClose}>
            {' '}
            <NewContract />
          </Modal>
        </Typography>
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
