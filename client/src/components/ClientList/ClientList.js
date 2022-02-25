import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import ClientItem from '../ClientItem/ClientItem';

export default function ClintList() {
  const clients = useSelector((state) => state.clients);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Тут будет поиск
        </Typography>
        <List sx={{ width: '100%' }}>
          {clients.map((el) => (
            <ClientItem
              key={el.id}
              id={el.id}
              userName={el.User.name}
              name={el.name}
              inn={el.inn}
              telephone={el.telephone}
            />
          ))}
        </List>
      </Box>
    </div>
  );
}
