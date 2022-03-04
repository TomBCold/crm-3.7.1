import React, { useEffect } from 'react';

// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { getAllDriversFromServer } from '../../redux/actions/driverAc';

import DeliveryItem from '../DeliveryItem/DeliveryItem';
import ModalDr from '../ModalDr/ModalDr';
import DeliveryListFor from '../DeliveryListFor/DeliveryListFor';

export default function DeliveryList() {
  const drivers = useSelector((state) => state.drivers);
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
          {drivers.map((el, index) => (
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
