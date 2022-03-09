import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import {
  Divider, InputBase, Paper, Dialog
} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ContractString from '../ContractString/ContractString';
import NewContract from '../NewContract/NewContract';
import style from './ContractList.module.css';

export default function ContractList() {
  const contracts = useSelector((state) => state.contracts);
  const [input, setInput] = useState('');
  const filterContracts = contracts.filter((contract) => contract.Client.name.toLowerCase()
    .includes(input.toLowerCase()));
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Container style={{ bgcolor: '#F5F5F5' }}>
      <Box sx={{ flexGrow: 1, bgcolor: '#F5F5F5', borderRadius: 8 }}>
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
          <Button
            style={{
              color: '#FF5E5B', borderColor: '#FF5E5B', marginTop: 20
            }}
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            Добавить
          </Button>
          <Dialog open={open}>
            <NewContract handleClose={handleClose} />
          </Dialog>
        </Typography>
        <List sx={{ width: '100%' }}>
          <div className={style.stat}>
            <div className={style.first}>

              <div>Номер</div>
              <div>Дата</div>
              <div>Клиент</div>
            </div>
            <div className={style.status}><div>Статус</div></div>
            <div className={style.client}>
              <div>Клиент</div>
              <div>Поставщик</div>
              <div>Дельта</div>

            </div>
            <div className={style.menedjer}>Менеджер</div>
          </div>
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
              date={new Date(el.createdAt).toLocaleDateString()}
            />
          ))}
        </List>
      </Box>
    </Container>
  );
}
