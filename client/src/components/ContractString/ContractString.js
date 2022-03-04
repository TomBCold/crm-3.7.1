/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { delContract } from '../../redux/actions/contractAC';
import ContractFull from '../ContractFull/ContractFull';
import style from './ContractString.module.css';

function ContractString(
  {
    id,
    clientName,
    clientId,
    statusApprove,
    statusExport,
    statusPackage,
    statusPaymentClient,
    statusPaymentSupplier,
    statusSignature,
    userName,
    driverName,
    forwarderName,
    clientInvoices,
    supplierInvoices,
    upds
  }
) {
  const clientInvoicesSum = clientInvoices.reduce((sum, cur) => sum + cur.sum, 0);
  const supplierInvoicesSum = supplierInvoices.reduce((sum, cur) => sum + cur.sum, 0);
  const updsSum = upds.reduce((sum, cur) => sum + cur.sum, 0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(delContract(id));
  };
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
          <ListItemText primary={id}>{id}</ListItemText>
          <ListItemText primary={clientName}>{clientName}</ListItemText>
          <ListItemText primary={statusApprove}>{statusApprove}</ListItemText>
          <ListItemText primary={statusExport}>{statusExport}</ListItemText>
          <ListItemText primary={statusPackage}>{statusPackage}</ListItemText>
          <ListItemText primary={statusPaymentClient}>{statusPaymentClient}</ListItemText>
          <ListItemText primary={statusPaymentSupplier}>{statusPaymentSupplier}</ListItemText>
          <ListItemText primary={statusSignature}>{statusSignature}</ListItemText>
          <ListItemText primary={clientInvoicesSum}>{clientInvoicesSum}</ListItemText>
          <ListItemText primary={supplierInvoicesSum}>{supplierInvoicesSum}</ListItemText>
          <ListItemText primary={updsSum}>{updsSum}</ListItemText>
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
        />
      </div>
    </>
  );
}

export default ContractString;
