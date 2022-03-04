import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import {
  Divider, InputBase, Paper, Typography
} from '@mui/material';
import DeliveryListFor from '../DeliveryListFor/DeliveryListFor';
import { getAllDriversFromServer } from '../../redux/actions/driverAc';
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import ModalDr from '../ModalDr/ModalDr';

export default function DeliveryList() {
  const [input, setInput] = useState('');

  const drivers = useSelector((state) => state.drivers);
  const filterDriver = drivers.filter((driver) => driver.name.toLowerCase()
    .includes(input.toLowerCase()) || driver.CarType.title.toLowerCase()
    .includes(input.toLowerCase()) || driver.telephone
    .includes(input));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDriversFromServer());
  }, []);
  const [openDr, setOpenDr] = React.useState(false);

  const handleClickDr = () => {
    setOpenDr(!openDr);
  };

  return (
    <>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={(
          <Typography variant="h6" component="div" style={{ marginBottom: 20, color: '#0D1B42' }}>
            Список водителей
          </Typography>
        )}
      >

        <ListItemButton onClick={handleClickDr}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Водители" />
          {openDr ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openDr} timeout="auto" unmountOnExit>
          <ModalDr />
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
          {filterDriver.map((el, index) => (
            <DeliveryItem
              index={index + 1}
              key={el.id}
              el={el}
            />
          ))}
        </Collapse>

      </List>
      <DeliveryListFor />
    </>
  );
}
