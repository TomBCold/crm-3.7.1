import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import React from 'react';
import { useSelector } from 'react-redux';
import ModalFor from '../ModalFor/ModalFor';
import DeliveryItemFor from '../DeliveryItemFor/DeliveryItemFor';

function DeliveryListFor() {
  const forwarders = useSelector((state) => state.forwarders);
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
