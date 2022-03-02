/* eslint-disable react/self-closing-comp */
import * as React from 'react';

import {
  Avatar, Card, CardActions, CardContent, Container, Grid, Paper, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function UserPage() {
  const user = useSelector((state) => state.user);
  console.log(user['Role.title']);

  return (
    <>

      <Container fixed>

        <Grid
          container
          spacing={4}
          sx={{ height: 400 }}
        >
          <Grid item md={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7mI0x_kfxX6yA3HkKDu897-ofpEr6QmMiQ&usqp=CAU"
              sx={{ width: 260, height: 260 }}
            >
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <Item> Имя :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>{user.name}</Item>
              </Grid>
              <Grid item md={5}>
                <Item> Должность :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>{user['Role.title']}</Item>
              </Grid>
              <Grid item md={5}>
                <Item> Почта :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>{user.email}</Item>
              </Grid>
              <Grid item md={5}>
                <Item> Телефон :</Item>
              </Grid>
              <Grid item md={7}>
                <Item>{user.telephone}</Item>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Container>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    тут будет
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    статиститка
                  </Typography>
                  <Typography variant="body2">
                    .
                  </Typography>
                </CardContent>
                <CardActions>

                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>и тут статистика за год</Item>

          </Grid>
        </Grid>

      </Container>

    </>
  );
}

export default UserPage;
