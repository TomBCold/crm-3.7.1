import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

function ContractString(
  {
    id,
    clientName,
    statusApprove,
    statusExport,
    statusPackage,
    statusPaymentClient,
    statusPaymentSupplier,
    statusSignature,
    userName,
    // driverName,
    // forwarderName,
    clientInvoices,
    supplierInvoices,
    upds
  }
) {
  const clientInvoicesSum = clientInvoices.reduce((sum, cur) => sum + cur.sum, 0);
  const supplierInvoicesSum = supplierInvoices.reduce((sum, cur) => sum + cur.sum, 0);
  const updsSum = upds.reduce((sum, cur) => sum + cur.sum, 0);
  return (
    <ListItem
      secondaryAction={(
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      )}
    >
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
    </ListItem>
  );
}

export default ContractString;
