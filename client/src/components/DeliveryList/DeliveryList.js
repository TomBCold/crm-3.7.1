import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { getAllForwardersFromServer } from '../../redux/ac/forwardersAc';
import { getAllDriversFromServer } from '../../redux/ac/driverAc';
// import delCss from './del.module.css';

import DeliveryItem from '../DeliveryItem/DeliveryItem';

export default function DeliveryList() {
  const drivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDriversFromServer());
  }, []);
  console.log(drivers);

  const forwarders = useSelector((state) => state.forwarders);
  useEffect(() => {
    dispatch(getAllForwardersFromServer());
  }, []);
  console.log('=====', forwarders);
  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ maxWidth: '100%' }} item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Тут будет поиск
        </Typography>
        {/* <div className={delCss.container}>
          <div className={delCss.column}> */}
        <List>
          Водители
          {drivers.map((el) => (
            <DeliveryItem
              key={el.id}
              el={el}
              car={el.CarType.title}
            />
          ))}
        </List>
        {/* </div>
          <div className={delCss.column}> */}
        <List>
          Экспедиторы
          {forwarders.map((elem) => (
            <DeliveryItem
              key={elem.id}
              el={elem}
            />
          ))}
        </List>
        {/* </div>
        </div> */}
      </Grid>
    </Box>
    // <div>
    //   <ul className="list-group my-3">
    //  {drivers.map((drive, index) => <DeliveryItem key={drive.id} index={index} drive={drive} />)}
    //   </ul>
    //   <ul className="list-group my-3">
    //     {forwarders.map((forwarder, index) => (
    //       <DeliveryItem
    //         key={forwarder.id}
    //         index={index}
    //         forwarder={forwarder}
    //       />
    //     ))}
    //   </ul>
    // </div>

  );
}
