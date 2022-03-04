import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { putStatusContractServer } from '../../redux/actions/contractAC';
// import { useSelector } from 'react-redux';

function Status({ id }) {
  const contract = useSelector((state) => state.contracts);
  const index = contract.findIndex((el) => el.id === id);
  const [drive, setDrive] = useState(contract[index].statusExport);
  const [agreed, setAgreed] = useState(contract[index].statusApprove);
  const [clPay, setClPay] = useState(contract[index].statusPaymentClient);
  const [suppl, setSuppl] = useState(contract[index].statusPaymentSupplier);

  console.log(index);
  const [stutus, setStutus] = useState(contract[index].statusSignature);
  const dispatch = useDispatch();

  const driveHandler = () => {
    setDrive((prev) => !prev);
    const status = 'statusExport';
    dispatch(putStatusContractServer(id, !drive, status));
  };
  const agreedHandler = () => {
    setAgreed((prev) => !prev);
    const status = 'statusApprove';
    dispatch(putStatusContractServer(id, !agreed, status));
  };
  const clPayHandler = () => {
    setClPay((prev) => !prev);
    const status = 'statusPaymentClient';
    dispatch(putStatusContractServer(id, !clPay, status));
  };
  const supplPayHandler = () => {
    setSuppl((prev) => !prev);
    const status = 'statusPaymentSupplier';
    dispatch(putStatusContractServer(id, !suppl, status));
  };

  const signaturePayHandler = () => {
    const status = 'statusSignature';
    setStutus((prev) => !prev);
    dispatch(putStatusContractServer(id, !stutus, status));
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#F5F5F5' }}>
      <Button style={{ color: '#0D1B42' }} onClick={agreedHandler} variant="text">
        <ListItem>
          <ListItemAvatar>

            {agreed ? <SentimentSatisfiedAltIcon fontSize="large" color="success" /> : <SentimentVeryDissatisfiedIcon fontSize="large" />}

          </ListItemAvatar>
          {agreed ? <ListItemText style={{ color: '#0D1B42' }} primary="Согласовано" /> : <ListItemText primary="Не согласовано" />}
        </ListItem>
      </Button>
      <Button style={{ color: '#0D1B42' }} onClick={driveHandler} variant="text">
        <ListItem>
          <ListItemAvatar>

            {drive ? <LocalShippingIcon fontSize="large" color="success" /> : <LocalShippingIcon fontSize="large" />}
          </ListItemAvatar>
          {/* eslint-disable-next-line no-return-assign  */}
          {drive ? <ListItemText style={{ color: '#0D1B42' }} primary="Вывезли" /> : <ListItemText primary="Не вывезли" />}
        </ListItem>
      </Button>
      <Button style={{ color: '#0D1B42' }} onClick={clPayHandler} variant="text">
        <ListItem>
          <ListItemAvatar>

            {clPay ? <CreditScoreIcon fontSize="large" color="success" /> : <CreditCardIcon fontSize="large" />}

          </ListItemAvatar>
          {clPay ? <ListItemText style={{ color: '#0D1B42' }} primary="Клиент оплатил" /> : <ListItemText primary="Клиент не оплатил" />}
        </ListItem>
      </Button>
      <Button style={{ color: '#0D1B42' }} onClick={supplPayHandler} variant="text">
        <ListItem>
          <ListItemAvatar>

            {suppl ? <WorkOutlineIcon fontSize="large" color="success" /> : <WorkOffIcon fontSize="large" />}

          </ListItemAvatar>
          {suppl ? <ListItemText style={{ color: '#0D1B42' }} primary="Закупка оплачена" /> : <ListItemText primary="Закупка не оплачена" />}
        </ListItem>
      </Button>
      <Button style={{ color: '#0D1B42' }} onClick={signaturePayHandler} variant="text">
        <ListItem>
          <ListItemAvatar>

            {stutus ? <AssignmentTurnedInIcon fontSize="large" color="success" /> : <AssignmentIcon fontSize="large" />}

          </ListItemAvatar>
          {stutus ? <ListItemText style={{ color: '#0D1B42' }} primary="Документы подписаны" /> : <ListItemText primary="Документы не подписаны" />}
        </ListItem>
      </Button>
    </List>
  );
}

export default Status;
