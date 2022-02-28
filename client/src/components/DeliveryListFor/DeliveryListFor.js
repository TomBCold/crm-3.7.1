import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import { getAllForwardersFromServer } from '../../redux/actions/forwardersAc';
import ModalFor from '../ModalFor/ModalFor';

function DeliveryListFor() {
  const dispatch = useDispatch();
  const forwarders = useSelector((state) => state.forwarders);
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
        <ListSubheader component="div" id="nested-list-subheader">
          Список экспедиторов
        </ListSubheader>
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
        {forwarders.map((elem, index) => (
          <DeliveryItem
            index={index}
            key={elem.id}
            el={elem}
          />
        ))}
      </Collapse>

    </List>
  );
}

export default DeliveryListFor;
