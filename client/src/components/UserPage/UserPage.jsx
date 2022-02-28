/* eslint-disable react/self-closing-comp */
import * as React from 'react';

import {
  Avatar, Container, Grid, Paper
} from '@mui/material';
import Header from '../Header/Header';
// eslint-disable-next-line import/no-extraneous-dependencies

function UserPage() {
  return (
    <>
      <Header />

      <Paper>
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item md={6}>

              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 260, height: 260 }}
              >

              </Avatar>

            </Grid>
            <Grid item md={6}>
              ll
              hhh
              hhh
              hhh
              hhh
              hhh
              hhh
              hhh
              hhh
              hhh
              hhh
              hh

            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default UserPage;
