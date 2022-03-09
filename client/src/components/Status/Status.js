/* eslint-disable no-unused-vars */
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
import { useSelector } from 'react-redux';

function Status({
  id, driveHandler,
  agreedHandler,
  clPayHandler,
  supplPayHandler,
  signaturePayHandler,
  agreed,
  drive,
  clPay,
  suppl,
  stutus
}) {
  const user = useSelector((state) => state.user);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#F5F5F5' }}>
      <Button style={{ color: '#0D1B42' }} onClick={user['Role.title'] === 'Director' ? agreedHandler : () => 1} variant="text">
        <ListItem>
          <ListItemAvatar>

            {agreed ? <SentimentSatisfiedAltIcon fontSize="large" color="success" />
              : <SentimentVeryDissatisfiedIcon fontSize="large" />}

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
      <Button style={{ color: '#0D1B42' }} onClick={user['Role.title'] === 'Director' ? clPayHandler : () => 1} variant="text">
        <ListItem>
          <ListItemAvatar>

            {clPay ? <CreditScoreIcon fontSize="large" color="success" /> : <CreditCardIcon fontSize="large" />}

          </ListItemAvatar>
          {clPay ? <ListItemText style={{ color: '#0D1B42' }} primary="Клиент оплатил" /> : <ListItemText primary="Клиент не оплатил" />}
        </ListItem>
      </Button>
      <Button style={{ color: '#0D1B42' }} onClick={user['Role.title'] === 'Director' ? supplPayHandler : () => 1} variant="text">
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
