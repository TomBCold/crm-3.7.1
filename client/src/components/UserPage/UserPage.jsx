/* eslint-disable react/self-closing-comp */
import * as React from 'react';

import {Button, Card, CardContent, Container, Grid, Paper, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Charts from '../Charts/Charts';
import Piee from '../Piee/Piee';
import AvatarComp from '../Header/AvatarComp/AvatarComp';

// eslint-disable-next-line import/no-extraneous-dependencies

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function UserPage() {
  return (
    <>

      <Container fixed>

        <Grid
          container
          spacing={4}
          sx={{ height: 400 }}
        >
          <Grid item md={4}>
            <AvatarComp />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <Item> Имя :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item md={5}>
                <Item> Должность :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item md={5}>
                <Item> Почта :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item md={5}>
                <Item> Телефон :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>xs=4</Item>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <Grid sm={{ border: 20 }}>
          <Button variant="outlined"> редактировать </Button>
        </Grid>
        <br></br>
        <br></br>
      </Container>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Item>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    статиститка за год
                  </Typography>
                  <Typography variant="body2">
                    <Charts />
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>

            <CardContent>

              статиститка

              <Piee />

            </CardContent>

          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default UserPage;
