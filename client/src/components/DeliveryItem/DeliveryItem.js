import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

function DeliveryItem({ el, car }) {
  console.log(el);
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
      <ListItemText primary={el.id}>{el.id}</ListItemText>
      <ListItemText primary={el.name}>{el.name}</ListItemText>
      <ListItemText primary={el.telephone}>{el.telephone}</ListItemText>
      <ListItemText primary={car}>{car}</ListItemText>
    </ListItem>
  );
}

export default DeliveryItem;
