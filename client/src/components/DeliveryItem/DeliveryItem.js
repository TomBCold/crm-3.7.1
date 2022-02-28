import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import {
  Avatar,
  IconButton, List, ListItemButton, Stack
} from '@mui/material';
import ModalDelete from '../ModalDelete/ModalDelete';

function DeliveryItem({ el, car }) {
  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 5 }}>
        <Stack direction="row" spacing={2}>
          <Avatar src="/broken-image.jpg" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Stack>

        <ListItemText primary={el.id}>{el.id}</ListItemText>
        <ListItemText primary={el.name}>{el.name}</ListItemText>
        <ListItemText primary={el.telephone}>{el.telephone}</ListItemText>
        <ListItemText primary={car}>{car}</ListItemText>
        <IconButton edge="end" aria-label="delete">
          <ModalDelete el={el} />
        </IconButton>
      </ListItemButton>
    </List>
  );
}

export default DeliveryItem;
