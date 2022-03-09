import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import {
  Avatar,
  IconButton, List, ListItemButton, Stack
} from '@mui/material';
import ModalDeleteDr from '../ModalDeleteDr/ModalDeleteDr';

function DeliveryItem({ el, index }) {
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
        <ListItemText primary={el.CarType.title}>{el.CarType.title}</ListItemText>
        <IconButton edge="end" aria-label="delete">
          <ModalDeleteDr el={el} />
        </IconButton>
      </ListItemButton>
    </List>
  );
}

export default DeliveryItem;
