import {
  Avatar, Container, Grid, Paper, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { ListGroupItem } from 'reactstrap';
import { getUsersThunk } from '../../redux/actions/usersAllAC';
import AddUser from '../AddUser/AddUser';
// import Header from '../Header/Header';

function DirectorPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: 30,
    color: '0D1B42',
    borderRadius: 25
  }));

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    <Container style={{ backgroundColor: '#F5F5F5' }}>

      <Container style={{ marginTop: 60, backgroundColor: '#F5F5F5' }}>
        <Grid md={12}>
          <Item> Big Boss </Item>
        </Grid>
      </Container>
      <Container style={{ marginTop: 60, backgroundColor: '#F5F5F5' }}>
        <Grid
          container
          spacing={4}
          sx={{ height: 600 }}
        >
          <Grid item md={8}>
            <Typography variant="h5" component="div" style={{ marginBottom: 20, color: '0D1B42' }}>
              Список всех сотрудников
            </Typography>
            {users.map((el) => (
              // eslint-disable-next-line max-len
              <ListGroupItem
                style={{ color: '0D1B42', borderRadius: 25 }}
                key={el.id}
                id={el.id}
                name={el.name}
                photo={el.photo}
                telephone={el.telephone}
              >
                <Avatar
                  alt="Avatar"
                  src={el.photo}
                />
                <item>
                  {' '}
                  {el.name}
                  {' '}
                </item>
                <item>
                  {' '}
                  {el.telephone}
                  {' '}
                </item>

              </ListGroupItem>
            ))}

          </Grid>
          <Grid item md={4}>
            <AddUser />
          </Grid>
        </Grid>

      </Container>
    </Container>

  );
}

export default DirectorPage;
