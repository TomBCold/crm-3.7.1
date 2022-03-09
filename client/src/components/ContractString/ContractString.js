/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { delContract, putStatusContractServer } from '../../redux/actions/contractAC';
import ContractFull from '../ContractFull/ContractFull';
import style from './ContractString.module.css';

function ContractString(
  {
    id,
    clientName,
    clientId,
    userName,
    driverName,
    forwarderName,
    clientInvoices,
    supplierInvoices,
    upds,
    date
  }
) {
  const clientInvoicesSum = clientInvoices.reduce((sum, cur) => sum + cur.sum, 0);
  const supplierInvoicesSum = supplierInvoices.reduce((sum, cur) => sum + cur.sum, 0);
  // const updsSum = upds.reduce((sum, cur) => sum + cur.sum, 0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(delContract(id));
  };
  const delta = clientInvoicesSum - supplierInvoicesSum;
  //= ================================================

  const contract = useSelector((state) => state.contracts);
  const index = contract.findIndex((el) => el.id === id);
  const [drive, setDrive] = useState(contract[index].statusExport);
  const [agreed, setAgreed] = useState(contract[index].statusApprove);
  const [clPay, setClPay] = useState(contract[index].statusPaymentClient);
  const [suppl, setSuppl] = useState(contract[index].statusPaymentSupplier);

  const [stutus, setStutus] = useState(contract[index].statusSignature);
  // const dispatch = useDispatch();

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

  //= ===============================================

  return (
    <>
      <ListItem
        secondaryAction={(
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => setIsOpenDel(!isOpenDel)} />
            <Dialog
              open={isOpenDel}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Удаление сделки
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  После того как вы ее удалите, восстановить ее не получится.
                  Вы уверены, что хотите удалить сделку?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setIsOpenDel(!isOpenDel)}>Отменить</Button>
                <Button onClick={deleteHandler} autoFocus>
                  Удалить
                </Button>
              </DialogActions>
            </Dialog>
          </IconButton>
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={style.container} onClick={() => setIsOpen((prev) => !prev)}>
          <ListItemAvatar>
            <Avatar><FolderIcon /></Avatar>
          </ListItemAvatar>
          <ListItemText primary={id} className={style.id}>{id}</ListItemText>
          <ListItemText primary={date}>{date}</ListItemText>
          <ListItemText primary={clientName} className={style.name}>{clientName}</ListItemText>
          <div className={style.iconStat}>

            <ListItemText>
              {agreed ? <SentimentSatisfiedAltIcon fontSize="large" color="success" />
                : <SentimentVeryDissatisfiedIcon fontSize="large" />}

            </ListItemText>
            <ListItemText>{drive ? <LocalShippingIcon fontSize="large" color="success" /> : <LocalShippingIcon fontSize="large" />}</ListItemText>
            <ListItemText>{clPay ? <CreditScoreIcon fontSize="large" color="success" /> : <CreditCardIcon fontSize="large" />}</ListItemText>
            <ListItemText>{suppl ? <WorkOutlineIcon fontSize="large" color="success" /> : <WorkOffIcon fontSize="large" />}</ListItemText>
            <ListItemText>{stutus ? <AssignmentTurnedInIcon fontSize="large" color="success" /> : <AssignmentIcon fontSize="large" />}</ListItemText>
          </div>
          <ListItemText />
          <div className={style.sum}>

            <ListItemText primary={clientInvoicesSum}>{clientInvoicesSum}</ListItemText>
            <ListItemText primary={supplierInvoicesSum}>{supplierInvoicesSum}</ListItemText>
            <ListItemText primary={delta}>{delta}</ListItemText>
          </div>
          <ListItemText primary={userName}>{userName}</ListItemText>
        </div>
      </ListItem>
      <div className={isOpen ? style.isOpen : style.isDisable}>
        <ContractFull
          key={id}
          id={id}
          clientId={clientId}
          clientInvoices={clientInvoices}
          supplierInvoices={supplierInvoices}
          driverName={driverName}
          forwarderName={forwarderName}
          upds={upds}
          driveHandler={driveHandler}
          agreedHandler={agreedHandler}
          clPayHandler={clPayHandler}
          supplPayHandler={supplPayHandler}
          signaturePayHandler={signaturePayHandler}
          agreed={agreed}
          drive={drive}
          clPay={clPay}
          suppl={suppl}
          stutus={stutus}
          delta={delta}
        />
      </div>
    </>
  );
}

export default ContractString;
