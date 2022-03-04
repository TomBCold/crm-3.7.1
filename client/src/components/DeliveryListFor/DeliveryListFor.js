import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse, Divider, InputBase, List, ListItemButton,
  ListItemIcon, ListItemText, Typography, Paper
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllForwardersFromServer } from '../../redux/actions/forwardersAc';
import ModalFor from '../ModalFor/ModalFor';
import DeliveryItemFor from '../DeliveryItemFor/DeliveryItemFor';

function DeliveryListFor() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const forwarders = useSelector((state) => state.forwarders);
  console.log(forwarders);
  const filterForwarders = forwarders.filter((forwarder) => forwarder.name.toLowerCase()
    .includes(input.toLowerCase()) || forwarder.telephone
    .includes(input));

  useEffect(() => {
    dispatch(getAllForwardersFromServer());
  }, []);
  const [openFor, setOpenFor] = React.useState(false);

  const handleClickFor = () => {
    setOpenFor(!openFor);
  };
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={(
        <Typography variant="h6" component="div" style={{ marginBottom: 20, color: '#0D1B42' }}>
          Список экспедиторов
        </Typography>
      )}
    >

      <ListItemButton onClick={handleClickFor}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Экспедиторы" />
        {openFor ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openFor} timeout="auto" unmountOnExit>
        <ModalFor />
        <Paper
          style={{ 'margin-top': '1%' }}
          component="form"
          sx={{
            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'
          }}
        >

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Поиск"
            inputProps={{ 'aria-label': 'search google maps' }}
            input={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        {filterForwarders.map((elem, index) => (
          <DeliveryItemFor
            index={index + 1}
            key={elem.id}
            el={elem}
          />
        ))}
      </Collapse>

    </List>
  );
}

export default DeliveryListFor;
