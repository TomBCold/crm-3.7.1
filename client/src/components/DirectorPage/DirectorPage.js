import {
  Avatar, Container, Grid, Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { ListGroupItem } from 'reactstrap';
import { getUsersThunk } from '../../redux/actions/usersAllAC';
import AddUser from '../AddUser/AddUser';

function DirectorPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: 30,
    color: theme.palette.text.secondary
  }));

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
  console.log(users);

  return (
    <>
      <Container>
        <Grid md={12}>
          <Item> Big Boss </Item>
        </Grid>
      </Container>
      <br />
      <br />
      <Container>
        <Grid
          container
          spacing={4}
          sx={{ height: 600 }}
        >
          <Grid item md={8}>
            Список всех сотрудников
            {users.map((el) => (
              // eslint-disable-next-line max-len
              <ListGroupItem key={el.id} id={el.id} name={el.name} photo={el.photo} telephone={el.telephone}>
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
    </>

  );
}

export default DirectorPage;
