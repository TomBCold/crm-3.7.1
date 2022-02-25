import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

function ClientItem({
  id, userName, name, inn, telephone
}) {
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
      <ListItemText primary={name}>{name}</ListItemText>
      <ListItemText primary={inn}>{inn}</ListItemText>
      <ListItemText primary={telephone}>{telephone}</ListItemText>
      <ListItemText primary={userName}>{userName}</ListItemText>
    </ListItem>
  );
}

export default ClientItem;
