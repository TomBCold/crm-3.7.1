import React, { useState } from 'react';
import {
  Avatar, CardContent, Container, Grid, Paper, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Charts from '../Charts/Charts';
import Piee from '../Piee/Piee';

// eslint-disable-next-line import/no-extraneous-dependencies

function UserPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  // const [avatar, setAvatar] = useState(null);

  const sendFile = React.useCallback(async () => {
    try {
      const data = new FormData();
      data.append('file', img);
      data.append('id', user.id);
      await axios.post('/avatar', data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
        .then((res) => {
          // setAvatar(res.data.path.slice(6));
          dispatch({ type: 'CHANGE_USER', payload: res.data.path.slice(6) });
        });
    } catch (err) {
      console.log(err);
    }
  }, [img]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',

    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#0D1B42',
    fontWeight: 'bolder'
  }));
  return (
    <>
      <Container style={{ marginTop: 60 }}>
        <Grid
          container
          spacing={4}
          sx={{ height: 400 }}
        >
          <Grid item md={4}>
            <Avatar sx={{ width: 260, height: 260 }}>
              {
                user.photo
                  ? (
                    <img
                      style={{ width: 260, height: 260 }}
                      className="logo"
                      src={`http://localhost:3001/${user.photo}`}
                      alt="avatar"
                    />
                  )
                  : (
                    <img
                      className="logo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7mI0x_kfxX6yA3HkKDu897-ofpEr6QmMiQ&usqp=CAU"
                      alt="avatar"
                    />
                  )
              }
            </Avatar>
            <div>
              <input type="file" onChange={(e) => setImg(e.target.files[0])} />
              <button type="button" className="btn" onClick={sendFile}>Изменить аватар</button>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2} style={{ marginTop: 20 }}>
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
          <Grid item xs={7}>
            <CardContent>
              <Typography variant="h6" component="div" style={{ marginBottom: 20, color: '#0D1B42', fontWeight: 'bolder' }}>
                Статиститка за год
              </Typography>

              <Charts />
            </CardContent>
          </Grid>
          <Grid item xs={4}>
            <CardContent>
              <Typography variant="h6" component="div" style={{ marginBottom: 20, color: '#0D1B42', fontWeight: 'bolder' }}>
                Продажи вэтом месяце
              </Typography>

              <Piee />
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UserPage;
