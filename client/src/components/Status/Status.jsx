import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Status() {
  const [drive, setDrive] = useState(false);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>

          <SentimentSatisfiedAltIcon fontSize="large" color="success" />

        </ListItemAvatar>
        <ListItemText primary="Согласовано" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>

          {drive ? <LocalShippingIcon fontSize="large" color="success" /> : <LocalShippingIcon fontSize="large" /> }
        </ListItemAvatar>
        {/* eslint-disable-next-line no-return-assign  */}
        {drive ? <ListItemText onClick={() => setDrive((prev) => !prev)} primary="Вывезли" /> : <ListItemText onClick={() => setDrive((prev) => !prev)} primary="Не вывезли" /> }
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}

export default Status;
