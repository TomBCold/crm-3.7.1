import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import {
  Avatar,
  IconButton, List, ListItemButton, Stack
} from '@mui/material';
import ModalDeleteFor from '../ModalDelete/ModalDeleteFor';

function DeliveryItemFor({ el, index }) {
  console.log(el);
  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 5 }}>
        <Stack direction="row" spacing={2}>
          <Avatar src="/broken-image.jpg" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Stack>

        <ListItemText primary={index}>{index}</ListItemText>
        <ListItemText primary={el.name}>{el.name}</ListItemText>
        <ListItemText primary={el.telephone}>{el.telephone}</ListItemText>
        <IconButton edge="end" aria-label="delete">
          <ModalDeleteFor el={el} />
        </IconButton>
      </ListItemButton>
    </List>
  );
}

export default DeliveryItemFor;
